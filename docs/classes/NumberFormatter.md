[@bemoje/node-util](/docs/index.md) / NumberFormatter

# Class: NumberFormatter

## Table of contents

### Constructors

- [constructor](/docs/classes/NumberFormatter.md#constructor)

### Properties

- [decimalSeparator](/docs/classes/NumberFormatter.md#decimalseparator)
- [precision](/docs/classes/NumberFormatter.md#precision)
- [thousandSeparator](/docs/classes/NumberFormatter.md#thousandseparator)

### Methods

- [format](/docs/classes/NumberFormatter.md#format)
- [locale](/docs/classes/NumberFormatter.md#locale)
- [parse](/docs/classes/NumberFormatter.md#parse)
- [defineLocale](/docs/classes/NumberFormatter.md#definelocale)
- [getLocales](/docs/classes/NumberFormatter.md#getlocales)

## Constructors

### constructor

• **new NumberFormatter**(`precision?`)

Create a new number formatter.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `precision` | `number` | `2` | The number of decimals to round to. |

#### Defined in

src/number/NumberFormatter.ts:24

## Properties

### decimalSeparator

• **decimalSeparator**: `string` = `'.'`

#### Defined in

src/number/NumberFormatter.ts:18

___

### precision

• **precision**: `number`

#### Defined in

src/number/NumberFormatter.ts:12

___

### thousandSeparator

• **thousandSeparator**: `string` = `','`

#### Defined in

src/number/NumberFormatter.ts:15

## Methods

### format

▸ **format**(`number`): `string`

Format a number to a string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

`string`

#### Defined in

src/number/NumberFormatter.ts:60

___

### locale

▸ **locale**(`locale`): [`NumberFormatter`](/docs/classes/NumberFormatter.md)

Set the locale for the number formatter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | `string` |

#### Returns

[`NumberFormatter`](/docs/classes/NumberFormatter.md)

#### Defined in

src/number/NumberFormatter.ts:49

___

### parse

▸ **parse**(`string`): `number`

Parse a formatted string to a number.

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`number`

#### Defined in

src/number/NumberFormatter.ts:80

___

### defineLocale

▸ `Static` **defineLocale**(`locale`, `thousandSeparator`, `decimalSeparator`): `void`

Set separator strings for a given locale.

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | `string` |
| `thousandSeparator` | `string` |
| `decimalSeparator` | `string` |

#### Returns

`void`

#### Defined in

src/number/NumberFormatter.ts:31

___

### getLocales

▸ `Static` **getLocales**(): `Map`<`string`, [`string`, `string`]\>

Returns a copy of the locales map.

#### Returns

`Map`<`string`, [`string`, `string`]\>

#### Defined in

src/number/NumberFormatter.ts:38
