[@bemoje/node-util](/docs/index.md) / IPQueueOptions

# Interface: IPQueueOptions<QueueType, QueueOptions\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `QueueType` | extends [`IQueue`](/docs/interfaces/IQueue.md)<[`RunFunction`](/docs/index.md#runfunction), `QueueOptions`\> |
| `QueueOptions` | extends [`IQueueAddOptions`](/docs/interfaces/IQueueAddOptions.md) |

## Hierarchy

- [`ITimeoutOptions`](/docs/interfaces/ITimeoutOptions.md)

  ↳ **`IPQueueOptions`**

## Table of contents

### Properties

- [autoStart](/docs/interfaces/IPQueueOptions.md#autostart)
- [carryoverConcurrencyCount](/docs/interfaces/IPQueueOptions.md#carryoverconcurrencycount)
- [concurrency](/docs/interfaces/IPQueueOptions.md#concurrency)
- [interval](/docs/interfaces/IPQueueOptions.md#interval)
- [intervalCap](/docs/interfaces/IPQueueOptions.md#intervalcap)
- [queueClass](/docs/interfaces/IPQueueOptions.md#queueclass)
- [throwOnTimeout](/docs/interfaces/IPQueueOptions.md#throwontimeout)
- [timeout](/docs/interfaces/IPQueueOptions.md#timeout)

## Properties

### autoStart

• `Optional` `Readonly` **autoStart**: `boolean`

Whether queue tasks within concurrency limit, are auto-executed as soon as they're added.

**`Default`**

```ts
true
```

#### Defined in

src/async/types/IPQueueOptions.ts:19

___

### carryoverConcurrencyCount

• `Optional` `Readonly` **carryoverConcurrencyCount**: `boolean`

Whether the task must finish in the given interval or will be carried over into the next interval count.

**`Default`**

```ts
false
```

#### Defined in

src/async/types/IPQueueOptions.ts:44

___

### concurrency

• `Optional` `Readonly` **concurrency**: `number`

Concurrency limit.
Minimum: `1`.

**`Default`**

```ts
Infinity
```

#### Defined in

src/async/types/IPQueueOptions.ts:13

___

### interval

• `Optional` `Readonly` **interval**: `number`

The length of time in milliseconds before the interval count resets. Must be finite.
	Minimum: `0`.

**`Default`**

```ts
0
```

#### Defined in

src/async/types/IPQueueOptions.ts:38

___

### intervalCap

• `Optional` `Readonly` **intervalCap**: `number`

The max number of runs in the given interval of time.
Minimum: `1`.

**`Default`**

```ts
Infinity
```

#### Defined in

src/async/types/IPQueueOptions.ts:31

___

### queueClass

• `Optional` `Readonly` **queueClass**: () => `QueueType`

#### Type declaration

• **new queueClass**()

Class with a `enqueue` and `dequeue` method, and a `size` getter. See the [Custom QueueClass](https://github.com/sindresorhus/p-queue#custom-queueclass) section.

#### Defined in

src/async/types/IPQueueOptions.ts:24

___

### throwOnTimeout

• `Optional` **throwOnTimeout**: `boolean`

Whether or not a timeout is considered an exception.

**`Default`**

```ts
false
```

#### Inherited from

[ITimeoutOptions](/docs/interfaces/ITimeoutOptions.md).[throwOnTimeout](/docs/interfaces/ITimeoutOptions.md#throwontimeout)

#### Defined in

src/async/types/ITimeoutOptions.ts:11

___

### timeout

• `Optional` **timeout**: `number`

Per-operation timeout in milliseconds. Operations fulfill once `timeout` elapses if they haven't already.

#### Inherited from

[ITimeoutOptions](/docs/interfaces/ITimeoutOptions.md).[timeout](/docs/interfaces/ITimeoutOptions.md#timeout)

#### Defined in

src/async/types/ITimeoutOptions.ts:5
