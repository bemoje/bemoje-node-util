[@bemoje/node-util](/docs/index.md) / SimpleTable

# Class: SimpleTable<T\>

Two-dimensional table class supporting column and row headers.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Base`](/docs/classes/Base.md)

  ↳ **`SimpleTable`**

## Implements

- [`IRevivable`](/docs/interfaces/IRevivable.md)<[`SimpleTableSerializedForm`](/docs/index.md#simpletableserializedform)<`T`\>\>

## Table of contents

### Constructors

- [constructor](/docs/classes/SimpleTable.md#constructor)

### Properties

- [\_colIndexMap](/docs/classes/SimpleTable.md#_colindexmap)
- [\_data](/docs/classes/SimpleTable.md#_data)
- [\_headers](/docs/classes/SimpleTable.md#_headers)

### Accessors

- [data](/docs/classes/SimpleTable.md#data)
- [headers](/docs/classes/SimpleTable.md#headers)
- [klass](/docs/classes/SimpleTable.md#klass)
- [numColumns](/docs/classes/SimpleTable.md#numcolumns)
- [numRows](/docs/classes/SimpleTable.md#numrows)
- [proto](/docs/classes/SimpleTable.md#proto)

### Methods

- [assertNoAmbiguousOptions](/docs/classes/SimpleTable.md#assertnoambiguousoptions)
- [assertNoOptionsRequireMissingOptions](/docs/classes/SimpleTable.md#assertnooptionsrequiremissingoptions)
- [assertRowValidLength](/docs/classes/SimpleTable.md#assertrowvalidlength)
- [get](/docs/classes/SimpleTable.md#get)
- [init](/docs/classes/SimpleTable.md#init)
- [set](/docs/classes/SimpleTable.md#set)
- [setNonEnumerablePrivateProperties](/docs/classes/SimpleTable.md#setnonenumerableprivateproperties)
- [toArray](/docs/classes/SimpleTable.md#toarray)
- [toJSON](/docs/classes/SimpleTable.md#tojson)
- [fromJSON](/docs/classes/SimpleTable.md#fromjson)

## Constructors

### constructor

• **new SimpleTable**<`T`\>(`data`, `headers?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T`[][] |
| `headers?` | `string`[] |

#### Overrides

[Base](/docs/classes/Base.md).[constructor](/docs/classes/Base.md#constructor)

#### Defined in

[src/libs/datastructures/src/SimpleTable.ts:26](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/datastructures/src/SimpleTable.ts#L26)

## Properties

### \_colIndexMap

• `Protected` **\_colIndexMap**: `Record`<`string`, `number`\> = `{}`

#### Defined in

[src/libs/datastructures/src/SimpleTable.ts:13](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/datastructures/src/SimpleTable.ts#L13)

___

### \_data

• `Protected` **\_data**: `T`[][] = `[]`

#### Defined in

[src/libs/datastructures/src/SimpleTable.ts:15](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/datastructures/src/SimpleTable.ts#L15)

___

### \_headers

• `Protected` **\_headers**: `string`[]

#### Defined in

[src/libs/datastructures/src/SimpleTable.ts:14](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/datastructures/src/SimpleTable.ts#L14)

## Accessors

### data

• `get` **data**(): `T`[][]

Returns the table as a two-dimensional array, without column headers.

#### Returns

`T`[][]

#### Defined in

[src/libs/datastructures/src/SimpleTable.ts:78](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/datastructures/src/SimpleTable.ts#L78)

___

### headers

• `get` **headers**(): `string`[]

Gets the column headers.

#### Returns

`string`[]

#### Defined in

[src/libs/datastructures/src/SimpleTable.ts:71](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/datastructures/src/SimpleTable.ts#L71)

___

### klass

• `get` **klass**(): typeof [`Base`](/docs/classes/Base.md)

#### Returns

typeof [`Base`](/docs/classes/Base.md)

#### Inherited from

Base.klass

#### Defined in

[src/libs/mixins/src/Base.ts:17](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/mixins/src/Base.ts#L17)

___

### numColumns

• `get` **numColumns**(): `number`

Gets the number of cols in the table, not including headers.

#### Returns

`number`

#### Defined in

[src/libs/datastructures/src/SimpleTable.ts:57](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/datastructures/src/SimpleTable.ts#L57)

___

### numRows

• `get` **numRows**(): `number`

Gets the number of rows in the table, not including headers.

#### Returns

`number`

#### Defined in

[src/libs/datastructures/src/SimpleTable.ts:64](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/datastructures/src/SimpleTable.ts#L64)

___

### proto

• `get` **proto**(): [`Obj`](/docs/index.md#obj)

#### Returns

[`Obj`](/docs/index.md#obj)

#### Inherited from

Base.proto

#### Defined in

[src/libs/mixins/src/Base.ts:21](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/mixins/src/Base.ts#L21)

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

[src/libs/mixins/src/Base.ts:71](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/mixins/src/Base.ts#L71)

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

[src/libs/mixins/src/Base.ts:79](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/mixins/src/Base.ts#L79)

___

### assertRowValidLength

▸ `Protected` **assertRowValidLength**(`row`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `T`[] |

#### Returns

`void`

#### Defined in

[src/libs/datastructures/src/SimpleTable.ts:49](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/datastructures/src/SimpleTable.ts#L49)

___

### get

▸ **get**(`column`, `row`): `T`

Returns a value at a given (row, col) position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `column` | `string` \| `number` | Column index or name |
| `row` | `number` | Row index |

#### Returns

`T`

#### Defined in

[src/libs/datastructures/src/SimpleTable.ts:87](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/datastructures/src/SimpleTable.ts#L87)

___

### init

▸ `Protected` **init**(): `void`

#### Returns

`void`

#### Inherited from

[Base](/docs/classes/Base.md).[init](/docs/classes/Base.md#init)

#### Defined in

[src/libs/mixins/src/Base.ts:25](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/mixins/src/Base.ts#L25)

___

### set

▸ **set**(`column`, `row`, `value`): [`SimpleTable`](/docs/classes/SimpleTable.md)<`T`\>

Inserts a given value at a given (row, col) position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `column` | `string` \| `number` | Column index |
| `row` | `number` | Row index |
| `value` | `T` | The value to insert |

#### Returns

[`SimpleTable`](/docs/classes/SimpleTable.md)<`T`\>

#### Defined in

[src/libs/datastructures/src/SimpleTable.ts:100](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/datastructures/src/SimpleTable.ts#L100)

___

### setNonEnumerablePrivateProperties

▸ `Protected` **setNonEnumerablePrivateProperties**(): `void`

Make the properties with property names that start with an underscore non-enumerable.

#### Returns

`void`

#### Inherited from

[Base](/docs/classes/Base.md).[setNonEnumerablePrivateProperties](/docs/classes/Base.md#setnonenumerableprivateproperties)

#### Defined in

[src/libs/mixins/src/Base.ts:67](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/mixins/src/Base.ts#L67)

___

### toArray

▸ **toArray**(): (`string` \| `T`)[][]

Returns the table as a two-dimensional array, including row and column headers..

#### Returns

(`string` \| `T`)[][]

#### Defined in

[src/libs/datastructures/src/SimpleTable.ts:111](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/datastructures/src/SimpleTable.ts#L111)

___

### toJSON

▸ **toJSON**(): [`SimpleTableSerializedForm`](/docs/index.md#simpletableserializedform)<`T`\>

Override of the native toJSON method. When parsing the returned json string, it can be revived as a Table object when using the static Table.fromJSON method.

#### Returns

[`SimpleTableSerializedForm`](/docs/index.md#simpletableserializedform)<`T`\>

#### Implementation of

IRevivable.toJSON

#### Defined in

[src/libs/datastructures/src/SimpleTable.ts:119](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/datastructures/src/SimpleTable.ts#L119)

___

### fromJSON

▸ `Static` **fromJSON**<`T`\>(`json`): [`SimpleTable`](/docs/classes/SimpleTable.md)<`T`\>

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

[`SimpleTable`](/docs/classes/SimpleTable.md)<`T`\>

#### Defined in

[src/libs/datastructures/src/SimpleTable.ts:21](https://github.com/bemoje/bemoje-node-util/blob/fd39a18/src/libs/datastructures/src/SimpleTable.ts#L21)
