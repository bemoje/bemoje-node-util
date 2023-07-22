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

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IApiResponseCacheOptions`](/docs/interfaces/IApiResponseCacheOptions.md) | Options for creating a new instance. |

#### Defined in

[src/api/ApiReponseCache.ts:43](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L43)

## Properties

### db

• `Readonly` **db**: `Level`<`string`, `string`\>

Level database instance

#### Defined in

[src/api/ApiReponseCache.ts:17](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L17)

___

### events

• `Readonly` **events**: `EventEmitter`

Event emitter for cache events

#### Defined in

[src/api/ApiReponseCache.ts:22](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L22)

___

### maxAgeMs

• `Readonly` **maxAgeMs**: `number`

Max age of cached data in milliseconds. Defaults to 0 (no max age).

#### Defined in

[src/api/ApiReponseCache.ts:27](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L27)

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

[src/api/ApiReponseCache.ts:32](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L32)

## Methods

### delete

▸ **delete**(`hash`): `Promise`<`void`\>

Delete a given value for a given hash key if it exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hash` | `string` | The hash key. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/api/ApiReponseCache.ts:139](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L139)

___

### deleteEverything

▸ **deleteEverything**(): `Promise`<`void`\>

Delete all cached API responses.

#### Returns

`Promise`<`void`\>

#### Defined in

[src/api/ApiReponseCache.ts:173](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L173)

___

### deleteExpired

▸ **deleteExpired**(): `Promise`<[`ApiReponseCache`](/docs/classes/ApiReponseCache.md)<`V`\>\>

Delete all expired data.

#### Returns

`Promise`<[`ApiReponseCache`](/docs/classes/ApiReponseCache.md)<`V`\>\>

#### Defined in

[src/api/ApiReponseCache.ts:163](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L163)

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

[src/api/ApiReponseCache.ts:308](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L308)

___

### ensureNotExpired

▸ `Protected` **ensureNotExpired**(`hash`, `serialized`): `Promise`<`void`\>

Deletes a value from the cache if it is expired.

**`Throws`**

if the value is expired.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hash` | `string` | The hash key. |
| `serialized` | `string` | The serialized value. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/api/ApiReponseCache.ts:250](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L250)

___

### entries

▸ **entries**(): `AsyncIterableIterator`<[`string`, `V`]\>

Iterate over all [key, value] pairs in the cache.

#### Returns

`AsyncIterableIterator`<[`string`, `V`]\>

#### Defined in

[src/api/ApiReponseCache.ts:183](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L183)

___

### get

▸ **get**(`hash`): `Promise`<`V`\>

Get a value for a given hash key.

**`Throws`**

if the value does not exist for the give hash.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hash` | `string` | The hash key. |

#### Returns

`Promise`<`V`\>

#### Defined in

[src/api/ApiReponseCache.ts:83](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L83)

___

### getOrElse

▸ **getOrElse**(`hash`, `apiRequest`): `Promise`<`V`\>

Get a value for a given hash key if it exists. Otherwise, get retrive a value with a given function and then store that value in the cache.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hash` | `string` | The hash key. |
| `apiRequest` | () => `V` \| `Promise`<`V`\> | function that returns a new value for a given key if it doesn't exist in the cache. |

#### Returns

`Promise`<`V`\>

#### Defined in

[src/api/ApiReponseCache.ts:66](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L66)

___

### getSafe

▸ **getSafe**(`hash`): `Promise`<`undefined` \| `V`\>

Get a value for a given hash key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hash` | `string` | The hash key. |

#### Returns

`Promise`<`undefined` \| `V`\>

#### Defined in

[src/api/ApiReponseCache.ts:96](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L96)

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

[src/api/ApiReponseCache.ts:111](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L111)

___

### hashKey

▸ **hashKey**(`key`): `string`

Hash any type of key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `unknown` | The key to hash. |

#### Returns

`string`

#### Defined in

[src/api/ApiReponseCache.ts:57](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L57)

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

[src/api/ApiReponseCache.ts:262](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L262)

___

### keys

▸ **keys**(): `AsyncIterableIterator`<`string`\>

Iterate over all keys in the cache.

#### Returns

`AsyncIterableIterator`<`string`\>

#### Defined in

[src/api/ApiReponseCache.ts:199](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L199)

___

### logAllEvents

▸ `Protected` **logAllEvents**(): `void`

Output all events to the console.

#### Returns

`void`

#### Defined in

[src/api/ApiReponseCache.ts:236](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L236)

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | () => `T` \| `Promise`<`T`\> | The function to wrap. |

#### Returns

`T` \| `Promise`<`T`\>

#### Defined in

[src/api/ApiReponseCache.ts:296](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L296)

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

[src/api/ApiReponseCache.ts:279](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L279)

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

[src/api/ApiReponseCache.ts:287](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L287)

___

### put

▸ **put**(`hash`, `value`): `Promise`<`V`\>

Set a given value for a given hash key.

**`Throws`**

if the value does not exist for the give hash.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hash` | `string` | The hash key. |
| `value` | `V` | The value to store. |

#### Returns

`Promise`<`V`\>

#### Defined in

[src/api/ApiReponseCache.ts:126](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L126)

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

[src/api/ApiReponseCache.ts:271](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L271)

___

### size

▸ **size**(): `Promise`<`number`\>

Get the number of entries in the cache.

#### Returns

`Promise`<`number`\>

#### Defined in

[src/api/ApiReponseCache.ts:225](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L225)

___

### values

▸ **values**(): `AsyncIterableIterator`<`V`\>

Iterate over all values in the cache.

#### Returns

`AsyncIterableIterator`<`V`\>

#### Defined in

[src/api/ApiReponseCache.ts:212](https://github.com/bemoje/bemoje-node-util/blob/b4dce81/src/api/ApiReponseCache.ts#L212)
