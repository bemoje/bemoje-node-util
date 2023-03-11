<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@bemoje/node-util](#bemojenode-util)
  - [Table of contents](#table-of-contents)
    - [Classes](#classes)
    - [Interfaces](#interfaces)
    - [Type Aliases](#type-aliases)
    - [Functions](#functions)
  - [Type Aliases](#type-aliases-1)
    - [Callback](#callback)
    - [Comparator](#comparator)
    - [MemoryUsageValues](#memoryusagevalues)
    - [MemoryUsageValuesFormatted](#memoryusagevaluesformatted)
    - [Predicate](#predicate)
    - [RexecOutput](#rexecoutput)
    - [TableSerializedForm](#tableserializedform)
    - [ensureValidWindowsPathOptions](#ensurevalidwindowspathoptions)
  - [Functions](#functions-1)
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
- [Classes](#classes-1)
  - [Class: Base](#class-base)
    - [Hierarchy](#hierarchy)
    - [Table of contents](#table-of-contents-1)
    - [Constructors](#constructors)
  - [Class: ExtensibleFunction](#class-extensiblefunction)
    - [Hierarchy](#hierarchy-1)
    - [Table of contents](#table-of-contents-2)
    - [Constructors](#constructors-1)
    - [Properties](#properties)
    - [Methods](#methods)
  - [Class: Matrix](#class-matrix)
    - [Table of contents](#table-of-contents-3)
    - [Constructors](#constructors-2)
    - [Accessors](#accessors)
    - [Methods](#methods-1)
  - [Class: SortedArray<T\>](#class-sortedarrayt%5C)
    - [Type parameters](#type-parameters)
    - [Hierarchy](#hierarchy-2)
    - [Table of contents](#table-of-contents-4)
    - [Constructors](#constructors-3)
    - [Properties](#properties-1)
    - [Methods](#methods-2)
  - [Class: StringStream](#class-stringstream)
    - [Hierarchy](#hierarchy-3)
    - [Table of contents](#table-of-contents-5)
    - [Constructors](#constructors-4)
    - [Properties](#properties-2)
    - [Methods](#methods-3)
  - [Class: Table<T\>](#class-tablet%5C)
    - [Type parameters](#type-parameters-1)
    - [Hierarchy](#hierarchy-4)
    - [Implements](#implements)
    - [Table of contents](#table-of-contents-6)
    - [Constructors](#constructors-5)
    - [Accessors](#accessors-1)
    - [Methods](#methods-4)
  - [Class: Timer](#class-timer)
    - [Table of contents](#table-of-contents-7)
    - [Constructors](#constructors-6)
    - [Properties](#properties-3)
    - [Methods](#methods-5)
- [Interfaces](#interfaces-1)
  - [Interface: IRevivableJSON<SerializedForm\>](#interface-irevivablejsonserializedform%5C)
    - [Type parameters](#type-parameters-2)
    - [Implemented by](#implemented-by)
    - [Table of contents](#table-of-contents-8)
    - [Properties](#properties-4)
  - [Interface: ISortedArrayOptions<T\>](#interface-isortedarrayoptionst%5C)
    - [Type parameters](#type-parameters-3)
    - [Table of contents](#table-of-contents-9)
    - [Properties](#properties-5)
  - [Interface: ITableOptions<T\>](#interface-itableoptionst%5C)
    - [Type parameters](#type-parameters-4)
    - [Table of contents](#table-of-contents-10)
    - [Properties](#properties-6)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

@bemoje/node-util

# @bemoje/node-util

## Table of contents

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
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | input string |

#### Returns

`string`

#### Defined in

[src/libs/string.ts:90](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/string.ts#L90)

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

[src/libs/node.ts:205](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/node.ts#L205)


<a name="readme2md"></a>


# Classes


<a name="classesbasemd"></a>

[@bemoje/node-util](#readmemd) / Base

## Class: Base

Abstract class that other classes can inherit from to gain various handy functionality.

### Hierarchy

- **`Base`**

  ↳ [`Table`](#classestablemd)

### Table of contents

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
```

### Hierarchy

- `Function`

  ↳ **`ExtensibleFunction`**

### Table of contents

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
The this object of the bound function is associated with the specified object, and has the specified initial parameters.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `Function` | - |
| `thisArg` | `any` | An object to which the this keyword can refer inside the new function. |
| `...argArray` | `any`[] | A list of arguments to be passed to the new function. |

##### Returns

`any`

##### Inherited from

Function.bind

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:295

___

#### call

▸ **call**(`this`, `thisArg`, `...argArray`): `any`

Calls a method of an object, substituting another object for the current object.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `Function` | - |
| `thisArg` | `any` | The object to be used as the current object. |
| `...argArray` | `any`[] | A list of arguments to be passed to the method. |

##### Returns

`any`

##### Inherited from

Function.call

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:287

___

#### toString

▸ **toString**(): `string`

Returns a string representation of a function.

##### Returns

`string`

##### Inherited from

Function.toString

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:298


<a name="classesmatrixmd"></a>

[@bemoje/node-util](#readmemd) / Matrix

## Class: Matrix

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Accessors

- [cols](#cols)
- [rows](#rows)

#### Methods

- [[iterator]](Matrix.md#[iterator])
- [addBy](#addby)
- [addColBy](#addcolby)
- [addRowBy](#addrowby)
- [appendCol](#appendcol)
- [appendRow](#appendrow)
- [clone](#clone)
- [deepEquals](#deepequals)
- [divideBy](#divideby)
- [divideColBy](#dividecolby)
- [divideRowBy](#dividerowby)
- [dotProduct](#dotproduct)
- [every](#every)
- [forEach](#foreach)
- [forEachInCol](#foreachincol)
- [forEachInDiagonal](#foreachindiagonal)
- [forEachInRow](#foreachinrow)
- [get](#get)
- [getImmutable](#getimmutable)
- [has](#has)
- [hasDimensions](#hasdimensions)
- [isSameInstanceAs](#issameinstanceas)
- [isScalarMatrix](#isscalarmatrix)
- [isSquareMatrix](#issquarematrix)
- [isZeroMatrix](#iszeromatrix)
- [map](#map)
- [mapCol](#mapcol)
- [mapRow](#maprow)
- [multiplyBy](#multiplyby)
- [multiplyColBy](#multiplycolby)
- [multiplyRowBy](#multiplyrowby)
- [set](#set)
- [setImmutable](#setimmutable)
- [some](#some)
- [subtractBy](#subtractby)
- [subtractColBy](#subtractcolby)
- [subtractRowBy](#subtractrowby)
- [swapCols](#swapcols)
- [swapRows](#swaprows)
- [toArray](#toarray)
- [values](#values)
- [fromArray](#fromarray)
- [fromIterable](#fromiterable)
- [identity](#identity)

### Constructors

#### constructor

• **new Matrix**(`rows`, `cols`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `rows` | `number` |
| `cols` | `number` |

##### Defined in

[src/libs/datastructures/src/Matrix.ts:35](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L35)

### Accessors

#### cols

• `get` **cols**(): `number`

##### Returns

`number`

##### Defined in

[src/libs/datastructures/src/Matrix.ts:48](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L48)

___

#### rows

• `get` **rows**(): `number`

##### Returns

`number`

##### Defined in

[src/libs/datastructures/src/Matrix.ts:44](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L44)

### Methods

#### [iterator]

▸ **[iterator]**(): `Generator`<`number`, `any`, `unknown`\>

##### Returns

`Generator`<`number`, `any`, `unknown`\>

##### Defined in

[src/libs/datastructures/src/Matrix.ts:157](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L157)

___

#### addBy

▸ **addBy**(`n`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:213](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L213)

___

#### addColBy

▸ **addColBy**(`col`, `n`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `n` | `number` |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:253](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L253)

___

#### addRowBy

▸ **addRowBy**(`row`, `n`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `n` | `number` |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:233](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L233)

___

#### appendCol

▸ **appendCol**(`col?`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `col?` | `number`[] |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:198](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L198)

___

#### appendRow

▸ **appendRow**(`row?`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `row?` | `number`[] |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:185](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L185)

___

#### clone

▸ **clone**(): [`Matrix`](#classesmatrixmd)

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:99](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L99)

___

#### deepEquals

▸ **deepEquals**(`other`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Matrix`](#classesmatrixmd) \| `number`[][] |

##### Returns

`boolean`

##### Defined in

[src/libs/datastructures/src/Matrix.ts:65](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L65)

___

#### divideBy

▸ **divideBy**(`n`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:228](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L228)

___

#### divideColBy

▸ **divideColBy**(`col`, `n`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `n` | `number` |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:268](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L268)

___

#### divideRowBy

▸ **divideRowBy**(`row`, `n`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `n` | `number` |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:248](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L248)

___

#### dotProduct

▸ **dotProduct**(`other`): [`Matrix`](#classesmatrixmd)

Performs dot product of the matrix with another given matrix.

##### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Matrix`](#classesmatrixmd) |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:344](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L344)

___

#### every

▸ **every**(`f`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `number`, `row`: `number`, `col`: `number`) => `boolean` |

##### Returns

`boolean`

##### Defined in

[src/libs/datastructures/src/Matrix.ts:304](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L304)

___

#### forEach

▸ **forEach**(`f`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `number`, `row`: `number`, `col`: `number`) => `boolean` \| `void` |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:109](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L109)

___

#### forEachInCol

▸ **forEachInCol**(`col`, `f`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `f` | (`value`: `number`, `row`: `number`) => `boolean` \| `void` |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:129](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L129)

___

#### forEachInDiagonal

▸ **forEachInDiagonal**(`f`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `number`, `row`: `number`, `col`: `number`) => `boolean` \| `void` |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:138](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L138)

___

#### forEachInRow

▸ **forEachInRow**(`row`, `f`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `f` | (`value`: `number`, `col`: `number`) => `boolean` \| `void` |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:120](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L120)

___

#### get

▸ **get**(`row`, `col`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |

##### Returns

`number`

##### Defined in

[src/libs/datastructures/src/Matrix.ts:83](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L83)

___

#### getImmutable

▸ **getImmutable**(): `boolean`

##### Returns

`boolean`

##### Defined in

[src/libs/datastructures/src/Matrix.ts:56](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L56)

___

#### has

▸ **has**(`row`, `col`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |

##### Returns

`boolean`

##### Defined in

[src/libs/datastructures/src/Matrix.ts:87](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L87)

___

#### hasDimensions

▸ **hasDimensions**(`rows`, `cols`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `rows` | `number` |
| `cols` | `number` |

##### Returns

`boolean`

##### Defined in

[src/libs/datastructures/src/Matrix.ts:315](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L315)

___

#### isSameInstanceAs

▸ **isSameInstanceAs**(`other`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Matrix`](#classesmatrixmd) |

##### Returns

`boolean`

##### Defined in

[src/libs/datastructures/src/Matrix.ts:52](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L52)

___

#### isScalarMatrix

▸ **isScalarMatrix**(): `boolean`

Returns whether the matrix is a square matrix that has identical values on its diagonal.

##### Returns

`boolean`

##### Defined in

[src/libs/datastructures/src/Matrix.ts:326](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L326)

___

#### isSquareMatrix

▸ **isSquareMatrix**(): `boolean`

##### Returns

`boolean`

##### Defined in

[src/libs/datastructures/src/Matrix.ts:319](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L319)

___

#### isZeroMatrix

▸ **isZeroMatrix**(): `boolean`

##### Returns

`boolean`

##### Defined in

[src/libs/datastructures/src/Matrix.ts:337](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L337)

___

#### map

▸ **map**(`f`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `number`, `row`: `number`, `col`: `number`) => `number` |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:147](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L147)

___

#### mapCol

▸ **mapCol**(`col`, `f`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `f` | (`value`: `number`, `row`: `number`) => `number` |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:177](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L177)

___

#### mapRow

▸ **mapRow**(`row`, `f`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `f` | (`value`: `number`, `col`: `number`) => `number` |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:169](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L169)

___

#### multiplyBy

▸ **multiplyBy**(`n`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:223](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L223)

___

#### multiplyColBy

▸ **multiplyColBy**(`col`, `n`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `n` | `number` |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:263](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L263)

___

#### multiplyRowBy

▸ **multiplyRowBy**(`row`, `n`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `n` | `number` |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:243](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L243)

___

#### set

▸ **set**(`row`, `col`, `value`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `value` | `number` |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:77](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L77)

___

#### setImmutable

▸ **setImmutable**(`immutable`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `immutable` | `boolean` |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:60](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L60)

___

#### some

▸ **some**(`f`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `number`, `row`: `number`, `col`: `number`) => `boolean` |

##### Returns

`boolean`

##### Defined in

[src/libs/datastructures/src/Matrix.ts:293](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L293)

___

#### subtractBy

▸ **subtractBy**(`n`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:218](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L218)

___

#### subtractColBy

▸ **subtractColBy**(`col`, `n`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `n` | `number` |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:258](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L258)

___

#### subtractRowBy

▸ **subtractRowBy**(`row`, `n`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `n` | `number` |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:238](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L238)

___

#### swapCols

▸ **swapCols**(`col1`, `col2`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `col1` | `number` |
| `col2` | `number` |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:282](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L282)

___

#### swapRows

▸ **swapRows**(`row1`, `row2`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `row1` | `number` |
| `row2` | `number` |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:273](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L273)

___

#### toArray

▸ **toArray**(): `number`[][]

##### Returns

`number`[][]

##### Defined in

[src/libs/datastructures/src/Matrix.ts:91](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L91)

___

#### values

▸ **values**(): `Generator`<`number`, `any`, `unknown`\>

##### Returns

`Generator`<`number`, `any`, `unknown`\>

##### Defined in

[src/libs/datastructures/src/Matrix.ts:165](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L165)

___

#### fromArray

▸ `Static` **fromArray**(`array`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `number`[][] |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:5](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L5)

___

#### fromIterable

▸ `Static` **fromIterable**(`iterable`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `Iterable`<`Iterable`<`number`\>\> |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:19](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L19)

___

#### identity

▸ `Static` **identity**(`size`): [`Matrix`](#classesmatrixmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

##### Returns

[`Matrix`](#classesmatrixmd)

##### Defined in

[src/libs/datastructures/src/Matrix.ts:27](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Matrix.ts#L27)


<a name="classessortedarraymd"></a>

[@bemoje/node-util](#readmemd) / SortedArray

## Class: SortedArray<T\>

### Type parameters

| Name |
| :------ |
| `T` |

### Hierarchy

- `Array`

  ↳ **`SortedArray`**

### Table of contents

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
This method mutates the array and returns a reference to the same array.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: `any`, `b`: `any`) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ``` |

##### Returns

[`SortedArray`](#classessortedarraymd)<`T`\>

##### Inherited from

Array.sort

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1370

___

#### splice

▸ **splice**(`start`, `deleteCount?`): `any`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | `number` | The number of elements to remove. |

##### Returns

`any`[]

An array containing the elements that were deleted.

##### Inherited from

Array.splice

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1377

▸ **splice**(`start`, `deleteCount`, `...items`): `any`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount` | `number` | The number of elements to remove. |
| `...items` | `any`[] | Elements to insert into the array in place of the deleted elements. |

##### Returns

`any`[]

An array containing the elements that were deleted.

##### Inherited from

Array.splice

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1385

___

#### toArray

▸ **toArray**(): `T`[]

Convert to a normal Array instance

##### Returns

`T`[]

##### Defined in

[src/libs/datastructures/src/SortedArray.ts:43](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/SortedArray.ts#L43)

___

#### toLocaleString

▸ **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

##### Returns

`string`

##### Inherited from

Array.toLocaleString

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1312

___

#### toString

▸ **toString**(): `string`

Returns a string representation of an array.

##### Returns

`string`

##### Inherited from

Array.toString

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1308

___

#### unique

▸ **unique**(): [`SortedArray`](#classessortedarraymd)<`T`\>

Remove all duplicate elements in the sorted array, leaving only unique values. Equality is determined by the compare function.

##### Returns

[`SortedArray`](#classessortedarraymd)<`T`\>

##### Defined in

[src/libs/datastructures/src/SortedArray.ts:79](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/SortedArray.ts#L79)

___

#### unshift

▸ **unshift**(`...items`): `number`

Inserts new elements at the start of an array, and returns the new length of the array.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `any`[] | Elements to insert at the start of the array. |

##### Returns

`number`

##### Inherited from

Array.unshift

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1390

___

#### values

▸ **values**(): `IterableIterator`<`any`\>

Returns an iterable of values in the array

##### Returns

`IterableIterator`<`any`\>

##### Inherited from

Array.values

##### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:75

___

#### from

▸ `Static` **from**<`T`\>(`arrayLike`): `T`[]

Creates an array from an array-like object.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | `ArrayLike`<`T`\> | An array-like object to convert to an array. |

##### Returns

`T`[]

##### Inherited from

Array.from

##### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:72

▸ `Static` **from**<`T`, `U`\>(`arrayLike`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

##### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | `ArrayLike`<`T`\> | An array-like object to convert to an array. |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

##### Returns

`U`[]

##### Inherited from

Array.from

##### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:80

▸ `Static` **from**<`T`\>(`iterable`): `T`[]

Creates an array from an iterable object.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`<`T`\> \| `ArrayLike`<`T`\> | An iterable object to convert to an array. |

##### Returns

`T`[]

##### Inherited from

Array.from

##### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:83

▸ `Static` **from**<`T`, `U`\>(`iterable`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

##### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`<`T`\> \| `ArrayLike`<`T`\> | An iterable object to convert to an array. |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

##### Returns

`U`[]

##### Inherited from

Array.from

##### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:91

___

#### isArray

▸ `Static` **isArray**(`arg`): arg is any[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

##### Returns

arg is any[]

##### Inherited from

Array.isArray

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1491

___

#### of

▸ `Static` **of**<`T`\>(`...items`): `T`[]

Returns a new array from a set of elements.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `T`[] | A set of elements to include in the new array object. |

##### Returns

`T`[]

##### Inherited from

Array.of

##### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:86


<a name="classesstringstreammd"></a>

[@bemoje/node-util](#readmemd) / StringStream

## Class: StringStream

Extension of Node's native Readable class for converting a string into a Readable stream.

### Hierarchy

- `Readable`

  ↳ **`StringStream`**

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [closed](#closed)
- [destroyed](#destroyed)
- [errored](#errored)
- [readable](#readable)
- [readableAborted](#readableaborted)
- [readableDidRead](#readabledidread)
- [readableEncoding](#readableencoding)
- [readableEnded](#readableended)
- [readableFlowing](#readableflowing)
- [readableHighWaterMark](#readablehighwatermark)
- [readableLength](#readablelength)
- [readableObjectMode](#readableobjectmode)
- [captureRejectionSymbol](#capturerejectionsymbol)
- [captureRejections](#capturerejections)
- [defaultMaxListeners](#defaultmaxlisteners)
- [errorMonitor](#errormonitor)

#### Methods

- [[asyncIterator]](StringStream.md#[asynciterator])
- [\_construct](#_construct)
- [\_destroy](#_destroy)
- [\_read](#_read)
- [addListener](#addlistener)
- [destroy](#destroy)
- [emit](#emit)
- [eventNames](#eventnames)
- [getMaxListeners](#getmaxlisteners)
- [isPaused](#ispaused)
- [listenerCount](#listenercount)
- [listeners](#listeners)
- [off](#off)
- [on](#on)
- [once](#once)
- [pause](#pause)
- [pipe](#pipe)
- [prependListener](#prependlistener)
- [prependOnceListener](#prependoncelistener)
- [push](#push)
- [rawListeners](#rawlisteners)
- [read](#read)
- [removeAllListeners](#removealllisteners)
- [removeListener](#removelistener)
- [resume](#resume)
- [setEncoding](#setencoding)
- [setMaxListeners](#setmaxlisteners)
- [unpipe](#unpipe)
- [unshift](#unshift)
- [wrap](#wrap)
- [from](#from)
- [fromWeb](#fromweb)
- [getEventListeners](#geteventlisteners)
- [isDisturbed](#isdisturbed)
- [listenerCount](#listenercount-1)
- [on](#on-1)
- [once](#once-1)
- [setMaxListeners](#setmaxlisteners-1)
- [toWeb](#toweb)

### Constructors

#### constructor

• **new StringStream**(`str`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

##### Overrides

Readable.constructor

##### Defined in

[src/libs/node.ts:184](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/node.ts#L184)

### Properties

#### closed

• `Readonly` **closed**: `boolean`

Is true after 'close' has been emitted.

**`Since`**

v18.0.0

##### Inherited from

Readable.closed

##### Defined in

node_modules/@types/node/stream.d.ts:134

___

#### destroyed

• **destroyed**: `boolean`

Is `true` after `readable.destroy()` has been called.

**`Since`**

v8.0.0

##### Inherited from

Readable.destroyed

##### Defined in

node_modules/@types/node/stream.d.ts:129

___

#### errored

• `Readonly` **errored**: ``null`` \| `Error`

Returns error if the stream has been destroyed with an error.

**`Since`**

v18.0.0

##### Inherited from

Readable.errored

##### Defined in

node_modules/@types/node/stream.d.ts:139

___

#### readable

• **readable**: `boolean`

Is `true` if it is safe to call `readable.read()`, which means
the stream has not been destroyed or emitted `'error'` or `'end'`.

**`Since`**

v11.4.0

##### Inherited from

Readable.readable

##### Defined in

node_modules/@types/node/stream.d.ts:85

___

#### readableAborted

• `Readonly` **readableAborted**: `boolean`

Returns whether the stream was destroyed or errored before emitting `'end'`.

**`Since`**

v16.8.0

##### Inherited from

Readable.readableAborted

##### Defined in

node_modules/@types/node/stream.d.ts:79

___

#### readableDidRead

• `Readonly` **readableDidRead**: `boolean`

Returns whether `'data'` has been emitted.

**`Since`**

v16.7.0, v14.18.0

##### Inherited from

Readable.readableDidRead

##### Defined in

node_modules/@types/node/stream.d.ts:91

___

#### readableEncoding

• `Readonly` **readableEncoding**: ``null`` \| `BufferEncoding`

Getter for the property `encoding` of a given `Readable` stream. The `encoding`property can be set using the `readable.setEncoding()` method.

**`Since`**

v12.7.0

##### Inherited from

Readable.readableEncoding

##### Defined in

node_modules/@types/node/stream.d.ts:96

___

#### readableEnded

• `Readonly` **readableEnded**: `boolean`

Becomes `true` when `'end'` event is emitted.

**`Since`**

v12.9.0

##### Inherited from

Readable.readableEnded

##### Defined in

node_modules/@types/node/stream.d.ts:101

___

#### readableFlowing

• `Readonly` **readableFlowing**: ``null`` \| `boolean`

This property reflects the current state of a `Readable` stream as described
in the `Three states` section.

**`Since`**

v9.4.0

##### Inherited from

Readable.readableFlowing

##### Defined in

node_modules/@types/node/stream.d.ts:107

___

#### readableHighWaterMark

• `Readonly` **readableHighWaterMark**: `number`

Returns the value of `highWaterMark` passed when creating this `Readable`.

**`Since`**

v9.3.0

##### Inherited from

Readable.readableHighWaterMark

##### Defined in

node_modules/@types/node/stream.d.ts:112

___

#### readableLength

• `Readonly` **readableLength**: `number`

This property contains the number of bytes (or objects) in the queue
ready to be read. The value provides introspection data regarding
the status of the `highWaterMark`.

**`Since`**

v9.4.0

##### Inherited from

Readable.readableLength

##### Defined in

node_modules/@types/node/stream.d.ts:119

___

#### readableObjectMode

• `Readonly` **readableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Readable` stream.

**`Since`**

v12.3.0

##### Inherited from

Readable.readableObjectMode

##### Defined in

node_modules/@types/node/stream.d.ts:124

___

#### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](#capturerejectionsymbol)

##### Inherited from

Readable.captureRejectionSymbol

##### Defined in

node_modules/@types/node/events.d.ts:328

___

#### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

##### Inherited from

Readable.captureRejections

##### Defined in

node_modules/@types/node/events.d.ts:333

___

#### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

##### Inherited from

Readable.defaultMaxListeners

##### Defined in

node_modules/@types/node/events.d.ts:334

___

#### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

##### Inherited from

Readable.errorMonitor

##### Defined in

node_modules/@types/node/events.d.ts:327

### Methods

#### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterableIterator`<`any`\>

##### Returns

`AsyncIterableIterator`<`any`\>

##### Inherited from

Readable.\_\_@asyncIterator@1917

##### Defined in

node_modules/@types/node/stream.d.ts:503

___

#### \_construct

▸ `Optional` **_construct**(`callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

##### Returns

`void`

##### Inherited from

Readable.\_construct

##### Defined in

node_modules/@types/node/stream.d.ts:141

___

#### \_destroy

▸ **_destroy**(`error`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | ``null`` \| `Error` |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

##### Returns

`void`

##### Inherited from

Readable.\_destroy

##### Defined in

node_modules/@types/node/stream.d.ts:423

___

#### \_read

▸ **_read**(): `void`

##### Returns

`void`

##### Overrides

Readable.\_read

##### Defined in

[src/libs/node.ts:190](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/node.ts#L190)

___

#### addListener

▸ **addListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.addListener

##### Defined in

node_modules/@types/node/stream.d.ts:447

▸ **addListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.addListener

##### Defined in

node_modules/@types/node/stream.d.ts:448

▸ **addListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.addListener

##### Defined in

node_modules/@types/node/stream.d.ts:449

▸ **addListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.addListener

##### Defined in

node_modules/@types/node/stream.d.ts:450

▸ **addListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.addListener

##### Defined in

node_modules/@types/node/stream.d.ts:451

▸ **addListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.addListener

##### Defined in

node_modules/@types/node/stream.d.ts:452

▸ **addListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.addListener

##### Defined in

node_modules/@types/node/stream.d.ts:453

▸ **addListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.addListener

##### Defined in

node_modules/@types/node/stream.d.ts:454

___

#### destroy

▸ **destroy**(`error?`): [`StringStream`](#classesstringstreammd)

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'`event (unless `emitClose` is set to `false`). After this call, the readable
stream will release any internal resources and subsequent calls to `push()`will be ignored.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method, but instead implement `readable._destroy()`.

**`Since`**

v8.0.0

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | `Error` | Error which will be passed as payload in `'error'` event |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.destroy

##### Defined in

node_modules/@types/node/stream.d.ts:435

___

#### emit

▸ **emit**(`event`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |

##### Returns

`boolean`

##### Inherited from

Readable.emit

##### Defined in

node_modules/@types/node/stream.d.ts:455

▸ **emit**(`event`, `chunk`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `chunk` | `any` |

##### Returns

`boolean`

##### Inherited from

Readable.emit

##### Defined in

node_modules/@types/node/stream.d.ts:456

▸ **emit**(`event`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |

##### Returns

`boolean`

##### Inherited from

Readable.emit

##### Defined in

node_modules/@types/node/stream.d.ts:457

▸ **emit**(`event`, `err`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

##### Returns

`boolean`

##### Inherited from

Readable.emit

##### Defined in

node_modules/@types/node/stream.d.ts:458

▸ **emit**(`event`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |

##### Returns

`boolean`

##### Inherited from

Readable.emit

##### Defined in

node_modules/@types/node/stream.d.ts:459

▸ **emit**(`event`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |

##### Returns

`boolean`

##### Inherited from

Readable.emit

##### Defined in

node_modules/@types/node/stream.d.ts:460

▸ **emit**(`event`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |

##### Returns

`boolean`

##### Inherited from

Readable.emit

##### Defined in

node_modules/@types/node/stream.d.ts:461

▸ **emit**(`event`, `...args`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

##### Returns

`boolean`

##### Inherited from

Readable.emit

##### Defined in

node_modules/@types/node/stream.d.ts:462

___

#### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`Since`**

v6.0.0

##### Returns

(`string` \| `symbol`)[]

##### Inherited from

Readable.eventNames

##### Defined in

node_modules/@types/node/events.d.ts:669

___

#### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](#defaultmaxlisteners).

**`Since`**

v1.0.0

##### Returns

`number`

##### Inherited from

Readable.getMaxListeners

##### Defined in

node_modules/@types/node/events.d.ts:526

___

#### isPaused

▸ **isPaused**(): `boolean`

The `readable.isPaused()` method returns the current operating state of the`Readable`. This is used primarily by the mechanism that underlies the`readable.pipe()` method. In most
typical cases, there will be no reason to
use this method directly.

```js
const readable = new stream.Readable();

readable.isPaused(); // === false
readable.pause();
readable.isPaused(); // === true
readable.resume();
readable.isPaused(); // === false
```

**`Since`**

v0.11.14

##### Returns

`boolean`

##### Inherited from

Readable.isPaused

##### Defined in

node_modules/@types/node/stream.d.ts:302

___

#### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`Since`**

v3.2.0

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

##### Returns

`number`

##### Inherited from

Readable.listenerCount

##### Defined in

node_modules/@types/node/events.d.ts:616

___

#### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`Since`**

v0.1.26

##### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

##### Returns

`Function`[]

##### Inherited from

Readable.listeners

##### Defined in

node_modules/@types/node/events.d.ts:539

___

#### off

▸ **off**(`eventName`, `listener`): [`StringStream`](#classesstringstreammd)

Alias for `emitter.removeListener()`.

**`Since`**

v10.0.0

##### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.off

##### Defined in

node_modules/@types/node/events.d.ts:499

___

#### on

▸ **on**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.on

##### Defined in

node_modules/@types/node/stream.d.ts:463

▸ **on**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.on

##### Defined in

node_modules/@types/node/stream.d.ts:464

▸ **on**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.on

##### Defined in

node_modules/@types/node/stream.d.ts:465

▸ **on**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.on

##### Defined in

node_modules/@types/node/stream.d.ts:466

▸ **on**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.on

##### Defined in

node_modules/@types/node/stream.d.ts:467

▸ **on**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.on

##### Defined in

node_modules/@types/node/stream.d.ts:468

▸ **on**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.on

##### Defined in

node_modules/@types/node/stream.d.ts:469

▸ **on**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.on

##### Defined in

node_modules/@types/node/stream.d.ts:470

___

#### once

▸ **once**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.once

##### Defined in

node_modules/@types/node/stream.d.ts:471

▸ **once**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.once

##### Defined in

node_modules/@types/node/stream.d.ts:472

▸ **once**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.once

##### Defined in

node_modules/@types/node/stream.d.ts:473

▸ **once**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.once

##### Defined in

node_modules/@types/node/stream.d.ts:474

▸ **once**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.once

##### Defined in

node_modules/@types/node/stream.d.ts:475

▸ **once**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.once

##### Defined in

node_modules/@types/node/stream.d.ts:476

▸ **once**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.once

##### Defined in

node_modules/@types/node/stream.d.ts:477

▸ **once**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.once

##### Defined in

node_modules/@types/node/stream.d.ts:478

___

#### pause

▸ **pause**(): [`StringStream`](#classesstringstreammd)

The `readable.pause()` method will cause a stream in flowing mode to stop
emitting `'data'` events, switching out of flowing mode. Any data that
becomes available will remain in the internal buffer.

```js
const readable = getReadableStreamSomehow();
readable.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
  readable.pause();
  console.log('There will be no additional data for 1 second.');
  setTimeout(() => {
    console.log('Now data will start flowing again.');
    readable.resume();
  }, 1000);
});
```

The `readable.pause()` method has no effect if there is a `'readable'`event listener.

**`Since`**

v0.9.4

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.pause

##### Defined in

node_modules/@types/node/stream.d.ts:266

___

#### pipe

▸ **pipe**<`T`\>(`destination`, `options?`): `T`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `WritableStream`<`T`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `T` |
| `options?` | `Object` |
| `options.end?` | `boolean` |

##### Returns

`T`

##### Inherited from

Readable.pipe

##### Defined in

node_modules/@types/node/stream.d.ts:26

___

#### prependListener

▸ **prependListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.prependListener

##### Defined in

node_modules/@types/node/stream.d.ts:479

▸ **prependListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.prependListener

##### Defined in

node_modules/@types/node/stream.d.ts:480

▸ **prependListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.prependListener

##### Defined in

node_modules/@types/node/stream.d.ts:481

▸ **prependListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.prependListener

##### Defined in

node_modules/@types/node/stream.d.ts:482

▸ **prependListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.prependListener

##### Defined in

node_modules/@types/node/stream.d.ts:483

▸ **prependListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.prependListener

##### Defined in

node_modules/@types/node/stream.d.ts:484

▸ **prependListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.prependListener

##### Defined in

node_modules/@types/node/stream.d.ts:485

▸ **prependListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.prependListener

##### Defined in

node_modules/@types/node/stream.d.ts:486

___

#### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.prependOnceListener

##### Defined in

node_modules/@types/node/stream.d.ts:487

▸ **prependOnceListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.prependOnceListener

##### Defined in

node_modules/@types/node/stream.d.ts:488

▸ **prependOnceListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.prependOnceListener

##### Defined in

node_modules/@types/node/stream.d.ts:489

▸ **prependOnceListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.prependOnceListener

##### Defined in

node_modules/@types/node/stream.d.ts:490

▸ **prependOnceListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.prependOnceListener

##### Defined in

node_modules/@types/node/stream.d.ts:491

▸ **prependOnceListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.prependOnceListener

##### Defined in

node_modules/@types/node/stream.d.ts:492

▸ **prependOnceListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.prependOnceListener

##### Defined in

node_modules/@types/node/stream.d.ts:493

▸ **prependOnceListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.prependOnceListener

##### Defined in

node_modules/@types/node/stream.d.ts:494

___

#### push

▸ **push**(`chunk`, `encoding?`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding?` | `BufferEncoding` |

##### Returns

`boolean`

##### Inherited from

Readable.push

##### Defined in

node_modules/@types/node/stream.d.ts:422

___

#### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`Since`**

v9.4.0

##### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

##### Returns

`Function`[]

##### Inherited from

Readable.rawListeners

##### Defined in

node_modules/@types/node/events.d.ts:569

___

#### read

▸ **read**(`size?`): `any`

The `readable.read()` method reads data out of the internal buffer and
returns it. If no data is available to be read, `null` is returned. By default,
the data is returned as a `Buffer` object unless an encoding has been
specified using the `readable.setEncoding()` method or the stream is operating
in object mode.

The optional `size` argument specifies a specific number of bytes to read. If`size` bytes are not available to be read, `null` will be returned _unless_the stream has ended, in which
case all of the data remaining in the internal
buffer will be returned.

If the `size` argument is not specified, all of the data contained in the
internal buffer will be returned.

The `size` argument must be less than or equal to 1 GiB.

The `readable.read()` method should only be called on `Readable` streams
operating in paused mode. In flowing mode, `readable.read()` is called
automatically until the internal buffer is fully drained.

```js
const readable = getReadableStreamSomehow();

// 'readable' may be triggered multiple times as data is buffered in
readable.on('readable', () => {
  let chunk;
  console.log('Stream is readable (new data received in buffer)');
  // Use a loop to make sure we read all currently available data
  while (null !== (chunk = readable.read())) {
    console.log(`Read ${chunk.length} bytes of data...`);
  }
});

// 'end' will be triggered once when there is no more data available
readable.on('end', () => {
  console.log('Reached end of stream.');
});
```

Each call to `readable.read()` returns a chunk of data, or `null`. The chunks
are not concatenated. A `while` loop is necessary to consume all data
currently in the buffer. When reading a large file `.read()` may return `null`,
having consumed all buffered content so far, but there is still more data to
come not yet buffered. In this case a new `'readable'` event will be emitted
when there is more data in the buffer. Finally the `'end'` event will be
emitted when there is no more data to come.

Therefore to read a file's whole contents from a `readable`, it is necessary
to collect chunks across multiple `'readable'` events:

```js
const chunks = [];

readable.on('readable', () => {
  let chunk;
  while (null !== (chunk = readable.read())) {
    chunks.push(chunk);
  }
});

readable.on('end', () => {
  const content = chunks.join('');
});
```

A `Readable` stream in object mode will always return a single item from
a call to `readable.read(size)`, regardless of the value of the`size` argument.

If the `readable.read()` method returns a chunk of data, a `'data'` event will
also be emitted.

Calling [read](#read) after the `'end'` event has
been emitted will return `null`. No runtime error will be raised.

**`Since`**

v0.9.4

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size?` | `number` | Optional argument to specify how much data to read. |

##### Returns

`any`

##### Inherited from

Readable.read

##### Defined in

node_modules/@types/node/stream.d.ts:219

___

#### removeAllListeners

▸ **removeAllListeners**(`event?`): [`StringStream`](#classesstringstreammd)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

##### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.removeAllListeners

##### Defined in

node_modules/@types/node/events.d.ts:510

___

#### removeListener

▸ **removeListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.removeListener

##### Defined in

node_modules/@types/node/stream.d.ts:495

▸ **removeListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.removeListener

##### Defined in

node_modules/@types/node/stream.d.ts:496

▸ **removeListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.removeListener

##### Defined in

node_modules/@types/node/stream.d.ts:497

▸ **removeListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.removeListener

##### Defined in

node_modules/@types/node/stream.d.ts:498

▸ **removeListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.removeListener

##### Defined in

node_modules/@types/node/stream.d.ts:499

▸ **removeListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.removeListener

##### Defined in

node_modules/@types/node/stream.d.ts:500

▸ **removeListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.removeListener

##### Defined in

node_modules/@types/node/stream.d.ts:501

▸ **removeListener**(`event`, `listener`): [`StringStream`](#classesstringstreammd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.removeListener

##### Defined in

node_modules/@types/node/stream.d.ts:502

___

#### resume

▸ **resume**(): [`StringStream`](#classesstringstreammd)

The `readable.resume()` method causes an explicitly paused `Readable` stream to
resume emitting `'data'` events, switching the stream into flowing mode.

The `readable.resume()` method can be used to fully consume the data from a
stream without actually processing any of that data:

```js
getReadableStreamSomehow()
  .resume()
  .on('end', () => {
    console.log('Reached the end, but did not read anything.');
  });
```

The `readable.resume()` method has no effect if there is a `'readable'`event listener.

**`Since`**

v0.9.4

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.resume

##### Defined in

node_modules/@types/node/stream.d.ts:285

___

#### setEncoding

▸ **setEncoding**(`encoding`): [`StringStream`](#classesstringstreammd)

The `readable.setEncoding()` method sets the character encoding for
data read from the `Readable` stream.

By default, no encoding is assigned and stream data will be returned as`Buffer` objects. Setting an encoding causes the stream data
to be returned as strings of the specified encoding rather than as `Buffer`objects. For instance, calling `readable.setEncoding('utf8')` will cause the
output data to be interpreted as UTF-8 data, and passed as strings. Calling`readable.setEncoding('hex')` will cause the data to be encoded in hexadecimal
string format.

The `Readable` stream will properly handle multi-byte characters delivered
through the stream that would otherwise become improperly decoded if simply
pulled from the stream as `Buffer` objects.

```js
const readable = getReadableStreamSomehow();
readable.setEncoding('utf8');
readable.on('data', (chunk) => {
  assert.equal(typeof chunk, 'string');
  console.log('Got %d characters of string data:', chunk.length);
});
```

**`Since`**

v0.9.4

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | `BufferEncoding` | The encoding to use. |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.setEncoding

##### Defined in

node_modules/@types/node/stream.d.ts:244

___

#### setMaxListeners

▸ **setMaxListeners**(`n`): [`StringStream`](#classesstringstreammd)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.3.5

##### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.setMaxListeners

##### Defined in

node_modules/@types/node/events.d.ts:520

___

#### unpipe

▸ **unpipe**(`destination?`): [`StringStream`](#classesstringstreammd)

The `readable.unpipe()` method detaches a `Writable` stream previously attached
using the [pipe](#pipe) method.

If the `destination` is not specified, then _all_ pipes are detached.

If the `destination` is specified, but no pipe is set up for it, then
the method does nothing.

```js
const fs = require('fs');
const readable = getReadableStreamSomehow();
const writable = fs.createWriteStream('file.txt');
// All the data from readable goes into 'file.txt',
// but only for the first second.
readable.pipe(writable);
setTimeout(() => {
  console.log('Stop writing to file.txt.');
  readable.unpipe(writable);
  console.log('Manually close the file stream.');
  writable.end();
}, 1000);
```

**`Since`**

v0.9.4

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination?` | `WritableStream` | Optional specific stream to unpipe |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.unpipe

##### Defined in

node_modules/@types/node/stream.d.ts:329

___

#### unshift

▸ **unshift**(`chunk`, `encoding?`): `void`

Passing `chunk` as `null` signals the end of the stream (EOF) and behaves the
same as `readable.push(null)`, after which no more data can be written. The EOF
signal is put at the end of the buffer and any buffered data will still be
flushed.

The `readable.unshift()` method pushes a chunk of data back into the internal
buffer. This is useful in certain situations where a stream is being consumed by
code that needs to "un-consume" some amount of data that it has optimistically
pulled out of the source, so that the data can be passed on to some other party.

The `stream.unshift(chunk)` method cannot be called after the `'end'` event
has been emitted or a runtime error will be thrown.

Developers using `stream.unshift()` often should consider switching to
use of a `Transform` stream instead. See the `API for stream implementers` section for more information.

```js
// Pull off a header delimited by \n\n.
// Use unshift() if we get too much.
// Call the callback with (error, header, stream).
const { StringDecoder } = require('string_decoder');
function parseHeader(stream, callback) {
  stream.on('error', callback);
  stream.on('readable', onReadable);
  const decoder = new StringDecoder('utf8');
  let header = '';
  function onReadable() {
    let chunk;
    while (null !== (chunk = stream.read())) {
      const str = decoder.write(chunk);
      if (str.includes('\n\n')) {
        // Found the header boundary.
        const split = str.split(/\n\n/);
        header += split.shift();
        const remaining = split.join('\n\n');
        const buf = Buffer.from(remaining, 'utf8');
        stream.removeListener('error', callback);
        // Remove the 'readable' listener before unshifting.
        stream.removeListener('readable', onReadable);
        if (buf.length)
          stream.unshift(buf);
        // Now the body of the message can be read from the stream.
        callback(null, header, stream);
        return;
      }
      // Still reading the header.
      header += str;
    }
  }
}
```

Unlike [push](#push), `stream.unshift(chunk)` will not
end the reading process by resetting the internal reading state of the stream.
This can cause unexpected results if `readable.unshift()` is called during a
read (i.e. from within a [_read](#_read) implementation on a
custom stream). Following the call to `readable.unshift()` with an immediate [push](#push) will reset the reading state appropriately,
however it is best to simply avoid calling `readable.unshift()` while in the
process of performing a read.

**`Since`**

v0.9.11

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chunk` | `any` | Chunk of data to unshift onto the read queue. For streams not operating in object mode, `chunk` must be a string, `Buffer`, `Uint8Array` or `null`. For object mode streams, `chunk` may be any JavaScript value. |
| `encoding?` | `BufferEncoding` | Encoding of string chunks. Must be a valid `Buffer` encoding, such as `'utf8'` or `'ascii'`. |

##### Returns

`void`

##### Inherited from

Readable.unshift

##### Defined in

node_modules/@types/node/stream.d.ts:395

___

#### wrap

▸ **wrap**(`stream`): [`StringStream`](#classesstringstreammd)

Prior to Node.js 0.10, streams did not implement the entire `stream` module API
as it is currently defined. (See `Compatibility` for more information.)

When using an older Node.js library that emits `'data'` events and has a [pause](#pause) method that is advisory only, the`readable.wrap()` method can be used to create a `Readable`
stream that uses
the old stream as its data source.

It will rarely be necessary to use `readable.wrap()` but the method has been
provided as a convenience for interacting with older Node.js applications and
libraries.

```js
const { OldReader } = require('./old-api-module.js');
const { Readable } = require('stream');
const oreader = new OldReader();
const myReader = new Readable().wrap(oreader);

myReader.on('readable', () => {
  myReader.read(); // etc.
});
```

**`Since`**

v0.9.4

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | `ReadableStream` | An "old style" readable stream |

##### Returns

[`StringStream`](#classesstringstreammd)

##### Inherited from

Readable.wrap

##### Defined in

node_modules/@types/node/stream.d.ts:421

___

#### from

▸ `Static` **from**(`iterable`, `options?`): `Readable`

A utility method for creating Readable Streams out of iterators.

##### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `Iterable`<`any`\> \| `AsyncIterable`<`any`\> |
| `options?` | `ReadableOptions` |

##### Returns

`Readable`

##### Inherited from

Readable.from

##### Defined in

node_modules/@types/node/stream.d.ts:56

___

#### fromWeb

▸ `Static` **fromWeb**(`readableStream`, `options?`): `Readable`

A utility method for creating a `Readable` from a web `ReadableStream`.

**`Since`**

v17.0.0

##### Parameters

| Name | Type |
| :------ | :------ |
| `readableStream` | `ReadableStream`<`any`\> |
| `options?` | `Pick`<`ReadableOptions`, ``"encoding"`` \| ``"highWaterMark"`` \| ``"objectMode"`` \| ``"signal"``\> |

##### Returns

`Readable`

##### Inherited from

Readable.fromWeb

##### Defined in

node_modules/@types/node/stream.d.ts:62

___

#### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

**`Since`**

v15.2.0, v14.17.0

##### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |
| `name` | `string` \| `symbol` |

##### Returns

`Function`[]

##### Inherited from

Readable.getEventListeners

##### Defined in

node_modules/@types/node/events.d.ts:299

___

#### isDisturbed

▸ `Static` **isDisturbed**(`stream`): `boolean`

Returns whether the stream has been read from or cancelled.

**`Since`**

v16.8.0

##### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `Readable` \| `ReadableStream` |

##### Returns

`boolean`

##### Inherited from

Readable.isDisturbed

##### Defined in

node_modules/@types/node/stream.d.ts:67

___

#### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

##### Returns

`number`

##### Inherited from

Readable.listenerCount

##### Defined in

node_modules/@types/node/events.d.ts:271

___

#### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

**`Since`**

v13.6.0, v12.16.0

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

##### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

##### Inherited from

Readable.on

##### Defined in

node_modules/@types/node/events.d.ts:254

___

#### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

**`Since`**

v11.13.0, v10.16.0

##### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

##### Returns

`Promise`<`any`[]\>

##### Inherited from

Readable.once

##### Defined in

node_modules/@types/node/events.d.ts:194

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

##### Returns

`Promise`<`any`[]\>

##### Inherited from

Readable.once

##### Defined in

node_modules/@types/node/events.d.ts:195

___

#### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, `...eventTargets`): `void`

```js
const {
  setMaxListeners,
  EventEmitter
} = require('events');

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

**`Since`**

v15.4.0

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | (`EventEmitter` \| `_DOMEventTarget`)[] | - |

##### Returns

`void`

##### Inherited from

Readable.setMaxListeners

##### Defined in

node_modules/@types/node/events.d.ts:317

___

#### toWeb

▸ `Static` **toWeb**(`streamReadable`): `ReadableStream`<`any`\>

A utility method for creating a web `ReadableStream` from a `Readable`.

**`Since`**

v17.0.0

##### Parameters

| Name | Type |
| :------ | :------ |
| `streamReadable` | `Readable` |

##### Returns

`ReadableStream`<`any`\>

##### Inherited from

Readable.toWeb

##### Defined in

node_modules/@types/node/stream.d.ts:73


<a name="classestablemd"></a>

[@bemoje/node-util](#readmemd) / Table

## Class: Table<T\>

Two-dimensional table class supporting column and row headers.

### Type parameters

| Name |
| :------ |
| `T` |

### Hierarchy

- [`Base`](#classesbasemd)

  ↳ **`Table`**

### Implements

- [`IRevivableJSON`](#interfacesirevivablejsonmd)<[`TableSerializedForm`](#tableserializedform)<`T`\>\>

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Accessors

- [columnHeaders](#columnheaders)
- [columns](#columns)
- [rowHeaders](#rowheaders)
- [rows](#rows)

#### Methods

- [get](#get)
- [indexOfColumnHeader](#indexofcolumnheader)
- [indexOfRowHeader](#indexofrowheader)
- [removeColumn](#removecolumn)
- [removeRow](#removerow)
- [set](#set)
- [toArray](#toarray)
- [toArrayDataOnly](#toarraydataonly)
- [toCSV](#tocsv)
- [toJSON](#tojson)
- [fromCSV](#fromcsv)
- [fromJSON](#fromjson)

### Constructors

#### constructor

• **new Table**<`T`\>(`options?`)

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ITableOptions`](#interfacesitableoptionsmd)<`T`\> |

##### Overrides

[Base](#classesbasemd).[constructor](#constructor)

##### Defined in

[src/libs/datastructures/src/Table.ts:94](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Table.ts#L94)

### Accessors

#### columnHeaders

• `get` **columnHeaders**(): `string`[]

Gets the column headers.

##### Returns

`string`[]

##### Defined in

[src/libs/datastructures/src/Table.ts:119](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Table.ts#L119)

___

#### columns

• `get` **columns**(): `number`

Gets the number of cols in the table, not including headers.

##### Returns

`number`

##### Defined in

[src/libs/datastructures/src/Table.ts:105](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Table.ts#L105)

___

#### rowHeaders

• `get` **rowHeaders**(): `string`[]

Gets the row headers.

##### Returns

`string`[]

##### Defined in

[src/libs/datastructures/src/Table.ts:129](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Table.ts#L129)

___

#### rows

• `get` **rows**(): `number`

Gets the number of rows in the table, not including headers.

##### Returns

`number`

##### Defined in

[src/libs/datastructures/src/Table.ts:112](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Table.ts#L112)

### Methods

#### get

▸ **get**(`column`, `row`, `spreadsheetNotation?`): `T`

Returns a value at a given (row, col) position.

##### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `column` | `string` \| `number` | `undefined` | Column index |
| `row` | `string` \| `number` | `undefined` | Row index |
| `spreadsheetNotation` | `boolean` | `false` | Interpret row and col as spreadsheet coordinates, eg. ("A","1") |

##### Returns

`T`

##### Defined in

[src/libs/datastructures/src/Table.ts:142](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Table.ts#L142)

___

#### indexOfColumnHeader

▸ **indexOfColumnHeader**(`header`): `number`

Gets the index of a given column header.
Even if row headers are defined, this is not considered a column and is ignored in this search.

##### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `string` |

##### Returns

`number`

##### Defined in

[src/libs/datastructures/src/Table.ts:193](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Table.ts#L193)

___

#### indexOfRowHeader

▸ **indexOfRowHeader**(`header`): `number`

Gets the index of a given row header.

##### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `string` |

##### Returns

`number`

##### Defined in

[src/libs/datastructures/src/Table.ts:203](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Table.ts#L203)

___

#### removeColumn

▸ **removeColumn**(`column`, `spreadsheetNotation?`): [`Table`](#classestablemd)<`T`\>

Deletes a column in the table.

##### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `column` | `string` \| `number` | `undefined` | Column index |
| `spreadsheetNotation` | `boolean` | `false` | Interpret row and col as spreadsheet coordinates, eg. ("A","1") |

##### Returns

[`Table`](#classestablemd)<`T`\>

##### Defined in

[src/libs/datastructures/src/Table.ts:165](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Table.ts#L165)

___

#### removeRow

▸ **removeRow**(`row`, `spreadsheetNotation?`): [`Table`](#classestablemd)<`T`\>

Deletes a row in the table.

##### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `row` | `string` \| `number` | `undefined` | Row index |
| `spreadsheetNotation` | `boolean` | `false` | Interpret row and col as spreadsheet coordinates, eg. ("A","1") |

##### Returns

[`Table`](#classestablemd)<`T`\>

##### Defined in

[src/libs/datastructures/src/Table.ts:182](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Table.ts#L182)

___

#### set

▸ **set**(`column`, `row`, `value`, `spreadsheetNotation?`): [`Table`](#classestablemd)<`T`\>

Inserts a given value at a given (row, col) position.

##### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `column` | `string` \| `number` | `undefined` | Column index |
| `row` | `string` \| `number` | `undefined` | Row index |
| `value` | `T` | `undefined` | The value to insert |
| `spreadsheetNotation` | `boolean` | `false` | Interpret row and col as spreadsheet coordinates, eg. ("A","1") |

##### Returns

[`Table`](#classestablemd)<`T`\>

##### Defined in

[src/libs/datastructures/src/Table.ts:154](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Table.ts#L154)

___

#### toArray

▸ **toArray**(): (`string` \| `T`)[][]

Returns the table as a two-dimensional array, including row and column headers..

##### Returns

(`string` \| `T`)[][]

##### Defined in

[src/libs/datastructures/src/Table.ts:213](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Table.ts#L213)

___

#### toArrayDataOnly

▸ **toArrayDataOnly**(): `T`[][]

Returns the table as a two-dimensional array, without row and column headers.

##### Returns

`T`[][]

##### Defined in

[src/libs/datastructures/src/Table.ts:229](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Table.ts#L229)

___

#### toCSV

▸ **toCSV**(`delimiter?`): `string`

Returns the table as a CSV string.

##### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `delimiter` | `string` | `';'` | csv delimiter |

##### Returns

`string`

##### Defined in

[src/libs/datastructures/src/Table.ts:241](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Table.ts#L241)

___

#### toJSON

▸ **toJSON**(): [`TableSerializedForm`](#tableserializedform)<`T`\>

Override of the native toJSON method. When parsing the returned json string, it can be revived as a Table object when using the static Table.fromJSON method.

##### Returns

[`TableSerializedForm`](#tableserializedform)<`T`\>

##### Implementation of

IRevivableJSON.toJSON

##### Defined in

[src/libs/datastructures/src/Table.ts:248](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Table.ts#L248)

___

#### fromCSV

▸ `Static` **fromCSV**<`T`\>(`csv`, `delimiter?`, `options?`): [`Table`](#classestablemd)<`string` \| `T`\>

Creates a Table instance from CSV string data.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `csv` | `string` | `undefined` | CSV data string |
| `delimiter` | `string` | `';'` | csv delimiter |
| `options` | [`ITableOptions`](#interfacesitableoptionsmd)<`string` \| `T`\> | `{}` | TableOptions constructor options. |

##### Returns

[`Table`](#classestablemd)<`string` \| `T`\>

##### Defined in

[src/libs/datastructures/src/Table.ts:78](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Table.ts#L78)

___

#### fromJSON

▸ `Static` **fromJSON**<`T`\>(`json`): [`Table`](#classestablemd)<`T`\>

Revive a stringified Table object.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `string` | a stringified Table object. |

##### Returns

[`Table`](#classestablemd)<`T`\>

##### Defined in

[src/libs/datastructures/src/Table.ts:90](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/Table.ts#L90)


<a name="classestimermd"></a>

[@bemoje/node-util](#readmemd) / Timer

## Class: Timer

For recording time passed since constructor was invoked and until the stop() method i called.

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [t0](#t0)

#### Methods

- [stop](#stop)

### Constructors

#### constructor

• **new Timer**()

##### Defined in

[src/libs/time.ts:10](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/time.ts#L10)

### Properties

#### t0

• **t0**: `number`

The initial time

##### Defined in

[src/libs/time.ts:8](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/time.ts#L8)

### Methods

#### stop

▸ **stop**(): `number`

Returns the time passed since constructor was invoked in milliseconds.

##### Returns

`number`

##### Defined in

[src/libs/time.ts:17](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/time.ts#L17)

# Interfaces


<a name="interfacesirevivablejsonmd"></a>

[@bemoje/node-util](#readmemd) / IRevivableJSON

## Interface: IRevivableJSON<SerializedForm\>

### Type parameters

| Name |
| :------ |
| `SerializedForm` |

### Implemented by

- [`Table`](#classestablemd)

### Table of contents

#### Properties

- [toJSON](#tojson)

### Properties

#### toJSON

• **toJSON**: () => `SerializedForm`

##### Type declaration

▸ (): `SerializedForm`

###### Returns

`SerializedForm`

##### Defined in

[src/libs/datastructures/index.ts:6](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/index.ts#L6)


<a name="interfacesisortedarrayoptionsmd"></a>

[@bemoje/node-util](#readmemd) / ISortedArrayOptions

## Interface: ISortedArrayOptions<T\>

### Type parameters

| Name |
| :------ |
| `T` |

### Table of contents

#### Properties

- [allowDuplicates](#allowduplicates)
- [compare](#compare)
- [data](#data)

### Properties

#### allowDuplicates

• `Optional` **allowDuplicates**: `boolean`

##### Defined in

[src/libs/datastructures/src/SortedArray.ts:7](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/SortedArray.ts#L7)

___

#### compare

• `Optional` **compare**: [`Comparator`](#comparator)

##### Defined in

[src/libs/datastructures/src/SortedArray.ts:6](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/SortedArray.ts#L6)

___

#### data

• `Optional` **data**: `Iterable`<`T`\>

##### Defined in

[src/libs/datastructures/src/SortedArray.ts:5](https://github.com/bemoje/bemoje-node-util/blob/4b6a37a/src/libs/datastructures/src/SortedArray.ts#L5)


<a name="interfacesitableoptionsmd"></a>

[@bemoje/node-util](#readmemd) / ITableOptions

## Interface: ITableOptions<T\>

Constructor options for the Table class.

### Type parameters

| Name |
| :------ |
| `T` |

### Table of contents

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
