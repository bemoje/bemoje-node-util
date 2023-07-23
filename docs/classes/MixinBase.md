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

[src/mixins/MixinBase.ts:7](https://github.com/bemoje/bemoje-node-util/blob/3683199/src/mixins/MixinBase.ts#L7)

___

### getPrototype

▸ **getPrototype**(): [`MixinBase`](/docs/classes/MixinBase.md)

#### Returns

[`MixinBase`](/docs/classes/MixinBase.md)

#### Defined in

[src/mixins/MixinBase.ts:11](https://github.com/bemoje/bemoje-node-util/blob/3683199/src/mixins/MixinBase.ts#L11)

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

[src/mixins/MixinBase.ts:18](https://github.com/bemoje/bemoje-node-util/blob/3683199/src/mixins/MixinBase.ts#L18)
