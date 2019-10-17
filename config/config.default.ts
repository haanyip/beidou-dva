'use strict';
import path from 'path';
import  fs  from 'fs';

function getMainfest() {
  try {
    const mainfestFile = path.join(__dirname, '../build/manifest.json');
    if (fs.existsSync(mainfestFile)) {
      const raw = fs.readFileSync(mainfestFile);
      return JSON.parse(raw);
    }
  } catch (e) {
    console.dir('not read manifest.json')
    return {};
  }
}

module.exports = {
  keys: 'secret',
  version: '1.0.0',
  react: {
    static: true,
  },
  manifest: getMainfest(),
  middleware: [ 'gzip' ],
  // 配置 gzip 中间件的配置
  gzip: {
    threshold: 1024, // 小于 1k 的响应体不压缩
  },
  // view: {
  //   defaultExtension: '.tsx'
  // },
  // 七牛云服务配置
  qiniu: {
    ak: 'lRE33crv3fQ4v3pZu4s3vAMA4i9nKk-B24G3JcBE',
    sk: 'kuBNPz9V_yOWh4L1egS6TAAhrS2vI0nSzmWHnV9a',
    bucket: 'files',
    baseUrl: 'http://hudongliang.iok.la:31519',
    zone: 'Zone_z0',
    app: true,
    agent: false,
  },
  security: {
    csrf: false,
  },
  webpack: {
    custom: {
      configPath:require.resolve(path.resolve(__dirname, './webpack.config'))
    },
    resolve: {
      extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
      alias: {
        client: path.join(__dirname, '../client')
      },
    },
  }
};
