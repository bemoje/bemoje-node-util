[@bemoje/node-util](/docs/index.md) / log

# Class: log

A simple logging utility.

## Table of contents

### Constructors

- [constructor](/docs/classes/log.md#constructor)

### Methods

- [clear](/docs/classes/log.md#clear)
- [error](/docs/classes/log.md#error)
- [info](/docs/classes/log.md#info)
- [line](/docs/classes/log.md#line)
- [logToConsole](/docs/classes/log.md#logtoconsole)
- [task](/docs/classes/log.md#task)
- [taskSync](/docs/classes/log.md#tasksync)
- [warn](/docs/classes/log.md#warn)

## Constructors

### constructor

• **new log**()

## Methods

### clear

▸ `Static` **clear**(`numLines?`): `void`

Clears the console by printing a number of blank lines.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `numLines` | `number` | `10` |

#### Returns

`void`

#### Defined in

[src/node/log.ts:59](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/node/log.ts#L59)

___

### error

▸ `Static` **error**<`T`\>(`error`): `T`

Logs a (red) error message to the console.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `T` |

#### Returns

`T`

#### Defined in

[src/node/log.ts:27](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/node/log.ts#L27)

___

### info

▸ `Static` **info**<`T`\>(`message`, `depth?`): `T`

Logs a (cyan) message the console.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `T` |
| `depth?` | ``null`` \| `number` |

#### Returns

`T`

#### Defined in

[src/node/log.ts:11](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/node/log.ts#L11)

___

### line

▸ `Static` **line**(`numLines?`): `void`

Prints a light dotted line to the console.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `numLines` | `number` | `1` |

#### Returns

`void`

#### Defined in

[src/node/log.ts:66](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/node/log.ts#L66)

___

### logToConsole

▸ `Static` `Private` **logToConsole**<`T`\>(`level`, `message`, `timestampColor`, `levelColor`, `outputColor`, `depth?`): `void`

Generic function for logging to console, used by the log-level specific functions.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `string` |
| `message` | `T` |
| `timestampColor` | `Format` |
| `levelColor` | `Format` |
| `outputColor` | `Format` |
| `depth?` | ``null`` \| `number` |

#### Returns

`void`

#### Defined in

[src/node/log.ts:77](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/node/log.ts#L77)

___

### task

▸ `Static` **task**<`T`\>(`description`, `task`): `Promise`<`T`\>

Wrap an async function as a task, logging the start and end of the task.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `task` | () => `Promise`<`T`\> |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/node/log.ts:37](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/node/log.ts#L37)

___

### taskSync

▸ `Static` **taskSync**<`T`\>(`description`, `task`): `T`

Wrap a synchronous function as a task, logging the start and end of the task.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `task` | () => `T` |

#### Returns

`T`

#### Defined in

[src/node/log.ts:48](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/node/log.ts#L48)

___

### warn

▸ `Static` **warn**<`T`\>(`message`): `T`

Logs a (yellow) warning message to the console.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `T` |

#### Returns

`T`

#### Defined in

[src/node/log.ts:19](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/node/log.ts#L19)
