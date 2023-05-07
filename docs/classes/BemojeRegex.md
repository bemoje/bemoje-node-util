[@bemoje/node-util](/docs/index.md) / BemojeRegex

# Class: BemojeRegex

A RegExp class extension with extra features.

## Hierarchy

- `RegExp`

  ↳ **`BemojeRegex`**

## Table of contents

### Constructors

- [constructor](/docs/classes/BemojeRegex.md#constructor)

### Properties

- [dotAll](/docs/classes/BemojeRegex.md#dotall)
- [flags](/docs/classes/BemojeRegex.md#flags)
- [global](/docs/classes/BemojeRegex.md#global)
- [ignoreCase](/docs/classes/BemojeRegex.md#ignorecase)
- [lastIndex](/docs/classes/BemojeRegex.md#lastindex)
- [multiline](/docs/classes/BemojeRegex.md#multiline)
- [options](/docs/classes/BemojeRegex.md#options)
- [source](/docs/classes/BemojeRegex.md#source)
- [sticky](/docs/classes/BemojeRegex.md#sticky)
- [unicode](/docs/classes/BemojeRegex.md#unicode)
- [$&amp;](/docs/classes/BemojeRegex.md#$&amp;)
- [$&#x27;](/docs/classes/BemojeRegex.md#$&#x27;)
- [$+](/docs/classes/BemojeRegex.md#$+)
- [$1](/docs/classes/BemojeRegex.md#$1)
- [$2](/docs/classes/BemojeRegex.md#$2)
- [$3](/docs/classes/BemojeRegex.md#$3)
- [$4](/docs/classes/BemojeRegex.md#$4)
- [$5](/docs/classes/BemojeRegex.md#$5)
- [$6](/docs/classes/BemojeRegex.md#$6)
- [$7](/docs/classes/BemojeRegex.md#$7)
- [$8](/docs/classes/BemojeRegex.md#$8)
- [$9](/docs/classes/BemojeRegex.md#$9)
- [$\_](/docs/classes/BemojeRegex.md#$_)
- [$\&#x60;](/docs/classes/BemojeRegex.md#$&#x60;)
- [[species]](/docs/classes/BemojeRegex.md#[species])
- [defaultOptions](/docs/classes/BemojeRegex.md#defaultoptions)
- [fixFlags](/docs/classes/BemojeRegex.md#fixflags)
- [getValidFlags](/docs/classes/BemojeRegex.md#getvalidflags)
- [input](/docs/classes/BemojeRegex.md#input)
- [isValidFlags](/docs/classes/BemojeRegex.md#isvalidflags)
- [lastMatch](/docs/classes/BemojeRegex.md#lastmatch)
- [lastParen](/docs/classes/BemojeRegex.md#lastparen)
- [leftContext](/docs/classes/BemojeRegex.md#leftcontext)
- [rightContext](/docs/classes/BemojeRegex.md#rightcontext)

### Methods

- [[matchAll]](/docs/classes/BemojeRegex.md#[matchall])
- [[match]](/docs/classes/BemojeRegex.md#[match])
- [[replace]](/docs/classes/BemojeRegex.md#[replace])
- [[search]](/docs/classes/BemojeRegex.md#[search])
- [[split]](/docs/classes/BemojeRegex.md#[split])
- [compareTo](/docs/classes/BemojeRegex.md#compareto)
- [compareToStrict](/docs/classes/BemojeRegex.md#comparetostrict)
- [compile](/docs/classes/BemojeRegex.md#compile)
- [exec](/docs/classes/BemojeRegex.md#exec)
- [getGroupNames](/docs/classes/BemojeRegex.md#getgroupnames)
- [rexec](/docs/classes/BemojeRegex.md#rexec)
- [test](/docs/classes/BemojeRegex.md#test)
- [toRegExp](/docs/classes/BemojeRegex.md#toregexp)
- [toValidator](/docs/classes/BemojeRegex.md#tovalidator)

## Constructors

### constructor

• **new BemojeRegex**(`source`, `flags?`, `options?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `source` | `string` \| `RegExp` | `undefined` |
| `flags` | `string` | `''` |
| `options?` | [`BemojeRegexOptions`](/docs/index.md#bemojeregexoptions) | `undefined` |

#### Overrides

RegExp.constructor

#### Defined in

[src/libs/regex/src/BemojeRegex.ts:34](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/regex/src/BemojeRegex.ts#L34)

## Properties

### dotAll

• `Readonly` **dotAll**: `boolean`

Returns a Boolean value indicating the state of the dotAll flag (s) used with a regular expression.
Default is false. Read-only.

#### Inherited from

RegExp.dotAll

#### Defined in

node_modules/typescript/lib/lib.es2018.regexp.d.ts:38

___

### flags

• `Readonly` **flags**: `string`

Returns a string indicating the flags of the regular expression in question. This field is read-only.
The characters in this string are sequenced and concatenated in the following order:

   - "g" for global
   - "i" for ignoreCase
   - "m" for multiline
   - "u" for unicode
   - "y" for sticky

If no flags are set, the value is the empty string.

#### Inherited from

RegExp.flags

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:380

___

### global

• `Readonly` **global**: `boolean`

Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only.

#### Inherited from

RegExp.global

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:987

___

### ignoreCase

• `Readonly` **ignoreCase**: `boolean`

Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only.

#### Inherited from

RegExp.ignoreCase

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:990

___

### lastIndex

• **lastIndex**: `number`

#### Inherited from

RegExp.lastIndex

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:995

___

### multiline

• `Readonly` **multiline**: `boolean`

Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only.

#### Inherited from

RegExp.multiline

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:993

___

### options

• **options**: [`BemojeRegexOptions`](/docs/index.md#bemojeregexoptions)

#### Defined in

[src/libs/regex/src/BemojeRegex.ts:32](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/regex/src/BemojeRegex.ts#L32)

___

### source

• `Readonly` **source**: `string`

Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal.

#### Inherited from

RegExp.source

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:984

___

### sticky

• `Readonly` **sticky**: `boolean`

Returns a Boolean value indicating the state of the sticky flag (y) used with a regular
expression. Default is false. Read-only.

#### Inherited from

RegExp.sticky

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:386

___

### unicode

• `Readonly` **unicode**: `boolean`

Returns a Boolean value indicating the state of the Unicode flag (u) used with a regular
expression. Default is false. Read-only.

#### Inherited from

RegExp.unicode

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:392

___

### $&amp;

▪ `Static` **$&**: `string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

RegExp.$&

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1035

___

### $&#x27;

▪ `Static` **$'**: `string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

RegExp.$'

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1047

___

### $+

▪ `Static` **$+**: `string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

RegExp.$+

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1039

___

### $1

▪ `Static` **$1**: `string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

RegExp.$1

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1011

___

### $2

▪ `Static` **$2**: `string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

RegExp.$2

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1013

___

### $3

▪ `Static` **$3**: `string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

RegExp.$3

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1015

___

### $4

▪ `Static` **$4**: `string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

RegExp.$4

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1017

___

### $5

▪ `Static` **$5**: `string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

RegExp.$5

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1019

___

### $6

▪ `Static` **$6**: `string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

RegExp.$6

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1021

___

### $7

▪ `Static` **$7**: `string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

RegExp.$7

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1023

___

### $8

▪ `Static` **$8**: `string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

RegExp.$8

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1025

___

### $9

▪ `Static` **$9**: `string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

RegExp.$9

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1027

___

### $\_

▪ `Static` **$\_**: `string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

RegExp.$\_

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1031

___

### $\&#x60;

▪ `Static` **$\`**: `string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

RegExp.$\`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1043

___

### [species]

▪ `Static` `Readonly` **[species]**: `RegExpConstructor`

#### Inherited from

RegExp.\_\_@species@607

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:230

___

### defaultOptions

▪ `Static` `Protected` **defaultOptions**: [`BemojeRegexOptions`](/docs/index.md#bemojeregexoptions)

#### Defined in

[src/libs/regex/src/BemojeRegex.ts:27](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/regex/src/BemojeRegex.ts#L27)

___

### fixFlags

▪ `Static` **fixFlags**: (`flags`: `string`) => `string` = `regexFixFlags`

#### Type declaration

▸ (`flags`): `string`

Takes a string of RegExp flags and returns a string guaranteed to be valid.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `flags` | `string` | string of RegExp flags |

##### Returns

`string`

#### Defined in

[src/libs/regex/src/BemojeRegex.ts:64](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/regex/src/BemojeRegex.ts#L64)

___

### getValidFlags

▪ `Static` **getValidFlags**: () => `string`[] = `regexValidFlags`

#### Type declaration

▸ (): `string`[]

Returns an array of all valid flags for a regular expression.

##### Returns

`string`[]

#### Defined in

[src/libs/regex/src/BemojeRegex.ts:69](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/regex/src/BemojeRegex.ts#L69)

___

### input

▪ `Static` **input**: `string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

RegExp.input

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1029

___

### isValidFlags

▪ `Static` **isValidFlags**: (`flags`: `string`) => `boolean` = `regexIsValidFlags`

#### Type declaration

▸ (`flags`): `boolean`

Checks if a string is a valid regex flags string.

##### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `string` |

##### Returns

`boolean`

#### Defined in

[src/libs/regex/src/BemojeRegex.ts:58](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/regex/src/BemojeRegex.ts#L58)

___

### lastMatch

▪ `Static` **lastMatch**: `string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

RegExp.lastMatch

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1033

___

### lastParen

▪ `Static` **lastParen**: `string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

RegExp.lastParen

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1037

___

### leftContext

▪ `Static` **leftContext**: `string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

RegExp.leftContext

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1041

___

### rightContext

▪ `Static` **rightContext**: `string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

RegExp.rightContext

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1045

## Methods

### [matchAll]

▸ **[matchAll]**(`str`): `IterableIterator`<`RegExpMatchArray`\>

Matches a string with this regular expression, and returns an iterable of matches
containing the results of that search.

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`IterableIterator`<`RegExpMatchArray`\>

#### Inherited from

RegExp.\_\_@matchAll@594

#### Defined in

node_modules/typescript/lib/lib.es2020.symbol.wellknown.d.ts:38

___

### [match]

▸ **[match]**(`string`): ``null`` \| `RegExpMatchArray`

Matches a string with this regular expression, and returns an array containing the results of
that search.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | A string to search within. |

#### Returns

``null`` \| `RegExpMatchArray`

#### Inherited from

RegExp.\_\_@match@585

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:187

___

### [replace]

▸ **[replace]**(`string`, `replaceValue`): `string`

Replaces text in a string, using this regular expression.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | A String object or string literal whose contents matching against this regular expression will be replaced |
| `replaceValue` | `string` | A String object or string literal containing the text to replace for every successful match of this regular expression. |

#### Returns

`string`

#### Inherited from

RegExp.\_\_@replace@587

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:196

▸ **[replace]**(`string`, `replacer`): `string`

Replaces text in a string, using this regular expression.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | A String object or string literal whose contents matching against this regular expression will be replaced |
| `replacer` | (`substring`: `string`, ...`args`: `any`[]) => `string` | A function that returns the replacement text. |

#### Returns

`string`

#### Inherited from

RegExp.\_\_@replace@587

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:204

___

### [search]

▸ **[search]**(`string`): `number`

Finds the position beginning first substring match in a regular expression search
using this regular expression.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to search within. |

#### Returns

`number`

#### Inherited from

RegExp.\_\_@search@590

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:212

___

### [split]

▸ **[split]**(`string`, `limit?`): `string`[]

Returns an array of substrings that were delimited by strings in the original input that
match against this regular expression.

If the regular expression contains capturing parentheses, then each time this
regular expression matches, the results (including any undefined results) of the
capturing parentheses are spliced.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | string value to split |
| `limit?` | `number` | if not undefined, the output array is truncated so that it contains no more than 'limit' elements. |

#### Returns

`string`[]

#### Inherited from

RegExp.\_\_@split@592

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:226

___

### compareTo

▸ **compareTo**(`regex`): `boolean`

Returns true if the RegExp instance has same source and flags.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regex` | `RegExp` | RegExp instance to compare to. |

#### Returns

`boolean`

#### Defined in

[src/libs/regex/src/BemojeRegex.ts:75](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/regex/src/BemojeRegex.ts#L75)

___

### compareToStrict

▸ **compareToStrict**(`regex`): `boolean`

Returns true if the RegExp instance is a also BemojeRegex instance and both have the same source and flags.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regex` | `RegExp` | RegExp instance to compare to. |

#### Returns

`boolean`

#### Defined in

[src/libs/regex/src/BemojeRegex.ts:83](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/regex/src/BemojeRegex.ts#L83)

___

### compile

▸ **compile**(`pattern`, `flags?`): [`BemojeRegex`](/docs/classes/BemojeRegex.md)

**`Deprecated`**

A legacy feature for browser compatibility

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `flags?` | `string` |

#### Returns

[`BemojeRegex`](/docs/classes/BemojeRegex.md)

#### Inherited from

RegExp.compile

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:999

___

### exec

▸ **exec**(`string`): ``null`` \| `RegExpExecArray`

Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The String object or string literal on which to perform the search. |

#### Returns

``null`` \| `RegExpExecArray`

#### Inherited from

RegExp.exec

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### getGroupNames

▸ **getGroupNames**(): `string`[]

Returns an array of named groups defined inside the RegExp instance.

#### Returns

`string`[]

#### Defined in

[src/libs/regex/src/BemojeRegex.ts:92](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/regex/src/BemojeRegex.ts#L92)

___

### rexec

▸ **rexec**(`string`): `Generator`<[`RexecYield`](/docs/index.md#rexecyield), `any`, `unknown`\>

Easily perform regex 'exec' on a string. An iterable is returned which steps through the exec process and yields all the details you might need.

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`Generator`<[`RexecYield`](/docs/index.md#rexecyield), `any`, `unknown`\>

#### Defined in

[src/libs/regex/src/BemojeRegex.ts:99](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/regex/src/BemojeRegex.ts#L99)

___

### test

▸ **test**(`string`): `boolean`

Returns a Boolean value that indicates whether or not a pattern exists in a searched string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | String on which to perform the search. |

#### Returns

`boolean`

#### Inherited from

RegExp.test

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:981

___

### toRegExp

▸ **toRegExp**(): `RegExp`

Convert the BemojeRegex instance to a RegExp instance.

#### Returns

`RegExp`

#### Defined in

[src/libs/regex/src/BemojeRegex.ts:113](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/regex/src/BemojeRegex.ts#L113)

___

### toValidator

▸ **toValidator**(): [`BemojeRegex`](/docs/classes/BemojeRegex.md)

Convert a regex for matching to a regex for validation.

#### Returns

[`BemojeRegex`](/docs/classes/BemojeRegex.md)

#### Defined in

[src/libs/regex/src/BemojeRegex.ts:106](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/regex/src/BemojeRegex.ts#L106)
