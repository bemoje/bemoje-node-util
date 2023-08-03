[@bemoje/node-util](/docs/index.md) / IAbstractApiClientOptions

# Interface: IAbstractApiClientOptions

Options for creating a new instance of AbstractApiClient.

**`See`**

AbstractApiClient

## Hierarchy

- **`IAbstractApiClientOptions`**

  ↳ [`IOpenaiApiClientOptions`](/docs/interfaces/IOpenaiApiClientOptions.md)

## Table of contents

### Properties

- [cache](/docs/interfaces/IAbstractApiClientOptions.md#cache)
- [cacheDefaults](/docs/interfaces/IAbstractApiClientOptions.md#cachedefaults)
- [concurrency](/docs/interfaces/IAbstractApiClientOptions.md#concurrency)
- [logAllEvents](/docs/interfaces/IAbstractApiClientOptions.md#logallevents)
- [retryDefaults](/docs/interfaces/IAbstractApiClientOptions.md#retrydefaults)

## Properties

### cache

• `Optional` **cache**: [`IApiResponseCacheOptions`](/docs/interfaces/IApiResponseCacheOptions.md)

Options for initialization the cache

#### Defined in

src/api/types/IAbstractApiClientOptions.ts:22

___

### cacheDefaults

• `Optional` **cacheDefaults**: [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)

Defaults for API request cache behaviour. Can be overriden in individual method calls.

#### Defined in

src/api/types/IAbstractApiClientOptions.ts:37

___

### concurrency

• `Optional` **concurrency**: [`IPromiseQueueOptions`](/docs/interfaces/IPromiseQueueOptions.md)<[`IQueue`](/docs/interfaces/IQueue.md)<[`RunFunction`](/docs/index.md#runfunction), [`IQueueAddOptions`](/docs/interfaces/IQueueAddOptions.md)\>, [`IQueueAddOptions`](/docs/interfaces/IQueueAddOptions.md)\>

Global options for concurrency control. These affect all API requests.

#### Defined in

src/api/types/IAbstractApiClientOptions.ts:27

___

### logAllEvents

• `Optional` **logAllEvents**: `boolean`

Output all events to console

#### Defined in

src/api/types/IAbstractApiClientOptions.ts:17

___

### retryDefaults

• `Optional` **retryDefaults**: [`IAsyncRetryOptions`](/docs/interfaces/IAsyncRetryOptions.md)

Defaults for API request retry behaviour. Can be overriden in individual method calls.

#### Defined in

src/api/types/IAbstractApiClientOptions.ts:32
