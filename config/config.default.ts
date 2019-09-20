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
    ak: 'YGmMh1K9fVVf77Ry6RGKLajeqErxwcZyTR1AYHld',
    sk: 'az5IPgfDJx2fQco5w5cvyKDPaRN86a4IrEwRtYyb',
    bucket: 'igola-dev-files',
    baseUrl: 'http://devcontent.igola.com',
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
