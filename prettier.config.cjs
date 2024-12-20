/** @type {import("prettier").Config} */
const config = {
  $schema: 'http://json.schemastore.org/prettierrc',
  singleQuote: true,
  bracketSameLine: true,
  arrowParens: 'avoid',
  useTabs: false,
  editorconfig: true,
};

// eslint-disable-next-line import/no-default-export -- required for Prettier
module.exports = config;
