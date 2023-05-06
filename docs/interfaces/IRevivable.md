[@bemoje/node-util](/docs/index.md) / IRevivable

# Interface: IRevivable<SerializedForm\>

Guarantees that class instances are serializable and have a static revive function.

## Type parameters

| Name |
| :------ |
| `SerializedForm` |

## Implemented by

- [`Queue`](/docs/classes/Queue.md)
- [`Table`](/docs/classes/Table.md)

## Table of contents

### Properties

- [toJSON](/docs/interfaces/IRevivable.md#tojson)

## Properties

### toJSON

• **toJSON**: () => `SerializedForm`

#### Type declaration

▸ (): `SerializedForm`

##### Returns

`SerializedForm`

#### Defined in

[src/libs/mixins/src/interfaces.ts:7](https://github.com/bemoje/bemoje-node-util/blob/2716028/src/libs/mixins/src/interfaces.ts#L7)
