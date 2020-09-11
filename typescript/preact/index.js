const baseConfig = require('../base');

module.exports = {
  ...baseConfig,
  "extends": [
    "preact",
    "airbnb",
    "airbnb/hooks",
    ...baseConfig.extends,
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
  },
};

