const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { DefinePlugin } = require('webpack');
const vueMarkdown = require('./markdown');
const { resolve } = require('./utils');

module.exports = {
  mode: 'production',
  entry: {
    main: resolve('../examples/doc/main.js')
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: resolve('../dist'),
    chunkFilename: 'js/[name].[hash:8].js'
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
    new DefinePlugin({
      'process.env': {
        BASE_URL: JSON.stringify('/')
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css',
      ignoreOrder: false
    }),
    new HtmlWebpackPlugin({
      template: resolve('../public/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      }
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: { removeAll: true }
      }
    })
  ]
};
