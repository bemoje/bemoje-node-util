[@bemoje/node-util](/docs/index.md) / VTTSubtitles

# Class: VTTSubtitles

A collection of VTTSubtitles.

## Table of contents

### Constructors

- [constructor](/docs/classes/VTTSubtitles.md#constructor)

### Properties

- [subtitles](/docs/classes/VTTSubtitles.md#subtitles)

### Methods

- [toString](/docs/classes/VTTSubtitles.md#tostring)

## Constructors

### constructor

• **new VTTSubtitles**(`vtt`)

Create a new VTTSubtitles instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vtt` | `string` | A correctly formatted VTT subtitles string. |

#### Defined in

[src/parse/subtitles/VTTSubtitles.ts:18](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/parse/subtitles/VTTSubtitles.ts#L18)

## Properties

### subtitles

• **subtitles**: [`VTTSubtitle`](/docs/classes/VTTSubtitle.md)[]

The SRTSubtitle instances.

#### Defined in

[src/parse/subtitles/VTTSubtitles.ts:12](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/parse/subtitles/VTTSubtitles.ts#L12)

## Methods

### toString

▸ **toString**(): `string`

Returns the subtitles to a VTT format string.

#### Returns

`string`

#### Defined in

[src/parse/subtitles/VTTSubtitles.ts:33](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/parse/subtitles/VTTSubtitles.ts#L33)
