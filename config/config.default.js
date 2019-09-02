'use strict';
const path = require('path');
const fs = require('fs');



module.exports = {
  keys: 'secret',
  version: '1.0.0',
  react: {
    static: true,
  },
  middleware: [ 'gzip' ],
  // 配置 gzip 中间件的配置
  gzip: {
    threshold: 1024, // 小于 1k 的响应体不压缩
  },
  webpack: {
    // custom: {
    //   configPath: path.resolve(__dirname, './webpack.config.js'),
    // },
    resolve: {
      extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
      alias: {
        client: path.join(__dirname, '../client')
      },
    },
  }
};
