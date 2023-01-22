[@bemoje/bemoje-node-util](../README.md) / [Exports](../modules.md) / IIndexedDataStructure

# Interface: IIndexedDataStructure<T\>

Interface for indexed data structures, like arrays

## Type parameters

Name |
:------ |
`T` |

## Hierarchy

* [*IDataStructure*](idatastructure.md)<T\>

  ↳ **IIndexedDataStructure**

## Table of contents

### Methods

- [[Symbol.iterator]](iindexeddatastructure.md#[symbol.iterator])
- [clone](iindexeddatastructure.md#clone)
- [deepEquals](iindexeddatastructure.md#deepequals)
- [every](iindexeddatastructure.md#every)
- [forEach](iindexeddatastructure.md#foreach)
- [get](iindexeddatastructure.md#get)
- [has](iindexeddatastructure.md#has)
- [isImmutable](iindexeddatastructure.md#isimmutable)
- [isSameInstanceAs](iindexeddatastructure.md#issameinstanceas)
- [keys](iindexeddatastructure.md#keys)
- [map](iindexeddatastructure.md#map)
- [set](iindexeddatastructure.md#set)
- [setImmutable](iindexeddatastructure.md#setimmutable)
- [some](iindexeddatastructure.md#some)
- [toArray](iindexeddatastructure.md#toarray)
- [values](iindexeddatastructure.md#values)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Generator*<any, any, unknown\>

**Returns:** *Generator*<any, any, unknown\>

Inherited from: [IDataStructure](idatastructure.md)

Defined in: libs/class.ts:19

___

### clone

▸ **clone**(): T

**Returns:** T

Inherited from: [IDataStructure](idatastructure.md)

Defined in: libs/class.ts:14

___

### deepEquals

▸ **deepEquals**(`other`: T): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`other` | T |

**Returns:** *boolean*

Inherited from: [IDataStructure](idatastructure.md)

Defined in: libs/class.ts:11

___

### every

▸ **every**(`f`: (`value`: *any*, `index`: *number*) => *boolean*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`f` | (`value`: *any*, `index`: *number*) => *boolean* |

**Returns:** *boolean*

Overrides: [IDataStructure](idatastructure.md)

Defined in: libs/class.ts:46

___

### forEach

▸ **forEach**(`f`: (`value`: *any*, `index`: *number*) => *boolean* \| *void*): T

#### Parameters:

Name | Type |
:------ | :------ |
`f` | (`value`: *any*, `index`: *number*) => *boolean* \| *void* |

**Returns:** T

Overrides: [IDataStructure](idatastructure.md)

Defined in: libs/class.ts:43

___

### get

▸ **get**(`index`: *number*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |

**Returns:** *any*

Defined in: libs/class.ts:41

___

### has

▸ **has**(`index`: *number*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |

**Returns:** *boolean*

Defined in: libs/class.ts:42

___

### isImmutable

▸ **isImmutable**(): *boolean*

**Returns:** *boolean*

Inherited from: [IDataStructure](idatastructure.md)

Defined in: libs/class.ts:12

___

### isSameInstanceAs

▸ **isSameInstanceAs**(`other`: T): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`other` | T |

**Returns:** *boolean*

Inherited from: [IDataStructure](idatastructure.md)

Defined in: libs/class.ts:10

___

### keys

▸ **keys**(): *Generator*<any, any, unknown\>

**Returns:** *Generator*<any, any, unknown\>

Defined in: libs/class.ts:47

___

### map

▸ **map**(`f`: (`value`: *any*, `index`: *number*) => *any*): T

#### Parameters:

Name | Type |
:------ | :------ |
`f` | (`value`: *any*, `index`: *number*) => *any* |

**Returns:** T

Overrides: [IDataStructure](idatastructure.md)

Defined in: libs/class.ts:44

___

### set

▸ **set**(`index`: *number*, `value`: *any*): T

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |
`value` | *any* |

**Returns:** T

Defined in: libs/class.ts:40

___

### setImmutable

▸ **setImmutable**(`immutable`: *boolean*): T

#### Parameters:

Name | Type |
:------ | :------ |
`immutable` | *boolean* |

**Returns:** T

Inherited from: [IDataStructure](idatastructure.md)

Defined in: libs/class.ts:13

___

### some

▸ **some**(`f`: (`value`: *any*, `index`: *number*) => *boolean*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`f` | (`value`: *any*, `index`: *number*) => *boolean* |

**Returns:** *boolean*

Overrides: [IDataStructure](idatastructure.md)

Defined in: libs/class.ts:45

___

### toArray

▸ **toArray**(): *any*[]

**Returns:** *any*[]

Inherited from: [IDataStructure](idatastructure.md)

Defined in: libs/class.ts:9

___

### values

▸ **values**(): *Generator*<any, any, unknown\>

**Returns:** *Generator*<any, any, unknown\>

Inherited from: [IDataStructure](idatastructure.md)

Defined in: libs/class.ts:20
