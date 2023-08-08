[@bemoje/node-util](/docs/md/index.md) / ITimeoutOptions

# Interface: ITimeoutOptions

## Hierarchy

- **`ITimeoutOptions`**

  ↳ [`IPromiseQueueOptions`](/docs/md/interfaces/IPromiseQueueOptions.md)

  ↳ [`IQueueAddOptions`](/docs/md/interfaces/IQueueAddOptions.md)

## Table of contents

### Properties

- [throwOnTimeout](/docs/md/interfaces/ITimeoutOptions.md#throwontimeout)
- [timeout](/docs/md/interfaces/ITimeoutOptions.md#timeout)

## Properties

### throwOnTimeout

• `Optional` **throwOnTimeout**: `boolean`

Whether or not a timeout is considered an exception.

**`Default`**

```ts
false
```

#### Defined in

[src/async/types/ITimeoutOptions.ts:11](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/async/types/ITimeoutOptions.ts#L11)

___

### timeout

• `Optional` **timeout**: `number`

Per-operation timeout in milliseconds. Operations fulfill once `timeout` elapses if they haven't already.

#### Defined in

[src/async/types/ITimeoutOptions.ts:5](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/async/types/ITimeoutOptions.ts#L5)
