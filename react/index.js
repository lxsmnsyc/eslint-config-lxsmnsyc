const baseConfig = require('../base');

module.exports = {
  ...baseConfig,
  "parserOptions": {
    ...baseConfig.parserOptions,
    "ecmaFeatures" : {
      "jsx": true,
    },
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    ...baseConfig.extends,
  ],
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
      }
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".jsx"] }],
  },
};
