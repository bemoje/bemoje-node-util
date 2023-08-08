[@bemoje/node-util](/docs/md/index.md) / PathFilter

# Class: PathFilter

Builder class to easily and flexibly construct and implement filesystem path filtering.

## Hierarchy

- `EventEmitter`

  ↳ **`PathFilter`**

## Table of contents

### Constructors

- [constructor](/docs/md/classes/PathFilter.md#constructor)

### Properties

- [dirpathFilters](/docs/md/classes/PathFilter.md#dirpathfilters)
- [dirpathRegex](/docs/md/classes/PathFilter.md#dirpathregex)
- [filenameFilters](/docs/md/classes/PathFilter.md#filenamefilters)
- [filenameRegex](/docs/md/classes/PathFilter.md#filenameregex)
- [filepathFilters](/docs/md/classes/PathFilter.md#filepathfilters)
- [filepathRegex](/docs/md/classes/PathFilter.md#filepathregex)
- [isCaseInsensitive](/docs/md/classes/PathFilter.md#iscaseinsensitive)
- [captureRejectionSymbol](/docs/md/classes/PathFilter.md#capturerejectionsymbol)
- [captureRejections](/docs/md/classes/PathFilter.md#capturerejections)
- [defaultMaxListeners](/docs/md/classes/PathFilter.md#defaultmaxlisteners)
- [errorMonitor](/docs/md/classes/PathFilter.md#errormonitor)

### Accessors

- [ignoreOptionDefaults](/docs/md/classes/PathFilter.md#ignoreoptiondefaults)

### Methods

- [addListener](/docs/md/classes/PathFilter.md#addlistener)
- [emit](/docs/md/classes/PathFilter.md#emit)
- [eventNames](/docs/md/classes/PathFilter.md#eventnames)
- [filterDirpath](/docs/md/classes/PathFilter.md#filterdirpath)
- [filterFilename](/docs/md/classes/PathFilter.md#filterfilename)
- [filterFilepath](/docs/md/classes/PathFilter.md#filterfilepath)
- [getMaxListeners](/docs/md/classes/PathFilter.md#getmaxlisteners)
- [handleOptions](/docs/md/classes/PathFilter.md#handleoptions)
- [ignoreDirpath](/docs/md/classes/PathFilter.md#ignoredirpath)
- [ignoreDirpathRegex](/docs/md/classes/PathFilter.md#ignoredirpathregex)
- [ignoreExtension](/docs/md/classes/PathFilter.md#ignoreextension)
- [ignoreFilename](/docs/md/classes/PathFilter.md#ignorefilename)
- [ignoreFilenameRegex](/docs/md/classes/PathFilter.md#ignorefilenameregex)
- [ignoreFilepath](/docs/md/classes/PathFilter.md#ignorefilepath)
- [ignoreFilepathRegex](/docs/md/classes/PathFilter.md#ignorefilepathregex)
- [listenerCount](/docs/md/classes/PathFilter.md#listenercount)
- [listeners](/docs/md/classes/PathFilter.md#listeners)
- [off](/docs/md/classes/PathFilter.md#off)
- [on](/docs/md/classes/PathFilter.md#on)
- [once](/docs/md/classes/PathFilter.md#once)
- [prependListener](/docs/md/classes/PathFilter.md#prependlistener)
- [prependOnceListener](/docs/md/classes/PathFilter.md#prependoncelistener)
- [rawListeners](/docs/md/classes/PathFilter.md#rawlisteners)
- [removeAllListeners](/docs/md/classes/PathFilter.md#removealllisteners)
- [removeListener](/docs/md/classes/PathFilter.md#removelistener)
- [setMaxListeners](/docs/md/classes/PathFilter.md#setmaxlisteners)
- [validateDirpath](/docs/md/classes/PathFilter.md#validatedirpath)
- [validateFilename](/docs/md/classes/PathFilter.md#validatefilename)
- [validateFilepath](/docs/md/classes/PathFilter.md#validatefilepath)
- [getEventListeners](/docs/md/classes/PathFilter.md#geteventlisteners)
- [listenerCount](/docs/md/classes/PathFilter.md#listenercount-1)
- [on](/docs/md/classes/PathFilter.md#on-1)
- [once](/docs/md/classes/PathFilter.md#once-1)
- [setMaxListeners](/docs/md/classes/PathFilter.md#setmaxlisteners-1)

## Constructors

### constructor

• **new PathFilter**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.captureRejections?` | `boolean` |

#### Overrides

EventEmitter.constructor

#### Defined in

src/filesystem/path/PathFilter.ts:30

## Properties

### dirpathFilters

• `Protected` **dirpathFilters**: (`path`: `string`) => `boolean`[] = `[]`

#### Defined in

src/filesystem/path/PathFilter.ts:21

___

### dirpathRegex

• `Protected` **dirpathRegex**: `RegExp`[] = `[]`

#### Defined in

src/filesystem/path/PathFilter.ts:25

___

### filenameFilters

• `Protected` **filenameFilters**: (`path`: `string`) => `boolean`[] = `[]`

#### Defined in

src/filesystem/path/PathFilter.ts:22

___

### filenameRegex

• `Protected` **filenameRegex**: `RegExp`[] = `[]`

#### Defined in

src/filesystem/path/PathFilter.ts:26

___

### filepathFilters

• `Protected` **filepathFilters**: (`path`: `string`) => `boolean`[] = `[]`

#### Defined in

src/filesystem/path/PathFilter.ts:20

___

### filepathRegex

• `Protected` **filepathRegex**: `RegExp`[] = `[]`

#### Defined in

src/filesystem/path/PathFilter.ts:24

___

### isCaseInsensitive

• **isCaseInsensitive**: `boolean`

#### Defined in

src/filesystem/path/PathFilter.ts:28

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](/docs/md/classes/PromiseQueue.md#capturerejectionsymbol)

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

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](/docs/md/classes/PromiseQueue.md#errormonitor)

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

### ignoreOptionDefaults

• `Static` `Protected` `get` **ignoreOptionDefaults**(): [`IIgnoreOptions`](/docs/md/interfaces/IIgnoreOptions.md)

Returns a new object with the default ignore options.

#### Returns

[`IIgnoreOptions`](/docs/md/interfaces/IIgnoreOptions.md)

#### Defined in

src/filesystem/path/PathFilter.ts:13

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`PathFilter`](/docs/md/classes/PathFilter.md)

Alias for `emitter.on(eventName, listener)`.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`PathFilter`](/docs/md/classes/PathFilter.md)

#### Inherited from

EventEmitter.addListener

#### Defined in

node_modules/@types/node/events.d.ts:390

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

### filterDirpath

▸ **filterDirpath**(`filter`): [`PathFilter`](/docs/md/classes/PathFilter.md)

Add a custom filter function for validating dirpaths.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | (`path`: `string`) => `boolean` |

#### Returns

[`PathFilter`](/docs/md/classes/PathFilter.md)

#### Defined in

src/filesystem/path/PathFilter.ts:99

___

### filterFilename

▸ **filterFilename**(`filter`): [`PathFilter`](/docs/md/classes/PathFilter.md)

Add a custom filter function for validating filenames.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | (`path`: `string`) => `boolean` |

#### Returns

[`PathFilter`](/docs/md/classes/PathFilter.md)

#### Defined in

src/filesystem/path/PathFilter.ts:107

___

### filterFilepath

▸ **filterFilepath**(`filter`): [`PathFilter`](/docs/md/classes/PathFilter.md)

Add a custom filter function for validating filepaths

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | (`path`: `string`) => `boolean` |

#### Returns

[`PathFilter`](/docs/md/classes/PathFilter.md)

#### Defined in

src/filesystem/path/PathFilter.ts:91

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](/docs/md/classes/PathFilter.md#defaultmaxlisteners).

**`Since`**

v1.0.0

#### Returns

`number`

#### Inherited from

EventEmitter.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:567

___

### handleOptions

▸ `Protected` **handleOptions**(`escaped`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `escaped` | `string` |
| `options?` | [`IIgnoreOptions`](/docs/md/interfaces/IIgnoreOptions.md) |

#### Returns

`string`

#### Defined in

src/filesystem/path/PathFilter.ts:34

___

### ignoreDirpath

▸ **ignoreDirpath**(`ignore`, `options?`): [`PathFilter`](/docs/md/classes/PathFilter.md)

Add a whole or partial dirname to ignore.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ignore` | `string` |
| `options?` | [`IIgnoreOptions`](/docs/md/interfaces/IIgnoreOptions.md) |

#### Returns

[`PathFilter`](/docs/md/classes/PathFilter.md)

#### Defined in

src/filesystem/path/PathFilter.ts:56

___

### ignoreDirpathRegex

▸ **ignoreDirpathRegex**(`regex`): [`PathFilter`](/docs/md/classes/PathFilter.md)

Add a custom regex object for matching dirpaths to be ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `regex` | `RegExp` |

#### Returns

[`PathFilter`](/docs/md/classes/PathFilter.md)

#### Defined in

src/filesystem/path/PathFilter.ts:123

___

### ignoreExtension

▸ **ignoreExtension**(`ignore`): [`PathFilter`](/docs/md/classes/PathFilter.md)

Add a file extension type to ignore.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ignore` | `string` |

#### Returns

[`PathFilter`](/docs/md/classes/PathFilter.md)

#### Defined in

src/filesystem/path/PathFilter.ts:80

___

### ignoreFilename

▸ **ignoreFilename**(`ignore`, `options?`): [`PathFilter`](/docs/md/classes/PathFilter.md)

Add a whole or partial filename to ignore.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ignore` | `string` |
| `options?` | [`IIgnoreOptions`](/docs/md/interfaces/IIgnoreOptions.md) |

#### Returns

[`PathFilter`](/docs/md/classes/PathFilter.md)

#### Defined in

src/filesystem/path/PathFilter.ts:68

___

### ignoreFilenameRegex

▸ **ignoreFilenameRegex**(`regex`): [`PathFilter`](/docs/md/classes/PathFilter.md)

Add a custom regex object for matching filenames to be ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `regex` | `RegExp` |

#### Returns

[`PathFilter`](/docs/md/classes/PathFilter.md)

#### Defined in

src/filesystem/path/PathFilter.ts:131

___

### ignoreFilepath

▸ **ignoreFilepath**(`ignore`, `options?`): [`PathFilter`](/docs/md/classes/PathFilter.md)

Add a whole or partial filepath to ignore.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ignore` | `string` |
| `options?` | [`IIgnoreOptions`](/docs/md/interfaces/IIgnoreOptions.md) |

#### Returns

[`PathFilter`](/docs/md/classes/PathFilter.md)

#### Defined in

src/filesystem/path/PathFilter.ts:44

___

### ignoreFilepathRegex

▸ **ignoreFilepathRegex**(`regex`): [`PathFilter`](/docs/md/classes/PathFilter.md)

Add a custom regex object for matching filepaths to be ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `regex` | `RegExp` |

#### Returns

[`PathFilter`](/docs/md/classes/PathFilter.md)

#### Defined in

src/filesystem/path/PathFilter.ts:115

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

▸ **off**(`eventName`, `listener`): [`PathFilter`](/docs/md/classes/PathFilter.md)

Alias for `emitter.removeListener()`.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`PathFilter`](/docs/md/classes/PathFilter.md)

#### Inherited from

EventEmitter.off

#### Defined in

node_modules/@types/node/events.d.ts:540

___

### on

▸ **on**(`eventName`, `listener`): [`PathFilter`](/docs/md/classes/PathFilter.md)

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

[`PathFilter`](/docs/md/classes/PathFilter.md)

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/node/events.d.ts:422

___

### once

▸ **once**(`eventName`, `listener`): [`PathFilter`](/docs/md/classes/PathFilter.md)

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

[`PathFilter`](/docs/md/classes/PathFilter.md)

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:452

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`PathFilter`](/docs/md/classes/PathFilter.md)

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

[`PathFilter`](/docs/md/classes/PathFilter.md)

#### Inherited from

EventEmitter.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:679

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`PathFilter`](/docs/md/classes/PathFilter.md)

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

[`PathFilter`](/docs/md/classes/PathFilter.md)

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

▸ **removeAllListeners**(`event?`): [`PathFilter`](/docs/md/classes/PathFilter.md)

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

[`PathFilter`](/docs/md/classes/PathFilter.md)

#### Inherited from

EventEmitter.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:551

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`PathFilter`](/docs/md/classes/PathFilter.md)

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

[`PathFilter`](/docs/md/classes/PathFilter.md)

#### Inherited from

EventEmitter.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:535

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`PathFilter`](/docs/md/classes/PathFilter.md)

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

[`PathFilter`](/docs/md/classes/PathFilter.md)

#### Inherited from

EventEmitter.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:561

___

### validateDirpath

▸ **validateDirpath**(`dirpath`): `boolean`

Performs the configured dirpath filtering.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dirpath` | `string` |

#### Returns

`boolean`

#### Defined in

src/filesystem/path/PathFilter.ts:158

___

### validateFilename

▸ **validateFilename**(`filename`): `boolean`

Performs the configured filename filtering.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |

#### Returns

`boolean`

#### Defined in

src/filesystem/path/PathFilter.ts:178

___

### validateFilepath

▸ **validateFilepath**(`filepath`): `boolean`

Performs the configured filepath filtering.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filepath` | `string` |

#### Returns

`boolean`

#### Defined in

src/filesystem/path/PathFilter.ts:139

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
