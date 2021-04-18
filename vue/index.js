const baseConfig = require('../base');

module.exports = {
  ...baseConfig,
  "parser": "vue-eslint-parser",
  "parserOptions": {
    ...baseConfig.parserOptions,
    "ecmaFeatures" : {
      "jsx": true,
    },
  },
  "settings": {
    ...baseConfig.settings,
    "import/resolver": {
      "node": {
        "extensions": ['.js', '.jsx'],
      },
    },
  },
  "extends": [
    "plugin:vue/vue3-recommended",
    "airbnb",
    "airbnb/hooks",
    ...baseConfig.extends,
  ],
  "plugins": [
    "vue",
    ...baseConfig.plugins,
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
  },
};
