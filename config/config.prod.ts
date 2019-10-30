'use strict';

const path = require('path');

module.exports = appInfo => ({
  keys: 'key',
  static: {
    dir: [
      {
        prefix: '/build',
        dir: path.join(appInfo.baseDir, '/build'),
      },
    ],
  },
});
