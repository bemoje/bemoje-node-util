[@bemoje/node-util](/docs/index.md) / MixinBase

# Class: MixinBase

Abstract class that other classes can inherit from to gain various handy functionality.

## Hierarchy

- **`MixinBase`**

  ↳ [`Queue`](/docs/classes/Queue.md)

  ↳ [`SimpleTable`](/docs/classes/SimpleTable.md)

## Table of contents

### Constructors

- [constructor](/docs/classes/MixinBase.md#constructor)

### Methods

- [getConstructor](/docs/classes/MixinBase.md#getconstructor)
- [getPrototype](/docs/classes/MixinBase.md#getprototype)
- [setNonEnumerablePrivateProperties](/docs/classes/MixinBase.md#setnonenumerableprivateproperties)
- [setNonEnumerableProperties](/docs/classes/MixinBase.md#setnonenumerableproperties)

## Constructors

### constructor

• **new MixinBase**()

## Methods

### getConstructor

▸ **getConstructor**(): typeof [`MixinBase`](/docs/classes/MixinBase.md)

#### Returns

typeof [`MixinBase`](/docs/classes/MixinBase.md)

#### Defined in

[src/mixins/MixinBase.ts:8](https://github.com/bemoje/bemoje-node-util/blob/ca2fc78/src/mixins/MixinBase.ts#L8)

___

### getPrototype

▸ **getPrototype**(): [`MixinBase`](/docs/classes/MixinBase.md)

#### Returns

[`MixinBase`](/docs/classes/MixinBase.md)

#### Defined in

[src/mixins/MixinBase.ts:12](https://github.com/bemoje/bemoje-node-util/blob/ca2fc78/src/mixins/MixinBase.ts#L12)

___

### setNonEnumerablePrivateProperties

▸ `Protected` **setNonEnumerablePrivateProperties**(): `void`

Make the properties with property names that start with an underscore non-enumerable.

#### Returns

`void`

#### Defined in

[src/mixins/MixinBase.ts:19](https://github.com/bemoje/bemoje-node-util/blob/ca2fc78/src/mixins/MixinBase.ts#L19)

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

#### Defined in

[src/mixins/MixinBase.ts:26](https://github.com/bemoje/bemoje-node-util/blob/ca2fc78/src/mixins/MixinBase.ts#L26)
