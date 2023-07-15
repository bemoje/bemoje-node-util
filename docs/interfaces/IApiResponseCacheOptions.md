[@bemoje/node-util](/docs/index.md) / IApiResponseCacheOptions

# Interface: IApiResponseCacheOptions

## Table of contents

### Properties

- [dirpath](/docs/interfaces/IApiResponseCacheOptions.md#dirpath)
- [logAllEvents](/docs/interfaces/IApiResponseCacheOptions.md#logallevents)
- [maxAgeMs](/docs/interfaces/IApiResponseCacheOptions.md#maxagems)
- [name](/docs/interfaces/IApiResponseCacheOptions.md#name)

## Properties

### dirpath

• `Optional` **dirpath**: `string`

Path to cache directory. Defaults to a directory named 'ApiReponseCache' in the logged in user's app data directory.

#### Defined in

src/api/types/IApiResponseCacheOptions.ts:9

___

### logAllEvents

• `Optional` **logAllEvents**: `boolean`

Output all events to console

#### Defined in

src/api/types/IApiResponseCacheOptions.ts:17

___

### maxAgeMs

• `Optional` **maxAgeMs**: `number`

Max age of cached data in milliseconds. Defaults to 0 (no max age).

#### Defined in

src/api/types/IApiResponseCacheOptions.ts:13

___

### name

• `Optional` **name**: `string`

Unique name to be used as the cache directory name.

#### Defined in

src/api/types/IApiResponseCacheOptions.ts:5
