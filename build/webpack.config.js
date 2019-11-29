const { resolve } = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin, NamedModulesPlugin, HotModuleReplacementPlugin } = require('webpack');
const vueMarkdown = require('./markdown');
const merge = require('webpack-merge');
const base = require('./webpack.base');

module.exports = merge(base, {
  mode: 'development',
  entry: {
    main: resolve('../examples/doc/main.js')
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: resolve('dist'),
    chunkFilename: 'js/[name].[hash:8].js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    port: 3000,
    contentBase: './dist'
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js',
      '@': resolve('../src')
    }
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
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
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
    }),
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin()
  ]
});
