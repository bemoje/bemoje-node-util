[@bemoje/node-util](/docs/index.md) / Table

# Class: Table<T\>

Two-dimensional table class supporting column and row headers.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Base`](/docs/classes/Base.md)

  ↳ **`Table`**

## Implements

- [`IRevivable`](/docs/interfaces/IRevivable.md)<[`TableSerializedForm`](/docs/index.md#tableserializedform)<`T`\>\>

## Table of contents

### Constructors

- [constructor](/docs/classes/Table.md#constructor)

### Properties

- [\_columnHeaders](/docs/classes/Table.md#_columnheaders)
- [\_data](/docs/classes/Table.md#_data)
- [\_rowHeaders](/docs/classes/Table.md#_rowheaders)

### Accessors

- [columnHeaders](/docs/classes/Table.md#columnheaders)
- [columns](/docs/classes/Table.md#columns)
- [klass](/docs/classes/Table.md#klass)
- [proto](/docs/classes/Table.md#proto)
- [rowHeaders](/docs/classes/Table.md#rowheaders)
- [rows](/docs/classes/Table.md#rows)

### Methods

- [assertNoAmbiguousOptions](/docs/classes/Table.md#assertnoambiguousoptions)
- [assertNoOptionsRequireMissingOptions](/docs/classes/Table.md#assertnooptionsrequiremissingoptions)
- [buildEmptyTableWithDimensions](/docs/classes/Table.md#buildemptytablewithdimensions)
- [ensureValidColIndex](/docs/classes/Table.md#ensurevalidcolindex)
- [ensureValidRowIndex](/docs/classes/Table.md#ensurevalidrowindex)
- [get](/docs/classes/Table.md#get)
- [handleOptions](/docs/classes/Table.md#handleoptions)
- [indexOfColumnHeader](/docs/classes/Table.md#indexofcolumnheader)
- [indexOfRowHeader](/docs/classes/Table.md#indexofrowheader)
- [init](/docs/classes/Table.md#init)
- [normalizeCol](/docs/classes/Table.md#normalizecol)
- [normalizeColRow](/docs/classes/Table.md#normalizecolrow)
- [normalizeRow](/docs/classes/Table.md#normalizerow)
- [removeColumn](/docs/classes/Table.md#removecolumn)
- [removeRow](/docs/classes/Table.md#removerow)
- [set](/docs/classes/Table.md#set)
- [setNonEnumerablePrivateProperties](/docs/classes/Table.md#setnonenumerableprivateproperties)
- [toArray](/docs/classes/Table.md#toarray)
- [toArrayDataOnly](/docs/classes/Table.md#toarraydataonly)
- [toCSV](/docs/classes/Table.md#tocsv)
- [toJSON](/docs/classes/Table.md#tojson)
- [validateColMin](/docs/classes/Table.md#validatecolmin)
- [validateData](/docs/classes/Table.md#validatedata)
- [validateOptions](/docs/classes/Table.md#validateoptions)
- [validateRowMin](/docs/classes/Table.md#validaterowmin)
- [fromCSV](/docs/classes/Table.md#fromcsv)
- [fromJSON](/docs/classes/Table.md#fromjson)

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
| `options` | [`ITableOptions`](/docs/interfaces/ITableOptions.md)<`T`\> |

#### Overrides

[Base](/docs/classes/Base.md).[constructor](/docs/classes/Base.md#constructor)

#### Defined in

[src/libs/datastructures/src/Table.ts:95](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L95)

## Properties

### \_columnHeaders

• `Protected` `Optional` **\_columnHeaders**: `string`[]

#### Defined in

[src/libs/datastructures/src/Table.ts:69](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L69)

___

### \_data

• `Protected` **\_data**: `T`[][] = `[]`

#### Defined in

[src/libs/datastructures/src/Table.ts:71](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L71)

___

### \_rowHeaders

• `Protected` `Optional` **\_rowHeaders**: `string`[]

#### Defined in

[src/libs/datastructures/src/Table.ts:70](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L70)

## Accessors

### columnHeaders

• `get` **columnHeaders**(): `string`[]

Gets the column headers.

#### Returns

`string`[]

#### Defined in

[src/libs/datastructures/src/Table.ts:120](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L120)

___

### columns

• `get` **columns**(): `number`

Gets the number of cols in the table, not including headers.

#### Returns

`number`

#### Defined in

[src/libs/datastructures/src/Table.ts:106](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L106)

___

### klass

• `get` **klass**(): typeof [`Base`](/docs/classes/Base.md)

#### Returns

typeof [`Base`](/docs/classes/Base.md)

#### Inherited from

Base.klass

#### Defined in

[src/libs/mixins/src/Base.ts:14](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/mixins/src/Base.ts#L14)

___

### proto

• `get` **proto**(): `Record`<`string`, `any`\>

#### Returns

`Record`<`string`, `any`\>

#### Inherited from

Base.proto

#### Defined in

[src/libs/mixins/src/Base.ts:18](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/mixins/src/Base.ts#L18)

___

### rowHeaders

• `get` **rowHeaders**(): `string`[]

Gets the row headers.

#### Returns

`string`[]

#### Defined in

[src/libs/datastructures/src/Table.ts:130](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L130)

___

### rows

• `get` **rows**(): `number`

Gets the number of rows in the table, not including headers.

#### Returns

`number`

#### Defined in

[src/libs/datastructures/src/Table.ts:113](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L113)

## Methods

### assertNoAmbiguousOptions

▸ `Protected` **assertNoAmbiguousOptions**(`options`, `optionKeyPairs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Record`<`string`, `any`\> |
| `optionKeyPairs` | [`string`, `string`][] |

#### Returns

`void`

#### Inherited from

[Base](/docs/classes/Base.md).[assertNoAmbiguousOptions](/docs/classes/Base.md#assertnoambiguousoptions)

#### Defined in

[src/libs/mixins/src/Base.ts:68](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/mixins/src/Base.ts#L68)

___

### assertNoOptionsRequireMissingOptions

▸ `Protected` **assertNoOptionsRequireMissingOptions**(`options`, `optionKeyPairs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Record`<`string`, `any`\> |
| `optionKeyPairs` | [`string`, `string`][] |

#### Returns

`void`

#### Inherited from

[Base](/docs/classes/Base.md).[assertNoOptionsRequireMissingOptions](/docs/classes/Base.md#assertnooptionsrequiremissingoptions)

#### Defined in

[src/libs/mixins/src/Base.ts:76](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/mixins/src/Base.ts#L76)

___

### buildEmptyTableWithDimensions

▸ `Protected` **buildEmptyTableWithDimensions**(`rows`, `cols`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rows` | `number` |
| `cols` | `number` |

