[@bemoje/node-util](/docs/index.md) / SimpleTable

# Class: SimpleTable<T\>

Two-dimensional table class supporting column and row headers.

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the data in the table. |

## Hierarchy

- [`MixinBase`](/docs/classes/MixinBase.md)

  ↳ **`SimpleTable`**

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
- [numColumns](/docs/classes/SimpleTable.md#numcolumns)
- [numRows](/docs/classes/SimpleTable.md#numrows)

### Methods

- [assertRowValidLength](/docs/classes/SimpleTable.md#assertrowvalidlength)
- [get](/docs/classes/SimpleTable.md#get)
- [getConstructor](/docs/classes/SimpleTable.md#getconstructor)
- [getPrototype](/docs/classes/SimpleTable.md#getprototype)
- [set](/docs/classes/SimpleTable.md#set)
- [setNonEnumerablePrivateProperties](/docs/classes/SimpleTable.md#setnonenumerableprivateproperties)
- [setNonEnumerableProperties](/docs/classes/SimpleTable.md#setnonenumerableproperties)
- [toArray](/docs/classes/SimpleTable.md#toarray)
- [toJSON](/docs/classes/SimpleTable.md#tojson)
- [fromJSON](/docs/classes/SimpleTable.md#fromjson)

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

[MixinBase](/docs/classes/MixinBase.md).[constructor](/docs/classes/MixinBase.md#constructor)

#### Defined in

[src/datastructures/SimpleTable.ts:38](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/datastructures/SimpleTable.ts#L38)

## Properties

### \_colIndexMap

• `Protected` **\_colIndexMap**: `Record`<`string`, `number`\> = `{}`

Map from column names to column indices.

#### Defined in

[src/datastructures/SimpleTable.ts:12](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/datastructures/SimpleTable.ts#L12)

___

### \_data

• `Protected` **\_data**: `T`[][] = `[]`

The data of the table.

#### Defined in

[src/datastructures/SimpleTable.ts:22](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/datastructures/SimpleTable.ts#L22)

___

### \_headers

• `Protected` **\_headers**: `string`[]

The headers of the table.

#### Defined in

[src/datastructures/SimpleTable.ts:17](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/datastructures/SimpleTable.ts#L17)

## Accessors

### data

• `get` **data**(): `T`[][]

Returns the table as a two-dimensional array, without column headers.

#### Returns

`T`[][]

#### Defined in

[src/datastructures/SimpleTable.ts:93](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/datastructures/SimpleTable.ts#L93)

___

### headers

• `get` **headers**(): `string`[]

Gets the column headers.

#### Returns

`string`[]

#### Defined in

[src/datastructures/SimpleTable.ts:86](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/datastructures/SimpleTable.ts#L86)

___

### numColumns

• `get` **numColumns**(): `number`

Gets the number of cols in the table, not including headers.

#### Returns

`number`

#### Defined in

[src/datastructures/SimpleTable.ts:72](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/datastructures/SimpleTable.ts#L72)

___

### numRows

• `get` **numRows**(): `number`

Gets the number of rows in the table, not including headers.

#### Returns

`number`

#### Defined in

[src/datastructures/SimpleTable.ts:79](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/datastructures/SimpleTable.ts#L79)

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

[src/datastructures/SimpleTable.ts:65](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/datastructures/SimpleTable.ts#L65)

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

[src/datastructures/SimpleTable.ts:102](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/datastructures/SimpleTable.ts#L102)

___

### getConstructor

▸ **getConstructor**(): typeof [`MixinBase`](/docs/classes/MixinBase.md)

#### Returns

typeof [`MixinBase`](/docs/classes/MixinBase.md)

#### Inherited from

[MixinBase](/docs/classes/MixinBase.md).[getConstructor](/docs/classes/MixinBase.md#getconstructor)

#### Defined in

[src/mixins/MixinBase.ts:8](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/mixins/MixinBase.ts#L8)

___

### getPrototype

▸ **getPrototype**(): [`MixinBase`](/docs/classes/MixinBase.md)

#### Returns

[`MixinBase`](/docs/classes/MixinBase.md)

#### Inherited from

[MixinBase](/docs/classes/MixinBase.md).[getPrototype](/docs/classes/MixinBase.md#getprototype)

#### Defined in

[src/mixins/MixinBase.ts:12](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/mixins/MixinBase.ts#L12)

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

[src/datastructures/SimpleTable.ts:115](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/datastructures/SimpleTable.ts#L115)

___

### setNonEnumerablePrivateProperties

▸ `Protected` **setNonEnumerablePrivateProperties**(): `void`

Make the properties with property names that start with an underscore non-enumerable.

#### Returns

`void`

#### Inherited from

[MixinBase](/docs/classes/MixinBase.md).[setNonEnumerablePrivateProperties](/docs/classes/MixinBase.md#setnonenumerableprivateproperties)

#### Defined in

[src/mixins/MixinBase.ts:19](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/mixins/MixinBase.ts#L19)

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

[MixinBase](/docs/classes/MixinBase.md).[setNonEnumerableProperties](/docs/classes/MixinBase.md#setnonenumerableproperties)

#### Defined in

[src/mixins/MixinBase.ts:26](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/mixins/MixinBase.ts#L26)

___

### toArray

▸ **toArray**(): (`string` \| `T`)[][]

Returns the table as a two-dimensional array, including row and column headers..

#### Returns

(`string` \| `T`)[][]

#### Defined in

[src/datastructures/SimpleTable.ts:126](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/datastructures/SimpleTable.ts#L126)

___

### toJSON

▸ **toJSON**(): [`ISimpleTableSerializedForm`](/docs/interfaces/ISimpleTableSerializedForm.md)<`T`\>

Override of the native toJSON method. When parsing the returned json string, it can be revived as a Table object when using the static Table.fromJSON method.

#### Returns

[`ISimpleTableSerializedForm`](/docs/interfaces/ISimpleTableSerializedForm.md)<`T`\>

#### Defined in

[src/datastructures/SimpleTable.ts:134](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/datastructures/SimpleTable.ts#L134)

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

[src/datastructures/SimpleTable.ts:28](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/datastructures/SimpleTable.ts#L28)
