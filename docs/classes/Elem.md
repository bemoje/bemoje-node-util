[@bemoje/node-util](/docs/index.md) / Elem

# Class: Elem

## Table of contents

### Constructors

- [constructor](/docs/classes/Elem.md#constructor)

### Properties

- [attributes](/docs/classes/Elem.md#attributes)
- [elements](/docs/classes/Elem.md#elements)
- [isVoid](/docs/classes/Elem.md#isvoid)
- [type](/docs/classes/Elem.md#type)

### Accessors

- [description](/docs/classes/Elem.md#description)

### Methods

- [renderAttributes](/docs/classes/Elem.md#renderattributes)
- [renderChildren](/docs/classes/Elem.md#renderchildren)
- [toHtmlElement](/docs/classes/Elem.md#tohtmlelement)
- [toString](/docs/classes/Elem.md#tostring)

## Constructors

### constructor

• **new Elem**(`type`, `...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `...args` | (`string` \| [`Elem`](/docs/classes/Elem.md) \| [`Att`](/docs/classes/Att.md)[])[] |

#### Defined in

[src/libs/html/src/HtmlGenerate.ts:29](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/html/src/HtmlGenerate.ts#L29)

## Properties

### attributes

• **attributes**: `Map`<`string`, [`Att`](/docs/classes/Att.md)\>

#### Defined in

[src/libs/html/src/HtmlGenerate.ts:25](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/html/src/HtmlGenerate.ts#L25)

___

### elements

• **elements**: (`string` \| [`Elem`](/docs/classes/Elem.md))[]

#### Defined in

[src/libs/html/src/HtmlGenerate.ts:26](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/html/src/HtmlGenerate.ts#L26)

___

### isVoid

• **isVoid**: `boolean`

#### Defined in

[src/libs/html/src/HtmlGenerate.ts:27](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/html/src/HtmlGenerate.ts#L27)

___

### type

• **type**: `string`

#### Defined in

[src/libs/html/src/HtmlGenerate.ts:24](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/html/src/HtmlGenerate.ts#L24)

## Accessors

### description

• `get` **description**(): `string`

#### Returns

`string`

#### Defined in

[src/libs/html/src/HtmlGenerate.ts:47](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/html/src/HtmlGenerate.ts#L47)

## Methods

### renderAttributes

▸ `Private` **renderAttributes**(): `string`

#### Returns

`string`

#### Defined in

[src/libs/html/src/HtmlGenerate.ts:51](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/html/src/HtmlGenerate.ts#L51)

___

### renderChildren

▸ `Private` **renderChildren**(): `string`

#### Returns

`string`

#### Defined in

[src/libs/html/src/HtmlGenerate.ts:55](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/html/src/HtmlGenerate.ts#L55)

___

### toHtmlElement

▸ **toHtmlElement**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Defined in

[src/libs/html/src/HtmlGenerate.ts:65](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/html/src/HtmlGenerate.ts#L65)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/libs/html/src/HtmlGenerate.ts:59](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/html/src/HtmlGenerate.ts#L59)
