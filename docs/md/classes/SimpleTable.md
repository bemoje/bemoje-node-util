[@bemoje/node-util](/docs/md/index.md) / SimpleTable

# Class: SimpleTable<T\>

Two-dimensional table class supporting column and row headers.

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the data in the table. |

## Hierarchy

- [`MixinBase`](/docs/md/classes/MixinBase.md)

  ↳ **`SimpleTable`**

## Table of contents

### Constructors

- [constructor](/docs/md/classes/SimpleTable.md#constructor)

### Properties

- [\_colIndexMap](/docs/md/classes/SimpleTable.md#_colindexmap)
- [\_data](/docs/md/classes/SimpleTable.md#_data)
- [\_headers](/docs/md/classes/SimpleTable.md#_headers)

### Accessors

- [data](/docs/md/classes/SimpleTable.md#data)
- [headers](/docs/md/classes/SimpleTable.md#headers)
- [numColumns](/docs/md/classes/SimpleTable.md#numcolumns)
- [numRows](/docs/md/classes/SimpleTable.md#numrows)

### Methods

- [assertRowValidLength](/docs/md/classes/SimpleTable.md#assertrowvalidlength)
- [get](/docs/md/classes/SimpleTable.md#get)
- [getConstructor](/docs/md/classes/SimpleTable.md#getconstructor)
- [getPrototype](/docs/md/classes/SimpleTable.md#getprototype)
- [set](/docs/md/classes/SimpleTable.md#set)
- [setNonEnumerableProperties](/docs/md/classes/SimpleTable.md#setnonenumerableproperties)
- [toArray](/docs/md/classes/SimpleTable.md#toarray)
- [toJSON](/docs/md/classes/SimpleTable.md#tojson)
- [fromJSON](/docs/md/classes/SimpleTable.md#fromjson)

## Constructors

### constructor

• **new SimpleTable**<`T`\>(`data`, `headers?`)

Creates a new SimpleTable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `T`[][] | The data of the table. |
| `headers?` | `string`[] | The headers of the table. |

#### Overrides

[MixinBase](/docs/md/classes/MixinBase.md).[constructor](/docs/md/classes/MixinBase.md#constructor)

#### Defined in

[src/datastructures/SimpleTable.ts:38](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/SimpleTable.ts#L38)

## Properties

### \_colIndexMap

• `Protected` **\_colIndexMap**: `Record`<`string`, `number`\> = `{}`

Map from column names to column indices.

#### Defined in

[src/datastructures/SimpleTable.ts:12](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/SimpleTable.ts#L12)

___

### \_data

• `Protected` **\_data**: `T`[][] = `[]`

The data of the table.

#### Defined in

[src/datastructures/SimpleTable.ts:22](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/SimpleTable.ts#L22)

___

### \_headers

• `Protected` **\_headers**: `string`[]

The headers of the table.

#### Defined in

[src/datastructures/SimpleTable.ts:17](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/SimpleTable.ts#L17)

## Accessors

### data

• `get` **data**(): `T`[][]

Returns the table as a two-dimensional array, without column headers.

#### Returns

`T`[][]

#### Defined in

[src/datastructures/SimpleTable.ts:92](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/SimpleTable.ts#L92)

___

### headers

• `get` **headers**(): `string`[]

Gets the column headers.

#### Returns

`string`[]

#### Defined in

[src/datastructures/SimpleTable.ts:85](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/SimpleTable.ts#L85)

___

### numColumns

• `get` **numColumns**(): `number`

Gets the number of cols in the table, not including headers.

#### Returns

`number`

#### Defined in

[src/datastructures/SimpleTable.ts:71](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/SimpleTable.ts#L71)

___

### numRows

• `get` **numRows**(): `number`

Gets the number of rows in the table, not including headers.

#### Returns

`number`

#### Defined in

[src/datastructures/SimpleTable.ts:78](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/SimpleTable.ts#L78)

## Methods

### assertRowValidLength

▸ `Protected` **assertRowValidLength**(`row`): `void`

Checks if a row has the correct length.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `row` | `T`[] | The row to check. |

#### Returns

`void`

#### Defined in

[src/datastructures/SimpleTable.ts:64](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/SimpleTable.ts#L64)

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

[src/datastructures/SimpleTable.ts:101](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/SimpleTable.ts#L101)

___

### getConstructor

▸ **getConstructor**(): typeof [`MixinBase`](/docs/md/classes/MixinBase.md)

#### Returns

typeof [`MixinBase`](/docs/md/classes/MixinBase.md)

#### Inherited from

[MixinBase](/docs/md/classes/MixinBase.md).[getConstructor](/docs/md/classes/MixinBase.md#getconstructor)

#### Defined in

[src/mixins/MixinBase.ts:7](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/mixins/MixinBase.ts#L7)

___

### getPrototype

▸ **getPrototype**(): [`MixinBase`](/docs/md/classes/MixinBase.md)

#### Returns

[`MixinBase`](/docs/md/classes/MixinBase.md)

#### Inherited from

[MixinBase](/docs/md/classes/MixinBase.md).[getPrototype](/docs/md/classes/MixinBase.md#getprototype)

#### Defined in

[src/mixins/MixinBase.ts:11](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/mixins/MixinBase.ts#L11)

___

### set

▸ **set**(`column`, `row`, `value`): [`SimpleTable`](/docs/md/classes/SimpleTable.md)<`T`\>

Inserts a given value at a given (row, col) position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `column` | `string` \| `number` | Column index |
| `row` | `number` | Row index |
| `value` | `T` | The value to insert |

#### Returns

[`SimpleTable`](/docs/md/classes/SimpleTable.md)<`T`\>

#### Defined in

[src/datastructures/SimpleTable.ts:114](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/SimpleTable.ts#L114)

___

### setNonEnumerableProperties

▸ `Protected` **setNonEnumerableProperties**(`...propertyNames`): `void`

Make the properties with the given property names non-enumerable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...propertyNames` | `string`[] |

#### Returns

`void`

#### Inherited from

[MixinBase](/docs/md/classes/MixinBase.md).[setNonEnumerableProperties](/docs/md/classes/MixinBase.md#setnonenumerableproperties)

#### Defined in

[src/mixins/MixinBase.ts:18](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/mixins/MixinBase.ts#L18)

___

### toArray

▸ **toArray**(): (`string` \| `T`)[][]

Returns the table as a two-dimensional array, including row and column headers..

#### Returns

(`string` \| `T`)[][]

#### Defined in

[src/datastructures/SimpleTable.ts:125](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/SimpleTable.ts#L125)

___

### toJSON

▸ **toJSON**(): [`ISimpleTableSerializedForm`](/docs/md/interfaces/ISimpleTableSerializedForm.md)<`T`\>

Override of the native toJSON method. When parsing the returned json string, it can be revived as a Table object when using the static Table.fromJSON method.

#### Returns

[`ISimpleTableSerializedForm`](/docs/md/interfaces/ISimpleTableSerializedForm.md)<`T`\>

#### Defined in

[src/datastructures/SimpleTable.ts:133](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/SimpleTable.ts#L133)

___

### fromJSON

▸ `Static` **fromJSON**<`T`\>(`json`): [`SimpleTable`](/docs/md/classes/SimpleTable.md)<`T`\>

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

[`SimpleTable`](/docs/md/classes/SimpleTable.md)<`T`\>

#### Defined in

[src/datastructures/SimpleTable.ts:28](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/datastructures/SimpleTable.ts#L28)
