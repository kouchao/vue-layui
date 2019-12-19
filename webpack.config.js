const merge = require('webpack-merge');
const baseConfig = require('./build/webpack.base.js');
const devConfig = require('./build/webpack.dev.js');
const proConfig = require('./build/webpack.pro.js');
const demoConfig = require('./build/webpack.demo.js');

const getConfig = (env) => {
  console.log(env);
  if (env === 'demo') {
    return merge(baseConfig, demoConfig);
  } else if (env === 'pro') {
    return merge(baseConfig, proConfig);
  } else {
    return merge(baseConfig, devConfig);
  }
};
module.exports = getConfig(process.env.NODE_ENV);
