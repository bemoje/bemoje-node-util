[@bemoje/node-util](/docs/index.md) / IApiClientOptions

# Interface: IApiClientOptions

## Table of contents

### Properties

- [apiDefaults](/docs/interfaces/IApiClientOptions.md#apidefaults)
- [apiKey](/docs/interfaces/IApiClientOptions.md#apikey)
- [cacheDefaults](/docs/interfaces/IApiClientOptions.md#cachedefaults)
- [cacheInit](/docs/interfaces/IApiClientOptions.md#cacheinit)
- [logAllEvents](/docs/interfaces/IApiClientOptions.md#logallevents)
- [retryDefaults](/docs/interfaces/IApiClientOptions.md#retrydefaults)

## Properties

### apiDefaults

• `Optional` **apiDefaults**: [`IApiClientApiDefaultsOptions`](/docs/interfaces/IApiClientApiDefaultsOptions.md)

Defaults for API requests. Can be overriden in individual method calls.

#### Defined in

[src/api/types/IApiClientOptions.ts:25](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/types/IApiClientOptions.ts#L25)

___

### apiKey

• `Optional` **apiKey**: `string`

OpenAI API key

#### Defined in

[src/api/types/IApiClientOptions.ts:10](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/types/IApiClientOptions.ts#L10)

___

### cacheDefaults

• `Optional` **cacheDefaults**: [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)

Defaults for API request cache behaviour. Can be overriden in individual method calls.

#### Defined in

[src/api/types/IApiClientOptions.ts:35](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/types/IApiClientOptions.ts#L35)

___

### cacheInit

• `Optional` **cacheInit**: [`IApiResponseCacheOptions`](/docs/interfaces/IApiResponseCacheOptions.md)

Options for initialization the cache

#### Defined in

[src/api/types/IApiClientOptions.ts:20](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/types/IApiClientOptions.ts#L20)

___

### logAllEvents

• `Optional` **logAllEvents**: `boolean`

Output all events to console

#### Defined in

[src/api/types/IApiClientOptions.ts:15](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/types/IApiClientOptions.ts#L15)

___

### retryDefaults

• `Optional` **retryDefaults**: `Options`

Defaults for API request retry behaviour. Can be overriden in individual method calls.

#### Defined in

[src/api/types/IApiClientOptions.ts:30](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/types/IApiClientOptions.ts#L30)
