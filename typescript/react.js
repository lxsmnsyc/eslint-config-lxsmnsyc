module.exports = {
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    require.resolve('./base'),
  ],
  "rules": {
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
