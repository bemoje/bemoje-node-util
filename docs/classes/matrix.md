[@bemoje/node-util](/docs/index.md) / Matrix

# Class: Matrix

## Table of contents

### Constructors

- [constructor](/docs/classes/Matrix.md#constructor)

### Properties

- [immutable](/docs/classes/Matrix.md#immutable)
- [matrix](/docs/classes/Matrix.md#matrix)

### Accessors

- [cols](/docs/classes/Matrix.md#cols)
- [rows](/docs/classes/Matrix.md#rows)

### Methods

- [[iterator]](/docs/classes/Matrix.md#[iterator])
- [addBy](/docs/classes/Matrix.md#addby)
- [addColBy](/docs/classes/Matrix.md#addcolby)
- [addRowBy](/docs/classes/Matrix.md#addrowby)
- [appendCol](/docs/classes/Matrix.md#appendcol)
- [appendRow](/docs/classes/Matrix.md#appendrow)
- [clone](/docs/classes/Matrix.md#clone)
- [deepEquals](/docs/classes/Matrix.md#deepequals)
- [divideBy](/docs/classes/Matrix.md#divideby)
- [divideColBy](/docs/classes/Matrix.md#dividecolby)
- [divideRowBy](/docs/classes/Matrix.md#dividerowby)
- [dotProduct](/docs/classes/Matrix.md#dotproduct)
- [every](/docs/classes/Matrix.md#every)
- [forEach](/docs/classes/Matrix.md#foreach)
- [forEachInCol](/docs/classes/Matrix.md#foreachincol)
- [forEachInDiagonal](/docs/classes/Matrix.md#foreachindiagonal)
- [forEachInRow](/docs/classes/Matrix.md#foreachinrow)
- [get](/docs/classes/Matrix.md#get)
- [getImmutable](/docs/classes/Matrix.md#getimmutable)
- [has](/docs/classes/Matrix.md#has)
- [hasDimensions](/docs/classes/Matrix.md#hasdimensions)
- [isSameInstanceAs](/docs/classes/Matrix.md#issameinstanceas)
- [isScalarMatrix](/docs/classes/Matrix.md#isscalarmatrix)
- [isSquareMatrix](/docs/classes/Matrix.md#issquarematrix)
- [isZeroMatrix](/docs/classes/Matrix.md#iszeromatrix)
- [map](/docs/classes/Matrix.md#map)
- [mapCol](/docs/classes/Matrix.md#mapcol)
- [mapRow](/docs/classes/Matrix.md#maprow)
- [multiplyBy](/docs/classes/Matrix.md#multiplyby)
- [multiplyColBy](/docs/classes/Matrix.md#multiplycolby)
- [multiplyRowBy](/docs/classes/Matrix.md#multiplyrowby)
- [set](/docs/classes/Matrix.md#set)
- [setImmutable](/docs/classes/Matrix.md#setimmutable)
- [some](/docs/classes/Matrix.md#some)
- [subtractBy](/docs/classes/Matrix.md#subtractby)
- [subtractColBy](/docs/classes/Matrix.md#subtractcolby)
- [subtractRowBy](/docs/classes/Matrix.md#subtractrowby)
- [swapCols](/docs/classes/Matrix.md#swapcols)
- [swapRows](/docs/classes/Matrix.md#swaprows)
- [toArray](/docs/classes/Matrix.md#toarray)
- [values](/docs/classes/Matrix.md#values)
- [fromArray](/docs/classes/Matrix.md#fromarray)
- [fromIterable](/docs/classes/Matrix.md#fromiterable)
- [identity](/docs/classes/Matrix.md#identity)

## Constructors

### constructor

• **new Matrix**(`rows`, `cols`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rows` | `number` |
| `cols` | `number` |

#### Defined in

[src/datastructures/Matrix.ts:35](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L35)

## Properties

### immutable

• `Protected` **immutable**: `boolean` = `false`

#### Defined in

[src/datastructures/Matrix.ts:3](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L3)

___

### matrix

• `Protected` **matrix**: `number`[][]

#### Defined in

[src/datastructures/Matrix.ts:2](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L2)

## Accessors

### cols

• `get` **cols**(): `number`

#### Returns

`number`

#### Defined in

[src/datastructures/Matrix.ts:48](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L48)

___

### rows

• `get` **rows**(): `number`

#### Returns

`number`

#### Defined in

[src/datastructures/Matrix.ts:44](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L44)

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`<`number`, `any`, `unknown`\>

#### Returns

`Generator`<`number`, `any`, `unknown`\>

#### Defined in

[src/datastructures/Matrix.ts:157](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L157)

___

### addBy

▸ **addBy**(`n`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:213](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L213)

___

### addColBy

▸ **addColBy**(`col`, `n`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `n` | `number` |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:253](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L253)

___

### addRowBy

▸ **addRowBy**(`row`, `n`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `n` | `number` |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:233](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L233)

___

### appendCol

▸ **appendCol**(`col?`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `col?` | `number`[] |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:198](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L198)

___

### appendRow

▸ **appendRow**(`row?`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row?` | `number`[] |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:185](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L185)

___

### clone

▸ **clone**(): [`Matrix`](/docs/classes/Matrix.md)

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:99](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L99)

___

### deepEquals

▸ **deepEquals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Matrix`](/docs/classes/Matrix.md) \| `number`[][] |

#### Returns

`boolean`

#### Defined in

[src/datastructures/Matrix.ts:65](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L65)

___

### divideBy

▸ **divideBy**(`n`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:228](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L228)

___

### divideColBy

▸ **divideColBy**(`col`, `n`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `n` | `number` |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:268](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L268)

___

### divideRowBy

▸ **divideRowBy**(`row`, `n`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `n` | `number` |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:248](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L248)

___

### dotProduct

▸ **dotProduct**(`other`): [`Matrix`](/docs/classes/Matrix.md)

Performs dot product of the matrix with another given matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Matrix`](/docs/classes/Matrix.md) |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:344](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L344)

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

[src/datastructures/Matrix.ts:304](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L304)

___

### forEach

▸ **forEach**(`f`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `number`, `row`: `number`, `col`: `number`) => `boolean` \| `void` |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:109](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L109)

___

### forEachInCol

▸ **forEachInCol**(`col`, `f`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `f` | (`value`: `number`, `row`: `number`) => `boolean` \| `void` |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:129](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L129)

___

### forEachInDiagonal

▸ **forEachInDiagonal**(`f`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `number`, `row`: `number`, `col`: `number`) => `boolean` \| `void` |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:138](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L138)

___

### forEachInRow

▸ **forEachInRow**(`row`, `f`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `f` | (`value`: `number`, `col`: `number`) => `boolean` \| `void` |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:120](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L120)

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

[src/datastructures/Matrix.ts:83](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L83)

___

### getImmutable

▸ **getImmutable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/datastructures/Matrix.ts:56](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L56)

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

[src/datastructures/Matrix.ts:87](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L87)

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

[src/datastructures/Matrix.ts:315](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L315)

___

### isSameInstanceAs

▸ **isSameInstanceAs**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Matrix`](/docs/classes/Matrix.md) |

#### Returns

`boolean`

#### Defined in

[src/datastructures/Matrix.ts:52](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L52)

___

### isScalarMatrix

▸ **isScalarMatrix**(): `boolean`

Returns whether the matrix is a square matrix that has identical values on its diagonal.

#### Returns

`boolean`

#### Defined in

[src/datastructures/Matrix.ts:326](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L326)

___

### isSquareMatrix

▸ **isSquareMatrix**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/datastructures/Matrix.ts:319](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L319)

___

### isZeroMatrix

▸ **isZeroMatrix**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/datastructures/Matrix.ts:337](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L337)

___

### map

▸ **map**(`f`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `number`, `row`: `number`, `col`: `number`) => `number` |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:147](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L147)

___

### mapCol

▸ **mapCol**(`col`, `f`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `f` | (`value`: `number`, `row`: `number`) => `number` |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:177](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L177)

___

### mapRow

▸ **mapRow**(`row`, `f`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `f` | (`value`: `number`, `col`: `number`) => `number` |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:169](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L169)

___

### multiplyBy

▸ **multiplyBy**(`n`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:223](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L223)

___

### multiplyColBy

▸ **multiplyColBy**(`col`, `n`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `n` | `number` |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:263](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L263)

___

### multiplyRowBy

▸ **multiplyRowBy**(`row`, `n`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `n` | `number` |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:243](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L243)

___

### set

▸ **set**(`row`, `col`, `value`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `value` | `number` |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:77](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L77)

___

### setImmutable

▸ **setImmutable**(`immutable`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `immutable` | `boolean` |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:60](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L60)

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

[src/datastructures/Matrix.ts:293](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L293)

___

### subtractBy

▸ **subtractBy**(`n`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:218](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L218)

___

### subtractColBy

▸ **subtractColBy**(`col`, `n`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `n` | `number` |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:258](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L258)

___

### subtractRowBy

▸ **subtractRowBy**(`row`, `n`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `n` | `number` |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:238](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L238)

___

### swapCols

▸ **swapCols**(`col1`, `col2`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `col1` | `number` |
| `col2` | `number` |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:282](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L282)

___

### swapRows

▸ **swapRows**(`row1`, `row2`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row1` | `number` |
| `row2` | `number` |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:273](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L273)

___

### toArray

▸ **toArray**(): `number`[][]

#### Returns

`number`[][]

#### Defined in

[src/datastructures/Matrix.ts:91](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L91)

___

### values

▸ **values**(): `Generator`<`number`, `any`, `unknown`\>

#### Returns

`Generator`<`number`, `any`, `unknown`\>

#### Defined in

[src/datastructures/Matrix.ts:165](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L165)

___

### fromArray

▸ `Static` **fromArray**(`array`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `number`[][] |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:5](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L5)

___

### fromIterable

▸ `Static` **fromIterable**(`iterable`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `Iterable`<`Iterable`<`number`\>\> |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:19](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L19)

___

### identity

▸ `Static` **identity**(`size`): [`Matrix`](/docs/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

[`Matrix`](/docs/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:27](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/datastructures/Matrix.ts#L27)
