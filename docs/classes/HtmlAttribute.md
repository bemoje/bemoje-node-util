[@bemoje/node-util](/docs/index.md) / \_HtmlAttribute

# Class: \_HtmlAttribute

Represents an HTML attribute.

**`Remarks`**

Can be rendered as real html or converted to a real DOM attribute from the _HtmlElement class.

## Table of contents

### Constructors

- [constructor](/docs/classes/HtmlAttribute.md#constructor)

### Properties

- [name](/docs/classes/HtmlAttribute.md#name)
- [value](/docs/classes/HtmlAttribute.md#value)

### Accessors

- [isBoolean](/docs/classes/HtmlAttribute.md#isboolean)

### Methods

- [toString](/docs/classes/HtmlAttribute.md#tostring)

## Constructors

### constructor

• **new _HtmlAttribute**(`name`, `value?`)

Creates an _HtmlAttribute instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The attribute's name |
| `value?` | `string` \| `number` \| `boolean` | The attribute's value |

#### Defined in

[src/html/helpers/_HtmlAttribute.ts:13](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/html/helpers/_HtmlAttribute.ts#L13)

## Properties

### name

• **name**: `string`

The attribute's name

#### Defined in

[src/html/helpers/_HtmlAttribute.ts:14](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/html/helpers/_HtmlAttribute.ts#L14)

___

### value

• `Optional` **value**: `string` \| `number` \| `boolean`

The attribute's value

#### Defined in

[src/html/helpers/_HtmlAttribute.ts:15](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/html/helpers/_HtmlAttribute.ts#L15)

## Accessors

### isBoolean

• `get` **isBoolean**(): `boolean`

Whether the attribute is a boolean attribute.

#### Returns

`boolean`

#### Defined in

[src/html/helpers/_HtmlAttribute.ts:21](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/html/helpers/_HtmlAttribute.ts#L21)

## Methods

### toString

▸ **toString**(): `string`

Render the HTML attribute as a string.

#### Returns

`string`

#### Defined in

[src/html/helpers/_HtmlAttribute.ts:28](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/html/helpers/_HtmlAttribute.ts#L28)
