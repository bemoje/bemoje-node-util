[@bemoje/node-util](/docs/index.md) / IQueue

# Interface: IQueue<Element, Options\>

## Type parameters

| Name |
| :------ |
| `Element` |
| `Options` |

## Implemented by

- [`PriorityQueue`](/docs/classes/PriorityQueue.md)

## Table of contents

### Properties

- [dequeue](/docs/interfaces/IQueue.md#dequeue)
- [enqueue](/docs/interfaces/IQueue.md#enqueue)
- [filter](/docs/interfaces/IQueue.md#filter)
- [size](/docs/interfaces/IQueue.md#size)

## Properties

### dequeue

• **dequeue**: () => `undefined` \| `Element`

#### Type declaration

▸ (): `undefined` \| `Element`

##### Returns

`undefined` \| `Element`

#### Defined in

src/datastructures/types/IQueue.ts:4

___

### enqueue

• **enqueue**: (`run`: `Element`, `options?`: `Partial`<`Options`\>) => `void`

#### Type declaration

▸ (`run`, `options?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `run` | `Element` |
| `options?` | `Partial`<`Options`\> |

##### Returns

`void`

#### Defined in

src/datastructures/types/IQueue.ts:5

___

### filter

• **filter**: (`options`: `Partial`<`Options`\>) => `Element`[]

#### Type declaration

▸ (`options`): `Element`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<`Options`\> |

##### Returns

`Element`[]

#### Defined in

src/datastructures/types/IQueue.ts:3

___

### size

• **size**: `number`

#### Defined in

src/datastructures/types/IQueue.ts:2
