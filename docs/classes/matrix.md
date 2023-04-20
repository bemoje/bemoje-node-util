[@bemoje/node-util](../README.md) / Matrix

# Class: Matrix

## Table of contents

### Constructors

- [constructor](Matrix.md#constructor)

### Accessors

- [cols](Matrix.md#cols)
- [rows](Matrix.md#rows)

### Methods

- [[iterator]](Matrix.md#[iterator])
- [addBy](Matrix.md#addby)
- [addColBy](Matrix.md#addcolby)
- [addRowBy](Matrix.md#addrowby)
- [appendCol](Matrix.md#appendcol)
- [appendRow](Matrix.md#appendrow)
- [clone](Matrix.md#clone)
- [deepEquals](Matrix.md#deepequals)
- [divideBy](Matrix.md#divideby)
- [divideColBy](Matrix.md#dividecolby)
- [divideRowBy](Matrix.md#dividerowby)
- [dotProduct](Matrix.md#dotproduct)
- [every](Matrix.md#every)
- [forEach](Matrix.md#foreach)
- [forEachInCol](Matrix.md#foreachincol)
- [forEachInDiagonal](Matrix.md#foreachindiagonal)
- [forEachInRow](Matrix.md#foreachinrow)
- [get](Matrix.md#get)
- [getImmutable](Matrix.md#getimmutable)
- [has](Matrix.md#has)
- [hasDimensions](Matrix.md#hasdimensions)
- [isSameInstanceAs](Matrix.md#issameinstanceas)
- [isScalarMatrix](Matrix.md#isscalarmatrix)
- [isSquareMatrix](Matrix.md#issquarematrix)
- [isZeroMatrix](Matrix.md#iszeromatrix)
- [map](Matrix.md#map)
- [mapCol](Matrix.md#mapcol)
- [mapRow](Matrix.md#maprow)
- [multiplyBy](Matrix.md#multiplyby)
- [multiplyColBy](Matrix.md#multiplycolby)
- [multiplyRowBy](Matrix.md#multiplyrowby)
- [set](Matrix.md#set)
- [setImmutable](Matrix.md#setimmutable)
- [some](Matrix.md#some)
- [subtractBy](Matrix.md#subtractby)
- [subtractColBy](Matrix.md#subtractcolby)
- [subtractRowBy](Matrix.md#subtractrowby)
- [swapCols](Matrix.md#swapcols)
- [swapRows](Matrix.md#swaprows)
- [toArray](Matrix.md#toarray)
- [values](Matrix.md#values)
- [fromArray](Matrix.md#fromarray)
- [fromIterable](Matrix.md#fromiterable)
- [identity](Matrix.md#identity)

## Constructors

### constructor

• **new Matrix**(`rows`, `cols`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rows` | `number` |
| `cols` | `number` |

#### Defined in

[src/libs/datastructures/src/Matrix.ts:35](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L35)

## Accessors

### cols

• `get` **cols**(): `number`

#### Returns

`number`

#### Defined in

[src/libs/datastructures/src/Matrix.ts:48](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L48)

___

### rows

• `get` **rows**(): `number`

#### Returns

`number`

#### Defined in

[src/libs/datastructures/src/Matrix.ts:44](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L44)

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`<`number`, `any`, `unknown`\>

#### Returns

`Generator`<`number`, `any`, `unknown`\>

#### Defined in

[src/libs/datastructures/src/Matrix.ts:157](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L157)

___

### addBy

▸ **addBy**(`n`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:213](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L213)

___

### addColBy

▸ **addColBy**(`col`, `n`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `n` | `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:253](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L253)

___

### addRowBy

▸ **addRowBy**(`row`, `n`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `n` | `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:233](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L233)

___

### appendCol

▸ **appendCol**(`col?`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `col?` | `number`[] |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:198](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L198)

___

### appendRow

▸ **appendRow**(`row?`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row?` | `number`[] |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:185](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L185)

___

### clone

▸ **clone**(): [`Matrix`](Matrix.md)

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:99](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L99)

___

### deepEquals

▸ **deepEquals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Matrix`](Matrix.md) \| `number`[][] |

#### Returns

`boolean`

#### Defined in

[src/libs/datastructures/src/Matrix.ts:65](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L65)

___

### divideBy

▸ **divideBy**(`n`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:228](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L228)

___

### divideColBy

▸ **divideColBy**(`col`, `n`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `n` | `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:268](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L268)

___

### divideRowBy

▸ **divideRowBy**(`row`, `n`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `n` | `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:248](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L248)

___

### dotProduct

▸ **dotProduct**(`other`): [`Matrix`](Matrix.md)

Performs dot product of the matrix with another given matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Matrix`](Matrix.md) |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:344](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L344)

___

### every

▸ **every**(`f`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `number`, `row`: `number`, `col`: `number`) => `boolean` |

#### Returns

`boolean`

#### Defined in

[src/libs/datastructures/src/Matrix.ts:304](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L304)

___

### forEach

▸ **forEach**(`f`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `number`, `row`: `number`, `col`: `number`) => `boolean` \| `void` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:109](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L109)

___

### forEachInCol

▸ **forEachInCol**(`col`, `f`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `f` | (`value`: `number`, `row`: `number`) => `boolean` \| `void` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:129](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L129)

___

### forEachInDiagonal

▸ **forEachInDiagonal**(`f`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `number`, `row`: `number`, `col`: `number`) => `boolean` \| `void` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:138](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L138)

___

### forEachInRow

▸ **forEachInRow**(`row`, `f`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `f` | (`value`: `number`, `col`: `number`) => `boolean` \| `void` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:120](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L120)

___

### get

▸ **get**(`row`, `col`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |

#### Returns

`number`

#### Defined in

[src/libs/datastructures/src/Matrix.ts:83](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L83)

___

### getImmutable

▸ **getImmutable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/libs/datastructures/src/Matrix.ts:56](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L56)

___

### has

▸ **has**(`row`, `col`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |

#### Returns

`boolean`

#### Defined in

[src/libs/datastructures/src/Matrix.ts:87](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L87)

___

### hasDimensions

▸ **hasDimensions**(`rows`, `cols`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rows` | `number` |
| `cols` | `number` |

#### Returns

`boolean`

#### Defined in

[src/libs/datastructures/src/Matrix.ts:315](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L315)

___

### isSameInstanceAs

▸ **isSameInstanceAs**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Matrix`](Matrix.md) |

#### Returns

`boolean`

#### Defined in

[src/libs/datastructures/src/Matrix.ts:52](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L52)

___

### isScalarMatrix

▸ **isScalarMatrix**(): `boolean`

Returns whether the matrix is a square matrix that has identical values on its diagonal.

#### Returns

`boolean`

#### Defined in

[src/libs/datastructures/src/Matrix.ts:326](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L326)

___

### isSquareMatrix

▸ **isSquareMatrix**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/libs/datastructures/src/Matrix.ts:319](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L319)

___

### isZeroMatrix

▸ **isZeroMatrix**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/libs/datastructures/src/Matrix.ts:337](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L337)

___

### map

▸ **map**(`f`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `number`, `row`: `number`, `col`: `number`) => `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:147](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L147)

___

### mapCol

▸ **mapCol**(`col`, `f`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `f` | (`value`: `number`, `row`: `number`) => `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:177](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L177)

___

### mapRow

▸ **mapRow**(`row`, `f`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `f` | (`value`: `number`, `col`: `number`) => `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:169](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L169)

___

### multiplyBy

▸ **multiplyBy**(`n`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:223](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L223)

___

### multiplyColBy

▸ **multiplyColBy**(`col`, `n`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `n` | `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:263](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L263)

___

### multiplyRowBy

▸ **multiplyRowBy**(`row`, `n`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `n` | `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:243](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L243)

___

### set

▸ **set**(`row`, `col`, `value`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `value` | `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:77](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L77)

___

### setImmutable

▸ **setImmutable**(`immutable`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `immutable` | `boolean` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:60](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L60)

___

### some

▸ **some**(`f`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `number`, `row`: `number`, `col`: `number`) => `boolean` |

#### Returns

`boolean`

#### Defined in

[src/libs/datastructures/src/Matrix.ts:293](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L293)

___

### subtractBy

▸ **subtractBy**(`n`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:218](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L218)

___

### subtractColBy

▸ **subtractColBy**(`col`, `n`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `n` | `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:258](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L258)

___

### subtractRowBy

▸ **subtractRowBy**(`row`, `n`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `n` | `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:238](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L238)

___

### swapCols

▸ **swapCols**(`col1`, `col2`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `col1` | `number` |
| `col2` | `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:282](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L282)

___

### swapRows

▸ **swapRows**(`row1`, `row2`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row1` | `number` |
| `row2` | `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:273](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L273)

___

### toArray

▸ **toArray**(): `number`[][]

#### Returns

`number`[][]

#### Defined in

[src/libs/datastructures/src/Matrix.ts:91](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L91)

___

### values

▸ **values**(): `Generator`<`number`, `any`, `unknown`\>

#### Returns

`Generator`<`number`, `any`, `unknown`\>

#### Defined in

[src/libs/datastructures/src/Matrix.ts:165](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L165)

___

### fromArray

▸ `Static` **fromArray**(`array`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `number`[][] |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:5](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L5)

___

### fromIterable

▸ `Static` **fromIterable**(`iterable`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `Iterable`<`Iterable`<`number`\>\> |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:19](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L19)

___

### identity

▸ `Static` **identity**(`size`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:27](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Matrix.ts#L27)
