[@bemoje/node-util](/docs/index.md) / TsDoc

# Class: TsDoc

## Table of contents

### Constructors

- [constructor](/docs/classes/TsDoc.md#constructor)

### Properties

- [multi](/docs/classes/TsDoc.md#multi)
- [namedMulti](/docs/classes/TsDoc.md#namedmulti)
- [paramOrder](/docs/classes/TsDoc.md#paramorder)
- [single](/docs/classes/TsDoc.md#single)
- [tagOrder](/docs/classes/TsDoc.md#tagorder)
- [defaultTagOrder](/docs/classes/TsDoc.md#defaulttagorder)

### Accessors

- [isEmpty](/docs/classes/TsDoc.md#isempty)
- [size](/docs/classes/TsDoc.md#size)

### Methods

- [addBlockComment](/docs/classes/TsDoc.md#addblockcomment)
- [addTag](/docs/classes/TsDoc.md#addtag)
- [assign](/docs/classes/TsDoc.md#assign)
- [clear](/docs/classes/TsDoc.md#clear)
- [clone](/docs/classes/TsDoc.md#clone)
- [getTagOrder](/docs/classes/TsDoc.md#gettagorder)
- [iterateTags](/docs/classes/TsDoc.md#iteratetags)
- [removeTags](/docs/classes/TsDoc.md#removetags)
- [render](/docs/classes/TsDoc.md#render)
- [reorderParams](/docs/classes/TsDoc.md#reorderparams)
- [toString](/docs/classes/TsDoc.md#tostring)

## Constructors

### constructor

• **new TsDoc**(`code?`, `options?`)

Creates a new TSDoc comment.

**`Throws`**

If the provided code is not a valid TSDoc block comment.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code?` | `string` | The TSDoc block comment soruce code. |
| `options?` | [`TsDocOptions`](/docs/interfaces/TsDocOptions.md) | Options for the TSDoc instance. |

#### Defined in

[src/tsdoc/TsDoc.ts:63](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/tsdoc/TsDoc.ts#L63)

## Properties

### multi

• `Readonly` **multi**: `Map`<`string`, [`TsDocTag`](/docs/classes/TsDocTag.md)[]\>

Multi tags are tags that can appear multiple times in a TSDoc comment, but each instance must have unique description text.

#### Defined in

[src/tsdoc/TsDoc.ts:50](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/tsdoc/TsDoc.ts#L50)

___

### namedMulti

• `Readonly` **namedMulti**: `Map`<`string`, `Map`<`string`, [`TsDocTag`](/docs/classes/TsDocTag.md)\>\>

Named multi tags are tags that can appear multiple times in a TSDoc comment, but each instance must have a unique name.

#### Defined in

[src/tsdoc/TsDoc.ts:55](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/tsdoc/TsDoc.ts#L55)

___

### paramOrder

• `Protected` `Optional` **paramOrder**: `Set`<`string`\>

Can be used to specify the order in which param-tags are rendered in the TSDoc comment.

#### Defined in

[src/tsdoc/TsDoc.ts:40](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/tsdoc/TsDoc.ts#L40)

___

### single

• `Readonly` **single**: `Map`<`string`, [`TsDocTag`](/docs/classes/TsDocTag.md)\>

Single tags are tags that can only appear once in a TSDoc comment.

#### Defined in

[src/tsdoc/TsDoc.ts:45](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/tsdoc/TsDoc.ts#L45)

___

### tagOrder

• `Protected` `Optional` **tagOrder**: `string`[]

The order in which tags are rendered in the TSDoc comment.
Empty strings means spacing between tags when iterating and rendering.

#### Defined in

[src/tsdoc/TsDoc.ts:35](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/tsdoc/TsDoc.ts#L35)

___

### defaultTagOrder

▪ `Static` **defaultTagOrder**: `string`[]

The default order in which tags are rendered in the TSDoc comment.

#### Defined in

[src/tsdoc/TsDoc.ts:17](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/tsdoc/TsDoc.ts#L17)

## Accessors

### isEmpty

• `get` **isEmpty**(): `boolean`

Returns whether the TsDoc instance has no tags.

#### Returns

`boolean`

#### Defined in

[src/tsdoc/TsDoc.ts:114](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/tsdoc/TsDoc.ts#L114)

___

### size

• `get` **size**(): `number`

The number of tags in the TsDoc instance.

#### Returns

`number`

#### Defined in

[src/tsdoc/TsDoc.ts:104](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/tsdoc/TsDoc.ts#L104)

## Methods

### addBlockComment

▸ **addBlockComment**(`code`): [`TsDoc`](/docs/classes/TsDoc.md)

Parses a TSDoc block comment and adds the tags to the TsDoc instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | The TSDoc block comment soruce code. |

#### Returns

[`TsDoc`](/docs/classes/TsDoc.md)

#### Defined in

[src/tsdoc/TsDoc.ts:75](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/tsdoc/TsDoc.ts#L75)

___

### addTag

▸ **addTag**(`tsDocTag`): [`TsDoc`](/docs/classes/TsDoc.md)

Adds a TsDocTag to the TsDoc instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tsDocTag` | [`TsDocTag`](/docs/classes/TsDocTag.md) | The TsDocTag to add. |

#### Returns

[`TsDoc`](/docs/classes/TsDoc.md)

#### Defined in

[src/tsdoc/TsDoc.ts:133](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/tsdoc/TsDoc.ts#L133)

___

### assign

▸ **assign**(`tsdoc`): [`TsDoc`](/docs/classes/TsDoc.md)

Merge tags from another TsDoc instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tsdoc` | [`TsDoc`](/docs/classes/TsDoc.md) |

#### Returns

[`TsDoc`](/docs/classes/TsDoc.md)

#### Defined in

[src/tsdoc/TsDoc.ts:202](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/tsdoc/TsDoc.ts#L202)

___

### clear

▸ **clear**(): [`TsDoc`](/docs/classes/TsDoc.md)

Deletes all tags.
The tagOrder and paramOrder properties are not affected.

#### Returns

[`TsDoc`](/docs/classes/TsDoc.md)

#### Defined in

[src/tsdoc/TsDoc.ts:122](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/tsdoc/TsDoc.ts#L122)

___

### clone

▸ **clone**(): [`TsDoc`](/docs/classes/TsDoc.md)

Returns a deep clone of this instance.

#### Returns

[`TsDoc`](/docs/classes/TsDoc.md)

#### Defined in

[src/tsdoc/TsDoc.ts:195](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/tsdoc/TsDoc.ts#L195)

___

### getTagOrder

▸ **getTagOrder**(): `string`[]

Returns the order in which tags are rendered in the TSDoc comment.
If no tagOrder was specified in the constructor options, TsDoc.defaultTagOrder is used.

#### Returns

`string`[]

#### Defined in

[src/tsdoc/TsDoc.ts:244](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/tsdoc/TsDoc.ts#L244)

___

### iterateTags

▸ **iterateTags**(`withSpaces?`): `Generator`<``""`` \| [`TsDocTag`](/docs/classes/TsDocTag.md), `any`, `unknown`\>

Iterate tags in the order specified in the ´tagOrder´ and ´paramOrder´ properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `withSpaces?` | `boolean` | Whether to yield empty strings encountered in ´tagOrder´. Empty strings are used to add spacing between tags. |

#### Returns

`Generator`<``""`` \| [`TsDocTag`](/docs/classes/TsDocTag.md), `any`, `unknown`\>

#### Defined in

[src/tsdoc/TsDoc.ts:175](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/tsdoc/TsDoc.ts#L175)

___

### removeTags

▸ **removeTags**(`tag`, `name?`): [`TsDoc`](/docs/classes/TsDoc.md)

Deletes one or all TsDocTag matching the provided tag.
If name is not provided, all tags matching the provided tag are deleted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | The tag to remove. |
| `name?` | `string` | The name of the tag to remove. |

#### Returns

[`TsDoc`](/docs/classes/TsDoc.md)

#### Defined in

[src/tsdoc/TsDoc.ts:157](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/tsdoc/TsDoc.ts#L157)

___

### render

▸ **render**(): `string`

Renders a TSDoc block comment string with all tags in the order specified by the tagOrder property.

#### Returns

`string`

#### Defined in

[src/tsdoc/TsDoc.ts:228](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/tsdoc/TsDoc.ts#L228)

___

### reorderParams

▸ **reorderParams**(): [`TsDoc`](/docs/classes/TsDoc.md)

Sort the param tags according to the order specified in the paramOrder property.

#### Returns

[`TsDoc`](/docs/classes/TsDoc.md)

#### Defined in

[src/tsdoc/TsDoc.ts:212](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/tsdoc/TsDoc.ts#L212)

___

### toString

▸ **toString**(): `string`

Renders a TSDoc block comment string with all tags in the order specified by the tagOrder property.

**`Remarks`**

Identical to the `render` method.

#### Returns

`string`

#### Defined in

[src/tsdoc/TsDoc.ts:236](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/tsdoc/TsDoc.ts#L236)
