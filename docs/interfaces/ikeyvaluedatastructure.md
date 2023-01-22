[@bemoje/bemoje-node-util](../README.md) / [Exports](../modules.md) / IKeyValueDataStructure

# Interface: IKeyValueDataStructure<T\>

Interface for indexed data structures, like hash maps

## Type parameters

Name |
:------ |
`T` |

## Hierarchy

* [*IDataStructure*](idatastructure.md)<T\>

  ↳ **IKeyValueDataStructure**

## Table of contents

### Methods

- [[Symbol.iterator]](ikeyvaluedatastructure.md#[symbol.iterator])
- [clone](ikeyvaluedatastructure.md#clone)
- [deepEquals](ikeyvaluedatastructure.md#deepequals)
- [entries](ikeyvaluedatastructure.md#entries)
- [every](ikeyvaluedatastructure.md#every)
- [forEach](ikeyvaluedatastructure.md#foreach)
- [get](ikeyvaluedatastructure.md#get)
- [has](ikeyvaluedatastructure.md#has)
- [isImmutable](ikeyvaluedatastructure.md#isimmutable)
- [isSameInstanceAs](ikeyvaluedatastructure.md#issameinstanceas)
- [keys](ikeyvaluedatastructure.md#keys)
- [map](ikeyvaluedatastructure.md#map)
- [set](ikeyvaluedatastructure.md#set)
- [setImmutable](ikeyvaluedatastructure.md#setimmutable)
- [some](ikeyvaluedatastructure.md#some)
- [toArray](ikeyvaluedatastructure.md#toarray)
- [values](ikeyvaluedatastructure.md#values)

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

### entries

▸ **entries**(): *Generator*<[key: any, value: any], any, unknown\>

**Returns:** *Generator*<[key: any, value: any], any, unknown\>

Defined in: libs/class.ts:62

___

### every

▸ **every**(`f`: (`value`: *any*, `key`: *any*) => *boolean*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`f` | (`value`: *any*, `key`: *any*) => *boolean* |

**Returns:** *boolean*

Overrides: [IDataStructure](idatastructure.md)

Defined in: libs/class.ts:60

___

### forEach

▸ **forEach**(`f`: (`value`: *any*, `key`: *any*) => *boolean* \| *void*): T

#### Parameters:

Name | Type |
:------ | :------ |
`f` | (`value`: *any*, `key`: *any*) => *boolean* \| *void* |

**Returns:** T

Overrides: [IDataStructure](idatastructure.md)

Defined in: libs/class.ts:57

___

### get

▸ **get**(`key`: *any*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *any* |

**Returns:** *any*

Defined in: libs/class.ts:55

___

### has

▸ **has**(`key`: *any*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *any* |

**Returns:** *boolean*

Defined in: libs/class.ts:56

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

Defined in: libs/class.ts:61

___

### map

▸ **map**(`f`: (`value`: *any*, `key`: *any*) => *any*): T

#### Parameters:

Name | Type |
:------ | :------ |
`f` | (`value`: *any*, `key`: *any*) => *any* |

**Returns:** T

Overrides: [IDataStructure](idatastructure.md)

Defined in: libs/class.ts:58

___

### set

▸ **set**(`key`: *any*, `value`: *any*): T

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *any* |
`value` | *any* |

**Returns:** T

Defined in: libs/class.ts:54

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

▸ **some**(`f`: (`value`: *any*, `key`: *any*) => *boolean*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`f` | (`value`: *any*, `key`: *any*) => *boolean* |

**Returns:** *boolean*

Overrides: [IDataStructure](idatastructure.md)

Defined in: libs/class.ts:59

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
