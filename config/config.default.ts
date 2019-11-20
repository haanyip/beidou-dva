'use strict';
import path from 'path';
// import  fs  from 'fs';
// function getMainfest() {
//   try {
//     const mainfestFile = path.join(__dirname, '../build/manifest.json');
//     if (fs.existsSync(mainfestFile)) {
//       const raw = fs.readFileSync(mainfestFile);
//       return JSON.parse(raw);
//     }
//   } catch (e) {
//     console.dir('not read manifest.json')
//     return {};
//   }
// }

module.exports = {
  keys: 'secret',
  version: '1.0.0',
  react: {
    static: true,
  },
  // manifest: getMainfest(),
  middleware: [ 'gzip' ],
  // 配置 gzip 中间件的配置
  gzip: {
    threshold: 1024, // 小于 1k 的响应体不压缩
  },
  view: {
    defaultExtension: '.tsx'
  },
  // 七牛云服务配置
  cos: {
    secretId: "AKID81e7j5L0ZrXJ1dwC9xfbJo8E7k9Ju1Z0", //用户的 SecretId
    secretKey: "LjvvgEYfbKoFUVN2TcWAbnkU0O2YyHLK", //用户的 SecretKey
    bucket: "h5-1257626720", // 存储桶的名称，命名规则为 BucketName-APPID，此处填写的存储桶名称必须为此格式
    region: "ap-guangzhou"
  },
  security: {
    csrf: false,
  },
  webpack: {
    // custom: {
    //   configPath:require.resolve(path.resolve(__dirname, './webpack.config'))
    // },
    resolve: {
      extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
      alias: {
        client: path.join(__dirname, '../client')
      },
    },
  }
};
