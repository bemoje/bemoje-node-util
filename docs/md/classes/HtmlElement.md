[@bemoje/node-util](/docs/md/index.md) / \_HtmlElement

# Class: \_HtmlElement

Represents an HTML element.

**`Remarks`**

Can be rendered as real html or converted to a real DOM element.

## Hierarchy

- **`_HtmlElement`**

  ↳ [`_HtmlDocument`](/docs/md/classes/HtmlDocument.md)

## Table of contents

### Constructors

- [constructor](/docs/md/classes/HtmlElement.md#constructor)

### Properties

- [attributes](/docs/md/classes/HtmlElement.md#attributes)
- [children](/docs/md/classes/HtmlElement.md#children)
- [tag](/docs/md/classes/HtmlElement.md#tag)

### Accessors

- [isVoid](/docs/md/classes/HtmlElement.md#isvoid)

### Methods

- [toHtmlElement](/docs/md/classes/HtmlElement.md#tohtmlelement)
- [toString](/docs/md/classes/HtmlElement.md#tostring)

## Constructors

### constructor

• **new _HtmlElement**(`tag`, `...args`)

Creates an _HtmlElement instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | The element's tag |
| `...args` | [`_HtmlElementConstructorArgs`](/docs/md/index.md#_htmlelementconstructorargs)[] | The element's attributes and children |

#### Defined in

[src/html/helpers/_HtmlElement.ts:26](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/html/helpers/_HtmlElement.ts#L26)

## Properties

### attributes

• **attributes**: `Map`<`string`, [`_HtmlAttribute`](/docs/md/classes/HtmlAttribute.md)\>

The element's attributes.

#### Defined in

[src/html/helpers/_HtmlElement.ts:13](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/html/helpers/_HtmlElement.ts#L13)

___

### children

• **children**: (`string` \| [`_HtmlElement`](/docs/md/classes/HtmlElement.md))[] = `[]`

The element's children.

#### Defined in

[src/html/helpers/_HtmlElement.ts:19](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/html/helpers/_HtmlElement.ts#L19)

___

### tag

• **tag**: `string`

The element's tag

#### Defined in

[src/html/helpers/_HtmlElement.ts:27](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/html/helpers/_HtmlElement.ts#L27)

## Accessors

### isVoid

• `get` **isVoid**(): `boolean`

Whether the element is a void element.

#### Returns

`boolean`

#### Defined in

[src/html/helpers/_HtmlElement.ts:47](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/html/helpers/_HtmlElement.ts#L47)

## Methods

### toHtmlElement

▸ **toHtmlElement**(): `HTMLElement`

Returns this instance as an actual DOM HTMLElement.

#### Returns

`HTMLElement`

#### Defined in

[src/html/helpers/_HtmlElement.ts:54](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/html/helpers/_HtmlElement.ts#L54)

___

### toString

▸ **toString**(): `string`

Render the HTML element as a string.

#### Returns

`string`

#### Defined in

[src/html/helpers/_HtmlElement.ts:72](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/html/helpers/_HtmlElement.ts#L72)
