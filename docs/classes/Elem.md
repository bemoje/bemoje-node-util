[@bemoje/node-util](/docs/index.md) / Elem

# Class: Elem

## Hierarchy

- **`Elem`**

  ↳ [`Doc`](/docs/classes/Doc.md)

## Table of contents

### Constructors

- [constructor](/docs/classes/Elem.md#constructor)

### Properties

- [attributes](/docs/classes/Elem.md#attributes)
- [children](/docs/classes/Elem.md#children)
- [tag](/docs/classes/Elem.md#tag)

### Accessors

- [isVoid](/docs/classes/Elem.md#isvoid)

### Methods

- [toHtmlElement](/docs/classes/Elem.md#tohtmlelement)
- [toString](/docs/classes/Elem.md#tostring)

## Constructors

### constructor

• **new Elem**(`tag`, `...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |
| `...args` | [`ElemConstructorArgs`](/docs/index.md#elemconstructorargs)[] |

#### Defined in

[src/libs/html/src/HtmlGenerate.ts:29](https://github.com/bemoje/bemoje-node-util/blob/e2587a1/src/libs/html/src/HtmlGenerate.ts#L29)

## Properties

### attributes

• **attributes**: `Map`<`string`, [`Attr`](/docs/classes/Attr.md)\>

#### Defined in

[src/libs/html/src/HtmlGenerate.ts:26](https://github.com/bemoje/bemoje-node-util/blob/e2587a1/src/libs/html/src/HtmlGenerate.ts#L26)

___

### children

• **children**: (`string` \| [`Elem`](/docs/classes/Elem.md))[] = `[]`

#### Defined in

[src/libs/html/src/HtmlGenerate.ts:27](https://github.com/bemoje/bemoje-node-util/blob/e2587a1/src/libs/html/src/HtmlGenerate.ts#L27)

___

### tag

• **tag**: `string`

#### Defined in

[src/libs/html/src/HtmlGenerate.ts:29](https://github.com/bemoje/bemoje-node-util/blob/e2587a1/src/libs/html/src/HtmlGenerate.ts#L29)

## Accessors

### isVoid

• `get` **isVoid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/libs/html/src/HtmlGenerate.ts:44](https://github.com/bemoje/bemoje-node-util/blob/e2587a1/src/libs/html/src/HtmlGenerate.ts#L44)

## Methods

### toHtmlElement

▸ **toHtmlElement**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Defined in

[src/libs/html/src/HtmlGenerate.ts:54](https://github.com/bemoje/bemoje-node-util/blob/e2587a1/src/libs/html/src/HtmlGenerate.ts#L54)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/libs/html/src/HtmlGenerate.ts:48](https://github.com/bemoje/bemoje-node-util/blob/e2587a1/src/libs/html/src/HtmlGenerate.ts#L48)
