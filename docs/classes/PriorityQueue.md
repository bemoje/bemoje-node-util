[@bemoje/node-util](/docs/index.md) / PriorityQueue

# Class: PriorityQueue

A class representing a priority queue for async functions.

## Implements

- [`IQueue`](/docs/interfaces/IQueue.md)<[`RunFunction`](/docs/index.md#runfunction), [`IPriorityQueueOptions`](/docs/interfaces/IPriorityQueueOptions.md)\>

## Table of contents

### Constructors

- [constructor](/docs/classes/PriorityQueue.md#constructor)

### Properties

- [queue](/docs/classes/PriorityQueue.md#queue)

### Accessors

- [size](/docs/classes/PriorityQueue.md#size)

### Methods

- [dequeue](/docs/classes/PriorityQueue.md#dequeue)
- [enqueue](/docs/classes/PriorityQueue.md#enqueue)
- [filter](/docs/classes/PriorityQueue.md#filter)

## Constructors

### constructor

• **new PriorityQueue**()

## Properties

### queue

• `Protected` `Readonly` **queue**: [`IPriorityQueueOptions`](/docs/interfaces/IPriorityQueueOptions.md) & { `run`: [`RunFunction`](/docs/index.md#runfunction)  }[] = `[]`

Queue of functions to run

#### Defined in

[src/datastructures/PriorityQueue.ts:13](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/datastructures/PriorityQueue.ts#L13)

## Accessors

### size

• `get` **size**(): `number`

Get the number of functions in the queue

#### Returns

`number`

#### Implementation of

[IQueue](/docs/interfaces/IQueue.md).[size](/docs/interfaces/IQueue.md#size)

#### Defined in

[src/datastructures/PriorityQueue.ts:18](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/datastructures/PriorityQueue.ts#L18)

## Methods

### dequeue

▸ **dequeue**(): `undefined` \| [`RunFunction`](/docs/index.md#runfunction)

Remove a function from the queue

#### Returns

`undefined` \| [`RunFunction`](/docs/index.md#runfunction)

#### Implementation of

[IQueue](/docs/interfaces/IQueue.md).[dequeue](/docs/interfaces/IQueue.md#dequeue)

#### Defined in

[src/datastructures/PriorityQueue.ts:51](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/datastructures/PriorityQueue.ts#L51)

___

### enqueue

▸ **enqueue**(`run`, `options?`): `void`

Add a function to the queue

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `run` | [`RunFunction`](/docs/index.md#runfunction) | Function to run |
| `options?` | `Partial`<[`IPriorityQueueOptions`](/docs/interfaces/IPriorityQueueOptions.md)\> | Options for the queue |

#### Returns

`void`

#### Implementation of

[IQueue](/docs/interfaces/IQueue.md).[enqueue](/docs/interfaces/IQueue.md#enqueue)

#### Defined in

[src/datastructures/PriorityQueue.ts:27](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/datastructures/PriorityQueue.ts#L27)

___

### filter

▸ **filter**(`options`): [`RunFunction`](/docs/index.md#runfunction)[]

Get the functions with the given priority.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Readonly`<`Partial`<[`IPriorityQueueOptions`](/docs/interfaces/IPriorityQueueOptions.md)\>\> | Options for the queue |

#### Returns

[`RunFunction`](/docs/index.md#runfunction)[]

#### Implementation of

[IQueue](/docs/interfaces/IQueue.md).[filter](/docs/interfaces/IQueue.md#filter)

#### Defined in

[src/datastructures/PriorityQueue.ts:60](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/datastructures/PriorityQueue.ts#L60)
