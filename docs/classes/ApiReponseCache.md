[@bemoje/node-util](/docs/index.md) / ApiReponseCache

# Class: ApiReponseCache<V\>

Persistent API response cache based on level-db.

## Type parameters

| Name |
| :------ |
| `V` |

## Table of contents

### Constructors

- [constructor](/docs/classes/ApiReponseCache.md#constructor)

### Properties

- [db](/docs/classes/ApiReponseCache.md#db)
- [events](/docs/classes/ApiReponseCache.md#events)
- [maxAgeMs](/docs/classes/ApiReponseCache.md#maxagems)
- [optionsDefaults](/docs/classes/ApiReponseCache.md#optionsdefaults)

### Methods

- [delete](/docs/classes/ApiReponseCache.md#delete)
- [deleteEverything](/docs/classes/ApiReponseCache.md#deleteeverything)
- [deleteExpired](/docs/classes/ApiReponseCache.md#deleteexpired)
- [emit](/docs/classes/ApiReponseCache.md#emit)
- [ensureNotExpired](/docs/classes/ApiReponseCache.md#ensurenotexpired)
- [entries](/docs/classes/ApiReponseCache.md#entries)
- [get](/docs/classes/ApiReponseCache.md#get)
- [getOrElse](/docs/classes/ApiReponseCache.md#getorelse)
- [getSafe](/docs/classes/ApiReponseCache.md#getsafe)
- [has](/docs/classes/ApiReponseCache.md#has)
- [hashKey](/docs/classes/ApiReponseCache.md#hashkey)
- [isExpired](/docs/classes/ApiReponseCache.md#isexpired)
- [keys](/docs/classes/ApiReponseCache.md#keys)
- [logAllEvents](/docs/classes/ApiReponseCache.md#logallevents)
- [logWarnErrorEvents](/docs/classes/ApiReponseCache.md#logwarnerrorevents)
- [orThrow](/docs/classes/ApiReponseCache.md#orthrow)
- [parseSerializedTimestamp](/docs/classes/ApiReponseCache.md#parseserializedtimestamp)
- [parseSerializedValue](/docs/classes/ApiReponseCache.md#parseserializedvalue)
- [put](/docs/classes/ApiReponseCache.md#put)
- [serializeValue](/docs/classes/ApiReponseCache.md#serializevalue)
- [size](/docs/classes/ApiReponseCache.md#size)
- [values](/docs/classes/ApiReponseCache.md#values)

## Constructors

### constructor

• **new ApiReponseCache**<`V`\>(`options`)

Create a new instance.

**`Emits`**

options - the options used to create the instance.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IApiResponseCacheOptions`](/docs/interfaces/IApiResponseCacheOptions.md) | Options for creating a new instance. |

#### Defined in

[src/api/ApiReponseCache.ts:45](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L45)

## Properties

### db

• `Readonly` **db**: `Level`<`string`, `string`\>

Level database instance

#### Defined in

[src/api/ApiReponseCache.ts:18](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L18)

___

### events

• `Readonly` **events**: `EventEmitter`

Event emitter for cache events

#### Defined in

[src/api/ApiReponseCache.ts:23](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L23)

___

### maxAgeMs

• `Readonly` **maxAgeMs**: `number`

Max age of cached data in milliseconds. Defaults to 0 (no max age).

#### Defined in

[src/api/ApiReponseCache.ts:28](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L28)

___

### optionsDefaults

▪ `Static` `Readonly` **optionsDefaults**: `Object`

Default options for creating new instances

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dirpath` | `string` |
| `logAllEvents` | `undefined` |
| `maxAgeMs` | `number` |
| `name` | `string` |

#### Defined in

[src/api/ApiReponseCache.ts:33](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L33)

## Methods

### delete

▸ **delete**(`hash`): `Promise`<`void`\>

Delete a given value for a given hash key if it exists.

**`Remarks`**

No error is thrown if no value exists for the given hash.

**`Emits`**

error - if deletion fails.

**`Emits`**

delete - if deletion succeeds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hash` | `string` | The hash key. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/api/ApiReponseCache.ts:152](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L152)

___

### deleteEverything

▸ **deleteEverything**(): `Promise`<`void`\>

Delete all cached API responses.

**`Emits`**

delete - if deletion succeeds.

#### Returns

`Promise`<`void`\>

#### Defined in

[src/api/ApiReponseCache.ts:173](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L173)

___

### deleteExpired

▸ **deleteExpired**(): `Promise`<[`ApiReponseCache`](/docs/classes/ApiReponseCache.md)<`V`\>\>

Delete all expired data.

#### Returns

`Promise`<[`ApiReponseCache`](/docs/classes/ApiReponseCache.md)<`V`\>\>

#### Defined in

[src/api/ApiReponseCache.ts:162](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L162)

___

### emit

▸ `Protected` **emit**<`T`\>(`eventName`, `arg`): `T`

Emit an event but this automatically adds 'this' as an extra argument.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | The event name. |
| `arg` | `T` | - |

#### Returns

`T`

#### Defined in

[src/api/ApiReponseCache.ts:303](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L303)

___

### ensureNotExpired

▸ `Protected` **ensureNotExpired**(`hash`, `serialized`): `Promise`<`void`\>

Deletes a value from the cache if it is expired.

**`Emits`**

expired - if the value is expired.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hash` | `string` | The hash key. |
| `serialized` | `string` | The serialized value. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/api/ApiReponseCache.ts:243](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L243)

___

### entries

▸ **entries**(): `AsyncIterableIterator`<[`string`, `V`]\>

Iterate over all [key, value] pairs in the cache.

**`Remarks`**

This data entries are expired, they are deleted and not yielded.

**`Emits`**

error - if iteration encounters an error.

#### Returns

`AsyncIterableIterator`<[`string`, `V`]\>

#### Defined in

[src/api/ApiReponseCache.ts:185](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L185)

___

### get

▸ **get**(`hash`): `Promise`<`V`\>

Get a value for a given hash key.

**`Emits`**

error - if the value does not exist for the give hash.

**`Emits`**

get - if the value exists for the given hash.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hash` | `string` | The hash key. |

#### Returns

`Promise`<`V`\>

#### Defined in

[src/api/ApiReponseCache.ts:91](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L91)

___

### getOrElse

▸ **getOrElse**(`hash`, `apiRequest`): `Promise`<`V`\>

Get a value for a given hash key if it exists.
If the does not exist, returns a value from the api by invoking the provided function and then stores that value in the cache.

**`Emits`**

hit - if the value exists in the cache.

**`Emits`**

miss - if the value does not exist in the cache.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hash` | `string` | The hash key. |
| `apiRequest` | () => `V` \| `Promise`<`V`\> | function that returns a new value for a given key if it doesn't exist in the cache. |

#### Returns

`Promise`<`V`\>

#### Defined in

[src/api/ApiReponseCache.ts:73](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L73)

___

### getSafe

▸ **getSafe**(`hash`): `Promise`<`undefined` \| `V`\>

Get a value for a given hash key or undefined if it does not exist or an error occurs.

**`Emits`**

get - if the value exists for the given hash.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hash` | `string` | The hash key. |

#### Returns

`Promise`<`undefined` \| `V`\>

#### Defined in

[src/api/ApiReponseCache.ts:105](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L105)

___

### has

▸ **has**(`hash`): `Promise`<`boolean`\>

Returns whether a value exists for a given key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hash` | `string` | The hash key. |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/api/ApiReponseCache.ts:120](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L120)

___

### hashKey

▸ **hashKey**(`key`): `string`

Hash any type of key to a base64 string, using the SHA1 algorithm.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `any` | The key to hash. |

#### Returns

`string`

#### Defined in

[src/api/ApiReponseCache.ts:61](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L61)

___

### isExpired

▸ `Protected` **isExpired**(`serialized`): `boolean`

Check if a still raw serialized value string is expired.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serialized` | `string` | The serialized value. |

#### Returns

`boolean`

#### Defined in

[src/api/ApiReponseCache.ts:255](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L255)

___

### keys

▸ **keys**(): `AsyncIterableIterator`<`string`\>

Iterate over all keys in the cache.

**`Emits`**

error - if iteration encounters an error.

#### Returns

`AsyncIterableIterator`<`string`\>

#### Defined in

[src/api/ApiReponseCache.ts:202](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L202)

___

### logAllEvents

▸ `Protected` **logAllEvents**(): `void`

Output all events to the console.

#### Returns

`void`

#### Defined in

[src/api/ApiReponseCache.ts:311](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L311)

___

### logWarnErrorEvents

▸ `Protected` **logWarnErrorEvents**(): `void`

Output all 'warn' and 'error' events to the console.

#### Returns

`void`

#### Defined in

[src/api/ApiReponseCache.ts:324](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L324)

___

### orThrow

▸ `Protected` **orThrow**<`T`\>(`fn`): `T` \| `Promise`<`T`\>

Shorthand for try/catch block with error-handling.
Wrap a function call in a try catch block and emit an error event if an error occurs.

**`Emits`**

error - if the provided function throws an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | () => `T` \| `Promise`<`T`\> | The function to wrap. |

#### Returns

`T` \| `Promise`<`T`\>

The return value of the provided function.

#### Defined in

[src/api/ApiReponseCache.ts:291](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L291)

___

### parseSerializedTimestamp

▸ `Protected` **parseSerializedTimestamp**(`serialized`): `number`

Parse the timestamp part of a raw serialized value string from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serialized` | `string` | The serialized value. |

#### Returns

`number`

#### Defined in

[src/api/ApiReponseCache.ts:272](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L272)

___

### parseSerializedValue

▸ `Protected` **parseSerializedValue**(`serialized`): `V`

Parse the json part of a raw serialized value string from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serialized` | `string` | The serialized value. |

#### Returns

`V`

#### Defined in

[src/api/ApiReponseCache.ts:280](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L280)

___

### put

▸ **put**(`hash`, `value`): `Promise`<`V`\>

Set a given value for a given hash key.

**`Emits`**

put - if insertion succeeds.

**`Emits`**

error - if insertion fails.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hash` | `string` | The hash key. |
| `value` | `V` | The value to store. |

#### Returns

`Promise`<`V`\>

#### Defined in

[src/api/ApiReponseCache.ts:136](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L136)

___

### serializeValue

▸ `Protected` **serializeValue**(`value`): `string`

Custom JSON stringify function that prepends a timestamp to the stringified object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `V` | The value to serialize. |

#### Returns

`string`

#### Defined in

[src/api/ApiReponseCache.ts:264](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L264)

___

### size

▸ **size**(): `Promise`<`number`\>

Get the number of entries in the cache.

#### Returns

`Promise`<`number`\>

#### Defined in

[src/api/ApiReponseCache.ts:229](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L229)

___

### values

▸ **values**(): `AsyncIterableIterator`<`V`\>

Iterate over all values in the cache.

**`Emits`**

error - if iteration encounters an error.

#### Returns

`AsyncIterableIterator`<`V`\>

#### Defined in

[src/api/ApiReponseCache.ts:216](https://github.com/bemoje/bemoje-node-util/blob/957547c/src/api/ApiReponseCache.ts#L216)
