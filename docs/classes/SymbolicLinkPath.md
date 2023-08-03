[@bemoje/node-util](/docs/index.md) / SymbolicLinkPath

# Class: SymbolicLinkPath

Extension class of AbstractFsObject, which extends the native String class, representing a path to a symbolic link.

**`See`**

AbstractFsPath

**`Remarks`**

This is a file that points to another file or directory. It's a reference or shortcut.
This class has no special methods or properties. It is only used to distinguish between different types of filesystem objects.

## Hierarchy

- [`AbstractFsPath`](/docs/classes/AbstractFsPath.md)

  ↳ **`SymbolicLinkPath`**

## Table of contents

### Constructors

- [constructor](/docs/classes/SymbolicLinkPath.md#constructor)

### Properties

- [length](/docs/classes/SymbolicLinkPath.md#length)

### Accessors

- [absolute](/docs/classes/SymbolicLinkPath.md#absolute)
- [base](/docs/classes/SymbolicLinkPath.md#base)
- [exists](/docs/classes/SymbolicLinkPath.md#exists)
- [isBlockDevicePath](/docs/classes/SymbolicLinkPath.md#isblockdevicepath)
- [isCharacterDevicePath](/docs/classes/SymbolicLinkPath.md#ischaracterdevicepath)
- [isDirectoryPath](/docs/classes/SymbolicLinkPath.md#isdirectorypath)
- [isFIFOPath](/docs/classes/SymbolicLinkPath.md#isfifopath)
- [isFilePath](/docs/classes/SymbolicLinkPath.md#isfilepath)
- [isSocketPath](/docs/classes/SymbolicLinkPath.md#issocketpath)
- [isSymbolicLinkPath](/docs/classes/SymbolicLinkPath.md#issymboliclinkpath)
- [name](/docs/classes/SymbolicLinkPath.md#name)
- [parentPath](/docs/classes/SymbolicLinkPath.md#parentpath)
- [relative](/docs/classes/SymbolicLinkPath.md#relative)
- [root](/docs/classes/SymbolicLinkPath.md#root)

### Methods

- [[iterator]](/docs/classes/SymbolicLinkPath.md#[iterator])
- [anchor](/docs/classes/SymbolicLinkPath.md#anchor)
- [at](/docs/classes/SymbolicLinkPath.md#at)
- [big](/docs/classes/SymbolicLinkPath.md#big)
- [blink](/docs/classes/SymbolicLinkPath.md#blink)
- [bold](/docs/classes/SymbolicLinkPath.md#bold)
- [charAt](/docs/classes/SymbolicLinkPath.md#charat)
- [charCodeAt](/docs/classes/SymbolicLinkPath.md#charcodeat)
- [codePointAt](/docs/classes/SymbolicLinkPath.md#codepointat)
- [concat](/docs/classes/SymbolicLinkPath.md#concat)
- [endsWith](/docs/classes/SymbolicLinkPath.md#endswith)
- [fixed](/docs/classes/SymbolicLinkPath.md#fixed)
- [fontcolor](/docs/classes/SymbolicLinkPath.md#fontcolor)
- [fontsize](/docs/classes/SymbolicLinkPath.md#fontsize)
- [includes](/docs/classes/SymbolicLinkPath.md#includes)
- [indexOf](/docs/classes/SymbolicLinkPath.md#indexof)
- [isBlockDevice](/docs/classes/SymbolicLinkPath.md#isblockdevice)
- [isCharacterDevice](/docs/classes/SymbolicLinkPath.md#ischaracterdevice)
- [isDirectory](/docs/classes/SymbolicLinkPath.md#isdirectory)
- [isFIFO](/docs/classes/SymbolicLinkPath.md#isfifo)
- [isFile](/docs/classes/SymbolicLinkPath.md#isfile)
- [isSocket](/docs/classes/SymbolicLinkPath.md#issocket)
- [isSymbolicLink](/docs/classes/SymbolicLinkPath.md#issymboliclink)
- [isValidWindowsPath](/docs/classes/SymbolicLinkPath.md#isvalidwindowspath)
- [italics](/docs/classes/SymbolicLinkPath.md#italics)
- [lastIndexOf](/docs/classes/SymbolicLinkPath.md#lastindexof)
- [link](/docs/classes/SymbolicLinkPath.md#link)
- [localeCompare](/docs/classes/SymbolicLinkPath.md#localecompare)
- [match](/docs/classes/SymbolicLinkPath.md#match)
- [matchAll](/docs/classes/SymbolicLinkPath.md#matchall)
- [normalize](/docs/classes/SymbolicLinkPath.md#normalize)
- [padEnd](/docs/classes/SymbolicLinkPath.md#padend)
- [padStart](/docs/classes/SymbolicLinkPath.md#padstart)
- [relativeToArray](/docs/classes/SymbolicLinkPath.md#relativetoarray)
- [repeat](/docs/classes/SymbolicLinkPath.md#repeat)
- [replace](/docs/classes/SymbolicLinkPath.md#replace)
- [replaceAll](/docs/classes/SymbolicLinkPath.md#replaceall)
- [search](/docs/classes/SymbolicLinkPath.md#search)
- [slice](/docs/classes/SymbolicLinkPath.md#slice)
- [small](/docs/classes/SymbolicLinkPath.md#small)
- [split](/docs/classes/SymbolicLinkPath.md#split)
- [startsWith](/docs/classes/SymbolicLinkPath.md#startswith)
- [stat](/docs/classes/SymbolicLinkPath.md#stat)
- [statSync](/docs/classes/SymbolicLinkPath.md#statsync)
- [strike](/docs/classes/SymbolicLinkPath.md#strike)
- [sub](/docs/classes/SymbolicLinkPath.md#sub)
- [substr](/docs/classes/SymbolicLinkPath.md#substr)
- [substring](/docs/classes/SymbolicLinkPath.md#substring)
- [sup](/docs/classes/SymbolicLinkPath.md#sup)
- [toArray](/docs/classes/SymbolicLinkPath.md#toarray)
- [toLocaleLowerCase](/docs/classes/SymbolicLinkPath.md#tolocalelowercase)
- [toLocaleUpperCase](/docs/classes/SymbolicLinkPath.md#tolocaleuppercase)
- [toLowerCase](/docs/classes/SymbolicLinkPath.md#tolowercase)
- [toString](/docs/classes/SymbolicLinkPath.md#tostring)
- [toUpperCase](/docs/classes/SymbolicLinkPath.md#touppercase)
- [trim](/docs/classes/SymbolicLinkPath.md#trim)
- [trimEnd](/docs/classes/SymbolicLinkPath.md#trimend)
- [trimLeft](/docs/classes/SymbolicLinkPath.md#trimleft)
- [trimRight](/docs/classes/SymbolicLinkPath.md#trimright)
- [trimStart](/docs/classes/SymbolicLinkPath.md#trimstart)
- [valueOf](/docs/classes/SymbolicLinkPath.md#valueof)
- [fromCharCode](/docs/classes/SymbolicLinkPath.md#fromcharcode)
- [fromCodePoint](/docs/classes/SymbolicLinkPath.md#fromcodepoint)
- [raw](/docs/classes/SymbolicLinkPath.md#raw)

## Constructors

### constructor

• **new SymbolicLinkPath**(`absolute`, `_unsafe?`)

Creates a new SymbolicLinkPath instance.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `absolute` | `string` | `undefined` | - |
| `_unsafe` | `boolean` | `false` | Used internally changing it is not recommended. If true, the path is not checked for whether it is actually absolute, it is not normalized and it is assumed to be of type string. |

#### Overrides

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[constructor](/docs/classes/AbstractFsPath.md#constructor)

#### Defined in

src/filesystem/path/core/SymbolicLinkPath.ts:16

## Properties

### length

• `Readonly` **length**: `number`

Returns the length of a String object.

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[length](/docs/classes/AbstractFsPath.md#length)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:517

## Accessors

### absolute

• `get` **absolute**(): `string`

#### Returns

`string`

#### Inherited from

AbstractFsPath.absolute

#### Defined in

src/filesystem/path/core/AbstractFsPath.ts:30

___

### base

• `get` **base**(): `string`

The file/directory name (for files, including the file extension).

#### Returns

`string`

#### Inherited from

AbstractFsPath.base

#### Defined in

src/filesystem/path/core/AbstractFsPath.ts:51

___

### exists

• `get` **exists**(): `boolean`

Returns whether the file exists.

#### Returns

`boolean`

#### Inherited from

AbstractFsPath.exists

#### Defined in

src/filesystem/path/core/AbstractFsPath.ts:72

___

### isBlockDevicePath

• `get` **isBlockDevicePath**(): `boolean`

Returns whether this is an BlockDevicePath instance.

#### Returns

`boolean`

#### Inherited from

AbstractFsPath.isBlockDevicePath

#### Defined in

src/filesystem/path/core/AbstractFsPath.ts:130

___

### isCharacterDevicePath

• `get` **isCharacterDevicePath**(): `boolean`

Returns whether this is an CharacterDevicePath instance.

#### Returns

`boolean`

#### Inherited from

AbstractFsPath.isCharacterDevicePath

#### Defined in

src/filesystem/path/core/AbstractFsPath.ts:144

___

### isDirectoryPath

• `get` **isDirectoryPath**(): `boolean`

Returns whether this is an DirectoryPath instance.

#### Returns

`boolean`

#### Inherited from

AbstractFsPath.isDirectoryPath

#### Defined in

src/filesystem/path/core/AbstractFsPath.ts:116

___

### isFIFOPath

• `get` **isFIFOPath**(): `boolean`

Returns whether this is an FIFOPath instance.

#### Returns

`boolean`

#### Inherited from

AbstractFsPath.isFIFOPath

#### Defined in

src/filesystem/path/core/AbstractFsPath.ts:151

___

### isFilePath

• `get` **isFilePath**(): `boolean`

Returns whether this is an FilePath instance.

#### Returns

`boolean`

#### Inherited from

AbstractFsPath.isFilePath

#### Defined in

src/filesystem/path/core/AbstractFsPath.ts:123

___

### isSocketPath

• `get` **isSocketPath**(): `boolean`

Returns whether this is an SocketPath instance.

#### Returns

`boolean`

#### Inherited from

AbstractFsPath.isSocketPath

#### Defined in

src/filesystem/path/core/AbstractFsPath.ts:158

___

### isSymbolicLinkPath

• `get` **isSymbolicLinkPath**(): `boolean`

Returns whether this is an SymbolcLinkPath instance.

#### Returns

`boolean`

#### Overrides

AbstractFsPath.isSymbolicLinkPath

#### Defined in

src/filesystem/path/core/SymbolicLinkPath.ts:23

___

### name

• `get` **name**(): `string`

The file/directory name (for files, not including the file extension).

#### Returns

`string`

#### Inherited from

AbstractFsPath.name

#### Defined in

src/filesystem/path/core/AbstractFsPath.ts:58

___

### parentPath

• `get` **parentPath**(): `string`

The absolute path to the directory of the filesystem object.

#### Returns

`string`

#### Inherited from

AbstractFsPath.parentPath

#### Defined in

src/filesystem/path/core/AbstractFsPath.ts:65

___

### relative

• `get` **relative**(): `string`

The relative path to the filesystem object from the working directory.

#### Returns

`string`

#### Inherited from

AbstractFsPath.relative

#### Defined in

src/filesystem/path/core/AbstractFsPath.ts:37

___

### root

• `get` **root**(): `string`

The root directory of the disk containing the filesystem object.

#### Returns

`string`

#### Inherited from

AbstractFsPath.root

#### Defined in

src/filesystem/path/core/AbstractFsPath.ts:44

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<`string`\>

Iterator

#### Returns

`IterableIterator`<`string`\>

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[[iterator]](/docs/classes/AbstractFsPath.md#[iterator])

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:238

___

### anchor

▸ **anchor**(`name`): `string`

Returns an `<a>` HTML anchor element and sets the name attribute to the text value

**`Deprecated`**

A legacy feature for browser compatibility

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[anchor](/docs/classes/AbstractFsPath.md#anchor)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:459

___

### at

▸ **at**(`index`): `undefined` \| `string`

Returns a new String consisting of the single UTF-16 code unit located at the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The zero-based index of the desired code unit. A negative index will count back from the last item. |

#### Returns

`undefined` \| `string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[at](/docs/classes/AbstractFsPath.md#at)

#### Defined in

node_modules/typescript/lib/lib.es2022.string.d.ts:24

___

### big

▸ **big**(): `string`

Returns a `<big>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[big](/docs/classes/AbstractFsPath.md#big)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:465

___

### blink

▸ **blink**(): `string`

Returns a `<blink>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[blink](/docs/classes/AbstractFsPath.md#blink)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:471

___

### bold

▸ **bold**(): `string`

Returns a `<b>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[bold](/docs/classes/AbstractFsPath.md#bold)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:477

___

### charAt

▸ **charAt**(`pos`): `string`

Returns the character at the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pos` | `number` | The zero-based index of the desired character. |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[charAt](/docs/classes/AbstractFsPath.md#charat)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:418

___

### charCodeAt

▸ **charCodeAt**(`index`): `number`

Returns the Unicode value of the character at the specified location.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The zero-based index of the desired character. If there is no character at the specified index, NaN is returned. |

#### Returns

`number`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[charCodeAt](/docs/classes/AbstractFsPath.md#charcodeat)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:424

___

### codePointAt

▸ **codePointAt**(`pos`): `undefined` \| `number`

Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
value of the UTF-16 encoded code point starting at the string element at position pos in
the String resulting from converting this object to a String.
If there is no element at that position, the result is undefined.
If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | `number` |

#### Returns

`undefined` \| `number`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[codePointAt](/docs/classes/AbstractFsPath.md#codepointat)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:406

___

### concat

▸ **concat**(`...strings`): `string`

Returns a string that contains the concatenation of two or more strings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...strings` | `string`[] | The strings to append to the end of the string. |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[concat](/docs/classes/AbstractFsPath.md#concat)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:430

___

### endsWith

▸ **endsWith**(`searchString`, `endPosition?`): `boolean`

Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
endPosition – length(this). Otherwise returns false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `searchString` | `string` |
| `endPosition?` | `number` |

#### Returns

`boolean`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[endsWith](/docs/classes/AbstractFsPath.md#endswith)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:422

___

### fixed

▸ **fixed**(): `string`

Returns a `<tt>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[fixed](/docs/classes/AbstractFsPath.md#fixed)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:483

___

### fontcolor

▸ **fontcolor**(`color`): `string`

Returns a `<font>` HTML element and sets the color attribute value

**`Deprecated`**

A legacy feature for browser compatibility

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[fontcolor](/docs/classes/AbstractFsPath.md#fontcolor)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:489

___

### fontsize

▸ **fontsize**(`size`): `string`

Returns a `<font>` HTML element and sets the size attribute value

**`Deprecated`**

A legacy feature for browser compatibility

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[fontsize](/docs/classes/AbstractFsPath.md#fontsize)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:495

▸ **fontsize**(`size`): `string`

Returns a `<font>` HTML element and sets the size attribute value

**`Deprecated`**

A legacy feature for browser compatibility

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `string` |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[fontsize](/docs/classes/AbstractFsPath.md#fontsize)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:501

___

### includes

▸ **includes**(`searchString`, `position?`): `boolean`

Returns true if searchString appears as a substring of the result of converting this
object to a String, at one or more positions that are
greater than or equal to position; otherwise, returns false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchString` | `string` | search string |
| `position?` | `number` | If position is undefined, 0 is assumed, so as to search all of the String. |

#### Returns

`boolean`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[includes](/docs/classes/AbstractFsPath.md#includes)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:415

___

### indexOf

▸ **indexOf**(`searchString`, `position?`): `number`

Returns the position of the first occurrence of a substring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchString` | `string` | The substring to search for in the string |
| `position?` | `number` | The index at which to begin searching the String object. If omitted, search starts at the beginning of the string. |

#### Returns

`number`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[indexOf](/docs/classes/AbstractFsPath.md#indexof)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:437

___

### isBlockDevice

▸ **isBlockDevice**(`stat?`): `boolean`

Returns whether this actually is a path to a block device.

**`Throws`**

If the path does not exist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stat` | `Stats` | The fs.Stats object to check. If not provided, it is retrieved synchronously. |

#### Returns

`boolean`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[isBlockDevice](/docs/classes/AbstractFsPath.md#isblockdevice)

#### Defined in

src/filesystem/path/core/AbstractFsPath.ts:185

___

### isCharacterDevice

▸ **isCharacterDevice**(`stat?`): `boolean`

Returns whether this actually is a path to a character device.

**`Throws`**

If the path does not exist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stat` | `Stats` | The fs.Stats object to check. If not provided, it is retrieved synchronously. |

#### Returns

`boolean`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[isCharacterDevice](/docs/classes/AbstractFsPath.md#ischaracterdevice)

#### Defined in

src/filesystem/path/core/AbstractFsPath.ts:203

___

### isDirectory

▸ **isDirectory**(`stat?`): `boolean`

Returns whether this actually is a path to a directory.

**`Throws`**

If the path does not exist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stat` | `Stats` | The fs.Stats object to check. If not provided, it is retrieved synchronously. |

#### Returns

`boolean`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[isDirectory](/docs/classes/AbstractFsPath.md#isdirectory)

#### Defined in

src/filesystem/path/core/AbstractFsPath.ts:167

___

### isFIFO

▸ **isFIFO**(`stat?`): `boolean`

Returns whether this actually is a path to a FIFO device.

**`Throws`**

If the path does not exist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stat` | `Stats` | The fs.Stats object to check. If not provided, it is retrieved synchronously. |

#### Returns

`boolean`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[isFIFO](/docs/classes/AbstractFsPath.md#isfifo)

#### Defined in

src/filesystem/path/core/AbstractFsPath.ts:212

___

### isFile

▸ **isFile**(`stat?`): `boolean`

Returns whether this actually is a path to a file.

**`Throws`**

If the path does not exist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stat` | `Stats` | The fs.Stats object to check. If not provided, it is retrieved synchronously. |

#### Returns

`boolean`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[isFile](/docs/classes/AbstractFsPath.md#isfile)

#### Defined in

src/filesystem/path/core/AbstractFsPath.ts:176

___

### isSocket

▸ **isSocket**(`stat?`): `boolean`

Returns whether this actually is a path to a socket.

**`Throws`**

If the path does not exist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stat` | `Stats` | The fs.Stats object to check. If not provided, it is retrieved synchronously. |

#### Returns

`boolean`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[isSocket](/docs/classes/AbstractFsPath.md#issocket)

#### Defined in

src/filesystem/path/core/AbstractFsPath.ts:221

___

### isSymbolicLink

▸ **isSymbolicLink**(`stat?`): `boolean`

Returns whether this actually is a path to a symbolic link.

**`Throws`**

If the path does not exist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stat` | `Stats` | The fs.Stats object to check. If not provided, it is retrieved synchronously. |

#### Returns

`boolean`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[isSymbolicLink](/docs/classes/AbstractFsPath.md#issymboliclink)

#### Defined in

src/filesystem/path/core/AbstractFsPath.ts:194

___

### isValidWindowsPath

▸ **isValidWindowsPath**(`extendedMaxLength?`): `boolean`

Returns whether the path is valid on Windows.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `extendedMaxLength` | `boolean` | `false` | If true, we are assuming the OS configuration allows paths to be up to 32767 characters long. |

#### Returns

`boolean`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[isValidWindowsPath](/docs/classes/AbstractFsPath.md#isvalidwindowspath)

#### Defined in

src/filesystem/path/core/AbstractFsPath.ts:94

___

### italics

▸ **italics**(): `string`

Returns an `<i>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[italics](/docs/classes/AbstractFsPath.md#italics)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:507

___

### lastIndexOf

▸ **lastIndexOf**(`searchString`, `position?`): `number`

Returns the last occurrence of a substring in the string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchString` | `string` | The substring to search for. |
| `position?` | `number` | The index at which to begin searching. If omitted, the search begins at the end of the string. |

#### Returns

`number`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[lastIndexOf](/docs/classes/AbstractFsPath.md#lastindexof)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:444

___

### link

▸ **link**(`url`): `string`

Returns an `<a>` HTML element and sets the href attribute value

**`Deprecated`**

A legacy feature for browser compatibility

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[link](/docs/classes/AbstractFsPath.md#link)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:513

___

### localeCompare

▸ **localeCompare**(`that`): `number`

Determines whether two strings are equivalent in the current locale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `that` | `string` | String to compare to target string |

#### Returns

`number`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[localeCompare](/docs/classes/AbstractFsPath.md#localecompare)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:450

▸ **localeCompare**(`that`, `locales?`, `options?`): `number`

Determines whether two strings are equivalent in the current or specified locale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `that` | `string` | String to compare to target string |
| `locales?` | `string` \| `string`[] | A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details. |
| `options?` | `CollatorOptions` | An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details. |

#### Returns

`number`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[localeCompare](/docs/classes/AbstractFsPath.md#localecompare)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4513

___

### match

▸ **match**(`regexp`): ``null`` \| `RegExpMatchArray`

Matches a string with a regular expression, and returns an array containing the results of that search.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regexp` | `string` \| `RegExp` | A variable name or string literal containing the regular expression pattern and flags. |

#### Returns

``null`` \| `RegExpMatchArray`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[match](/docs/classes/AbstractFsPath.md#match)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:456

▸ **match**(`matcher`): ``null`` \| `RegExpMatchArray`

Matches a string or an object that supports being matched against, and returns an array
containing the results of that search, or null if no matches are found.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matcher` | `Object` | An object that supports being matched against. |
| `matcher.[match]` | (`string`: `string`) => ``null`` \| `RegExpMatchArray` | - |

#### Returns

``null`` \| `RegExpMatchArray`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[match](/docs/classes/AbstractFsPath.md#match)

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:241

___

### matchAll

▸ **matchAll**(`regexp`): `IterableIterator`<`RegExpMatchArray`\>

Matches a string with a regular expression, and returns an iterable of matches
containing the results of that search.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regexp` | `RegExp` | A variable name or string literal containing the regular expression pattern and flags. |

#### Returns

`IterableIterator`<`RegExpMatchArray`\>

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[matchAll](/docs/classes/AbstractFsPath.md#matchall)

#### Defined in

node_modules/typescript/lib/lib.es2020.string.d.ts:27

___

### normalize

▸ **normalize**(`form`): `string`

Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `form` | ``"NFC"`` \| ``"NFD"`` \| ``"NFKC"`` \| ``"NFKD"`` | Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default is "NFC" |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[normalize](/docs/classes/AbstractFsPath.md#normalize)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:430

▸ **normalize**(`form?`): `string`

Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `form?` | `string` | Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default is "NFC" |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[normalize](/docs/classes/AbstractFsPath.md#normalize)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:438

___

### padEnd

▸ **padEnd**(`maxLength`, `fillString?`): `string`

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the end (right) of the current string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxLength` | `number` | The length of the resulting string once the current string has been padded. If this parameter is smaller than the current string's length, the current string will be returned as it is. |
| `fillString?` | `string` | The string to pad the current string with. If this string is too long, it will be truncated and the left-most part will be applied. The default value for this parameter is " " (U+0020). |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[padEnd](/docs/classes/AbstractFsPath.md#padend)

#### Defined in

node_modules/typescript/lib/lib.es2017.string.d.ts:44

___

### padStart

▸ **padStart**(`maxLength`, `fillString?`): `string`

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the start (left) of the current string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxLength` | `number` | The length of the resulting string once the current string has been padded. If this parameter is smaller than the current string's length, the current string will be returned as it is. |
| `fillString?` | `string` | The string to pad the current string with. If this string is too long, it will be truncated and the left-most part will be applied. The default value for this parameter is " " (U+0020). |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[padStart](/docs/classes/AbstractFsPath.md#padstart)

#### Defined in

node_modules/typescript/lib/lib.es2017.string.d.ts:31

___

### relativeToArray

▸ **relativeToArray**(): `string`[]

Split the relative path into an array of path segments.

**`See`**

relative

#### Returns

`string`[]

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[relativeToArray](/docs/classes/AbstractFsPath.md#relativetoarray)

#### Defined in

src/filesystem/path/core/AbstractFsPath.ts:109

___

### repeat

▸ **repeat**(`count`): `string`

Returns a String value that is made from count copies appended together. If count is 0,
the empty string is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | number of copies to append |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[repeat](/docs/classes/AbstractFsPath.md#repeat)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:445

___

### replace

▸ **replace**(`searchValue`, `replaceValue`): `string`

Replaces text in a string, using a regular expression or search string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchValue` | `string` \| `RegExp` | A string or regular expression to search for. |
| `replaceValue` | `string` | A string containing the text to replace. When the searchValue is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of searchValue is replaced. |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[replace](/docs/classes/AbstractFsPath.md#replace)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:463

▸ **replace**(`searchValue`, `replacer`): `string`

Replaces text in a string, using a regular expression or search string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchValue` | `string` \| `RegExp` | A string to search for. |
| `replacer` | (`substring`: `string`, ...`args`: `any`[]) => `string` | A function that returns the replacement text. |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[replace](/docs/classes/AbstractFsPath.md#replace)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:470

▸ **replace**(`searchValue`, `replaceValue`): `string`

Passes a string and replaceValue to the `[Symbol.replace]` method on searchValue. This method is expected to implement its own replacement algorithm.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchValue` | `Object` | An object that supports searching for and replacing matches within a string. |
| `searchValue.[replace]` | (`string`: `string`, `replaceValue`: `string`) => `string` | - |
| `replaceValue` | `string` | The replacement text. |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[replace](/docs/classes/AbstractFsPath.md#replace)

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:248

▸ **replace**(`searchValue`, `replacer`): `string`

Replaces text in a string, using an object that supports replacement within a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchValue` | `Object` | A object can search for and replace matches within a string. |
| `searchValue.[replace]` | (`string`: `string`, `replacer`: (`substring`: `string`, ...`args`: `any`[]) => `string`) => `string` | - |
| `replacer` | (`substring`: `string`, ...`args`: `any`[]) => `string` | A function that returns the replacement text. |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[replace](/docs/classes/AbstractFsPath.md#replace)

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:255

___

### replaceAll

▸ **replaceAll**(`searchValue`, `replaceValue`): `string`

Replace all instances of a substring in a string, using a regular expression or search string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchValue` | `string` \| `RegExp` | A string to search for. |
| `replaceValue` | `string` | A string containing the text to replace for every successful match of searchValue in this string. |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[replaceAll](/docs/classes/AbstractFsPath.md#replaceall)

#### Defined in

node_modules/typescript/lib/lib.es2021.string.d.ts:25

▸ **replaceAll**(`searchValue`, `replacer`): `string`

Replace all instances of a substring in a string, using a regular expression or search string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchValue` | `string` \| `RegExp` | A string to search for. |
| `replacer` | (`substring`: `string`, ...`args`: `any`[]) => `string` | A function that returns the replacement text. |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[replaceAll](/docs/classes/AbstractFsPath.md#replaceall)

#### Defined in

node_modules/typescript/lib/lib.es2021.string.d.ts:32

___

### search

▸ **search**(`regexp`): `number`

Finds the first substring match in a regular expression search.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regexp` | `string` \| `RegExp` | The regular expression pattern and applicable flags. |

#### Returns

`number`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[search](/docs/classes/AbstractFsPath.md#search)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:476

▸ **search**(`searcher`): `number`

Finds the first substring match in a regular expression search.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searcher` | `Object` | An object which supports searching within a string. |
| `searcher.[search]` | (`string`: `string`) => `number` | - |

#### Returns

`number`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[search](/docs/classes/AbstractFsPath.md#search)

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:261

___

### slice

▸ **slice**(`start?`, `end?`): `string`

Returns a section of a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The index to the beginning of the specified portion of stringObj. |
| `end?` | `number` | The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj. |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[slice](/docs/classes/AbstractFsPath.md#slice)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:484

___

### small

▸ **small**(): `string`

Returns a `<small>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[small](/docs/classes/AbstractFsPath.md#small)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:519

___

### split

▸ **split**(`separator`, `limit?`): `string`[]

Split a string into substrings using the specified separator and return them as an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator` | `string` \| `RegExp` | A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned. |
| `limit?` | `number` | A value used to limit the number of elements returned in the array. |

#### Returns

`string`[]

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[split](/docs/classes/AbstractFsPath.md#split)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:491

▸ **split**(`splitter`, `limit?`): `string`[]

Split a string into substrings using the specified separator and return them as an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `splitter` | `Object` | An object that can split a string. |
| `splitter.[split]` | (`string`: `string`, `limit?`: `number`) => `string`[] | - |
| `limit?` | `number` | A value used to limit the number of elements returned in the array. |

#### Returns

`string`[]

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[split](/docs/classes/AbstractFsPath.md#split)

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:268

___

### startsWith

▸ **startsWith**(`searchString`, `position?`): `boolean`

Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
position. Otherwise returns false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `searchString` | `string` |
| `position?` | `number` |

#### Returns

`boolean`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[startsWith](/docs/classes/AbstractFsPath.md#startswith)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:452

___

### stat

▸ **stat**(): `Promise`<`Stats`\>

Get fs.Stats asynchronously

#### Returns

`Promise`<`Stats`\>

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[stat](/docs/classes/AbstractFsPath.md#stat)

#### Defined in

src/filesystem/path/core/AbstractFsPath.ts:86

___

### statSync

▸ **statSync**(): `Stats`

Get fs.Stats synchronously

#### Returns

`Stats`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[statSync](/docs/classes/AbstractFsPath.md#statsync)

#### Defined in

src/filesystem/path/core/AbstractFsPath.ts:79

___

### strike

▸ **strike**(): `string`

Returns a `<strike>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[strike](/docs/classes/AbstractFsPath.md#strike)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:525

___

### sub

▸ **sub**(): `string`

Returns a `<sub>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[sub](/docs/classes/AbstractFsPath.md#sub)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:531

___

### substr

▸ **substr**(`from`, `length?`): `string`

Gets a substring beginning at the specified location and having the specified length.

**`Deprecated`**

A legacy feature for browser compatibility

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `number` | The starting position of the desired substring. The index of the first character in the string is zero. |
| `length?` | `number` | The number of characters to include in the returned substring. |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[substr](/docs/classes/AbstractFsPath.md#substr)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:526

___

### substring

▸ **substring**(`start`, `end?`): `string`

Returns the substring at the specified location within a String object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based index number indicating the beginning of the substring. |
| `end?` | `number` | Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end. If end is omitted, the characters from start through the end of the original string are returned. |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[substring](/docs/classes/AbstractFsPath.md#substring)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:499

___

### sup

▸ **sup**(): `string`

Returns a `<sup>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[sup](/docs/classes/AbstractFsPath.md#sup)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:537

___

### toArray

▸ **toArray**(): `string`[]

Split the absolute path into an array of path segments.

#### Returns

`string`[]

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[toArray](/docs/classes/AbstractFsPath.md#toarray)

#### Defined in

src/filesystem/path/core/AbstractFsPath.ts:101

___

### toLocaleLowerCase

▸ **toLocaleLowerCase**(`locales?`): `string`

Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.

#### Parameters

| Name | Type |
| :------ | :------ |
| `locales?` | `string` \| `string`[] |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[toLocaleLowerCase](/docs/classes/AbstractFsPath.md#tolocalelowercase)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:505

___

### toLocaleUpperCase

▸ **toLocaleUpperCase**(`locales?`): `string`

Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.

#### Parameters

| Name | Type |
| :------ | :------ |
| `locales?` | `string` \| `string`[] |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[toLocaleUpperCase](/docs/classes/AbstractFsPath.md#tolocaleuppercase)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:511

___

### toLowerCase

▸ **toLowerCase**(): `string`

Converts all the alphabetic characters in a string to lowercase.

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[toLowerCase](/docs/classes/AbstractFsPath.md#tolowercase)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:502

___

### toString

▸ **toString**(): `string`

Returns a string representation of a string.

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[toString](/docs/classes/AbstractFsPath.md#tostring)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:412

___

### toUpperCase

▸ **toUpperCase**(): `string`

Converts all the alphabetic characters in a string to uppercase.

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[toUpperCase](/docs/classes/AbstractFsPath.md#touppercase)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:508

___

### trim

▸ **trim**(): `string`

Removes the leading and trailing white space and line terminator characters from a string.

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[trim](/docs/classes/AbstractFsPath.md#trim)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:514

___

### trimEnd

▸ **trimEnd**(): `string`

Removes the trailing white space and line terminator characters from a string.

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[trimEnd](/docs/classes/AbstractFsPath.md#trimend)

#### Defined in

node_modules/typescript/lib/lib.es2019.string.d.ts:21

___

### trimLeft

▸ **trimLeft**(): `string`

Removes the leading white space and line terminator characters from a string.

**`Deprecated`**

A legacy feature for browser compatibility. Use `trimStart` instead

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[trimLeft](/docs/classes/AbstractFsPath.md#trimleft)

#### Defined in

node_modules/typescript/lib/lib.es2019.string.d.ts:30

___

### trimRight

▸ **trimRight**(): `string`

Removes the trailing white space and line terminator characters from a string.

**`Deprecated`**

A legacy feature for browser compatibility. Use `trimEnd` instead

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[trimRight](/docs/classes/AbstractFsPath.md#trimright)

#### Defined in

node_modules/typescript/lib/lib.es2019.string.d.ts:36

___

### trimStart

▸ **trimStart**(): `string`

Removes the leading white space and line terminator characters from a string.

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[trimStart](/docs/classes/AbstractFsPath.md#trimstart)

#### Defined in

node_modules/typescript/lib/lib.es2019.string.d.ts:24

___

### valueOf

▸ **valueOf**(): `string`

Returns the primitive value of the specified object.

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[valueOf](/docs/classes/AbstractFsPath.md#valueof)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:529

___

### fromCharCode

▸ `Static` **fromCharCode**(`...codes`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...codes` | `number`[] |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[fromCharCode](/docs/classes/AbstractFsPath.md#fromcharcode)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:538

___

### fromCodePoint

▸ `Static` **fromCodePoint**(`...codePoints`): `string`

Return the String value whose elements are, in order, the elements in the List elements.
If length is 0, the empty string is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...codePoints` | `number`[] |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[fromCodePoint](/docs/classes/AbstractFsPath.md#fromcodepoint)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:545

___

### raw

▸ `Static` **raw**(`template`, `...substitutions`): `string`

String.raw is usually used as a tag function of a Tagged Template String. When called as
such, the first argument will be a well formed template call site object and the rest
parameter will contain the substitution values. It can also be called directly, for example,
to interleave strings and values from your own tag function, and in this case the only thing
it needs from the first argument is the raw property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `template` | `Object` | A well-formed template string call site representation. |
| `template.raw` | readonly `string`[] \| `ArrayLike`<`string`\> | - |
| `...substitutions` | `any`[] | A set of substitution values. |

#### Returns

`string`

#### Inherited from

[AbstractFsPath](/docs/classes/AbstractFsPath.md).[raw](/docs/classes/AbstractFsPath.md#raw)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:556
