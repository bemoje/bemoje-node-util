[@bemoje/node-util](/docs/index.md) / IOpenaiApiClientOptions

# Interface: IOpenaiApiClientOptions

Options for creating a new instance of AbstractApiClient.

**`See`**

AbstractApiClient

## Hierarchy

- [`IAbstractApiClientOptions`](/docs/interfaces/IAbstractApiClientOptions.md)

  ↳ **`IOpenaiApiClientOptions`**

## Table of contents

### Properties

- [apiKey](/docs/interfaces/IOpenaiApiClientOptions.md#apikey)
- [cache](/docs/interfaces/IOpenaiApiClientOptions.md#cache)
- [cacheDefaults](/docs/interfaces/IOpenaiApiClientOptions.md#cachedefaults)
- [concurrency](/docs/interfaces/IOpenaiApiClientOptions.md#concurrency)
- [logAllEvents](/docs/interfaces/IOpenaiApiClientOptions.md#logallevents)
- [retryDefaults](/docs/interfaces/IOpenaiApiClientOptions.md#retrydefaults)

## Properties

### apiKey

• `Optional` **apiKey**: `string`

OpenAI API key

#### Defined in

src/api/openai/types/IOpenaiApiClientOptions.ts:7

___

### cache

• `Optional` **cache**: [`IApiResponseCacheOptions`](/docs/interfaces/IApiResponseCacheOptions.md)

Options for initialization the cache

#### Inherited from

[IAbstractApiClientOptions](/docs/interfaces/IAbstractApiClientOptions.md).[cache](/docs/interfaces/IAbstractApiClientOptions.md#cache)

#### Defined in

src/api/types/IAbstractApiClientOptions.ts:22

___

### cacheDefaults

• `Optional` **cacheDefaults**: [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)

Defaults for API request cache behaviour. Can be overriden in individual method calls.

#### Inherited from

[IAbstractApiClientOptions](/docs/interfaces/IAbstractApiClientOptions.md).[cacheDefaults](/docs/interfaces/IAbstractApiClientOptions.md#cachedefaults)

#### Defined in

src/api/types/IAbstractApiClientOptions.ts:37

___

### concurrency

• `Optional` **concurrency**: [`IPromiseQueueOptions`](/docs/interfaces/IPromiseQueueOptions.md)<[`IQueue`](/docs/interfaces/IQueue.md)<[`RunFunction`](/docs/index.md#runfunction), [`IQueueAddOptions`](/docs/interfaces/IQueueAddOptions.md)\>, [`IQueueAddOptions`](/docs/interfaces/IQueueAddOptions.md)\>

Global options for concurrency control. These affect all API requests.

#### Inherited from

[IAbstractApiClientOptions](/docs/interfaces/IAbstractApiClientOptions.md).[concurrency](/docs/interfaces/IAbstractApiClientOptions.md#concurrency)

#### Defined in

src/api/types/IAbstractApiClientOptions.ts:27

___

### logAllEvents

• `Optional` **logAllEvents**: `boolean`

Output all events to console

#### Inherited from

[IAbstractApiClientOptions](/docs/interfaces/IAbstractApiClientOptions.md).[logAllEvents](/docs/interfaces/IAbstractApiClientOptions.md#logallevents)

#### Defined in

src/api/types/IAbstractApiClientOptions.ts:17

___

### retryDefaults

• `Optional` **retryDefaults**: [`IAsyncRetryOptions`](/docs/interfaces/IAsyncRetryOptions.md)

Defaults for API request retry behaviour. Can be overriden in individual method calls.

#### Inherited from

[IAbstractApiClientOptions](/docs/interfaces/IAbstractApiClientOptions.md).[retryDefaults](/docs/interfaces/IAbstractApiClientOptions.md#retrydefaults)

#### Defined in

src/api/types/IAbstractApiClientOptions.ts:32
