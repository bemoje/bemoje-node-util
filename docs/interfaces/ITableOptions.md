[@bemoje/node-util](../README.md) / ITableOptions

# Interface: ITableOptions<T\>

Constructor options for the Table class.

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [columnHeaders](ITableOptions.md#columnheaders)
- [columns](ITableOptions.md#columns)
- [data](ITableOptions.md#data)
- [extractColumnHeaders](ITableOptions.md#extractcolumnheaders)
- [extractRowHeaders](ITableOptions.md#extractrowheaders)
- [rowHeaders](ITableOptions.md#rowheaders)
- [rows](ITableOptions.md#rows)

## Properties

### columnHeaders

• `Optional` **columnHeaders**: `string`[]

Define column headers/names.
Must be of same length as entered in the 'columns' option.
When performing lookups in the table from indices or coordinates, headers are ignored, ie. not counted.
When using row headers simultaneously, this array will need to be of length one higher as the first element is intepreted as the column header for the row headers column.

#### Defined in

[src/libs/datastructures/src/Table.ts:38](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Table.ts#L38)

___

### columns

• `Optional` **columns**: `number`

Number of columns in the table.
This option is not allowed when the 'data' or 'columnHeaders' properties are being used.
TypeScript: Type safety consideration: Please note that when initializing an empty Table, it is full of 'undefined' values even if the table is specifically typed to not allow 'undefined'. TypeScript's static type-checking cannot see this.

#### Defined in

[src/libs/datastructures/src/Table.ts:50](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Table.ts#L50)

___

### data

• `Optional` **data**: `T`[][]

2D array to build table from.
All rows must be the same length.
When using this option, the 'columns' and 'rows' options are not allowed.

#### Defined in

[src/libs/datastructures/src/Table.ts:17](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Table.ts#L17)

___

### extractColumnHeaders

• `Optional` **extractColumnHeaders**: `boolean`

Intepret the first row of passed data as column headers/names (see TableOptions.data property).
When performing lookups in the table from indices or coordinates, headers are ignored, ie. not counted.
If the 'data' option is not used, this option is not allowed.
If the 'columnHeaders' option is used, this option is not allowed.

#### Defined in

[src/libs/datastructures/src/Table.ts:24](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Table.ts#L24)

___

### extractRowHeaders

• `Optional` **extractRowHeaders**: `boolean`

Intepret the first element of every row of passed data as row headers/names (see TableOptions.data property).
When performing lookups in the table from indices or coordinates, headers are ignored, ie. not counted.
If the 'data' option is not used, this option is not allowed.
If the 'rowHeaders' option is used, this option is not allowed.

#### Defined in

[src/libs/datastructures/src/Table.ts:31](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Table.ts#L31)

___

### rowHeaders

• `Optional` **rowHeaders**: `string`[]

Define column headers/names.
Must be of same length as entered in the 'columns' option.
When performing lookups in the table from indices or coordinates, headers are ignored, ie. not counted.

#### Defined in

[src/libs/datastructures/src/Table.ts:44](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Table.ts#L44)

___

### rows

• `Optional` **rows**: `number`

Number of rows in the table.
This option is not allowed when the 'data' or 'rowHeaders' properties are being used.
TypeScript: Type safety consideration: Please note that when initializing an empty Table, it is full of 'undefined' values even if the table is specifically typed to not allow 'undefined'. TypeScript's static type-checking cannot see this.

#### Defined in

[src/libs/datastructures/src/Table.ts:56](https://github.com/bemoje/bemoje-node-util/blob/a56603a/src/libs/datastructures/src/Table.ts#L56)