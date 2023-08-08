[@bemoje/node-util](/docs/md/index.md) / \_HtmlAttribute

# Class: \_HtmlAttribute

Represents an HTML attribute.

**`Remarks`**

Can be rendered as real html or converted to a real DOM attribute from the _HtmlElement class.

## Table of contents

### Constructors

- [constructor](/docs/md/classes/HtmlAttribute.md#constructor)

### Properties

- [name](/docs/md/classes/HtmlAttribute.md#name)
- [value](/docs/md/classes/HtmlAttribute.md#value)

### Accessors

- [isBoolean](/docs/md/classes/HtmlAttribute.md#isboolean)

### Methods

- [toString](/docs/md/classes/HtmlAttribute.md#tostring)

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

[src/html/helpers/_HtmlAttribute.ts:13](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/html/helpers/_HtmlAttribute.ts#L13)

## Properties

### name

• **name**: `string`

The attribute's name

#### Defined in

[src/html/helpers/_HtmlAttribute.ts:14](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/html/helpers/_HtmlAttribute.ts#L14)

___

### value

• `Optional` **value**: `string` \| `number` \| `boolean`

The attribute's value

#### Defined in

[src/html/helpers/_HtmlAttribute.ts:15](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/html/helpers/_HtmlAttribute.ts#L15)

## Accessors

### isBoolean

• `get` **isBoolean**(): `boolean`

Whether the attribute is a boolean attribute.

#### Returns

`boolean`

#### Defined in

[src/html/helpers/_HtmlAttribute.ts:21](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/html/helpers/_HtmlAttribute.ts#L21)

## Methods

### toString

▸ **toString**(): `string`

Render the HTML attribute as a string.

#### Returns

`string`

#### Defined in

[src/html/helpers/_HtmlAttribute.ts:28](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/html/helpers/_HtmlAttribute.ts#L28)
