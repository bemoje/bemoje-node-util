[@bemoje/node-util](/docs/index.md) / ISortedArrayOptions

# Interface: ISortedArrayOptions<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [allowDuplicates](/docs/interfaces/ISortedArrayOptions.md#allowduplicates)
- [compare](/docs/interfaces/ISortedArrayOptions.md#compare)
- [data](/docs/interfaces/ISortedArrayOptions.md#data)

## Properties

### allowDuplicates

• `Optional` **allowDuplicates**: `boolean`

#### Defined in

[src/libs/datastructures/src/SortedArray.ts:7](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/SortedArray.ts#L7)

___

### compare

• `Optional` **compare**: (`a`: `any`, `b`: `any`) => `number`

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

[src/libs/datastructures/src/SortedArray.ts:6](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/SortedArray.ts#L6)

___

### data

• `Optional` **data**: `Iterable`<`T`\>

#### Defined in

[src/libs/datastructures/src/SortedArray.ts:5](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/SortedArray.ts#L5)
