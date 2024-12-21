<!-- Links -->

<!-- UTF8 Art: http://aa.en.utf8art.com/ -->
<!-- ASCII Art: https://www.asciiart.eu/ -->
<!-- ASCII Banners: https://patorjk.com/software/taag/ -->
<!-- Braille Art: https://emojicombos.com/ -->
<!-- Spaces: https://jkorpela.fi/chars/spaces.html -->
<!-- Unicode Characters: https://www.amp-what.com/ -->
<!-- #6C757D -->

<!-- ############################################# -->
<!-- Header -->

<h1 align="center">
    <img height=150 src="./media/art-header.svg" alt="header-art">
    <img src="./media/header.svg" alt="header">
</h1>

![package-json]

<!-- ############################################# -->
<!-- Main Area -->

## Description

Just a simple [Prettier](https://prettier.io/) configuration for personal use, which was made as a testament to having read the [Prettier documentation](https://prettier.io/docs/).

All properties use their [default values](https://prettier.io/docs/en/options) as of prettier@3.4.2, except for the `arrowParens` property.


```javascript
// index.js
/** @type {import("prettier").Config} */
const config = {
  $schema: "http://json.schemastore.org/prettierrc",
  arrowParens: "avoid",
};

export default config;
```

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Prettier](https://prettier.io/)

## Install

```bash
npm install --save-dev @sphoon/prettier-config
```

```jsonc
// package.json
{
  "name": "your-project",
  "version": "1.33.7",
  "prettier": "@sphoon/prettier-config" // Add this line
}
```

<!-- ############################################# -->
<!-- References -->
[package-json]: https://img.shields.io/github/package-json/v/exquz3me/prettier-config
