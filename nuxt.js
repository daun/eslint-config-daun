module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    './vue.js',
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  globals: {
    $nuxt: true
  },
  rules: {
    'vue/order-in-components': ['error', {
      'order': [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'asyncData', // added asyncData (TODO: extend defaults instead of duplicating)
        'fetch',     // added fetch
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        'head',
        'jsonld',
        'transition',
        'nuxtI18n',
        ['template', 'render'],
        'renderError',
      ]
    }]
  }
};
