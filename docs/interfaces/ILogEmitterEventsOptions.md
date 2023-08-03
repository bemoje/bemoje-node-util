[@bemoje/node-util](/docs/index.md) / ILogEmitterEventsOptions

# Interface: ILogEmitterEventsOptions

## Table of contents

### Properties

- [debug](/docs/interfaces/ILogEmitterEventsOptions.md#debug)
- [error](/docs/interfaces/ILogEmitterEventsOptions.md#error)
- [eventNamePrefix](/docs/interfaces/ILogEmitterEventsOptions.md#eventnameprefix)
- [info](/docs/interfaces/ILogEmitterEventsOptions.md#info)
- [warn](/docs/interfaces/ILogEmitterEventsOptions.md#warn)

## Properties

### debug

• `Optional` **debug**: `string`[]

The event names to log at debug level.

#### Defined in

src/node/logger/types/ILogEmitterEventsOptions.ts:5

___

### error

• `Optional` **error**: `string`[]

The event names to log at error level.

#### Defined in

src/node/logger/types/ILogEmitterEventsOptions.ts:20

___

### eventNamePrefix

• `Optional` **eventNamePrefix**: `string`

For example a class name, so that emitted events are displayed as className.eventName.

#### Defined in

src/node/logger/types/ILogEmitterEventsOptions.ts:25

___

### info

• `Optional` **info**: `string`[]

The event names to log at info level.

#### Defined in

src/node/logger/types/ILogEmitterEventsOptions.ts:10

___

### warn

• `Optional` **warn**: `string`[]

The event names to log at warn level.

#### Defined in

src/node/logger/types/ILogEmitterEventsOptions.ts:15
