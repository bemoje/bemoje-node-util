[@bemoje/node-util](../README.md) / IRevivable

# Interface: IRevivable<SerializedForm\>

Guarantees that class instances are serializable and have a static revive function.

## Type parameters

| Name |
| :------ |
| `SerializedForm` |

## Implemented by

- [`Queue`](../classes/Queue.md)
- [`Table`](../classes/Table.md)

## Table of contents

### Properties

- [toJSON](IRevivable.md#tojson)

## Properties

### toJSON

• **toJSON**: () => `SerializedForm`

#### Type declaration

▸ (): `SerializedForm`

##### Returns

`SerializedForm`

#### Defined in

src/libs/mixins/src/interfaces.ts:7
