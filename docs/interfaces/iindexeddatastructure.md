[@bemoje/bemoje-node-util](../README.md) / [Exports](../modules.md) / IIndexedDataStructure

# Interface: IIndexedDataStructure<T\>

Interface for indexed data structures, like arrays

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`IDataStructure`](IDataStructure.md)<`T`\>

  ↳ **`IIndexedDataStructure`**

## Table of contents

### Methods

- [[iterator]](IIndexedDataStructure.md#[iterator])
- [clone](IIndexedDataStructure.md#clone)
- [deepEquals](IIndexedDataStructure.md#deepequals)
- [every](IIndexedDataStructure.md#every)
- [forEach](IIndexedDataStructure.md#foreach)
- [get](IIndexedDataStructure.md#get)
- [getImmutable](IIndexedDataStructure.md#getimmutable)
- [has](IIndexedDataStructure.md#has)
- [isSameInstanceAs](IIndexedDataStructure.md#issameinstanceas)
- [keys](IIndexedDataStructure.md#keys)
- [map](IIndexedDataStructure.md#map)
- [set](IIndexedDataStructure.md#set)
- [setImmutable](IIndexedDataStructure.md#setimmutable)
- [some](IIndexedDataStructure.md#some)
- [toArray](IIndexedDataStructure.md#toarray)
- [values](IIndexedDataStructure.md#values)

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`<`any`, `any`, `unknown`\>

#### Returns

`Generator`<`any`, `any`, `unknown`\>

#### Inherited from

[IDataStructure](IDataStructure.md).[[iterator]](IDataStructure.md#[iterator])

#### Defined in

[src/libs/datastructures/index.ts:19](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L19)

___

### clone

▸ **clone**(): `T`

#### Returns

`T`

#### Inherited from

[IDataStructure](IDataStructure.md).[clone](IDataStructure.md#clone)

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

#### Inherited from

[IDataStructure](IDataStructure.md).[deepEquals](IDataStructure.md#deepequals)

#### Defined in

[src/libs/datastructures/index.ts:11](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L11)

___

### every

▸ **every**(`f`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `any`, `index`: `number`) => `boolean` |

#### Returns

`boolean`

#### Overrides

[IDataStructure](IDataStructure.md).[every](IDataStructure.md#every)

#### Defined in

[src/libs/datastructures/index.ts:46](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L46)

___

### forEach

▸ **forEach**(`f`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `any`, `index`: `number`) => `boolean` \| `void` |

#### Returns

`T`

#### Overrides

[IDataStructure](IDataStructure.md).[forEach](IDataStructure.md#foreach)

#### Defined in

[src/libs/datastructures/index.ts:43](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L43)

___

### get

▸ **get**(`index`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`any`

#### Defined in

[src/libs/datastructures/index.ts:41](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L41)

___

### getImmutable

▸ **getImmutable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[IDataStructure](IDataStructure.md).[getImmutable](IDataStructure.md#getimmutable)

#### Defined in

[src/libs/datastructures/index.ts:12](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L12)

___

### has

▸ **has**(`index`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`boolean`

#### Defined in

[src/libs/datastructures/index.ts:42](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L42)

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

[src/libs/datastructures/index.ts:10](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L10)

___

### keys

▸ **keys**(): `Generator`<`any`, `any`, `unknown`\>

#### Returns

`Generator`<`any`, `any`, `unknown`\>

#### Defined in

[src/libs/datastructures/index.ts:47](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L47)

___

### map

▸ **map**(`f`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `any`, `index`: `number`) => `any` |

#### Returns

`T`

#### Overrides

[IDataStructure](IDataStructure.md).[map](IDataStructure.md#map)

#### Defined in

[src/libs/datastructures/index.ts:44](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L44)

___

### set

▸ **set**(`index`, `value`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | `any` |

#### Returns

`T`

#### Defined in

[src/libs/datastructures/index.ts:40](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L40)

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

[src/libs/datastructures/index.ts:13](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L13)

___

### some

▸ **some**(`f`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `any`, `index`: `number`) => `boolean` |

#### Returns

`boolean`

#### Overrides

[IDataStructure](IDataStructure.md).[some](IDataStructure.md#some)

#### Defined in

[src/libs/datastructures/index.ts:45](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L45)

___

### toArray

▸ **toArray**(): `any`[]

#### Returns

`any`[]

#### Inherited from

[IDataStructure](IDataStructure.md).[toArray](IDataStructure.md#toarray)

#### Defined in

[src/libs/datastructures/index.ts:9](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L9)

___

### values

▸ **values**(): `Generator`<`any`, `any`, `unknown`\>

#### Returns

`Generator`<`any`, `any`, `unknown`\>

#### Inherited from

[IDataStructure](IDataStructure.md).[values](IDataStructure.md#values)

#### Defined in

[src/libs/datastructures/index.ts:20](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L20)
