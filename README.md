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

Just a simple [Prettier](https://prettier.io/) configuration for personal use.

This package was made as a testament to having read the Prettier documentation. Most of the properties were kept at their default values, except for some opinionated choices.

```jsonc
// .prettierrc
{
  "$schema": "http://json.schemastore.org/prettierrc",
  "singleQuote": true,
  "bracketSameLine": true,
  "arrowParens": "avoid"
}
```

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
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

For more information see the [Prettier documentation](https://prettier.io/docs/en/sharing-configurations)

<!-- ############################################# -->
<!-- References -->
[package-json]: https://img.shields.io/github/package-json/v/exquz3me/prettier-config
