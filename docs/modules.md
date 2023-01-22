[@bemoje/bemoje-node-util](README.md) / Exports

# @bemoje/bemoje-node-util

## Table of contents

### Classes

- [Matrix](classes/matrix.md)
- [MatrixOptions](classes/matrixoptions.md)

### Interfaces

- [IDataStructure](interfaces/idatastructure.md)
- [IDataStructure2D](interfaces/idatastructure2d.md)
- [IIndexedDataStructure](interfaces/iindexeddatastructure.md)
- [IKeyValueDataStructure](interfaces/ikeyvaluedatastructure.md)
- [IOptions](interfaces/ioptions.md)

### Functions

- [arrMapMutable](modules.md#arrmapmutable)
- [strWrapBetween](modules.md#strwrapbetween)
- [strWrapIn](modules.md#strwrapin)
- [strWrapInBraces](modules.md#strwrapinbraces)
- [strWrapInBrackets](modules.md#strwrapinbrackets)
- [strWrapInParenthesis](modules.md#strwrapinparenthesis)

## Functions

### arrMapMutable

▸ **arrMapMutable**(`input`: *any*[], `f`: (`value`: *any*, `index`: *number*, `array`: *any*[]) => *void*): *any*[]

Same as Array.prototype.map but performs operations in palce (not immutable).

#### Parameters:

Name | Type |
:------ | :------ |
`input` | *any*[] |
`f` | (`value`: *any*, `index`: *number*, `array`: *any*[]) => *void* |

**Returns:** *any*[]

Defined in: libs/array.ts:4

___

### strWrapBetween

▸ **strWrapBetween**(`input`: *string*, `before`: *string*, `after`: *string*): *string*

Inserts provided strings before and after a string.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`input` | *string* | input string   |
`before` | *string* | string to place before   |
`after` | *string* | string to place after    |

**Returns:** *string*

Defined in: libs/string.ts:16

___

### strWrapIn

▸ **strWrapIn**(`input`: *string*, `wrap`: *string*): *string*

Inserts a provided string before and after a string.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`input` | *string* | input string   |
`wrap` | *string* | string to place before and after    |

**Returns:** *string*

Defined in: libs/string.ts:6

___

### strWrapInBraces

▸ **strWrapInBraces**(`input`: *string*): *string*

Wraps a string in braces.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`input` | *string* | input string    |

**Returns:** *string*

Defined in: libs/string.ts:36

___

### strWrapInBrackets

▸ **strWrapInBrackets**(`input`: *string*): *string*

Wraps a string in brackets.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`input` | *string* | input string    |

**Returns:** *string*

Defined in: libs/string.ts:28

___

### strWrapInParenthesis

▸ **strWrapInParenthesis**(`input`: *string*): *string*

Wraps a string in parenthesis.

**`example`** 
```js
strWrapInParenthesis('hello');
// => '(hello)'
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`input` | *string* | input string   |

**Returns:** *string*

Defined in: libs/string.ts:49
