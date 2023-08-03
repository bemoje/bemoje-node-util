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

[src/number/NumberFormatter.ts:24](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/number/NumberFormatter.ts#L24)

## Properties

### decimalSeparator

• **decimalSeparator**: `string` = `'.'`

#### Defined in

[src/number/NumberFormatter.ts:18](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/number/NumberFormatter.ts#L18)

___

### precision

• **precision**: `number`

#### Defined in

[src/number/NumberFormatter.ts:12](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/number/NumberFormatter.ts#L12)

___

### thousandSeparator

• **thousandSeparator**: `string` = `','`

#### Defined in

[src/number/NumberFormatter.ts:15](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/number/NumberFormatter.ts#L15)

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

[src/number/NumberFormatter.ts:60](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/number/NumberFormatter.ts#L60)

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

[src/number/NumberFormatter.ts:49](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/number/NumberFormatter.ts#L49)

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

[src/number/NumberFormatter.ts:78](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/number/NumberFormatter.ts#L78)

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

[src/number/NumberFormatter.ts:31](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/number/NumberFormatter.ts#L31)

___

### getLocales

▸ `Static` **getLocales**(): `Map`<`string`, [`string`, `string`]\>

Returns a copy of the locales map.

#### Returns

`Map`<`string`, [`string`, `string`]\>

#### Defined in

[src/number/NumberFormatter.ts:38](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/number/NumberFormatter.ts#L38)
