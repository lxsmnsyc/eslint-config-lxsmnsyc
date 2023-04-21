const baseConfig = require('../base');

module.exports = {
  ...baseConfig,
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ...baseConfig.extends,
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    ...baseConfig.plugins,
    '@typescript-eslint',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [
        '.ts',
      ],
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: [
          ...baseConfig.settings['import/resolver'].node.extensions,
          '.ts',
          '.cts',
          '.mts',
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
        ts: 'never',
        cts: 'never',
        mts: 'never',
      },
    ],
    
  },
};
