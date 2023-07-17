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

[src/api/OpenaiApiClientBase.ts:76](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L76)

## Properties

### apiDefaults

• `Readonly` **apiDefaults**: [`IApiClientApiDefaultsOptions`](/docs/interfaces/IApiClientApiDefaultsOptions.md)

#### Defined in

[src/api/OpenaiApiClientBase.ts:39](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L39)

___

### cache

• `Readonly` **cache**: [`ApiReponseCache`](/docs/classes/ApiReponseCache.md)<`string`[]\>

#### Defined in

[src/api/OpenaiApiClientBase.ts:33](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L33)

___

### cacheDefaults

• `Readonly` **cacheDefaults**: [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)

#### Defined in

[src/api/OpenaiApiClientBase.ts:56](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L56)

___

### client

• `Readonly` **client**: `OpenAIApi`

#### Defined in

[src/api/OpenaiApiClientBase.ts:27](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L27)

___

### events

• `Readonly` **events**: `EventEmitter`

#### Defined in

[src/api/OpenaiApiClientBase.ts:30](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L30)

___

### retryDefaults

• `Readonly` **retryDefaults**: `Options`

#### Defined in

[src/api/OpenaiApiClientBase.ts:50](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L50)

___

### usage

• `Readonly` **usage**: [`OpenaiTokenUsage`](/docs/classes/OpenaiTokenUsage.md)

#### Defined in

[src/api/OpenaiApiClientBase.ts:36](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L36)

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

[src/api/OpenaiApiClientBase.ts:274](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L274)

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

[src/api/OpenaiApiClientBase.ts:244](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L244)

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

[src/api/OpenaiApiClientBase.ts:231](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L231)

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

[src/api/OpenaiApiClientBase.ts:257](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L257)

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

[src/api/OpenaiApiClientBase.ts:329](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L329)

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

[src/api/OpenaiApiClientBase.ts:103](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L103)

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

[src/api/OpenaiApiClientBase.ts:95](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L95)

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

[src/api/OpenaiApiClientBase.ts:112](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L112)

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

[src/api/OpenaiApiClientBase.ts:87](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L87)

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

[src/api/OpenaiApiClientBase.ts:142](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L142)

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

[src/api/OpenaiApiClientBase.ts:305](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L305)

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

[src/api/OpenaiApiClientBase.ts:127](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L127)

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

[src/api/OpenaiApiClientBase.ts:120](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L120)

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

[src/api/OpenaiApiClientBase.ts:354](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L354)

___

### getDefaultApiKey

▸ `Protected` **getDefaultApiKey**(): `string`

#### Returns

`string`

#### Defined in

[src/api/OpenaiApiClientBase.ts:342](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L342)

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

[src/api/OpenaiApiClientBase.ts:227](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L227)

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

[src/api/OpenaiApiClientBase.ts:177](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L177)

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

[src/api/OpenaiApiClientBase.ts:146](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L146)

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

[src/api/OpenaiApiClientBase.ts:197](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L197)

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

[src/api/OpenaiApiClientBase.ts:60](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L60)

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

[src/api/OpenaiApiClientBase.ts:216](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L216)

___

### logAllEvents

▸ `Protected` **logAllEvents**(): [`OpenaiApiClientBase`](/docs/classes/OpenaiApiClientBase.md)

console.log all emitted events

#### Returns

[`OpenaiApiClientBase`](/docs/classes/OpenaiApiClientBase.md)

this (chainable)

#### Defined in

[src/api/OpenaiApiClientBase.ts:363](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L363)

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

[src/api/OpenaiApiClientBase.ts:291](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L291)

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

[src/api/OpenaiApiClientBase.ts:135](https://github.com/bemoje/bemoje-node-util/blob/6c46bb4/src/api/OpenaiApiClientBase.ts#L135)
