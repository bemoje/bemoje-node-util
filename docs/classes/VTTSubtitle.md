[@bemoje/node-util](/docs/index.md) / VTTSubtitle

# Class: VTTSubtitle

Represents a single subtitle in the VTT format.

## Hierarchy

- [`_AbstractSubtitle`](/docs/classes/AbstractSubtitle.md)

  ↳ **`VTTSubtitle`**

## Table of contents

### Constructors

- [constructor](/docs/classes/VTTSubtitle.md#constructor)

### Properties

- [interval](/docs/classes/VTTSubtitle.md#interval)
- [text](/docs/classes/VTTSubtitle.md#text)

### Methods

- [toString](/docs/classes/VTTSubtitle.md#tostring)

## Constructors

### constructor

• **new VTTSubtitle**(`interval`, `text`)

Creates a new VTTSubtitle instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `interval` | [`TimeInterval`](/docs/classes/TimeInterval.md) | The time interval of the subtitle. |
| `text` | `string` | The text of the subtitle. |

#### Overrides

[_AbstractSubtitle](/docs/classes/AbstractSubtitle.md).[constructor](/docs/classes/AbstractSubtitle.md#constructor)

#### Defined in

[src/parse/subtitles/VTTSubtitle.ts:13](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/parse/subtitles/VTTSubtitle.ts#L13)

## Properties

### interval

• **interval**: [`TimeInterval`](/docs/classes/TimeInterval.md)

The time interval of the subtitle.

#### Inherited from

[_AbstractSubtitle](/docs/classes/AbstractSubtitle.md).[interval](/docs/classes/AbstractSubtitle.md#interval)

#### Defined in

[src/parse/subtitles/_AbstractSubtitle.ts:10](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/parse/subtitles/_AbstractSubtitle.ts#L10)

___

### text

• **text**: `string`

The text of the subtitle.

#### Inherited from

[_AbstractSubtitle](/docs/classes/AbstractSubtitle.md).[text](/docs/classes/AbstractSubtitle.md#text)

#### Defined in

[src/parse/subtitles/_AbstractSubtitle.ts:15](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/parse/subtitles/_AbstractSubtitle.ts#L15)

## Methods

### toString

▸ **toString**(): `string`

Renders the subtitle as a string in the VTT format.

#### Returns

`string`

#### Defined in

[src/parse/subtitles/VTTSubtitle.ts:20](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/parse/subtitles/VTTSubtitle.ts#L20)
