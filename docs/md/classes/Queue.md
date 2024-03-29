[@bemoje/node-util](/docs/md/index.md) / Queue

# Class: Queue<T\>

Abstract class that other classes can inherit from to gain various handy functionality.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`MixinBase`](/docs/md/classes/MixinBase.md)

  ↳ **`Queue`**

## Table of contents

### Constructors

- [constructor](/docs/md/classes/Queue.md#constructor)

### Properties

- [queue](/docs/md/classes/Queue.md#queue)

### Accessors

- [size](/docs/md/classes/Queue.md#size)

### Methods

- [[iterator]](/docs/md/classes/Queue.md#[iterator])
- [dequeue](/docs/md/classes/Queue.md#dequeue)
- [enqueue](/docs/md/classes/Queue.md#enqueue)
- [getConstructor](/docs/md/classes/Queue.md#getconstructor)
- [getPrototype](/docs/md/classes/Queue.md#getprototype)
- [setNonEnumerableProperties](/docs/md/classes/Queue.md#setnonenumerableproperties)
- [toArray](/docs/md/classes/Queue.md#toarray)
- [toJSON](/docs/md/classes/Queue.md#tojson)
- [from](/docs/md/classes/Queue.md#from)
- [fromJSON](/docs/md/classes/Queue.md#fromjson)

## Constructors

### constructor

• **new Queue**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Inherited from

[MixinBase](/docs/md/classes/MixinBase.md).[constructor](/docs/md/classes/MixinBase.md#constructor)

## Properties

### queue

• `Protected` **queue**: `T`[] = `[]`

#### Defined in

[src/datastructures/Queue.ts:4](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Queue.ts#L4)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[src/datastructures/Queue.ts:27](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Queue.ts#L27)

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<`T`, `any`, `undefined`\>

#### Returns

`Iterator`<`T`, `any`, `undefined`\>

#### Defined in

[src/datastructures/Queue.ts:39](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Queue.ts#L39)

___

### dequeue

▸ **dequeue**(): `T`

#### Returns

`T`

#### Defined in

[src/datastructures/Queue.ts:21](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Queue.ts#L21)

___

### enqueue

▸ **enqueue**(`item`): [`Queue`](/docs/md/classes/Queue.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

[`Queue`](/docs/md/classes/Queue.md)<`T`\>

#### Defined in

[src/datastructures/Queue.ts:16](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Queue.ts#L16)

___

### getConstructor

▸ **getConstructor**(): typeof [`MixinBase`](/docs/md/classes/MixinBase.md)

#### Returns

typeof [`MixinBase`](/docs/md/classes/MixinBase.md)

#### Inherited from

[MixinBase](/docs/md/classes/MixinBase.md).[getConstructor](/docs/md/classes/MixinBase.md#getconstructor)

#### Defined in

[src/mixins/MixinBase.ts:7](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/mixins/MixinBase.ts#L7)

___

### getPrototype

▸ **getPrototype**(): [`MixinBase`](/docs/md/classes/MixinBase.md)

#### Returns

[`MixinBase`](/docs/md/classes/MixinBase.md)

#### Inherited from

[MixinBase](/docs/md/classes/MixinBase.md).[getPrototype](/docs/md/classes/MixinBase.md#getprototype)

#### Defined in

[src/mixins/MixinBase.ts:11](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/mixins/MixinBase.ts#L11)

___

### setNonEnumerableProperties

▸ `Protected` **setNonEnumerableProperties**(`...propertyNames`): `void`

Make the properties with the given property names non-enumerable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...propertyNames` | `string`[] |

#### Returns

`void`

#### Inherited from

[MixinBase](/docs/md/classes/MixinBase.md).[setNonEnumerableProperties](/docs/md/classes/MixinBase.md#setnonenumerableproperties)

#### Defined in

[src/mixins/MixinBase.ts:18](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/mixins/MixinBase.ts#L18)

___

### toArray

▸ **toArray**(): `T`[]

#### Returns

`T`[]

#### Defined in

[src/datastructures/Queue.ts:31](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Queue.ts#L31)

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

#### Defined in

[src/datastructures/Queue.ts:35](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Queue.ts#L35)

___

### from

▸ `Static` **from**<`T`\>(`o`): [`Queue`](/docs/md/classes/Queue.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `Iterable`<`T`\> |

#### Returns

[`Queue`](/docs/md/classes/Queue.md)<`T`\>

#### Defined in

[src/datastructures/Queue.ts:6](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Queue.ts#L6)

___

### fromJSON

▸ `Static` **fromJSON**<`T`\>(`json`): [`Queue`](/docs/md/classes/Queue.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

[`Queue`](/docs/md/classes/Queue.md)<`T`\>

#### Defined in

[src/datastructures/Queue.ts:12](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/Queue.ts#L12)
