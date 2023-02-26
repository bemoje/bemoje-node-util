[@bemoje/bemoje-node-util](../README.md) / [Exports](../modules.md) / Table

# Class: Table<T\>

Two-dimensional table class supporting column and row headers.

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](Table.md#constructor)

### Accessors

- [colHeaders](Table.md#colheaders)
- [cols](Table.md#cols)
- [rowHeaders](Table.md#rowheaders)
- [rows](Table.md#rows)

### Methods

- [deleteColumn](Table.md#deletecolumn)
- [deleteRow](Table.md#deleterow)
- [get](Table.md#get)
- [indexOfColHeader](Table.md#indexofcolheader)
- [indexOfRowHeader](Table.md#indexofrowheader)
- [serialize](Table.md#serialize)
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
| `options` | `TableOptions`<`T`\> |

#### Defined in

[src/libs/datastructures/src/Table.ts:26](https://github.com/bemoje/bemoje-node-util/blob/f58c8db/src/libs/datastructures/src/Table.ts#L26)

## Accessors

### colHeaders

• `get` **colHeaders**(): `string`[]

Gets the column headers.

#### Returns

`string`[]

#### Defined in

[src/libs/datastructures/src/Table.ts:188](https://github.com/bemoje/bemoje-node-util/blob/f58c8db/src/libs/datastructures/src/Table.ts#L188)

___

### cols

• `get` **cols**(): `number`

Gets the number of cols in the table, not including headers.

#### Returns

`number`

#### Defined in

[src/libs/datastructures/src/Table.ts:171](https://github.com/bemoje/bemoje-node-util/blob/f58c8db/src/libs/datastructures/src/Table.ts#L171)

___

### rowHeaders

• `get` **rowHeaders**(): `string`[]

Gets the row headers.

#### Returns

`string`[]

#### Defined in

[src/libs/datastructures/src/Table.ts:178](https://github.com/bemoje/bemoje-node-util/blob/f58c8db/src/libs/datastructures/src/Table.ts#L178)

___

### rows

• `get` **rows**(): `number`

Gets the number of rows in the table, not including headers.

#### Returns

`number`

#### Defined in

[src/libs/datastructures/src/Table.ts:164](https://github.com/bemoje/bemoje-node-util/blob/f58c8db/src/libs/datastructures/src/Table.ts#L164)

## Methods

### deleteColumn

▸ **deleteColumn**(`col`, `spreadsheetNotation?`): [`Table`](Table.md)<`T`\>

Deletes a column in the table.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `col` | `string` \| `number` | `undefined` | Column index |
| `spreadsheetNotation` | `boolean` | `false` | enable that row and col should be interpreted as spreadsheet coordinates, eg. ("A","22") |

#### Returns

[`Table`](Table.md)<`T`\>

#### Defined in

[src/libs/datastructures/src/Table.ts:225](https://github.com/bemoje/bemoje-node-util/blob/f58c8db/src/libs/datastructures/src/Table.ts#L225)

___

### deleteRow

▸ **deleteRow**(`row`, `spreadsheetNotation?`): [`Table`](Table.md)<`T`\>

Deletes a row in the table.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `row` | `string` \| `number` | `undefined` | Row index |
| `spreadsheetNotation` | `boolean` | `false` | enable that row and col should be interpreted as spreadsheet coordinates, eg. ("A","22") |

#### Returns

[`Table`](Table.md)<`T`\>

#### Defined in

[src/libs/datastructures/src/Table.ts:242](https://github.com/bemoje/bemoje-node-util/blob/f58c8db/src/libs/datastructures/src/Table.ts#L242)

___

### get

▸ **get**(`col`, `row`, `spreadsheetNotation?`): `T`

Returns a value at the given (row, col) position.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `col` | `string` \| `number` | `undefined` | Column index |
| `row` | `string` \| `number` | `undefined` | Row index |
| `spreadsheetNotation` | `boolean` | `false` | enable that row and col should be interpreted as spreadsheet coordinates, eg. ("A","22") |

#### Returns

`T`

#### Defined in

[src/libs/datastructures/src/Table.ts:201](https://github.com/bemoje/bemoje-node-util/blob/f58c8db/src/libs/datastructures/src/Table.ts#L201)

___

### indexOfColHeader

▸ **indexOfColHeader**(`header`): `number`

Gets the index of a given column header.
Even if row headers are defined, this is not considered a column and is ignored in this search.

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `string` |

#### Returns

`number`

#### Defined in

[src/libs/datastructures/src/Table.ts:253](https://github.com/bemoje/bemoje-node-util/blob/f58c8db/src/libs/datastructures/src/Table.ts#L253)

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

[src/libs/datastructures/src/Table.ts:263](https://github.com/bemoje/bemoje-node-util/blob/f58c8db/src/libs/datastructures/src/Table.ts#L263)

___

### serialize

▸ **serialize**(): `string`

Override of the native toJSON method. When parsing the returned json string, it can be revived as a Table object when using the static Table.fromJSON method.

#### Returns

`string`

#### Defined in

[src/libs/datastructures/src/Table.ts:333](https://github.com/bemoje/bemoje-node-util/blob/f58c8db/src/libs/datastructures/src/Table.ts#L333)

___

### set

▸ **set**(`col`, `row`, `value`, `spreadsheetNotation?`): [`Table`](Table.md)<`T`\>

Inserts a given value at the given (row, col) position.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `col` | `string` \| `number` | `undefined` | Column index |
| `row` | `string` \| `number` | `undefined` | Row index |
| `value` | `T` | `undefined` | The value to insert |
| `spreadsheetNotation` | `boolean` | `false` | enable that row and col should be interpreted as spreadsheet coordinates, eg. ("A","22") |

#### Returns

[`Table`](Table.md)<`T`\>

self (chainable)

#### Defined in

[src/libs/datastructures/src/Table.ts:214](https://github.com/bemoje/bemoje-node-util/blob/f58c8db/src/libs/datastructures/src/Table.ts#L214)

___

### toArray

▸ **toArray**(): (`string` \| `T`)[][]

Returns the table as a two-dimensional array, including row and column headers..

#### Returns

(`string` \| `T`)[][]

#### Defined in

[src/libs/datastructures/src/Table.ts:273](https://github.com/bemoje/bemoje-node-util/blob/f58c8db/src/libs/datastructures/src/Table.ts#L273)

___

### toArrayDataOnly

▸ **toArrayDataOnly**(): `T`[][]

Returns the table as a two-dimensional array, without row and column headers.

#### Returns

`T`[][]

#### Defined in

[src/libs/datastructures/src/Table.ts:289](https://github.com/bemoje/bemoje-node-util/blob/f58c8db/src/libs/datastructures/src/Table.ts#L289)

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

[src/libs/datastructures/src/Table.ts:301](https://github.com/bemoje/bemoje-node-util/blob/f58c8db/src/libs/datastructures/src/Table.ts#L301)

___

### toJSON

▸ **toJSON**(): `TableOptions`<`T`\>

Override of the native toJSON method. When parsing the returned json string, it can be revived as a Table object when using the static Table.fromJSON method.

#### Returns

`TableOptions`<`T`\>

#### Defined in

[src/libs/datastructures/src/Table.ts:322](https://github.com/bemoje/bemoje-node-util/blob/f58c8db/src/libs/datastructures/src/Table.ts#L322)

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
| `options` | `TableOptions`<`string` \| `T`\> | `{}` | TableOptions constructor options. |

#### Returns

[`Table`](Table.md)<`string` \| `T`\>

#### Defined in

[src/libs/datastructures/src/Table.ts:311](https://github.com/bemoje/bemoje-node-util/blob/f58c8db/src/libs/datastructures/src/Table.ts#L311)

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

[src/libs/datastructures/src/Table.ts:341](https://github.com/bemoje/bemoje-node-util/blob/f58c8db/src/libs/datastructures/src/Table.ts#L341)
