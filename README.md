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
<span><a href="https://npmjs.org/@bemoje/node-util" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/node-util" alt="NPM Version" /></a></span>
<span><a href="https://npmjs.org/@bemoje/node-util" title="NPM Downloads"><img src="https://img.shields.io/npm/dt/@bemoje/node-util" alt="NPM Downloads" /></a></span>
##### Travis CI
<span><a href="https://npmjs.org/@bemoje/node-util" title="View this project on NPM"><img src="https://www.travis-ci.com/bemoje/bemoje-node-util.svg?branch=main" alt="dependencies" /></a></span>

##### Donate
<span><a href="https://www.patreon.com/user?u=40752770" title="Donate using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon Donation" /></a></span>

## Installation
This library is published in the NPM registry and can be installed using any compatible package manager.

#### NPM
```sh
npm install @bemoje/node-util
npm install --save @bemoje/node-util
npm install --save-dev @bemoje/node-util
```

#### YARN
```sh
yarn add @bemoje/node-util
```

#### CDN
Get minified ES6 UMD bundle from either of the popular CND's, UNPKG or JSDelivr.

```html
<!-- For UNPKG use the code below. -->
<script src="https://unpkg.com/@bemoje/node-util"></script>

<!-- For JSDelivr use the code below. -->
<script src="https://cdn.jsdelivr.net/npm/@bemoje/node-util"></script>

<script>
  // UMD module is exposed through the "util" global variable.
  console.log(util);
</script>
```

## Usage
```js
// default export
import util from '@bemoje/node-util'

// named exports
import {util} from '@bemoje/node-util'
```

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

# Documentation


### Classes

