[@bemoje/node-util](../README.md) / BemojeString

# Class: BemojeString

A String class extension with extra features.

## Hierarchy

- `String`

  ↳ **`BemojeString`**

## Table of contents

### Constructors

- [constructor](BemojeString.md#constructor)

### Properties

- [length](BemojeString.md#length)

### Accessors

- [\_](BemojeString.md#_)
- [string](BemojeString.md#string)
- [[species]](BemojeString.md#[species])

### Methods

- [[iterator]](BemojeString.md#[iterator])
- [anchor](BemojeString.md#anchor)
- [at](BemojeString.md#at)
- [big](BemojeString.md#big)
- [blink](BemojeString.md#blink)
- [bold](BemojeString.md#bold)
- [charAt](BemojeString.md#charat)
- [charCodeAt](BemojeString.md#charcodeat)
- [codePointAt](BemojeString.md#codepointat)
- [concat](BemojeString.md#concat)
- [countCharOccurances](BemojeString.md#countcharoccurances)
- [countChars](BemojeString.md#countchars)
- [endsWith](BemojeString.md#endswith)
- [fixed](BemojeString.md#fixed)
- [fontcolor](BemojeString.md#fontcolor)
- [fontsize](BemojeString.md#fontsize)
- [includes](BemojeString.md#includes)
- [indexOf](BemojeString.md#indexof)
- [isLowerCase](BemojeString.md#islowercase)
- [isUpperCase](BemojeString.md#isuppercase)
- [italics](BemojeString.md#italics)
- [lastIndexOf](BemojeString.md#lastindexof)
- [linesRemoveEmpty](BemojeString.md#linesremoveempty)
- [linesTrimLeft](BemojeString.md#linestrimleft)
- [linesTrimRight](BemojeString.md#linestrimright)
- [link](BemojeString.md#link)
- [localeCompare](BemojeString.md#localecompare)
- [match](BemojeString.md#match)
- [matchAll](BemojeString.md#matchall)
- [normalize](BemojeString.md#normalize)
- [padEnd](BemojeString.md#padend)
- [padStart](BemojeString.md#padstart)
- [prettifyMinifiedCode](BemojeString.md#prettifyminifiedcode)
- [removeDuplicateChars](BemojeString.md#removeduplicatechars)
- [repeat](BemojeString.md#repeat)
- [replace](BemojeString.md#replace)
- [replaceAll](BemojeString.md#replaceall)
- [search](BemojeString.md#search)
- [slice](BemojeString.md#slice)
- [small](BemojeString.md#small)
- [sortChars](BemojeString.md#sortchars)
- [split](BemojeString.md#split)
- [splitCamelCase](BemojeString.md#splitcamelcase)
- [startsWith](BemojeString.md#startswith)
- [strike](BemojeString.md#strike)
- [sub](BemojeString.md#sub)
- [substr](BemojeString.md#substr)
- [substring](BemojeString.md#substring)
- [sup](BemojeString.md#sup)
- [toCharCodes](BemojeString.md#tocharcodes)
- [toCharSet](BemojeString.md#tocharset)
- [toLocaleLowerCase](BemojeString.md#tolocalelowercase)
- [toLocaleUpperCase](BemojeString.md#tolocaleuppercase)
- [toLowerCase](BemojeString.md#tolowercase)
- [toSentences](BemojeString.md#tosentences)
- [toString](BemojeString.md#tostring)
- [toUpperCase](BemojeString.md#touppercase)
- [toWords](BemojeString.md#towords)
- [trim](BemojeString.md#trim)
- [trimEnd](BemojeString.md#trimend)
- [trimLeft](BemojeString.md#trimleft)
- [trimRight](BemojeString.md#trimright)
- [trimStart](BemojeString.md#trimstart)
- [unwrap](BemojeString.md#unwrap)
- [valueOf](BemojeString.md#valueof)
- [wrapBetween](BemojeString.md#wrapbetween)
- [wrapIn](BemojeString.md#wrapin)
- [wrapInAngleBrackets](BemojeString.md#wrapinanglebrackets)
- [wrapInBraces](BemojeString.md#wrapinbraces)
- [wrapInBrackets](BemojeString.md#wrapinbrackets)
- [wrapInDoubleQuotes](BemojeString.md#wrapindoublequotes)
- [wrapInParenthesis](BemojeString.md#wrapinparenthesis)
- [wrapInSingleQuotes](BemojeString.md#wrapinsinglequotes)
- [fromCharCode](BemojeString.md#fromcharcode)
- [fromCodePoint](BemojeString.md#fromcodepoint)
- [raw](BemojeString.md#raw)

## Constructors

### constructor

• **new BemojeString**(`thing?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `thing?` | `any` |

#### Overrides

String.constructor

#### Defined in

src/libs/string/src/BemojeString.ts:37

## Properties

### length

• `Readonly` **length**: `number`

Returns the length of a String object.

#### Inherited from

String.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:503

## Accessors

### \_

• `get` **_**(): `string`

#### Returns

`string`

#### Defined in

src/libs/string/src/BemojeString.ts:45

___

### string

• `get` **string**(): `string`

#### Returns

`string`

#### Defined in

src/libs/string/src/BemojeString.ts:41

___

### [species]

• `Static` `get` **[species]**(): `StringConstructor`

#### Returns

`StringConstructor`

#### Defined in

src/libs/string/src/BemojeString.ts:32

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<`string`\>

Iterator

#### Returns

`IterableIterator`<`string`\>

#### Inherited from

String.\_\_@iterator@87

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:240

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

String.anchor

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:461

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

String.at

#### Defined in

node_modules/typescript/lib/lib.es2022.string.d.ts:26

___

### big

▸ **big**(): `string`

Returns a `<big>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

String.big

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:467

___

### blink

▸ **blink**(): `string`

Returns a `<blink>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

String.blink

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:473

___

### bold

▸ **bold**(): `string`

Returns a `<b>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

String.bold

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:479

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

String.charAt

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:404

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

String.charCodeAt

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:410

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

String.codePointAt

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:408

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

String.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:416

___

### countCharOccurances

▸ **countCharOccurances**(`char`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `char` | `string` |

#### Returns

`number`

#### Defined in

src/libs/string/src/BemojeString.ts:49

___

### countChars

▸ **countChars**(): `Map`<`string`, `number`\>

#### Returns

`Map`<`string`, `number`\>

#### Defined in

src/libs/string/src/BemojeString.ts:52

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

String.endsWith

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:424

___

### fixed

▸ **fixed**(): `string`

Returns a `<tt>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

String.fixed

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:485

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

String.fontcolor

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:491

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

String.fontsize

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:497

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

String.fontsize

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:503

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

String.includes

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:417

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

String.indexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:423

___

### isLowerCase

▸ **isLowerCase**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/libs/string/src/BemojeString.ts:55

___

### isUpperCase

▸ **isUpperCase**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/libs/string/src/BemojeString.ts:58

___

### italics

▸ **italics**(): `string`

Returns an `<i>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

String.italics

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:509

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

String.lastIndexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:430

___

### linesRemoveEmpty

▸ **linesRemoveEmpty**(): [`BemojeString`](BemojeString.md)

#### Returns

[`BemojeString`](BemojeString.md)

#### Defined in

src/libs/string/src/BemojeString.ts:61

___

### linesTrimLeft

▸ **linesTrimLeft**(): [`BemojeString`](BemojeString.md)

#### Returns

[`BemojeString`](BemojeString.md)

#### Defined in

src/libs/string/src/BemojeString.ts:64

___

### linesTrimRight

▸ **linesTrimRight**(): [`BemojeString`](BemojeString.md)

#### Returns

[`BemojeString`](BemojeString.md)

#### Defined in

src/libs/string/src/BemojeString.ts:67

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

String.link

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:515

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

String.localeCompare

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:436

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

String.localeCompare

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4494

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

String.match

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:442

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

String.match

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:239

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

String.matchAll

#### Defined in

node_modules/typescript/lib/lib.es2020.string.d.ts:29

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

String.normalize

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:432

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

String.normalize

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:440

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

String.padEnd

#### Defined in

node_modules/typescript/lib/lib.es2017.string.d.ts:46

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

String.padStart

#### Defined in

node_modules/typescript/lib/lib.es2017.string.d.ts:33

___

### prettifyMinifiedCode

▸ **prettifyMinifiedCode**(`indent?`): [`BemojeString`](BemojeString.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `indent` | `string` | `''` |

#### Returns

[`BemojeString`](BemojeString.md)

#### Defined in

src/libs/string/src/BemojeString.ts:70

___

### removeDuplicateChars

▸ **removeDuplicateChars**(): [`BemojeString`](BemojeString.md)

#### Returns

[`BemojeString`](BemojeString.md)

#### Defined in

src/libs/string/src/BemojeString.ts:73

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

String.repeat

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:447

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

String.replace

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:449

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

String.replace

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:456

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

String.replace

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:246

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

String.replace

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:253

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

String.replaceAll

#### Defined in

node_modules/typescript/lib/lib.es2021.string.d.ts:27

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

String.replaceAll

#### Defined in

node_modules/typescript/lib/lib.es2021.string.d.ts:34

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

String.search

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:462

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

String.search

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:259

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

String.slice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:470

___

### small

▸ **small**(): `string`

Returns a `<small>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

String.small

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:521

___

### sortChars

▸ **sortChars**(): [`BemojeString`](BemojeString.md)

#### Returns

[`BemojeString`](BemojeString.md)

#### Defined in

src/libs/string/src/BemojeString.ts:76

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

String.split

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:477

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

String.split

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:266

___

### splitCamelCase

▸ **splitCamelCase**(): `string`[]

#### Returns

`string`[]

#### Defined in

src/libs/string/src/BemojeString.ts:79

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

String.startsWith

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:454

___

### strike

▸ **strike**(): `string`

Returns a `<strike>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

String.strike

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:527

___

### sub

▸ **sub**(): `string`

Returns a `<sub>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

String.sub

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:533

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

String.substr

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:512

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

String.substring

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:485

___

### sup

▸ **sup**(): `string`

Returns a `<sup>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

String.sup

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:539

___

### toCharCodes

▸ **toCharCodes**(): `number`[]

#### Returns

`number`[]

#### Defined in

src/libs/string/src/BemojeString.ts:82

___

### toCharSet

▸ **toCharSet**(): [`BemojeString`](BemojeString.md)

#### Returns

[`BemojeString`](BemojeString.md)

#### Defined in

src/libs/string/src/BemojeString.ts:85

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

String.toLocaleLowerCase

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:491

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

String.toLocaleUpperCase

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:497

___

### toLowerCase

▸ **toLowerCase**(): `string`

Converts all the alphabetic characters in a string to lowercase.

#### Returns

`string`

#### Inherited from

String.toLowerCase

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:488

___

### toSentences

▸ **toSentences**(): `string`[]

#### Returns

`string`[]

#### Defined in

src/libs/string/src/BemojeString.ts:88

___

### toString

▸ **toString**(): `string`

Returns a string representation of a string.

#### Returns

`string`

#### Inherited from

String.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:398

___

### toUpperCase

▸ **toUpperCase**(): `string`

Converts all the alphabetic characters in a string to uppercase.

#### Returns

`string`

#### Inherited from

String.toUpperCase

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:494

___

### toWords

▸ **toWords**(): `string`[]

#### Returns

`string`[]

#### Defined in

src/libs/string/src/BemojeString.ts:91

___

### trim

▸ **trim**(): `string`

Removes the leading and trailing white space and line terminator characters from a string.

#### Returns

`string`

#### Inherited from

String.trim

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:500

___

### trimEnd

▸ **trimEnd**(): `string`

Removes the trailing white space and line terminator characters from a string.

#### Returns

`string`

#### Inherited from

String.trimEnd

#### Defined in

node_modules/typescript/lib/lib.es2019.string.d.ts:23

___

### trimLeft

▸ **trimLeft**(): `string`

Removes the leading white space and line terminator characters from a string.

**`Deprecated`**

A legacy feature for browser compatibility. Use `trimStart` instead

#### Returns

`string`

#### Inherited from

String.trimLeft

#### Defined in

node_modules/typescript/lib/lib.es2019.string.d.ts:32

___

### trimRight

▸ **trimRight**(): `string`

Removes the trailing white space and line terminator characters from a string.

**`Deprecated`**

A legacy feature for browser compatibility. Use `trimEnd` instead

#### Returns

`string`

#### Inherited from

String.trimRight

#### Defined in

node_modules/typescript/lib/lib.es2019.string.d.ts:38

___

### trimStart

▸ **trimStart**(): `string`

Removes the leading white space and line terminator characters from a string.

#### Returns

`string`

#### Inherited from

String.trimStart

#### Defined in

node_modules/typescript/lib/lib.es2019.string.d.ts:26

___

### unwrap

▸ **unwrap**(`left`, `right`, `flags?`): [`BemojeString`](BemojeString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | `string` |
| `right` | `string` |
| `flags?` | `string` |

#### Returns

[`BemojeString`](BemojeString.md)

#### Defined in

src/libs/string/src/BemojeString.ts:94

___

### valueOf

▸ **valueOf**(): `string`

Returns the primitive value of the specified object.

#### Returns

`string`

#### Inherited from

String.valueOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:515

___

### wrapBetween

▸ **wrapBetween**(`left`, `right`): [`BemojeString`](BemojeString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | `string` |
| `right` | `string` |

#### Returns

[`BemojeString`](BemojeString.md)

#### Defined in

src/libs/string/src/BemojeString.ts:97

___

### wrapIn

▸ **wrapIn**(`wrap`): [`BemojeString`](BemojeString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `wrap` | `string` |

#### Returns

[`BemojeString`](BemojeString.md)

#### Defined in

src/libs/string/src/BemojeString.ts:100

___

### wrapInAngleBrackets

▸ **wrapInAngleBrackets**(): [`BemojeString`](BemojeString.md)

#### Returns

[`BemojeString`](BemojeString.md)

#### Defined in

src/libs/string/src/BemojeString.ts:103

___

### wrapInBraces

▸ **wrapInBraces**(): [`BemojeString`](BemojeString.md)

#### Returns

[`BemojeString`](BemojeString.md)

#### Defined in

src/libs/string/src/BemojeString.ts:106

___

### wrapInBrackets

▸ **wrapInBrackets**(): [`BemojeString`](BemojeString.md)

#### Returns

[`BemojeString`](BemojeString.md)

#### Defined in

src/libs/string/src/BemojeString.ts:109

___

### wrapInDoubleQuotes

▸ **wrapInDoubleQuotes**(): [`BemojeString`](BemojeString.md)

#### Returns

[`BemojeString`](BemojeString.md)

#### Defined in

src/libs/string/src/BemojeString.ts:112

___

### wrapInParenthesis

▸ **wrapInParenthesis**(): [`BemojeString`](BemojeString.md)

#### Returns

[`BemojeString`](BemojeString.md)

#### Defined in

src/libs/string/src/BemojeString.ts:115

___

### wrapInSingleQuotes

▸ **wrapInSingleQuotes**(): [`BemojeString`](BemojeString.md)

#### Returns

[`BemojeString`](BemojeString.md)

#### Defined in

src/libs/string/src/BemojeString.ts:118

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

String.fromCharCode

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:524

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

String.fromCodePoint

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:547

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

String.raw

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:558
