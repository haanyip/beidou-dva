const path = require('path');
var ManifestPlugin = require('webpack-manifest-plugin');
module.exports = (app, defaultConfig) => {
  
  defaultConfig.output.filename ='[name].[hash].js'
  defaultConfig.output.chunkFilename ='[name].[hash].js'
  defaultConfig.plugins.push(new ManifestPlugin({
    fileName: 'manifest.json',
    manifestVariable: "webpackManifest",
    writeToFileEmit: true,
    publicPath: '/'
  }))
  return defaultConfig;
}