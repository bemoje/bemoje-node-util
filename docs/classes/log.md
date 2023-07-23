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

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `numLines` | `number` | `10` | The number of blank lines to print. |

#### Returns

`void`

#### Defined in

[src/node/log.ts:66](https://github.com/bemoje/bemoje-node-util/blob/3683199/src/node/log.ts#L66)

___

### error

▸ `Static` **error**<`T`\>(`error`): `T`

Logs a (red) error message to the console.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `T` | The Error object or message to print to console. |

#### Returns

`T`

#### Defined in

[src/node/log.ts:31](https://github.com/bemoje/bemoje-node-util/blob/3683199/src/node/log.ts#L31)

___

### info

▸ `Static` **info**<`T`\>(`message`, `depth?`): `T`

Logs a (cyan) message the console.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `T` | The message to print to console. |
| `depth?` | ``null`` \| `number` | The depth to which to print object properties. |

#### Returns

`T`

#### Defined in

[src/node/log.ts:13](https://github.com/bemoje/bemoje-node-util/blob/3683199/src/node/log.ts#L13)

___

### line

▸ `Static` **line**(`numLines?`): `void`

Prints a light dotted line to the console.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `numLines` | `number` | `1` | The number of blank lines to print. |

#### Returns

`void`

#### Defined in

[src/node/log.ts:74](https://github.com/bemoje/bemoje-node-util/blob/3683199/src/node/log.ts#L74)

___

### logToConsole

▸ `Static` `Private` **logToConsole**<`T`\>(`level`, `message`, `timestampColor`, `levelColor`, `outputColor`, `depth?`): `void`

Generic function for logging to console, used by the log-level specific functions.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `level` | ``"ERROR"`` \| ``"WARN"`` \| ``"INFO"`` | The log level. |
| `message` | `T` | The message to print to console. |
| `timestampColor` | `Format` | A 'cli-color' module function to wrap the timestamp-part of the string in color formatting. |
| `levelColor` | `Format` | - |
| `outputColor` | `Format` | - |
| `depth?` | ``null`` \| `number` | The depth to which to print object properties. |

#### Returns

`void`

#### Defined in

[src/node/log.ts:91](https://github.com/bemoje/bemoje-node-util/blob/3683199/src/node/log.ts#L91)

___

### task

▸ `Static` **task**<`T`\>(`description`, `task`): `Promise`<`T`\>

Wrap an async function as a task, logging the start and end of the task.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | `string` | The description of the task. |
| `task` | () => `Promise`<`T`\> | - |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/node/log.ts:42](https://github.com/bemoje/bemoje-node-util/blob/3683199/src/node/log.ts#L42)

___

### taskSync

▸ `Static` **taskSync**<`T`\>(`description`, `task`): `T`

Wrap a synchronous function as a task, logging the start and end of the task.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | `string` | The description of the task. |
| `task` | () => `T` | - |

#### Returns

`T`

#### Defined in

[src/node/log.ts:54](https://github.com/bemoje/bemoje-node-util/blob/3683199/src/node/log.ts#L54)

___

### warn

▸ `Static` **warn**<`T`\>(`message`): `T`

Logs a (yellow) warning message to the console.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `T` | The message to print to console. |

#### Returns

`T`

#### Defined in

[src/node/log.ts:22](https://github.com/bemoje/bemoje-node-util/blob/3683199/src/node/log.ts#L22)
