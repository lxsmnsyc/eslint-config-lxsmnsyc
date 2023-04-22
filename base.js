module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.cjs', '.mjs'],
      },
    },
  },
  plugins: [
    'import',
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        cjs: 'never',
        mjs: ' never',
      },
    ],
    'import/no-unresolved': 'error',
    // AIRBNB
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'no-bitwise': 'off',
    'no-continue': 'off',
  },
};
