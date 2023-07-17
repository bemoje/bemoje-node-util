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
- [deleteSafe](/docs/classes/ApiReponseCache.md#deletesafe)
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

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IApiResponseCacheOptions`](/docs/interfaces/IApiResponseCacheOptions.md) |

#### Defined in

[src/api/ApiReponseCache.ts:40](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L40)

## Properties

### db

• `Readonly` **db**: `Level`<`string`, `string`\>

Level database instance

#### Defined in

[src/api/ApiReponseCache.ts:17](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L17)

___

### events

• `Readonly` **events**: `EventEmitter`

Event emitter for cache events

#### Defined in

[src/api/ApiReponseCache.ts:21](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L21)

___

### maxAgeMs

• `Readonly` **maxAgeMs**: `number`

Max age of cached data in milliseconds. Defaults to 0 (no max age).

#### Defined in

[src/api/ApiReponseCache.ts:25](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L25)

___

### optionsDefaults

▪ `Static` `Readonly` **optionsDefaults**: `Object`

Default options for creating new instances

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dirpath` | `string` |
| `logAllEvents` | `boolean` |
| `maxAgeMs` | `number` |
| `name` | `string` |

#### Defined in

[src/api/ApiReponseCache.ts:30](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L30)

## Methods

### delete

▸ **delete**(`hash`): `Promise`<`void`\>

Delete a given value for a given hash key.

**`Throws`**

if the value does not exist for the give hash.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/api/ApiReponseCache.ts:127](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L127)

___

### deleteEverything

▸ **deleteEverything**(): `Promise`<`void`\>

Delete all cached API responses.

#### Returns

`Promise`<`void`\>

#### Defined in

[src/api/ApiReponseCache.ts:160](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L160)

___

### deleteExpired

▸ **deleteExpired**(): `Promise`<[`ApiReponseCache`](/docs/classes/ApiReponseCache.md)<`V`\>\>

Delete all expired data.

#### Returns

`Promise`<[`ApiReponseCache`](/docs/classes/ApiReponseCache.md)<`V`\>\>

#### Defined in

[src/api/ApiReponseCache.ts:150](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L150)

___

### deleteSafe

▸ **deleteSafe**(`hash`): `Promise`<`boolean`\>

Delete a given value for a given hash key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/api/ApiReponseCache.ts:137](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L137)

___

### emit

▸ `Protected` **emit**<`T`\>(`eventName`, `arg`): `T`

Emit an event but this automatically adds 'this' as an extra argument.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `arg` | `T` |

#### Returns

`T`

#### Defined in

[src/api/ApiReponseCache.ts:286](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L286)

___

### ensureNotExpired

▸ `Protected` **ensureNotExpired**(`hash`, `serialized`): `Promise`<`void`\>

Deletes a value from the cache if it is expired.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |
| `serialized` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/api/ApiReponseCache.ts:234](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L234)

___

### entries

▸ **entries**(): `AsyncIterableIterator`<[`string`, `V`]\>

Iterate over all [key, value] pairs in the cache.

#### Returns

`AsyncIterableIterator`<[`string`, `V`]\>

#### Defined in

[src/api/ApiReponseCache.ts:170](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L170)

___

### get

▸ **get**(`hash`): `Promise`<`V`\>

Get a value for a given hash key.

**`Throws`**

if the value does not exist for the give hash.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |

#### Returns

`Promise`<`V`\>

#### Defined in

[src/api/ApiReponseCache.ts:76](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L76)

___

### getOrElse

▸ **getOrElse**(`hash`, `apiRequest`): `Promise`<`V`\>

Get a value for a given hash key if it exists. Otherwise, get retrive a value with a given function and then store that value in the cache.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hash` | `string` | - |
| `apiRequest` | () => `V` \| `Promise`<`V`\> | function that returns a new value for a given key if it doesn't exist in the cache. |

#### Returns

`Promise`<`V`\>

#### Defined in

[src/api/ApiReponseCache.ts:60](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L60)

___

### getSafe

▸ **getSafe**(`hash`): `Promise`<`undefined` \| `V`\>

Get a value for a given hash key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |

#### Returns

`Promise`<`undefined` \| `V`\>

#### Defined in

[src/api/ApiReponseCache.ts:88](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L88)

___

### has

▸ **has**(`hash`): `Promise`<`boolean`\>

Returns whether a value exists for a given key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/api/ApiReponseCache.ts:102](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L102)

___

### hashKey

▸ **hashKey**(`key`): `string`

Hash any type of key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `unknown` |

#### Returns

`string`

#### Defined in

[src/api/ApiReponseCache.ts:52](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L52)

___

### isExpired

▸ `Protected` **isExpired**(`serialized`): `boolean`

Check if a still raw serialized value string is expired.

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | `string` |

#### Returns

`boolean`

#### Defined in

[src/api/ApiReponseCache.ts:245](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L245)

___

### keys

▸ **keys**(): `AsyncIterableIterator`<`string`\>

Iterate over all keys in the cache.

#### Returns

`AsyncIterableIterator`<`string`\>

#### Defined in

[src/api/ApiReponseCache.ts:186](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L186)

___

### logAllEvents

▸ `Protected` **logAllEvents**(): `void`

Output all events to the console.

#### Returns

`void`

#### Defined in

[src/api/ApiReponseCache.ts:223](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L223)

___

### orThrow

▸ `Protected` **orThrow**<`T`\>(`fn`): `T` \| `Promise`<`T`\>

Shorthand for try/catch block with error-handling
Wrap a function in a try catch block and emit an error event if an error occurs.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `T` \| `Promise`<`T`\> |

#### Returns

`T` \| `Promise`<`T`\>

#### Defined in

[src/api/ApiReponseCache.ts:275](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L275)

___

### parseSerializedTimestamp

▸ `Protected` **parseSerializedTimestamp**(`serialized`): `number`

Parse the timestamp part of a raw serialized value string from the database.

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | `string` |

#### Returns

`number`

#### Defined in

[src/api/ApiReponseCache.ts:260](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L260)

___

### parseSerializedValue

▸ `Protected` **parseSerializedValue**(`serialized`): `V`

Parse the json part of a raw serialized value string from the database.

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | `string` |

#### Returns

`V`

#### Defined in

[src/api/ApiReponseCache.ts:267](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L267)

___

### put

▸ **put**(`hash`, `value`): `Promise`<`V`\>

Set a given value for a given hash key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |
| `value` | `V` |

#### Returns

`Promise`<`V`\>

#### Defined in

[src/api/ApiReponseCache.ts:114](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L114)

___

### serializeValue

▸ `Protected` **serializeValue**(`value`): `string`

Custom JSON stringify function that prepends a timestamp to the stringified object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

#### Returns

`string`

#### Defined in

[src/api/ApiReponseCache.ts:253](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L253)

___

### size

▸ **size**(): `Promise`<`number`\>

Get the number of entries in the cache.

#### Returns

`Promise`<`number`\>

#### Defined in

[src/api/ApiReponseCache.ts:212](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L212)

___

### values

▸ **values**(): `AsyncIterableIterator`<`V`\>

Iterate over all values in the cache.

#### Returns

`AsyncIterableIterator`<`V`\>

#### Defined in

[src/api/ApiReponseCache.ts:199](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/ApiReponseCache.ts#L199)
