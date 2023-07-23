[@bemoje/node-util](/docs/index.md) / ITimeoutOptions

# Interface: ITimeoutOptions

## Hierarchy

- **`ITimeoutOptions`**

  ↳ [`IPQueueOptions`](/docs/interfaces/IPQueueOptions.md)

  ↳ [`IQueueAddOptions`](/docs/interfaces/IQueueAddOptions.md)

## Table of contents

### Properties

- [throwOnTimeout](/docs/interfaces/ITimeoutOptions.md#throwontimeout)
- [timeout](/docs/interfaces/ITimeoutOptions.md#timeout)

## Properties

### throwOnTimeout

• `Optional` **throwOnTimeout**: `boolean`

Whether or not a timeout is considered an exception.

**`Default`**

```ts
false
```

#### Defined in

[src/async/types/ITimeoutOptions.ts:11](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/async/types/ITimeoutOptions.ts#L11)

___

### timeout

• `Optional` **timeout**: `number`

Per-operation timeout in milliseconds. Operations fulfill once `timeout` elapses if they haven't already.

#### Defined in

[src/async/types/ITimeoutOptions.ts:5](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/async/types/ITimeoutOptions.ts#L5)
