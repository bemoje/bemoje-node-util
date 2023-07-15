[@bemoje/node-util](/docs/index.md) / OpenaiApiClient

# Class: OpenaiApiClient

## Hierarchy

- [`OpenaiApiClientBase`](/docs/classes/OpenaiApiClientBase.md)

  ↳ **`OpenaiApiClient`**

## Table of contents

### Constructors

- [constructor](/docs/classes/OpenaiApiClient.md#constructor)

### Properties

- [apiDefaults](/docs/classes/OpenaiApiClient.md#apidefaults)
- [cache](/docs/classes/OpenaiApiClient.md#cache)
- [cacheDefaults](/docs/classes/OpenaiApiClient.md#cachedefaults)
- [client](/docs/classes/OpenaiApiClient.md#client)
- [events](/docs/classes/OpenaiApiClient.md#events)
- [retryDefaults](/docs/classes/OpenaiApiClient.md#retrydefaults)
- [usage](/docs/classes/OpenaiApiClient.md#usage)

### Methods

- [\_apiRequest](/docs/classes/OpenaiApiClient.md#_apirequest)
- [\_chat](/docs/classes/OpenaiApiClient.md#_chat)
- [\_completion](/docs/classes/OpenaiApiClient.md#_completion)
- [\_edit](/docs/classes/OpenaiApiClient.md#_edit)
- [assertReponseDataComplete](/docs/classes/OpenaiApiClient.md#assertreponsedatacomplete)
- [chat3\_16](/docs/classes/OpenaiApiClient.md#chat3_16)
- [chat3\_8](/docs/classes/OpenaiApiClient.md#chat3_8)
- [chat4\_8](/docs/classes/OpenaiApiClient.md#chat4_8)
- [completion](/docs/classes/OpenaiApiClient.md#completion)
- [countTokens](/docs/classes/OpenaiApiClient.md#counttokens)
- [deleteDefaultOrUndefined](/docs/classes/OpenaiApiClient.md#deletedefaultorundefined)
- [editCode](/docs/classes/OpenaiApiClient.md#editcode)
- [editText](/docs/classes/OpenaiApiClient.md#edittext)
- [emit](/docs/classes/OpenaiApiClient.md#emit)
- [getDefaultApiKey](/docs/classes/OpenaiApiClient.md#getdefaultapikey)
- [handleCacheOptions](/docs/classes/OpenaiApiClient.md#handlecacheoptions)
- [handleChatOptions](/docs/classes/OpenaiApiClient.md#handlechatoptions)
- [handleCompletionOptions](/docs/classes/OpenaiApiClient.md#handlecompletionoptions)
- [handleEditOptions](/docs/classes/OpenaiApiClient.md#handleeditoptions)
- [handleOptions](/docs/classes/OpenaiApiClient.md#handleoptions)
- [handleRetryOptions](/docs/classes/OpenaiApiClient.md#handleretryoptions)
- [logAllEvents](/docs/classes/OpenaiApiClient.md#logallevents)
- [parseChoices](/docs/classes/OpenaiApiClient.md#parsechoices)
- [proofread](/docs/classes/OpenaiApiClient.md#proofread)
- [proofreadEnglish](/docs/classes/OpenaiApiClient.md#proofreadenglish)
- [stringTokens](/docs/classes/OpenaiApiClient.md#stringtokens)
- [translateEnglishTo](/docs/classes/OpenaiApiClient.md#translateenglishto)
- [translateFrom](/docs/classes/OpenaiApiClient.md#translatefrom)

## Constructors

### constructor

• **new OpenaiApiClient**(`options?`)

Create a new OpenAiApiClient instance.

**`Example`**

```ts
const openai = new OpenaiAPIClient({ apiKey: "API_KEY" })
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IApiClientOptions`](/docs/interfaces/IApiClientOptions.md) |

#### Overrides

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[constructor](/docs/classes/OpenaiApiClientBase.md#constructor)

#### Defined in

src/api/OpenaiApiClient.ts:14

## Properties

### apiDefaults

• `Readonly` **apiDefaults**: [`IApiClientApiDefaultsOptions`](/docs/interfaces/IApiClientApiDefaultsOptions.md)

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[apiDefaults](/docs/classes/OpenaiApiClientBase.md#apidefaults)

#### Defined in

src/api/OpenaiApiClientBase.ts:49

___

### cache

• `Readonly` **cache**: [`ApiReponseCache`](/docs/classes/ApiReponseCache.md)<`string`[]\>

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[cache](/docs/classes/OpenaiApiClientBase.md#cache)

#### Defined in

src/api/OpenaiApiClientBase.ts:43

___

### cacheDefaults

• `Readonly` **cacheDefaults**: [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[cacheDefaults](/docs/classes/OpenaiApiClientBase.md#cachedefaults)

#### Defined in

src/api/OpenaiApiClientBase.ts:66

___

### client

• `Readonly` **client**: `OpenAIApi`

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[client](/docs/classes/OpenaiApiClientBase.md#client)

#### Defined in

src/api/OpenaiApiClientBase.ts:37

___

### events

• `Readonly` **events**: `EventEmitter`

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[events](/docs/classes/OpenaiApiClientBase.md#events)

#### Defined in

src/api/OpenaiApiClientBase.ts:40

___

### retryDefaults

• `Readonly` **retryDefaults**: `Options`

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[retryDefaults](/docs/classes/OpenaiApiClientBase.md#retrydefaults)

#### Defined in

src/api/OpenaiApiClientBase.ts:60

___

### usage

• `Readonly` **usage**: [`OpenaiTokenUsage`](/docs/classes/OpenaiTokenUsage.md)

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[usage](/docs/classes/OpenaiApiClientBase.md#usage)

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

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[_apiRequest](/docs/classes/OpenaiApiClientBase.md#_apirequest)

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

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[_chat](/docs/classes/OpenaiApiClientBase.md#_chat)

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

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[_completion](/docs/classes/OpenaiApiClientBase.md#_completion)

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

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[_edit](/docs/classes/OpenaiApiClientBase.md#_edit)

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

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[assertReponseDataComplete](/docs/classes/OpenaiApiClientBase.md#assertreponsedatacomplete)

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

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[chat3_16](/docs/classes/OpenaiApiClientBase.md#chat3_16)

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

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[chat3_8](/docs/classes/OpenaiApiClientBase.md#chat3_8)

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

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[chat4_8](/docs/classes/OpenaiApiClientBase.md#chat4_8)

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

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[completion](/docs/classes/OpenaiApiClientBase.md#completion)

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

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[countTokens](/docs/classes/OpenaiApiClientBase.md#counttokens)

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

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[deleteDefaultOrUndefined](/docs/classes/OpenaiApiClientBase.md#deletedefaultorundefined)

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

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[editCode](/docs/classes/OpenaiApiClientBase.md#editcode)

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

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[editText](/docs/classes/OpenaiApiClientBase.md#edittext)

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

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[emit](/docs/classes/OpenaiApiClientBase.md#emit)

#### Defined in

src/api/OpenaiApiClientBase.ts:356

___

### getDefaultApiKey

▸ `Protected` **getDefaultApiKey**(): `string`

#### Returns

`string`

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[getDefaultApiKey](/docs/classes/OpenaiApiClientBase.md#getdefaultapikey)

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

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[handleCacheOptions](/docs/classes/OpenaiApiClientBase.md#handlecacheoptions)

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

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[handleChatOptions](/docs/classes/OpenaiApiClientBase.md#handlechatoptions)

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

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[handleCompletionOptions](/docs/classes/OpenaiApiClientBase.md#handlecompletionoptions)

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

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[handleEditOptions](/docs/classes/OpenaiApiClientBase.md#handleeditoptions)

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

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[handleOptions](/docs/classes/OpenaiApiClientBase.md#handleoptions)

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

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[handleRetryOptions](/docs/classes/OpenaiApiClientBase.md#handleretryoptions)

#### Defined in

src/api/OpenaiApiClientBase.ts:226

___

### logAllEvents

▸ `Protected` **logAllEvents**(): [`OpenaiApiClient`](/docs/classes/OpenaiApiClient.md)

console.log all emitted events

#### Returns

[`OpenaiApiClient`](/docs/classes/OpenaiApiClient.md)

this (chainable)

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[logAllEvents](/docs/classes/OpenaiApiClientBase.md#logallevents)

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

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[parseChoices](/docs/classes/OpenaiApiClientBase.md#parsechoices)

#### Defined in

src/api/OpenaiApiClientBase.ts:298

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
| `options` | [`IChatRequestOptions`](/docs/interfaces/IChatRequestOptions.md) | - |

#### Returns

`Promise`<`string`\>

#### Defined in

src/api/OpenaiApiClient.ts:27

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
| `options` | [`IChatRequestOptions`](/docs/interfaces/IChatRequestOptions.md) | - |

#### Returns

`Promise`<`string`\>

#### Defined in

src/api/OpenaiApiClient.ts:50

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

#### Inherited from

[OpenaiApiClientBase](/docs/classes/OpenaiApiClientBase.md).[stringTokens](/docs/classes/OpenaiApiClientBase.md#stringtokens)

#### Defined in

src/api/OpenaiApiClientBase.ts:145

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
| `options` | [`IChatRequestOptions`](/docs/interfaces/IChatRequestOptions.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/api/OpenaiApiClient.ts:92

___

### translateFrom

▸ **translateFrom**(`fromLanguage`, `toLanguage`, `prompt`, `options?`): `Promise`<`string`\>

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
| `options` | [`IChatRequestOptions`](/docs/interfaces/IChatRequestOptions.md) | - |

#### Returns

`Promise`<`string`\>

#### Defined in

src/api/OpenaiApiClient.ts:69