- [Base](#classesbasemd)
- [ExtensibleFunction](#classesextensiblefunctionmd)
- [Matrix](#classesmatrixmd)
- [SortedArray](#classessortedarraymd)
- [StringStream](#classesstringstreammd)
- [Table](#classestablemd)
- [Timer](#classestimermd)

### Interfaces

- [IRevivableJSON](#interfacesirevivablejsonmd)
- [ISortedArrayOptions](#interfacesisortedarrayoptionsmd)
- [ITableOptions](#interfacesitableoptionsmd)

### Type Aliases

- [Callback](#callback)
- [Comparator](#comparator)
- [MemoryUsageValues](#memoryusagevalues)
- [MemoryUsageValuesFormatted](#memoryusagevaluesformatted)
- [Predicate](#predicate)
- [RexecOutput](#rexecoutput)
- [TableSerializedForm](#tableserializedform)
- [ensureValidWindowsPathOptions](#ensurevalidwindowspathoptions)

### Functions

- [A1ToColRow](#a1tocolrow)
- [alphaToCol](#alphatocol)
- [arr2dToCSV](#arr2dtocsv)
- [arrAssignFrom](#arrassignfrom)
- [arrEvery](#arrevery)
- [arrFilterMutable](#arrfiltermutable)
- [arrFlatten](#arrflatten)
- [arrFlattenMutable](#arrflattenmutable)
- [arrIndicesOf](#arrindicesof)
- [arrMapMutable](#arrmapmutable)
- [arrShallowEquals](#arrshallowequals)
- [arrShuffle](#arrshuffle)
- [arrSome](#arrsome)
- [arrSortNumeric](#arrsortnumeric)
- [arrSwap](#arrswap)
- [colRowToA1](#colrowtoa1)
- [compareArray](#comparearray)
- [compareNumber](#comparenumber)
- [compareNumberDescending](#comparenumberdescending)
- [compareNumeric](#comparenumeric)
- [compareNumericDescending](#comparenumericdescending)
- [compareString](#comparestring)
- [compareStringDescending](#comparestringdescending)
- [createFileExtensionFilter](#createfileextensionfilter)
- [ensureValidWindowsPath](#ensurevalidwindowspath)
- [getMemoryUsage](#getmemoryusage)
- [getMemoryUsageFormattedEU](#getmemoryusageformattedeu)
- [getMemoryUsageFormattedUS](#getmemoryusageformattedus)
- [getWorkingDirPath](#getworkingdirpath)
- [htmlTableTo2dArray](#htmltableto2darray)
- [isConstructor](#isconstructor)
- [isObject](#isobject)
- [isPrototype](#isprototype)
- [normalizeFileExtension](#normalizefileextension)
- [numApproximateLog10](#numapproximatelog10)
- [numFormatEU](#numformateu)
- [numFormatUS](#numformatus)
- [readFileStringSync](#readfilestringsync)
- [regexEscapeString](#regexescapestring)
- [regexGetGroupNames](#regexgetgroupnames)
- [rexec](#rexec)
- [setIntersection](#setintersection)
- [setUnion](#setunion)
- [strCountCharOccurances](#strcountcharoccurances)
- [strIsLowerCase](#strislowercase)
- [strIsUpperCase](#strisuppercase)
- [strLinesRemoveEmpty](#strlinesremoveempty)
- [strLinesTrimLeft](#strlinestrimleft)
- [strLinesTrimRight](#strlinestrimright)
- [strPrettifyMinifiedCode](#strprettifyminifiedcode)
- [strRepeat](#strrepeat)
- [strReplaceAll](#strreplaceall)
- [strSplitWordByCamelCase](#strsplitwordbycamelcase)
- [strToWords](#strtowords)
- [strWrapBetween](#strwrapbetween)
- [strWrapIn](#strwrapin)
- [strWrapInAngleBrackets](#strwrapinanglebrackets)
- [strWrapInBraces](#strwrapinbraces)
- [strWrapInBrackets](#strwrapinbrackets)
- [strWrapInDoubleQuotes](#strwrapindoublequotes)
- [strWrapInParenthesis](#strwrapinparenthesis)
- [strWrapInSingleQuotes](#strwrapinsinglequotes)
- [streamToString](#streamtostring)

## Type Aliases

### Callback

Ƭ **Callback**: (`value`: `any`, `index`: `number`, `array`: `any`[]) => `void`

#### Type declaration

▸ (`value`, `index`, `array`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `index` | `number` |
| `array` | `any`[] |

##### Returns

`void`

#### Defined in

[src/libs/array/index.ts:15](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/array/index.ts#L15)

___

### Comparator

Ƭ **Comparator**: (`a`: `any`, `b`: `any`) => `number`

#### Type declaration

▸ (`a`, `b`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |
| `b` | `any` |

##### Returns

`number`

#### Defined in

[src/libs/sort.ts:1](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/sort.ts#L1)

___

### MemoryUsageValues

Ƭ **MemoryUsageValues**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `extenalV8` | `number` |
| `heapAllocationMB` | `number` |
| `heapUsedMB` | `number` |
| `processAllocationMB` | `number` |

#### Defined in

[src/libs/node.ts:6](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/node.ts#L6)

___

### MemoryUsageValuesFormatted

Ƭ **MemoryUsageValuesFormatted**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `extenalV8` | `string` |
| `heapAllocationMB` | `string` |
| `heapUsedMB` | `string` |
| `processAllocationMB` | `string` |

#### Defined in

[src/libs/node.ts:13](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/node.ts#L13)

___

### Predicate

Ƭ **Predicate**: (`value`: `any`, `index`: `number`, `array`: `any`[]) => `boolean`

#### Type declaration

▸ (`value`, `index`, `array`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `index` | `number` |
| `array` | `any`[] |

##### Returns

`boolean`

#### Defined in

[src/libs/array/index.ts:17](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/array/index.ts#L17)

___

### RexecOutput

Ƭ **RexecOutput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `groups` | `Record`<`string`, `any`\> |
| `index` | `number` |
| `lastIndex` | `number` |
| `match` | `string` |

#### Defined in

[src/libs/regex.ts:1](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/regex.ts#L1)

___

### TableSerializedForm

Ƭ **TableSerializedForm**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `columnHeaders` | `string`[] |
| `data` | `T`[][] |
| `rowHeaders` | `string`[] |

#### Defined in

[src/libs/datastructures/src/Table.ts:58](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Table.ts#L58)

___

### ensureValidWindowsPathOptions

Ƭ **ensureValidWindowsPathOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assert?` | `boolean` |
| `extendedMaxLength?` | `boolean` |

#### Defined in

[src/libs/node.ts:117](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/node.ts#L117)

## Functions

### A1ToColRow

▸ **A1ToColRow**(`A1`, `zeroIndexed?`): `number`[]

Convert spreadsheet A1-notation to [column, row].

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `A1` | `string` | `undefined` | A1-notation string. |
| `zeroIndexed` | `boolean` | `false` | Whether or not column and row numbers start at one or zero. |

#### Returns

`number`[]

#### Defined in

[src/libs/spreadsheet/src/A1ToColRow.ts:11](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/spreadsheet/src/A1ToColRow.ts#L11)

___

### alphaToCol

▸ **alphaToCol**(`A`, `zeroIndexed?`): `number`

Convert spreadsheet column letter(s) to column-number

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `A` | `string` | `undefined` | Column letter |
| `zeroIndexed` | `boolean` | `false` | Whether or not column number start at one or zero. |

#### Returns

`number`

#### Defined in

[src/libs/spreadsheet/src/letterToCol.ts:9](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/spreadsheet/src/letterToCol.ts#L9)

___

### arr2dToCSV

▸ **arr2dToCSV**<`T`\>(`input`, `delimiter?`): `string`

Converts a 2-dimensional array into a CSV string.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `T`[][] | `undefined` | a 2-dimensional array |
| `delimiter` | `string` | `';'` | csv delimiter |

#### Returns

`string`

#### Defined in

[src/libs/array/src/arr2dToCSV.ts:6](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/array/src/arr2dToCSV.ts#L6)

___

### arrAssignFrom

▸ **arrAssignFrom**<`T`\>(`target`, `source`): `T`[]

Mutably assigns the values of source array to target array. Lengths will also be identical.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T`[] |
| `source` | `T`[] |

#### Returns

`T`[]

#### Defined in

[src/libs/array/src/arrAssignFrom.ts:4](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/array/src/arrAssignFrom.ts#L4)

___

### arrEvery

▸ **arrEvery**<`T`\>(`input`, `predicate`): `boolean`

Returns true if the predicate is satisfied for every element of the passed array; otherwise false.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `T`[] | The array |
| `predicate` | [`Predicate`](#predicate) | A predicate callback function |

#### Returns

`boolean`

#### Defined in

[src/libs/array/src/arrEvery.ts:9](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/array/src/arrEvery.ts#L9)

___

### arrFilterMutable

▸ **arrFilterMutable**<`T`\>(`input`, `f`): `T`[]

Same as Array.prototype.filter but performs operations in palce (not immutable).

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `T`[] | input array |
| `f` | [`Predicate`](#predicate) | predicate |

#### Returns

`T`[]

#### Defined in

[src/libs/array/src/arrFilterMutable.ts:8](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/array/src/arrFilterMutable.ts#L8)

___

### arrFlatten

▸ **arrFlatten**<`T`\>(`input`, `maxDepth?`): `T`[]

Flattens the passed array recursively to a specified depth. Immutable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `any`[] | `undefined` | the array to flatten |
| `maxDepth` | `number` | `Number.MAX_SAFE_INTEGER` | the maximum recursive flattening depth. |

#### Returns

`T`[]

#### Defined in

[src/libs/array/src/arrFlatten.ts:6](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/array/src/arrFlatten.ts#L6)

___

### arrFlattenMutable

▸ **arrFlattenMutable**<`T`\>(`input`, `maxDepth?`): `T`[]

Flattens the passed array recursively. Mutable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `any`[] | `undefined` | the array to flatten |
| `maxDepth` | `number` | `Number.MAX_SAFE_INTEGER` | the maximum recursive flattening depth. |

#### Returns

`T`[]

#### Defined in

[src/libs/array/src/arrFlattenMutable.ts:9](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/array/src/arrFlattenMutable.ts#L9)

___

### arrIndicesOf

▸ **arrIndicesOf**<`T`\>(`input`, `element`): `number`[]

Returns all indexes at which an element is found.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `T`[] | The array to search |
| `element` | `T` | The element to find |

#### Returns

`number`[]

#### Defined in

[src/libs/array/src/arrIndicesOf.ts:7](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/array/src/arrIndicesOf.ts#L7)

___

### arrMapMutable

▸ **arrMapMutable**(`input`, `f`): `any`[]

Same as Array.prototype.map but performs operations in palce (not immutable).

**`Example`**

```js
expect(
  util.arrMapMutable([1, 2, 3, 4, 5], (value: number) => {
    return value + 1;
  }),
).toStrictEqual([2, 3, 4, 5, 6]);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any`[] | input array |
| `f` | [`Callback`](#callback) | iterator |

#### Returns

`any`[]

#### Defined in

[src/libs/array/src/arrMapMutable.ts:17](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/array/src/arrMapMutable.ts#L17)

___

### arrShallowEquals

▸ **arrShallowEquals**<`T`\>(`input1`, `input2`): `boolean`

Returns whether or not two arrays shallow equal each other.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input1` | `T`[] | first array |
| `input2` | `T`[] | second array |

#### Returns

`boolean`

#### Defined in

[src/libs/array/src/arrShallowEquals.ts:8](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/array/src/arrShallowEquals.ts#L8)

___

### arrShuffle

▸ **arrShuffle**<`T`\>(`input`): `T`[]

Shuffle items in an array in-place. Guarantees that the array has changes.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `T`[] | The array to shuffle. |

#### Returns

`T`[]

#### Defined in

[src/libs/array/src/arrShuffle.ts:8](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/array/src/arrShuffle.ts#L8)

___

### arrSome

▸ **arrSome**<`T`\>(`input`, `predicate`): `boolean`

Check whether a condition is true for any element of an array. The condition check is in the form of a callback.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `T`[] | The array |
| `predicate` | [`Predicate`](#predicate) | A predicate callback function |

#### Returns

`boolean`

#### Defined in

[src/libs/array/src/arrSome.ts:9](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/array/src/arrSome.ts#L9)

___

### arrSortNumeric

▸ **arrSortNumeric**(`input`): (`number` \| `bigint` \| `boolean`)[]

Uses Array.prototype.sort but sorts numbers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | (`number` \| `bigint` \| `boolean`)[] | input array |

#### Returns

(`number` \| `bigint` \| `boolean`)[]

#### Defined in

[src/libs/array/src/arrSortNumeric.ts:7](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/array/src/arrSortNumeric.ts#L7)

___

### arrSwap

▸ **arrSwap**<`T`\>(`input`, `from`, `to`): `T`[]

Swap array elements in place. Runtime: O(1)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `T`[] | to be modified |
| `from` | `number` | index of the first element |
| `to` | `number` | index of the second element |

#### Returns

`T`[]

#### Defined in

[src/libs/array/src/arrSwap.ts:7](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/array/src/arrSwap.ts#L7)

___

### colRowToA1

▸ **colRowToA1**(`CR`, `zeroIndexed?`): `string`

Convert spreadsheet [column, row] to A1-notation.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `CR` | `number`[] | `undefined` | [column, row] |
| `zeroIndexed` | `boolean` | `false` | Whether or not column number start at one or zero. |

#### Returns

`string`

#### Defined in

[src/libs/spreadsheet/src/colRowToA1.ts:8](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/spreadsheet/src/colRowToA1.ts#L8)

___

### compareArray

▸ **compareArray**(`comparator`, `descending?`): [`Comparator`](#comparator)

Returns a given comparator as an array compatible comparator. Behaves as if the array to sort was recursively flattened.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `comparator` | [`Comparator`](#comparator) | `undefined` | compare function |
| `descending` | `boolean` | `false` | whether the input comparator sorts in descending order |

#### Returns

[`Comparator`](#comparator)

#### Defined in

[src/libs/sort.ts:8](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/sort.ts#L8)

___

### compareNumber

▸ **compareNumber**(`a`, `b`): `number`

Number comparator function (ascending)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | first value to compare |
| `b` | `number` | second value to compare |

#### Returns

`number`

#### Defined in

[src/libs/sort.ts:68](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/sort.ts#L68)

___

### compareNumberDescending

▸ **compareNumberDescending**(`a`, `b`): `number`

Number comparator function (descending)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | first value to compare |
| `b` | `number` | second value to compare |

#### Returns

`number`

#### Defined in

[src/libs/sort.ts:77](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/sort.ts#L77)

___

### compareNumeric

▸ **compareNumeric**(`a`, `b`): `number`

number, bigint, boolean comparator function (ascending)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` \| `bigint` \| `boolean` | first value to compare |
| `b` | `number` \| `bigint` \| `boolean` | second value to compare |

#### Returns

`number`

#### Defined in

[src/libs/sort.ts:86](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/sort.ts#L86)

___

### compareNumericDescending

▸ **compareNumericDescending**(`a`, `b`): `number`

number, bigint, boolean comparator function (descending)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` \| `bigint` \| `boolean` | first value to compare |
| `b` | `number` \| `bigint` \| `boolean` | second value to compare |

#### Returns

`number`

#### Defined in

[src/libs/sort.ts:100](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/sort.ts#L100)

___

### compareString

▸ **compareString**(`a`, `b`): `number`

Alpha numeric comparator function (ascending)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | first value to compare |
| `b` | `string` | second value to compare |

#### Returns

`number`

#### Defined in

[src/libs/sort.ts:114](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/sort.ts#L114)

___

### compareStringDescending

▸ **compareStringDescending**(`a`, `b`): `number`

Alpha numeric comparator function (descending)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | first value to compare |
| `b` | `string` | second value to compare |

#### Returns

`number`

#### Defined in

[src/libs/sort.ts:123](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/sort.ts#L123)

___

### createFileExtensionFilter

▸ **createFileExtensionFilter**(`...fileExtensions`): (`filepath`: `string`) => `boolean`

Takes a list of file extensions and returns a filter function that returns true if a filepath/filename passed to it contains one of the given file extensions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...fileExtensions` | `string`[] | file extensions |

#### Returns

`fn`

▸ (`filepath`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `filepath` | `string` |

##### Returns

`boolean`

#### Defined in

[src/libs/node.ts:103](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/node.ts#L103)

___

### ensureValidWindowsPath

▸ **ensureValidWindowsPath**(`path`, `options?`): `boolean`

Check whether a provided windows filesystem path string is valid according to:
https://msdn.microsoft.com/en-us/library/windows/desktop/aa365247(v=vs.85).aspx

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to validate |
| `options?` | [`ensureValidWindowsPathOptions`](#ensurevalidwindowspathoptions) | - |

#### Returns

`boolean`

#### Defined in

[src/libs/node.ts:129](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/node.ts#L129)

___

### getMemoryUsage

▸ **getMemoryUsage**(): [`MemoryUsageValues`](#memoryusagevalues)

Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.

#### Returns

[`MemoryUsageValues`](#memoryusagevalues)

#### Defined in

[src/libs/node.ts:37](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/node.ts#L37)

___

### getMemoryUsageFormattedEU

▸ **getMemoryUsageFormattedEU**(): [`MemoryUsageValuesFormatted`](#memoryusagevaluesformatted)

Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
The values are formatted strings in the style of 5.000,00

#### Returns

[`MemoryUsageValuesFormatted`](#memoryusagevaluesformatted)

#### Defined in

[src/libs/node.ts:51](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/node.ts#L51)

___

### getMemoryUsageFormattedUS

▸ **getMemoryUsageFormattedUS**(): [`MemoryUsageValuesFormatted`](#memoryusagevaluesformatted)

Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
The values are formatted strings in the style of 5,000.00

#### Returns

[`MemoryUsageValuesFormatted`](#memoryusagevaluesformatted)

#### Defined in

[src/libs/node.ts:61](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/node.ts#L61)

___

### getWorkingDirPath

▸ **getWorkingDirPath**(`...dirs`): `string`

Takes a directory path as a list of directory/folder names from the current working directory and returns it as a full path string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...dirs` | `string`[] | directory names from the current working directory. |

#### Returns

`string`

#### Defined in

[src/libs/node.ts:71](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/node.ts#L71)

___

### htmlTableTo2dArray

▸ **htmlTableTo2dArray**(`element`, `headers?`): `string`[][]

Converts the table element's data content to a 2-dimensional array.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `element` | `HTMLTableElement` | `undefined` | The table element |
| `headers` | `boolean` | `true` | Whether to extract table column header data from <th> elements. |

#### Returns

`string`[][]

Data table which is an arrays of row-arrays of cell content (string).

#### Defined in

[src/libs/html/src/htmlTableTo2dArray.ts:7](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/html/src/htmlTableTo2dArray.ts#L7)

___

### isConstructor

▸ **isConstructor**(`value`): `boolean`

Determine if value is a constructor function

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/libs/validation.ts:20](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/validation.ts#L20)

___

### isObject

▸ **isObject**(`value`): `boolean`

Determine wheter the argument is a Object (is typeof object but not null).

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/libs/validation.ts:13](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/validation.ts#L13)

___

### isPrototype

▸ **isPrototype**(`value`): `boolean`

Determine wheter a given object is a prototype-object (obj.constructor.prototype === obj).

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/libs/validation.ts:4](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/validation.ts#L4)

___

### normalizeFileExtension

▸ **normalizeFileExtension**(`ext`): `string`

Normalize a file extension to the form: .[ext]
Anything before the last "." is not returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ext` | `string` | file extension |

#### Returns

`string`

#### Defined in

[src/libs/node.ts:88](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/node.ts#L88)

___

### numApproximateLog10

▸ **numApproximateLog10**(`x`): `number`

Approximate the logarithm base 10 of a small integer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The integer to approximate the logarithm of. |

#### Returns

`number`

#### Defined in

[src/libs/number.ts:50](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/number.ts#L50)

___

### numFormatEU

▸ **numFormatEU**(`input`, `decimalPlaces?`): `string`

Formats a number input to a string representation in the style of 5.000.000,00

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `number` | `undefined` | number to format |
| `decimalPlaces` | `number` | `0` | number of decimal places to return. Will pad string with zeroes to ensure this length. |

#### Returns

`string`

#### Defined in

[src/libs/number.ts:11](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/number.ts#L11)

___

### numFormatUS

▸ **numFormatUS**(`input`, `decimalPlaces?`): `string`

Formats a number input to a string representation in the style of 5,000,000.00

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `number` | `undefined` | number to format |
| `decimalPlaces` | `number` | `0` | number of decimal places to return. Will pad string with zeroes to ensure this length. |

#### Returns

`string`

#### Defined in

[src/libs/number.ts:30](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/number.ts#L30)

___

### readFileStringSync

▸ **readFileStringSync**(`path`): `string`

Takes a filepath and returns its utf8 contents as a single string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | path to the file |

#### Returns

`string`

#### Defined in

[src/libs/node.ts:79](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/node.ts#L79)

___

### regexEscapeString

▸ **regexEscapeString**(`str`): `string`

Escapes a string so it can be used in a regular expression.

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[src/libs/regex.ts:67](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/regex.ts#L67)

___

### regexGetGroupNames

▸ **regexGetGroupNames**(`re`): `string`[]

Returns an array of named groups defined inside a RegExp instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `re` | `RegExp` | RegExp instance to extract named groups from. |

#### Returns

`string`[]

#### Defined in

[src/libs/regex.ts:56](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/regex.ts#L56)

___

### rexec

▸ **rexec**(`regex`, `str`): `Generator`<[`RexecOutput`](#rexecoutput)\>

Easily perform regex 'exec' on a string. An iterable is returned which steps through the exec process and yields all
the details you might need.

**`Example`**

```js
const regex = /(?<group1>a)|(?<group2>d)/g
const str = 'Anthony wants a girlfriend.'
console.log([...rexec(regex, str)])
// [
// 	{
//     index: 9,
//     match: 'a',
//     groups: { g1: 'a', g2: undefined },
//     lastIndex: 10,
//   },
//   {
//     index: 14,
//     match: 'a',
//     groups: { g1: 'a', g2: undefined },
//     lastIndex: 15,
//   },
//   {
//     index: 25,
//     match: 'd',
//     groups: { g1: undefined, g2: 'd' },
//     lastIndex: 26,
//   },
// ]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regex` | `RegExp` | The regular expression object |
| `str` | `string` | The string to perform the operation on |

#### Returns

`Generator`<[`RexecOutput`](#rexecoutput)\>

#### Defined in

[src/libs/regex.ts:40](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/regex.ts#L40)

___

### setIntersection

▸ **setIntersection**(`sets`): `Set`<`any`\>

Returns the set intersection of a provded array of Set instances.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sets` | `Set`<`any`\>[] | an array of Set instances |

#### Returns

`Set`<`any`\>

#### Defined in

[src/libs/set.ts:5](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/set.ts#L5)

___

### setUnion

▸ **setUnion**(`sets`): `Set`<`any`\>

Returns the set union of a provded array of Set instances.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sets` | `Set`<`any`\>[] | an array of Set instances |

#### Returns

`Set`<`any`\>

#### Defined in

[src/libs/set.ts:21](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/set.ts#L21)

___

### strCountCharOccurances

▸ **strCountCharOccurances**(`input`, `char`): `number`

Count occurances of a character within a given string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | The string to search |
| `char` | `string` | The character to find |

#### Returns

`number`

#### Defined in

[src/libs/string.ts:202](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/string.ts#L202)

___

### strIsLowerCase

▸ **strIsLowerCase**(`input`): `boolean`

Returns whether the string is lower case.

**`Example`**

```js
strIsLowerCase('abc')
//=> true

strIsLowerCase('ABC')
//=> false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | input string |

#### Returns

`boolean`

#### Defined in

[src/libs/string.ts:118](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/string.ts#L118)

___

### strIsUpperCase

▸ **strIsUpperCase**(`input`): `boolean`

Returns whether the string is upper case.

**`Example`**

```js
strIsUpperCase('abc')
//=> false

strIsUpperCase('ABC')
//=> true
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | input string |

#### Returns

`boolean`

#### Defined in

[src/libs/string.ts:134](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/string.ts#L134)

___

### strLinesRemoveEmpty

▸ **strLinesRemoveEmpty**(`input`): `string`

Takes a multiline string and removes lines that are empty or only contain whitespace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | input string |

#### Returns

`string`

#### Defined in

[src/libs/string.ts:246](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/string.ts#L246)

___

### strLinesTrimLeft

▸ **strLinesTrimLeft**(`input`): `string`

Takes a multiline string and performs a left side trim of whitespace on each line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | input string |

#### Returns

`string`

#### Defined in

[src/libs/string.ts:230](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/string.ts#L230)

___

### strLinesTrimRight

▸ **strLinesTrimRight**(`input`): `string`

Takes a multiline string and performs a right side trim of whitespace on each line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | input string |

#### Returns

`string`

#### Defined in

[src/libs/string.ts:238](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/string.ts#L238)

___

### strPrettifyMinifiedCode

▸ **strPrettifyMinifiedCode**(`input`, `indent?`): `string`

Very crude, simple, fast code formatting of minified code.
Only works when input code:
- is minified
- is scoped with brackets
- expressions end with semicolon
- has no string literals containing any of these characters: '{', '}', ';'.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `string` | `undefined` | The minified source code |
| `indent` | `string` | `'  '` | The string to use as indentation |

#### Returns

`string`

#### Defined in

[src/libs/string.ts:263](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/string.ts#L263)

___

### strRepeat

▸ **strRepeat**(`input`, `n`): `string`

Returns a given number of contatenations of a given input string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | input string |
| `n` | `number` | Number of repetitions of the input string |

#### Returns

`string`

#### Defined in

[src/libs/string.ts:222](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/string.ts#L222)

___

### strReplaceAll

▸ **strReplaceAll**(`input`, `replace`, `replaceWith`, `flags?`): `string`

In a given string, replace all occurances of a given search string with a given replacement string.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `string` | `undefined` | input string |
| `replace` | `string` | `undefined` | string to find a replace |
| `replaceWith` | `string` | `undefined` | string to replace matches with |
| `flags` | `string` | `'g'` | RegExp flags as single string. |

#### Returns

`string`

#### Defined in

[src/libs/string.ts:290](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/string.ts#L290)

___

### strSplitWordByCamelCase

▸ **strSplitWordByCamelCase**(`word`): `string`[]

Returns an array of words in the string

**`Example`**

```js
strSplitWordByCamelCase('someCamelCase')
//=> ['some', 'Camel', 'Case']
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `word` | `string` |

#### Returns

`string`[]

#### Defined in

[src/libs/string.ts:162](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/string.ts#L162)

___

### strToWords

▸ **strToWords**(`input`): `string`[]

Returns an array of words in the string

**`Example`**

```js
strToWords('How are you?')
//=> ['How', 'are', 'you']
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | input string |

#### Returns

`string`[]

#### Defined in

[src/libs/string.ts:147](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/string.ts#L147)

___

### strWrapBetween

▸ **strWrapBetween**(`input`, `before`, `after`): `string`

Inserts provided strings before and after a string.

**`Example`**

```js
expect(util.strWrapBetween('input', '#', '&')).toBe('#input&');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | input string |
| `before` | `string` | string to place before |
| `after` | `string` | string to place after |

#### Returns

`string`

#### Defined in

[src/libs/string.ts:26](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/string.ts#L26)

___

### strWrapIn

▸ **strWrapIn**(`input`, `wrap`): `string`

Inserts a provided string before and after a string.

**`Example`**

```js
expect(util.strWrapIn('input', '#')).toBe('#input#');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | input string |
| `wrap` | `string` | string to place before and after |

#### Returns

`string`

#### Defined in

[src/libs/string.ts:12](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/string.ts#L12)

___

### strWrapInAngleBrackets

▸ **strWrapInAngleBrackets**(`input`): `string`

Wraps a string in angle brackets.

**`Example`**

```js
expect(util.strWrapInAngleBrackets('input')).toBe('<input>');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | input string |

#### Returns

`string`

#### Defined in

[src/libs/string.ts:54](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/string.ts#L54)

___

### strWrapInBraces

▸ **strWrapInBraces**(`input`): `string`

Wraps a string in braces.

**`Example`**

```js
expect(util.strWrapInBraces('input')).toBe('{input}');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | input string |

#### Returns

`string`

#### Defined in

[src/libs/string.ts:66](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/string.ts#L66)

___

### strWrapInBrackets

▸ **strWrapInBrackets**(`input`): `string`

Wraps a string in brackets.

**`Example`**

```js
expect(util.strWrapInBrackets('input')).toBe('[input]');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | input string |

#### Returns

`string`

#### Defined in

[src/libs/string.ts:42](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/string.ts#L42)

___

### strWrapInDoubleQuotes

▸ **strWrapInDoubleQuotes**(`input`): `string`

Wraps a string in parenthesis.

**`Example`**

```js
expect(util.strWrapInDoubleQuotes('input')).toBe('"input"');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | input string |

#### Returns

`string`

#### Defined in

[src/libs/string.ts:102](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/string.ts#L102)

___

### strWrapInParenthesis

▸ **strWrapInParenthesis**(`input`): `string`

Wraps a string in parenthesis.

**`Example`**

```js
expect(util.strWrapInParenthesis('input')).toBe('(input)');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | input string |

#### Returns

`string`

#### Defined in

[src/libs/string.ts:78](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/string.ts#L78)

___

### strWrapInSingleQuotes

▸ **strWrapInSingleQuotes**(`input`): `string`

Wraps a string in parenthesis.

**`Example`**

```js
expect(util.strWrapInSingleQuotes('input')).toBe("'input'");

#### Constructors

- [constructor](#constructor)

### Constructors

#### constructor

• **new Base**()

##### Defined in

[src/libs/Base.ts:9](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/Base.ts#L9)


<a name="classesextensiblefunctionmd"></a>

[@bemoje/node-util](#readmemd) / ExtensibleFunction

## Class: ExtensibleFunction

A Function class that can be extended.

**`Example`**

```ts
class MyFunction<T> extends util.ExtensibleFunction {
  constructor(f: (...args: any[]) => any) {
    let self: MyFunction<T> | undefined = undefined;
    super(f.name, function anonymous(...args: any[]) {
      // do something with self
      return f.call(self, ...args);
    });
    self = this;
  }
}

#### Constructors

- [constructor](#constructor)

#### Properties

- [arguments](#arguments)
- [caller](#caller)
- [length](#length)
- [name](#name)
- [prototype](#prototype)

#### Methods

- [[hasInstance]](ExtensibleFunction.md#[hasinstance])
- [apply](#apply)
- [bind](#bind)
- [call](#call)
- [toString](#tostring)

### Constructors

#### constructor

• **new ExtensibleFunction**(`name`, `f`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `f` | `any` |

##### Overrides

Function.constructor

##### Defined in

[src/libs/function/src/ExtensibleFunction.ts:18](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/function/src/ExtensibleFunction.ts#L18)

### Properties

#### arguments

• **arguments**: `any`

##### Inherited from

Function.arguments

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:304

___

#### caller

• **caller**: `Function`

##### Inherited from

Function.caller

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:305

___

#### length

• `Readonly` **length**: `number`

##### Inherited from

Function.length

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:301

___

#### name

• `Readonly` **name**: `string`

Returns the name of the function. Function names are read-only and can not be changed.

##### Inherited from

Function.name

##### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:97

___

#### prototype

• **prototype**: `any`

##### Inherited from

Function.prototype

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:300

### Methods

#### [hasInstance]

▸ **[hasInstance]**(`value`): `boolean`

Determines whether the given value inherits from this function if this function was used
as a constructor function.

A constructor function can control which objects are recognized as its instances by
'instanceof' by overriding this method.

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

##### Returns

`boolean`

##### Inherited from

Function.\_\_@hasInstance@316

##### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:162

___

#### apply

▸ **apply**(`this`, `thisArg`, `argArray?`): `any`

Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `Function` | - |
| `thisArg` | `any` | The object to be used as the this object. |
| `argArray?` | `any` | A set of arguments to be passed to the function. |

##### Returns

`any`

##### Inherited from

Function.apply

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:280

___

#### bind

▸ **bind**(`this`, `thisArg`, `...argArray`): `any`

For a given function, creates a bound function that has the same body as the original function.

#### Constructors

- [constructor](#constructor)

#### Properties

- [length](#length)
- [[species]](SortedArray.md#[species])

#### Methods

- [[iterator]](SortedArray.md#[iterator])
- [[unscopables]](SortedArray.md#[unscopables])
- [add](#add)
- [addMany](#addmany)
- [at](#at)
- [concat](#concat)
- [copyWithin](#copywithin)
- [entries](#entries)
- [every](#every)
- [fill](#fill)
- [filter](#filter)
- [find](#find)
- [findIndex](#findindex)
- [firstIndexOfCompare](#firstindexofcompare)
- [firstInsertionIndex](#firstinsertionindex)
- [flat](#flat)
- [flatMap](#flatmap)
- [forEach](#foreach)
- [includes](#includes)
- [indexOf](#indexof)
- [indexOfCompare](#indexofcompare)
- [indicesOfCompare](#indicesofcompare)
- [insertionIndex](#insertionindex)
- [intersection](#intersection)
- [join](#join)
- [keys](#keys)
- [lastIndexOf](#lastindexof)
- [lastIndexOfCompare](#lastindexofcompare)
- [lastInsertionIndex](#lastinsertionindex)
- [map](#map)
- [pop](#pop)
- [push](#push)
- [reduce](#reduce)
- [reduceRight](#reduceright)
- [reverse](#reverse)
- [shift](#shift)
- [slice](#slice)
- [some](#some)
- [sort](#sort)
- [splice](#splice)
- [toArray](#toarray)
- [toLocaleString](#tolocalestring)
- [toString](#tostring)
- [unique](#unique)
- [unshift](#unshift)
- [values](#values)
- [from](#from)
- [isArray](#isarray)
- [of](#of)

### Constructors

#### constructor

• **new SortedArray**<`T`\>(`options?`)

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ISortedArrayOptions`](#interfacesisortedarrayoptionsmd)<`T`\> |

##### Overrides

Array.constructor

##### Defined in

[src/libs/datastructures/src/SortedArray.ts:15](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/SortedArray.ts#L15)

### Properties

#### length

• **length**: `number`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

##### Inherited from

Array.length

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1304

___

#### [species]

▪ `Static` `Readonly` **[species]**: `ArrayConstructor`

##### Inherited from

Array.\_\_@species@118

##### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:314

### Methods

#### [iterator]

▸ **[iterator]**(): `IterableIterator`<`any`\>

Iterator

##### Returns

`IterableIterator`<`any`\>

##### Inherited from

Array.\_\_@iterator@12

##### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:60

___

#### [unscopables]

▸ **[unscopables]**(): `Object`

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `copyWithin` | `boolean` |
| `entries` | `boolean` |
| `fill` | `boolean` |
| `find` | `boolean` |
| `findIndex` | `boolean` |
| `keys` | `boolean` |
| `values` | `boolean` |

##### Inherited from

Array.\_\_@unscopables@14

##### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:99

___

#### add

▸ **add**(`element`): [`SortedArray`](#classessortedarraymd)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `T` |

##### Returns

[`SortedArray`](#classessortedarraymd)<`T`\>

##### Defined in

[src/libs/datastructures/src/SortedArray.ts:47](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/SortedArray.ts#L47)

___

#### addMany

▸ **addMany**(`...elements`): [`SortedArray`](#classessortedarraymd)<`T`\>

Add elements to the sorted array.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...elements` | `T`[] | The elements to add to the sorted array |

##### Returns

[`SortedArray`](#classessortedarraymd)<`T`\>

##### Defined in

[src/libs/datastructures/src/SortedArray.ts:68](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/SortedArray.ts#L68)

___

#### at

▸ **at**(`index`): `any`

Returns the item located at the specified index.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The zero-based index of the desired code unit. A negative index will count back from the last item. |

##### Returns

`any`

##### Inherited from

Array.at

##### Defined in

node_modules/typescript/lib/lib.es2022.array.d.ts:26

___

#### concat

▸ **concat**(`...items`): `any`[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `ConcatArray`<`any`\>[] | Additional arrays and/or items to add to the end of the array. |

##### Returns

`any`[]

##### Inherited from

Array.concat

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1328

▸ **concat**(`...items`): `any`[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `any`[] | Additional arrays and/or items to add to the end of the array. |

##### Returns

`any`[]

##### Inherited from

Array.concat

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1334

___

#### copyWithin

▸ **copyWithin**(`target`, `start`, `end?`): [`SortedArray`](#classessortedarraymd)<`T`\>

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

##### Returns

[`SortedArray`](#classessortedarraymd)<`T`\>

##### Inherited from

Array.copyWithin

##### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:64

___

#### entries

▸ **entries**(): `IterableIterator`<[`number`, `any`]\>

Returns an iterable of key, value pairs for every entry in the array

##### Returns

`IterableIterator`<[`number`, `any`]\>

##### Inherited from

Array.entries

##### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:65

___

#### every

▸ **every**<`S`\>(`predicate`, `thisArg?`): this is S[]

Determines whether all the members of an array satisfy the specified test.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `any` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `any`, `index`: `number`, `array`: `any`[]) => value is S | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

##### Returns

this is S[]

##### Inherited from

Array.every

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1411

▸ **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `any`, `index`: `number`, `array`: `any`[]) => `unknown` | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

##### Returns

`boolean`

##### Inherited from

Array.every

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1420

___

#### fill

▸ **fill**(`value`, `start?`, `end?`): [`SortedArray`](#classessortedarraymd)<`T`\>

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | value to fill array section with |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as length+end. |

##### Returns

[`SortedArray`](#classessortedarraymd)<`T`\>

##### Inherited from

Array.fill

##### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:53

___

#### filter

▸ **filter**<`S`\>(`predicate`, `thisArg?`): `S`[]

Returns the elements of an array that meet the condition specified in a callback function.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `any` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `any`, `index`: `number`, `array`: `any`[]) => value is S | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

##### Returns

`S`[]

##### Inherited from

Array.filter

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1447

▸ **filter**(`predicate`, `thisArg?`): `any`[]

Returns the elements of an array that meet the condition specified in a callback function.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `any`, `index`: `number`, `array`: `any`[]) => `unknown` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

##### Returns

`any`[]

##### Inherited from

Array.filter

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1453

___

#### find

▸ **find**<`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `any` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`this`: `void`, `value`: `any`, `index`: `number`, `obj`: `any`[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

##### Returns

`undefined` \| `S`

##### Inherited from

Array.find

##### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:31

▸ **find**(`predicate`, `thisArg?`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `any`, `index`: `number`, `obj`: `any`[]) => `unknown` |
| `thisArg?` | `any` |

##### Returns

`any`

##### Inherited from

Array.find

##### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:32

___

#### findIndex

▸ **findIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `any`, `index`: `number`, `obj`: `any`[]) => `unknown` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

##### Returns

`number`

##### Inherited from

Array.findIndex

##### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:43

___

#### firstIndexOfCompare

▸ **firstIndexOfCompare**(`element`): `number`

Returns the index of the first element that is determined equal by the compare function.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `T` | The element to find |

##### Returns

`number`

##### Defined in

[src/libs/datastructures/src/SortedArray.ts:164](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/SortedArray.ts#L164)

___

#### firstInsertionIndex

▸ **firstInsertionIndex**(`element`): [`number`, `boolean`]

Returns a tuple containing the first index of where to add an element to keep the array sorted and also whether an identical element was found.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `T` | The element for which to find its insertion index |

##### Returns

[`number`, `boolean`]

##### Defined in

[src/libs/datastructures/src/SortedArray.ts:119](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/SortedArray.ts#L119)

___

#### flat

▸ **flat**<`A`, `D`\>(`this`, `depth?`): `FlatArray`<`A`, `D`\>[]

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `D` | extends `number` = ``1`` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `A` | - |
| `depth?` | `D` | The maximum recursion depth |

##### Returns

`FlatArray`<`A`, `D`\>[]

##### Inherited from

Array.flat

##### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:81

___

#### flatMap

▸ **flatMap**<`U`, `This`\>(`callback`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `This` | `undefined` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`this`: `This`, `value`: `any`, `index`: `number`, `array`: `any`[]) => `U` \| readonly `U`[] | A function that accepts up to three arguments. The flatMap method calls the callback function one time for each element in the array. |
| `thisArg?` | `This` | An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used as the this value. |

##### Returns

`U`[]

##### Inherited from

Array.flatMap

##### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:70

___

#### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each element in an array.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `any`, `index`: `number`, `array`: `any`[]) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

##### Returns

`void`

##### Inherited from

Array.forEach

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1435

___

#### includes

▸ **includes**(`searchElement`, `fromIndex?`): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `any` | The element to search for. |
| `fromIndex?` | `number` | The position in this array at which to begin searching for searchElement. |

##### Returns

`boolean`

##### Inherited from

Array.includes

##### Defined in

node_modules/typescript/lib/lib.es2016.array.include.d.ts:27

___

#### indexOf

▸ **indexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `any` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

##### Returns

`number`

##### Inherited from

Array.indexOf

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1396

___

#### indexOfCompare

▸ **indexOfCompare**(`element`): `number`

Returns the index of the first element found that is determined equal by the compare function.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `T` | The element to find |

##### Returns

`number`

##### Defined in

[src/libs/datastructures/src/SortedArray.ts:153](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/SortedArray.ts#L153)

___

#### indicesOfCompare

▸ **indicesOfCompare**(`element`): `number`[]

Returns all indices at which element exists. Equality is determined by the compare function.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `T` | The element to find |

##### Returns

`number`[]

##### Defined in

[src/libs/datastructures/src/SortedArray.ts:186](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/SortedArray.ts#L186)

___

#### insertionIndex

▸ **insertionIndex**(`element`): [`number`, `boolean`]

Returns a tuple containing the index of where to add an element to keep the array sorted and also whether an identical element was found.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `T` | The element for which to find its insertion index |

##### Returns

[`number`, `boolean`]

##### Defined in

[src/libs/datastructures/src/SortedArray.ts:98](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/SortedArray.ts#L98)

___

#### intersection

▸ **intersection**(`sorted`): `T`[]

Returns the interestion of this and another sorted array.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sorted` | `T`[] | another sorted array with which to find intersections |

##### Returns

`T`[]

##### Defined in

[src/libs/datastructures/src/SortedArray.ts:218](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/SortedArray.ts#L218)

___

#### join

▸ **join**(`separator?`): `string`

Adds all the elements of an array into a string, separated by the specified separator string.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | `string` | A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. |

##### Returns

`string`

##### Inherited from

Array.join

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1339

___

#### keys

▸ **keys**(): `IterableIterator`<`number`\>

Returns an iterable of keys in the array

##### Returns

`IterableIterator`<`number`\>

##### Inherited from

Array.keys

##### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:70

___

#### lastIndexOf

▸ **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `any` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array. |

##### Returns

`number`

##### Inherited from

Array.lastIndexOf

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1402

___

#### lastIndexOfCompare

▸ **lastIndexOfCompare**(`element`): `number`

Returns the index of the last element that is determined equal by the compare function.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `T` | The element to find |

##### Returns

`number`

##### Defined in

[src/libs/datastructures/src/SortedArray.ts:175](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/SortedArray.ts#L175)

___

#### lastInsertionIndex

▸ **lastInsertionIndex**(`element`): [`number`, `boolean`]

Returns a tuple containing the last index of where to add an element to keep the array sorted and also whether an identical element was found.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `T` | The element for which to find its insertion index |

##### Returns

[`number`, `boolean`]

##### Defined in

[src/libs/datastructures/src/SortedArray.ts:136](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/SortedArray.ts#L136)

___

#### map

▸ **map**<`U`\>(`callbackfn`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

##### Type parameters

| Name |
| :------ |
| `U` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `any`, `index`: `number`, `array`: `any`[]) => `U` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

##### Returns

`U`[]

##### Inherited from

Array.map

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1441

___

#### pop

▸ **pop**(): `any`

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

##### Returns

`any`

##### Inherited from

Array.pop

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1317

___

#### push

▸ **push**(`...items`): `number`

Appends new elements to the end of an array, and returns the new length of the array.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `any`[] | New elements to add to the array. |

##### Returns

`number`

##### Inherited from

Array.push

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1322

___

#### reduce

▸ **reduce**(`callbackfn`): `any`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `any`, `currentValue`: `any`, `currentIndex`: `number`, `array`: `any`[]) => `any` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

##### Returns

`any`

##### Inherited from

Array.reduce

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1459

▸ **reduce**(`callbackfn`, `initialValue`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `any`, `currentValue`: `any`, `currentIndex`: `number`, `array`: `any`[]) => `any` |
| `initialValue` | `any` |

##### Returns

`any`

##### Inherited from

Array.reduce

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1460

▸ **reduce**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Type parameters

| Name |
| :------ |
| `U` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `any`, `currentIndex`: `number`, `array`: `any`[]) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

##### Returns

`U`

##### Inherited from

Array.reduce

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1466

___

#### reduceRight

▸ **reduceRight**(`callbackfn`): `any`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `any`, `currentValue`: `any`, `currentIndex`: `number`, `array`: `any`[]) => `any` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

##### Returns

`any`

##### Inherited from

Array.reduceRight

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1472

▸ **reduceRight**(`callbackfn`, `initialValue`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `any`, `currentValue`: `any`, `currentIndex`: `number`, `array`: `any`[]) => `any` |
| `initialValue` | `any` |

##### Returns

`any`

##### Inherited from

Array.reduceRight

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1473

▸ **reduceRight**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Type parameters

| Name |
| :------ |
| `U` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `any`, `currentIndex`: `number`, `array`: `any`[]) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

##### Returns

`U`

##### Inherited from

Array.reduceRight

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1479

___

#### reverse

▸ **reverse**(): `any`[]

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

##### Returns

`any`[]

##### Inherited from

Array.reverse

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1344

___

#### shift

▸ **shift**(): `any`

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

##### Returns

`any`

##### Inherited from

Array.shift

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1349

___

#### slice

▸ **slice**(`start?`, `end?`): `any`[]

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0. |
| `end?` | `number` | The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array. |

##### Returns

`any`[]

##### Inherited from

Array.slice

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1359

___

#### some

▸ **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `any`, `index`: `number`, `array`: `any`[]) => `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

##### Returns

`boolean`

##### Inherited from

Array.some

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1429

___

#### sort

▸ **sort**(`compareFn?`): [`SortedArray`](#classessortedarraymd)<`T`\>

Sorts an array in place.

#### Properties

- [columnHeaders](#columnheaders)
- [columns](#columns)
- [data](#data)
- [extractColumnHeaders](#extractcolumnheaders)
- [extractRowHeaders](#extractrowheaders)
- [rowHeaders](#rowheaders)
- [rows](#rows)

### Properties

#### columnHeaders

• `Optional` **columnHeaders**: `string`[]

Define column headers/names.
Must be of same length as entered in the 'columns' option.
When performing lookups in the table from indices or coordinates, headers are ignored, ie. not counted.
When using row headers simultaneously, this array will need to be of length one higher as the first element is intepreted as the column header for the row headers column.

##### Defined in

[src/libs/datastructures/src/Table.ts:37](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Table.ts#L37)

___

#### columns

• `Optional` **columns**: `number`

Number of columns in the table.
This option is not allowed when the 'data' or 'columnHeaders' properties are being used.
TypeScript: Type safety consideration: Please note that when initializing an empty Table, it is full of 'undefined' values even if the table is specifically typed to not allow 'undefined'. TypeScript's static type-checking cannot see this.

##### Defined in

[src/libs/datastructures/src/Table.ts:49](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Table.ts#L49)

___

#### data

• `Optional` **data**: `T`[][]

2D array to build table from.
All rows must be the same length.
When using this option, the 'columns' and 'rows' options are not allowed.

##### Defined in

[src/libs/datastructures/src/Table.ts:16](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Table.ts#L16)

___

#### extractColumnHeaders

• `Optional` **extractColumnHeaders**: `boolean`

Intepret the first row of passed data as column headers/names (see TableOptions.data property).
When performing lookups in the table from indices or coordinates, headers are ignored, ie. not counted.
If the 'data' option is not used, this option is not allowed.
If the 'columnHeaders' option is used, this option is not allowed.

##### Defined in

[src/libs/datastructures/src/Table.ts:23](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Table.ts#L23)

___

#### extractRowHeaders

• `Optional` **extractRowHeaders**: `boolean`

Intepret the first element of every row of passed data as row headers/names (see TableOptions.data property).
When performing lookups in the table from indices or coordinates, headers are ignored, ie. not counted.
If the 'data' option is not used, this option is not allowed.
If the 'rowHeaders' option is used, this option is not allowed.

##### Defined in

[src/libs/datastructures/src/Table.ts:30](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Table.ts#L30)

___

#### rowHeaders

• `Optional` **rowHeaders**: `string`[]

Define column headers/names.
Must be of same length as entered in the 'columns' option.
When performing lookups in the table from indices or coordinates, headers are ignored, ie. not counted.

##### Defined in

[src/libs/datastructures/src/Table.ts:43](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Table.ts#L43)

___

#### rows

• `Optional` **rows**: `number`

Number of rows in the table.
This option is not allowed when the 'data' or 'rowHeaders' properties are being used.
TypeScript: Type safety consideration: Please note that when initializing an empty Table, it is full of 'undefined' values even if the table is specifically typed to not allow 'undefined'. TypeScript's static type-checking cannot see this.

##### Defined in

[src/libs/datastructures/src/Table.ts:55](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Table.ts#L55)

