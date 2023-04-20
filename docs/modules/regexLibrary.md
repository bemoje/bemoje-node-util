[@bemoje/node-util](../README.md) / regexLibrary

# Namespace: regexLibrary

## Table of contents

### Variables

- [integers](regexLibrary.md#integers)
- [isHex](regexLibrary.md#ishex)
- [isHexPrefix](regexLibrary.md#ishexprefix)
- [isLocaleAlpha](regexLibrary.md#islocalealpha)
- [isLocaleAlphaNumeric](regexLibrary.md#islocalealphanumeric)
- [numberCommaSepDotDecimal](regexLibrary.md#numbercommasepdotdecimal)
- [numberDotSepCommaDecimal](regexLibrary.md#numberdotsepcommadecimal)
- [numberNoThousandSepCommaDecimal](regexLibrary.md#numbernothousandsepcommadecimal)
- [numberNoThousandSepDotDecimal](regexLibrary.md#numbernothousandsepdotdecimal)
- [repeatingWhiteSpace](regexLibrary.md#repeatingwhitespace)
- [socialSecurityNumbersDK](regexLibrary.md#socialsecuritynumbersdk)
- [words](regexLibrary.md#words)

## Variables

### integers

• `Const` **integers**: `RegExp`

Matches positive or negative integers.
Example: -20

#### Defined in

[src/libs/regex/src/regexLibrary.ts:21](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/regex/src/regexLibrary.ts#L21)

___

### isHex

• `Const` **isHex**: `RegExp`

Understands prefixes for hex colors, hex decimal and regexp unicode hex

#### Defined in

[src/libs/regex/src/regexLibrary.ts:55](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/regex/src/regexLibrary.ts#L55)

___

### isHexPrefix

• `Const` **isHexPrefix**: `RegExp`

Prefixes for hex colors, hex decimal and regexp unicode hex

#### Defined in

[src/libs/regex/src/regexLibrary.ts:50](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/regex/src/regexLibrary.ts#L50)

___

### isLocaleAlpha

• `Const` **isLocaleAlpha**: `Map`<`string`, `RegExp`\>

For checking if a string is of only alpha characters for a specific locale.

#### Defined in

[src/libs/regex/src/regexLibrary.ts:60](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/regex/src/regexLibrary.ts#L60)

___

### isLocaleAlphaNumeric

• `Const` **isLocaleAlphaNumeric**: `Map`<`string`, `RegExp`\>

For checking if a string is of only alpha-numeric characters for a specific locale.

#### Defined in

[src/libs/regex/src/regexLibrary.ts:98](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/regex/src/regexLibrary.ts#L98)

___

### numberCommaSepDotDecimal

• `Const` **numberCommaSepDotDecimal**: `RegExp`

Matches US format positive or negative decimal numbers with thousand separators.
Example: -20,412.34

#### Defined in

[src/libs/regex/src/regexLibrary.ts:45](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/regex/src/regexLibrary.ts#L45)

___

### numberDotSepCommaDecimal

• `Const` **numberDotSepCommaDecimal**: `RegExp`

Matches inverted US format positive or negative decimal numbers with thousand separators.
Example: -20.412,34

#### Defined in

[src/libs/regex/src/regexLibrary.ts:39](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/regex/src/regexLibrary.ts#L39)

___

### numberNoThousandSepCommaDecimal

• `Const` **numberNoThousandSepCommaDecimal**: `RegExp`

Matches inverted US format positive or negative decimal numbers with no thousand separators.
Example: -20412,3461

#### Defined in

[src/libs/regex/src/regexLibrary.ts:27](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/regex/src/regexLibrary.ts#L27)

___

### numberNoThousandSepDotDecimal

• `Const` **numberNoThousandSepDotDecimal**: `RegExp`

Matches US format positive or negative decimal numbers with no thousand separators.
Example: -20412.3461

#### Defined in

[src/libs/regex/src/regexLibrary.ts:33](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/regex/src/regexLibrary.ts#L33)

___

### repeatingWhiteSpace

• `Const` **repeatingWhiteSpace**: `RegExp`

Matches 2 or more consecutive whitespace characters, including line terminators, tabs, etc.

#### Defined in

[src/libs/regex/src/regexLibrary.ts:4](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/regex/src/regexLibrary.ts#L4)

___

### socialSecurityNumbersDK

• `Const` **socialSecurityNumbersDK**: `RegExp`

Matches Danish social security numbers with or without the dash.
Example: 151199-1512

#### Defined in

[src/libs/regex/src/regexLibrary.ts:15](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/regex/src/regexLibrary.ts#L15)

___

### words

• `Const` **words**: `RegExp`

Matches words in a string

#### Defined in

[src/libs/regex/src/regexLibrary.ts:9](https://github.com/bemoje/bemoje-node-util/blob/c56d820/src/libs/regex/src/regexLibrary.ts#L9)
