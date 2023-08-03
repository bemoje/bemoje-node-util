[@bemoje/node-util](/docs/index.md) / AbstractApiClient

# Class: AbstractApiClient

A class representing some kind of client retrieving resources over the internet, like an API or SQL server.

**`Remarks`**

In order to use this class, it must be extended first and then use the sendRequest method.

## Hierarchy

- **`AbstractApiClient`**

  ↳ [`OpenaiApiClient`](/docs/classes/OpenaiApiClient.md)

## Table of contents

### Constructors

- [constructor](/docs/classes/AbstractApiClient.md#constructor)

### Properties

- [cache](/docs/classes/AbstractApiClient.md#cache)
- [cacheDefaults](/docs/classes/AbstractApiClient.md#cachedefaults)
- [events](/docs/classes/AbstractApiClient.md#events)
- [queue](/docs/classes/AbstractApiClient.md#queue)
- [retryDefaults](/docs/classes/AbstractApiClient.md#retrydefaults)
- [sendRequest](/docs/classes/AbstractApiClient.md#sendrequest)
- [concurrencyDefaults](/docs/classes/AbstractApiClient.md#concurrencydefaults)

### Methods

- [emit](/docs/classes/AbstractApiClient.md#emit)
- [handleCacheOptions](/docs/classes/AbstractApiClient.md#handlecacheoptions)
- [handleOptions](/docs/classes/AbstractApiClient.md#handleoptions)
- [handleRetryOptions](/docs/classes/AbstractApiClient.md#handleretryoptions)
- [logAllEvents](/docs/classes/AbstractApiClient.md#logallevents)
- [logWarnErrorEvents](/docs/classes/AbstractApiClient.md#logwarnerrorevents)

## Constructors

### constructor

• **new AbstractApiClient**(`options?`)

Create a new OpenaiApiClient instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IAbstractApiClientOptions`](/docs/interfaces/IAbstractApiClientOptions.md) | The constructor options to use. |

#### Defined in

src/api/AbstractApiClient.ts:94

## Properties

### cache

• `Optional` `Readonly` **cache**: [`ApiReponseCache`](/docs/classes/ApiReponseCache.md)<`any`\>

API response cache

#### Defined in

src/api/AbstractApiClient.ts:31

___

### cacheDefaults

• `Readonly` **cacheDefaults**: [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)

Default options for caching for api requests.
Can be overriden in individual method calls.

#### Defined in

src/api/AbstractApiClient.ts:53

___

### events

• `Readonly` **events**: `EventEmitter`

Event emitter for cache events

#### Defined in

src/api/AbstractApiClient.ts:26

___

### queue

• `Readonly` **queue**: [`PromiseQueue`](/docs/classes/PromiseQueue.md)<[`IQueue`](/docs/interfaces/IQueue.md)<[`RunFunction`](/docs/index.md#runfunction), [`IQueueAddOptions`](/docs/interfaces/IQueueAddOptions.md)\>, [`IQueueAddOptions`](/docs/interfaces/IQueueAddOptions.md)\>

Global queue for sending requests to the openai api.

#### Defined in

src/api/AbstractApiClient.ts:36

___

### retryDefaults

• `Readonly` **retryDefaults**: [`IAsyncRetryOptions`](/docs/interfaces/IAsyncRetryOptions.md)

Default options for async retry for api requests.
Can be overriden in individual method calls.

#### Defined in

src/api/AbstractApiClient.ts:42

___

### sendRequest

• `Protected` `Readonly` **sendRequest**: <T\>(`options`: { `apiRequest`: () => `Promise`<`T`\> ; `args`: `any`[] ; `cache?`: [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md) ; `retry?`: [`IAsyncRetryOptions`](/docs/interfaces/IAsyncRetryOptions.md)  }) => `Promise`<`T`\>

#### Type declaration

▸ <`T`\>(`options`): `Promise`<`T`\>

Generic function for sending requests to the openai api.
This is used for all the API endpoints.
It handles retrying, cache, hashing, and emitting events.
This method is bound to the instance on initialization because it gets wrapped with a concurrency controller in the constructor.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.apiRequest` | () => `Promise`<`T`\> |
| `options.args` | `any`[] |
| `options.cache?` | [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md) |
| `options.retry?` | [`IAsyncRetryOptions`](/docs/interfaces/IAsyncRetryOptions.md) |

##### Returns

`Promise`<`T`\>

#### Defined in

src/api/AbstractApiClient.ts:83

___

### concurrencyDefaults

▪ `Static` `Readonly` **concurrencyDefaults**: [`IPromiseQueueOptions`](/docs/interfaces/IPromiseQueueOptions.md)<[`IQueue`](/docs/interfaces/IQueue.md)<[`RunFunction`](/docs/index.md#runfunction), [`IQueueAddOptions`](/docs/interfaces/IQueueAddOptions.md)\>, [`IQueueAddOptions`](/docs/interfaces/IQueueAddOptions.md)\>

Options for concurrency control. These affect all API requests.

#### Defined in

src/api/AbstractApiClient.ts:60

## Methods

### emit

▸ `Protected` **emit**<`T`\>(`event`, `arg`): `T`

Emit an event but adds 'this' as an extra trailing argument.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | The event name. |
| `arg` | `T` | The argument to emit. |

#### Returns

`T`

#### Defined in

src/api/AbstractApiClient.ts:183

___

### handleCacheOptions

▸ `Protected` **handleCacheOptions**(`cacheOptions?`): [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)

Handle cache options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cacheOptions?` | [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md) | The cache options to handle. |

#### Returns

[`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)

#### Defined in

src/api/AbstractApiClient.ts:174

___

### handleOptions

▸ `Protected` **handleOptions**(`options`): [`IAbstractApiClientOptions`](/docs/interfaces/IAbstractApiClientOptions.md)

Handle the options passed to the constructor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IAbstractApiClientOptions`](/docs/interfaces/IAbstractApiClientOptions.md) | The options to handle. |

#### Returns

[`IAbstractApiClientOptions`](/docs/interfaces/IAbstractApiClientOptions.md)

#### Defined in

src/api/AbstractApiClient.ts:145

___

### handleRetryOptions

▸ `Protected` **handleRetryOptions**(`retryOptions?`): [`IAsyncRetryOptions`](/docs/interfaces/IAsyncRetryOptions.md)

Handle retry options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `retryOptions?` | [`IAsyncRetryOptions`](/docs/interfaces/IAsyncRetryOptions.md) | The retry options to handle. |

#### Returns

[`IAsyncRetryOptions`](/docs/interfaces/IAsyncRetryOptions.md)

#### Defined in

src/api/AbstractApiClient.ts:166

___

### logAllEvents

▸ `Protected` **logAllEvents**(): [`AbstractApiClient`](/docs/classes/AbstractApiClient.md)

Output all events to the console.

#### Returns

[`AbstractApiClient`](/docs/classes/AbstractApiClient.md)

#### Defined in

src/api/AbstractApiClient.ts:191

___

### logWarnErrorEvents

▸ `Protected` **logWarnErrorEvents**(): `void`

Output all 'warn' and 'error' events to the console.

#### Returns

`void`

#### Defined in

src/api/AbstractApiClient.ts:205
