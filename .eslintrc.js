module.exports = {
  extends: [
    "eslint:recommended",
    "prettier", // désactive les règles de linter en conflit avec prettier
  ],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
};
