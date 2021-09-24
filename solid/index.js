const baseConfig = require('../base');

module.exports = {
  ...baseConfig,
  'parserOptions': {
    ...baseConfig.parserOptions,
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
  'extends': [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    ...baseConfig.extends,
  ],
  'plugins': [
    ...baseConfig.plugins,
    'react',
  ],
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
    'react/jsx-filename-extension': [1, { 'extensions': ['.jsx'] }],

    // As of React 16.14 and 17
    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    'react/destructuring-assignment': 'off',
    'react/no-unknown-property': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off'
  },
};
