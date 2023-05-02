[@bemoje/node-util](../README.md) / Queue

# Class: Queue<T\>

Guarantees that class instances are serializable and have a static revive function.

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

- [klass](Queue.md#klass)
- [proto](Queue.md#proto)
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

• **new Queue**<`T`\>(`options?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Record`<`string`, `any`\> |

#### Inherited from

[Base](Base.md).[constructor](Base.md#constructor)

#### Defined in

src/libs/mixins/src/Base.ts:10

## Accessors

### klass

• `get` **klass**(): typeof [`Base`](Base.md)

#### Returns

typeof [`Base`](Base.md)

#### Inherited from

Base.klass

#### Defined in

src/libs/mixins/src/Base.ts:14

___

### proto

• `get` **proto**(): `Record`<`string`, `any`\>

#### Returns

`Record`<`string`, `any`\>

#### Inherited from

Base.proto

#### Defined in

src/libs/mixins/src/Base.ts:18

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[src/libs/datastructures/src/Queue.ts:28](https://github.com/bemoje/bemoje-node-util/blob/c5f3e88/src/libs/datastructures/src/Queue.ts#L28)

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<`T`, `any`, `undefined`\>

#### Returns

`Iterator`<`T`, `any`, `undefined`\>

#### Implementation of

Iterable.\_\_@iterator@87

#### Defined in

[src/libs/datastructures/src/Queue.ts:40](https://github.com/bemoje/bemoje-node-util/blob/c5f3e88/src/libs/datastructures/src/Queue.ts#L40)

___

### dequeue

▸ **dequeue**(): `T`

#### Returns

`T`

#### Defined in

[src/libs/datastructures/src/Queue.ts:22](https://github.com/bemoje/bemoje-node-util/blob/c5f3e88/src/libs/datastructures/src/Queue.ts#L22)

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

[src/libs/datastructures/src/Queue.ts:17](https://github.com/bemoje/bemoje-node-util/blob/c5f3e88/src/libs/datastructures/src/Queue.ts#L17)

___

### toArray

▸ **toArray**(): `T`[]

#### Returns

`T`[]

#### Defined in

[src/libs/datastructures/src/Queue.ts:32](https://github.com/bemoje/bemoje-node-util/blob/c5f3e88/src/libs/datastructures/src/Queue.ts#L32)

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Implementation of

IRevivable.toJSON

#### Defined in

[src/libs/datastructures/src/Queue.ts:36](https://github.com/bemoje/bemoje-node-util/blob/c5f3e88/src/libs/datastructures/src/Queue.ts#L36)

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

[src/libs/datastructures/src/Queue.ts:7](https://github.com/bemoje/bemoje-node-util/blob/c5f3e88/src/libs/datastructures/src/Queue.ts#L7)

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

[src/libs/datastructures/src/Queue.ts:13](https://github.com/bemoje/bemoje-node-util/blob/c5f3e88/src/libs/datastructures/src/Queue.ts#L13)
