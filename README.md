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


### Namespaces

- [regexLibrary](modules/regexLibrary.md)

### Classes

- [Base](docs/classes/Base.md)
- [BemojeRegex](docs/classes/BemojeRegex.md)
- [ExtensibleFunction](docs/classes/ExtensibleFunction.md)
- [Matrix](docs/classes/Matrix.md)
- [Queue](docs/classes/Queue.md)
- [SortedArray](docs/classes/SortedArray.md)
- [StringStream](docs/classes/StringStream.md)
- [Table](docs/classes/Table.md)
- [Timer](docs/classes/Timer.md)

### Interfaces

- [IRevivable](docs/interfaces/IRevivable.md)
- [ISortedArrayOptions](docs/interfaces/ISortedArrayOptions.md)
- [ITableOptions](docs/interfaces/ITableOptions.md)

### Type Aliases

- [BemojeRegexOptions](README.md#bemojeregexoptions)
- [Callback](README.md#callback)
- [GenericFunction](README.md#genericfunction)
- [MemoryUsageValues](README.md#memoryusagevalues)
- [MemoryUsageValuesFormatted](README.md#memoryusagevaluesformatted)
- [Predicate](README.md#predicate)
- [RexecYield](README.md#rexecyield)
- [TableSerializedForm](README.md#tableserializedform)
- [ensureValidWindowsPathOptions](README.md#ensurevalidwindowspathoptions)
- [matchBetweenFunction](README.md#matchbetweenfunction)
- [matchBetweenYield](README.md#matchbetweenyield)
- [primitive](README.md#primitive)

### Functions

- [A1ToColRow](README.md#a1tocolrow)
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
- [assertValidDate](README.md#assertvaliddate)
- [assertValidDateDay](README.md#assertvaliddateday)
- [assertValidDateMonth](README.md#assertvaliddatemonth)
- [assertValidDateYear](README.md#assertvaliddateyear)
- [asyncWithTimeout](README.md#asyncwithtimeout)
- [atob](README.md#atob)
- [btoa](README.md#btoa)
- [buildRegexBetween](README.md#buildregexbetween)
- [bytesToInt](README.md#bytestoint)
- [colRowToA1](README.md#colrowtoa1)
- [colToLetter](README.md#coltoletter)
- [compareArray](README.md#comparearray)
- [compareNumber](README.md#comparenumber)
- [compareNumberDescending](README.md#comparenumberdescending)
- [compareNumeric](README.md#comparenumeric)
- [compareNumericDescending](README.md#comparenumericdescending)
- [compareString](README.md#comparestring)
- [compareStringDescending](README.md#comparestringdescending)
- [createFileExtensionFilter](README.md#createfileextensionfilter)
- [ensureValidWindowsPath](README.md#ensurevalidwindowspath)
- [generateUnitTests](README.md#generateunittests)
- [getCentury](README.md#getcentury)
- [getCurrentYear](README.md#getcurrentyear)
- [htmlTableTo2dArray](README.md#htmltableto2darray)
- [intToArrayBytes](README.md#inttoarraybytes)
- [intToBuffer](README.md#inttobuffer)
- [intToBytes](README.md#inttobytes)
- [isConstructor](README.md#isconstructor)
- [isEven](README.md#iseven)
- [isHex](README.md#ishex)
- [isHexOrUnicode](README.md#ishexorunicode)
- [isIterable](README.md#isiterable)
- [isLeapYear](README.md#isleapyear)
- [isNumericString](README.md#isnumericstring)
- [isObject](README.md#isobject)
- [isOdd](README.md#isodd)
- [isPrototype](README.md#isprototype)
- [isSocialSecurityNumberDK](README.md#issocialsecuritynumberdk)
- [isValidDate](README.md#isvaliddate)
- [isValidDateDay](README.md#isvaliddateday)
- [isValidDateMonth](README.md#isvaliddatemonth)
- [isValidDateYear](README.md#isvaliddateyear)
- [iteratePrototypeChain](README.md#iterateprototypechain)
- [letterToCol](README.md#lettertocol)
- [mapGetOrDefault](README.md#mapgetordefault)
- [mapUpdate](README.md#mapupdate)
- [mapUpdateDefault](README.md#mapupdatedefault)
- [memoryUsage](README.md#memoryusage)
- [memoryUsageEuFormat](README.md#memoryusageeuformat)
- [memoryUsageUsFormat](README.md#memoryusageusformat)
- [normalizeFileExtension](README.md#normalizefileextension)
- [normalizeLineLengths](README.md#normalizelinelengths)
- [numApproximateLog10](README.md#numapproximatelog10)
- [numDaysInMonth](README.md#numdaysinmonth)
- [numFormatEU](README.md#numformateu)
- [numFormatUS](README.md#numformatus)
- [padArrayBytesLeft](README.md#padarraybytesleft)
- [padArrayBytesRight](README.md#padarraybytesright)
- [parseSocialSecurityNumberDK](README.md#parsesocialsecuritynumberdk)
- [pathFromCwd](README.md#pathfromcwd)
- [randomIntBetween](README.md#randomintbetween)
- [readFileStringSync](README.md#readfilestringsync)
- [regexEscapeString](README.md#regexescapestring)
- [regexFixFlags](README.md#regexfixflags)
- [regexGetGroupNames](README.md#regexgetgroupnames)
- [regexIsValidFlags](README.md#regexisvalidflags)
- [regexMatchBetween](README.md#regexmatchbetween)
- [regexMatcherToValidater](README.md#regexmatchertovalidater)
- [regexValidFlags](README.md#regexvalidflags)
- [rexec](README.md#rexec)
- [round](README.md#round)
- [roundDown](README.md#rounddown)
- [roundUp](README.md#roundup)
- [setDifference](README.md#setdifference)
- [setEnumerable](README.md#setenumerable)
- [setIntersection](README.md#setintersection)
- [setIsSuperset](README.md#setissuperset)
- [setNonConfigurable](README.md#setnonconfigurable)
- [setNonEnumerable](README.md#setnonenumerable)
- [setNonEnumerablePrivateProperties](README.md#setnonenumerableprivateproperties)
- [setNonWritable](README.md#setnonwritable)
- [setSymmetricDifference](README.md#setsymmetricdifference)
- [setUnion](README.md#setunion)
- [setWritable](README.md#setwritable)
- [strCountCharOccurances](README.md#strcountcharoccurances)
- [strCountChars](README.md#strcountchars)
- [strIsLowerCase](README.md#strislowercase)
- [strIsUpperCase](README.md#strisuppercase)
- [strLinesRemoveEmpty](README.md#strlinesremoveempty)
- [strLinesTrimLeft](README.md#strlinestrimleft)
- [strLinesTrimRight](README.md#strlinestrimright)
- [strPrettifyMinifiedCode](README.md#strprettifyminifiedcode)
- [strRemoveDuplicateChars](README.md#strremoveduplicatechars)
- [strRepeat](README.md#strrepeat)
- [strReplaceAll](README.md#strreplaceall)
- [strSortChars](README.md#strsortchars)
- [strSplitCamelCase](README.md#strsplitcamelcase)
- [strToCharCodes](README.md#strtocharcodes)
- [strToCharSet](README.md#strtocharset)
- [strToSentences](README.md#strtosentences)
- [strToWords](README.md#strtowords)
- [strUnwrap](README.md#strunwrap)
- [strWrapBetween](README.md#strwrapbetween)
- [strWrapIn](README.md#strwrapin)
- [strWrapInAngleBrackets](README.md#strwrapinanglebrackets)
- [strWrapInBraces](README.md#strwrapinbraces)
- [strWrapInBrackets](README.md#strwrapinbrackets)
- [strWrapInDoubleQuotes](README.md#strwrapindoublequotes)
- [strWrapInParenthesis](README.md#strwrapinparenthesis)
- [strWrapInSingleQuotes](README.md#strwrapinsinglequotes)
- [streamToString](README.md#streamtostring)
- [trimArrayBytesLeft](README.md#trimarraybytesleft)
- [trimArrayBytesRight](README.md#trimarraybytesright)

## Type Aliases

### BemojeRegexOptions

Ƭ **BemojeRegexOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `escapeSourceString?` | `boolean` | Whether to insert escape characters into the source string. |
| `fixFlags?` | `boolean` | Whether to repair the flags string if it is not valid. |

#### Defined in

[src/libs/regex/src/BemojeRegex.ts:11](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/regex/src/BemojeRegex.ts#L11)

___

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

[src/libs/types/index.ts:3](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/types/index.ts#L3)

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

[src/libs/types/index.ts:2](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/types/index.ts#L2)

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

[src/libs/node/index.ts:1](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/node/index.ts#L1)

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

[src/libs/node/index.ts:7](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/node/index.ts#L7)

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

[src/libs/types/index.ts:4](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/types/index.ts#L4)

___

### RexecYield

Ƭ **RexecYield**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `groups` | `Record`<`string`, `string`\> |
| `index` | `number` |
| `lastIndex` | `number` |
| `match` | `string` |

#### Defined in

[src/libs/regex/index.ts:1](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/regex/index.ts#L1)

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

[src/libs/datastructures/src/Table.ts:59](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/datastructures/src/Table.ts#L59)

___

### ensureValidWindowsPathOptions

Ƭ **ensureValidWindowsPathOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assert?` | `boolean` |
| `extendedMaxLength?` | `boolean` |

#### Defined in

[src/libs/node/src/ensureValidWindowsPath.ts:3](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/node/src/ensureValidWindowsPath.ts#L3)

___

### matchBetweenFunction

Ƭ **matchBetweenFunction**: (`input`: `string`) => `Generator`<[`matchBetweenYield`](README.md#matchbetweenyield)\>

#### Type declaration

▸ (`input`): `Generator`<[`matchBetweenYield`](README.md#matchbetweenyield)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

##### Returns

`Generator`<[`matchBetweenYield`](README.md#matchbetweenyield)\>

#### Defined in

[src/libs/regex/index.ts:12](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/regex/index.ts#L12)

___

### matchBetweenYield

Ƭ **matchBetweenYield**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `left` | [`RexecYield`](README.md#rexecyield) |
| `mid` | [`RexecYield`](README.md#rexecyield) |
| `right` | [`RexecYield`](README.md#rexecyield) |

#### Defined in

[src/libs/regex/index.ts:7](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/regex/index.ts#L7)

___

### primitive

Ƭ **primitive**: `bigint` \| `boolean` \| ``null`` \| `number` \| `string` \| `symbol` \| `undefined`

#### Defined in

[src/libs/types/index.ts:1](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/types/index.ts#L1)

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

[src/libs/spreadsheet/src/A1ToColRow.ts:11](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/spreadsheet/src/A1ToColRow.ts#L11)

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

[src/libs/array/src/arr2dToCSV.ts:6](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/array/src/arr2dToCSV.ts#L6)

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

[src/libs/array/src/arrAssignFrom.ts:4](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/array/src/arrAssignFrom.ts#L4)

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

[src/libs/array/src/arrEvery.ts:9](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/array/src/arrEvery.ts#L9)

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

[src/libs/array/src/arrFilterMutable.ts:8](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/array/src/arrFilterMutable.ts#L8)

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

[src/libs/array/src/arrFlatten.ts:6](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/array/src/arrFlatten.ts#L6)

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

[src/libs/array/src/arrFlattenMutable.ts:9](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/array/src/arrFlattenMutable.ts#L9)

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

[src/libs/array/src/arrIndicesOf.ts:7](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/array/src/arrIndicesOf.ts#L7)

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

[src/libs/array/src/arrMapMutable.ts:17](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/array/src/arrMapMutable.ts#L17)

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

[src/libs/array/src/arrShallowEquals.ts:8](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/array/src/arrShallowEquals.ts#L8)

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

[src/libs/array/src/arrShuffle.ts:8](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/array/src/arrShuffle.ts#L8)

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

[src/libs/array/src/arrSome.ts:9](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/array/src/arrSome.ts#L9)

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

[src/libs/array/src/arrSortNumeric.ts:7](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/array/src/arrSortNumeric.ts#L7)

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

[src/libs/array/src/arrSwap.ts:7](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/array/src/arrSwap.ts#L7)

___

### assertValidDate

▸ **assertValidDate**(`year?`, `month?`, `day?`, `hour?`, `minute?`, `second?`, `millisecond?`): `void`

Throws if the given year is invalid.

#### Parameters

| Name | Type |
| :------ | :------ |
| `year?` | `string` \| `number` |
| `month?` | `string` \| `number` |
| `day?` | `string` \| `number` |
| `hour?` | `string` \| `number` |
| `minute?` | `string` \| `number` |
| `second?` | `string` \| `number` |
| `millisecond?` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[src/libs/date/src/assertValidDate.ts:6](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/date/src/assertValidDate.ts#L6)

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

[src/libs/date/src/assertValidDateDay.ts:6](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/date/src/assertValidDateDay.ts#L6)

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

[src/libs/date/src/assertValidDateMonth.ts:6](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/date/src/assertValidDateMonth.ts#L6)

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

[src/libs/date/src/assertValidDateYear.ts:6](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/date/src/assertValidDateYear.ts#L6)

___

### asyncWithTimeout

▸ **asyncWithTimeout**<`T`\>(`timeout`, `task`, `...args`): `Promise`<`T`\>

Executes an async task with a timeout.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timeout` | `number` | The timeout in milliseconds. |
| `task` | (...`args`: `any`[]) => `Promise`<`T`\> | The async task to execute. |
| `...args` | `any`[] | The arguments to pass to the task. |

#### Returns

`Promise`<`T`\>

A promise that resolves with the task's result or rejects with an error.

#### Defined in

[src/libs/async/src/asyncWithTimeout.ts:8](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/async/src/asyncWithTimeout.ts#L8)

___

### atob

▸ **atob**(`str`): `Buffer`

Converts a base64 buffer to a string

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`Buffer`

#### Defined in

[src/libs/binary/src/atob.ts:4](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/binary/src/atob.ts#L4)

___

### btoa

▸ **btoa**(`buf`): `string`

Converts a string to a base64 buffer

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `Buffer` |

#### Returns

`string`

#### Defined in

[src/libs/binary/src/btoa.ts:4](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/binary/src/btoa.ts#L4)

___

### buildRegexBetween

▸ **buildRegexBetween**(`left`, `right`, `flags?`): `RegExp`

Builds a regex that matches a string between two strings. Supports regex instead of string.

**`Example`**

```ts
const regex = buildRegexBetween(/a/, /b/)
'abc'.match(regex)?.groups?.mid // 'c'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `string` \| `RegExp` | string or regex to match before |
| `right` | `string` \| `RegExp` | string or regex to match after |
| `flags?` | `string` | regex flags - 'g' and 's' are always added to whatever flags are passed. |

#### Returns

`RegExp`

#### Defined in

[src/libs/regex/src/buildRegexBetween.ts:15](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/regex/src/buildRegexBetween.ts#L15)

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

[src/libs/binary/src/bytesToInt.ts:5](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/binary/src/bytesToInt.ts#L5)

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

[src/libs/spreadsheet/src/colRowToA1.ts:8](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/spreadsheet/src/colRowToA1.ts#L8)

___

### colToLetter

▸ **colToLetter**(`col`, `zeroIndexed?`): `string`

Convert a spreadsheet column number to a column letter.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `col` | `number` | `undefined` | Column number |
| `zeroIndexed` | `boolean` | `false` | Whether or not column number start at one or zero. |

#### Returns

`string`

#### Defined in

[src/libs/spreadsheet/src/colToLetter.ts:8](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/spreadsheet/src/colToLetter.ts#L8)

___

### compareArray

▸ **compareArray**(`comparator`, `descending?`): (`a`: `any`, `b`: `any`) => `number`

Returns a given comparator as an array compatible comparator. Behaves as if the array to sort was recursively flattened.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `comparator` | (`a`: `any`, `b`: `any`) => `number` | `undefined` | compare function |
| `descending` | `boolean` | `false` | whether the input comparator sorts in descending order |

#### Returns

`fn`

▸ (`a`, `b`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |
| `b` | `any` |

##### Returns

`number`

#### Defined in

[src/libs/sort/src/compareArray.ts:6](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/sort/src/compareArray.ts#L6)

___

### compareNumber

▸ **compareNumber**(`a`, `b`): `number`

Number comparator function (ascending)

**`Example`**

```ts
const arr = [3, 1, 4, 1, 5]
arr.sort(compareNumber) // [1, 1, 3, 4, 5]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | first value to compare |
| `b` | `number` | second value to compare |

#### Returns

`number`

#### Defined in

[src/libs/sort/src/compareNumber.ts:11](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/sort/src/compareNumber.ts#L11)

___

### compareNumberDescending

▸ **compareNumberDescending**(`a`, `b`): `number`

Number comparator function (descending)

**`Example`**

```ts
const arr = [3, 1, 4, 1, 5]
arr.sort(compareNumberDescending) // [5, 4, 3, 1, 1]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | first value to compare |
| `b` | `number` | second value to compare |

#### Returns

`number`

#### Defined in

[src/libs/sort/src/compareNumberDescending.ts:11](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/sort/src/compareNumberDescending.ts#L11)

___

### compareNumeric

▸ **compareNumeric**(`a`, `b`): `number`

number, bigint, boolean comparator function (ascending)

**`Example`**

```ts
const arr = [3n, true, -2n, false]
arr.sort(compareNumeric) // [-2n, false, true, 3n]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` \| `bigint` \| `boolean` | first value to compare |
| `b` | `number` \| `bigint` \| `boolean` | second value to compare |

#### Returns

`number`

#### Defined in

[src/libs/sort/src/compareNumeric.ts:11](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/sort/src/compareNumeric.ts#L11)

___

### compareNumericDescending

▸ **compareNumericDescending**(`a`, `b`): `number`

number, bigint, boolean comparator function (descending)

**`Example`**

```ts
const arr = [true, 3n, -2n, false]
arr.sort(compareNumericDescending) // [3n, true, false, -2n]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` \| `bigint` \| `boolean` | first value to compare |
| `b` | `number` \| `bigint` \| `boolean` | second value to compare |

#### Returns

`number`

#### Defined in

[src/libs/sort/src/compareNumericDescending.ts:11](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/sort/src/compareNumericDescending.ts#L11)

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

[src/libs/sort/src/compareString.ts:6](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/sort/src/compareString.ts#L6)

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

[src/libs/sort/src/compareStringDescending.ts:6](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/sort/src/compareStringDescending.ts#L6)

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

[src/libs/node/src/createFileExtensionFilter.ts:8](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/node/src/createFileExtensionFilter.ts#L8)

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

[src/libs/node/src/ensureValidWindowsPath.ts:15](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/node/src/ensureValidWindowsPath.ts#L15)

___

### generateUnitTests

▸ **generateUnitTests**(`sourceCode`, `dirname`, `exportName`, `append?`): `Promise`<{ `data`: `CreateChatCompletionResponse` ; `text`: `string`  } \| `void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `sourceCode` | `string` | `undefined` |
| `dirname` | `string` | `undefined` |
| `exportName` | `string` | `undefined` |
| `append` | `boolean` | `true` |

#### Returns

`Promise`<{ `data`: `CreateChatCompletionResponse` ; `text`: `string`  } \| `void`\>

#### Defined in

[src/libs/nlp/src/generateUnitTests.ts:46](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/nlp/src/generateUnitTests.ts#L46)

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

[src/libs/date/src/getCentury.ts:11](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/date/src/getCentury.ts#L11)

___

### getCurrentYear

▸ **getCurrentYear**(): `number`

Returns the current year (UTC full year).

#### Returns

`number`

#### Defined in

[src/libs/date/src/getCurrentYear.ts:4](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/date/src/getCurrentYear.ts#L4)

___

### htmlTableTo2dArray

▸ **htmlTableTo2dArray**(`element`, `headers?`): `string`[][]

Converts the table element's data content to a 2-dimensional array.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `element` | `HTMLElement` | `undefined` | The table element |
| `headers` | `boolean` | `true` | Whether to extract table column header data from <th> elements. |

#### Returns

`string`[][]

Data table which is an arrays of row-arrays of cell content (string).

#### Defined in

[src/libs/html/src/htmlTableTo2dArray.ts:7](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/html/src/htmlTableTo2dArray.ts#L7)

___

### intToArrayBytes

▸ **intToArrayBytes**(`int`): `number`[]

Converts an integer to an array of bytes

#### Parameters

| Name | Type |
| :------ | :------ |
| `int` | `number` |

#### Returns

`number`[]

#### Defined in

[src/libs/binary/src/intToArrayBytes.ts:4](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/binary/src/intToArrayBytes.ts#L4)

___

### intToBuffer

▸ **intToBuffer**(`int`): `Buffer`

Converts an integer to a buffer

#### Parameters

| Name | Type |
| :------ | :------ |
| `int` | `number` |

#### Returns

`Buffer`

#### Defined in

[src/libs/binary/src/intToBuffer.ts:6](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/binary/src/intToBuffer.ts#L6)

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

[src/libs/binary/src/intToBytes.ts:5](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/binary/src/intToBytes.ts#L5)

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

[src/libs/validation/src/isConstructor.ts:7](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/validation/src/isConstructor.ts#L7)

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

[src/libs/number/src/isEven.ts:4](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/number/src/isEven.ts#L4)

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

[src/libs/validation/src/isHex.ts:4](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/validation/src/isHex.ts#L4)

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

[src/libs/validation/src/isHexOrUnicode.ts:4](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/validation/src/isHexOrUnicode.ts#L4)

___

### isIterable

▸ **isIterable**(`o`): `boolean`

Check if an object is iterable

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | The object to check |

#### Returns

`boolean`

#### Defined in

[src/libs/validation/src/isIterable.ts:6](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/validation/src/isIterable.ts#L6)

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

[src/libs/date/src/isLeapYear.ts:6](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/date/src/isLeapYear.ts#L6)

___

### isNumericString

▸ **isNumericString**(`string`): `boolean`

Checks if a string is a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | input string |

#### Returns

`boolean`

#### Defined in

[src/libs/validation/src/isNumericString.ts:5](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/validation/src/isNumericString.ts#L5)

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

[src/libs/validation/src/isObject.ts:5](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/validation/src/isObject.ts#L5)

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

[src/libs/number/src/isOdd.ts:4](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/number/src/isOdd.ts#L4)

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

[src/libs/validation/src/isPrototype.ts:7](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/validation/src/isPrototype.ts#L7)

___

### isSocialSecurityNumberDK

▸ **isSocialSecurityNumberDK**(`s`): `boolean`

Determine whether a string is a valid Danish social security number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `string` | String to test |

#### Returns

`boolean`

#### Defined in

[src/libs/parse/src/parseSocialSecurityNumberDK.ts:47](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/parse/src/parseSocialSecurityNumberDK.ts#L47)

___

### isValidDate

▸ **isValidDate**(`year?`, `month?`, `day?`, `hour?`, `minute?`, `second?`, `millisecond?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year?` | `string` \| `number` |
| `month?` | `string` \| `number` |
| `day?` | `string` \| `number` |
| `hour?` | `string` \| `number` |
| `minute?` | `string` \| `number` |
| `second?` | `string` \| `number` |
| `millisecond?` | `string` \| `number` |

#### Returns

`boolean`

#### Defined in

[src/libs/date/src/isValidDate.ts:3](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/date/src/isValidDate.ts#L3)

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

[src/libs/date/src/isValidDateDay.ts:6](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/date/src/isValidDateDay.ts#L6)

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

[src/libs/date/src/isValidDateMonth.ts:4](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/date/src/isValidDateMonth.ts#L4)

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

[src/libs/date/src/isValidDateYear.ts:4](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/date/src/isValidDateYear.ts#L4)

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

[src/libs/object/src/iteratePrototypeChain.ts:22](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/object/src/iteratePrototypeChain.ts#L22)

___

### letterToCol

▸ **letterToCol**(`A`, `zeroIndexed?`): `number`

Convert spreadsheet column letter(s) to column-number

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `A` | `string` | `undefined` | Column letter |
| `zeroIndexed` | `boolean` | `false` | Whether or not column number start at one or zero. |

#### Returns

`number`

#### Defined in

[src/libs/spreadsheet/src/letterToCol.ts:9](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/spreadsheet/src/letterToCol.ts#L9)

___

### mapGetOrDefault

▸ **mapGetOrDefault**<`K`, `V`\>(`map`, `key`, `defaultValue`): `V`

Returns a value from a map, while setting a given default value before returning it, if the key is not present.

**`Example`**

```ts
const map = new Map<string, number>()
map.set('key', 1)
mapGetOrDefault(map, 'key', 2) // Output: 1
mapGetOrDefault(map, 'nonexistentKey', 2) // Output: 2
```

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | `Map`<`K`, `V`\> | map to get value from |
| `key` | `K` | key to get value for |
| `defaultValue` | `V` | default value to set if key is not present |

#### Returns

`V`

#### Defined in

[src/libs/map/src/mapGetOrDefault.ts:14](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/map/src/mapGetOrDefault.ts#L14)

___

### mapUpdate

▸ **mapUpdate**<`K`, `V`\>(`map`, `key`, `fun`): `Map`<`K`, `V`\>

Updates a value in a map, if the key is present.

**`Example`**

```ts
const map = new Map<string, number>()
map.set('key', 1)
mapUpdate(map, 'key', (value) => value! + 1) // Output: Map { 'key' => 2 }
mapUpdate(map, 'nonexistentKey', (value) => value! + 1) // Output: Map {}
```

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | `Map`<`K`, `V`\> | map to get value from |
| `key` | `K` | key to get value for |
| `fun` | (`value?`: `V`) => `V` | function to update value with |

#### Returns

`Map`<`K`, `V`\>

#### Defined in

[src/libs/map/src/mapUpdate.ts:14](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/map/src/mapUpdate.ts#L14)

___

### mapUpdateDefault

▸ **mapUpdateDefault**<`K`, `V`\>(`map`, `key`, `defaultValue`, `fun`): `Map`<`K`, `V`\>

For a given map, set a default value if the key is not present, then updates the value now definitely at key.

**`Example`**

```js
const m = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 2],
])
for (const key of [...m.keys(), 'd', 'e']) {
  mapUpdateDefault(m, key, 0, (v) => v + 1)
}
console.log(m)
//=> Map(5) { 'a' => 2, 'b' => 3, 'c' => 3, 'd' => 1, 'e' => 1 }
```

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | `Map`<`K`, `V`\> | map to get value from |
| `key` | `K` | key to get value for |
| `defaultValue` | `V` | default value to set if key is not present |
| `fun` | (`value`: `V`) => `V` | function to update value with |

#### Returns

`Map`<`K`, `V`\>

#### Defined in

[src/libs/map/src/mapUpdateDefault.ts:21](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/map/src/mapUpdateDefault.ts#L21)

___

### memoryUsage

▸ **memoryUsage**(): [`MemoryUsageValues`](README.md#memoryusagevalues)

Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.

#### Returns

[`MemoryUsageValues`](README.md#memoryusagevalues)

#### Defined in

[src/libs/node/src/memoryUsage.ts:9](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/node/src/memoryUsage.ts#L9)

___

### memoryUsageEuFormat

▸ **memoryUsageEuFormat**(): [`MemoryUsageValuesFormatted`](README.md#memoryusagevaluesformatted)

Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
The values are formatted strings in the style of 5.000,00

#### Returns

[`MemoryUsageValuesFormatted`](README.md#memoryusagevaluesformatted)

#### Defined in

[src/libs/node/src/memoryUsage.ts:34](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/node/src/memoryUsage.ts#L34)

___

### memoryUsageUsFormat

▸ **memoryUsageUsFormat**(): [`MemoryUsageValuesFormatted`](README.md#memoryusagevaluesformatted)

Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
The values are formatted strings in the style of 5,000.00

#### Returns

[`MemoryUsageValuesFormatted`](README.md#memoryusagevaluesformatted)

#### Defined in

[src/libs/node/src/memoryUsage.ts:42](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/node/src/memoryUsage.ts#L42)

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

[src/libs/node/src/normalizeFileExtension.ts:8](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/node/src/normalizeFileExtension.ts#L8)

___

### normalizeLineLengths

▸ **normalizeLineLengths**(`sentences`, `lowerBound?`, `upperBound?`): `string`[]

Normalize line lengths. Tries to merge sentences with its neighboring sentences onto the same line if they are short.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sentences` | `string`[] | Array of sentences |
| `lowerBound?` | `number` | Will try to merge sentences if the length of the current sentence is less than this value. If no user input is given, this value is automatically determined by calculating statistics on the data. |
| `upperBound?` | `number` | Will not merge sentences if the conbined length of the sentences is greater than this value. If no user input is given, this value is automatically determined by calculating statistics on the data. |

#### Returns

`string`[]

#### Defined in

[src/libs/nlp/src/normalizeLineLengths.ts:33](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/nlp/src/normalizeLineLengths.ts#L33)

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

[src/libs/number/src/numApproximateLog10.ts:6](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/number/src/numApproximateLog10.ts#L6)

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

[src/libs/date/src/numDaysInMonth.ts:10](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/date/src/numDaysInMonth.ts#L10)

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

[src/libs/number/src/numFormatEU.ts:10](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/number/src/numFormatEU.ts#L10)

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

[src/libs/number/src/numFormatUS.ts:9](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/number/src/numFormatUS.ts#L9)

___

### padArrayBytesLeft

▸ **padArrayBytesLeft**(`a`): `number`[]

Pads an array of bytes on the left

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number`[] |

#### Returns

`number`[]

#### Defined in

[src/libs/binary/src/padArrayBytesLeft.ts:4](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/binary/src/padArrayBytesLeft.ts#L4)

___

### padArrayBytesRight

▸ **padArrayBytesRight**(`a`): `number`[]

Pads an array of bytes on the right

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number`[] |

#### Returns

`number`[]

#### Defined in

[src/libs/binary/src/padArrayBytesRight.ts:4](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/binary/src/padArrayBytesRight.ts#L4)

___

### parseSocialSecurityNumberDK

▸ **parseSocialSecurityNumberDK**(`ssn`): `Object`

Extract birthdate (yyyy,mm,dd), four digit id and sex from a Danish social security number.
Assumes birth dates are at most 100 years in the past.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ssn` | `string` | Danish social security number |

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

[src/libs/parse/src/parseSocialSecurityNumberDK.ts:11](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/parse/src/parseSocialSecurityNumberDK.ts#L11)

___

### pathFromCwd

▸ **pathFromCwd**(`...dirs`): `string`

Takes a directory path as a list of directory/folder names from the current working directory and returns it as a full path string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...dirs` | `string`[] | directory names from the current working directory. |

#### Returns

`string`

#### Defined in

[src/libs/node/src/pathFromCwd.ts:7](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/node/src/pathFromCwd.ts#L7)

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

[src/libs/number/src/randomIntBetween.ts:6](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/number/src/randomIntBetween.ts#L6)

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

[src/libs/node/src/readFileStringSync.ts:7](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/node/src/readFileStringSync.ts#L7)

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

[src/libs/regex/src/regexEscapeString.ts:4](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/regex/src/regexEscapeString.ts#L4)

___

### regexFixFlags

▸ **regexFixFlags**(`flags`): `string`

Takes a string of RegExp flags and returns a string guaranteed to be valid.

**`Example`**

```ts
regexFixFlags('ggim') // 'gim'
regexFixFlags('?gim*') // 'gim'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `flags` | `string` | string of RegExp flags |

#### Returns

`string`

#### Defined in

[src/libs/regex/src/regexFixFlags.ts:12](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/regex/src/regexFixFlags.ts#L12)

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

[src/libs/regex/src/regexGetGroupNames.ts:7](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/regex/src/regexGetGroupNames.ts#L7)

___

### regexIsValidFlags

▸ **regexIsValidFlags**(`flags`): `boolean`

Checks if a string is a valid regex flags string.

**`Example`**

```ts
regexIsValidFlags('gim') // true
regexIsValidFlags('gmisuy') // false
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `string` |

#### Returns

`boolean`

#### Defined in

[src/libs/regex/src/regexIsValidFlags.ts:11](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/regex/src/regexIsValidFlags.ts#L11)

___

### regexMatchBetween

▸ **regexMatchBetween**(`left`, `right`, `flags?`): `matchBetweenFunction`

Returns a function that matches a string between two given strings or regexes.

**`Example`**

```ts
const input = 'Hello world! This is a test string.'
const matchBetween = regexMatchBetween('Hello', 'test')
[...matchBetween(input)]
// [
//   {
//     left: { index: 0, match: 'Hello', groups: {}, lastIndex: 5 },
//     mid: { index: 12, match: ' world! This is a ', groups: {}, lastIndex: 31 },
//     right: { index: 36, match: 'test', groups: {}, lastIndex: 40 },
//   },
// ]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `string` \| `RegExp` | string or regex to match before |
| `right` | `string` \| `RegExp` | string or regex to match after |
| `flags?` | `string` | regex flags - 'g' and 's' are always added to whatever flags are passed. |

#### Returns

`matchBetweenFunction`

#### Defined in

[src/libs/regex/src/regexMatchBetween.ts:30](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/regex/src/regexMatchBetween.ts#L30)

___

### regexMatcherToValidater

▸ **regexMatcherToValidater**(`regex`): `RegExp`

Convert a regex for matching to a regex for validation.

**`Example`**

```js
const regexMatchDigits = /\d+/gi;
const regexIsDigit = regexMatcherToValidater(regexMatchDigits); //=> /^\d+$/i
const isDigit = (str) => regexIsDigit.test(str)
isDigit('1') //=> true
isDigit('a') //=> false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regex` | `RegExp` | The regex to convert |

#### Returns

`RegExp`

#### Defined in

[src/libs/regex/src/regexMatcherToValidater.ts:12](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/regex/src/regexMatcherToValidater.ts#L12)

___

### regexValidFlags

▸ **regexValidFlags**(): `string`[]

Returns an array of all valid flags for a regular expression.

**`Example`**

```ts
regexValidFlags() //=> ['g', 'i', 'm', 's', 'u', 'y']
```

#### Returns

`string`[]

#### Defined in

[src/libs/regex/src/regexValidFlags.ts:8](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/regex/src/regexValidFlags.ts#L8)

___

### rexec

▸ **rexec**(`regex`, `string`): `Generator`<`RexecYield`\>

Easily perform regex 'exec' on a string. An iterable is returned which steps through the exec process and yields all the details you might need.

**`Example`**

```js
const regex = /(?<g1>a)/g
const str = 'Anthony wants a girlfriend.'
console.log([...rexec(regex, str)])
// [
// 	{
//     index: 9,
//     match: 'a',
//     groups: { g1: 'a' },
//     lastIndex: 10,
//   },
//   {
//     index: 14,
//     match: 'a',
//     groups: { g1: 'a' },
//     lastIndex: 15,
//   },
// ]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regex` | `RegExp` | The regular expression object |
| `string` | `string` | The string to perform the operation on |

#### Returns

`Generator`<`RexecYield`\>

#### Defined in

[src/libs/regex/src/rexec.ts:33](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/regex/src/rexec.ts#L33)

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

[src/libs/number/src/round.ts:6](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/number/src/round.ts#L6)

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

[src/libs/number/src/roundDown.ts:4](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/number/src/roundDown.ts#L4)

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

[src/libs/number/src/roundUp.ts:4](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/number/src/roundUp.ts#L4)

___

### setDifference

▸ **setDifference**<`T`\>(`setA`, `setB`): `Set`<`T`\>

Returns a new set with all elements that are in the first set but not in the second set.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setA` | `Set`<`T`\> |
| `setB` | `Set`<`T`\> |

#### Returns

`Set`<`T`\>

#### Defined in

[src/libs/set/src/setDifference.ts:4](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/set/src/setDifference.ts#L4)

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

[src/libs/object/src/setEnumerable.ts:6](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/object/src/setEnumerable.ts#L6)

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

[src/libs/set/src/setIntersection.ts:5](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/set/src/setIntersection.ts#L5)

___

### setIsSuperset

▸ **setIsSuperset**<`T`\>(`set`, `subset`): `boolean`

Returns true if the first set is a superset of the second set.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `set` | `Set`<`T`\> |
| `subset` | `Set`<`T`\> |

#### Returns

`boolean`

#### Defined in

[src/libs/set/src/setIsSuperset.ts:4](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/set/src/setIsSuperset.ts#L4)

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

[src/libs/object/src/setNonConfigurable.ts:6](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/object/src/setNonConfigurable.ts#L6)

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

[src/libs/object/src/setNonEnumerable.ts:6](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/object/src/setNonEnumerable.ts#L6)

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

[src/libs/object/src/setNonEnumerablePrivateProperties.ts:6](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/object/src/setNonEnumerablePrivateProperties.ts#L6)

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

[src/libs/object/src/setNonWritable.ts:6](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/object/src/setNonWritable.ts#L6)

___

### setSymmetricDifference

▸ **setSymmetricDifference**<`T`\>(`setA`, `setB`): `Set`<`T`\>

Returns the symmetric difference between two sets.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setA` | `Set`<`T`\> |
| `setB` | `Set`<`T`\> |

#### Returns

`Set`<`T`\>

#### Defined in

[src/libs/set/src/setSymmetricDifference.ts:4](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/set/src/setSymmetricDifference.ts#L4)

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

[src/libs/set/src/setUnion.ts:5](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/set/src/setUnion.ts#L5)

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

[src/libs/object/src/setWritable.ts:6](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/object/src/setWritable.ts#L6)

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

[src/libs/string/src/strCountCharOccurances.ts:6](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strCountCharOccurances.ts#L6)

___

### strCountChars

▸ **strCountChars**(`string`): `Map`<`string`, `number`\>

Count the number of occurrences of each character in a string.

**`Example`**

```ts
strCountChars('Hello!') // Map(9) { 'H' => 1, 'e' => 1, 'l' => 2, 'o' => 1, '!' => 1 }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`Map`<`string`, `number`\>

#### Defined in

[src/libs/string/src/strCountChars.ts:8](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strCountChars.ts#L8)

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

[src/libs/string/src/strIsLowerCase.ts:13](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strIsLowerCase.ts#L13)

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

[src/libs/string/src/strIsUpperCase.ts:13](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strIsUpperCase.ts#L13)

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

[src/libs/string/src/strLinesRemoveEmpty.ts:5](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strLinesRemoveEmpty.ts#L5)

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

[src/libs/string/src/strLinesTrimLeft.ts:5](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strLinesTrimLeft.ts#L5)

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

[src/libs/string/src/strLinesTrimRight.ts:5](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strLinesTrimRight.ts#L5)

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

[src/libs/string/src/strPrettifyMinifiedCode.ts:13](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strPrettifyMinifiedCode.ts#L13)

___

### strRemoveDuplicateChars

▸ **strRemoveDuplicateChars**(`string`): `string`

Remove duplicate characters from a string.
```ts
strRemoveDuplicateChars('Hello world!') // 'Helo wrd!'
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

#### Defined in

[src/libs/string/src/strRemoveDuplicateChars.ts:7](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strRemoveDuplicateChars.ts#L7)

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

[src/libs/string/src/strRepeat.ts:6](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strRepeat.ts#L6)

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

[src/libs/string/src/strReplaceAll.ts:10](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strReplaceAll.ts#L10)

___

### strSortChars

▸ **strSortChars**(`string`): `string`

Sorts the characters in a string.

**`Example`**

```ts
strSortChars('hello') // 'ehllo'
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

#### Defined in

[src/libs/string/src/strSortChars.ts:8](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strSortChars.ts#L8)

___

### strSplitCamelCase

▸ **strSplitCamelCase**(`word`): `string`[]

Returns an array of words in the string

**`Example`**

```js
strSplitCamelCase('someCamelCase')
//=> ['some', 'Camel', 'Case']
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `word` | `string` |

#### Returns

`string`[]

#### Defined in

[src/libs/string/src/strSplitCamelCase.ts:23](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strSplitCamelCase.ts#L23)

___

### strToCharCodes

▸ **strToCharCodes**(`str`): `number`[]

Converts a string to an array of char codes

**`Example`**

```ts
strToCharCodes('hello') // [104, 101, 108, 108, 111]
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`number`[]

#### Defined in

[src/libs/string/src/strToCharCodes.ts:8](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strToCharCodes.ts#L8)

___

### strToCharSet

▸ **strToCharSet**(`string`): `string`

Returns a string containing the set of all unique characters in a string.

**`Example`**

```ts
strToCharSet('hello') // 'ehlo'
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

#### Defined in

[src/libs/string/src/strToCharSet.ts:8](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strToCharSet.ts#L8)

___

### strToSentences

▸ **strToSentences**(`text`): `string`[]

Intelligently split a string into sentences. Uses NLP with parse tree to determine sentence boundaries.

**`Example`**

```ts
strToSentences('Hello world. How are you?') // ['Hello world.', 'How are you?']
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | Text to split into sentences |

#### Returns

`string`[]

#### Defined in

[src/libs/string/src/strToSentences.ts:12](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strToSentences.ts#L12)

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

[src/libs/string/src/strToWords.ts:12](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strToWords.ts#L12)

___

### strUnwrap

▸ **strUnwrap**(`input`, `left`, `right`, `flags?`): `string`

Inserts provided strings before and after a string.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `string` | `undefined` | input string |
| `left` | `string` | `undefined` | string to place before |
| `right` | `string` | `undefined` | string to place after |
| `flags` | `string` | `''` | regex flags |

#### Returns

`string`

#### Defined in

[src/libs/string/src/strUnwrap.ts:10](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strUnwrap.ts#L10)

___

### strWrapBetween

▸ **strWrapBetween**(`input`, `left`, `right`): `string`

Inserts provided strings before and after a string.

**`Example`**

```js
expect(util.strWrapBetween('input', '#', '&')).toBe('#input&');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | input string |
| `left` | `string` | string to place before |
| `right` | `string` | string to place after |

#### Returns

`string`

#### Defined in

[src/libs/string/src/strWrapBetween.ts:11](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strWrapBetween.ts#L11)

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

[src/libs/string/src/strWrapIn.ts:10](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strWrapIn.ts#L10)

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

[src/libs/string/src/strWrapInAngleBrackets.ts:9](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strWrapInAngleBrackets.ts#L9)

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

[src/libs/string/src/strWrapInBraces.ts:9](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strWrapInBraces.ts#L9)

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

[src/libs/string/src/strWrapInBrackets.ts:9](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strWrapInBrackets.ts#L9)

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

[src/libs/string/src/strWrapInDoubleQuotes.ts:9](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strWrapInDoubleQuotes.ts#L9)

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

[src/libs/string/src/strWrapInParenthesis.ts:9](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strWrapInParenthesis.ts#L9)

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

[src/libs/string/src/strWrapInSingleQuotes.ts:9](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/string/src/strWrapInSingleQuotes.ts#L9)

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

[src/libs/node/src/streamToString.ts:7](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/node/src/streamToString.ts#L7)

___

### trimArrayBytesLeft

▸ **trimArrayBytesLeft**(`a`): `number`[]

Trims an array of bytes on the left

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number`[] |

#### Returns

`number`[]

#### Defined in

[src/libs/binary/src/trimArrayBytesLeft.ts:4](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/binary/src/trimArrayBytesLeft.ts#L4)

___

### trimArrayBytesRight

▸ **trimArrayBytesRight**(`a`): `number`[]

Trims an array of bytes on the right

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number`[] |

#### Returns

`number`[]

#### Defined in

[src/libs/binary/src/trimArrayBytesRight.ts:4](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/binary/src/trimArrayBytesRight.ts#L4)

