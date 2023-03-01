[@bemoje/bemoje-node-util](../README.md) / [Exports](../modules.md) / Table

# Class: Table<T\>

Two-dimensional table class supporting column and row headers.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Base`](Base.md)

  ↳ **`Table`**

## Implements

- [`IRevivableJSON`](../interfaces/IRevivableJSON.md)<[`TableSerializedForm`](../modules.md#tableserializedform)<`T`\>\>

## Table of contents

### Constructors

- [constructor](Table.md#constructor)

### Accessors

- [columnHeaders](Table.md#columnheaders)
- [columns](Table.md#columns)
- [rowHeaders](Table.md#rowheaders)
- [rows](Table.md#rows)

### Methods

- [get](Table.md#get)
- [indexOfColumnHeader](Table.md#indexofcolumnheader)
- [indexOfRowHeader](Table.md#indexofrowheader)
- [removeColumn](Table.md#removecolumn)
- [removeRow](Table.md#removerow)
- [set](Table.md#set)
- [toArray](Table.md#toarray)
- [toArrayDataOnly](Table.md#toarraydataonly)
- [toCSV](Table.md#tocsv)
- [toJSON](Table.md#tojson)
- [fromCSV](Table.md#fromcsv)
- [fromJSON](Table.md#fromjson)

## Constructors

### constructor

• **new Table**<`T`\>(`options?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ITableOptions`](../interfaces/ITableOptions.md)<`T`\> |

#### Overrides

[Base](Base.md).[constructor](Base.md#constructor)

#### Defined in

[src/libs/datastructures/src/Table.ts:94](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/src/Table.ts#L94)

## Accessors

### columnHeaders

• `get` **columnHeaders**(): `string`[]

Gets the column headers.

#### Returns

`string`[]

#### Defined in

[src/libs/datastructures/src/Table.ts:119](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/src/Table.ts#L119)

___

### columns

• `get` **columns**(): `number`

Gets the number of cols in the table, not including headers.

#### Returns

`number`

#### Defined in

[src/libs/datastructures/src/Table.ts:105](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/src/Table.ts#L105)

___

### rowHeaders

• `get` **rowHeaders**(): `string`[]

Gets the row headers.

#### Returns

`string`[]

#### Defined in

[src/libs/datastructures/src/Table.ts:129](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/src/Table.ts#L129)

___

### rows

• `get` **rows**(): `number`

Gets the number of rows in the table, not including headers.

#### Returns

`number`

#### Defined in

[src/libs/datastructures/src/Table.ts:112](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/src/Table.ts#L112)

## Methods

### get

▸ **get**(`column`, `row`, `spreadsheetNotation?`): `T`

Returns a value at a given (row, col) position.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `column` | `string` \| `number` | `undefined` | Column index |
| `row` | `string` \| `number` | `undefined` | Row index |
| `spreadsheetNotation` | `boolean` | `false` | Interpret row and col as spreadsheet coordinates, eg. ("A","1") |

#### Returns

`T`

#### Defined in

[src/libs/datastructures/src/Table.ts:142](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/src/Table.ts#L142)

___

### indexOfColumnHeader

▸ **indexOfColumnHeader**(`header`): `number`

Gets the index of a given column header.
Even if row headers are defined, this is not considered a column and is ignored in this search.

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `string` |

#### Returns

`number`

#### Defined in

[src/libs/datastructures/src/Table.ts:193](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/src/Table.ts#L193)

___

### indexOfRowHeader

▸ **indexOfRowHeader**(`header`): `number`

Gets the index of a given row header.

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `string` |

#### Returns

`number`

#### Defined in

[src/libs/datastructures/src/Table.ts:203](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/src/Table.ts#L203)

___

### removeColumn

▸ **removeColumn**(`column`, `spreadsheetNotation?`): [`Table`](Table.md)<`T`\>

Deletes a column in the table.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `column` | `string` \| `number` | `undefined` | Column index |
| `spreadsheetNotation` | `boolean` | `false` | Interpret row and col as spreadsheet coordinates, eg. ("A","1") |

#### Returns

[`Table`](Table.md)<`T`\>

#### Defined in

[src/libs/datastructures/src/Table.ts:165](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/src/Table.ts#L165)

___

### removeRow

▸ **removeRow**(`row`, `spreadsheetNotation?`): [`Table`](Table.md)<`T`\>

Deletes a row in the table.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `row` | `string` \| `number` | `undefined` | Row index |
| `spreadsheetNotation` | `boolean` | `false` | Interpret row and col as spreadsheet coordinates, eg. ("A","1") |

#### Returns

[`Table`](Table.md)<`T`\>

#### Defined in

[src/libs/datastructures/src/Table.ts:182](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/src/Table.ts#L182)

___

### set

▸ **set**(`column`, `row`, `value`, `spreadsheetNotation?`): [`Table`](Table.md)<`T`\>

Inserts a given value at a given (row, col) position.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `column` | `string` \| `number` | `undefined` | Column index |
| `row` | `string` \| `number` | `undefined` | Row index |
| `value` | `T` | `undefined` | The value to insert |
| `spreadsheetNotation` | `boolean` | `false` | Interpret row and col as spreadsheet coordinates, eg. ("A","1") |

#### Returns

[`Table`](Table.md)<`T`\>

#### Defined in

[src/libs/datastructures/src/Table.ts:154](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/src/Table.ts#L154)

___

### toArray

▸ **toArray**(): (`string` \| `T`)[][]

Returns the table as a two-dimensional array, including row and column headers..

#### Returns

(`string` \| `T`)[][]

#### Defined in

[src/libs/datastructures/src/Table.ts:213](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/src/Table.ts#L213)

___

### toArrayDataOnly

▸ **toArrayDataOnly**(): `T`[][]

Returns the table as a two-dimensional array, without row and column headers.

#### Returns

`T`[][]

#### Defined in

[src/libs/datastructures/src/Table.ts:229](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/src/Table.ts#L229)

___

### toCSV

▸ **toCSV**(`delimiter?`): `string`

Returns the table as a CSV string.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `delimiter` | `string` | `';'` | csv delimiter |

#### Returns

`string`

#### Defined in

[src/libs/datastructures/src/Table.ts:241](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/src/Table.ts#L241)

___

### toJSON

▸ **toJSON**(): [`TableSerializedForm`](../modules.md#tableserializedform)<`T`\>

Override of the native toJSON method. When parsing the returned json string, it can be revived as a Table object when using the static Table.fromJSON method.

#### Returns

[`TableSerializedForm`](../modules.md#tableserializedform)<`T`\>

#### Implementation of

IRevivableJSON.toJSON

#### Defined in

[src/libs/datastructures/src/Table.ts:248](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/src/Table.ts#L248)

___

### fromCSV

▸ `Static` **fromCSV**<`T`\>(`csv`, `delimiter?`, `options?`): [`Table`](Table.md)<`string` \| `T`\>

Creates a Table instance from CSV string data.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `csv` | `string` | `undefined` | CSV data string |
| `delimiter` | `string` | `';'` | csv delimiter |
| `options` | [`ITableOptions`](../interfaces/ITableOptions.md)<`string` \| `T`\> | `{}` | TableOptions constructor options. |

#### Returns

[`Table`](Table.md)<`string` \| `T`\>

#### Defined in

[src/libs/datastructures/src/Table.ts:78](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/src/Table.ts#L78)

___

### fromJSON

▸ `Static` **fromJSON**<`T`\>(`json`): [`Table`](Table.md)<`T`\>

Revive a stringified Table object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `string` | a stringified Table object. |

#### Returns

[`Table`](Table.md)<`T`\>

#### Defined in

[src/libs/datastructures/src/Table.ts:90](https://github.com/bemoje/bemoje-node-util/blob/7e4c5ea/src/libs/datastructures/src/Table.ts#L90)
