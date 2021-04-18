const baseConfig = require('../base');

module.exports = {
  ...baseConfig,
  'extends': [
    'preact',
    'airbnb',
    'airbnb/hooks',
    ...baseConfig.extends,
  ],
  'parserOptions': {
    ...baseConfig.parserOptions,
    'jsxPragma': 'h', 
    'ecmaFeatures' : {
      'jsx': true,
    },
  },
  'settings': {
    ...baseConfig.settings,
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx'],
      },
    },
  },
  'rules': {
    ...baseConfig.rules,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
      }
    ],
    'react/jsx-filename-extension': [1, { 'extensions': ['.jsx', '.tsx'] }],
    'react/prop-types': 'off',
  },
};

