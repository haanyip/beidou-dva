import { Service } from 'egg';
import path from 'path';
import webpack from 'webpack';
import moment from 'moment';
import UUid from 'uuid';
const tsImportPluginFactory = require('ts-import-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const fs = require("fs");

class PreviewService extends Service {
  constructor(props) {
    super(props);
  }
  previewMobile(previewData) {
    return this.webpackCompiler(true, previewData);
  } 
  previewPc(previewData) {
    return this.webpackCompiler(false, previewData);
  }
  getRules(isMobile:boolean = true) {
    const postcssOpts = isMobile? {
      ident: 'postcss', 
      plugins: () => [
        require('postcss-flexbugs-fixes'),
        autoprefixer({
          flexbox: 'no-2009',
        }),
        pxtorem({ rootValue: 100, propWhiteList: [] })
      ],
    }:{
      ident: 'postcss', 
      plugins: () => [
        require('postcss-flexbugs-fixes'),
        autoprefixer({
          flexbox: 'no-2009',
        }),
      ],
    };
    return [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
          getCustomTransformers: () => ({
            before: [tsImportPluginFactory({
              libraryDirectory: 'es',
              libraryName: isMobile? 'antd-mobile': 'antd',
              style: true,
            })]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        },
      },
      {
        test: /\.less$/i,
        exclude: /\.m(odule)?\.less$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              minimize: true,
              sourceMap: false,
            },
          },
          { loader: 'postcss-loader', options: postcssOpts }, 
          {loader: 'less-loader', options: {modifyVars: {hd: '2px'}}},
        ] 
      },
      {
        test: /\.m(odule)?\.less$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              minimize: true,
              sourceMap: false,
              modules: true,
              localIdentName: '[local]_[hash:base64:5]',
            },
          },
          { loader: 'postcss-loader', options: postcssOpts }, 
          { loader: 'less-loader', options: {modifyVars: {'@hd': '2px'}} },
        ] 
      },
      {
        test: /\.css$/i, 
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              minimize: true,
              sourceMap: false,
              localIdentName: '[local]_[hash:base64:5]',
            },
          },
          { loader: 'postcss-loader', options: postcssOpts }, 
        ]
      }
    ]
  }
  async webpackCompiler(isMobile:boolean = true, previewData) {
    const uid = UUid.v1();
    const entry  = isMobile ? '../../client/serviceTemplate/mobile.tsx': '../../client/serviceTemplate/pc.tsx'
    const outputPath = isMobile ? `../public/dist/mobile/${uid}`: `../public/dist/pc/${uid}`;
    const template = isMobile ? '../../client/serviceTemplate/mobile.html': '../../client/serviceTemplate/pc.html';
    const rules = this.getRules(isMobile);
     
    await new Promise((resolve, reject)=>{
      webpack({ 
        mode: 'production',
        entry: path.join(__dirname, entry),
        output: {
          path: path.join(__dirname, outputPath),
          filename: '[name].[hash].js',
        },
        module: {
          rules: rules
        },
        resolve: {
          extensions: ['.js', '.jsx', '.less', '.scss', '.css', '.tsx'],
          alias: {
            client: path.join(__dirname, '../../client')
          },
        },
        optimization: {
          splitChunks: {
            chunks: 'all',
            name: 'manifest',
            cacheGroups: {
              default: false,
              vendors: false,
              manifest: {
                test: /[\\/]node_modules[\\/]/,
              },
            },
          },
          noEmitOnErrors: true,
        },
        plugins: [
          // 指定一个html模版，
          new HtmlWebpackPlugin({
            componentList: JSON.stringify(previewData),
            template: path.join(__dirname, template),
            filename: 'index.html',
            minify: { // 压缩HTML文件
              removeComments: true, // 移除HTML中的注释
              collapseWhitespace: true, // 删除空白符与换行符
              minifyCSS: true// 压缩内联css
            },
  
          }),
          // 将css写入css文件，并注入html模版
          new MiniCssExtractPlugin({
            filename:  '[name].[hash].css',
            chunkFilename: '[name].[hash].css',
          }),
          new webpack.optimize.ModuleConcatenationPlugin(),
          new CleanWebpackPlugin(),
        ],
      }, (err, stats) => {
        if (err) {
          reject(err);
        }
        // console.log(stats.toString({
        //   chunks: false,  // 使构建过程更静默无输出
        //   colors: true    // 在控制台展示颜色
        // }));
        resolve(stats)
      })
    })
    const res = fs.readdirSync(path.join(__dirname, outputPath));
    const uploadList = []
    res.map(item=>{
      uploadList.push(this.app.qiniu.putFile(path.join(__dirname, outputPath, item), { filename: item, dir: isMobile?`mobile/${uid}/`:`pc/${uid}/` , uuid: false }))
    })
    return Promise.all(uploadList);
   
  }
}
module.exports = PreviewService;