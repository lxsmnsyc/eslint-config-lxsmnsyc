const baseConfig = require('../base');

module.exports = {
  ...baseConfig,
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    ...baseConfig.extends,
  ],
  parserOptions: {
    ...baseConfig.parserOptions,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    ...baseConfig.settings,
    'import/resolver': {
      typescript: {},
      node: {
        extensions: [
          ...baseConfig.settings['import/resolver'].node.extensions,
          '.jsx',
          '.tsx',
        ],
      },
    },
  },
  plugins: [
    ...baseConfig.plugins,
    'react',
  ],
  rules: {
    ...baseConfig.rules,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ...baseConfig.rules['import/extensions'][2],
        jsx: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    // As of React 16.14 and 17
    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    'react/default-props-match-prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/display-name': 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-key': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/no-unused-prop-types': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react/no-unknown-property': 'off',
    'react/jsx-no-bind': 'off',
    'react/no-unstable-nested-components': 'off',
  },
};
