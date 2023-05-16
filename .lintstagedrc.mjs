export default {
  "*.{ts,js,cjs,mjs,tsx,jsx,vue}": ["eslint --fix", "prettier --write"],
  "*.{scss,css}": ["stylelint --fix", "prettier --write"],
};
