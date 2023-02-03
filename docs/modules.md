[@bemoje/bemoje-node-util](README.md) / Exports

# @bemoje/bemoje-node-util

## Table of contents

### Classes

- [ExtensibleFunction](classes/ExtensibleFunction.md)
- [Matrix](classes/Matrix.md)
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

### Functions

- [arrEvery](modules.md#arrevery)
- [arrFlatten](modules.md#arrflatten)
- [arrIndexesOf](modules.md#arrindexesof)
- [arrMapMutable](modules.md#arrmapmutable)
- [arrShallowEquals](modules.md#arrshallowequals)
- [arrShuffle](modules.md#arrshuffle)
- [arrSome](modules.md#arrsome)
- [arrSortNumeric](modules.md#arrsortnumeric)
- [arrSwap](modules.md#arrswap)
- [compareAlphaNumeric](modules.md#comparealphanumeric)
- [compareAlphaNumericDescending](modules.md#comparealphanumericdescending)
- [compareArrays](modules.md#comparearrays)
- [compareNumeric](modules.md#comparenumeric)
- [compareNumericDescending](modules.md#comparenumericdescending)
- [getMemoryUsage](modules.md#getmemoryusage)
- [getMemoryUsageFormattedEU](modules.md#getmemoryusageformattedeu)
- [getMemoryUsageFormattedUS](modules.md#getmemoryusageformattedus)
- [numApproximateLog10](modules.md#numapproximatelog10)
- [numFormatEU](modules.md#numformateu)
- [numFormatUS](modules.md#numformatus)
- [regexGetGroupNames](modules.md#regexgetgroupnames)
- [rexec](modules.md#rexec)
- [setIntersection](modules.md#setintersection)
- [setUnion](modules.md#setunion)
- [strIsLowerCase](modules.md#strislowercase)
- [strIsUpperCase](modules.md#strisuppercase)
- [strSplitWordByCamelCase](modules.md#strsplitwordbycamelcase)
- [strToWords](modules.md#strtowords)
- [strWrapBetween](modules.md#strwrapbetween)
- [strWrapIn](modules.md#strwrapin)
- [strWrapInBraces](modules.md#strwrapinbraces)
- [strWrapInBrackets](modules.md#strwrapinbrackets)
- [strWrapInDoubleQuotes](modules.md#strwrapindoublequotes)
- [strWrapInParenthesis](modules.md#strwrapinparenthesis)
- [strWrapInSingleQuotes](modules.md#strwrapinsinglequotes)

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

[src/libs/array.ts:1](https://github.com/bemoje/bemoje-node-util/blob/60d4c84/src/libs/array.ts#L1)

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

src/libs/sort.ts:1

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

src/libs/node.ts:3

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

src/libs/node.ts:10

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

[src/libs/array.ts:2](https://github.com/bemoje/bemoje-node-util/blob/60d4c84/src/libs/array.ts#L2)

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

src/libs/regex.ts:1

## Functions

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

[src/libs/array.ts:107](https://github.com/bemoje/bemoje-node-util/blob/60d4c84/src/libs/array.ts#L107)

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

[src/libs/array.ts:134](https://github.com/bemoje/bemoje-node-util/blob/60d4c84/src/libs/array.ts#L134)

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

[src/libs/array.ts:93](https://github.com/bemoje/bemoje-node-util/blob/60d4c84/src/libs/array.ts#L93)

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

[src/libs/array.ts:21](https://github.com/bemoje/bemoje-node-util/blob/60d4c84/src/libs/array.ts#L21)

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

[src/libs/array.ts:58](https://github.com/bemoje/bemoje-node-util/blob/60d4c84/src/libs/array.ts#L58)

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

[src/libs/array.ts:75](https://github.com/bemoje/bemoje-node-util/blob/60d4c84/src/libs/array.ts#L75)

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

[src/libs/array.ts:121](https://github.com/bemoje/bemoje-node-util/blob/60d4c84/src/libs/array.ts#L121)

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

[src/libs/array.ts:32](https://github.com/bemoje/bemoje-node-util/blob/60d4c84/src/libs/array.ts#L32)

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

[src/libs/array.ts:44](https://github.com/bemoje/bemoje-node-util/blob/60d4c84/src/libs/array.ts#L44)

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

src/libs/sort.ts:86

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

src/libs/sort.ts:95

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

src/libs/sort.ts:8

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

src/libs/sort.ts:68

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

src/libs/sort.ts:77

___

### getMemoryUsage

▸ **getMemoryUsage**(): [`MemoryUsageValues`](modules.md#memoryusagevalues)

Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.

#### Returns

[`MemoryUsageValues`](modules.md#memoryusagevalues)

#### Defined in

src/libs/node.ts:34

___

### getMemoryUsageFormattedEU

▸ **getMemoryUsageFormattedEU**(): [`MemoryUsageValuesFormatted`](modules.md#memoryusagevaluesformatted)

Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
The values are formatted strings in the style of 5.000,00

#### Returns

[`MemoryUsageValuesFormatted`](modules.md#memoryusagevaluesformatted)

#### Defined in

src/libs/node.ts:48

___

### getMemoryUsageFormattedUS

▸ **getMemoryUsageFormattedUS**(): [`MemoryUsageValuesFormatted`](modules.md#memoryusagevaluesformatted)

Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
The values are formatted strings in the style of 5,000.00

#### Returns

[`MemoryUsageValuesFormatted`](modules.md#memoryusagevaluesformatted)

#### Defined in

src/libs/node.ts:58

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

src/libs/number.ts:50

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

src/libs/number.ts:11

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

src/libs/number.ts:30

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

src/libs/regex.ts:56

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

src/libs/regex.ts:40

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

src/libs/set.ts:5

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

src/libs/set.ts:21

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

[src/libs/string.ts:104](https://github.com/bemoje/bemoje-node-util/blob/60d4c84/src/libs/string.ts#L104)

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

[src/libs/string.ts:120](https://github.com/bemoje/bemoje-node-util/blob/60d4c84/src/libs/string.ts#L120)

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

[src/libs/string.ts:148](https://github.com/bemoje/bemoje-node-util/blob/60d4c84/src/libs/string.ts#L148)

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

[src/libs/string.ts:133](https://github.com/bemoje/bemoje-node-util/blob/60d4c84/src/libs/string.ts#L133)

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

[src/libs/string.ts:24](https://github.com/bemoje/bemoje-node-util/blob/60d4c84/src/libs/string.ts#L24)

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

[src/libs/string.ts:10](https://github.com/bemoje/bemoje-node-util/blob/60d4c84/src/libs/string.ts#L10)

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

[src/libs/string.ts:52](https://github.com/bemoje/bemoje-node-util/blob/60d4c84/src/libs/string.ts#L52)

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

[src/libs/string.ts:40](https://github.com/bemoje/bemoje-node-util/blob/60d4c84/src/libs/string.ts#L40)

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

[src/libs/string.ts:88](https://github.com/bemoje/bemoje-node-util/blob/60d4c84/src/libs/string.ts#L88)

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

[src/libs/string.ts:64](https://github.com/bemoje/bemoje-node-util/blob/60d4c84/src/libs/string.ts#L64)

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

[src/libs/string.ts:76](https://github.com/bemoje/bemoje-node-util/blob/60d4c84/src/libs/string.ts#L76)
