const baseConfig = require('../base');

module.exports = {
  ...baseConfig,
  "extends": [
    "preact",
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
  },
};

