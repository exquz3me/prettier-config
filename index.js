/** @type {import("prettier").Config} */
const config = {
  $schema: "http://json.schemastore.org/prettierrc",
  arrowParens: "avoid",
  plugins: [
    "prettier-plugin-sort-json",
    "prettier-plugin-packagejsonv",
    "prettier-plugin-multiline-arrays",
    "prettier-plugin-organize-imports",
    "prettier-plugin-jsdoc"
  ]
};

export default config;
