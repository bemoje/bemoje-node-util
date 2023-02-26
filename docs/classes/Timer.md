[@bemoje/bemoje-node-util](../README.md) / [Exports](../modules.md) / Timer

# Class: Timer

For recording time passed since constructor was invoked and until the stop() method i called.

## Table of contents

### Constructors

- [constructor](Timer.md#constructor)

### Properties

- [t0](Timer.md#t0)

### Methods

- [stop](Timer.md#stop)

## Constructors

### constructor

• **new Timer**()

#### Defined in

[src/libs/time.ts:10](https://github.com/bemoje/bemoje-node-util/blob/f58c8db/src/libs/time.ts#L10)

## Properties

### t0

• **t0**: `number`

The initial time

#### Defined in

[src/libs/time.ts:8](https://github.com/bemoje/bemoje-node-util/blob/f58c8db/src/libs/time.ts#L8)

## Methods

### stop

▸ **stop**(): `number`

Returns the time passed since constructor was invoked in milliseconds.

#### Returns

`number`

#### Defined in

[src/libs/time.ts:17](https://github.com/bemoje/bemoje-node-util/blob/f58c8db/src/libs/time.ts#L17)
