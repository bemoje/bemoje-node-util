[@bemoje/node-util](/docs/index.md) / Timer

# Class: Timer

For recording time passed since constructor was invoked and until the stop() method i called.

## Table of contents

### Constructors

- [constructor](/docs/classes/Timer.md#constructor)

### Properties

- [t0](/docs/classes/Timer.md#t0)

### Methods

- [stop](/docs/classes/Timer.md#stop)

## Constructors

### constructor

• **new Timer**()

#### Defined in

[src/libs/performance/src/Timer.ts:10](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/performance/src/Timer.ts#L10)

## Properties

### t0

• **t0**: `number`

The initial time

#### Defined in

[src/libs/performance/src/Timer.ts:8](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/performance/src/Timer.ts#L8)

## Methods

### stop

▸ **stop**(): `number`

Returns the time passed since constructor was invoked in milliseconds.

#### Returns

`number`

#### Defined in

[src/libs/performance/src/Timer.ts:17](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/performance/src/Timer.ts#L17)
