[@bemoje/bemoje-node-util](../README.md) / [Exports](../modules.md) / IKeyValueDataStructure

# Interface: IKeyValueDataStructure<T\>

Interface for indexed data structures, like hash maps

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`IDataStructure`](IDataStructure.md)<`T`\>

  ↳ **`IKeyValueDataStructure`**

## Table of contents

### Methods

- [[iterator]](IKeyValueDataStructure.md#[iterator])
- [clone](IKeyValueDataStructure.md#clone)
- [deepEquals](IKeyValueDataStructure.md#deepequals)
- [entries](IKeyValueDataStructure.md#entries)
- [every](IKeyValueDataStructure.md#every)
- [forEach](IKeyValueDataStructure.md#foreach)
- [get](IKeyValueDataStructure.md#get)
- [getImmutable](IKeyValueDataStructure.md#getimmutable)
- [has](IKeyValueDataStructure.md#has)
- [isSameInstanceAs](IKeyValueDataStructure.md#issameinstanceas)
- [keys](IKeyValueDataStructure.md#keys)
- [map](IKeyValueDataStructure.md#map)
- [set](IKeyValueDataStructure.md#set)
- [setImmutable](IKeyValueDataStructure.md#setimmutable)
- [some](IKeyValueDataStructure.md#some)
- [toArray](IKeyValueDataStructure.md#toarray)
- [values](IKeyValueDataStructure.md#values)

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

### entries

▸ **entries**(): `Generator`<[key: any, value: any], `any`, `unknown`\>

#### Returns

`Generator`<[key: any, value: any], `any`, `unknown`\>

#### Defined in

[src/libs/datastructures/index.ts:62](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L62)

___

### every

▸ **every**(`f`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `any`, `key`: `any`) => `boolean` |

#### Returns

`boolean`

#### Overrides

[IDataStructure](IDataStructure.md).[every](IDataStructure.md#every)

#### Defined in

[src/libs/datastructures/index.ts:60](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L60)

___

### forEach

▸ **forEach**(`f`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `any`, `key`: `any`) => `boolean` \| `void` |

#### Returns

`T`

#### Overrides

[IDataStructure](IDataStructure.md).[forEach](IDataStructure.md#foreach)

#### Defined in

[src/libs/datastructures/index.ts:57](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L57)

___

### get

▸ **get**(`key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`any`

#### Defined in

[src/libs/datastructures/index.ts:55](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L55)

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

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`boolean`

#### Defined in

[src/libs/datastructures/index.ts:56](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L56)

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

[src/libs/datastructures/index.ts:61](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L61)

___

### map

▸ **map**(`f`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `any`, `key`: `any`) => `any` |

#### Returns

`T`

#### Overrides

[IDataStructure](IDataStructure.md).[map](IDataStructure.md#map)

#### Defined in

[src/libs/datastructures/index.ts:58](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L58)

___

### set

▸ **set**(`key`, `value`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `value` | `any` |

#### Returns

`T`

#### Defined in

[src/libs/datastructures/index.ts:54](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L54)

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
| `f` | (`value`: `any`, `key`: `any`) => `boolean` |

#### Returns

`boolean`

#### Overrides

[IDataStructure](IDataStructure.md).[some](IDataStructure.md#some)

#### Defined in

[src/libs/datastructures/index.ts:59](https://github.com/bemoje/bemoje-node-util/blob/621ec28/src/libs/datastructures/index.ts#L59)

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
