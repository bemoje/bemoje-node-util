[@bemoje/node-util](/docs/md/index.md) / IPriorityQueueOptions

# Interface: IPriorityQueueOptions

## Hierarchy

- [`IQueueAddOptions`](/docs/md/interfaces/IQueueAddOptions.md)

  ↳ **`IPriorityQueueOptions`**

## Table of contents

### Properties

- [priority](/docs/md/interfaces/IPriorityQueueOptions.md#priority)
- [signal](/docs/md/interfaces/IPriorityQueueOptions.md#signal)
- [throwOnTimeout](/docs/md/interfaces/IPriorityQueueOptions.md#throwontimeout)
- [timeout](/docs/md/interfaces/IPriorityQueueOptions.md#timeout)

## Properties

### priority

• `Optional` **priority**: `number`

Priority of operation. Operations with greater priority will be scheduled first.

**`Default`**

```ts
0
```

#### Overrides

[IQueueAddOptions](/docs/md/interfaces/IQueueAddOptions.md).[priority](/docs/md/interfaces/IQueueAddOptions.md#priority)

#### Defined in

[src/datastructures/types/IPriorityQueueOptions.ts:4](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/types/IPriorityQueueOptions.ts#L4)

___

### signal

• `Optional` `Readonly` **signal**: `AbortSignal`

#### Inherited from

[IQueueAddOptions](/docs/md/interfaces/IQueueAddOptions.md).[signal](/docs/md/interfaces/IQueueAddOptions.md#signal)

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

[IQueueAddOptions](/docs/md/interfaces/IQueueAddOptions.md).[throwOnTimeout](/docs/md/interfaces/IQueueAddOptions.md#throwontimeout)

#### Defined in

[src/async/types/ITimeoutOptions.ts:11](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/async/types/ITimeoutOptions.ts#L11)

___

### timeout

• `Optional` **timeout**: `number`

Per-operation timeout in milliseconds. Operations fulfill once `timeout` elapses if they haven't already.

#### Inherited from

[IQueueAddOptions](/docs/md/interfaces/IQueueAddOptions.md).[timeout](/docs/md/interfaces/IQueueAddOptions.md#timeout)

#### Defined in

[src/async/types/ITimeoutOptions.ts:5](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/async/types/ITimeoutOptions.ts#L5)
