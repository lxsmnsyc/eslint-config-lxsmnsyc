const baseConfig = require('../base');

module.exports = {
  ...baseConfig,
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    ...baseConfig.parserOptions,
    'parser': baseConfig.parser,
    'ecmaFeatures' : {
      'jsx': true,
    },
  },
  'settings': {
    ...baseConfig.settings,
    'import/resolver': {
      'typescript': {},
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      },
    },
  },
  'extends': [
    'plugin:vue/vue3-recommended',
    'airbnb',
    ...baseConfig.extends,
  ],
  'plugins': [
    'vue',
    ...baseConfig.plugins,
  ],
  'rules': {
    ...baseConfig.rules,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never',
        'vue': 'never'
      }
    ],
  },
};
