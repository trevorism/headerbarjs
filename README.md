# headerbarjs
[![npm (scoped)](https://img.shields.io/npm/v/@trevorism/firstjs.svg)](https://www.npmjs.com/package/@trevorism/headerbar)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@trevorism/firstjs.svg)](https://www.npmjs.com/package/@trevorism/headerbar)

Vue based header bar component for Trevorism.com apps. This is compatible with Vue 2.

## Prerequisites

Assumes `vue`, `buefy`, and `axios` are being used.

## Usage
```
<template>
  <div id="app">
    <header-bar></header-bar>
  </div>
</template>

<script>
import HeaderBar from '@trevorism/headerbar'

export default {
  name: 'App',
  components: {
    HeaderBar
  }
}
</script>
```


## Project setup

This project used the vue-sfc-rollup plugin to scaffold the code.

`npm install -g vue-sfc-rollup`

`sfc-init`

### Development server
```
npm run serve
```

### Production build
```
npm run build
```

Exposes a vue component over npm

`npm login`
`npm version <update_type>`
`npm publish --access=public`