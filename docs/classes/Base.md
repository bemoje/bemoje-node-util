[@bemoje/node-util](../README.md) / Base

# Class: Base

Abstract class that other classes can inherit from to gain various handy functionality.

## Hierarchy

- **`Base`**

  ↳ [`Queue`](Queue.md)

  ↳ [`Table`](Table.md)

## Table of contents

### Constructors

- [constructor](Base.md#constructor)

### Accessors

- [klass](Base.md#klass)
- [proto](Base.md#proto)

## Constructors

### constructor

• **new Base**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Record`<`string`, `any`\> |

#### Defined in

src/libs/mixins/src/Base.ts:10

## Accessors

### klass

• `get` **klass**(): typeof [`Base`](Base.md)

#### Returns

typeof [`Base`](Base.md)

#### Defined in

src/libs/mixins/src/Base.ts:14

___

### proto

• `get` **proto**(): `Record`<`string`, `any`\>

#### Returns

`Record`<`string`, `any`\>

#### Defined in

src/libs/mixins/src/Base.ts:18
