const merge = require('webpack-merge');
const base = require('./webpack.base');
const { resolve } = require('./utils');

module.exports = merge(base, {
  mode: 'production',
  output: {
    path: resolve('../lib'),
    filename: 'vue-layui.common.js',
    libraryExport: 'default',
    library: 'vueLayui',
    libraryTarget: 'commonjs2'
  }
});
