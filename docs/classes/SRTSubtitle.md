[@bemoje/node-util](/docs/index.md) / SRTSubtitle

# Class: SRTSubtitle

Represents a single subtitle in the SRT format.

## Hierarchy

- [`_AbstractSubtitle`](/docs/classes/AbstractSubtitle.md)

  ↳ **`SRTSubtitle`**

## Table of contents

### Constructors

- [constructor](/docs/classes/SRTSubtitle.md#constructor)

### Properties

- [interval](/docs/classes/SRTSubtitle.md#interval)
- [text](/docs/classes/SRTSubtitle.md#text)

### Methods

- [toString](/docs/classes/SRTSubtitle.md#tostring)

## Constructors

### constructor

• **new SRTSubtitle**(`interval`, `text`)

Creates a new SRTSubtitle instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `interval` | [`TimeInterval`](/docs/classes/TimeInterval.md) | The time interval of the subtitle. |
| `text` | `string` | The text of the subtitle. |

#### Overrides

[_AbstractSubtitle](/docs/classes/AbstractSubtitle.md).[constructor](/docs/classes/AbstractSubtitle.md#constructor)

#### Defined in

[src/parse/subtitles/SRTSubtitle.ts:13](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/parse/subtitles/SRTSubtitle.ts#L13)

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

Renders the subtitle as a string in the SRT format.

#### Returns

`string`

#### Defined in

[src/parse/subtitles/SRTSubtitle.ts:20](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/parse/subtitles/SRTSubtitle.ts#L20)
