[@bemoje/node-util](/docs/index.md) / OpenaiApiClientExtended

# Class: OpenaiApiClientExtended

A class representing an OpenAI API client but with already prompt-egineered utilities.

## Hierarchy

- [`OpenaiApiClient`](/docs/classes/OpenaiApiClient.md)

  ↳ **`OpenaiApiClientExtended`**

## Table of contents

### Constructors

- [constructor](/docs/classes/OpenaiApiClientExtended.md#constructor)

### Properties

- [apiDefaults](/docs/classes/OpenaiApiClientExtended.md#apidefaults)
- [cache](/docs/classes/OpenaiApiClientExtended.md#cache)
- [cacheDefaults](/docs/classes/OpenaiApiClientExtended.md#cachedefaults)
- [client](/docs/classes/OpenaiApiClientExtended.md#client)
- [concurrencyJustReduced](/docs/classes/OpenaiApiClientExtended.md#concurrencyjustreduced)
- [events](/docs/classes/OpenaiApiClientExtended.md#events)
- [queue](/docs/classes/OpenaiApiClientExtended.md#queue)
- [retryDefaults](/docs/classes/OpenaiApiClientExtended.md#retrydefaults)
- [sendRequest](/docs/classes/OpenaiApiClientExtended.md#sendrequest)
- [concurrencyDefaults](/docs/classes/OpenaiApiClientExtended.md#concurrencydefaults)

### Methods

- [\_chat](/docs/classes/OpenaiApiClientExtended.md#_chat)
- [\_completion](/docs/classes/OpenaiApiClientExtended.md#_completion)
- [\_transcribe](/docs/classes/OpenaiApiClientExtended.md#_transcribe)
- [assertReponseDataComplete](/docs/classes/OpenaiApiClientExtended.md#assertreponsedatacomplete)
- [completion](/docs/classes/OpenaiApiClientExtended.md#completion)
- [countTokens](/docs/classes/OpenaiApiClientExtended.md#counttokens)
- [deleteDefaultOrUndefinedOptions](/docs/classes/OpenaiApiClientExtended.md#deletedefaultorundefinedoptions)
- [emit](/docs/classes/OpenaiApiClientExtended.md#emit)
- [gpt3\_16k](/docs/classes/OpenaiApiClientExtended.md#gpt3_16k)
- [gpt3\_8k](/docs/classes/OpenaiApiClientExtended.md#gpt3_8k)
- [gpt4\_8k](/docs/classes/OpenaiApiClientExtended.md#gpt4_8k)
- [handleApiError](/docs/classes/OpenaiApiClientExtended.md#handleapierror)
- [handleCacheOptions](/docs/classes/OpenaiApiClientExtended.md#handlecacheoptions)
- [handleChatOptions](/docs/classes/OpenaiApiClientExtended.md#handlechatoptions)
- [handleCompletionOptions](/docs/classes/OpenaiApiClientExtended.md#handlecompletionoptions)
- [handleOptions](/docs/classes/OpenaiApiClientExtended.md#handleoptions)
- [handleRetryOptions](/docs/classes/OpenaiApiClientExtended.md#handleretryoptions)
- [handleTranscribeOptions](/docs/classes/OpenaiApiClientExtended.md#handletranscribeoptions)
- [logAllEvents](/docs/classes/OpenaiApiClientExtended.md#logallevents)
- [logWarnErrorEvents](/docs/classes/OpenaiApiClientExtended.md#logwarnerrorevents)
- [lowerConcurrency](/docs/classes/OpenaiApiClientExtended.md#lowerconcurrency)
- [parseChoices](/docs/classes/OpenaiApiClientExtended.md#parsechoices)
- [proofread](/docs/classes/OpenaiApiClientExtended.md#proofread)
- [proofreadEnglish](/docs/classes/OpenaiApiClientExtended.md#proofreadenglish)
- [stringTokens](/docs/classes/OpenaiApiClientExtended.md#stringtokens)
- [transcribe](/docs/classes/OpenaiApiClientExtended.md#transcribe)
- [translateEnglishTo](/docs/classes/OpenaiApiClientExtended.md#translateenglishto)
- [translateFromTo](/docs/classes/OpenaiApiClientExtended.md#translatefromto)

## Constructors

### constructor

• **new OpenaiApiClientExtended**(`options?`)

Create a new OpenAiApiClient instance.

**`Example`**

```ts
const openai = new OpenaiAPIClient({ apiKey: "API_KEY" })
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IOpenaiApiClientOptions`](/docs/interfaces/IOpenaiApiClientOptions.md) |

#### Overrides

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[constructor](/docs/classes/OpenaiApiClient.md#constructor)

#### Defined in

src/api/openai/OpenaiApiClientExtended.ts:17

## Properties

### apiDefaults

• `Readonly` **apiDefaults**: [`IOpenaiApiClientApiDefaultsOptions`](/docs/interfaces/IOpenaiApiClientApiDefaultsOptions.md)

Defaults for API requests. Can be overriden in individual method calls.

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[apiDefaults](/docs/classes/OpenaiApiClient.md#apidefaults)

#### Defined in

src/api/openai/OpenaiApiClient.ts:31

___

### cache

• `Optional` `Readonly` **cache**: [`ApiReponseCache`](/docs/classes/ApiReponseCache.md)<`any`\>

API response cache

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[cache](/docs/classes/OpenaiApiClient.md#cache)

#### Defined in

src/api/AbstractApiClient.ts:31

___

### cacheDefaults

• `Readonly` **cacheDefaults**: [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)

Default options for caching for api requests.
Can be overriden in individual method calls.

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[cacheDefaults](/docs/classes/OpenaiApiClient.md#cachedefaults)

#### Defined in

src/api/AbstractApiClient.ts:53

___

### client

• `Readonly` **client**: `OpenAIApi`

API client instance

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[client](/docs/classes/OpenaiApiClient.md#client)

#### Defined in

src/api/openai/OpenaiApiClient.ts:26

___

### concurrencyJustReduced

• `Protected` **concurrencyJustReduced**: `boolean` = `false`

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[concurrencyJustReduced](/docs/classes/OpenaiApiClient.md#concurrencyjustreduced)

#### Defined in

src/api/openai/OpenaiApiClient.ts:39

___

### events

• `Readonly` **events**: `EventEmitter`

Event emitter for cache events

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[events](/docs/classes/OpenaiApiClient.md#events)

#### Defined in

src/api/AbstractApiClient.ts:26

___

### queue

• `Readonly` **queue**: [`PromiseQueue`](/docs/classes/PromiseQueue.md)<[`IQueue`](/docs/interfaces/IQueue.md)<[`RunFunction`](/docs/index.md#runfunction), [`IQueueAddOptions`](/docs/interfaces/IQueueAddOptions.md)\>, [`IQueueAddOptions`](/docs/interfaces/IQueueAddOptions.md)\>

Global queue for sending requests to the openai api.

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[queue](/docs/classes/OpenaiApiClient.md#queue)

#### Defined in

src/api/AbstractApiClient.ts:36

___

### retryDefaults

• `Readonly` **retryDefaults**: [`IAsyncRetryOptions`](/docs/interfaces/IAsyncRetryOptions.md)

Default options for async retry for api requests.
Can be overriden in individual method calls.

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[retryDefaults](/docs/classes/OpenaiApiClient.md#retrydefaults)

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

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[sendRequest](/docs/classes/OpenaiApiClient.md#sendrequest)

#### Defined in

src/api/AbstractApiClient.ts:83

___

### concurrencyDefaults

▪ `Static` `Readonly` **concurrencyDefaults**: [`IPromiseQueueOptions`](/docs/interfaces/IPromiseQueueOptions.md)<[`IQueue`](/docs/interfaces/IQueue.md)<[`RunFunction`](/docs/index.md#runfunction), [`IQueueAddOptions`](/docs/interfaces/IQueueAddOptions.md)\>, [`IQueueAddOptions`](/docs/interfaces/IQueueAddOptions.md)\>

Options for concurrency control. These affect all API requests.

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[concurrencyDefaults](/docs/classes/OpenaiApiClient.md#concurrencydefaults)

#### Defined in

src/api/AbstractApiClient.ts:60

## Methods

### \_chat

▸ `Protected` **_chat**(`request`, `retry`, `cache`): `Promise`<`string`\>

Send chat request to the openai API.
This is used by all the preset methods, the public methods: chat3_8, chat3_16, and chat4_8.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | `CreateChatCompletionRequest` | The request object to send to the openai api. |
| `retry` | [`IAsyncRetryOptions`](/docs/interfaces/IAsyncRetryOptions.md) | The retry options. |
| `cache` | [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md) | The cache options. |

#### Returns

`Promise`<`string`\>

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[_chat](/docs/classes/OpenaiApiClient.md#_chat)

#### Defined in

src/api/openai/OpenaiApiClient.ts:190

___

### \_completion

▸ `Protected` **_completion**(`request`, `retry`, `cache`): `Promise`<`string`\>

Send completion request to the openai API.
This is used by all the preset methods, the public methods: completion.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | `CreateCompletionRequest` | The request object to send to the openai api. |
| `retry` | [`IAsyncRetryOptions`](/docs/interfaces/IAsyncRetryOptions.md) | The retry options. |
| `cache` | [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md) | The cache options. |

#### Returns

`Promise`<`string`\>

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[_completion](/docs/classes/OpenaiApiClient.md#_completion)

#### Defined in

src/api/openai/OpenaiApiClient.ts:166

___

### \_transcribe

▸ `Protected` **_transcribe**(`request`, `retry`, `cache`): `Promise`<`string`\>

Send transcribe (speech to text) request to the openai API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | [`IOpenaiTranscribeRequest`](/docs/interfaces/IOpenaiTranscribeRequest.md) | The request object to send to the openai api. |
| `retry` | [`IAsyncRetryOptions`](/docs/interfaces/IAsyncRetryOptions.md) | The retry options. |
| `cache` | [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md) | The cache options. |

#### Returns

`Promise`<`string`\>

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[_transcribe](/docs/classes/OpenaiApiClient.md#_transcribe)

#### Defined in

src/api/openai/OpenaiApiClient.ts:219

___

### assertReponseDataComplete

▸ `Protected` **assertReponseDataComplete**(`data`): `void`

Assert that the response data is complete by verifying that all returned choices have finish_reason: stop.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `CreateChatCompletionResponse` \| `CreateCompletionResponse` |

#### Returns

`void`

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[assertReponseDataComplete](/docs/classes/OpenaiApiClient.md#assertreponsedatacomplete)

#### Defined in

src/api/openai/OpenaiApiClient.ts:331

___

### completion

▸ **completion**(`options`): `Promise`<`string`\>

Send a completion request to the openai api.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IOpenaiCompletionRequestOptions`](/docs/interfaces/IOpenaiCompletionRequestOptions.md) | The options to use. |

#### Returns

`Promise`<`string`\>

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[completion](/docs/classes/OpenaiApiClient.md#completion)

#### Defined in

src/api/openai/OpenaiApiClient.ts:55

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

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[countTokens](/docs/classes/OpenaiApiClient.md#counttokens)

#### Defined in

src/api/openai/OpenaiApiClient.ts:353

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

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[deleteDefaultOrUndefinedOptions](/docs/classes/OpenaiApiClient.md#deletedefaultorundefinedoptions)

#### Defined in

src/api/openai/OpenaiApiClient.ts:307

___

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

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[emit](/docs/classes/OpenaiApiClient.md#emit)

#### Defined in

src/api/AbstractApiClient.ts:183

___

### gpt3\_16k

▸ **gpt3_16k**(`options`): `Promise`<`string`\>

Send a chat completion request to the openai api with a max_tokens cap of 16384.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IOpenaiChatRequestOptions`](/docs/interfaces/IOpenaiChatRequestOptions.md) | The options to use. |

#### Returns

`Promise`<`string`\>

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[gpt3_16k](/docs/classes/OpenaiApiClient.md#gpt3_16k)

#### Defined in

src/api/openai/OpenaiApiClient.ts:71

___

### gpt3\_8k

▸ **gpt3_8k**(`options`): `Promise`<`string`\>

Send a chat completion request to the openai api with a max_tokens cap of 4096.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IOpenaiChatRequestOptions`](/docs/interfaces/IOpenaiChatRequestOptions.md) | The options to use. |

#### Returns

`Promise`<`string`\>

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[gpt3_8k](/docs/classes/OpenaiApiClient.md#gpt3_8k)

#### Defined in

src/api/openai/OpenaiApiClient.ts:63

___

### gpt4\_8k

▸ **gpt4_8k**(`options`): `Promise`<`string`\>

Send a gpt4 chat completion request to the openai api with a max_tokens cap of 8k.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IOpenaiChatRequestOptions`](/docs/interfaces/IOpenaiChatRequestOptions.md) | The options to use. |

#### Returns

`Promise`<`string`\>

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[gpt4_8k](/docs/classes/OpenaiApiClient.md#gpt4_8k)

#### Defined in

src/api/openai/OpenaiApiClient.ts:80

___

### handleApiError

▸ `Protected` **handleApiError**(`error`): `void`

Parses API error codes.
When the error is a rate limit error, lowers the concurrency.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `any` | The error to parse. |

#### Returns

`void`

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[handleApiError](/docs/classes/OpenaiApiClient.md#handleapierror)

#### Defined in

src/api/openai/OpenaiApiClient.ts:252

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

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[handleCacheOptions](/docs/classes/OpenaiApiClient.md#handlecacheoptions)

#### Defined in

src/api/AbstractApiClient.ts:174

___

### handleChatOptions

▸ `Protected` **handleChatOptions**(`options`): [`CreateChatCompletionRequest`, [`IAsyncRetryOptions`](/docs/interfaces/IAsyncRetryOptions.md), [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)]

Handle chat options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IOpenaiChatRequestOptions`](/docs/interfaces/IOpenaiChatRequestOptions.md) | The options to handle. |

#### Returns

[`CreateChatCompletionRequest`, [`IAsyncRetryOptions`](/docs/interfaces/IAsyncRetryOptions.md), [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)]

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[handleChatOptions](/docs/classes/OpenaiApiClient.md#handlechatoptions)

#### Defined in

src/api/openai/OpenaiApiClient.ts:126

___

### handleCompletionOptions

▸ `Protected` **handleCompletionOptions**(`options`): [`CreateCompletionRequest`, [`IAsyncRetryOptions`](/docs/interfaces/IAsyncRetryOptions.md), [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)]

Handle completion options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IOpenaiCompletionRequestOptions`](/docs/interfaces/IOpenaiCompletionRequestOptions.md) | The options to handle. |

#### Returns

[`CreateCompletionRequest`, [`IAsyncRetryOptions`](/docs/interfaces/IAsyncRetryOptions.md), [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)]

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[handleCompletionOptions](/docs/classes/OpenaiApiClient.md#handlecompletionoptions)

#### Defined in

src/api/openai/OpenaiApiClient.ts:97

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

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[handleOptions](/docs/classes/OpenaiApiClient.md#handleoptions)

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

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[handleRetryOptions](/docs/classes/OpenaiApiClient.md#handleretryoptions)

#### Defined in

src/api/AbstractApiClient.ts:166

___

### handleTranscribeOptions

▸ `Protected` **handleTranscribeOptions**(`options`): [[`IOpenaiTranscribeRequest`](/docs/interfaces/IOpenaiTranscribeRequest.md), [`IAsyncRetryOptions`](/docs/interfaces/IAsyncRetryOptions.md), [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)]

Handle transcribe options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IOpenaiTranscribeOptions`](/docs/interfaces/IOpenaiTranscribeOptions.md) | The options to handle. |

#### Returns

[[`IOpenaiTranscribeRequest`](/docs/interfaces/IOpenaiTranscribeRequest.md), [`IAsyncRetryOptions`](/docs/interfaces/IAsyncRetryOptions.md), [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)]

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[handleTranscribeOptions](/docs/classes/OpenaiApiClient.md#handletranscribeoptions)

#### Defined in

src/api/openai/OpenaiApiClient.ts:150

___

### logAllEvents

▸ `Protected` **logAllEvents**(): [`OpenaiApiClientExtended`](/docs/classes/OpenaiApiClientExtended.md)

Output all events to the console.

#### Returns

[`OpenaiApiClientExtended`](/docs/classes/OpenaiApiClientExtended.md)

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[logAllEvents](/docs/classes/OpenaiApiClient.md#logallevents)

#### Defined in

src/api/AbstractApiClient.ts:191

___

### logWarnErrorEvents

▸ `Protected` **logWarnErrorEvents**(): `void`

Output all 'warn' and 'error' events to the console.

#### Returns

`void`

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[logWarnErrorEvents](/docs/classes/OpenaiApiClient.md#logwarnerrorevents)

#### Defined in

src/api/AbstractApiClient.ts:205

___

### lowerConcurrency

▸ `Protected` **lowerConcurrency**(`lowerBy?`, `raiseAgainBy?`, `delay?`): `void`

Lower the concurrency to prevent rate limiting.
Automatically raises the concurrency again after a delay.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `lowerBy` | `number` | `7` | The amount to lower the concurrency by. |
| `raiseAgainBy` | `number` | `6` | The amount to raise the concurrency by after a delay. |
| `delay` | `number` | `undefined` | The delay to wait before raising the concurrency again. This is randomized by +/- 5 seconds to prevent multiple requests from affecting the concurrency at the same time. |

#### Returns

`void`

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[lowerConcurrency](/docs/classes/OpenaiApiClient.md#lowerconcurrency)

#### Defined in

src/api/openai/OpenaiApiClient.ts:269

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

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[parseChoices](/docs/classes/OpenaiApiClient.md#parsechoices)

#### Defined in

src/api/openai/OpenaiApiClient.ts:288

___

### proofread

▸ **proofread**(`language`, `prompt`, `options?`): `Promise`<`string`\>

Proofread in a given language.

**`Example`**

```ts
await openai.proofread('english', 'I no have more money.')
await openai.proofread('java', `System.out.println("Hello")`)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `language` | `string` | The language of the input. |
| `prompt` | `string` | The input string. |
| `options` | [`IOpenaiChatRequestOptions`](/docs/interfaces/IOpenaiChatRequestOptions.md) | - |

#### Returns

`Promise`<`string`\>

#### Defined in

src/api/openai/OpenaiApiClientExtended.ts:30

___

### proofreadEnglish

▸ **proofreadEnglish**(`prompt`, `options?`): `Promise`<`string`\>

Proofread in English.

**`Example`**

```ts
await openai.proofread('english', 'I no have more money.')
await openai.proofread('java', `System.out.println("Hello")`)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prompt` | `string` | The input string. |
| `options` | [`IOpenaiChatRequestOptions`](/docs/interfaces/IOpenaiChatRequestOptions.md) | - |

#### Returns

`Promise`<`string`\>

#### Defined in

src/api/openai/OpenaiApiClientExtended.ts:51

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

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[stringTokens](/docs/classes/OpenaiApiClient.md#stringtokens)

#### Defined in

src/api/openai/OpenaiApiClient.ts:345

___

### transcribe

▸ **transcribe**(`options`): `Promise`<`string`\>

Send a transcribe completion request to the openai api.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IOpenaiTranscribeOptions`](/docs/interfaces/IOpenaiTranscribeOptions.md) | The options to use. |

#### Returns

`Promise`<`string`\>

#### Inherited from

[OpenaiApiClient](/docs/classes/OpenaiApiClient.md).[transcribe](/docs/classes/OpenaiApiClient.md#transcribe)

#### Defined in

src/api/openai/OpenaiApiClient.ts:89

___

### translateEnglishTo

▸ **translateEnglishTo**(`language`, `prompt`, `options?`): `Promise`<`string`\>

Translate text from English to a given language.
For short input text, use options.instruction to provide context.

**`Example`**

```ts
await openai.translateEnglishTo('Spanish', 'Clear', { instruction: 'This is a color.' })
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `language` | `string` |
| `prompt` | `string` |
| `options` | [`IOpenaiChatRequestOptions`](/docs/interfaces/IOpenaiChatRequestOptions.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/api/openai/OpenaiApiClientExtended.ts:86

___

### translateFromTo

▸ **translateFromTo**(`fromLanguage`, `toLanguage`, `prompt`, `options?`): `Promise`<`string`\>

Translate text from one language to another.
For short input text, use options.instruction to provide context.

**`Example`**

```ts
await openai.translateFrom('English', 'Spanish', 'Clear', { instruction: 'This is a color.' })
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fromLanguage` | `string` | - |
| `toLanguage` | `string` | - |
| `prompt` | `string` | The text to translate. |
| `options` | [`IOpenaiChatRequestOptions`](/docs/interfaces/IOpenaiChatRequestOptions.md) | - |

#### Returns

`Promise`<`string`\>

#### Defined in

src/api/openai/OpenaiApiClientExtended.ts:63
