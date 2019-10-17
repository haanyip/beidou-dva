import { Controller } from 'egg';
import path from 'path';
import webpack from 'webpack';
import moment from 'moment';
const tsImportPluginFactory = require('ts-import-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
class PreviewController extends Controller {
  constructor(ctx) {
    super(ctx);
  }

  async index() {
    const { ctx } = this;
    const postcssOpts = {
      ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
      plugins: () => [
        require('postcss-flexbugs-fixes'),
        autoprefixer({
          // browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
          // please set browserslist in package.json
          flexbox: 'no-2009',
        }),
        pxtorem({ rootValue: 100, propWhiteList: [] })
      ],
    };
    const startTime = moment();
    webpack({ 
      mode: 'production',
      entry: path.join(__dirname, '../../client/serviceTemplate/index.tsx'),
      output: {
        path: path.join(__dirname, '../public/dist'),
        filename: '[name].[hash].js',
      },
      module: {
        rules: [
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
                  libraryName: 'antd-mobile',
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
              'less-loader'
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
              'less-loader'
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
          template: path.join(__dirname, '../../client/serviceTemplate/index.html'),
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
        new webpack.optimize.ModuleConcatenationPlugin({})
      ],
    }, (err, stats) => {
      const diffTime = moment().diff(startTime, 's');
      console.log('=============================');
      console.log(diffTime)
      if (err) {
        console.error(err);
        return;
      }
    
      console.log(stats.toString({
        chunks: false,  // 使构建过程更静默无输出
        colors: true    // 在控制台展示颜色
      }));
    })
    ctx.body ={
      code: 200
    }
  }
}


module.exports = PreviewController;