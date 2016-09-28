module.exports = {
  "extends": "airbnb",
  "rules": {
    "no-console": "off",
    "no-mixed-operators": "off",
    "no-bitwise": "off",
    "no-plusplus": "off",
    "no-continue": "off",
    "yoda": ["error", "never", { "onlyEquality": true }],
    "strict": ["error", "function"],
    "arrow-parens": ["error", "always"],
  },
  env: {
    node: true,
    browser: false,
    mocha: true,
  },
}
