[@bemoje/node-util](/docs/index.md) / Base

# Class: Base

Abstract class that other classes can inherit from to gain various handy functionality.

## Hierarchy

- **`Base`**

  ↳ [`Queue`](/docs/classes/Queue.md)

  ↳ [`Table`](/docs/classes/Table.md)

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

• **new Base**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Record`<`string`, `any`\> |

#### Defined in

[src/libs/mixins/src/Base.ts:10](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/mixins/src/Base.ts#L10)

## Accessors

### klass

• `get` **klass**(): typeof [`Base`](/docs/classes/Base.md)

#### Returns

typeof [`Base`](/docs/classes/Base.md)

#### Defined in

[src/libs/mixins/src/Base.ts:14](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/mixins/src/Base.ts#L14)

___

### proto

• `get` **proto**(): `Record`<`string`, `any`\>

#### Returns

`Record`<`string`, `any`\>

#### Defined in

[src/libs/mixins/src/Base.ts:18](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/mixins/src/Base.ts#L18)

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

[src/libs/mixins/src/Base.ts:51](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/mixins/src/Base.ts#L51)

___

### assertNoAmbiguousOptions

▸ `Protected` **assertNoAmbiguousOptions**(`options`, `optionKeyPairs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Record`<`string`, `any`\> |
| `optionKeyPairs` | [`string`, `string`][] |

#### Returns

`void`

#### Defined in

[src/libs/mixins/src/Base.ts:68](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/mixins/src/Base.ts#L68)

___

### assertNoOptionsRequireMissingOptions

▸ `Protected` **assertNoOptionsRequireMissingOptions**(`options`, `optionKeyPairs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Record`<`string`, `any`\> |
| `optionKeyPairs` | [`string`, `string`][] |

#### Returns

`void`

#### Defined in

[src/libs/mixins/src/Base.ts:76](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/mixins/src/Base.ts#L76)

___

### checkInterfaces

▸ `Private` **checkInterfaces**(): `void`

#### Returns

`void`

#### Defined in

[src/libs/mixins/src/Base.ts:39](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/mixins/src/Base.ts#L39)

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

[src/libs/mixins/src/Base.ts:47](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/mixins/src/Base.ts#L47)

___

### inheritAllStatic

▸ `Private` **inheritAllStatic**(): `void`

#### Returns

`void`

#### Defined in

[src/libs/mixins/src/Base.ts:30](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/mixins/src/Base.ts#L30)

___

### init

▸ `Protected` **init**(): `void`

#### Returns

`void`

#### Defined in

[src/libs/mixins/src/Base.ts:22](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/mixins/src/Base.ts#L22)

___

### setNonEnumerablePrivateProperties

▸ `Protected` **setNonEnumerablePrivateProperties**(): `void`

Make the properties with property names that start with an underscore non-enumerable.

#### Returns

`void`

#### Defined in

[src/libs/mixins/src/Base.ts:64](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/mixins/src/Base.ts#L64)
