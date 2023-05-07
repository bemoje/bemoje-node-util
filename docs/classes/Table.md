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
- [toJSON](/docs/classes/Table.md#tojson)
- [validateColMin](/docs/classes/Table.md#validatecolmin)
- [validateData](/docs/classes/Table.md#validatedata)
- [validateOptions](/docs/classes/Table.md#validateoptions)
- [validateRowMin](/docs/classes/Table.md#validaterowmin)
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

[src/libs/datastructures/src/Table.ts:81](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L81)

## Properties

### \_columnHeaders

• `Protected` `Optional` **\_columnHeaders**: `string`[]

#### Defined in

[src/libs/datastructures/src/Table.ts:69](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L69)

___

### \_data

• `Protected` **\_data**: `T`[][] = `[]`

#### Defined in

[src/libs/datastructures/src/Table.ts:71](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L71)

___

### \_rowHeaders

• `Protected` `Optional` **\_rowHeaders**: `string`[]

#### Defined in

[src/libs/datastructures/src/Table.ts:70](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L70)

## Accessors

### columnHeaders

• `get` **columnHeaders**(): `string`[]

Gets the column headers.

#### Returns

`string`[]

#### Defined in

[src/libs/datastructures/src/Table.ts:106](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L106)

___

### columns

• `get` **columns**(): `number`

Gets the number of cols in the table, not including headers.

#### Returns

`number`

#### Defined in

[src/libs/datastructures/src/Table.ts:92](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L92)

___

### klass

• `get` **klass**(): typeof [`Base`](/docs/classes/Base.md)

#### Returns

typeof [`Base`](/docs/classes/Base.md)

#### Inherited from

Base.klass

#### Defined in

[src/libs/mixins/src/Base.ts:17](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/mixins/src/Base.ts#L17)

___

### proto

• `get` **proto**(): [`Obj`](/docs/index.md#obj)

#### Returns

[`Obj`](/docs/index.md#obj)

#### Inherited from

Base.proto

#### Defined in

[src/libs/mixins/src/Base.ts:21](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/mixins/src/Base.ts#L21)

___

### rowHeaders

• `get` **rowHeaders**(): `string`[]

Gets the row headers.

#### Returns

`string`[]

#### Defined in

[src/libs/datastructures/src/Table.ts:116](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L116)

___

### rows

• `get` **rows**(): `number`

Gets the number of rows in the table, not including headers.

#### Returns

`number`

#### Defined in

[src/libs/datastructures/src/Table.ts:99](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L99)

## Methods

### assertNoAmbiguousOptions

▸ `Protected` **assertNoAmbiguousOptions**(`options`, `optionKeyPairs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Obj`](/docs/index.md#obj) |
| `optionKeyPairs` | [`string`, `string`][] |

#### Returns

`void`

#### Inherited from

[Base](/docs/classes/Base.md).[assertNoAmbiguousOptions](/docs/classes/Base.md#assertnoambiguousoptions)

#### Defined in

[src/libs/mixins/src/Base.ts:71](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/mixins/src/Base.ts#L71)

___

### assertNoOptionsRequireMissingOptions

▸ `Protected` **assertNoOptionsRequireMissingOptions**(`options`, `optionKeyPairs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Obj`](/docs/index.md#obj) |
| `optionKeyPairs` | [`string`, `string`][] |

#### Returns

`void`

#### Inherited from

[Base](/docs/classes/Base.md).[assertNoOptionsRequireMissingOptions](/docs/classes/Base.md#assertnooptionsrequiremissingoptions)

#### Defined in

[src/libs/mixins/src/Base.ts:79](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/mixins/src/Base.ts#L79)

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

[src/libs/datastructures/src/Table.ts:317](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L317)

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

[src/libs/datastructures/src/Table.ts:354](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L354)

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

[src/libs/datastructures/src/Table.ts:341](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L341)

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

[src/libs/datastructures/src/Table.ts:129](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L129)

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

[src/libs/datastructures/src/Table.ts:257](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L257)

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

[src/libs/datastructures/src/Table.ts:187](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L187)

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

[src/libs/datastructures/src/Table.ts:197](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L197)

___

### init

▸ `Protected` **init**(): `void`

#### Returns

`void`

#### Inherited from

[Base](/docs/classes/Base.md).[init](/docs/classes/Base.md#init)

#### Defined in

[src/libs/mixins/src/Base.ts:25](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/mixins/src/Base.ts#L25)

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

[src/libs/datastructures/src/Table.ts:367](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L367)

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

[src/libs/datastructures/src/Table.ts:381](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L381)

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

[src/libs/datastructures/src/Table.ts:374](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L374)

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

[src/libs/datastructures/src/Table.ts:159](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L159)

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

[src/libs/datastructures/src/Table.ts:176](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L176)

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

[src/libs/datastructures/src/Table.ts:142](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L142)

___

### setNonEnumerablePrivateProperties

▸ `Protected` **setNonEnumerablePrivateProperties**(): `void`

Make the properties with property names that start with an underscore non-enumerable.

#### Returns

`void`

#### Inherited from

[Base](/docs/classes/Base.md).[setNonEnumerablePrivateProperties](/docs/classes/Base.md#setnonenumerableprivateproperties)

#### Defined in

[src/libs/mixins/src/Base.ts:67](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/mixins/src/Base.ts#L67)

___

### toArray

▸ **toArray**(): (`string` \| `T`)[][]

Returns the table as a two-dimensional array, including row and column headers..

#### Returns

(`string` \| `T`)[][]

#### Defined in

[src/libs/datastructures/src/Table.ts:207](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L207)

___

### toArrayDataOnly

▸ **toArrayDataOnly**(): `T`[][]

Returns the table as a two-dimensional array, without row and column headers.

#### Returns

`T`[][]

#### Defined in

[src/libs/datastructures/src/Table.ts:223](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L223)

___

### toJSON

▸ **toJSON**(): [`TableSerializedForm`](/docs/index.md#tableserializedform)<`T`\>

Override of the native toJSON method. When parsing the returned json string, it can be revived as a Table object when using the static Table.fromJSON method.

#### Returns

[`TableSerializedForm`](/docs/index.md#tableserializedform)<`T`\>

#### Implementation of

IRevivable.toJSON

#### Defined in

[src/libs/datastructures/src/Table.ts:234](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L234)

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

[src/libs/datastructures/src/Table.ts:332](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L332)

___

### validateData

▸ `Protected` **validateData**(): `void`

#### Returns

`void`

#### Defined in

[src/libs/datastructures/src/Table.ts:300](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L300)

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

[src/libs/datastructures/src/Table.ts:242](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L242)

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

[src/libs/datastructures/src/Table.ts:323](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L323)

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

[src/libs/datastructures/src/Table.ts:77](https://github.com/bemoje/bemoje-node-util/blob/8a90c26/src/libs/datastructures/src/Table.ts#L77)
