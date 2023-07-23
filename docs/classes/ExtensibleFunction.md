[@bemoje/node-util](/docs/index.md) / ExtensibleFunction

# Class: ExtensibleFunction

A Function class that can be extended.

**`Example`**

```ts
class MyFunction<T> extends util.ExtensibleFunction {
  constructor(f: (...args: any[]) => any) {
    let self: MyFunction<T> | undefined = undefined;
    super(f.name, function anonymous(...args: any[]) {
      // do something with self
      return f.call(self, ...args);
    });
    self = this;
  }
}
```

## Hierarchy

- `Function`

  ↳ **`ExtensibleFunction`**

## Table of contents

### Constructors

- [constructor](/docs/classes/ExtensibleFunction.md#constructor)

### Properties

- [arguments](/docs/classes/ExtensibleFunction.md#arguments)
- [caller](/docs/classes/ExtensibleFunction.md#caller)
- [length](/docs/classes/ExtensibleFunction.md#length)
- [name](/docs/classes/ExtensibleFunction.md#name)
- [prototype](/docs/classes/ExtensibleFunction.md#prototype)

### Methods

- [[hasInstance]](/docs/classes/ExtensibleFunction.md#[hasinstance])
- [apply](/docs/classes/ExtensibleFunction.md#apply)
- [bind](/docs/classes/ExtensibleFunction.md#bind)
- [call](/docs/classes/ExtensibleFunction.md#call)
- [toString](/docs/classes/ExtensibleFunction.md#tostring)

## Constructors

### constructor

• **new ExtensibleFunction**(`name`, `f`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `f` | [`GenericFunction`](/docs/index.md#genericfunction) |

#### Overrides

Function.constructor

#### Defined in

[src/function/ExtensibleFunction.ts:20](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/function/ExtensibleFunction.ts#L20)

## Properties

### arguments

• **arguments**: `any`

#### Inherited from

Function.arguments

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:305

___

### caller

• **caller**: `Function`

#### Inherited from

Function.caller

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:306

___

### length

• `Readonly` **length**: `number`

#### Inherited from

Function.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:302

___

### name

• `Readonly` **name**: `string`

Returns the name of the function. Function names are read-only and can not be changed.

#### Inherited from

Function.name

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:95

___

### prototype

• **prototype**: `any`

#### Inherited from

Function.prototype

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:301

## Methods

### [hasInstance]

▸ **[hasInstance]**(`value`): `boolean`

Determines whether the given value inherits from this function if this function was used
as a constructor function.

A constructor function can control which objects are recognized as its instances by
'instanceof' by overriding this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Inherited from

Function.[hasInstance]

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:164

___

### apply

▸ **apply**(`this`, `thisArg`, `argArray?`): `any`

Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `Function` | - |
| `thisArg` | `any` | The object to be used as the this object. |
| `argArray?` | `any` | A set of arguments to be passed to the function. |

#### Returns

`any`

#### Inherited from

Function.apply

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:281

___

### bind

▸ **bind**(`this`, `thisArg`, `...argArray`): `any`

For a given function, creates a bound function that has the same body as the original function.
The this object of the bound function is associated with the specified object, and has the specified initial parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `Function` | - |
| `thisArg` | `any` | An object to which the this keyword can refer inside the new function. |
| `...argArray` | `any`[] | A list of arguments to be passed to the new function. |

#### Returns

`any`

#### Inherited from

Function.bind

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:296

___

### call

▸ **call**(`this`, `thisArg`, `...argArray`): `any`

Calls a method of an object, substituting another object for the current object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `Function` | - |
| `thisArg` | `any` | The object to be used as the current object. |
| `...argArray` | `any`[] | A list of arguments to be passed to the method. |

#### Returns

`any`

#### Inherited from

Function.call

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:288

___

### toString

▸ **toString**(): `string`

Returns a string representation of a function.

#### Returns

`string`

#### Inherited from

Function.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:299
