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

- [Base](docs/classes/Base.md)
- [ExtensibleFunction](docs/classes/ExtensibleFunction.md)
- [Matrix](docs/classes/Matrix.md)
- [SortedArray](docs/classes/SortedArray.md)
- [StringStream](docs/classes/StringStream.md)
- [Table](docs/classes/Table.md)
- [Timer](docs/classes/Timer.md)

### Interfaces

- [IRevivableJSON](docs/interfaces/IRevivableJSON.md)
- [ISortedArrayOptions](docs/interfaces/ISortedArrayOptions.md)
- [ITableOptions](docs/interfaces/ITableOptions.md)

### Type Aliases

- [Callback](README.md#callback)
- [Comparator](README.md#comparator)
- [GenericFunction](README.md#genericfunction)
- [MemoryUsageValues](README.md#memoryusagevalues)
- [MemoryUsageValuesFormatted](README.md#memoryusagevaluesformatted)
- [Predicate](README.md#predicate)
- [RexecOutput](README.md#rexecoutput)
- [TableSerializedForm](README.md#tableserializedform)
- [ensureValidWindowsPathOptions](README.md#ensurevalidwindowspathoptions)
- [primitive](README.md#primitive)

### Variables

- [regexMatchSocialSecurityNumberDK](README.md#regexmatchsocialsecuritynumberdk)

### Functions

- [A1ToColRow](README.md#a1tocolrow)
- [alphaToCol](README.md#alphatocol)
- [arr2dToCSV](README.md#arr2dtocsv)
- [arrAssignFrom](README.md#arrassignfrom)
- [arrEvery](README.md#arrevery)
- [arrFilterMutable](README.md#arrfiltermutable)
- [arrFlatten](README.md#arrflatten)
- [arrFlattenMutable](README.md#arrflattenmutable)
- [arrIndicesOf](README.md#arrindicesof)
- [arrMapMutable](README.md#arrmapmutable)
- [arrShallowEquals](README.md#arrshallowequals)
- [arrShuffle](README.md#arrshuffle)
- [arrSome](README.md#arrsome)
- [arrSortNumeric](README.md#arrsortnumeric)
- [arrSwap](README.md#arrswap)
- [assertValidDateDay](README.md#assertvaliddateday)
- [assertValidDateMonth](README.md#assertvaliddatemonth)
- [assertValidDateYear](README.md#assertvaliddateyear)
- [bytesToInt](README.md#bytestoint)
- [colRowToA1](README.md#colrowtoa1)
- [compareArray](README.md#comparearray)
- [compareNumber](README.md#comparenumber)
- [compareNumberDescending](README.md#comparenumberdescending)
- [compareNumeric](README.md#comparenumeric)
- [compareNumericDescending](README.md#comparenumericdescending)
- [compareString](README.md#comparestring)
- [compareStringDescending](README.md#comparestringdescending)
- [createFileExtensionFilter](README.md#createfileextensionfilter)
- [ensureValidWindowsPath](README.md#ensurevalidwindowspath)
- [getCentury](README.md#getcentury)
- [getCurrentYear](README.md#getcurrentyear)
- [getMemoryUsage](README.md#getmemoryusage)
- [getMemoryUsageFormattedEU](README.md#getmemoryusageformattedeu)
- [getMemoryUsageFormattedUS](README.md#getmemoryusageformattedus)
- [getWorkingDirPath](README.md#getworkingdirpath)
- [htmlTableTo2dArray](README.md#htmltableto2darray)
- [intToBytes](README.md#inttobytes)
- [isConstructor](README.md#isconstructor)
- [isEven](README.md#iseven)
- [isHex](README.md#ishex)
- [isHexOrUnicode](README.md#ishexorunicode)
- [isLeapYear](README.md#isleapyear)
- [isObject](README.md#isobject)
- [isOdd](README.md#isodd)
- [isPrototype](README.md#isprototype)
- [isSocialSecurityNumberDK](README.md#issocialsecuritynumberdk)
- [isValidDateDay](README.md#isvaliddateday)
- [isValidDateMonth](README.md#isvaliddatemonth)
- [isValidDateYear](README.md#isvaliddateyear)
- [iteratePrototypeChain](README.md#iterateprototypechain)
- [normalizeFileExtension](README.md#normalizefileextension)
- [numApproximateLog10](README.md#numapproximatelog10)
- [numDaysInMonth](README.md#numdaysinmonth)
- [numFormatEU](README.md#numformateu)
- [numFormatUS](README.md#numformatus)
- [parseSocialSecurityNumberDK](README.md#parsesocialsecuritynumberdk)
- [randomIntBetween](README.md#randomintbetween)
- [readFileStringSync](README.md#readfilestringsync)
- [regexEscapeString](README.md#regexescapestring)
- [regexGetGroupNames](README.md#regexgetgroupnames)
- [regexMatcherToValidater](README.md#regexmatchertovalidater)
- [rexec](README.md#rexec)
- [round](README.md#round)
- [roundDown](README.md#rounddown)
- [roundUp](README.md#roundup)
- [setEnumerable](README.md#setenumerable)
- [setIntersection](README.md#setintersection)
- [setNonConfigurable](README.md#setnonconfigurable)
- [setNonEnumerable](README.md#setnonenumerable)
- [setNonEnumerablePrivateProperties](README.md#setnonenumerableprivateproperties)
- [setNonWritable](README.md#setnonwritable)
- [setUnion](README.md#setunion)
- [setWritable](README.md#setwritable)
- [solveSudoku](README.md#solvesudoku)
- [strCountCharOccurances](README.md#strcountcharoccurances)
- [strIsLowerCase](README.md#strislowercase)
- [strIsUpperCase](README.md#strisuppercase)
- [strLinesRemoveEmpty](README.md#strlinesremoveempty)
- [strLinesTrimLeft](README.md#strlinestrimleft)
- [strLinesTrimRight](README.md#strlinestrimright)
- [strPrettifyMinifiedCode](README.md#strprettifyminifiedcode)
- [strRepeat](README.md#strrepeat)
- [strReplaceAll](README.md#strreplaceall)
- [strSplitWordByCamelCase](README.md#strsplitwordbycamelcase)
- [strToWords](README.md#strtowords)
- [strWrapBetween](README.md#strwrapbetween)
- [strWrapIn](README.md#strwrapin)
- [strWrapInAngleBrackets](README.md#strwrapinanglebrackets)
- [strWrapInBraces](README.md#strwrapinbraces)
- [strWrapInBrackets](README.md#strwrapinbrackets)
- [strWrapInDoubleQuotes](README.md#strwrapindoublequotes)
- [strWrapInParenthesis](README.md#strwrapinparenthesis)
- [strWrapInSingleQuotes](README.md#strwrapinsinglequotes)
- [streamToString](README.md#streamtostring)

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

[src/libs/array/index.ts:15](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/array/index.ts#L15)

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

[src/libs/sort.ts:1](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/sort.ts#L1)

___

### GenericFunction

Ƭ **GenericFunction**: (...`args`: `any`[]) => `any`

#### Type declaration

▸ (`...args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

#### Defined in

[src/libs/types.ts:10](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/types.ts#L10)

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

[src/libs/node.ts:7](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/node.ts#L7)

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

[src/libs/node.ts:14](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/node.ts#L14)

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

[src/libs/array/index.ts:17](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/array/index.ts#L17)

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

[src/libs/regex.ts:1](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/regex.ts#L1)

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

[src/libs/datastructures/src/Table.ts:58](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/datastructures/src/Table.ts#L58)

___

### ensureValidWindowsPathOptions

Ƭ **ensureValidWindowsPathOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assert?` | `boolean` |
| `extendedMaxLength?` | `boolean` |

#### Defined in

[src/libs/node.ts:108](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/node.ts#L108)

___

### primitive

Ƭ **primitive**: `bigint` \| `boolean` \| ``null`` \| `number` \| `string` \| `symbol` \| `undefined`

#### Defined in

[src/libs/types.ts:1](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/types.ts#L1)

## Variables

### regexMatchSocialSecurityNumberDK

• `Const` **regexMatchSocialSecurityNumberDK**: `RegExp`

#### Defined in

src/libs/parse/src/socialSecurityNumberDK.ts:5

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

[src/libs/spreadsheet/src/A1ToColRow.ts:11](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/spreadsheet/src/A1ToColRow.ts#L11)

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

[src/libs/spreadsheet/src/letterToCol.ts:9](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/spreadsheet/src/letterToCol.ts#L9)

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

[src/libs/array/src/arr2dToCSV.ts:6](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/array/src/arr2dToCSV.ts#L6)

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

[src/libs/array/src/arrAssignFrom.ts:4](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/array/src/arrAssignFrom.ts#L4)

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
| `predicate` | [`Predicate`](README.md#predicate) | A predicate callback function |

#### Returns

`boolean`

#### Defined in

[src/libs/array/src/arrEvery.ts:9](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/array/src/arrEvery.ts#L9)

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
| `f` | [`Predicate`](README.md#predicate) | predicate |

#### Returns

`T`[]

#### Defined in

[src/libs/array/src/arrFilterMutable.ts:8](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/array/src/arrFilterMutable.ts#L8)

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

[src/libs/array/src/arrFlatten.ts:6](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/array/src/arrFlatten.ts#L6)

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

[src/libs/array/src/arrFlattenMutable.ts:9](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/array/src/arrFlattenMutable.ts#L9)

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

[src/libs/array/src/arrIndicesOf.ts:7](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/array/src/arrIndicesOf.ts#L7)

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
| `f` | [`Callback`](README.md#callback) | iterator |

#### Returns

`any`[]

#### Defined in

[src/libs/array/src/arrMapMutable.ts:17](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/array/src/arrMapMutable.ts#L17)

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

[src/libs/array/src/arrShallowEquals.ts:8](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/array/src/arrShallowEquals.ts#L8)

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

[src/libs/array/src/arrShuffle.ts:8](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/array/src/arrShuffle.ts#L8)

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
| `predicate` | [`Predicate`](README.md#predicate) | A predicate callback function |

#### Returns

`boolean`

#### Defined in

[src/libs/array/src/arrSome.ts:9](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/array/src/arrSome.ts#L9)

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

[src/libs/array/src/arrSortNumeric.ts:7](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/array/src/arrSortNumeric.ts#L7)

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

[src/libs/array/src/arrSwap.ts:7](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/array/src/arrSwap.ts#L7)

___

### assertValidDateDay

▸ **assertValidDateDay**(`day`, `month`, `year?`): `void`

Throws an error if the day of the month is invalid.

#### Parameters

| Name | Type |
| :------ | :------ |
| `day` | `number` |
| `month` | `number` |
| `year?` | `number` |

#### Returns

`void`

#### Defined in

src/libs/date/src/assertValidDateDay.ts:6

___

### assertValidDateMonth

▸ **assertValidDateMonth**(`month`): `void`

Throws error if the given month is invalid.

#### Parameters

| Name | Type |
| :------ | :------ |
| `month` | `number` |

#### Returns

`void`

#### Defined in

src/libs/date/src/assertValidDateMonth.ts:6

___

### assertValidDateYear

▸ **assertValidDateYear**(`year`): `void`

Throws if the given year is invalid.

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`void`

#### Defined in

src/libs/date/src/assertValidDateYear.ts:6

___

### bytesToInt

▸ **bytesToInt**(`bytes`): `number`

Converts a byte-array to an integer.
Throws Error if the input is an invalid byte-array or corresponds to an integer value larger than 256^5.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `number`[] |

#### Returns

`number`

#### Defined in

src/libs/binary/src/bytesToInt.ts:5

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

[src/libs/spreadsheet/src/colRowToA1.ts:8](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/spreadsheet/src/colRowToA1.ts#L8)

___

### compareArray

▸ **compareArray**(`comparator`, `descending?`): [`Comparator`](README.md#comparator)

Returns a given comparator as an array compatible comparator. Behaves as if the array to sort was recursively flattened.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `comparator` | [`Comparator`](README.md#comparator) | `undefined` | compare function |
| `descending` | `boolean` | `false` | whether the input comparator sorts in descending order |

#### Returns

[`Comparator`](README.md#comparator)

#### Defined in

[src/libs/sort.ts:8](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/sort.ts#L8)

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

[src/libs/sort.ts:68](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/sort.ts#L68)

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

[src/libs/sort.ts:77](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/sort.ts#L77)

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

[src/libs/sort.ts:86](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/sort.ts#L86)

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

[src/libs/sort.ts:100](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/sort.ts#L100)

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

[src/libs/sort.ts:114](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/sort.ts#L114)

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

[src/libs/sort.ts:123](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/sort.ts#L123)

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

[src/libs/node.ts:96](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/node.ts#L96)

___

### ensureValidWindowsPath

▸ **ensureValidWindowsPath**(`path`, `options?`): `boolean`

Check whether a provided windows filesystem path string is valid according to:
https://msdn.microsoft.com/en-us/library/windows/desktop/aa365247(v=vs.85).aspx

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to validate |
| `options?` | [`ensureValidWindowsPathOptions`](README.md#ensurevalidwindowspathoptions) | - |

#### Returns

`boolean`

#### Defined in

[src/libs/node.ts:120](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/node.ts#L120)

___

### getCentury

▸ **getCentury**(`year`): `number`

Get century from year.

**`Example`**

```js
getCentury(2009);
//=> 21
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`number`

#### Defined in

src/libs/date/src/getCentury.ts:11

___

### getCurrentYear

▸ **getCurrentYear**(): `number`

Returns the current year (UTC full year).

#### Returns

`number`

#### Defined in

src/libs/date/src/getCurrentYear.ts:4

___

### getMemoryUsage

▸ **getMemoryUsage**(): [`MemoryUsageValues`](README.md#memoryusagevalues)

Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.

#### Returns

[`MemoryUsageValues`](README.md#memoryusagevalues)

#### Defined in

[src/libs/node.ts:36](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/node.ts#L36)

___

### getMemoryUsageFormattedEU

▸ **getMemoryUsageFormattedEU**(): [`MemoryUsageValuesFormatted`](README.md#memoryusagevaluesformatted)

Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
The values are formatted strings in the style of 5.000,00

#### Returns

[`MemoryUsageValuesFormatted`](README.md#memoryusagevaluesformatted)

#### Defined in

[src/libs/node.ts:50](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/node.ts#L50)

___

### getMemoryUsageFormattedUS

▸ **getMemoryUsageFormattedUS**(): [`MemoryUsageValuesFormatted`](README.md#memoryusagevaluesformatted)

Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
The values are formatted strings in the style of 5,000.00

#### Returns

[`MemoryUsageValuesFormatted`](README.md#memoryusagevaluesformatted)

#### Defined in

[src/libs/node.ts:58](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/node.ts#L58)

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

[src/libs/node.ts:66](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/node.ts#L66)

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

[src/libs/html/src/htmlTableTo2dArray.ts:7](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/html/src/htmlTableTo2dArray.ts#L7)

___

### intToBytes

▸ **intToBytes**(`int`): `number`[]

Converts a positive integer to a byte array.
Throws Error if the input is larger than 256^5 or not a positive integer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `int` | `number` |

#### Returns

`number`[]

#### Defined in

src/libs/binary/src/intToBytes.ts:5

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

src/libs/validation/src/isConstructor.ts:7

___

### isEven

▸ **isEven**(`n`): `boolean`

Returns true if a given interger is even.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`boolean`

#### Defined in

src/libs/number/src/isEven.ts:4

___

### isHex

▸ **isHex**(`s`): `boolean`

Determine whether a string is a hexadecimal string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`boolean`

#### Defined in

src/libs/validation/src/isHex.ts:4

___

### isHexOrUnicode

▸ **isHexOrUnicode**(`s`): `boolean`

Determine whether a string is either a hexadecimal or a '\u' or '0x' prepended unicode hex string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`boolean`

#### Defined in

src/libs/validation/src/isHexOrUnicode.ts:4

___

### isLeapYear

▸ **isLeapYear**(`year`): `boolean`

Check whether a given year is a leap year.

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`boolean`

#### Defined in

src/libs/date/src/isLeapYear.ts:6

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

src/libs/validation/src/isObject.ts:5

___

### isOdd

▸ **isOdd**(`n`): `boolean`

Returns true if a given interger is odd.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`boolean`

#### Defined in

src/libs/number/src/isOdd.ts:4

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

src/libs/validation/src/isPrototype.ts:7

___

### isSocialSecurityNumberDK

▸ **isSocialSecurityNumberDK**(`s`): `boolean`

Determine whether a string is a valid Danish social security number.

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`boolean`

#### Defined in

src/libs/parse/src/socialSecurityNumberDK.ts:45

___

### isValidDateDay

▸ **isValidDateDay**(`day`, `month`, `year?`): `boolean`

Returns whether a day of month is a valid date for the given month and year.

#### Parameters

| Name | Type |
| :------ | :------ |
| `day` | `number` |
| `month` | `number` |
| `year?` | `number` |

#### Returns

`boolean`

#### Defined in

src/libs/date/src/isValidDateDay.ts:6

___

### isValidDateMonth

▸ **isValidDateMonth**(`month`): `boolean`

Check if a given month number is valid.

#### Parameters

| Name | Type |
| :------ | :------ |
| `month` | `number` |

#### Returns

`boolean`

#### Defined in

src/libs/date/src/isValidDateMonth.ts:4

___

### isValidDateYear

▸ **isValidDateYear**(`year`): `boolean`

Checks if the given year is a valid year > 0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`boolean`

#### Defined in

src/libs/date/src/isValidDateYear.ts:4

___

### iteratePrototypeChain

▸ **iteratePrototypeChain**(`object`): `Generator`<`Record`<`string`, `any`\>\>

Iterate the prototype chain of a given object.

**`Example`**

```js
class A {}
class B extends A {}
class C extends B {}
const instance = new C()

iteratePrototypeChain(C)
//=> [ C, B, A, Function.prototype, Object.prototype]

iteratePrototypeChain(C.prototype)
//=> [C.prototype, B.prototype, A.prototype, Object.prototype]

iteratePrototypeChain(instance)
//=> [instance, C.prototype, B.prototype, A.prototype, Object.prototype]
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Record`<`string`, `any`\> |

#### Returns

`Generator`<`Record`<`string`, `any`\>\>

#### Defined in

[src/libs/object.ts:85](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/object.ts#L85)

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

[src/libs/node.ts:83](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/node.ts#L83)

___

### numApproximateLog10

▸ **numApproximateLog10**(`n`): `number`

Approximate the logarithm base 10 of a small integer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`number`

#### Defined in

src/libs/number/src/numApproximateLog10.ts:6

___

### numDaysInMonth

▸ **numDaysInMonth**(`month`, `year?`): `number`

Get number of days that there are in a given month of a given year.
Note: The number of days in february depends on whether it is leap year. If no year is given, it is assumed that it is not leap year.

#### Parameters

| Name | Type |
| :------ | :------ |
| `month` | `number` |
| `year?` | `number` |

#### Returns

`number`

#### Defined in

src/libs/date/src/numDaysInMonth.ts:10

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

src/libs/number/src/numFormatEU.ts:10

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

src/libs/number/src/numFormatUS.ts:9

___

### parseSocialSecurityNumberDK

▸ **parseSocialSecurityNumberDK**(`ssn`): `Object`

Extract birthdate (yyyy,mm,dd), four digit id and sex from a Danish social security number.
Assumes birth dates are at most 100 years in the past.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ssn` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `day` | `number` |
| `id` | `number` |
| `month` | `number` |
| `sex` | `string` |
| `year` | `number` |

#### Defined in

src/libs/parse/src/socialSecurityNumberDK.ts:11

___

### randomIntBetween

▸ **randomIntBetween**(`min`, `max`): `number`

Returns a random integer between min (inclusive) and max (inclusive).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | The lower bound integer. |
| `max` | `number` | The upper bound integer. |

#### Returns

`number`

#### Defined in

src/libs/number/src/randomIntBetween.ts:6

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

[src/libs/node.ts:74](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/node.ts#L74)

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

[src/libs/regex.ts:67](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/regex.ts#L67)

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

[src/libs/regex.ts:56](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/regex.ts#L56)

___

### regexMatcherToValidater

▸ **regexMatcherToValidater**(`regex`): `RegExp`

Convert a regex for matching to a regex for validation.

**`Example`**

```js
const regexMatchDigits = /\d/g;
const regexIsDigit = regexMatcherToValidater(regexMatchDigits); //=> /^\d$/
const isDigit = (str) => regexIsDigit.test(str)
isDigit('1') //=> true
isDigit('a') //=> false
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `regex` | `RegExp` |

#### Returns

`RegExp`

#### Defined in

[src/libs/regex.ts:81](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/regex.ts#L81)

___

### rexec

▸ **rexec**(`regex`, `str`): `Generator`<[`RexecOutput`](README.md#rexecoutput)\>

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

`Generator`<[`RexecOutput`](README.md#rexecoutput)\>

#### Defined in

[src/libs/regex.ts:40](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/regex.ts#L40)

___

### round

▸ **round**(`n`, `decimalPoints?`): `number`

Round value with a given number of decimal points.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `n` | `number` | `undefined` | the number to round. |
| `decimalPoints` | `number` | `0` | the number of decimal points. |

#### Returns

`number`

#### Defined in

src/libs/number/src/round.ts:6

___

### roundDown

▸ **roundDown**(`n`): `number`

Round number down to the nearest integer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`number`

#### Defined in

src/libs/number/src/roundDown.ts:4

___

### roundUp

▸ **roundUp**(`n`): `number`

Round number up to the nearest integer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`number`

#### Defined in

src/libs/number/src/roundUp.ts:4

___

### setEnumerable

▸ **setEnumerable**<`T`\>(`object`, `...propertyNames`): `void`

Set multiple 'enumerable' property descriptor attributes of the target object to true.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | The target object. |
| `...propertyNames` | `string`[] | - |

#### Returns

`void`

#### Defined in

[src/libs/object.ts:8](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/object.ts#L8)

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

[src/libs/set.ts:5](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/set.ts#L5)

___

### setNonConfigurable

▸ **setNonConfigurable**<`T`\>(`object`, `...propertyNames`): `void`

Set multiple 'configurable' property descriptor attributes of the target object to false.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | The target object. |
| `...propertyNames` | `string`[] | - |

#### Returns

`void`

#### Defined in

[src/libs/object.ts:52](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/object.ts#L52)

___

### setNonEnumerable

▸ **setNonEnumerable**<`T`\>(`object`, `...propertyNames`): `void`

Set multiple 'enumerable' property descriptor attributes of the target object to false.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | The target object. |
| `...propertyNames` | `string`[] | - |

#### Returns

`void`

#### Defined in

[src/libs/object.ts:19](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/object.ts#L19)

___

### setNonEnumerablePrivateProperties

▸ **setNonEnumerablePrivateProperties**(`object`): `void`

Set the 'enumerable' property descriptor attributes on the target object to false for all property names that start with '_' (underscore).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `Record`<`string`, `any`\> | The target object. |

#### Returns

`void`

#### Defined in

[src/libs/object.ts:62](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/object.ts#L62)

___

### setNonWritable

▸ **setNonWritable**<`T`\>(`object`, `...propertyNames`): `void`

Set multiple 'writable' property descriptor attributes of the target object to false.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | The target object. |
| `...propertyNames` | `string`[] | - |

#### Returns

`void`

#### Defined in

[src/libs/object.ts:41](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/object.ts#L41)

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

[src/libs/set.ts:21](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/set.ts#L21)

___

### setWritable

▸ **setWritable**<`T`\>(`object`, `...propertyNames`): `void`

Set multiple 'writable' property descriptor attributes of the target object to true.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | The target object. |
| `...propertyNames` | `string`[] | - |

#### Returns

`void`

#### Defined in

[src/libs/object.ts:30](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/object.ts#L30)

___

### solveSudoku

▸ **solveSudoku**(`sudoku`): `Sudoku`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sudoku` | (`undefined` \| `number`)[][] |

#### Returns

`Sudoku`

#### Defined in

src/libs/Misc/src/solveSudoku.ts:197

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

[src/libs/string.ts:202](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/string.ts#L202)

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

[src/libs/string.ts:118](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/string.ts#L118)

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

[src/libs/string.ts:134](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/string.ts#L134)

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

[src/libs/string.ts:246](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/string.ts#L246)

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

[src/libs/string.ts:230](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/string.ts#L230)

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

[src/libs/string.ts:238](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/string.ts#L238)

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

[src/libs/string.ts:263](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/string.ts#L263)

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

[src/libs/string.ts:222](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/string.ts#L222)

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

[src/libs/string.ts:290](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/string.ts#L290)

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

[src/libs/string.ts:162](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/string.ts#L162)

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

[src/libs/string.ts:147](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/string.ts#L147)

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

[src/libs/string.ts:26](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/string.ts#L26)

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

[src/libs/string.ts:12](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/string.ts#L12)

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

[src/libs/string.ts:54](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/string.ts#L54)

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

[src/libs/string.ts:66](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/string.ts#L66)

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

[src/libs/string.ts:42](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/string.ts#L42)

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

[src/libs/string.ts:102](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/string.ts#L102)

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

[src/libs/string.ts:78](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/string.ts#L78)

___

### strWrapInSingleQuotes

▸ **strWrapInSingleQuotes**(`input`): `string`

Wraps a string in parenthesis.

**`Example`**

```js
expect(util.strWrapInSingleQuotes('input')).toBe("'input'");
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | input string |

#### Returns

`string`

#### Defined in

[src/libs/string.ts:90](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/string.ts#L90)

___

### streamToString

▸ **streamToString**(`stream`): `Promise`<`string`\>

Drain a Readable into a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | `Readable` | a Readable of string chunks |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/libs/node.ts:186](https://github.com/bemoje/bemoje-node-util/blob/32b3db2/src/libs/node.ts#L186)

