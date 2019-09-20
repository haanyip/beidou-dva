
const path = require('path');
var ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = (app, defaultConfig) => {
  // defaultConfig.output.filename ='[name].[hash].js'
  // defaultConfig.output.chunkFilename ='[name].[hash].js'
  // defaultConfig.plugins.push(new ManifestPlugin({
  //   fileName: 'manifest.json',
  //   manifestVariable: "webpackManifest",
  //   writeToFileEmit: true,
  //   publicPath: '/'
  // }))
  // defaultConfig.plugins.push(new CopyWebpackPlugin([
  //   {
  //     from: path.join(__dirname, '../client/assets/ueditor'), 
  //     to: path.join(__dirname, '../build')
  //   }
  // ]))
  return defaultConfig;
}
// import { Configuration } from 'webpack';
// // const pxtorem = require('postcss-pxtorem');
// // const autoprefixer = require('autoprefixer');
// import webpack from 'webpack'
// export default (app, defaultConfig, dev ): Configuration => {  
//   defaultConfig.devtool = 'source-map';
//   defaultConfig.plugins.push(new webpack.LoaderOptionsPlugin({
//     options: {
//       postcss: [require('postcss-px2rem')({remUnit: 100})]
//           // postcss: [require('postcss-px2rem')({ rootValue: 100, propWhiteList: [] })]
//     }
//   }))
 
//   return defaultConfig;
// };
// import path from 'path';
// const pxtorem = require('postcss-pxtorem');
// const autoprefixer = require('autoprefixer');
// // import webpack from 'webpack'
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const postCssLoaderConfig = {
//   loader: require.resolve('postcss-loader'),
//   options: {
//     // Necessary for external CSS imports to work
//     ident: 'postcss',
//     plugins: () => [
//       require('postcss-flexbugs-fixes'),
//       autoprefixer({
//         // browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
//         flexbox: 'no-2009',
//       }),
//       // pxtorem({ rootValue: 100, propWhiteList: [] }),
//     ],
//   },
// };


// function getCssLoaderConfig(dev, modules = false) {
//   return {
//     loader: require.resolve('css-loader'),
//     options: {
//       importLoaders: 1,
//       minimize: !dev,
//       sourceMap: dev,
//       modules,
//       localIdentName: modules ? '[local]_[hash:base64:5]' : undefined,
//     },
//   };
// }


// const getStyleFallbackConfig = dev => ({
//   loader: require.resolve('style-loader'),
//   options: {
//     hmr: dev,
//   },
// });
// const lessLoaderConfig = {
//   loader: require.resolve('less-loader'),
//   options: {
//     javascriptEnabled: true
//   },
// };

// module.exports = (app, defaultConfig, dev, target) => {
  // const { theme } = app.config.pkg
  // const { cssExtract } = app.config.webpack.custom
  // const factory = app.webpackFactory;
  // const extractLoader = { loader: MiniCssExtractPlugin.loader,
  //   options: {
  //     hmr: dev,
  //   },
  // };
  // const styleLoader = {
  //   loader: require.resolve('style-loader'),
  //   options: {
  //     hmr: dev,
  //   },
  // };
  // const defaultLoader = cssExtract ? extractLoader : styleLoader;
  // factory.addRule({
  //   test: /\.less$/,
  //   exclude: /\.m(odule)?\.less$/,
  //   use: [
  //     defaultLoader,
  //     getCssLoaderConfig(dev),
  //     postCssLoaderConfig,
  //     lessLoaderConfig,
  //   ],
  // });
  // defaultConfig.plugins.push(new webpack.LoaderOptionsPlugin({
  //   react: {
  //     postcss: [require('postcss-px2rem')({ rootValue: 100, propWhiteList: [] })]
  //   }
  // }))
  // return defaultConfig;
// }