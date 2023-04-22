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
    /**
     * TS ESlint rules
     */
    // EXTENSION RULES
    // https://typescript-eslint.io/rules/default-param-last
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',
    // https://typescript-eslint.io/rules/no-loop-func
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',
    // https://typescript-eslint.io/rules/no-redeclare
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    // https://typescript-eslint.io/rules/no-shadow
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    // https://typescript-eslint.io/rules/no-unused-expressions
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    // https://typescript-eslint.io/rules/no-use-before-define
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    // https://typescript-eslint.io/rules/no-useless-constructor
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    // https://typescript-eslint.io/rules/return-await
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'error',
    // TS RULES
    // https://typescript-eslint.io/rules/consistent-type-exports
    '@typescript-eslint/consistent-type-exports': 'error',
    // https://typescript-eslint.io/rules/consistent-type-imports
    '@typescript-eslint/consistent-type-imports': 'error',
    // https://typescript-eslint.io/rules/explicit-function-return-type
    '@typescript-eslint/explicit-function-return-type': 'error',
    // https://typescript-eslint.io/rules/explicit-member-accessibility
    '@typescript-eslint/explicit-member-accessibility': ['error', {
      accessibility: 'no-public',
    }],
    // https://typescript-eslint.io/rules/explicit-module-boundary-types
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    // https://typescript-eslint.io/rules/no-base-to-string
    '@typescript-eslint/no-base-to-string': 'error',
    // https://typescript-eslint.io/rules/no-confusing-non-null-assertion
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    // https://typescript-eslint.io/rules/no-confusing-void-expression
    '@typescript-eslint/no-confusing-void-expression': 'error',
    // https://typescript-eslint.io/rules/no-duplicate-enum-values
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    // https://typescript-eslint.io/rules/no-duplicate-type-constituents
    '@typescript-eslint/no-duplicate-type-constituents': 'error',
    // https://typescript-eslint.io/rules/no-extraneous-class
    '@typescript-eslint/no-extraneous-class': 'error',
    // https://typescript-eslint.io/rules/no-import-type-side-effects
    '@typescript-eslint/no-import-type-side-effects': 'error',
    // https://typescript-eslint.io/rules/no-meaningless-void-operator
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    // https://typescript-eslint.io/rules/no-meaningless-void-operator
    '@typescript-eslint/no-mixed-enums': 'error',
    // https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    // https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    // https://typescript-eslint.io/rules/no-redundant-type-constituents
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    // https://typescript-eslint.io/rules/no-require-imports
    '@typescript-eslint/no-require-imports': 'error',
    // https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    // https://typescript-eslint.io/rules/no-unnecessary-condition
    '@typescript-eslint/no-unnecessary-condition': 'error',
    // https://typescript-eslint.io/rules/no-unnecessary-qualifier
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    // https://typescript-eslint.io/rules/no-unnecessary-type-arguments
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    // https://typescript-eslint.io/rules/no-unsafe-declaration-merging
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',
    // https://typescript-eslint.io/rules/no-unsafe-enum-comparison
    '@typescript-eslint/no-unsafe-enum-comparison': 'error',
    // https://typescript-eslint.io/rules/no-useless-empty-export
    '@typescript-eslint/no-useless-empty-export': 'error',
    // https://typescript-eslint.io/rules/non-nullable-type-assertion-style
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    // https://typescript-eslint.io/rules/prefer-enum-initializers
    '@typescript-eslint/prefer-enum-initializers': 'error',
    // https://typescript-eslint.io/rules/prefer-includes
    '@typescript-eslint/prefer-includes': 'error',
    // https://typescript-eslint.io/rules/prefer-reduce-type-parameter
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    // https://typescript-eslint.io/rules/prefer-regexp-exec
    '@typescript-eslint/prefer-regexp-exec': 'error',
    // https://typescript-eslint.io/rules/prefer-return-this-type
    '@typescript-eslint/prefer-return-this-type': 'error',
    // https://typescript-eslint.io/rules/prefer-ts-expect-error
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    // https://typescript-eslint.io/rules/promise-function-async
    '@typescript-eslint/promise-function-async': 'error',
    // https://typescript-eslint.io/rules/require-array-sort-compare
    '@typescript-eslint/require-array-sort-compare': 'error',
    // https://typescript-eslint.io/rules/switch-exhaustiveness-check
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    // FORMATTING
    // https://typescript-eslint.io/rules/block-spacing
    'block-spacing': 'off',
    '@typescript-eslint/block-spacing': 'error',
    // https://typescript-eslint.io/rules/brace-style
    'brace-style': 'off',
    '@typescript-eslint/brace-style': 'error',
    // https://typescript-eslint.io/rules/comma-dangle
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
      enums: 'always-multiline',
      generics: 'always-multiline',
      tuples: 'always-multiline',
    }],
    // https://typescript-eslint.io/rules/comma-spacing
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': 'error',
    // https://typescript-eslint.io/rules/func-call-spacing
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'error',
    // https://typescript-eslint.io/rules/lines-between-class-members
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': 'error',
    // https://typescript-eslint.io/rules/member-delimiter-style
    '@typescript-eslint/member-delimiter-style': 'error',
    // https://typescript-eslint.io/rules/no-extra-parens
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': 'error',
    // https://typescript-eslint.io/rules/object-curly-spacing
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    // https://typescript-eslint.io/rules/quotes
    quotes: 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    // https://typescript-eslint.io/rules/space-before-blocks
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': 'error',
    // https://typescript-eslint.io/rules/space-infix-ops
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': 'error',
    // https://typescript-eslint.io/rules/type-annotation-spacing
    '@typescript-eslint/type-annotation-spacing': 'error',
  },
};
