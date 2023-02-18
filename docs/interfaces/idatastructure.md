[@bemoje/bemoje-node-util](../README.md) / [Exports](../modules.md) / IDataStructure

# Interface: IDataStructure<T\>

Interface for data structures.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`IDataStructure`**

  ↳ [`IDataStructure2D`](IDataStructure2D.md)

  ↳ [`IIndexedDataStructure`](IIndexedDataStructure.md)

  ↳ [`IKeyValueDataStructure`](IKeyValueDataStructure.md)

## Table of contents

### Methods

- [[iterator]](IDataStructure.md#[iterator])
- [clone](IDataStructure.md#clone)
- [deepEquals](IDataStructure.md#deepequals)
- [every](IDataStructure.md#every)
- [forEach](IDataStructure.md#foreach)
- [getImmutable](IDataStructure.md#getimmutable)
- [isSameInstanceAs](IDataStructure.md#issameinstanceas)
- [map](IDataStructure.md#map)
- [setImmutable](IDataStructure.md#setimmutable)
- [some](IDataStructure.md#some)
- [toArray](IDataStructure.md#toarray)
- [values](IDataStructure.md#values)

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`<`any`, `any`, `unknown`\>

#### Returns

`Generator`<`any`, `any`, `unknown`\>

#### Defined in

[src/libs/datastructures/index.ts:19](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L19)

___

### clone

▸ **clone**(): `T`

#### Returns

`T`

#### Defined in

[src/libs/datastructures/index.ts:14](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L14)

___

### deepEquals

▸ **deepEquals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `T` |

#### Returns

`boolean`

#### Defined in

[src/libs/datastructures/index.ts:11](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L11)

___

### every

▸ **every**(`f`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `any`, ...`args`: []) => `boolean` |

#### Returns

`boolean`

#### Defined in

[src/libs/datastructures/index.ts:18](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L18)

___

### forEach

▸ **forEach**(`f`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `any`, ...`args`: []) => `boolean` \| `void` |

#### Returns

`T`

#### Defined in

[src/libs/datastructures/index.ts:15](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L15)

___

### getImmutable

▸ **getImmutable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/libs/datastructures/index.ts:12](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L12)

___

### isSameInstanceAs

▸ **isSameInstanceAs**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `T` |

#### Returns

`boolean`

#### Defined in

[src/libs/datastructures/index.ts:10](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L10)

___

### map

▸ **map**(`f`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `any`, ...`args`: []) => `any` |

#### Returns

`T`

#### Defined in

[src/libs/datastructures/index.ts:16](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L16)

___

### setImmutable

▸ **setImmutable**(`immutable`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `immutable` | `boolean` |

#### Returns

`T`

#### Defined in

[src/libs/datastructures/index.ts:13](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L13)

___

### some

▸ **some**(`f`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `any`, ...`args`: []) => `boolean` |

#### Returns

`boolean`

#### Defined in

[src/libs/datastructures/index.ts:17](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L17)

___

### toArray

▸ **toArray**(): `any`[]

#### Returns

`any`[]

#### Defined in

[src/libs/datastructures/index.ts:9](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L9)

___

### values

▸ **values**(): `Generator`<`any`, `any`, `unknown`\>

#### Returns

`Generator`<`any`, `any`, `unknown`\>

#### Defined in

[src/libs/datastructures/index.ts:20](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L20)
