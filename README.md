<!-- ############################################# -->
<!-- Links -->

<!-- 
  Shields: https://shields.io/
  UTF8 Art: http://aa.en.utf8art.com/
  ASCII Art: https://www.asciiart.eu/
  ASCII Banners: https://patorjk.com/software/taag/
  Unicode Characters: https://www.amp-what.com/
  Braille Art: https://emojicombos.com/
  Spaces: https://jkorpela.fi/chars/spaces.html
  Color for SVG artworks: #6C757D / #F8F9FA
-- >

<!-- ############################################# -->
<!-- Header -->

<h1 align="center">
  <img height="130" src="./media/art-header.svg" alt="header-art">
  <img width="420" src="./media/header.svg" alt="header">
</h1>

<div align="center">

[![Version][package-shield]][package-url]

</div>

<!-- ############################################# -->
<!-- Main Area -->

## Description

Just a simple [Prettier](https://prettier.io/) configuration for personal use, which was made as a testament to having read the [Prettier documentation](https://prettier.io/docs/).

All properties use their [default values](https://prettier.io/docs/en/options) as of prettier@3.4.2, except for the `arrowParens` property.

Used plugins:

- [prettier-plugin-sort-json](https://www.npmjs.com/package/prettier-plugin-sort-json)
- [prettier-plugin-packagejsonv](https://www.npmjs.com/package/prettier-plugin-packagejsonv)
- [prettier-plugin-multiline-arrays](https://www.npmjs.com/package/prettier-plugin-multiline-arrays)
- [prettier-plugin-organize-imports](https://www.npmjs.com/package/prettier-plugin-organize-imports)
- [prettier-plugin-jsdoc](https://www.npmjs.com/package/prettier-plugin-jsdoc)

```javascript
// Package export (index.js)
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
```

## Getting Started
### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Prettier](https://prettier.io/) (version 3.4.2)

### Install

```bash
npm install --save-dev @sphoon/prettier-config --save-exact
```

```jsonc
// package.json
{
  "name": "your-project",
  "version": "1.33.7",
  // ...
  // add the "prettier" property
  "prettier": "@sphoon/prettier-config"
}
```

<!-- ############################################# -->
<!-- References -->

[package-shield]: https://img.shields.io/github/package-json/v/exquz3me/prettier-config
[package-url]: https://www.npmjs.com/package/@sphoon/prettier-config