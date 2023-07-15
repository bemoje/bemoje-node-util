[@bemoje/node-util](/docs/index.md) / OpenaiApiClientBase

# Class: OpenaiApiClientBase

## Hierarchy

- **`OpenaiApiClientBase`**

  ↳ [`OpenaiApiClient`](/docs/classes/OpenaiApiClient.md)

## Table of contents

### Constructors

- [constructor](/docs/classes/OpenaiApiClientBase.md#constructor)

### Properties

- [apiDefaults](/docs/classes/OpenaiApiClientBase.md#apidefaults)
- [cache](/docs/classes/OpenaiApiClientBase.md#cache)
- [cacheDefaults](/docs/classes/OpenaiApiClientBase.md#cachedefaults)
- [client](/docs/classes/OpenaiApiClientBase.md#client)
- [events](/docs/classes/OpenaiApiClientBase.md#events)
- [retryDefaults](/docs/classes/OpenaiApiClientBase.md#retrydefaults)
- [usage](/docs/classes/OpenaiApiClientBase.md#usage)

### Methods

- [\_apiRequest](/docs/classes/OpenaiApiClientBase.md#_apirequest)
- [\_chat](/docs/classes/OpenaiApiClientBase.md#_chat)
- [\_completion](/docs/classes/OpenaiApiClientBase.md#_completion)
- [\_edit](/docs/classes/OpenaiApiClientBase.md#_edit)
- [assertReponseDataComplete](/docs/classes/OpenaiApiClientBase.md#assertreponsedatacomplete)
- [chat3\_16](/docs/classes/OpenaiApiClientBase.md#chat3_16)
- [chat3\_8](/docs/classes/OpenaiApiClientBase.md#chat3_8)
- [chat4\_8](/docs/classes/OpenaiApiClientBase.md#chat4_8)
- [completion](/docs/classes/OpenaiApiClientBase.md#completion)
- [countTokens](/docs/classes/OpenaiApiClientBase.md#counttokens)
- [deleteDefaultOrUndefined](/docs/classes/OpenaiApiClientBase.md#deletedefaultorundefined)
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

| Name | Type |
| :------ | :------ |
| `options` | [`IApiClientOptions`](/docs/interfaces/IApiClientOptions.md) |

#### Defined in

src/api/OpenaiApiClientBase.ts:86

## Properties

### apiDefaults

• `Readonly` **apiDefaults**: [`IApiClientApiDefaultsOptions`](/docs/interfaces/IApiClientApiDefaultsOptions.md)

#### Defined in

src/api/OpenaiApiClientBase.ts:49

___

### cache

• `Readonly` **cache**: [`ApiReponseCache`](/docs/classes/ApiReponseCache.md)<`string`[]\>

#### Defined in

src/api/OpenaiApiClientBase.ts:43

___

### cacheDefaults

• `Readonly` **cacheDefaults**: [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)

#### Defined in

src/api/OpenaiApiClientBase.ts:66

___

### client

• `Readonly` **client**: `OpenAIApi`

#### Defined in

src/api/OpenaiApiClientBase.ts:37

___

### events

• `Readonly` **events**: `EventEmitter`

#### Defined in

src/api/OpenaiApiClientBase.ts:40

___

### retryDefaults

• `Readonly` **retryDefaults**: `Options`

#### Defined in

src/api/OpenaiApiClientBase.ts:60

___

### usage

• `Readonly` **usage**: [`OpenaiTokenUsage`](/docs/classes/OpenaiTokenUsage.md)

#### Defined in

src/api/OpenaiApiClientBase.ts:46

## Methods

### \_apiRequest

▸ `Protected` **_apiRequest**(`request`, `retry`, `cache`, `apiRequest`): `Promise`<`string`\>

Generic function for sending requests to the openai api.
This is used for all the API endpoints.
It handles retrying, cache, hashing, and emitting events.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `CreateChatCompletionRequest` \| `CreateCompletionRequest` \| `CreateEditRequest` |
| `retry` | `Options` |
| `cache` | [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md) |
| `apiRequest` | () => `Promise`<`string`[]\> |

#### Returns

`Promise`<`string`\>

#### Defined in

src/api/OpenaiApiClientBase.ts:284

___

### \_chat

▸ `Protected` **_chat**(`request`, `retry`, `cache`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `CreateChatCompletionRequest` |
| `retry` | `Options` |
| `cache` | [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/api/OpenaiApiClientBase.ts:254

___

### \_completion

▸ `Protected` **_completion**(`request`, `retry`, `cache`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `CreateCompletionRequest` |
| `retry` | `Options` |
| `cache` | [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/api/OpenaiApiClientBase.ts:241

___

### \_edit

▸ `Protected` **_edit**(`request`, `retry`, `cache`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `CreateEditRequest` |
| `retry` | `Options` |
| `cache` | [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/api/OpenaiApiClientBase.ts:267

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

src/api/OpenaiApiClientBase.ts:334

___

### chat3\_16

▸ **chat3_16**(`options`): `Promise`<`string`\>

Send a chat completion request to the openai api with a max_tokens cap of 16384.
Uses model: 'gpt-3.5-turbo-16k'.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IChatRequestOptions`](/docs/interfaces/IChatRequestOptions.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/api/OpenaiApiClientBase.ts:113

___

### chat3\_8

▸ **chat3_8**(`options`): `Promise`<`string`\>

Send a chat completion request to the openai api with a max_tokens cap of 4096.
Uses model: 'gpt-3.5-turbo'.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IChatRequestOptions`](/docs/interfaces/IChatRequestOptions.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/api/OpenaiApiClientBase.ts:105

___

### chat4\_8

▸ **chat4_8**(`options`): `Promise`<`string`\>

Send a gpt4 chat completion request to the openai api with a max_tokens cap of 8k.
Uses model: 'gpt-4'.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IChatRequestOptions`](/docs/interfaces/IChatRequestOptions.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/api/OpenaiApiClientBase.ts:122

___

### completion

▸ **completion**(`options`): `Promise`<`string`\>

Send a completion request to the openai api.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ICompletionRequestOptions`](/docs/interfaces/ICompletionRequestOptions.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/api/OpenaiApiClientBase.ts:97

___

### countTokens

▸ **countTokens**(`string`): `number`

Count the number of tokens in a string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`number`

#### Defined in

src/api/OpenaiApiClientBase.ts:152

___

### deleteDefaultOrUndefined

▸ `Protected` **deleteDefaultOrUndefined**<`T`\>(`options`, `defaults?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `T` |
| `defaults` | `Record`<`string`, `any`\> |

#### Returns

`T`

#### Defined in

src/api/OpenaiApiClientBase.ts:310

___

### editCode

▸ **editCode**(`options`): `Promise`<`string`\>

Edit code.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IEditRequestOptions`](/docs/interfaces/IEditRequestOptions.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/api/OpenaiApiClientBase.ts:137

___

### editText

▸ **editText**(`options`): `Promise`<`string`\>

Edit text.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IEditRequestOptions`](/docs/interfaces/IEditRequestOptions.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/api/OpenaiApiClientBase.ts:130

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

src/api/OpenaiApiClientBase.ts:356

___

### getDefaultApiKey

▸ `Protected` **getDefaultApiKey**(): `string`

#### Returns

`string`

#### Defined in

src/api/OpenaiApiClientBase.ts:344

___

### handleCacheOptions

▸ `Protected` **handleCacheOptions**(`cacheOptions?`): [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cacheOptions?` | [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md) |

#### Returns

[`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)

#### Defined in

src/api/OpenaiApiClientBase.ts:237

___

### handleChatOptions

▸ `Protected` **handleChatOptions**(`options`): [`CreateChatCompletionRequest`, `Options`, [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IChatRequestOptions`](/docs/interfaces/IChatRequestOptions.md) |

#### Returns

[`CreateChatCompletionRequest`, `Options`, [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)]

#### Defined in

src/api/OpenaiApiClientBase.ts:187

___

### handleCompletionOptions

▸ `Protected` **handleCompletionOptions**(`options`): [`CreateCompletionRequest`, `Options`, [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ICompletionRequestOptions`](/docs/interfaces/ICompletionRequestOptions.md) |

#### Returns

[`CreateCompletionRequest`, `Options`, [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)]

#### Defined in

src/api/OpenaiApiClientBase.ts:156

___

### handleEditOptions

▸ `Protected` **handleEditOptions**(`options`): [`CreateEditRequest`, `Options`, [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IEditRequestOptions`](/docs/interfaces/IEditRequestOptions.md) |

#### Returns

[`CreateEditRequest`, `Options`, [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)]

#### Defined in

src/api/OpenaiApiClientBase.ts:207

___

### handleOptions

▸ `Protected` **handleOptions**(`options`): [`IApiClientOptions`](/docs/interfaces/IApiClientOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IApiClientOptions`](/docs/interfaces/IApiClientOptions.md) |

#### Returns

[`IApiClientOptions`](/docs/interfaces/IApiClientOptions.md)

#### Defined in

src/api/OpenaiApiClientBase.ts:70

___

### handleRetryOptions

▸ `Protected` **handleRetryOptions**(`retryOptions?`): `Options`

#### Parameters

| Name | Type |
| :------ | :------ |
| `retryOptions?` | `Options` |

#### Returns

`Options`

#### Defined in

src/api/OpenaiApiClientBase.ts:226

___

### logAllEvents

▸ `Protected` **logAllEvents**(): [`OpenaiApiClientBase`](/docs/classes/OpenaiApiClientBase.md)

console.log all emitted events

#### Returns

[`OpenaiApiClientBase`](/docs/classes/OpenaiApiClientBase.md)

this (chainable)

#### Defined in

src/api/OpenaiApiClientBase.ts:365

___

### parseChoices

▸ `Protected` **parseChoices**(`choices`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `choices` | `CreateChatCompletionResponseChoicesInner`[] \| `CreateCompletionResponseChoicesInner`[] |

#### Returns

`string`[]

#### Defined in

src/api/OpenaiApiClientBase.ts:298

___

### stringTokens

▸ **stringTokens**(`string`): `number`[]

Encode a string into tokens.

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`number`[]

#### Defined in

src/api/OpenaiApiClientBase.ts:145
