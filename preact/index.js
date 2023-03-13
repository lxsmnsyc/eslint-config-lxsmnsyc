const baseConfig = require('../base');

module.exports = {
  ...baseConfig,
  extends: [
    'preact',
    'airbnb',
    'airbnb/hooks',
    ...baseConfig.extends,
  ],
  parserOptions: {
    ...baseConfig.parserOptions,
    jsxPragma: 'h',
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
        ],
      },
    },
  },
  rules: {
    ...baseConfig.rules,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ...baseConfig.rules['import/extensions'][2],
        jsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx'] }],
    'react/prop-types': 'off',
  },
};
