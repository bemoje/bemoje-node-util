[@bemoje/node-util](/docs/md/index.md) / TsDocTag

# Class: TsDocTag

A tag belonging to a TSDoc.
This does not follow the official TSDoc spec. It is a simplified version.

## Table of contents

### Constructors

- [constructor](/docs/md/classes/TsDocTag.md#constructor)

### Properties

- [description](/docs/md/classes/TsDocTag.md#description)
- [name](/docs/md/classes/TsDocTag.md#name)
- [tag](/docs/md/classes/TsDocTag.md#tag)

### Methods

- [toString](/docs/md/classes/TsDocTag.md#tostring)

## Constructors

### constructor

• **new TsDocTag**(`tag`, `name?`, `description?`)

**`Throws`**

on named tag missing name.

**`Throws`**

on unnamed tag missing description.

**`Throws`**

on unnamed tag trying to set name.

**`Throws`**

on invalid tag name.

**`Throws`**

on invalid name.

**`Throws`**

on invalid markdown code block for example tag.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `tag` | `string` | `undefined` | The kind of tag. Rules: - May only consist of letters a-z. - Certain tags are normalized to other synonymous tags. - Custom tag names are allowed as long as they follow the above rules. |
| `name` | `string` | `''` | The tag's name parameter. Rules: - Only used for named tags. - Must start with a letter. - May only contain word characters and ".". |
| `description` | `string`[] | `[]` | The tag's description. Rules: - Unnamed tags must have a description. - Example tags are formatted as markdown ts-code blocks. - Leading dash in the first line is normalized (removed). |

#### Defined in

[src/tsdoc/TsDocTag.ts:46](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/tsdoc/TsDocTag.ts#L46)

## Properties

### description

• **description**: `string`[]

The tag's description.

#### Defined in

[src/tsdoc/TsDocTag.ts:24](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/tsdoc/TsDocTag.ts#L24)

___

### name

• **name**: `string`

The tag's name parameter.

#### Defined in

[src/tsdoc/TsDocTag.ts:19](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/tsdoc/TsDocTag.ts#L19)

___

### tag

• **tag**: `string`

The kind of tag.

#### Defined in

[src/tsdoc/TsDocTag.ts:14](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/tsdoc/TsDocTag.ts#L14)

## Methods

### toString

▸ **toString**(): `string`

Renders the tag as a TSDoc string.

**`Remarks`**

Ensures that example tags are formatted as markdown ts-code blocks.

#### Returns

`string`

#### Defined in

[src/tsdoc/TsDocTag.ts:90](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/tsdoc/TsDocTag.ts#L90)
