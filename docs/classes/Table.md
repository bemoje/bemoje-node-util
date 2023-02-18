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

- [get](Table.md#get)
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

src/libs/datastructures/src/Table.ts:25

## Accessors

### colHeaders

• `get` **colHeaders**(): `string`[]

Gets the column headers.

#### Returns

`string`[]

#### Defined in

src/libs/datastructures/src/Table.ts:179

___

### cols

• `get` **cols**(): `number`

Gets the number of cols in the table, not including headers.

#### Returns

`number`

#### Defined in

src/libs/datastructures/src/Table.ts:165

___

### rowHeaders

• `get` **rowHeaders**(): `string`[]

Gets the row headers.

#### Returns

`string`[]

#### Defined in

src/libs/datastructures/src/Table.ts:172

___

### rows

• `get` **rows**(): `number`

Gets the number of rows in the table, not including headers.

#### Returns

`number`

#### Defined in

src/libs/datastructures/src/Table.ts:158

## Methods

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

src/libs/datastructures/src/Table.ts:189

___

### serialize

▸ **serialize**(): `string`

Override of the native toJSON method. When parsing the returned json string, it can be revived as a Table object when using the static Table.fromJSON method.

#### Returns

`string`

#### Defined in

src/libs/datastructures/src/Table.ts:296

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

src/libs/datastructures/src/Table.ts:212

___

### toArray

▸ **toArray**(): (`string` \| `T`)[][]

Returns the table as a two-dimensional array, including row and column headers..

#### Returns

(`string` \| `T`)[][]

#### Defined in

src/libs/datastructures/src/Table.ts:232

___

### toArrayDataOnly

▸ **toArrayDataOnly**(): `T`[][]

Returns the table as a two-dimensional array, without row and column headers.

#### Returns

`T`[][]

#### Defined in

src/libs/datastructures/src/Table.ts:248

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

src/libs/datastructures/src/Table.ts:260

___

### toJSON

▸ **toJSON**(): `TableOptions`<`T`\>

Override of the native toJSON method. When parsing the returned json string, it can be revived as a Table object when using the static Table.fromJSON method.

#### Returns

`TableOptions`<`T`\>

#### Defined in

src/libs/datastructures/src/Table.ts:285

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

src/libs/datastructures/src/Table.ts:270

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

src/libs/datastructures/src/Table.ts:304
