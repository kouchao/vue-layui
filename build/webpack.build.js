const merge = require('webpack-merge');
const base = require('./webpack.base');
const { resolve } = require('./utils');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = merge(base, {
  mode: 'production',
  output: {
    path: resolve('../lib'),
    filename: 'vue-layui.common.js',
    libraryExport: 'default',
    library: 'vueLayui',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'vue-layui.css',
      ignoreOrder: false
    })
  ]
});

// const fs = require('fs');

// fs.writeFileSync('1.json', JSON.stringify(config));
// console.dir(config);
module.exports = config;
