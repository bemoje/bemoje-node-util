[@bemoje/node-util](/docs/md/index.md) / IQueueAddOptions

# Interface: IQueueAddOptions

## Hierarchy

- [`ITaskOptions`](/docs/md/interfaces/ITaskOptions.md)

- [`ITimeoutOptions`](/docs/md/interfaces/ITimeoutOptions.md)

  ↳ **`IQueueAddOptions`**

  ↳↳ [`IPriorityQueueOptions`](/docs/md/interfaces/IPriorityQueueOptions.md)

## Table of contents

### Properties

- [priority](/docs/md/interfaces/IQueueAddOptions.md#priority)
- [signal](/docs/md/interfaces/IQueueAddOptions.md#signal)
- [throwOnTimeout](/docs/md/interfaces/IQueueAddOptions.md#throwontimeout)
- [timeout](/docs/md/interfaces/IQueueAddOptions.md#timeout)

## Properties

### priority

• `Optional` `Readonly` **priority**: `number`

Priority of operation. Operations with greater priority will be scheduled first.

**`Default`**

```ts
0
```

#### Defined in

[src/async/types/IQueueAddOptions.ts:9](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/async/types/IQueueAddOptions.ts#L9)

___

### signal

• `Optional` `Readonly` **signal**: `AbortSignal`

#### Inherited from

[ITaskOptions](/docs/md/interfaces/ITaskOptions.md).[signal](/docs/md/interfaces/ITaskOptions.md#signal)

#### Defined in

[src/async/types/ITaskOptions.ts:2](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/async/types/ITaskOptions.ts#L2)

___

### throwOnTimeout

• `Optional` **throwOnTimeout**: `boolean`

Whether or not a timeout is considered an exception.

**`Default`**

```ts
false
```

#### Inherited from

[ITimeoutOptions](/docs/md/interfaces/ITimeoutOptions.md).[throwOnTimeout](/docs/md/interfaces/ITimeoutOptions.md#throwontimeout)

#### Defined in

[src/async/types/ITimeoutOptions.ts:11](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/async/types/ITimeoutOptions.ts#L11)

___

### timeout

• `Optional` **timeout**: `number`

Per-operation timeout in milliseconds. Operations fulfill once `timeout` elapses if they haven't already.

#### Inherited from

[ITimeoutOptions](/docs/md/interfaces/ITimeoutOptions.md).[timeout](/docs/md/interfaces/ITimeoutOptions.md#timeout)

#### Defined in

[src/async/types/ITimeoutOptions.ts:5](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/async/types/ITimeoutOptions.ts#L5)
