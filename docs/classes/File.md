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
- [exportName](/docs/classes/File.md#exportname)
- [fileExtension](/docs/classes/File.md#fileextension)
- [filename](/docs/classes/File.md#filename)
- [relative](/docs/classes/File.md#relative)

### Methods

- [fileExists](/docs/classes/File.md#fileexists)

## Constructors

### constructor

• **new File**(`filepath`)

Creates a new SourceFile instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filepath` | `string` | The absolute path to the source file. |

#### Defined in

src/filesystem/File.ts:18

## Properties

### filepath

• `Readonly` **filepath**: `string`

The aboslute path to the source file.

#### Defined in

src/filesystem/File.ts:12

## Accessors

### dirname

• `get` **dirname**(): `string`

The name of the directory of the source file.

#### Returns

`string`

#### Defined in

src/filesystem/File.ts:46

___

### dirpath

• `get` **dirpath**(): `string`

The absolute path to the directory of the source file.

#### Returns

`string`

#### Defined in

src/filesystem/File.ts:53

___

### exportName

• `get` **exportName**(): `string`

The name of the source file's exported member.

#### Returns

`string`

#### Defined in

src/filesystem/File.ts:32

___

### fileExtension

• `get` **fileExtension**(): `string`

The file extension of the source file.

#### Returns

`string`

#### Defined in

src/filesystem/File.ts:25

___

### filename

• `get` **filename**(): `string`

The name of the source file.

#### Returns

`string`

#### Defined in

src/filesystem/File.ts:39

___

### relative

• `get` **relative**(): `string`

The relative path to the source file from the working directory.

#### Returns

`string`

#### Defined in

src/filesystem/File.ts:60

## Methods

### fileExists

▸ **fileExists**(): `boolean`

Returns whether the source file exists.

#### Returns

`boolean`

#### Defined in

src/filesystem/File.ts:67
