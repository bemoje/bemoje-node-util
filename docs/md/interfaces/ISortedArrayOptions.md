[@bemoje/node-util](/docs/md/index.md) / ISortedArrayOptions

# Interface: ISortedArrayOptions<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [allowDuplicates](/docs/md/interfaces/ISortedArrayOptions.md#allowduplicates)
- [compare](/docs/md/interfaces/ISortedArrayOptions.md#compare)
- [data](/docs/md/interfaces/ISortedArrayOptions.md#data)

## Properties

### allowDuplicates

• `Optional` **allowDuplicates**: `boolean`

#### Defined in

[src/datastructures/types/ISortedArrayOptions.ts:4](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/types/ISortedArrayOptions.ts#L4)

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

[src/datastructures/types/ISortedArrayOptions.ts:2](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/types/ISortedArrayOptions.ts#L2)

___

### data

• `Optional` **data**: `Iterable`<`T`\>

#### Defined in

[src/datastructures/types/ISortedArrayOptions.ts:3](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/types/ISortedArrayOptions.ts#L3)
