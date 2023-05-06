# Node Utilities
Various utilities for development in node-js

![GitHub Top Language](https://img.shields.io/github/languages/top/bemoje/bemoje-node-util)

##### Github
![GitHub Last Commit](https://img.shields.io/github/last-commit/bemoje/bemoje-node-util?color=red)
![GitHub Stars](https://img.shields.io/github/stars/bemoje/bemoje-node-util)
![GitHub Forks](https://img.shields.io/github/forks/bemoje/bemoje-node-util)
![GitHub Watchers](https://img.shields.io/github/watchers/bemoje/bemoje-node-util)
![GitHub Repo Size](https://img.shields.io/github/repo-size/bemoje/bemoje-node-util)

##### NPM
<span><a href="https://npmjs.org/@bemoje/node-util" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/node-util" alt="NPM Version" /></a></span>
<span><a href="https://npmjs.org/@bemoje/node-util" title="NPM Downloads"><img src="https://img.shields.io/npm/dt/@bemoje/node-util" alt="NPM Downloads" /></a></span>

## Installation
This library is published in the NPM registry and can be installed using any compatible package manager.

#### NPM
```sh
npm install @bemoje/node-util
```

#### YARN
```sh
yarn add @bemoje/node-util
```

## Usage
Import all named exports:
```js
import * as util from '@bemoje/node-util'
```
All named exports are available from the root directory:
```js
import {arrFlatten} from '@bemoje/node-util'
```
Specific imports:
```js
import {arrFlatten} from '@bemoje/node-util/array/'
```

## Distribution
This library is written in **TypeScript**.

#### ES6 Module Bundles
- [CommonJS](/dist/index.js)
- [ESM](/dist/index.esm.js)

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

# Documentation
See the [full documentation](./docs/index.md)
