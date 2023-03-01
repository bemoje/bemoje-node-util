[@bemoje/bemoje-node-util](../README.md) / [Exports](../modules.md) / IDataStructure2D

# Interface: IDataStructure2D<T\>

Interface for 2-dimensional data structures, like matrices and tables

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`IDataStructure`](IDataStructure.md)<`T`\>

  ↳ **`IDataStructure2D`**

## Implemented by

- [`Matrix`](../classes/Matrix.md)

## Table of contents

### Methods

- [[iterator]](IDataStructure2D.md#[iterator])
- [clone](IDataStructure2D.md#clone)
- [deepEquals](IDataStructure2D.md#deepequals)
- [every](IDataStructure2D.md#every)
- [forEach](IDataStructure2D.md#foreach)
- [get](IDataStructure2D.md#get)
- [getImmutable](IDataStructure2D.md#getimmutable)
- [has](IDataStructure2D.md#has)
- [isSameInstanceAs](IDataStructure2D.md#issameinstanceas)
- [map](IDataStructure2D.md#map)
- [set](IDataStructure2D.md#set)
- [setImmutable](IDataStructure2D.md#setimmutable)
- [some](IDataStructure2D.md#some)
- [toArray](IDataStructure2D.md#toarray)
- [values](IDataStructure2D.md#values)

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`<`any`, `any`, `unknown`\>

#### Returns

`Generator`<`any`, `any`, `unknown`\>

#### Inherited from

[IDataStructure](IDataStructure.md).[[iterator]](IDataStructure.md#[iterator])

#### Defined in

[src/libs/datastructures/index.ts:23](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/index.ts#L23)

___

### clone

▸ **clone**(): `T`

#### Returns

`T`

#### Inherited from

[IDataStructure](IDataStructure.md).[clone](IDataStructure.md#clone)

#### Defined in

[src/libs/datastructures/index.ts:18](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/index.ts#L18)

___

### deepEquals

▸ **deepEquals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `T` |

#### Returns

`boolean`

#### Inherited from

[IDataStructure](IDataStructure.md).[deepEquals](IDataStructure.md#deepequals)

#### Defined in

[src/libs/datastructures/index.ts:15](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/index.ts#L15)

___

### every

▸ **every**(`f`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `any`, `row`: `number`, `col`: `number`) => `boolean` |

#### Returns

`boolean`

#### Overrides

[IDataStructure](IDataStructure.md).[every](IDataStructure.md#every)

#### Defined in

[src/libs/datastructures/index.ts:37](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/index.ts#L37)

___

### forEach

▸ **forEach**(`f`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `any`, `row`: `number`, `col`: `number`) => `boolean` \| `void` |

#### Returns

`T`

#### Overrides

[IDataStructure](IDataStructure.md).[forEach](IDataStructure.md#foreach)

#### Defined in

[src/libs/datastructures/index.ts:34](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/index.ts#L34)

___

### get

▸ **get**(`row`, `col`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |

#### Returns

`any`

#### Defined in

[src/libs/datastructures/index.ts:32](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/index.ts#L32)

___

### getImmutable

▸ **getImmutable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[IDataStructure](IDataStructure.md).[getImmutable](IDataStructure.md#getimmutable)

#### Defined in

[src/libs/datastructures/index.ts:16](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/index.ts#L16)

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

[src/libs/datastructures/index.ts:33](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/index.ts#L33)

___

### isSameInstanceAs

▸ **isSameInstanceAs**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `T` |

#### Returns

`boolean`

#### Inherited from

[IDataStructure](IDataStructure.md).[isSameInstanceAs](IDataStructure.md#issameinstanceas)

#### Defined in

[src/libs/datastructures/index.ts:14](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/index.ts#L14)

___

### map

▸ **map**(`f`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `any`, `row`: `number`, `col`: `number`) => `any` |

#### Returns

`T`

#### Overrides

[IDataStructure](IDataStructure.md).[map](IDataStructure.md#map)

#### Defined in

[src/libs/datastructures/index.ts:35](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/index.ts#L35)

___

### set

▸ **set**(`row`, `col`, `value`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `value` | `any` |

#### Returns

`T`

#### Defined in

[src/libs/datastructures/index.ts:31](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/index.ts#L31)

___

### setImmutable

▸ **setImmutable**(`immutable`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `immutable` | `boolean` |

#### Returns

`T`

#### Inherited from

[IDataStructure](IDataStructure.md).[setImmutable](IDataStructure.md#setimmutable)

#### Defined in

[src/libs/datastructures/index.ts:17](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/index.ts#L17)

___

### some

▸ **some**(`f`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `any`, `row`: `number`, `col`: `number`) => `boolean` |

#### Returns

`boolean`

#### Overrides

[IDataStructure](IDataStructure.md).[some](IDataStructure.md#some)

#### Defined in

[src/libs/datastructures/index.ts:36](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/index.ts#L36)

___

### toArray

▸ **toArray**(): `any`[]

#### Returns

`any`[]

#### Inherited from

[IDataStructure](IDataStructure.md).[toArray](IDataStructure.md#toarray)

#### Defined in

[src/libs/datastructures/index.ts:13](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/index.ts#L13)

___

### values

▸ **values**(): `Generator`<`any`, `any`, `unknown`\>

#### Returns

`Generator`<`any`, `any`, `unknown`\>

#### Inherited from

[IDataStructure](IDataStructure.md).[values](IDataStructure.md#values)

#### Defined in

[src/libs/datastructures/index.ts:24](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/index.ts#L24)
