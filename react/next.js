const baseConfig = require('./index');

module.exports = {
  ...baseConfig,
  "extends": [
    "plugin:next/recommended",
    ...baseConfig.extends,
  ],
};
