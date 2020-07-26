# ESLint and Prettier Setup

ESLint and prettier rules for my personal projects.

## Installation

Install [eslint](https://github.com/eslint/eslint) and this module in your
project's `devDependencies`:

```bash
npm install --save-dev eslint eslint-config-daun
```

## Usage

Extend the main config from your `.eslintrc.js`:

```js
module.exports = {
  extends: 'daun',
  rules: {
    // your overrides
  }
}
```

### Other configs

This config also exposes a few other configs that can be pulled in as needed.

You can use them standalone:

```js
module.exports = {
  extends: 'daun/<config-name>',
}
```

Or in combination with the base config (recommended):

```js
module.exports = {
  extends: ['daun', 'daun/<config-name>'],
}
```

### Peer dependencies

We need to patch ESLint to recognize the associated plugins without having to
install them as local dependencies. See
[this bug](https://github.com/eslint/eslint/issues/3458) for details.

Add this to the top of your `.eslintrc.js`:

```js
// Patch ESLint module resolution to find shared configs' plugins
require('eslint-config-daun/eslint-patch/module-resolution')

module.exports = {
  extends: ['daun']
}
```

- `babel-module`:
  [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver)
  for the import plugin to work with the module-resolver babel plugin
  (_eslint-plugin-import_ and _eslint-import-resolver-babel-module_)
- `jest`: [jest](http://facebook.github.io/jest/) testing framework
- `vue`: [Vue](https://www.npmjs.com/package/vue) JS library
  (_eslint-plugin-react_)
- `webpack`: [Webpack](https://npmjs.com/package/webpack) for the import plugin
  to work with webpack overloaded imports/requires (_eslint-plugin-import_,
  _eslint-import-resolver-alias_ and _eslint-import-resolver-webpack_)

### Things to know

- The default config uses `babel-eslint` to support stage features that ESLint
  doesn't support and it opts to use the `eslint-plugin-babel` rules over the
  ESLint rules to support rules for these features as well.
- All plugins needed for rules used by these configs are dependencies of this
  module so you don't have to install anything on your own.
- The default config actually is composed of several configurations and you can
  use those individually. These are the configs it's using:
  `possible-errors.js`, `best-practices.js`, `stylistic.js`, `es6/index.js`, and
  `import/index.js`. Also, the `es6` and `import` configs each have a
  `possible-errors.js`, `best-practices.js`, and `stylistic.js` which they are
  composed of as well.

#### Example of customized config

```js
module.exports = {
  extends: [
    'daun/possible-errors',
    'daun/best-practices',
    'daun/es6/possible-errors',
    'daun/import',
    'daun/jest',
    'daun/vue'
  ],
  rules: {
    /* custom rules */
  }
}
```
