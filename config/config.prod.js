'use strict';

const path = require('path');
function getMainfest() {
  try {
    const mainfestFile = path.join(__dirname, '../build/manifest.json');
    if (fs.existsSync(mainfestFile)) {
      const raw = fs.readFileSync(mainfestFile);
      return JSON.parse(raw);
    }
  } catch (e) {
    return {};
  }
}
module.exports = {
  keys: 'secret',
  manifest: getMainfest(),
  static: {
    prefix: '/build',
    dir: path.join(__dirname, '../build'),
  },
  webpack: {
    custom: {
      configPath: path.resolve(__dirname, './webpack.pro.config.js'),
    },
    resolve: {
      extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
      alias: {
        client: path.join(__dirname, '../client')
      },
    },
  }
};
