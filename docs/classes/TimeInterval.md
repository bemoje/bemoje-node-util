[@bemoje/node-util](/docs/index.md) / TimeInterval

# Class: TimeInterval

Represents a time interval.

## Table of contents

### Constructors

- [constructor](/docs/classes/TimeInterval.md#constructor)

### Properties

- [end](/docs/classes/TimeInterval.md#end)
- [start](/docs/classes/TimeInterval.md#start)

### Methods

- [getDuration](/docs/classes/TimeInterval.md#getduration)
- [toString](/docs/classes/TimeInterval.md#tostring)

## Constructors

### constructor

• **new TimeInterval**(`start`, `end`)

Creates a new TimeInterval instance.

**`Throws`**

if the start time is after the end time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | [`Time`](/docs/classes/Time.md) | The start of the interval. |
| `end` | [`Time`](/docs/classes/Time.md) | The end of the interval. |

#### Defined in

src/time/TimeInterval.ts:23

## Properties

### end

• **end**: [`Time`](/docs/classes/Time.md)

The end of the interval.

#### Defined in

src/time/TimeInterval.ts:15

___

### start

• **start**: [`Time`](/docs/classes/Time.md)

The start of the interval.

#### Defined in

src/time/TimeInterval.ts:10

## Methods

### getDuration

▸ **getDuration**(): [`Time`](/docs/classes/Time.md)

Returns the duration of the interval as a new Time instance.

#### Returns

[`Time`](/docs/classes/Time.md)

#### Defined in

src/time/TimeInterval.ts:32

___

### toString

▸ **toString**(`delimiter?`, `msDelimiter?`): `string`

Returns the interval as a string, rendering both the start and end times.
Renders in the format "HH:MM:SS.mmm --> HH:MM:SS.mmm", with the default delimiter being " --> ".

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `delimiter` | `string` | `' --> '` | The delimiter between the start and end times. |
| `msDelimiter` | `string` | `'.'` | The delimiter between seconds and milliseconds. |

#### Returns

`string`

#### Defined in

src/time/TimeInterval.ts:42
