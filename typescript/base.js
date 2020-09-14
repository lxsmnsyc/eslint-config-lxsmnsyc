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
    "@typescript-eslint"
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
    "no-use-before-define": [0],
    "@typescript-eslint/no-use-before-define": [1]
  }
}