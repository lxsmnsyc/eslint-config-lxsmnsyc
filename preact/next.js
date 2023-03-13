const baseConfig = require('./index');

module.exports = {
  ...baseConfig,
  extends: [
    'plugin:@next/next/recommended',
    'next',
    'next/core-web-vitals',
    ...baseConfig.extends,
  ],
};
