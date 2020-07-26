module.exports = {
  extends: 'prettier/babel',
  plugins: ['babel'],
  env: {
    es6: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      classes: true
    },
    sourceType: 'module',
  }
}
