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

src/datastructures/types/ISortedArrayOptions.ts:4

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

src/datastructures/types/ISortedArrayOptions.ts:2

___

### data

• `Optional` **data**: `Iterable`<`T`\>

#### Defined in

src/datastructures/types/ISortedArrayOptions.ts:3
