module.exports = {
  presets: [
    [
      '@babel/env',
      {
        loose: true,
        modules: false,
        targets: {
          browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
        }
      }
    ]
  ],
  plugins: ['@babel/transform-runtime']
};
