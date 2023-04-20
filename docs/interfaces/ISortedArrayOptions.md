[@bemoje/node-util](../README.md) / ISortedArrayOptions

# Interface: ISortedArrayOptions<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [allowDuplicates](ISortedArrayOptions.md#allowduplicates)
- [compare](ISortedArrayOptions.md#compare)
- [data](ISortedArrayOptions.md#data)

## Properties

### allowDuplicates

• `Optional` **allowDuplicates**: `boolean`

#### Defined in

[src/libs/datastructures/src/SortedArray.ts:7](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/SortedArray.ts#L7)

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

[src/libs/datastructures/src/SortedArray.ts:6](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/SortedArray.ts#L6)

___

### data

• `Optional` **data**: `Iterable`<`T`\>

#### Defined in

[src/libs/datastructures/src/SortedArray.ts:5](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/SortedArray.ts#L5)
