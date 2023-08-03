[@bemoje/node-util](/docs/index.md) / PromiseQueue

# Class: PromiseQueue<QueueType, EnqueueOptionsType\>

Promise queue with concurrency control.
ESM compatible port from https://www.npmjs.com/package/p-queue

## Type parameters

| Name | Type |
| :------ | :------ |
| `QueueType` | extends [`IQueue`](/docs/interfaces/IQueue.md)<[`RunFunction`](/docs/index.md#runfunction), `EnqueueOptionsType`\> = [`PriorityQueue`](/docs/classes/PriorityQueue.md) |
| `EnqueueOptionsType` | extends [`IQueueAddOptions`](/docs/interfaces/IQueueAddOptions.md) = [`IQueueAddOptions`](/docs/interfaces/IQueueAddOptions.md) |

## Hierarchy

- `EventEmitter`

  ↳ **`PromiseQueue`**

## Table of contents

### Constructors

- [constructor](/docs/classes/PromiseQueue.md#constructor)

### Properties

- [\_carryoverConcurrencyCount](/docs/classes/PromiseQueue.md#_carryoverconcurrencycount)
- [\_concurrency](/docs/classes/PromiseQueue.md#_concurrency)
- [\_interval](/docs/classes/PromiseQueue.md#_interval)
- [\_intervalCap](/docs/classes/PromiseQueue.md#_intervalcap)
- [\_intervalCount](/docs/classes/PromiseQueue.md#_intervalcount)
- [\_intervalEnd](/docs/classes/PromiseQueue.md#_intervalend)
- [\_intervalId](/docs/classes/PromiseQueue.md#_intervalid)
- [\_isIntervalIgnored](/docs/classes/PromiseQueue.md#_isintervalignored)
- [\_isPaused](/docs/classes/PromiseQueue.md#_ispaused)
- [\_pending](/docs/classes/PromiseQueue.md#_pending)
- [\_queue](/docs/classes/PromiseQueue.md#_queue)
- [\_queueClass](/docs/classes/PromiseQueue.md#_queueclass)
- [\_timeoutId](/docs/classes/PromiseQueue.md#_timeoutid)
- [captureRejectionSymbol](/docs/classes/PromiseQueue.md#capturerejectionsymbol)
- [captureRejections](/docs/classes/PromiseQueue.md#capturerejections)
- [defaultMaxListeners](/docs/classes/PromiseQueue.md#defaultmaxlisteners)
- [errorMonitor](/docs/classes/PromiseQueue.md#errormonitor)

### Accessors

- [\_doesConcurrentAllowAnother](/docs/classes/PromiseQueue.md#_doesconcurrentallowanother)
- [\_doesIntervalAllowAnother](/docs/classes/PromiseQueue.md#_doesintervalallowanother)
- [\_isIntervalPaused](/docs/classes/PromiseQueue.md#_isintervalpaused)
- [concurrency](/docs/classes/PromiseQueue.md#concurrency)
- [isPaused](/docs/classes/PromiseQueue.md#ispaused)
- [pending](/docs/classes/PromiseQueue.md#pending)
- [size](/docs/classes/PromiseQueue.md#size)

### Methods

- [\_initializeIntervalIfNeeded](/docs/classes/PromiseQueue.md#_initializeintervalifneeded)
- [\_next](/docs/classes/PromiseQueue.md#_next)
- [\_onEvent](/docs/classes/PromiseQueue.md#_onevent)
- [\_onInterval](/docs/classes/PromiseQueue.md#_oninterval)
- [\_onResumeInterval](/docs/classes/PromiseQueue.md#_onresumeinterval)
- [\_processQueue](/docs/classes/PromiseQueue.md#_processqueue)
- [\_throwOnAbort](/docs/classes/PromiseQueue.md#_throwonabort)
- [\_tryToStartAnother](/docs/classes/PromiseQueue.md#_trytostartanother)
- [add](/docs/classes/PromiseQueue.md#add)
- [addAll](/docs/classes/PromiseQueue.md#addall)
- [addListener](/docs/classes/PromiseQueue.md#addlistener)
- [clear](/docs/classes/PromiseQueue.md#clear)
- [emit](/docs/classes/PromiseQueue.md#emit)
- [eventNames](/docs/classes/PromiseQueue.md#eventnames)
- [getMaxListeners](/docs/classes/PromiseQueue.md#getmaxlisteners)
- [listenerCount](/docs/classes/PromiseQueue.md#listenercount)
- [listeners](/docs/classes/PromiseQueue.md#listeners)
- [off](/docs/classes/PromiseQueue.md#off)
- [on](/docs/classes/PromiseQueue.md#on)
- [onEmpty](/docs/classes/PromiseQueue.md#onempty)
- [onIdle](/docs/classes/PromiseQueue.md#onidle)
- [onSizeLessThan](/docs/classes/PromiseQueue.md#onsizelessthan)
- [once](/docs/classes/PromiseQueue.md#once)
- [pause](/docs/classes/PromiseQueue.md#pause)
- [prependListener](/docs/classes/PromiseQueue.md#prependlistener)
- [prependOnceListener](/docs/classes/PromiseQueue.md#prependoncelistener)
- [rawListeners](/docs/classes/PromiseQueue.md#rawlisteners)
- [removeAllListeners](/docs/classes/PromiseQueue.md#removealllisteners)
- [removeListener](/docs/classes/PromiseQueue.md#removelistener)
- [setMaxListeners](/docs/classes/PromiseQueue.md#setmaxlisteners)
- [sizeBy](/docs/classes/PromiseQueue.md#sizeby)
- [start](/docs/classes/PromiseQueue.md#start)
- [getEventListeners](/docs/classes/PromiseQueue.md#geteventlisteners)
- [listenerCount](/docs/classes/PromiseQueue.md#listenercount-1)
- [on](/docs/classes/PromiseQueue.md#on-1)
- [once](/docs/classes/PromiseQueue.md#once-1)
- [setMaxListeners](/docs/classes/PromiseQueue.md#setmaxlisteners-1)

## Constructors

### constructor

• **new PromiseQueue**<`QueueType`, `EnqueueOptionsType`\>(`options?`)

Creates a new `PromiseQueue` instance.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `QueueType` | extends [`IQueue`](/docs/interfaces/IQueue.md)<[`RunFunction`](/docs/index.md#runfunction), `EnqueueOptionsType`\> = [`PriorityQueue`](/docs/classes/PriorityQueue.md) |
| `EnqueueOptionsType` | extends [`IQueueAddOptions`](/docs/interfaces/IQueueAddOptions.md) = [`IQueueAddOptions`](/docs/interfaces/IQueueAddOptions.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IPromiseQueueOptions`](/docs/interfaces/IPromiseQueueOptions.md)<`QueueType`, `EnqueueOptionsType`\> |

#### Overrides

EventEmitter.constructor

#### Defined in

src/async/PromiseQueue.ts:40

## Properties

### \_carryoverConcurrencyCount

• `Readonly` **\_carryoverConcurrencyCount**: `boolean`

#### Defined in

src/async/PromiseQueue.ts:23

___

### \_concurrency

• **\_concurrency**: `number`

#### Defined in

src/async/PromiseQueue.ts:34

___

### \_interval

• `Readonly` **\_interval**: `number`

#### Defined in

src/async/PromiseQueue.ts:27

___

### \_intervalCap

• `Readonly` **\_intervalCap**: `number`

#### Defined in

src/async/PromiseQueue.ts:26

___

### \_intervalCount

• **\_intervalCount**: `number` = `0`

#### Defined in

src/async/PromiseQueue.ts:25

___

### \_intervalEnd

• **\_intervalEnd**: `number` = `0`

#### Defined in

src/async/PromiseQueue.ts:28

___

### \_intervalId

• `Optional` **\_intervalId**: `Timeout`

#### Defined in

src/async/PromiseQueue.ts:29

___

### \_isIntervalIgnored

• `Readonly` **\_isIntervalIgnored**: `boolean`

#### Defined in

src/async/PromiseQueue.ts:24

___

### \_isPaused

• **\_isPaused**: `boolean`

#### Defined in

src/async/PromiseQueue.ts:35

___

### \_pending

• **\_pending**: `number` = `0`

#### Defined in

src/async/PromiseQueue.ts:33

___

### \_queue

• **\_queue**: `QueueType`

#### Defined in

src/async/PromiseQueue.ts:31

___

### \_queueClass

• `Readonly` **\_queueClass**: () => `QueueType`

#### Type declaration

• **new _queueClass**()

#### Defined in

src/async/PromiseQueue.ts:32

___

### \_timeoutId

• `Optional` **\_timeoutId**: `Timeout`

#### Defined in

src/async/PromiseQueue.ts:30

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](/docs/classes/PromiseQueue.md#capturerejectionsymbol)

Value: `Symbol.for('nodejs.rejection')`

See how to write a custom `rejection handler`.

**`Since`**

v13.4.0, v12.16.0

#### Inherited from

EventEmitter.captureRejectionSymbol

#### Defined in

node_modules/@types/node/events.d.ts:326

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Value: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Change the default `captureRejections` option on all new `EventEmitter` objects.

**`Since`**

v13.4.0, v12.16.0

#### Inherited from

EventEmitter.captureRejections

#### Defined in

node_modules/@types/node/events.d.ts:333

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

By default, a maximum of `10` listeners can be registered for any single
event. This limit can be changed for individual `EventEmitter` instances
using the `emitter.setMaxListeners(n)` method. To change the default
for _all_`EventEmitter` instances, the `events.defaultMaxListeners`property can be used. If this value is not a positive number, a `RangeError`is thrown.

Take caution when setting the `events.defaultMaxListeners` because the
change affects _all_`EventEmitter` instances, including those created before
the change is made. However, calling `emitter.setMaxListeners(n)` still has
precedence over `events.defaultMaxListeners`.

This is not a hard limit. The `EventEmitter` instance will allow
more listeners to be added but will output a trace warning to stderr indicating
that a "possible EventEmitter memory leak" has been detected. For any single`EventEmitter`, the `emitter.getMaxListeners()` and `emitter.setMaxListeners()`methods can be used to
temporarily avoid this warning:

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.setMaxListeners(emitter.getMaxListeners() + 1);
emitter.once('event', () => {
  // do stuff
  emitter.setMaxListeners(Math.max(emitter.getMaxListeners() - 1, 0));
});
```

The `--trace-warnings` command-line flag can be used to display the
stack trace for such warnings.

The emitted warning can be inspected with `process.on('warning')` and will
have the additional `emitter`, `type`, and `count` properties, referring to
the event emitter instance, the event's name and the number of attached
listeners, respectively.
Its `name` property is set to `'MaxListenersExceededWarning'`.

**`Since`**

v0.11.2

#### Inherited from

EventEmitter.defaultMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:370

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](/docs/classes/PromiseQueue.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`events. Listeners installed using this symbol are called before the regular`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an`'error'` event is emitted. Therefore, the process will still crash if no
regular `'error'` listener is installed.

**`Since`**

v13.6.0, v12.17.0

#### Inherited from

EventEmitter.errorMonitor

#### Defined in

node_modules/@types/node/events.d.ts:319

## Accessors

### \_doesConcurrentAllowAnother

• `get` **_doesConcurrentAllowAnother**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/async/PromiseQueue.ts:82

___

### \_doesIntervalAllowAnother

• `get` **_doesIntervalAllowAnother**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/async/PromiseQueue.ts:78

___

### \_isIntervalPaused

• `get` **_isIntervalPaused**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/async/PromiseQueue.ts:98

___

### concurrency

• `get` **concurrency**(): `number`

#### Returns

`number`

#### Defined in

src/async/PromiseQueue.ts:178

• `set` **concurrency**(`newConcurrency`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newConcurrency` | `number` |

#### Returns

`void`

#### Defined in

src/async/PromiseQueue.ts:182

___

### isPaused

• `get` **isPaused**(): `boolean`

Whether the queue is currently paused.

#### Returns

`boolean`

#### Defined in

src/async/PromiseQueue.ts:367

___

### pending

• `get` **pending**(): `number`

Number of running items (no longer in the queue).

#### Returns

`number`

#### Defined in

src/async/PromiseQueue.ts:360

___

### size

• `get` **size**(): `number`

Size of the queue, the number of queued items waiting to run.

#### Returns

`number`

#### Defined in

src/async/PromiseQueue.ts:345

## Methods

### \_initializeIntervalIfNeeded

▸ **_initializeIntervalIfNeeded**(): `void`

#### Returns

`void`

#### Defined in

src/async/PromiseQueue.ts:151

___

### \_next

▸ **_next**(): `void`

#### Returns

`void`

#### Defined in

src/async/PromiseQueue.ts:86

___

### \_onEvent

▸ **_onEvent**(`event`, `filter?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `EventName` |
| `filter?` | () => `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

src/async/PromiseQueue.ts:329

___

### \_onInterval

▸ **_onInterval**(): `void`

#### Returns

`void`

#### Defined in

src/async/PromiseQueue.ts:161

___

### \_onResumeInterval

▸ **_onResumeInterval**(): `void`

#### Returns

`void`

#### Defined in

src/async/PromiseQueue.ts:92

___

### \_processQueue

▸ **_processQueue**(): `void`

Executes all queued functions until it reaches the limit.

#### Returns

`void`

#### Defined in

src/async/PromiseQueue.ts:173

___

### \_throwOnAbort

▸ **_throwOnAbort**(`signal`): `Promise`<`never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signal` | `AbortSignal` |

#### Returns

`Promise`<`never`\>

#### Defined in

src/async/PromiseQueue.ts:192

___

### \_tryToStartAnother

▸ **_tryToStartAnother**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/async/PromiseQueue.ts:119

___

### add

▸ **add**<`TaskResultType`\>(`function_`, `options`): `Promise`<`TaskResultType`\>

Adds a sync or async task to the queue. Always returns a promise.

#### Type parameters

| Name |
| :------ |
| `TaskResultType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `function_` | `Task`<`TaskResultType`\> |
| `options` | `Exclude`<`EnqueueOptionsType`, ``"throwOnTimeout"``\> |

#### Returns

`Promise`<`TaskResultType`\>

#### Defined in

src/async/PromiseQueue.ts:207

▸ **add**<`TaskResultType`\>(`function_`, `options?`): `Promise`<`void` \| `TaskResultType`\>

#### Type parameters

| Name |
| :------ |
| `TaskResultType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `function_` | `Task`<`TaskResultType`\> |
| `options?` | `Partial`<`EnqueueOptionsType`\> |

#### Returns

`Promise`<`void` \| `TaskResultType`\>

#### Defined in

src/async/PromiseQueue.ts:211

___

### addAll

▸ **addAll**<`TaskResultsType`\>(`functions`, `options?`): `Promise`<`TaskResultsType`[]\>

Same as `.add()`, but accepts an array of sync or async functions.

#### Type parameters

| Name |
| :------ |
| `TaskResultsType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `functions` | readonly `Task`<`TaskResultsType`\>[] |
| `options?` | `Partial`<`Exclude`<`EnqueueOptionsType`, ``"throwOnTimeout"``\>\> |

#### Returns

`Promise`<`TaskResultsType`[]\>

A promise that resolves when all functions are resolved.

#### Defined in

src/async/PromiseQueue.ts:251

▸ **addAll**<`TaskResultsType`\>(`functions`, `options?`): `Promise`<(`void` \| `TaskResultsType`)[]\>

#### Type parameters

| Name |
| :------ |
| `TaskResultsType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `functions` | readonly `Task`<`TaskResultsType`\>[] |
| `options?` | `Partial`<`EnqueueOptionsType`\> |

#### Returns

`Promise`<(`void` \| `TaskResultsType`)[]\>

#### Defined in

src/async/PromiseQueue.ts:255

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`PromiseQueue`](/docs/classes/PromiseQueue.md)<`QueueType`, `EnqueueOptionsType`\>

Alias for `emitter.on(eventName, listener)`.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`PromiseQueue`](/docs/classes/PromiseQueue.md)<`QueueType`, `EnqueueOptionsType`\>

#### Inherited from

EventEmitter.addListener

#### Defined in

node_modules/@types/node/events.d.ts:390

___

### clear

▸ **clear**(): `void`

Clear the queue.

#### Returns

`void`

#### Defined in

src/async/PromiseQueue.ts:288

___

### emit

▸ **emit**(`eventName`, `...args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

EventEmitter.emit

#### Defined in

node_modules/@types/node/events.d.ts:652

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`Since`**

v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

EventEmitter.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:715

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](/docs/classes/PromiseQueue.md#defaultmaxlisteners).

**`Since`**

v1.0.0

#### Returns

`number`

#### Inherited from

EventEmitter.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:567

___

### listenerCount

▸ **listenerCount**(`eventName`, `listener?`): `number`

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

**`Since`**

v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |
| `listener?` | `Function` | The event handler function |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:661

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.listeners

#### Defined in

node_modules/@types/node/events.d.ts:580

___

### off

▸ **off**(`eventName`, `listener`): [`PromiseQueue`](/docs/classes/PromiseQueue.md)<`QueueType`, `EnqueueOptionsType`\>

Alias for `emitter.removeListener()`.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`PromiseQueue`](/docs/classes/PromiseQueue.md)<`QueueType`, `EnqueueOptionsType`\>

#### Inherited from

EventEmitter.off

#### Defined in

node_modules/@types/node/events.d.ts:540

___

### on

▸ **on**(`eventName`, `listener`): [`PromiseQueue`](/docs/classes/PromiseQueue.md)<`QueueType`, `EnqueueOptionsType`\>

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`Since`**

v0.1.101

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`PromiseQueue`](/docs/classes/PromiseQueue.md)<`QueueType`, `EnqueueOptionsType`\>

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/node/events.d.ts:422

___

### onEmpty

▸ **onEmpty**(): `Promise`<`void`\>

Can be called multiple times. Useful if you for example add additional items at a later time.

#### Returns

`Promise`<`void`\>

A promise that settles when the queue becomes empty.

#### Defined in

src/async/PromiseQueue.ts:296

___

### onIdle

▸ **onIdle**(): `Promise`<`void`\>

The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.

#### Returns

`Promise`<`void`\>

A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.

#### Defined in

src/async/PromiseQueue.ts:321

___

### onSizeLessThan

▸ **onSizeLessThan**(`limit`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `limit` | `number` |

#### Returns

`Promise`<`void`\>

A promise that settles when the queue size is less than the given limit: `queue.size < limit`.
If you want to avoid having the queue grow beyond a certain size you can `await queue.onSizeLessThan()` before adding a new item.
Note that this only limits the number of items waiting to start. There could still be up to `concurrency` jobs already running that this call does not include in its calculation.

#### Defined in

src/async/PromiseQueue.ts:309

___

### once

▸ **once**(`eventName`, `listener`): [`PromiseQueue`](/docs/classes/PromiseQueue.md)<`QueueType`, `EnqueueOptionsType`\>

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`Since`**

v0.3.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`PromiseQueue`](/docs/classes/PromiseQueue.md)<`QueueType`, `EnqueueOptionsType`\>

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:452

___

### pause

▸ **pause**(): `void`

Put queue execution on hold.

#### Returns

`void`

#### Defined in

src/async/PromiseQueue.ts:281

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`PromiseQueue`](/docs/classes/PromiseQueue.md)<`QueueType`, `EnqueueOptionsType`\>

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`PromiseQueue`](/docs/classes/PromiseQueue.md)<`QueueType`, `EnqueueOptionsType`\>

#### Inherited from

EventEmitter.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:679

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`PromiseQueue`](/docs/classes/PromiseQueue.md)<`QueueType`, `EnqueueOptionsType`\>

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`PromiseQueue`](/docs/classes/PromiseQueue.md)<`QueueType`, `EnqueueOptionsType`\>

#### Inherited from

EventEmitter.prependOnceListener

#### Defined in

node_modules/@types/node/events.d.ts:695

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`Since`**

v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:611

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`PromiseQueue`](/docs/classes/PromiseQueue.md)<`QueueType`, `EnqueueOptionsType`\>

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`PromiseQueue`](/docs/classes/PromiseQueue.md)<`QueueType`, `EnqueueOptionsType`\>

#### Inherited from

EventEmitter.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:551

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`PromiseQueue`](/docs/classes/PromiseQueue.md)<`QueueType`, `EnqueueOptionsType`\>

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`PromiseQueue`](/docs/classes/PromiseQueue.md)<`QueueType`, `EnqueueOptionsType`\>

#### Inherited from

EventEmitter.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:535

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`PromiseQueue`](/docs/classes/PromiseQueue.md)<`QueueType`, `EnqueueOptionsType`\>

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`PromiseQueue`](/docs/classes/PromiseQueue.md)<`QueueType`, `EnqueueOptionsType`\>

#### Inherited from

EventEmitter.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:561

___

### sizeBy

▸ **sizeBy**(`options`): `number`

Size of the queue, filtered by the given options.
For example, this can be used to find the number of items remaining in the queue with a specific priority level.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Readonly`<`Partial`<`EnqueueOptionsType`\>\> |

#### Returns

`number`

#### Defined in

src/async/PromiseQueue.ts:353

___

### start

▸ **start**(): [`PromiseQueue`](/docs/classes/PromiseQueue.md)<`QueueType`, `EnqueueOptionsType`\>

Start (or resume) executing enqueued tasks within concurrency limit. No need to call this if queue is not paused (via `options.autoStart = false` or by `.pause()` method.)

#### Returns

[`PromiseQueue`](/docs/classes/PromiseQueue.md)<`QueueType`, `EnqueueOptionsType`\>

#### Defined in

src/async/PromiseQueue.ts:269

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
import { getEventListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  console.log(getEventListeners(ee, 'foo')); // [ [Function: listener] ]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  console.log(getEventListeners(et, 'foo')); // [ [Function: listener] ]
}
```

**`Since`**

v15.2.0, v14.17.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.getEventListeners

#### Defined in

node_modules/@types/node/events.d.ts:296

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
import { EventEmitter, listenerCount } from 'node:events';

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:268

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
});

for await (const event of on(ee, 'foo')) {
  // The execution of this inner block is synchronous and it
  // processes one event at a time (even with await). Do not use
  // if concurrent execution is required.
  console.log(event); // prints ['bar'] [42]
}
// Unreachable here
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

**`Since`**

v13.6.0, v12.16.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/node/events.d.ts:250

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
import { once, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

process.nextTick(() => {
  ee.emit('myevent', 42);
});

const [value] = await once(ee, 'myevent');
console.log(value);

const err = new Error('kaboom');
process.nextTick(() => {
  ee.emit('error', err);
});

try {
  await once(ee, 'myevent');
} catch (err) {
  console.error('error happened', err);
}
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.error('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

**`Since`**

v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:189

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:190

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, `...eventTargets`): `void`

```js
import { setMaxListeners, EventEmitter } from 'node:events';

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

**`Since`**

v15.4.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | (`EventEmitter` \| `_DOMEventTarget`)[] | - |

#### Returns

`void`

#### Inherited from

EventEmitter.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:311
