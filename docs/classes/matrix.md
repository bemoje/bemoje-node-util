[@bemoje/bemoje-node-util](../README.md) / [Exports](../modules.md) / Matrix

# Class: Matrix

## Implements

* [*IOptions*](../interfaces/ioptions.md)
* [*IDataStructure2D*](../interfaces/idatastructure2d.md)<[*Matrix*](matrix.md)\>

## Table of contents

### Constructors

- [constructor](matrix.md#constructor)

### Properties

- [matrix](matrix.md#matrix)
- [options](matrix.md#options)

### Accessors

- [cols](matrix.md#cols)
- [rows](matrix.md#rows)

### Methods

- [[Symbol.iterator]](matrix.md#[symbol.iterator])
- [addBy](matrix.md#addby)
- [addColBy](matrix.md#addcolby)
- [addRowBy](matrix.md#addrowby)
- [appendCol](matrix.md#appendcol)
- [appendRow](matrix.md#appendrow)
- [clone](matrix.md#clone)
- [deepEquals](matrix.md#deepequals)
- [divideBy](matrix.md#divideby)
- [divideColBy](matrix.md#dividecolby)
- [divideRowBy](matrix.md#dividerowby)
- [every](matrix.md#every)
- [forEach](matrix.md#foreach)
- [forEachInCol](matrix.md#foreachincol)
- [forEachInDiagonal](matrix.md#foreachindiagonal)
- [forEachInRow](matrix.md#foreachinrow)
- [get](matrix.md#get)
- [has](matrix.md#has)
- [hasDimensions](matrix.md#hasdimensions)
- [isImmutable](matrix.md#isimmutable)
- [isSameInstanceAs](matrix.md#issameinstanceas)
- [isScalarMatrix](matrix.md#isscalarmatrix)
- [isSquareMatrix](matrix.md#issquarematrix)
- [isZeroMatrix](matrix.md#iszeromatrix)
- [map](matrix.md#map)
- [mapCol](matrix.md#mapcol)
- [mapRow](matrix.md#maprow)
- [multiplyBy](matrix.md#multiplyby)
- [multiplyColBy](matrix.md#multiplycolby)
- [multiplyRowBy](matrix.md#multiplyrowby)
- [set](matrix.md#set)
- [setImmutable](matrix.md#setimmutable)
- [some](matrix.md#some)
- [subtractBy](matrix.md#subtractby)
- [subtractColBy](matrix.md#subtractcolby)
- [subtractRowBy](matrix.md#subtractrowby)
- [swapCols](matrix.md#swapcols)
- [swapRows](matrix.md#swaprows)
- [toArray](matrix.md#toarray)
- [values](matrix.md#values)
- [fromArray](matrix.md#fromarray)
- [fromIterable](matrix.md#fromiterable)
- [identity](matrix.md#identity)

## Constructors

### constructor

\+ **new Matrix**(`rows`: *number*, `cols`: *number*): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`rows` | *number* |
`cols` | *number* |

**Returns:** [*Matrix*](matrix.md)

Defined in: libs/matrix.ts:39

## Properties

### matrix

• `Protected` **matrix**: *number*[][]

Defined in: libs/matrix.ts:8

___

### options

• **options**: [*MatrixOptions*](matrixoptions.md)

Implementation of: [IOptions](../interfaces/ioptions.md).[options](../interfaces/ioptions.md#options)

Defined in: libs/matrix.ts:9

## Accessors

### cols

• get **cols**(): *number*

**Returns:** *number*

Defined in: libs/matrix.ts:54

___

### rows

• get **rows**(): *number*

**Returns:** *number*

Defined in: libs/matrix.ts:50

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Generator*<number, any, unknown\>

**Returns:** *Generator*<number, any, unknown\>

Implementation of: [IDataStructure2D](../interfaces/idatastructure2d.md)

Defined in: libs/matrix.ts:174

___

### addBy

▸ **addBy**(`n`: *number*): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*Matrix*](matrix.md)

Defined in: libs/matrix.ts:236

___

### addColBy

▸ **addColBy**(`col`: *number*, `n`: *number*): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`col` | *number* |
`n` | *number* |

**Returns:** [*Matrix*](matrix.md)

Defined in: libs/matrix.ts:276

___

### addRowBy

▸ **addRowBy**(`row`: *number*, `n`: *number*): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`row` | *number* |
`n` | *number* |

**Returns:** [*Matrix*](matrix.md)

Defined in: libs/matrix.ts:256

___

### appendCol

▸ **appendCol**(`col?`: *number*[]): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`col?` | *number*[] |

**Returns:** [*Matrix*](matrix.md)

Defined in: libs/matrix.ts:221

___

### appendRow

▸ **appendRow**(`row?`: *number*[]): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`row?` | *number*[] |

**Returns:** [*Matrix*](matrix.md)

Defined in: libs/matrix.ts:208

___

### clone

▸ **clone**(): [*Matrix*](matrix.md)

**Returns:** [*Matrix*](matrix.md)

Implementation of: [IDataStructure2D](../interfaces/idatastructure2d.md)

Defined in: libs/matrix.ts:105

___

### deepEquals

▸ **deepEquals**(`other`: [*Matrix*](matrix.md) \| *number*[][]): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`other` | [*Matrix*](matrix.md) \| *number*[][] |

**Returns:** *boolean*

Implementation of: [IDataStructure2D](../interfaces/idatastructure2d.md)

Defined in: libs/matrix.ts:71

___

### divideBy

▸ **divideBy**(`n`: *number*): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*Matrix*](matrix.md)

Defined in: libs/matrix.ts:251

___

### divideColBy

▸ **divideColBy**(`col`: *number*, `n`: *number*): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`col` | *number* |
`n` | *number* |

**Returns:** [*Matrix*](matrix.md)

Defined in: libs/matrix.ts:291

___

### divideRowBy

▸ **divideRowBy**(`row`: *number*, `n`: *number*): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`row` | *number* |
`n` | *number* |

**Returns:** [*Matrix*](matrix.md)

Defined in: libs/matrix.ts:271

___

### every

▸ **every**(`f`: (`value`: *number*, `row`: *number*, `col`: *number*) => *boolean*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`f` | (`value`: *number*, `row`: *number*, `col`: *number*) => *boolean* |

**Returns:** *boolean*

Implementation of: [IDataStructure2D](../interfaces/idatastructure2d.md)

Defined in: libs/matrix.ts:329

___

### forEach

▸ **forEach**(`f`: (`value`: *number*, `row`: *number*, `col`: *number*) => *boolean* \| *void*): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`f` | (`value`: *number*, `row`: *number*, `col`: *number*) => *boolean* \| *void* |

**Returns:** [*Matrix*](matrix.md)

Implementation of: [IDataStructure2D](../interfaces/idatastructure2d.md)

Defined in: libs/matrix.ts:116

___

### forEachInCol

▸ **forEachInCol**(`col`: *number*, `f`: (`value`: *number*, `row`: *number*) => *boolean* \| *void*): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`col` | *number* |
`f` | (`value`: *number*, `row`: *number*) => *boolean* \| *void* |

**Returns:** [*Matrix*](matrix.md)

Defined in: libs/matrix.ts:141

___

### forEachInDiagonal

▸ **forEachInDiagonal**(`f`: (`value`: *number*, `row`: *number*, `col`: *number*) => *boolean* \| *void*): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`f` | (`value`: *number*, `row`: *number*, `col`: *number*) => *boolean* \| *void* |

**Returns:** [*Matrix*](matrix.md)

Defined in: libs/matrix.ts:153

___

### forEachInRow

▸ **forEachInRow**(`row`: *number*, `f`: (`value`: *number*, `col`: *number*) => *boolean* \| *void*): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`row` | *number* |
`f` | (`value`: *number*, `col`: *number*) => *boolean* \| *void* |

**Returns:** [*Matrix*](matrix.md)

Defined in: libs/matrix.ts:129

___

### get

▸ **get**(`row`: *number*, `col`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`row` | *number* |
`col` | *number* |

**Returns:** *number*

Implementation of: [IDataStructure2D](../interfaces/idatastructure2d.md)

Defined in: libs/matrix.ts:89

___

### has

▸ **has**(`row`: *number*, `col`: *number*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`row` | *number* |
`col` | *number* |

**Returns:** *boolean*

Implementation of: [IDataStructure2D](../interfaces/idatastructure2d.md)

Defined in: libs/matrix.ts:93

___

### hasDimensions

▸ **hasDimensions**(`rows`: *number*, `cols`: *number*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`rows` | *number* |
`cols` | *number* |

**Returns:** *boolean*

Defined in: libs/matrix.ts:342

___

### isImmutable

▸ **isImmutable**(): *boolean*

**Returns:** *boolean*

Implementation of: [IDataStructure2D](../interfaces/idatastructure2d.md)

Defined in: libs/matrix.ts:62

___

### isSameInstanceAs

▸ **isSameInstanceAs**(`other`: [*Matrix*](matrix.md)): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`other` | [*Matrix*](matrix.md) |

**Returns:** *boolean*

Implementation of: [IDataStructure2D](../interfaces/idatastructure2d.md)

Defined in: libs/matrix.ts:58

___

### isScalarMatrix

▸ **isScalarMatrix**(): *boolean*

Returns whether the matrix is a square matrix that has identical values on its diagonal.

**Returns:** *boolean*

Defined in: libs/matrix.ts:353

___

### isSquareMatrix

▸ **isSquareMatrix**(): *boolean*

**Returns:** *boolean*

Defined in: libs/matrix.ts:346

___

### isZeroMatrix

▸ **isZeroMatrix**(): *boolean*

**Returns:** *boolean*

Defined in: libs/matrix.ts:364

___

### map

▸ **map**(`f`: (`value`: *number*, `row`: *number*, `col`: *number*) => *number*): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`f` | (`value`: *number*, `row`: *number*, `col`: *number*) => *number* |

**Returns:** [*Matrix*](matrix.md)

Implementation of: [IDataStructure2D](../interfaces/idatastructure2d.md)

Defined in: libs/matrix.ts:164

___

### mapCol

▸ **mapCol**(`col`: *number*, `f`: (`value`: *number*, `row`: *number*) => *number*): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`col` | *number* |
`f` | (`value`: *number*, `row`: *number*) => *number* |

**Returns:** [*Matrix*](matrix.md)

Defined in: libs/matrix.ts:197

___

### mapRow

▸ **mapRow**(`row`: *number*, `f`: (`value`: *number*, `col`: *number*) => *number*): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`row` | *number* |
`f` | (`value`: *number*, `col`: *number*) => *number* |

**Returns:** [*Matrix*](matrix.md)

Defined in: libs/matrix.ts:186

___

### multiplyBy

▸ **multiplyBy**(`n`: *number*): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*Matrix*](matrix.md)

Defined in: libs/matrix.ts:246

___

### multiplyColBy

▸ **multiplyColBy**(`col`: *number*, `n`: *number*): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`col` | *number* |
`n` | *number* |

**Returns:** [*Matrix*](matrix.md)

Defined in: libs/matrix.ts:286

___

### multiplyRowBy

▸ **multiplyRowBy**(`row`: *number*, `n`: *number*): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`row` | *number* |
`n` | *number* |

**Returns:** [*Matrix*](matrix.md)

Defined in: libs/matrix.ts:266

___

### set

▸ **set**(`row`: *number*, `col`: *number*, `value`: *number*): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`row` | *number* |
`col` | *number* |
`value` | *number* |

**Returns:** [*Matrix*](matrix.md)

Implementation of: [IDataStructure2D](../interfaces/idatastructure2d.md)

Defined in: libs/matrix.ts:83

___

### setImmutable

▸ **setImmutable**(`immutable`: *boolean*): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`immutable` | *boolean* |

**Returns:** [*Matrix*](matrix.md)

Implementation of: [IDataStructure2D](../interfaces/idatastructure2d.md)

Defined in: libs/matrix.ts:66

___

### some

▸ **some**(`f`: (`value`: *number*, `row`: *number*, `col`: *number*) => *boolean*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`f` | (`value`: *number*, `row`: *number*, `col`: *number*) => *boolean* |

**Returns:** *boolean*

Implementation of: [IDataStructure2D](../interfaces/idatastructure2d.md)

Defined in: libs/matrix.ts:316

___

### subtractBy

▸ **subtractBy**(`n`: *number*): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*Matrix*](matrix.md)

Defined in: libs/matrix.ts:241

___

### subtractColBy

▸ **subtractColBy**(`col`: *number*, `n`: *number*): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`col` | *number* |
`n` | *number* |

**Returns:** [*Matrix*](matrix.md)

Defined in: libs/matrix.ts:281

___

### subtractRowBy

▸ **subtractRowBy**(`row`: *number*, `n`: *number*): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`row` | *number* |
`n` | *number* |

**Returns:** [*Matrix*](matrix.md)

Defined in: libs/matrix.ts:261

___

### swapCols

▸ **swapCols**(`col1`: *number*, `col2`: *number*): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`col1` | *number* |
`col2` | *number* |

**Returns:** [*Matrix*](matrix.md)

Defined in: libs/matrix.ts:305

___

### swapRows

▸ **swapRows**(`row1`: *number*, `row2`: *number*): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`row1` | *number* |
`row2` | *number* |

**Returns:** [*Matrix*](matrix.md)

Defined in: libs/matrix.ts:296

___

### toArray

▸ **toArray**(): *number*[][]

**Returns:** *number*[][]

Implementation of: [IDataStructure2D](../interfaces/idatastructure2d.md)

Defined in: libs/matrix.ts:97

___

### values

▸ **values**(): *Generator*<number, any, unknown\>

**Returns:** *Generator*<number, any, unknown\>

Implementation of: [IDataStructure2D](../interfaces/idatastructure2d.md)

Defined in: libs/matrix.ts:182

___

### fromArray

▸ `Static`**fromArray**(`array`: *number*[][]): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`array` | *number*[][] |

**Returns:** [*Matrix*](matrix.md)

Defined in: libs/matrix.ts:11

___

### fromIterable

▸ `Static`**fromIterable**(`iterable`: *Iterable*<Iterable<number\>\>): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`iterable` | *Iterable*<Iterable<number\>\> |

**Returns:** [*Matrix*](matrix.md)

Defined in: libs/matrix.ts:25

___

### identity

▸ `Static`**identity**(`size`: *number*): [*Matrix*](matrix.md)

#### Parameters:

Name | Type |
:------ | :------ |
`size` | *number* |

**Returns:** [*Matrix*](matrix.md)

Defined in: libs/matrix.ts:33
