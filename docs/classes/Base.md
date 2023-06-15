[@bemoje/node-util](/docs/index.md) / Base

# Class: Base

Abstract class that other classes can inherit from to gain various handy functionality.

## Hierarchy

- **`Base`**

  ↳ [`Queue`](/docs/classes/Queue.md)

  ↳ [`Table`](/docs/classes/Table.md)

  ↳ [`SimpleTable`](/docs/classes/SimpleTable.md)

## Table of contents

### Constructors

- [constructor](/docs/classes/Base.md#constructor)

### Accessors

- [klass](/docs/classes/Base.md#klass)
- [proto](/docs/classes/Base.md#proto)

### Methods

- [assertInterfaceStaticMembers](/docs/classes/Base.md#assertinterfacestaticmembers)
- [assertNoAmbiguousOptions](/docs/classes/Base.md#assertnoambiguousoptions)
- [assertNoOptionsRequireMissingOptions](/docs/classes/Base.md#assertnooptionsrequiremissingoptions)
- [checkInterfaces](/docs/classes/Base.md#checkinterfaces)
- [hasInterfaceInstanceMembers](/docs/classes/Base.md#hasinterfaceinstancemembers)
- [inheritAllStatic](/docs/classes/Base.md#inheritallstatic)
- [init](/docs/classes/Base.md#init)
- [setNonEnumerablePrivateProperties](/docs/classes/Base.md#setnonenumerableprivateproperties)

## Constructors

### constructor

• **new Base**()

#### Defined in

[src/libs/mixins/src/Base.ts:13](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/mixins/src/Base.ts#L13)

## Accessors

### klass

• `get` **klass**(): typeof [`Base`](/docs/classes/Base.md)

#### Returns

typeof [`Base`](/docs/classes/Base.md)

#### Defined in

[src/libs/mixins/src/Base.ts:17](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/mixins/src/Base.ts#L17)

___

### proto

• `get` **proto**(): [`Obj`](/docs/index.md#obj)

#### Returns

[`Obj`](/docs/index.md#obj)

#### Defined in

[src/libs/mixins/src/Base.ts:21](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/mixins/src/Base.ts#L21)

## Methods

### assertInterfaceStaticMembers

▸ `Private` **assertInterfaceStaticMembers**(`interfaceName`, `staticMembers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interfaceName` | `string` |
| `staticMembers` | `string`[] |

#### Returns

`void`

#### Defined in

[src/libs/mixins/src/Base.ts:54](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/mixins/src/Base.ts#L54)

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

#### Defined in

[src/libs/mixins/src/Base.ts:71](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/mixins/src/Base.ts#L71)

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

#### Defined in

[src/libs/mixins/src/Base.ts:79](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/mixins/src/Base.ts#L79)

___

### checkInterfaces

▸ `Private` **checkInterfaces**(): `void`

#### Returns

`void`

#### Defined in

[src/libs/mixins/src/Base.ts:42](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/mixins/src/Base.ts#L42)

___

### hasInterfaceInstanceMembers

▸ `Private` **hasInterfaceInstanceMembers**(`instanceMembers`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instanceMembers` | `string`[] |

#### Returns

`boolean`

#### Defined in

[src/libs/mixins/src/Base.ts:50](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/mixins/src/Base.ts#L50)

___

### inheritAllStatic

▸ `Private` **inheritAllStatic**(): `void`

#### Returns

`void`

#### Defined in

[src/libs/mixins/src/Base.ts:33](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/mixins/src/Base.ts#L33)

___

### init

▸ `Protected` **init**(): `void`

#### Returns

`void`

#### Defined in

[src/libs/mixins/src/Base.ts:25](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/mixins/src/Base.ts#L25)

___

### setNonEnumerablePrivateProperties

▸ `Protected` **setNonEnumerablePrivateProperties**(): `void`

Make the properties with property names that start with an underscore non-enumerable.

#### Returns

`void`

#### Defined in

[src/libs/mixins/src/Base.ts:67](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/mixins/src/Base.ts#L67)
