[@bemoje/node-util](/docs/index.md) / Queue

# Class: Queue<T\>

Guarantees that class instances are serializable and have a static revive function.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Base`](/docs/classes/Base.md)

  ↳ **`Queue`**

## Implements

- [`IRevivable`](/docs/interfaces/IRevivable.md)<`T`[]\>
- `Iterable`<`T`\>

## Table of contents

### Constructors

- [constructor](/docs/classes/Queue.md#constructor)

### Properties

- [queue](/docs/classes/Queue.md#queue)

### Accessors

- [klass](/docs/classes/Queue.md#klass)
- [proto](/docs/classes/Queue.md#proto)
- [size](/docs/classes/Queue.md#size)

### Methods

- [[iterator]](/docs/classes/Queue.md#[iterator])
- [assertNoAmbiguousOptions](/docs/classes/Queue.md#assertnoambiguousoptions)
- [assertNoOptionsRequireMissingOptions](/docs/classes/Queue.md#assertnooptionsrequiremissingoptions)
- [dequeue](/docs/classes/Queue.md#dequeue)
- [enqueue](/docs/classes/Queue.md#enqueue)
- [init](/docs/classes/Queue.md#init)
- [setNonEnumerablePrivateProperties](/docs/classes/Queue.md#setnonenumerableprivateproperties)
- [toArray](/docs/classes/Queue.md#toarray)
- [toJSON](/docs/classes/Queue.md#tojson)
- [from](/docs/classes/Queue.md#from)
- [fromJSON](/docs/classes/Queue.md#fromjson)

## Constructors

### constructor

• **new Queue**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Inherited from

[Base](/docs/classes/Base.md).[constructor](/docs/classes/Base.md#constructor)

#### Defined in

[src/libs/mixins/src/Base.ts:13](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/mixins/src/Base.ts#L13)

## Properties

### queue

• `Protected` **queue**: `T`[] = `[]`

#### Defined in

[src/libs/datastructures/src/Queue.ts:5](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Queue.ts#L5)

## Accessors

### klass

• `get` **klass**(): typeof [`Base`](/docs/classes/Base.md)

#### Returns

typeof [`Base`](/docs/classes/Base.md)

#### Inherited from

Base.klass

#### Defined in

[src/libs/mixins/src/Base.ts:17](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/mixins/src/Base.ts#L17)

___

### proto

• `get` **proto**(): [`Obj`](/docs/index.md#obj)

#### Returns

[`Obj`](/docs/index.md#obj)

#### Inherited from

Base.proto

#### Defined in

[src/libs/mixins/src/Base.ts:21](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/mixins/src/Base.ts#L21)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[src/libs/datastructures/src/Queue.ts:28](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Queue.ts#L28)

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<`T`, `any`, `undefined`\>

#### Returns

`Iterator`<`T`, `any`, `undefined`\>

#### Implementation of

Iterable.\_\_@iterator@87

#### Defined in

[src/libs/datastructures/src/Queue.ts:40](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Queue.ts#L40)

___

### assertNoAmbiguousOptions

▸ `Protected` **assertNoAmbiguousOptions**(`options`, `optionKeyPairs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Obj`](/docs/index.md#obj) |
| `optionKeyPairs` | [`string`, `string`][] |

#### Returns

`void`

#### Inherited from

[Base](/docs/classes/Base.md).[assertNoAmbiguousOptions](/docs/classes/Base.md#assertnoambiguousoptions)

#### Defined in

[src/libs/mixins/src/Base.ts:71](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/mixins/src/Base.ts#L71)

___

### assertNoOptionsRequireMissingOptions

▸ `Protected` **assertNoOptionsRequireMissingOptions**(`options`, `optionKeyPairs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Obj`](/docs/index.md#obj) |
| `optionKeyPairs` | [`string`, `string`][] |

#### Returns

`void`

#### Inherited from

[Base](/docs/classes/Base.md).[assertNoOptionsRequireMissingOptions](/docs/classes/Base.md#assertnooptionsrequiremissingoptions)

#### Defined in

[src/libs/mixins/src/Base.ts:79](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/mixins/src/Base.ts#L79)

___

### dequeue

▸ **dequeue**(): `T`

#### Returns

`T`

#### Defined in

[src/libs/datastructures/src/Queue.ts:22](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Queue.ts#L22)

___

### enqueue

▸ **enqueue**(`item`): [`Queue`](/docs/classes/Queue.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`Queue`](/docs/classes/Queue.md)<`T`\>

#### Defined in

[src/libs/datastructures/src/Queue.ts:17](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Queue.ts#L17)

___

### init

▸ `Protected` **init**(): `void`

#### Returns

`void`

#### Inherited from

[Base](/docs/classes/Base.md).[init](/docs/classes/Base.md#init)

#### Defined in

[src/libs/mixins/src/Base.ts:25](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/mixins/src/Base.ts#L25)

___

### setNonEnumerablePrivateProperties

▸ `Protected` **setNonEnumerablePrivateProperties**(): `void`

Make the properties with property names that start with an underscore non-enumerable.

#### Returns

`void`

#### Inherited from

[Base](/docs/classes/Base.md).[setNonEnumerablePrivateProperties](/docs/classes/Base.md#setnonenumerableprivateproperties)

#### Defined in

[src/libs/mixins/src/Base.ts:67](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/mixins/src/Base.ts#L67)

___

### toArray

▸ **toArray**(): `T`[]

#### Returns

`T`[]

#### Defined in

[src/libs/datastructures/src/Queue.ts:32](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Queue.ts#L32)

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Implementation of

IRevivable.toJSON

#### Defined in

[src/libs/datastructures/src/Queue.ts:36](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Queue.ts#L36)

___

### from

▸ `Static` **from**<`T`\>(`o`): [`Queue`](/docs/classes/Queue.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `Iterable`<`T`\> |

#### Returns

[`Queue`](/docs/classes/Queue.md)<`T`\>

#### Defined in

[src/libs/datastructures/src/Queue.ts:7](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Queue.ts#L7)

___

### fromJSON

▸ `Static` **fromJSON**<`T`\>(`json`): [`Queue`](/docs/classes/Queue.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

[`Queue`](/docs/classes/Queue.md)<`T`\>

#### Defined in

[src/libs/datastructures/src/Queue.ts:13](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Queue.ts#L13)
