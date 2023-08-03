[@bemoje/node-util](/docs/index.md) / ILoggerOptions

# Interface: ILoggerOptions

## Table of contents

### Properties

- [consoleLogLevel](/docs/interfaces/ILoggerOptions.md#consoleloglevel)
- [debugColor](/docs/interfaces/ILoggerOptions.md#debugcolor)
- [deleteFilesOlderThan](/docs/interfaces/ILoggerOptions.md#deletefilesolderthan)
- [errorColor](/docs/interfaces/ILoggerOptions.md#errorcolor)
- [fileLogLevel](/docs/interfaces/ILoggerOptions.md#fileloglevel)
- [infoColor](/docs/interfaces/ILoggerOptions.md#infocolor)
- [logDirpath](/docs/interfaces/ILoggerOptions.md#logdirpath)
- [warnColor](/docs/interfaces/ILoggerOptions.md#warncolor)

## Properties

### consoleLogLevel

• `Optional` **consoleLogLevel**: [`LogLevel`](/docs/enums/LogLevel.md)

The log level for console output. Can be 'NONE', 'DEBUG', 'INFO', 'WARN', or 'ERROR'.

#### Defined in

src/node/logger/types/ILoggerOptions.ts:8

___

### debugColor

• `Optional` **debugColor**: `Format`

Color format for debug messages when logged to console.

#### Defined in

src/node/logger/types/ILoggerOptions.ts:28

___

### deleteFilesOlderThan

• `Optional` **deleteFilesOlderThan**: `number`

Max age of log files in days. If specified, existing log files older than this will be deleted.

#### Defined in

src/node/logger/types/ILoggerOptions.ts:23

___

### errorColor

• `Optional` **errorColor**: `Format`

Color format for error messages when logged to console.

#### Defined in

src/node/logger/types/ILoggerOptions.ts:43

___

### fileLogLevel

• `Optional` **fileLogLevel**: [`LogLevel`](/docs/enums/LogLevel.md)

The log level for the logfile. Can be 'NONE', 'DEBUG', 'INFO', 'WARN', or 'ERROR'.

#### Defined in

src/node/logger/types/ILoggerOptions.ts:13

___

### infoColor

• `Optional` **infoColor**: `Format`

Color format for info messages when logged to console.

#### Defined in

src/node/logger/types/ILoggerOptions.ts:33

___

### logDirpath

• `Optional` **logDirpath**: `string`

The directory path of the log files.

#### Defined in

src/node/logger/types/ILoggerOptions.ts:18

___

### warnColor

• `Optional` **warnColor**: `Format`

Color format for warning messages when logged to console.

#### Defined in

src/node/logger/types/ILoggerOptions.ts:38
