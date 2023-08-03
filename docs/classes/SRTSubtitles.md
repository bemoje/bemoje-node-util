[@bemoje/node-util](/docs/index.md) / SRTSubtitles

# Class: SRTSubtitles

A collection of SRTSubtitles.

## Table of contents

### Constructors

- [constructor](/docs/classes/SRTSubtitles.md#constructor)

### Properties

- [subtitles](/docs/classes/SRTSubtitles.md#subtitles)

### Methods

- [toString](/docs/classes/SRTSubtitles.md#tostring)

## Constructors

### constructor

• **new SRTSubtitles**(`string`)

Create a new SRTSubtitles instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | A correctly formatted SRT subtitles string. |

#### Defined in

[src/parse/subtitles/SRTSubtitles.ts:18](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/parse/subtitles/SRTSubtitles.ts#L18)

## Properties

### subtitles

• **subtitles**: [`SRTSubtitle`](/docs/classes/SRTSubtitle.md)[]

The SRTSubtitle instances.

#### Defined in

[src/parse/subtitles/SRTSubtitles.ts:12](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/parse/subtitles/SRTSubtitles.ts#L12)

## Methods

### toString

▸ **toString**(): `string`

Returns the subtitles as a string in the SRT format.

#### Returns

`string`

#### Defined in

[src/parse/subtitles/SRTSubtitles.ts:32](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/parse/subtitles/SRTSubtitles.ts#L32)
