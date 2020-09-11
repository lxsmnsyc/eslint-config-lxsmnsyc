const baseConfig = require('./base');

module.exports = {
  ...baseConfig,
  "extends": [
    "airbnb-base",
    ...baseConfig.extends,
  ],
};
