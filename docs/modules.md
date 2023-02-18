[@bemoje/bemoje-node-util](README.md) / Exports

# @bemoje/bemoje-node-util

## Table of contents

### Classes

- [ExtensibleFunction](classes/ExtensibleFunction.md)
- [Matrix](classes/Matrix.md)
- [SortedArray](classes/SortedArray.md)
- [StringStream](classes/StringStream.md)
- [Table](classes/Table.md)
- [Timer](classes/Timer.md)

### Interfaces

- [IClassOptions](interfaces/IClassOptions.md)
- [IDataStructure](interfaces/IDataStructure.md)
- [IDataStructure2D](interfaces/IDataStructure2D.md)
- [IIndexedDataStructure](interfaces/IIndexedDataStructure.md)
- [IKeyValueDataStructure](interfaces/IKeyValueDataStructure.md)

### Type Aliases

- [Callback](modules.md#callback)
- [Comparator](modules.md#comparator)
- [MemoryUsageValues](modules.md#memoryusagevalues)
- [MemoryUsageValuesFormatted](modules.md#memoryusagevaluesformatted)
- [Predicate](modules.md#predicate)
- [RexecOutput](modules.md#rexecoutput)
- [ensureValidWindowsPathOptions](modules.md#ensurevalidwindowspathoptions)

### Functions

- [A1ToColRow](modules.md#a1tocolrow)
- [arr2dToCSV](modules.md#arr2dtocsv)
- [arrEvery](modules.md#arrevery)
- [arrFlatten](modules.md#arrflatten)
- [arrIndexesOf](modules.md#arrindexesof)
- [arrMapMutable](modules.md#arrmapmutable)
- [arrShallowEquals](modules.md#arrshallowequals)
- [arrShuffle](modules.md#arrshuffle)
- [arrSome](modules.md#arrsome)
- [arrSortNumeric](modules.md#arrsortnumeric)
- [arrSwap](modules.md#arrswap)
- [colRowToA1](modules.md#colrowtoa1)
- [compareAlphaNumeric](modules.md#comparealphanumeric)
- [compareAlphaNumericDescending](modules.md#comparealphanumericdescending)
- [compareArrays](modules.md#comparearrays)
- [compareNumeric](modules.md#comparenumeric)
- [compareNumericDescending](modules.md#comparenumericdescending)
- [createFileExtensionFilter](modules.md#createfileextensionfilter)
- [ensureValidWindowsPath](modules.md#ensurevalidwindowspath)
- [getMemoryUsage](modules.md#getmemoryusage)
- [getMemoryUsageFormattedEU](modules.md#getmemoryusageformattedeu)
- [getMemoryUsageFormattedUS](modules.md#getmemoryusageformattedus)
- [getWorkingDirPath](modules.md#getworkingdirpath)
- [htmlTableTo2dArray](modules.md#htmltableto2darray)
- [normalizeFileExtension](modules.md#normalizefileextension)
- [numApproximateLog10](modules.md#numapproximatelog10)
- [numFormatEU](modules.md#numformateu)
- [numFormatUS](modules.md#numformatus)
- [readFileStringSync](modules.md#readfilestringsync)
- [regexGetGroupNames](modules.md#regexgetgroupnames)
- [rexec](modules.md#rexec)
- [setIntersection](modules.md#setintersection)
- [setUnion](modules.md#setunion)
- [strCountCharOccurances](modules.md#strcountcharoccurances)
- [strIsLowerCase](modules.md#strislowercase)
- [strIsUpperCase](modules.md#strisuppercase)
- [strSplitWordByCamelCase](modules.md#strsplitwordbycamelcase)
- [strTimes](modules.md#strtimes)
- [strToWords](modules.md#strtowords)
- [strWrapBetween](modules.md#strwrapbetween)
- [strWrapIn](modules.md#strwrapin)
- [strWrapInAngleBrackets](modules.md#strwrapinanglebrackets)
- [strWrapInBraces](modules.md#strwrapinbraces)
- [strWrapInBrackets](modules.md#strwrapinbrackets)
- [strWrapInDoubleQuotes](modules.md#strwrapindoublequotes)
- [strWrapInParenthesis](modules.md#strwrapinparenthesis)
- [strWrapInSingleQuotes](modules.md#strwrapinsinglequotes)
- [streamToString](modules.md#streamtostring)

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

[src/libs/array/index.ts:12](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/array/index.ts#L12)

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

[src/libs/sort.ts:1](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/sort.ts#L1)

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

[src/libs/node.ts:6](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/node.ts#L6)

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

[src/libs/node.ts:13](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/node.ts#L13)

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

[src/libs/array/index.ts:14](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/array/index.ts#L14)

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

[src/libs/regex.ts:1](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/regex.ts#L1)

___

### ensureValidWindowsPathOptions

Ƭ **ensureValidWindowsPathOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assert?` | `boolean` |
| `extendedMaxLength?` | `boolean` |

#### Defined in

[src/libs/node.ts:117](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/node.ts#L117)

## Functions

### A1ToColRow

▸ **A1ToColRow**(`A1`): `number`[]

Convert spreadsheet A1-notation to [column, row].

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | `string` | A1-notation string. |

#### Returns

`number`[]

#### Defined in

[src/libs/spreadsheet/src/A1ToColRow.ts:23](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/spreadsheet/src/A1ToColRow.ts#L23)

___

### arr2dToCSV

▸ **arr2dToCSV**(`input`, `delimiter?`): `string`

Converts a 2-dimensional array into a CSV string.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `any`[][] | `undefined` | a 2-dimensional array |
| `delimiter` | `string` | `';'` | csv delimiter |

#### Returns

`string`

#### Defined in

src/libs/array/src/arr2dToCSV.ts:6

___

### arrEvery

▸ **arrEvery**(`input`, `predicate`): `boolean`

Returns true if the predicate is satisfied for every element of the passed array; otherwise false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any`[] | The array |
| `predicate` | [`Predicate`](modules.md#predicate) | A predicate callback function |

#### Returns

`boolean`

#### Defined in

[src/libs/array/src/arrEvery.ts:9](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/array/src/arrEvery.ts#L9)

___

### arrFlatten

▸ **arrFlatten**(`input`): `any`[]

Flattens the passed array recursively.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any`[] | the array to flatten |

#### Returns

`any`[]

#### Defined in

[src/libs/array/src/arrFlatten.ts:6](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/array/src/arrFlatten.ts#L6)

___

### arrIndexesOf

▸ **arrIndexesOf**(`input`, `element`): `number`[]

Returns all indexes at which an element is found.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any`[] | The array to search |
| `element` | `any` | The element to find |

#### Returns

`number`[]

#### Defined in

[src/libs/array/src/arrIndexesOf.ts:7](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/array/src/arrIndexesOf.ts#L7)

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
| `f` | [`Callback`](modules.md#callback) | iterator |

#### Returns

`any`[]

#### Defined in

[src/libs/array/src/arrMapMutable.ts:17](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/array/src/arrMapMutable.ts#L17)

___

### arrShallowEquals

▸ **arrShallowEquals**(`input1`, `input2`): `boolean`

Returns whether or not two arrays shallow equal each other.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input1` | `any`[] | first array |
| `input2` | `any`[] | second array |

#### Returns

`boolean`

#### Defined in

[src/libs/array/src/arrShallowEquals.ts:7](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/array/src/arrShallowEquals.ts#L7)

___

### arrShuffle

▸ **arrShuffle**(`input`): `any`[]

Shuffle items in an array in-place. Guarantees that the array has changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any`[] | The array to shuffle. |

#### Returns

`any`[]

#### Defined in

[src/libs/array/src/arrShuffle.ts:9](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/array/src/arrShuffle.ts#L9)

___

### arrSome

▸ **arrSome**(`input`, `predicate`): `boolean`

Check whether a condition is true for any element of an array. The condition check is in the form of a callback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any`[] | The array |
| `predicate` | [`Predicate`](modules.md#predicate) | A predicate callback function |

#### Returns

`boolean`

#### Defined in

[src/libs/array/src/arrSome.ts:9](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/array/src/arrSome.ts#L9)

___

### arrSortNumeric

▸ **arrSortNumeric**(`input`): `any`[]

Uses Array.prototype.sort but sorts numbers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any`[] | input array |

#### Returns

`any`[]

#### Defined in

[src/libs/array/src/arrSortNumeric.ts:6](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/array/src/arrSortNumeric.ts#L6)

___

### arrSwap

▸ **arrSwap**(`input`, `from`, `to`): `any`[]

Swap array elements in place. Runtime: O(1)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any`[] | to be modified |
| `from` | `number` | index of the first element |
| `to` | `number` | index of the second element |

#### Returns

`any`[]

#### Defined in

[src/libs/array/src/arrSwap.ts:8](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/array/src/arrSwap.ts#L8)

___

### colRowToA1

▸ **colRowToA1**(`CR`): `string`

Convert spreadsheet [column, row] to A1-notation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `CR` | `number`[] | [column, row] |

#### Returns

`string`

#### Defined in

[src/libs/spreadsheet/src/colRowToA1.ts:21](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/spreadsheet/src/colRowToA1.ts#L21)

___

### compareAlphaNumeric

▸ **compareAlphaNumeric**(`a`, `b`): `number`

Alpha numeric comparator function (ascending)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | first value to compare |
| `b` | `string` | second value to compare |

#### Returns

`number`

#### Defined in

[src/libs/sort.ts:86](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/sort.ts#L86)

___

### compareAlphaNumericDescending

▸ **compareAlphaNumericDescending**(`a`, `b`): `number`

Alpha numeric comparator function (descending)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | first value to compare |
| `b` | `string` | second value to compare |

#### Returns

`number`

#### Defined in

[src/libs/sort.ts:95](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/sort.ts#L95)

___

### compareArrays

▸ **compareArrays**(`comparator`, `descending?`): [`Comparator`](modules.md#comparator)

Returns a given comparator as an array compatible comparator. Behaves as if the array to sort was recursively flattened.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `comparator` | [`Comparator`](modules.md#comparator) | `undefined` | compare function |
| `descending` | `boolean` | `false` | whether the input comparator sorts in descending order |

#### Returns

[`Comparator`](modules.md#comparator)

#### Defined in

[src/libs/sort.ts:8](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/sort.ts#L8)

___

### compareNumeric

▸ **compareNumeric**(`a`, `b`): `number`

Numeric comparator function (ascending)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | first value to compare |
| `b` | `number` | second value to compare |

#### Returns

`number`

#### Defined in

[src/libs/sort.ts:68](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/sort.ts#L68)

___

### compareNumericDescending

▸ **compareNumericDescending**(`a`, `b`): `number`

Numeric comparator function (descending)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | first value to compare |
| `b` | `number` | second value to compare |

#### Returns

`number`

#### Defined in

[src/libs/sort.ts:77](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/sort.ts#L77)

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

[src/libs/node.ts:103](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/node.ts#L103)

___

### ensureValidWindowsPath

▸ **ensureValidWindowsPath**(`path`, `options?`): `boolean`

Check whether a provided windows filesystem path string is valid according to:
https://msdn.microsoft.com/en-us/library/windows/desktop/aa365247(v=vs.85).aspx

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to validate |
| `options?` | [`ensureValidWindowsPathOptions`](modules.md#ensurevalidwindowspathoptions) | - |

#### Returns

`boolean`

#### Defined in

[src/libs/node.ts:129](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/node.ts#L129)

___

### getMemoryUsage

▸ **getMemoryUsage**(): [`MemoryUsageValues`](modules.md#memoryusagevalues)

Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.

#### Returns

[`MemoryUsageValues`](modules.md#memoryusagevalues)

#### Defined in

[src/libs/node.ts:37](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/node.ts#L37)

___

### getMemoryUsageFormattedEU

▸ **getMemoryUsageFormattedEU**(): [`MemoryUsageValuesFormatted`](modules.md#memoryusagevaluesformatted)

Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
The values are formatted strings in the style of 5.000,00

#### Returns

[`MemoryUsageValuesFormatted`](modules.md#memoryusagevaluesformatted)

#### Defined in

[src/libs/node.ts:51](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/node.ts#L51)

___

### getMemoryUsageFormattedUS

▸ **getMemoryUsageFormattedUS**(): [`MemoryUsageValuesFormatted`](modules.md#memoryusagevaluesformatted)

Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
The values are formatted strings in the style of 5,000.00

#### Returns

[`MemoryUsageValuesFormatted`](modules.md#memoryusagevaluesformatted)

#### Defined in

[src/libs/node.ts:61](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/node.ts#L61)

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

[src/libs/node.ts:71](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/node.ts#L71)

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

src/libs/html/src/htmlTableTo2dArray.ts:7

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

[src/libs/node.ts:88](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/node.ts#L88)

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

[src/libs/number.ts:50](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/number.ts#L50)

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

[src/libs/number.ts:11](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/number.ts#L11)

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

[src/libs/number.ts:30](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/number.ts#L30)

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

[src/libs/node.ts:79](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/node.ts#L79)

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

[src/libs/regex.ts:56](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/regex.ts#L56)

___

### rexec

▸ **rexec**(`regex`, `str`): `Generator`<[`RexecOutput`](modules.md#rexecoutput)\>

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

`Generator`<[`RexecOutput`](modules.md#rexecoutput)\>

#### Defined in

[src/libs/regex.ts:40](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/regex.ts#L40)

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

[src/libs/set.ts:5](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/set.ts#L5)

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

[src/libs/set.ts:21](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/set.ts#L21)

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

[src/libs/string.ts:200](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/string.ts#L200)

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

[src/libs/string.ts:116](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/string.ts#L116)

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

[src/libs/string.ts:132](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/string.ts#L132)

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

[src/libs/string.ts:160](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/string.ts#L160)

___

### strTimes

▸ **strTimes**(`input`, `n`): `string`

Returns a given number of contatenations of a given input string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | The string to search |
| `n` | `number` | Number of repetitions of the input string |

#### Returns

`string`

#### Defined in

[src/libs/string.ts:220](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/string.ts#L220)

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

[src/libs/string.ts:145](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/string.ts#L145)

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

[src/libs/string.ts:24](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/string.ts#L24)

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

[src/libs/string.ts:10](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/string.ts#L10)

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

[src/libs/string.ts:52](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/string.ts#L52)

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

[src/libs/string.ts:64](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/string.ts#L64)

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

[src/libs/string.ts:40](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/string.ts#L40)

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

[src/libs/string.ts:100](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/string.ts#L100)

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

[src/libs/string.ts:76](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/string.ts#L76)

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

[src/libs/string.ts:88](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/string.ts#L88)

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

[src/libs/node.ts:205](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/node.ts#L205)
