[@bemoje/node-util](/docs/index.md) / OpenaiApiClientBase

# Class: OpenaiApiClientBase

A class representing an OpenAI API client.

## Hierarchy

- **`OpenaiApiClientBase`**

  ↳ [`OpenaiApiClient`](/docs/classes/OpenaiApiClient.md)

## Table of contents

### Constructors

- [constructor](/docs/classes/OpenaiApiClientBase.md#constructor)

### Properties

- [\_apiRequest](/docs/classes/OpenaiApiClientBase.md#_apirequest)
- [apiDefaults](/docs/classes/OpenaiApiClientBase.md#apidefaults)
- [cache](/docs/classes/OpenaiApiClientBase.md#cache)
- [cacheDefaults](/docs/classes/OpenaiApiClientBase.md#cachedefaults)
- [client](/docs/classes/OpenaiApiClientBase.md#client)
- [events](/docs/classes/OpenaiApiClientBase.md#events)
- [queue](/docs/classes/OpenaiApiClientBase.md#queue)
- [retryDefaults](/docs/classes/OpenaiApiClientBase.md#retrydefaults)

### Methods

- [\_chat](/docs/classes/OpenaiApiClientBase.md#_chat)
- [\_completion](/docs/classes/OpenaiApiClientBase.md#_completion)
- [\_edit](/docs/classes/OpenaiApiClientBase.md#_edit)
- [\_transcribe](/docs/classes/OpenaiApiClientBase.md#_transcribe)
- [assertReponseDataComplete](/docs/classes/OpenaiApiClientBase.md#assertreponsedatacomplete)
- [chat3\_16](/docs/classes/OpenaiApiClientBase.md#chat3_16)
- [chat3\_8](/docs/classes/OpenaiApiClientBase.md#chat3_8)
- [chat4\_8](/docs/classes/OpenaiApiClientBase.md#chat4_8)
- [completion](/docs/classes/OpenaiApiClientBase.md#completion)
- [countTokens](/docs/classes/OpenaiApiClientBase.md#counttokens)
- [deleteDefaultOrUndefinedOptions](/docs/classes/OpenaiApiClientBase.md#deletedefaultorundefinedoptions)
- [editCode](/docs/classes/OpenaiApiClientBase.md#editcode)
- [editText](/docs/classes/OpenaiApiClientBase.md#edittext)
- [emit](/docs/classes/OpenaiApiClientBase.md#emit)
- [getDefaultApiKey](/docs/classes/OpenaiApiClientBase.md#getdefaultapikey)
- [handleCacheOptions](/docs/classes/OpenaiApiClientBase.md#handlecacheoptions)
- [handleChatOptions](/docs/classes/OpenaiApiClientBase.md#handlechatoptions)
- [handleCompletionOptions](/docs/classes/OpenaiApiClientBase.md#handlecompletionoptions)
- [handleEditOptions](/docs/classes/OpenaiApiClientBase.md#handleeditoptions)
- [handleOptions](/docs/classes/OpenaiApiClientBase.md#handleoptions)
- [handleRetryOptions](/docs/classes/OpenaiApiClientBase.md#handleretryoptions)
- [logAllEvents](/docs/classes/OpenaiApiClientBase.md#logallevents)
- [parseChoices](/docs/classes/OpenaiApiClientBase.md#parsechoices)
- [stringTokens](/docs/classes/OpenaiApiClientBase.md#stringtokens)

## Constructors

### constructor

• **new OpenaiApiClientBase**(`options?`)

Create a new OpenaiApiClient instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IApiClientOptions`](/docs/interfaces/IApiClientOptions.md) | The constructor options to use. |

#### Defined in

[src/api/OpenaiApiClientBase.ts:102](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L102)

## Properties

### \_apiRequest

• `Protected` `Readonly` **\_apiRequest**: (`request`: `string` \| `CreateChatCompletionRequest` \| `CreateCompletionRequest` \| `CreateEditRequest`, `retry`: `Options`, `cache`: [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md), `apiRequest`: () => `Promise`<`string`[]\>) => `Promise`<`string`\>

#### Type declaration

▸ (`request`, `retry`, `cache`, `apiRequest`): `Promise`<`string`\>

Generic function for sending requests to the openai api.
This is used for all the API endpoints.
It handles retrying, cache, hashing, and emitting events.
This method is bound to the instance on initialization because it gets wrapped with a concurrency controller in the constructor.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | `string` \| `CreateChatCompletionRequest` \| `CreateCompletionRequest` \| `CreateEditRequest` | The request object to send to the openai api. |
| `retry` | `Options` | The retry options. |
| `cache` | [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md) | The cache options. |
| `apiRequest` | () => `Promise`<`string`[]\> | - |

##### Returns

`Promise`<`string`\>

#### Defined in

[src/api/OpenaiApiClientBase.ts:86](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L86)

___

### apiDefaults

• `Readonly` **apiDefaults**: [`IApiClientApiDefaultsOptions`](/docs/interfaces/IApiClientApiDefaultsOptions.md)

Defaults for API requests. Can be overriden in individual method calls.

#### Defined in

[src/api/OpenaiApiClientBase.ts:51](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L51)

___

### cache

• `Readonly` **cache**: [`ApiReponseCache`](/docs/classes/ApiReponseCache.md)<`string`[]\>

API response cache

#### Defined in

[src/api/OpenaiApiClientBase.ts:46](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L46)

___

### cacheDefaults

• `Readonly` **cacheDefaults**: [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)

Options for whether to overwrite existing cached data by default for api requests

#### Defined in

[src/api/OpenaiApiClientBase.ts:73](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L73)

___

### client

• `Readonly` **client**: `OpenAIApi`

API client instance

#### Defined in

[src/api/OpenaiApiClientBase.ts:36](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L36)

___

### events

• `Readonly` **events**: `EventEmitter`

Event emitter for cache events

#### Defined in

[src/api/OpenaiApiClientBase.ts:41](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L41)

___

### queue

• `Readonly` **queue**: [`PQueue`](/docs/classes/PQueue.md)<[`IQueue`](/docs/interfaces/IQueue.md)<[`RunFunction`](/docs/index.md#runfunction), [`IQueueAddOptions`](/docs/interfaces/IQueueAddOptions.md)\>, [`IQueueAddOptions`](/docs/interfaces/IQueueAddOptions.md)\>

Queue for sending requests to the openai api.

#### Defined in

[src/api/OpenaiApiClientBase.ts:96](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L96)

___

### retryDefaults

• `Readonly` **retryDefaults**: `Options`

Options for async-retry

#### Defined in

[src/api/OpenaiApiClientBase.ts:64](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L64)

## Methods

### \_chat

▸ `Protected` **_chat**(`request`, `retry`, `cache`): `Promise`<`string`\>

Send chat request to the openai API.
This is used by all the preset methods, the public methods: chat3_8, chat3_16, and chat4_8.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | `CreateChatCompletionRequest` | The request object to send to the openai api. |
| `retry` | `Options` | The retry options. |
| `cache` | [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md) | The cache options. |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/OpenaiApiClientBase.ts:371](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L371)

___

### \_completion

▸ `Protected` **_completion**(`request`, `retry`, `cache`): `Promise`<`string`\>

Send completion request to the openai API.
This is used by all the preset methods, the public methods: completion.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | `CreateCompletionRequest` | The request object to send to the openai api. |
| `retry` | `Options` | The retry options. |
| `cache` | [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md) | The cache options. |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/OpenaiApiClientBase.ts:329](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L329)

___

### \_edit

▸ `Protected` **_edit**(`request`, `retry`, `cache`): `Promise`<`string`\>

Send edit request to the openai API.
This is used by all the preset methods, the public methods: editText, editCode

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | `CreateEditRequest` | The request object to send to the openai api. |
| `retry` | `Options` | The retry options. |
| `cache` | [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md) | The cache options. |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/OpenaiApiClientBase.ts:390](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L390)

___

### \_transcribe

▸ `Protected` **_transcribe**(`filepath`, `retry`, `cache`): `Promise`<`string`\>

Send chat request to the openai API.
This is used by all the preset methods, the public methods: chat3_8, chat3_16, and chat4_8.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filepath` | `string` | - |
| `retry` | `Options` | The retry options. |
| `cache` | [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md) | The cache options. |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/OpenaiApiClientBase.ts:348](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L348)

___

### assertReponseDataComplete

▸ `Protected` **assertReponseDataComplete**(`data`): `void`

Assert that the response data is complete by verifying that all returned choices have finish_reason: stop.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `CreateChatCompletionResponse` \| `CreateCompletionResponse` \| `CreateEditResponse` |

#### Returns

`void`

#### Defined in

[src/api/OpenaiApiClientBase.ts:463](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L463)

___

### chat3\_16

▸ **chat3_16**(`options`): `Promise`<`string`\>

Send a chat completion request to the openai api with a max_tokens cap of 16384.
Uses model: 'gpt-3.5-turbo-16k'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IChatRequestOptions`](/docs/interfaces/IChatRequestOptions.md) | The options to use. |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/OpenaiApiClientBase.ts:177](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L177)

___

### chat3\_8

▸ **chat3_8**(`options`): `Promise`<`string`\>

Send a chat completion request to the openai api with a max_tokens cap of 4096.
Uses model: 'gpt-3.5-turbo'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IChatRequestOptions`](/docs/interfaces/IChatRequestOptions.md) | The options to use. |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/OpenaiApiClientBase.ts:168](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L168)

___

### chat4\_8

▸ **chat4_8**(`options`): `Promise`<`string`\>

Send a gpt4 chat completion request to the openai api with a max_tokens cap of 8k.
Uses model: 'gpt-4'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IChatRequestOptions`](/docs/interfaces/IChatRequestOptions.md) | The options to use. |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/OpenaiApiClientBase.ts:187](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L187)

___

### completion

▸ **completion**(`options`): `Promise`<`string`\>

Send a completion request to the openai api.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`ICompletionRequestOptions`](/docs/interfaces/ICompletionRequestOptions.md) | The options to use. |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/OpenaiApiClientBase.ts:159](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L159)

___

### countTokens

▸ **countTokens**(`string`): `number`

Count the number of tokens in a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to count tokens in. |

#### Returns

`number`

#### Defined in

[src/api/OpenaiApiClientBase.ts:221](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L221)

___

### deleteDefaultOrUndefinedOptions

▸ `Protected` **deleteDefaultOrUndefinedOptions**<`T`\>(`options`, `defaults?`): `T`

Delete all options that are undefined or equal to the default value.
The response cache uses hashed options to determine if the request has already been made.
Removing default values and undefined values normalizes the options object so it hashes the same.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `T` | The options to delete from. |
| `defaults` | `Record`<`string`, `any`\> | The default values to compare against. |

#### Returns

`T`

#### Defined in

[src/api/OpenaiApiClientBase.ts:442](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L442)

___

### editCode

▸ **editCode**(`options`): `Promise`<`string`\>

Edit code.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IEditRequestOptions`](/docs/interfaces/IEditRequestOptions.md) | The options to use. |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/OpenaiApiClientBase.ts:204](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L204)

___

### editText

▸ **editText**(`options`): `Promise`<`string`\>

Edit text.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IEditRequestOptions`](/docs/interfaces/IEditRequestOptions.md) | The options to use. |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/OpenaiApiClientBase.ts:196](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L196)

___

### emit

▸ `Protected` **emit**<`T`\>(`event`, `arg`): `T`

Emit an event but adds 'this' as an extra trailing argument.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `arg` | `T` |

#### Returns

`T`

#### Defined in

[src/api/OpenaiApiClientBase.ts:488](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L488)

___

### getDefaultApiKey

▸ `Protected` **getDefaultApiKey**(): `string`

Get the default api key from 'process.env.USERPROFILE/repos/apikeys/openai.txt'

#### Returns

`string`

#### Defined in

[src/api/OpenaiApiClientBase.ts:476](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L476)

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

[src/api/OpenaiApiClientBase.ts:318](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L318)

___

### handleChatOptions

▸ `Protected` **handleChatOptions**(`options`): [`CreateChatCompletionRequest`, `Options`, [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)]

Handle chat options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IChatRequestOptions`](/docs/interfaces/IChatRequestOptions.md) | The options to handle. |

#### Returns

[`CreateChatCompletionRequest`, `Options`, [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)]

#### Defined in

[src/api/OpenaiApiClientBase.ts:258](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L258)

___

### handleCompletionOptions

▸ `Protected` **handleCompletionOptions**(`options`): [`CreateCompletionRequest`, `Options`, [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)]

Handle completion options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`ICompletionRequestOptions`](/docs/interfaces/ICompletionRequestOptions.md) | The options to handle. |

#### Returns

[`CreateCompletionRequest`, `Options`, [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)]

#### Defined in

[src/api/OpenaiApiClientBase.ts:229](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L229)

___

### handleEditOptions

▸ `Protected` **handleEditOptions**(`options`): [`CreateEditRequest`, `Options`, [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)]

Handle edit options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IEditRequestOptions`](/docs/interfaces/IEditRequestOptions.md) | The options to handle. |

#### Returns

[`CreateEditRequest`, `Options`, [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)]

#### Defined in

[src/api/OpenaiApiClientBase.ts:282](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L282)

___

### handleOptions

▸ `Protected` **handleOptions**(`options`): [`IApiClientOptions`](/docs/interfaces/IApiClientOptions.md)

Handle the options passed to the constructor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IApiClientOptions`](/docs/interfaces/IApiClientOptions.md) | The options to handle. |

#### Returns

[`IApiClientOptions`](/docs/interfaces/IApiClientOptions.md)

#### Defined in

[src/api/OpenaiApiClientBase.ts:142](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L142)

___

### handleRetryOptions

▸ `Protected` **handleRetryOptions**(`retryOptions?`): `Options`

Handle retry options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `retryOptions?` | `Options` | The retry options to handle. |

#### Returns

`Options`

#### Defined in

[src/api/OpenaiApiClientBase.ts:303](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L303)

___

### logAllEvents

▸ `Protected` **logAllEvents**(): [`OpenaiApiClientBase`](/docs/classes/OpenaiApiClientBase.md)

console.log all emitted events

#### Returns

[`OpenaiApiClientBase`](/docs/classes/OpenaiApiClientBase.md)

#### Defined in

[src/api/OpenaiApiClientBase.ts:496](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L496)

___

### parseChoices

▸ `Protected` **parseChoices**(`choices`): `string`[]

Extract the actual concent from the 'choices' object from the response data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `choices` | `CreateChatCompletionResponseChoicesInner`[] \| `CreateCompletionResponseChoicesInner`[] | The choices object from the response data. |

#### Returns

`string`[]

#### Defined in

[src/api/OpenaiApiClientBase.ts:423](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L423)

___

### stringTokens

▸ **stringTokens**(`string`): `number`[]

Encode a string into tokens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to encode. |

#### Returns

`number`[]

#### Defined in

[src/api/OpenaiApiClientBase.ts:213](https://github.com/bemoje/bemoje-node-util/blob/f65e483/src/api/OpenaiApiClientBase.ts#L213)
