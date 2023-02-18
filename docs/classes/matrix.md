[@bemoje/bemoje-node-util](../README.md) / [Exports](../modules.md) / Matrix

# Class: Matrix

Interface for 2-dimensional data structures, like matrices and tables

## Implements

- [`IDataStructure2D`](../interfaces/IDataStructure2D.md)<[`Matrix`](Matrix.md)\>

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

[src/libs/datastructures/src/Matrix.ts:37](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L37)

## Accessors

### cols

• `get` **cols**(): `number`

#### Returns

`number`

#### Defined in

[src/libs/datastructures/src/Matrix.ts:50](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L50)

___

### rows

• `get` **rows**(): `number`

#### Returns

`number`

#### Defined in

[src/libs/datastructures/src/Matrix.ts:46](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L46)

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`<`number`, `any`, `unknown`\>

#### Returns

`Generator`<`number`, `any`, `unknown`\>

#### Implementation of

[IDataStructure2D](../interfaces/IDataStructure2D.md).[[iterator]](../interfaces/IDataStructure2D.md#[iterator])

#### Defined in

[src/libs/datastructures/src/Matrix.ts:169](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L169)

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

[src/libs/datastructures/src/Matrix.ts:231](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L231)

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

[src/libs/datastructures/src/Matrix.ts:271](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L271)

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

[src/libs/datastructures/src/Matrix.ts:251](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L251)

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

[src/libs/datastructures/src/Matrix.ts:216](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L216)

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

[src/libs/datastructures/src/Matrix.ts:203](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L203)

___

### clone

▸ **clone**(): [`Matrix`](Matrix.md)

#### Returns

[`Matrix`](Matrix.md)

#### Implementation of

[IDataStructure2D](../interfaces/IDataStructure2D.md).[clone](../interfaces/IDataStructure2D.md#clone)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:101](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L101)

___

### deepEquals

▸ **deepEquals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Matrix`](Matrix.md) \| `number`[][] |

#### Returns

`boolean`

#### Implementation of

[IDataStructure2D](../interfaces/IDataStructure2D.md).[deepEquals](../interfaces/IDataStructure2D.md#deepequals)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:67](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L67)

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

[src/libs/datastructures/src/Matrix.ts:246](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L246)

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

[src/libs/datastructures/src/Matrix.ts:286](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L286)

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

[src/libs/datastructures/src/Matrix.ts:266](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L266)

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

[src/libs/datastructures/src/Matrix.ts:366](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L366)

___

### every

▸ **every**(`f`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `number`, `row`: `number`, `col`: `number`) => `boolean` |

#### Returns

`boolean`

#### Implementation of

[IDataStructure2D](../interfaces/IDataStructure2D.md).[every](../interfaces/IDataStructure2D.md#every)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:324](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L324)

___

### forEach

▸ **forEach**(`f`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `number`, `row`: `number`, `col`: `number`) => `boolean` \| `void` |

#### Returns

[`Matrix`](Matrix.md)

#### Implementation of

[IDataStructure2D](../interfaces/IDataStructure2D.md).[forEach](../interfaces/IDataStructure2D.md#foreach)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:111](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L111)

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

[src/libs/datastructures/src/Matrix.ts:136](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L136)

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

[src/libs/datastructures/src/Matrix.ts:148](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L148)

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

[src/libs/datastructures/src/Matrix.ts:124](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L124)

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

#### Implementation of

[IDataStructure2D](../interfaces/IDataStructure2D.md).[get](../interfaces/IDataStructure2D.md#get)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:85](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L85)

___

### getImmutable

▸ **getImmutable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDataStructure2D](../interfaces/IDataStructure2D.md).[getImmutable](../interfaces/IDataStructure2D.md#getimmutable)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:58](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L58)

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

#### Implementation of

[IDataStructure2D](../interfaces/IDataStructure2D.md).[has](../interfaces/IDataStructure2D.md#has)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:89](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L89)

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

[src/libs/datastructures/src/Matrix.ts:337](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L337)

___

### isSameInstanceAs

▸ **isSameInstanceAs**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Matrix`](Matrix.md) |

#### Returns

`boolean`

#### Implementation of

[IDataStructure2D](../interfaces/IDataStructure2D.md).[isSameInstanceAs](../interfaces/IDataStructure2D.md#issameinstanceas)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:54](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L54)

___

### isScalarMatrix

▸ **isScalarMatrix**(): `boolean`

Returns whether the matrix is a square matrix that has identical values on its diagonal.

#### Returns

`boolean`

#### Defined in

[src/libs/datastructures/src/Matrix.ts:348](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L348)

___

### isSquareMatrix

▸ **isSquareMatrix**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/libs/datastructures/src/Matrix.ts:341](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L341)

___

### isZeroMatrix

▸ **isZeroMatrix**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/libs/datastructures/src/Matrix.ts:359](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L359)

___

### map

▸ **map**(`f`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `number`, `row`: `number`, `col`: `number`) => `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Implementation of

[IDataStructure2D](../interfaces/IDataStructure2D.md).[map](../interfaces/IDataStructure2D.md#map)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:159](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L159)

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

[src/libs/datastructures/src/Matrix.ts:192](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L192)

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

[src/libs/datastructures/src/Matrix.ts:181](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L181)

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

[src/libs/datastructures/src/Matrix.ts:241](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L241)

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

[src/libs/datastructures/src/Matrix.ts:281](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L281)

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

[src/libs/datastructures/src/Matrix.ts:261](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L261)

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

#### Implementation of

[IDataStructure2D](../interfaces/IDataStructure2D.md).[set](../interfaces/IDataStructure2D.md#set)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:79](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L79)

___

### setImmutable

▸ **setImmutable**(`immutable`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `immutable` | `boolean` |

#### Returns

[`Matrix`](Matrix.md)

#### Implementation of

[IDataStructure2D](../interfaces/IDataStructure2D.md).[setImmutable](../interfaces/IDataStructure2D.md#setimmutable)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:62](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L62)

___

### some

▸ **some**(`f`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `number`, `row`: `number`, `col`: `number`) => `boolean` |

#### Returns

`boolean`

#### Implementation of

[IDataStructure2D](../interfaces/IDataStructure2D.md).[some](../interfaces/IDataStructure2D.md#some)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:311](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L311)

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

[src/libs/datastructures/src/Matrix.ts:236](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L236)

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

[src/libs/datastructures/src/Matrix.ts:276](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L276)

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

[src/libs/datastructures/src/Matrix.ts:256](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L256)

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

[src/libs/datastructures/src/Matrix.ts:300](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L300)

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

[src/libs/datastructures/src/Matrix.ts:291](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L291)

___

### toArray

▸ **toArray**(): `number`[][]

#### Returns

`number`[][]

#### Implementation of

[IDataStructure2D](../interfaces/IDataStructure2D.md).[toArray](../interfaces/IDataStructure2D.md#toarray)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:93](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L93)

___

### values

▸ **values**(): `Generator`<`number`, `any`, `unknown`\>

#### Returns

`Generator`<`number`, `any`, `unknown`\>

#### Implementation of

[IDataStructure2D](../interfaces/IDataStructure2D.md).[values](../interfaces/IDataStructure2D.md#values)

#### Defined in

[src/libs/datastructures/src/Matrix.ts:177](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L177)

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

[src/libs/datastructures/src/Matrix.ts:7](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L7)

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

[src/libs/datastructures/src/Matrix.ts:21](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L21)

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

[src/libs/datastructures/src/Matrix.ts:29](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/src/Matrix.ts#L29)
