[@bemoje/bemoje-node-util](../README.md) / [Exports](../modules.md) / IDataStructure

# Interface: IDataStructure<T\>

Interface for data structures.

## Type parameters

Name |
:------ |
`T` |

## Hierarchy

* **IDataStructure**

  ↳ [*IDataStructure2D*](idatastructure2d.md)

  ↳ [*IIndexedDataStructure*](iindexeddatastructure.md)

  ↳ [*IKeyValueDataStructure*](ikeyvaluedatastructure.md)

## Table of contents

### Methods

- [[Symbol.iterator]](idatastructure.md#[symbol.iterator])
- [clone](idatastructure.md#clone)
- [deepEquals](idatastructure.md#deepequals)
- [every](idatastructure.md#every)
- [forEach](idatastructure.md#foreach)
- [isImmutable](idatastructure.md#isimmutable)
- [isSameInstanceAs](idatastructure.md#issameinstanceas)
- [map](idatastructure.md#map)
- [setImmutable](idatastructure.md#setimmutable)
- [some](idatastructure.md#some)
- [toArray](idatastructure.md#toarray)
- [values](idatastructure.md#values)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Generator*<any, any, unknown\>

**Returns:** *Generator*<any, any, unknown\>

Defined in: libs/class.ts:19

___

### clone

▸ **clone**(): T

**Returns:** T

Defined in: libs/class.ts:14

___

### deepEquals

▸ **deepEquals**(`other`: T): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`other` | T |

**Returns:** *boolean*

Defined in: libs/class.ts:11

___

### every

▸ **every**(`f`: (`value`: *any*, ...`args`: []) => *boolean*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`f` | (`value`: *any*, ...`args`: []) => *boolean* |

**Returns:** *boolean*

Defined in: libs/class.ts:18

___

### forEach

▸ **forEach**(`f`: (`value`: *any*, ...`args`: []) => *boolean* \| *void*): T

#### Parameters:

Name | Type |
:------ | :------ |
`f` | (`value`: *any*, ...`args`: []) => *boolean* \| *void* |

**Returns:** T

Defined in: libs/class.ts:15

___

### isImmutable

▸ **isImmutable**(): *boolean*

**Returns:** *boolean*

Defined in: libs/class.ts:12

___

### isSameInstanceAs

▸ **isSameInstanceAs**(`other`: T): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`other` | T |

**Returns:** *boolean*

Defined in: libs/class.ts:10

___

### map

▸ **map**(`f`: (`value`: *any*, ...`args`: []) => *any*): T

#### Parameters:

Name | Type |
:------ | :------ |
`f` | (`value`: *any*, ...`args`: []) => *any* |

**Returns:** T

Defined in: libs/class.ts:16

___

### setImmutable

▸ **setImmutable**(`immutable`: *boolean*): T

#### Parameters:

Name | Type |
:------ | :------ |
`immutable` | *boolean* |

**Returns:** T

Defined in: libs/class.ts:13

___

### some

▸ **some**(`f`: (`value`: *any*, ...`args`: []) => *boolean*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`f` | (`value`: *any*, ...`args`: []) => *boolean* |

**Returns:** *boolean*

Defined in: libs/class.ts:17

___

### toArray

▸ **toArray**(): *any*[]

**Returns:** *any*[]

Defined in: libs/class.ts:9

___

### values

▸ **values**(): *Generator*<any, any, unknown\>

**Returns:** *Generator*<any, any, unknown\>

Defined in: libs/class.ts:20
