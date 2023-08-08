[@bemoje/node-util](/docs/md/index.md) / NumberFormatter

# Class: NumberFormatter

## Table of contents

### Constructors

- [constructor](/docs/md/classes/NumberFormatter.md#constructor)

### Properties

- [decimalSeparator](/docs/md/classes/NumberFormatter.md#decimalseparator)
- [precision](/docs/md/classes/NumberFormatter.md#precision)
- [thousandSeparator](/docs/md/classes/NumberFormatter.md#thousandseparator)

### Methods

- [format](/docs/md/classes/NumberFormatter.md#format)
- [locale](/docs/md/classes/NumberFormatter.md#locale)
- [parse](/docs/md/classes/NumberFormatter.md#parse)
- [defineLocale](/docs/md/classes/NumberFormatter.md#definelocale)
- [getLocales](/docs/md/classes/NumberFormatter.md#getlocales)

## Constructors

### constructor

• **new NumberFormatter**(`precision?`)

Create a new number formatter.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `precision` | `number` | `2` | The number of decimals to round to. |

#### Defined in

[src/number/NumberFormatter.ts:25](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/number/NumberFormatter.ts#L25)

## Properties

### decimalSeparator

• **decimalSeparator**: `string` = `'.'`

#### Defined in

[src/number/NumberFormatter.ts:19](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/number/NumberFormatter.ts#L19)

___

### precision

• **precision**: `number`

#### Defined in

[src/number/NumberFormatter.ts:13](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/number/NumberFormatter.ts#L13)

___

### thousandSeparator

• **thousandSeparator**: `string` = `','`

#### Defined in

[src/number/NumberFormatter.ts:16](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/number/NumberFormatter.ts#L16)

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

[src/number/NumberFormatter.ts:61](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/number/NumberFormatter.ts#L61)

___

### locale

▸ **locale**(`locale`): [`NumberFormatter`](/docs/md/classes/NumberFormatter.md)

Set the locale for the number formatter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | `string` |

#### Returns

[`NumberFormatter`](/docs/md/classes/NumberFormatter.md)

#### Defined in

[src/number/NumberFormatter.ts:50](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/number/NumberFormatter.ts#L50)

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

[src/number/NumberFormatter.ts:79](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/number/NumberFormatter.ts#L79)

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

[src/number/NumberFormatter.ts:32](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/number/NumberFormatter.ts#L32)

___

### getLocales

▸ `Static` **getLocales**(): `Map`<`string`, [`string`, `string`]\>

Returns a copy of the locales map.

#### Returns

`Map`<`string`, [`string`, `string`]\>

#### Defined in

[src/number/NumberFormatter.ts:39](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/number/NumberFormatter.ts#L39)
