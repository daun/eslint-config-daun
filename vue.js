module.exports = {
  extends: [
    'prettier/vue',
    'plugin:vue/essential'
  ],
  rules: {
    'no-irregular-whitespace': 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase']
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint'
  }
};
