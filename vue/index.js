const baseConfig = require('../base');

module.exports = {
  ...baseConfig,
  parser: 'vue-eslint-parser',
  parserOptions: {
    ...baseConfig.parserOptions,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    ...baseConfig.settings,
    'import/resolver': {
      node: {
        extensions: [
          ...baseConfig.settings['import/resolver'].node.extensions,
          '.jsx',
          '.vue',
        ],
      },
    },
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb',
    ...baseConfig.extends,
  ],
  plugins: [
    'vue',
    ...baseConfig.plugins,
  ],
  rules: {
    ...baseConfig.rules,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ...baseConfig.rules['import/extensions'][2],
        jsx: 'never',
        vue: 'never',
      },
    ],
  },
};
