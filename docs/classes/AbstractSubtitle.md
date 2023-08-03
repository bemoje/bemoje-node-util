[@bemoje/node-util](/docs/index.md) / \_AbstractSubtitle

# Class: \_AbstractSubtitle

Abstract class represents a subtitle of no specific format.

## Hierarchy

- **`_AbstractSubtitle`**

  ↳ [`SRTSubtitle`](/docs/classes/SRTSubtitle.md)

  ↳ [`VTTSubtitle`](/docs/classes/VTTSubtitle.md)

## Table of contents

### Constructors

- [constructor](/docs/classes/AbstractSubtitle.md#constructor)

### Properties

- [interval](/docs/classes/AbstractSubtitle.md#interval)
- [text](/docs/classes/AbstractSubtitle.md#text)

## Constructors

### constructor

• **new _AbstractSubtitle**(`interval`, `text`)

Creates a new Subtitle instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `interval` | [`TimeInterval`](/docs/classes/TimeInterval.md) | The time interval of the subtitle. |
| `text` | `string` | The text of the subtitle. |

#### Defined in

[src/parse/subtitles/_AbstractSubtitle.ts:22](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/parse/subtitles/_AbstractSubtitle.ts#L22)

## Properties

### interval

• **interval**: [`TimeInterval`](/docs/classes/TimeInterval.md)

The time interval of the subtitle.

#### Defined in

[src/parse/subtitles/_AbstractSubtitle.ts:10](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/parse/subtitles/_AbstractSubtitle.ts#L10)

___

### text

• **text**: `string`

The text of the subtitle.

#### Defined in

[src/parse/subtitles/_AbstractSubtitle.ts:15](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/parse/subtitles/_AbstractSubtitle.ts#L15)
