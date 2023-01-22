@bemoje/bemoje-node-util / [Exports](modules.md)

# Node Utilities
Various utilities for node-js development

![GitHub Top Language](https://img.shields.io/github/languages/top/bemoje/bemoje-node-util)

##### Github
![GitHub Last Commit](https://img.shields.io/github/last-commit/bemoje/bemoje-node-util?color=red)
![GitHub Stars](https://img.shields.io/github/stars/bemoje/bemoje-node-util)
![GitHub Forks](https://img.shields.io/github/forks/bemoje/bemoje-node-util)
![GitHub Watchers](https://img.shields.io/github/watchers/bemoje/bemoje-node-util)
![GitHub Repo Size](https://img.shields.io/github/repo-size/bemoje/bemoje-node-util)

##### NPM
<span><a href="https://npmjs.org/@bemoje/bemoje-node-util" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/bemoje-node-util" alt="NPM Version" /></a></span>
<span><a href="https://npmjs.org/@bemoje/bemoje-node-util" title="NPM Downloads"><img src="https://img.shields.io/npm/dt/@bemoje/bemoje-node-util" alt="NPM Downloads" /></a></span>
##### Travis CI
<span><a href="https://npmjs.org/@bemoje/bemoje-node-util" title="View this project on NPM"><img src="https://www.travis-ci.com/bemoje/bemoje-node-util.svg?branch=main" alt="dependencies" /></a></span>

##### Donate
<span><a href="https://www.patreon.com/user?u=40752770" title="Donate using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon Donation" /></a></span>

## Installation
This library is published in the NPM registry and can be installed using any compatible package manager.

#### NPM
```sh
npm install @bemoje/bemoje-node-util
npm install --save @bemoje/bemoje-node-util
npm install --save-dev @bemoje/bemoje-node-util
```

#### YARN
```sh
yarn add @bemoje/bemoje-node-util
```

#### CDN
Get minified ES6 UMD bundle from either of the popular CND's, UNPKG or JSDelivr.

```html
<!-- For UNPKG use the code below. -->
<script src="https://unpkg.com/@bemoje/bemoje-node-util"></script>

<!-- For JSDelivr use the code below. -->
<script src="https://cdn.jsdelivr.net/npm/@bemoje/bemoje-node-util"></script>

<script>
  // UMD module is exposed through the "util" global variable.
  console.log(util);
</script>
```

## Usage
```js
// default export
import util from '@bemoje/bemoje-node-util'

// named exports
import {util} from '@bemoje/bemoje-node-util'
```

## Documentation
- [Full Documentation with usage examples](/docs/modules.md)

## Distribution
This library is written in **TypeScript** compiled to ES6 JavaScript.

#### ES6 Module Bundles
- [CommonJS](/dist/index.js)
- [ESM](/dist/index.esm.js)
- [UMD](/dist/index.umd.js)
- [UMD Minified](/dist/index.umd.min.js)

#### Type Declarations
See the [declarations entry point](/types/index.d.ts).

## Tests
Tests are written with Jest. To run tests:

```sh
npm run test
```

## Issues
Please let me know of any bugs or [issues](https://github.com/bemoje/bemoje-node-util/issues).

## Contribute
Contributors are welcome to open a [pull request](https://github.com/bemoje/bemoje-node-util/pulls).

## License
Released under the [MIT License](./LICENSE).
