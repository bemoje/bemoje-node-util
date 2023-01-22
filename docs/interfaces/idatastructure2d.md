[@bemoje/bemoje-node-util](../README.md) / [Exports](../modules.md) / IDataStructure2D

# Interface: IDataStructure2D<T\>

Interface for 2-dimensional data structures, like matrices and tables

## Type parameters

Name |
:------ |
`T` |

## Hierarchy

* [*IDataStructure*](idatastructure.md)<T\>

  ↳ **IDataStructure2D**

## Implemented by

* [*Matrix*](../classes/matrix.md)

## Table of contents

### Methods

- [[Symbol.iterator]](idatastructure2d.md#[symbol.iterator])
- [clone](idatastructure2d.md#clone)
- [deepEquals](idatastructure2d.md#deepequals)
- [every](idatastructure2d.md#every)
- [forEach](idatastructure2d.md#foreach)
- [get](idatastructure2d.md#get)
- [has](idatastructure2d.md#has)
- [isImmutable](idatastructure2d.md#isimmutable)
- [isSameInstanceAs](idatastructure2d.md#issameinstanceas)
- [map](idatastructure2d.md#map)
- [set](idatastructure2d.md#set)
- [setImmutable](idatastructure2d.md#setimmutable)
- [some](idatastructure2d.md#some)
- [toArray](idatastructure2d.md#toarray)
- [values](idatastructure2d.md#values)

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

▸ **every**(`f`: (`value`: *any*, `row`: *number*, `col`: *number*) => *boolean*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`f` | (`value`: *any*, `row`: *number*, `col`: *number*) => *boolean* |

**Returns:** *boolean*

Overrides: [IDataStructure](idatastructure.md)

Defined in: libs/class.ts:33

___

### forEach

▸ **forEach**(`f`: (`value`: *any*, `row`: *number*, `col`: *number*) => *boolean* \| *void*): T

#### Parameters:

Name | Type |
:------ | :------ |
`f` | (`value`: *any*, `row`: *number*, `col`: *number*) => *boolean* \| *void* |

**Returns:** T

Overrides: [IDataStructure](idatastructure.md)

Defined in: libs/class.ts:30

___

### get

▸ **get**(`row`: *number*, `col`: *number*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`row` | *number* |
`col` | *number* |

**Returns:** *any*

Defined in: libs/class.ts:28

___

### has

▸ **has**(`row`: *number*, `col`: *number*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`row` | *number* |
`col` | *number* |

**Returns:** *boolean*

Defined in: libs/class.ts:29

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

### map

▸ **map**(`f`: (`value`: *any*, `row`: *number*, `col`: *number*) => *any*): T

#### Parameters:

Name | Type |
:------ | :------ |
`f` | (`value`: *any*, `row`: *number*, `col`: *number*) => *any* |

**Returns:** T

Overrides: [IDataStructure](idatastructure.md)

Defined in: libs/class.ts:31

___

### set

▸ **set**(`row`: *number*, `col`: *number*, `value`: *any*): T

#### Parameters:

Name | Type |
:------ | :------ |
`row` | *number* |
`col` | *number* |
`value` | *any* |

**Returns:** T

Defined in: libs/class.ts:27

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

▸ **some**(`f`: (`value`: *any*, `row`: *number*, `col`: *number*) => *boolean*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`f` | (`value`: *any*, `row`: *number*, `col`: *number*) => *boolean* |

**Returns:** *boolean*

Overrides: [IDataStructure](idatastructure.md)

Defined in: libs/class.ts:32

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
