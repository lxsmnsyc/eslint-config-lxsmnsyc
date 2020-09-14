const baseConfig = require('../base');

module.exports = {
  ...baseConfig,
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    ...baseConfig.extends,
  ],
  "parserOptions": {
    ...baseConfig.parserOptions,
    "ecmaFeatures" : {
      "jsx": true,
    },
  },
  "settings": {
    ...baseConfig.settings,
    "import/resolver": {
      "typescript": {},
      "node": {
        "extensions": ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  "plugins": [
    ...baseConfig.plugins,
    "react",
  ],
  "rules": {
    ...baseConfig.rules,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never",
      }
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".jsx", ".tsx"] }],
  },
};