[@bemoje/node-util](/docs/index.md) / Logger

# Class: Logger

This class is a utility for logging messages to the console and/or a log file.
It supports different log levels ('NONE', 'DEBUG', 'INFO', 'WARN', 'ERROR') for both console and file logging.
It also supports color formatting for console messages. Different colors can be specified for each log level.

## Table of contents

### Constructors

- [constructor](/docs/classes/Logger.md#constructor)

### Properties

- [consoleLogLevel](/docs/classes/Logger.md#consoleloglevel)
- [debugColor](/docs/classes/Logger.md#debugcolor)
- [debugToConsole](/docs/classes/Logger.md#debugtoconsole)
- [debugToFile](/docs/classes/Logger.md#debugtofile)
- [errorColor](/docs/classes/Logger.md#errorcolor)
- [errorToConsole](/docs/classes/Logger.md#errortoconsole)
- [errorToFile](/docs/classes/Logger.md#errortofile)
- [fileLogLevel](/docs/classes/Logger.md#fileloglevel)
- [infoColor](/docs/classes/Logger.md#infocolor)
- [infoToConsole](/docs/classes/Logger.md#infotoconsole)
- [infoToFile](/docs/classes/Logger.md#infotofile)
- [logDirpath](/docs/classes/Logger.md#logdirpath)
- [logFilepath](/docs/classes/Logger.md#logfilepath)
- [warnColor](/docs/classes/Logger.md#warncolor)
- [warnToConsole](/docs/classes/Logger.md#warntoconsole)
- [warnToFile](/docs/classes/Logger.md#warntofile)
- [optionDefaults](/docs/classes/Logger.md#optiondefaults)

### Methods

- [\_logToConsole](/docs/classes/Logger.md#_logtoconsole)
- [\_logToFile](/docs/classes/Logger.md#_logtofile)
- [dashline](/docs/classes/Logger.md#dashline)
- [debug](/docs/classes/Logger.md#debug)
- [deleteLogFiles](/docs/classes/Logger.md#deletelogfiles)
- [error](/docs/classes/Logger.md#error)
- [getProperties](/docs/classes/Logger.md#getproperties)
- [info](/docs/classes/Logger.md#info)
- [initialize](/docs/classes/Logger.md#initialize)
- [logEmitterEvents](/docs/classes/Logger.md#logemitterevents)
- [newline](/docs/classes/Logger.md#newline)
- [task](/docs/classes/Logger.md#task)
- [taskSync](/docs/classes/Logger.md#tasksync)
- [warn](/docs/classes/Logger.md#warn)

## Constructors

### constructor

• **new Logger**(`options?`)

Create a new instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`ILoggerOptions`](/docs/interfaces/ILoggerOptions.md) | Options for creating a new instance. |

#### Defined in

src/node/logger/Logger.ts:124

## Properties

### consoleLogLevel

• `Protected` **consoleLogLevel**: [`LogLevel`](/docs/enums/LogLevel.md)

The log level for console output. Can be 'NONE', 'DEBUG', 'INFO', 'WARN', or 'ERROR'.

#### Defined in

src/node/logger/Logger.ts:29

___

### debugColor

• `Protected` **debugColor**: `Format`

Color format for debug messages when logged to console.

#### Defined in

src/node/logger/Logger.ts:89

___

### debugToConsole

• `Protected` **debugToConsole**: `boolean`

Whether to debug info to console.

#### Defined in

src/node/logger/Logger.ts:34

___

### debugToFile

• `Protected` **debugToFile**: `boolean`

Whether to log debug info to the logfile.

#### Defined in

src/node/logger/Logger.ts:59

___

### errorColor

• `Protected` **errorColor**: `Format`

Color format for error messages when logged to console.

#### Defined in

src/node/logger/Logger.ts:104

___

### errorToConsole

• `Protected` **errorToConsole**: `boolean`

Whether to log errors to console.

#### Defined in

src/node/logger/Logger.ts:49

___

### errorToFile

• `Protected` **errorToFile**: `boolean`

Whether to log errors to the logfile.

#### Defined in

src/node/logger/Logger.ts:74

___

### fileLogLevel

• `Protected` **fileLogLevel**: [`LogLevel`](/docs/enums/LogLevel.md)

The log level for the logfile. Can be 'NONE', 'DEBUG', 'INFO', 'WARN', or 'ERROR'.

#### Defined in

src/node/logger/Logger.ts:54

___

### infoColor

• `Protected` **infoColor**: `Format`

Color format for info messages when logged to console.

#### Defined in

src/node/logger/Logger.ts:94

___

### infoToConsole

• `Protected` **infoToConsole**: `boolean`

Whether to log info to console.

#### Defined in

src/node/logger/Logger.ts:39

___

### infoToFile

• `Protected` **infoToFile**: `boolean`

Whether to log info to the logfile.

#### Defined in

src/node/logger/Logger.ts:64

___

### logDirpath

• `Protected` **logDirpath**: `string`

The directory path of the log file.

#### Defined in

src/node/logger/Logger.ts:79

___

### logFilepath

• `Protected` **logFilepath**: `string`

The filepath of the log file.

#### Defined in

src/node/logger/Logger.ts:84

___

### warnColor

• `Protected` **warnColor**: `Format`

Color format for warning messages when logged to console.

#### Defined in

src/node/logger/Logger.ts:99

___

### warnToConsole

• `Protected` **warnToConsole**: `boolean`

Whether to log warnings to console.

#### Defined in

src/node/logger/Logger.ts:44

___

### warnToFile

• `Protected` **warnToFile**: `boolean`

Whether to log warnings to the logfile.

#### Defined in

src/node/logger/Logger.ts:69

___

### optionDefaults

▪ `Static` **optionDefaults**: `Required`<[`ILoggerOptions`](/docs/interfaces/ILoggerOptions.md)\>

Default options for creating new instances.

#### Defined in

src/node/logger/Logger.ts:109

## Methods

### \_logToConsole

▸ **_logToConsole**<`T`\>(`loglevel`, `message`, `color`, `depth?`): `void`

Generic function for logging to console, used by the log-level specific functions.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `loglevel` | [`LogLevel`](/docs/enums/LogLevel.md) | The log level. |
| `message` | `T` | The message to print to console. |
| `color` | `Format` | A 'cli-color' module function to wrap the output-part of the string in color formatting. |
| `depth?` | ``null`` \| `number` | The depth to which to print object properties. |

#### Returns

`void`

#### Defined in

src/node/logger/Logger.ts:313

___

### \_logToFile

▸ **_logToFile**<`T`\>(`loglevel`, `message`): `void`

Write log entry to logfile

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `loglevel` | [`LogLevel`](/docs/enums/LogLevel.md) | The log level. |
| `message` | `T` | The message to print to console. |

#### Returns

`void`

#### Defined in

src/node/logger/Logger.ts:296

___

### dashline

▸ **dashline**(`numLines?`, `width?`): `void`

Prints a given number of lines with dashes to the console.

**`Remarks`**

This is not logged to the log file.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `numLines` | `number` | `1` | The number of dash lines to print. |
| `width` | `number` | `80` | The number of dashes per line. |

#### Returns

`void`

#### Defined in

src/node/logger/Logger.ts:260

___

### debug

▸ **debug**<`T`\>(`message`, `depth?`): `T`

Logs a debug message the console.

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

src/node/logger/Logger.ts:170

___

### deleteLogFiles

▸ **deleteLogFiles**(`deleteFilesOlderThan?`): `void`

Delete log files older than the specified number of days.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `deleteFilesOlderThan` | `number` | `0` | The maximum age of log files in days. If not specified, no files will be deleted. |

#### Returns

`void`

#### Defined in

src/node/logger/Logger.ts:235

___

### error

▸ **error**<`T`\>(`message`, `depth?`): `T`

Logs a error message to the console.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `T` | The Error object or message to print to console. |
| `depth?` | ``null`` \| `number` | - |

#### Returns

`T`

#### Defined in

src/node/logger/Logger.ts:201

___

### getProperties

▸ **getProperties**(): `Object`

Get the current instance's properties.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `consoleLogLevel` | [`LogLevel`](/docs/enums/LogLevel.md) |
| `debugColor` | `Format` |
| `debugToConsole` | `boolean` |
| `debugToFile` | `boolean` |
| `errorColor` | `Format` |
| `errorToConsole` | `boolean` |
| `errorToFile` | `boolean` |
| `fileLogLevel` | [`LogLevel`](/docs/enums/LogLevel.md) |
| `infoColor` | `Format` |
| `infoToConsole` | `boolean` |
| `infoToFile` | `boolean` |
| `logDirpath` | `string` |
| `logFilepath` | `string` |
| `warnColor` | `Format` |
| `warnToConsole` | `boolean` |
| `warnToFile` | `boolean` |

#### Defined in

src/node/logger/Logger.ts:330

___

### info

▸ **info**<`T`\>(`message`, `depth?`): `T`

Logs an info message the console.

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

src/node/logger/Logger.ts:181

___

### initialize

▸ **initialize**(`options?`): `void`

Re-initialize the current instance with the specified options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ILoggerOptions`](/docs/interfaces/ILoggerOptions.md) |

#### Returns

`void`

#### Defined in

src/node/logger/Logger.ts:161

___

### logEmitterEvents

▸ **logEmitterEvents**(`emitter`, `options?`): `void`

This function is used to print the events emitted by an EventEmitter.

**`Remarks`**

This function allows you to see what events are being emitted by an EventEmitter at runtime.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The EventEmitter that is emitting the events. |
| `options` | [`ILogEmitterEventsOptions`](/docs/interfaces/ILogEmitterEventsOptions.md) | Options for logging the events. |

#### Returns

`void`

#### Defined in

src/node/logger/Logger.ts:273

___

### newline

▸ **newline**(`numLines?`): `void`

Prints a given number of blank lines to the console.

**`Remarks`**

This is not logged to the log file.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `numLines` | `number` | `10` | The number of blank lines to print. |

#### Returns

`void`

#### Defined in

src/node/logger/Logger.ts:250

___

### task

▸ **task**<`T`\>(`description`, `task`): `Promise`<`T`\>

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

src/node/logger/Logger.ts:211

___

### taskSync

▸ **taskSync**<`T`\>(`description`, `task`): `T`

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

src/node/logger/Logger.ts:223

___

### warn

▸ **warn**<`T`\>(`message`, `depth?`): `T`

Logs a warning message to the console.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `T` | The message to print to console. |
| `depth?` | ``null`` \| `number` | - |

#### Returns

`T`

#### Defined in

src/node/logger/Logger.ts:191
