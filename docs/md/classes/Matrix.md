[@bemoje/node-util](/docs/md/index.md) / Matrix

# Class: Matrix

## Table of contents

### Constructors

- [constructor](/docs/md/classes/Matrix.md#constructor)

### Properties

- [immutable](/docs/md/classes/Matrix.md#immutable)
- [matrix](/docs/md/classes/Matrix.md#matrix)

### Accessors

- [cols](/docs/md/classes/Matrix.md#cols)
- [rows](/docs/md/classes/Matrix.md#rows)

### Methods

- [[iterator]](/docs/md/classes/Matrix.md#[iterator])
- [addBy](/docs/md/classes/Matrix.md#addby)
- [addColBy](/docs/md/classes/Matrix.md#addcolby)
- [addRowBy](/docs/md/classes/Matrix.md#addrowby)
- [appendCol](/docs/md/classes/Matrix.md#appendcol)
- [appendRow](/docs/md/classes/Matrix.md#appendrow)
- [clone](/docs/md/classes/Matrix.md#clone)
- [deepEquals](/docs/md/classes/Matrix.md#deepequals)
- [divideBy](/docs/md/classes/Matrix.md#divideby)
- [divideColBy](/docs/md/classes/Matrix.md#dividecolby)
- [divideRowBy](/docs/md/classes/Matrix.md#dividerowby)
- [dotProduct](/docs/md/classes/Matrix.md#dotproduct)
- [every](/docs/md/classes/Matrix.md#every)
- [forEach](/docs/md/classes/Matrix.md#foreach)
- [forEachInCol](/docs/md/classes/Matrix.md#foreachincol)
- [forEachInDiagonal](/docs/md/classes/Matrix.md#foreachindiagonal)
- [forEachInRow](/docs/md/classes/Matrix.md#foreachinrow)
- [get](/docs/md/classes/Matrix.md#get)
- [getImmutable](/docs/md/classes/Matrix.md#getimmutable)
- [has](/docs/md/classes/Matrix.md#has)
- [hasDimensions](/docs/md/classes/Matrix.md#hasdimensions)
- [isSameInstanceAs](/docs/md/classes/Matrix.md#issameinstanceas)
- [isScalarMatrix](/docs/md/classes/Matrix.md#isscalarmatrix)
- [isSquareMatrix](/docs/md/classes/Matrix.md#issquarematrix)
- [isZeroMatrix](/docs/md/classes/Matrix.md#iszeromatrix)
- [map](/docs/md/classes/Matrix.md#map)
- [mapCol](/docs/md/classes/Matrix.md#mapcol)
- [mapRow](/docs/md/classes/Matrix.md#maprow)
- [multiplyBy](/docs/md/classes/Matrix.md#multiplyby)
- [multiplyColBy](/docs/md/classes/Matrix.md#multiplycolby)
- [multiplyRowBy](/docs/md/classes/Matrix.md#multiplyrowby)
- [set](/docs/md/classes/Matrix.md#set)
- [setImmutable](/docs/md/classes/Matrix.md#setimmutable)
- [some](/docs/md/classes/Matrix.md#some)
- [subtractBy](/docs/md/classes/Matrix.md#subtractby)
- [subtractColBy](/docs/md/classes/Matrix.md#subtractcolby)
- [subtractRowBy](/docs/md/classes/Matrix.md#subtractrowby)
- [swapCols](/docs/md/classes/Matrix.md#swapcols)
- [swapRows](/docs/md/classes/Matrix.md#swaprows)
- [toArray](/docs/md/classes/Matrix.md#toarray)
- [values](/docs/md/classes/Matrix.md#values)
- [fromArray](/docs/md/classes/Matrix.md#fromarray)
- [fromIterable](/docs/md/classes/Matrix.md#fromiterable)
- [identity](/docs/md/classes/Matrix.md#identity)

## Constructors

### constructor

• **new Matrix**(`rows`, `cols`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rows` | `number` |
| `cols` | `number` |

#### Defined in

[src/datastructures/Matrix.ts:35](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L35)

## Properties

### immutable

• `Protected` **immutable**: `boolean` = `false`

#### Defined in

[src/datastructures/Matrix.ts:3](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L3)

___

### matrix

• `Protected` **matrix**: `number`[][]

#### Defined in

[src/datastructures/Matrix.ts:2](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L2)

## Accessors

### cols

• `get` **cols**(): `number`

#### Returns

`number`

#### Defined in

[src/datastructures/Matrix.ts:48](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L48)

___

### rows

• `get` **rows**(): `number`

#### Returns

`number`

#### Defined in

[src/datastructures/Matrix.ts:44](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L44)

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`<`number`, `any`, `unknown`\>

#### Returns

`Generator`<`number`, `any`, `unknown`\>

#### Defined in

[src/datastructures/Matrix.ts:157](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L157)

___

### addBy

▸ **addBy**(`n`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:213](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L213)

___

### addColBy

▸ **addColBy**(`col`, `n`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `n` | `number` |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:253](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L253)

___

### addRowBy

▸ **addRowBy**(`row`, `n`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `n` | `number` |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:233](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L233)

___

### appendCol

▸ **appendCol**(`col?`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `col?` | `number`[] |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:198](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L198)

___

### appendRow

▸ **appendRow**(`row?`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row?` | `number`[] |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:185](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L185)

___

### clone

▸ **clone**(): [`Matrix`](/docs/md/classes/Matrix.md)

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:99](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L99)

___

### deepEquals

▸ **deepEquals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Matrix`](/docs/md/classes/Matrix.md) \| `number`[][] |

#### Returns

`boolean`

#### Defined in

[src/datastructures/Matrix.ts:65](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L65)

___

### divideBy

▸ **divideBy**(`n`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:228](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L228)

___

### divideColBy

▸ **divideColBy**(`col`, `n`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `n` | `number` |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:268](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L268)

___

### divideRowBy

▸ **divideRowBy**(`row`, `n`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `n` | `number` |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:248](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L248)

___

### dotProduct

▸ **dotProduct**(`other`): [`Matrix`](/docs/md/classes/Matrix.md)

Performs dot product of the matrix with another given matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Matrix`](/docs/md/classes/Matrix.md) |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:344](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L344)

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

[src/datastructures/Matrix.ts:304](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L304)

___

### forEach

▸ **forEach**(`f`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `number`, `row`: `number`, `col`: `number`) => `boolean` \| `void` |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:109](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L109)

___

### forEachInCol

▸ **forEachInCol**(`col`, `f`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `f` | (`value`: `number`, `row`: `number`) => `boolean` \| `void` |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:129](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L129)

___

### forEachInDiagonal

▸ **forEachInDiagonal**(`f`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `number`, `row`: `number`, `col`: `number`) => `boolean` \| `void` |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:138](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L138)

___

### forEachInRow

▸ **forEachInRow**(`row`, `f`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `f` | (`value`: `number`, `col`: `number`) => `boolean` \| `void` |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:120](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L120)

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

[src/datastructures/Matrix.ts:83](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L83)

___

### getImmutable

▸ **getImmutable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/datastructures/Matrix.ts:56](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L56)

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

[src/datastructures/Matrix.ts:87](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L87)

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

[src/datastructures/Matrix.ts:315](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L315)

___

### isSameInstanceAs

▸ **isSameInstanceAs**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Matrix`](/docs/md/classes/Matrix.md) |

#### Returns

`boolean`

#### Defined in

[src/datastructures/Matrix.ts:52](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L52)

___

### isScalarMatrix

▸ **isScalarMatrix**(): `boolean`

Returns whether the matrix is a square matrix that has identical values on its diagonal.

#### Returns

`boolean`

#### Defined in

[src/datastructures/Matrix.ts:326](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L326)

___

### isSquareMatrix

▸ **isSquareMatrix**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/datastructures/Matrix.ts:319](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L319)

___

### isZeroMatrix

▸ **isZeroMatrix**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/datastructures/Matrix.ts:337](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L337)

___

### map

▸ **map**(`f`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `number`, `row`: `number`, `col`: `number`) => `number` |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:147](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L147)

___

### mapCol

▸ **mapCol**(`col`, `f`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `f` | (`value`: `number`, `row`: `number`) => `number` |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:177](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L177)

___

### mapRow

▸ **mapRow**(`row`, `f`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `f` | (`value`: `number`, `col`: `number`) => `number` |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:169](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L169)

___

### multiplyBy

▸ **multiplyBy**(`n`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:223](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L223)

___

### multiplyColBy

▸ **multiplyColBy**(`col`, `n`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `n` | `number` |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:263](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L263)

___

### multiplyRowBy

▸ **multiplyRowBy**(`row`, `n`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `n` | `number` |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:243](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L243)

___

### set

▸ **set**(`row`, `col`, `value`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `value` | `number` |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:77](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L77)

___

### setImmutable

▸ **setImmutable**(`immutable`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `immutable` | `boolean` |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:60](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L60)

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

[src/datastructures/Matrix.ts:293](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L293)

___

### subtractBy

▸ **subtractBy**(`n`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:218](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L218)

___

### subtractColBy

▸ **subtractColBy**(`col`, `n`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `n` | `number` |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:258](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L258)

___

### subtractRowBy

▸ **subtractRowBy**(`row`, `n`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `n` | `number` |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:238](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L238)

___

### swapCols

▸ **swapCols**(`col1`, `col2`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `col1` | `number` |
| `col2` | `number` |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:282](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L282)

___

### swapRows

▸ **swapRows**(`row1`, `row2`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row1` | `number` |
| `row2` | `number` |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:273](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L273)

___

### toArray

▸ **toArray**(): `number`[][]

#### Returns

`number`[][]

#### Defined in

[src/datastructures/Matrix.ts:91](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L91)

___

### values

▸ **values**(): `Generator`<`number`, `any`, `unknown`\>

#### Returns

`Generator`<`number`, `any`, `unknown`\>

#### Defined in

[src/datastructures/Matrix.ts:165](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L165)

___

### fromArray

▸ `Static` **fromArray**(`array`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `number`[][] |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:5](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L5)

___

### fromIterable

▸ `Static` **fromIterable**(`iterable`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `Iterable`<`Iterable`<`number`\>\> |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:19](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L19)

___

### identity

▸ `Static` **identity**(`size`): [`Matrix`](/docs/md/classes/Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

[`Matrix`](/docs/md/classes/Matrix.md)

#### Defined in

[src/datastructures/Matrix.ts:27](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Matrix.ts#L27)
