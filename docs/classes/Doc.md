[@bemoje/node-util](/docs/index.md) / Doc

# Class: Doc

## Hierarchy

- [`Elem`](/docs/classes/Elem.md)

  ↳ **`Doc`**

## Table of contents

### Constructors

- [constructor](/docs/classes/Doc.md#constructor)

### Properties

- [attributes](/docs/classes/Doc.md#attributes)
- [children](/docs/classes/Doc.md#children)
- [tag](/docs/classes/Doc.md#tag)

### Accessors

- [isVoid](/docs/classes/Doc.md#isvoid)

### Methods

- [toHtmlElement](/docs/classes/Doc.md#tohtmlelement)
- [toString](/docs/classes/Doc.md#tostring)
- [simple](/docs/classes/Doc.md#simple)

## Constructors

### constructor

• **new Doc**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`ElemConstructorArgs`](/docs/index.md#elemconstructorargs)[] |

#### Overrides

[Elem](/docs/classes/Elem.md).[constructor](/docs/classes/Elem.md#constructor)

#### Defined in

[src/libs/html/src/HtmlGenerate.ts:118](https://github.com/bemoje/bemoje-node-util/blob/e2587a1/src/libs/html/src/HtmlGenerate.ts#L118)

## Properties

### attributes

• **attributes**: `Map`<`string`, [`Attr`](/docs/classes/Attr.md)\>

#### Inherited from

[Elem](/docs/classes/Elem.md).[attributes](/docs/classes/Elem.md#attributes)

#### Defined in

[src/libs/html/src/HtmlGenerate.ts:26](https://github.com/bemoje/bemoje-node-util/blob/e2587a1/src/libs/html/src/HtmlGenerate.ts#L26)

___

### children

• **children**: (`string` \| [`Elem`](/docs/classes/Elem.md))[] = `[]`

#### Inherited from

[Elem](/docs/classes/Elem.md).[children](/docs/classes/Elem.md#children)

#### Defined in

[src/libs/html/src/HtmlGenerate.ts:27](https://github.com/bemoje/bemoje-node-util/blob/e2587a1/src/libs/html/src/HtmlGenerate.ts#L27)

___

### tag

• **tag**: `string`

#### Inherited from

[Elem](/docs/classes/Elem.md).[tag](/docs/classes/Elem.md#tag)

#### Defined in

[src/libs/html/src/HtmlGenerate.ts:29](https://github.com/bemoje/bemoje-node-util/blob/e2587a1/src/libs/html/src/HtmlGenerate.ts#L29)

## Accessors

### isVoid

• `get` **isVoid**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Elem.isVoid

#### Defined in

[src/libs/html/src/HtmlGenerate.ts:44](https://github.com/bemoje/bemoje-node-util/blob/e2587a1/src/libs/html/src/HtmlGenerate.ts#L44)

## Methods

### toHtmlElement

▸ **toHtmlElement**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Inherited from

[Elem](/docs/classes/Elem.md).[toHtmlElement](/docs/classes/Elem.md#tohtmlelement)

#### Defined in

[src/libs/html/src/HtmlGenerate.ts:54](https://github.com/bemoje/bemoje-node-util/blob/e2587a1/src/libs/html/src/HtmlGenerate.ts#L54)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Overrides

[Elem](/docs/classes/Elem.md).[toString](/docs/classes/Elem.md#tostring)

#### Defined in

[src/libs/html/src/HtmlGenerate.ts:121](https://github.com/bemoje/bemoje-node-util/blob/e2587a1/src/libs/html/src/HtmlGenerate.ts#L121)

___

### simple

▸ `Static` **simple**(`options`): [`Doc`](/docs/classes/Doc.md)

Generate simple HTML page with reasonable defaults.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.body?` | (`string` \| [`Elem`](/docs/classes/Elem.md))[] |
| `options.head?` | (`string` \| [`Elem`](/docs/classes/Elem.md))[] |
| `options.scripts?` | [`Elem`](/docs/classes/Elem.md)[] |
| `options.title` | `string` |

#### Returns

[`Doc`](/docs/classes/Doc.md)

#### Defined in

[src/libs/html/src/HtmlGenerate.ts:74](https://github.com/bemoje/bemoje-node-util/blob/e2587a1/src/libs/html/src/HtmlGenerate.ts#L74)
