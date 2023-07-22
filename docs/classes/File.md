[@bemoje/node-util](/docs/index.md) / File

# Class: File

Represents a file in the filesystem.

## Table of contents

### Constructors

- [constructor](/docs/classes/File.md#constructor)

### Properties

- [filepath](/docs/classes/File.md#filepath)

### Accessors

- [dirname](/docs/classes/File.md#dirname)
- [dirpath](/docs/classes/File.md#dirpath)
- [fileExtension](/docs/classes/File.md#fileextension)
- [filename](/docs/classes/File.md#filename)
- [relative](/docs/classes/File.md#relative)

## Constructors

### constructor

• **new File**(`filepath`)

Creates a new SourceFile instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filepath` | `string` | The absolute path to the source file. |

#### Defined in

[src/filesystem/File.ts:17](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/filesystem/File.ts#L17)

## Properties

### filepath

• `Readonly` **filepath**: `string`

The aboslute path to the source file.

#### Defined in

[src/filesystem/File.ts:11](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/filesystem/File.ts#L11)

## Accessors

### dirname

• `get` **dirname**(): `string`

The name of the directory of the source file.

#### Returns

`string`

#### Defined in

[src/filesystem/File.ts:39](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/filesystem/File.ts#L39)

___

### dirpath

• `get` **dirpath**(): `string`

The absolute path to the directory of the source file.

#### Returns

`string`

#### Defined in

[src/filesystem/File.ts:46](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/filesystem/File.ts#L46)

___

### fileExtension

• `get` **fileExtension**(): `string`

The file extension of the source file.

#### Returns

`string`

The file extension, including the leading dot.

#### Defined in

[src/filesystem/File.ts:25](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/filesystem/File.ts#L25)

___

### filename

• `get` **filename**(): `string`

The filename including the file extension.

#### Returns

`string`

#### Defined in

[src/filesystem/File.ts:32](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/filesystem/File.ts#L32)

___

### relative

• `get` **relative**(): `string`

The relative path to the source file from the working directory.

#### Returns

`string`

#### Defined in

[src/filesystem/File.ts:53](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/filesystem/File.ts#L53)
