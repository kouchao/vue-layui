const { resolve } = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const vueMarkdown = require('./markdown');
const merge = require('webpack-merge');
const base = require('./webpack.base');

module.exports = merge(base, {
  mode: 'production',
  entry: {
    main: resolve('../src/main.js')
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: resolve('../dist'),
    chunkFilename: 'js/[name].[hash:8].js',
    publicPath: 'http://cdn.jskou.com/'
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          },
          {
            loader: 'vue-markdown-loader/lib/markdown-compiler',
            options: vueMarkdown
          }
        ]
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        BASE_URL: JSON.stringify('/')
      }
    }),
    new HtmlWebpackPlugin({
      template: resolve('../public/index.html')
    })
  ]
});
