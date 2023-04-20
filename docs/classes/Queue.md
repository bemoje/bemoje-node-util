[@bemoje/node-util](../README.md) / Queue

# Class: Queue<T\>

Abstract class that other classes can inherit from to gain various handy functionality.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Base`](Base.md)

  ↳ **`Queue`**

## Implements

- [`IRevivable`](../interfaces/IRevivable.md)<`T`[]\>
- `Iterable`<`T`\>

## Table of contents

### Constructors

- [constructor](Queue.md#constructor)

### Accessors

- [size](Queue.md#size)

### Methods

- [[iterator]](Queue.md#[iterator])
- [dequeue](Queue.md#dequeue)
- [enqueue](Queue.md#enqueue)
- [toArray](Queue.md#toarray)
- [toJSON](Queue.md#tojson)
- [from](Queue.md#from)
- [fromJSON](Queue.md#fromjson)

## Constructors

### constructor

• **new Queue**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Inherited from

[Base](Base.md).[constructor](Base.md#constructor)

#### Defined in

[src/libs/datastructures/src/Base.ts:10](https://github.com/bemoje/bemoje-node-util/blob/7a9246e/src/libs/datastructures/src/Base.ts#L10)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[src/libs/datastructures/src/Queue.ts:28](https://github.com/bemoje/bemoje-node-util/blob/7a9246e/src/libs/datastructures/src/Queue.ts#L28)

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<`T`, `any`, `undefined`\>

#### Returns

`Iterator`<`T`, `any`, `undefined`\>

#### Implementation of

Iterable.\_\_@iterator@87

#### Defined in

[src/libs/datastructures/src/Queue.ts:40](https://github.com/bemoje/bemoje-node-util/blob/7a9246e/src/libs/datastructures/src/Queue.ts#L40)

___

### dequeue

▸ **dequeue**(): `T`

#### Returns

`T`

#### Defined in

[src/libs/datastructures/src/Queue.ts:22](https://github.com/bemoje/bemoje-node-util/blob/7a9246e/src/libs/datastructures/src/Queue.ts#L22)

___

### enqueue

▸ **enqueue**(`item`): [`Queue`](Queue.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`Queue`](Queue.md)<`T`\>

#### Defined in

[src/libs/datastructures/src/Queue.ts:17](https://github.com/bemoje/bemoje-node-util/blob/7a9246e/src/libs/datastructures/src/Queue.ts#L17)

___

### toArray

▸ **toArray**(): `T`[]

#### Returns

`T`[]

#### Defined in

[src/libs/datastructures/src/Queue.ts:32](https://github.com/bemoje/bemoje-node-util/blob/7a9246e/src/libs/datastructures/src/Queue.ts#L32)

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Implementation of

IRevivable.toJSON

#### Defined in

[src/libs/datastructures/src/Queue.ts:36](https://github.com/bemoje/bemoje-node-util/blob/7a9246e/src/libs/datastructures/src/Queue.ts#L36)

___

### from

▸ `Static` **from**<`T`\>(`o`): [`Queue`](Queue.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `Iterable`<`T`\> |

#### Returns

[`Queue`](Queue.md)<`T`\>

#### Defined in

[src/libs/datastructures/src/Queue.ts:7](https://github.com/bemoje/bemoje-node-util/blob/7a9246e/src/libs/datastructures/src/Queue.ts#L7)

___

### fromJSON

▸ `Static` **fromJSON**<`T`\>(`json`): [`Queue`](Queue.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

[`Queue`](Queue.md)<`T`\>

#### Defined in

[src/libs/datastructures/src/Queue.ts:13](https://github.com/bemoje/bemoje-node-util/blob/7a9246e/src/libs/datastructures/src/Queue.ts#L13)