#### Returns

`void`

#### Defined in

[src/libs/datastructures/src/Table.ts:332](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L332)

___

### ensureValidColIndex

▸ `Protected` **ensureValidColIndex**(`col`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `string` \| `number` |

#### Returns

`number`

#### Defined in

[src/libs/datastructures/src/Table.ts:369](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L369)

___

### ensureValidRowIndex

▸ `Protected` **ensureValidRowIndex**(`row`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `string` \| `number` |

#### Returns

`number`

#### Defined in

[src/libs/datastructures/src/Table.ts:356](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L356)

___

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

[src/libs/datastructures/src/Table.ts:143](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L143)

___

### handleOptions

▸ `Protected` **handleOptions**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ITableOptions`](/docs/interfaces/ITableOptions.md)<`T`\> |

#### Returns

`void`

#### Defined in

[src/libs/datastructures/src/Table.ts:272](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L272)

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

[src/libs/datastructures/src/Table.ts:194](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L194)

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

[src/libs/datastructures/src/Table.ts:204](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L204)

___

### init

▸ `Protected` **init**(): `void`

#### Returns

`void`

#### Inherited from

[Base](/docs/classes/Base.md).[init](/docs/classes/Base.md#init)

#### Defined in

[src/libs/mixins/src/Base.ts:22](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/mixins/src/Base.ts#L22)

___

### normalizeCol

▸ `Protected` **normalizeCol**(`col`, `spreadsheetNotation`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `string` \| `number` |
| `spreadsheetNotation` | `boolean` |

#### Returns

`number`

#### Defined in

[src/libs/datastructures/src/Table.ts:382](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L382)

___

### normalizeColRow

▸ `Protected` **normalizeColRow**(`col`, `row`, `spreadsheetNotation`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `string` \| `number` |
| `row` | `string` \| `number` |
| `spreadsheetNotation` | `boolean` |

#### Returns

`number`[]

#### Defined in

[src/libs/datastructures/src/Table.ts:396](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L396)

___

### normalizeRow

▸ `Protected` **normalizeRow**(`row`, `spreadsheetNotation`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `string` \| `number` |
| `spreadsheetNotation` | `boolean` |

#### Returns

`number`

#### Defined in

[src/libs/datastructures/src/Table.ts:389](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L389)

___

### removeColumn

▸ **removeColumn**(`column`, `spreadsheetNotation?`): [`Table`](/docs/classes/Table.md)<`T`\>

Deletes a column in the table.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `column` | `string` \| `number` | `undefined` | Column index |
| `spreadsheetNotation` | `boolean` | `false` | Interpret row and col as spreadsheet coordinates, eg. ("A","1") |

#### Returns

[`Table`](/docs/classes/Table.md)<`T`\>

#### Defined in

[src/libs/datastructures/src/Table.ts:166](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L166)

___

### removeRow

▸ **removeRow**(`row`, `spreadsheetNotation?`): [`Table`](/docs/classes/Table.md)<`T`\>

Deletes a row in the table.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `row` | `string` \| `number` | `undefined` | Row index |
| `spreadsheetNotation` | `boolean` | `false` | Interpret row and col as spreadsheet coordinates, eg. ("A","1") |

#### Returns

[`Table`](/docs/classes/Table.md)<`T`\>

#### Defined in

[src/libs/datastructures/src/Table.ts:183](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L183)

___

### set

▸ **set**(`column`, `row`, `value`, `spreadsheetNotation?`): [`Table`](/docs/classes/Table.md)<`T`\>

Inserts a given value at a given (row, col) position.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `column` | `string` \| `number` | `undefined` | Column index |
| `row` | `string` \| `number` | `undefined` | Row index |
| `value` | `T` | `undefined` | The value to insert |
| `spreadsheetNotation` | `boolean` | `false` | Interpret row and col as spreadsheet coordinates, eg. ("A","1") |

#### Returns

[`Table`](/docs/classes/Table.md)<`T`\>

#### Defined in

[src/libs/datastructures/src/Table.ts:155](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L155)

___

### setNonEnumerablePrivateProperties

▸ `Protected` **setNonEnumerablePrivateProperties**(): `void`

Make the properties with property names that start with an underscore non-enumerable.

#### Returns

`void`

#### Inherited from

[Base](/docs/classes/Base.md).[setNonEnumerablePrivateProperties](/docs/classes/Base.md#setnonenumerableprivateproperties)

#### Defined in

[src/libs/mixins/src/Base.ts:64](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/mixins/src/Base.ts#L64)

___

### toArray

▸ **toArray**(): (`string` \| `T`)[][]

Returns the table as a two-dimensional array, including row and column headers..

#### Returns

(`string` \| `T`)[][]

#### Defined in

[src/libs/datastructures/src/Table.ts:214](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L214)

___

### toArrayDataOnly

▸ **toArrayDataOnly**(): `T`[][]

Returns the table as a two-dimensional array, without row and column headers.

#### Returns

`T`[][]

#### Defined in

[src/libs/datastructures/src/Table.ts:230](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L230)

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

[src/libs/datastructures/src/Table.ts:242](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L242)

___

### toJSON

▸ **toJSON**(): [`TableSerializedForm`](/docs/index.md#tableserializedform)<`T`\>

Override of the native toJSON method. When parsing the returned json string, it can be revived as a Table object when using the static Table.fromJSON method.

#### Returns

[`TableSerializedForm`](/docs/index.md#tableserializedform)<`T`\>

#### Implementation of

IRevivable.toJSON

#### Defined in

[src/libs/datastructures/src/Table.ts:249](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L249)

___

### validateColMin

▸ `Protected` **validateColMin**(`cols`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cols` | `number` |

#### Returns

`void`

#### Defined in

[src/libs/datastructures/src/Table.ts:347](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L347)

___

### validateData

▸ `Protected` **validateData**(): `void`

#### Returns

`void`

#### Defined in

[src/libs/datastructures/src/Table.ts:315](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L315)

___

### validateOptions

▸ `Protected` **validateOptions**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ITableOptions`](/docs/interfaces/ITableOptions.md)<`T`\> |

#### Returns

`void`

#### Defined in

[src/libs/datastructures/src/Table.ts:257](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L257)

___

### validateRowMin

▸ `Protected` **validateRowMin**(`rows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rows` | `number` |

#### Returns

`void`

#### Defined in

[src/libs/datastructures/src/Table.ts:338](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L338)

___

### fromCSV

▸ `Static` **fromCSV**<`T`\>(`csv`, `delimiter?`, `options?`): [`Table`](/docs/classes/Table.md)<`string` \| `T`\>

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
| `options` | [`ITableOptions`](/docs/interfaces/ITableOptions.md)<`string` \| `T`\> | `{}` | TableOptions constructor options. |

#### Returns

[`Table`](/docs/classes/Table.md)<`string` \| `T`\>

#### Defined in

[src/libs/datastructures/src/Table.ts:79](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L79)

___

### fromJSON

▸ `Static` **fromJSON**<`T`\>(`json`): [`Table`](/docs/classes/Table.md)<`T`\>

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

[`Table`](/docs/classes/Table.md)<`T`\>

#### Defined in

[src/libs/datastructures/src/Table.ts:91](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/datastructures/src/Table.ts#L91)
