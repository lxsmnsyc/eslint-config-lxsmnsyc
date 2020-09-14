const baseConfig = require('../base');

module.exports = {
  ...baseConfig,
  "extends": [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ...baseConfig.extends,
    "plugin:import/typescript",
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": [
    ...baseConfig.plugins,
    "@typescript-eslint",
  ],
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {},
      "node": {
        extensions: ['.js', '.ts'],
      },
    }
  },
  "rules": {
    ...baseConfig.rules,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "ts": "never",
      }
    ],
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.34.0/packages/eslint-plugin/docs/rules/no-unused-vars.md
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
  }
}