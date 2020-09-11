const baseConfig = require('./base');

module.exports = {
  ...baseConfig,
  "extends": [
    "plugin:react/recommended",
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
      }
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".jsx"] }],
  },
};
