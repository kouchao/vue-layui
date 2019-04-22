module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/recommended', 'standard'],
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 关闭语句强制分号结尾
    'semi': [2, 'always'],
    // 两个空行
    'indent': ['error', 2],
    // 判断无等号
    'padded-blocks': 0,
    'no-useless-escape': 0,

    // 全等于
    eqeqeq: 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
