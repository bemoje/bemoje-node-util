[@bemoje/node-util](/docs/index.md) / IPriorityQueueOptions

# Interface: IPriorityQueueOptions

## Hierarchy

- [`IQueueAddOptions`](/docs/interfaces/IQueueAddOptions.md)

  ↳ **`IPriorityQueueOptions`**

## Table of contents

### Properties

- [priority](/docs/interfaces/IPriorityQueueOptions.md#priority)
- [signal](/docs/interfaces/IPriorityQueueOptions.md#signal)
- [throwOnTimeout](/docs/interfaces/IPriorityQueueOptions.md#throwontimeout)
- [timeout](/docs/interfaces/IPriorityQueueOptions.md#timeout)

## Properties

### priority

• `Optional` **priority**: `number`

Priority of operation. Operations with greater priority will be scheduled first.

**`Default`**

```ts
0
```

#### Overrides

[IQueueAddOptions](/docs/interfaces/IQueueAddOptions.md).[priority](/docs/interfaces/IQueueAddOptions.md#priority)

#### Defined in

src/datastructures/types/IPriorityQueueOptions.ts:4

___

### signal

• `Optional` `Readonly` **signal**: `AbortSignal`

#### Inherited from

[IQueueAddOptions](/docs/interfaces/IQueueAddOptions.md).[signal](/docs/interfaces/IQueueAddOptions.md#signal)

#### Defined in

src/async/types/ITaskOptions.ts:2

___

### throwOnTimeout

• `Optional` **throwOnTimeout**: `boolean`

Whether or not a timeout is considered an exception.

**`Default`**

```ts
false
```

#### Inherited from

[IQueueAddOptions](/docs/interfaces/IQueueAddOptions.md).[throwOnTimeout](/docs/interfaces/IQueueAddOptions.md#throwontimeout)

#### Defined in

src/async/types/ITimeoutOptions.ts:11

___

### timeout

• `Optional` **timeout**: `number`

Per-operation timeout in milliseconds. Operations fulfill once `timeout` elapses if they haven't already.

#### Inherited from

[IQueueAddOptions](/docs/interfaces/IQueueAddOptions.md).[timeout](/docs/interfaces/IQueueAddOptions.md#timeout)

#### Defined in

src/async/types/ITimeoutOptions.ts:5
