[@bemoje/node-util](/docs/index.md) / TsDocTag

# Class: TsDocTag

A tag in a TsDoc instance.

## Table of contents

### Constructors

- [constructor](/docs/classes/TsDocTag.md#constructor)

### Properties

- [description](/docs/classes/TsDocTag.md#description)
- [name](/docs/classes/TsDocTag.md#name)
- [tag](/docs/classes/TsDocTag.md#tag)

### Methods

- [toString](/docs/classes/TsDocTag.md#tostring)

## Constructors

### constructor

• **new TsDocTag**(`tag`, `name`, `description`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | The kind of tag. |
| `name` | `string` | The tag's name parameter, if it has one. |
| `description` | `string`[] | - |

#### Defined in

src/tsdoc/TsDocTag.ts:11

## Properties

### description

• **description**: `string`[]

#### Defined in

src/tsdoc/TsDocTag.ts:11

___

### name

• **name**: `string`

The tag's name parameter, if it has one.

#### Defined in

src/tsdoc/TsDocTag.ts:11

___

### tag

• **tag**: `string`

The kind of tag.

#### Defined in

src/tsdoc/TsDocTag.ts:11

## Methods

### toString

▸ **toString**(): `string`

Renders the tag as a string.

**`Remarks`**

Ensures that example tags are formatted as markdown ts-code blocks.

#### Returns

`string`

#### Defined in

src/tsdoc/TsDocTag.ts:28
