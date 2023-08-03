[@bemoje/node-util](/docs/index.md) / IPromiseQueueOptions

# Interface: IPromiseQueueOptions<QueueType, QueueOptions\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `QueueType` | extends [`IQueue`](/docs/interfaces/IQueue.md)<[`RunFunction`](/docs/index.md#runfunction), `QueueOptions`\> |
| `QueueOptions` | extends [`IQueueAddOptions`](/docs/interfaces/IQueueAddOptions.md) |

## Hierarchy

- [`ITimeoutOptions`](/docs/interfaces/ITimeoutOptions.md)

  ↳ **`IPromiseQueueOptions`**

## Table of contents

### Properties

- [autoStart](/docs/interfaces/IPromiseQueueOptions.md#autostart)
- [carryoverConcurrencyCount](/docs/interfaces/IPromiseQueueOptions.md#carryoverconcurrencycount)
- [concurrency](/docs/interfaces/IPromiseQueueOptions.md#concurrency)
- [interval](/docs/interfaces/IPromiseQueueOptions.md#interval)
- [intervalCap](/docs/interfaces/IPromiseQueueOptions.md#intervalcap)
- [queueClass](/docs/interfaces/IPromiseQueueOptions.md#queueclass)
- [throwOnTimeout](/docs/interfaces/IPromiseQueueOptions.md#throwontimeout)
- [timeout](/docs/interfaces/IPromiseQueueOptions.md#timeout)

## Properties

### autoStart

• `Optional` `Readonly` **autoStart**: `boolean`

Whether queue tasks within concurrency limit, are auto-executed as soon as they're added.

**`Default`**

```ts
true
```

#### Defined in

src/async/types/IPromiseQueueOptions.ts:21

___

### carryoverConcurrencyCount

• `Optional` `Readonly` **carryoverConcurrencyCount**: `boolean`

Whether the task must finish in the given interval or will be carried over into the next interval count.

**`Default`**

```ts
false
```

#### Defined in

src/async/types/IPromiseQueueOptions.ts:46

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

src/async/types/IPromiseQueueOptions.ts:15

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

src/async/types/IPromiseQueueOptions.ts:40

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

src/async/types/IPromiseQueueOptions.ts:33

___

### queueClass

• `Optional` `Readonly` **queueClass**: () => `QueueType`

#### Type declaration

• **new queueClass**()

Class with a `enqueue` and `dequeue` method, and a `size` getter. See the [Custom QueueClass](https://github.com/sindresorhus/p-queue#custom-queueclass) section.

#### Defined in

src/async/types/IPromiseQueueOptions.ts:26

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

[src/async/types/ITimeoutOptions.ts:11](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/async/types/ITimeoutOptions.ts#L11)

___

### timeout

• `Optional` **timeout**: `number`

Per-operation timeout in milliseconds. Operations fulfill once `timeout` elapses if they haven't already.

#### Inherited from

[ITimeoutOptions](/docs/interfaces/ITimeoutOptions.md).[timeout](/docs/interfaces/ITimeoutOptions.md#timeout)

#### Defined in

[src/async/types/ITimeoutOptions.ts:5](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/async/types/ITimeoutOptions.ts#L5)
