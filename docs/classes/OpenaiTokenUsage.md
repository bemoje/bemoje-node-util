[@bemoje/node-util](/docs/index.md) / OpenaiTokenUsage

# Class: OpenaiTokenUsage

For monitoring openai api token usage.

## Table of contents

### Constructors

- [constructor](/docs/classes/OpenaiTokenUsage.md#constructor)

### Properties

- [events](/docs/classes/OpenaiTokenUsage.md#events)
- [total](/docs/classes/OpenaiTokenUsage.md#total)
- [usage](/docs/classes/OpenaiTokenUsage.md#usage)
- [prices](/docs/classes/OpenaiTokenUsage.md#prices)

### Methods

- [submit](/docs/classes/OpenaiTokenUsage.md#submit)

## Constructors

### constructor

• **new OpenaiTokenUsage**()

## Properties

### events

• `Readonly` **events**: `EventEmitter`

#### Defined in

src/api/OpenaiTokenUsage.ts:22

___

### total

• `Readonly` **total**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `total_USD` | `number` |
| `total_tokens` | `number` |

#### Defined in

src/api/OpenaiTokenUsage.ts:32

___

### usage

• `Readonly` **usage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chat` | { `in`: { `USD`: `number` = 0; `tokens`: `number` = 0 } ; `out`: { `USD`: `number` = 0; `tokens`: `number` = 0 }  } |
| `chat.in` | { `USD`: `number` = 0; `tokens`: `number` = 0 } |
| `chat.in.USD` | `number` |
| `chat.in.tokens` | `number` |
| `chat.out` | { `USD`: `number` = 0; `tokens`: `number` = 0 } |
| `chat.out.USD` | `number` |
| `chat.out.tokens` | `number` |
| `chat16k` | { `in`: { `USD`: `number` = 0; `tokens`: `number` = 0 } ; `out`: { `USD`: `number` = 0; `tokens`: `number` = 0 }  } |
| `chat16k.in` | { `USD`: `number` = 0; `tokens`: `number` = 0 } |
| `chat16k.in.USD` | `number` |
| `chat16k.in.tokens` | `number` |
| `chat16k.out` | { `USD`: `number` = 0; `tokens`: `number` = 0 } |
| `chat16k.out.USD` | `number` |
| `chat16k.out.tokens` | `number` |
| `completion` | { `in`: { `USD`: `number` = 0; `tokens`: `number` = 0 } ; `out`: { `USD`: `number` = 0; `tokens`: `number` = 0 }  } |
| `completion.in` | { `USD`: `number` = 0; `tokens`: `number` = 0 } |
| `completion.in.USD` | `number` |
| `completion.in.tokens` | `number` |
| `completion.out` | { `USD`: `number` = 0; `tokens`: `number` = 0 } |
| `completion.out.USD` | `number` |
| `completion.out.tokens` | `number` |
| `editCode` | { `in`: { `USD`: `number` = 0; `tokens`: `number` = 0 } ; `out`: { `USD`: `number` = 0; `tokens`: `number` = 0 }  } |
| `editCode.in` | { `USD`: `number` = 0; `tokens`: `number` = 0 } |
| `editCode.in.USD` | `number` |
| `editCode.in.tokens` | `number` |
| `editCode.out` | { `USD`: `number` = 0; `tokens`: `number` = 0 } |
| `editCode.out.USD` | `number` |
| `editCode.out.tokens` | `number` |
| `editText` | { `in`: { `USD`: `number` = 0; `tokens`: `number` = 0 } ; `out`: { `USD`: `number` = 0; `tokens`: `number` = 0 }  } |
| `editText.in` | { `USD`: `number` = 0; `tokens`: `number` = 0 } |
| `editText.in.USD` | `number` |
| `editText.in.tokens` | `number` |
| `editText.out` | { `USD`: `number` = 0; `tokens`: `number` = 0 } |
| `editText.out.USD` | `number` |
| `editText.out.tokens` | `number` |

#### Defined in

src/api/OpenaiTokenUsage.ts:24

___

### prices

▪ `Static` `Readonly` **prices**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chat` | { `in`: `number` = 0.0000015; `out`: `number` = 0.000002 } |
| `chat.in` | `number` |
| `chat.out` | `number` |
| `chat16k` | { `in`: `number` = 0.000003; `out`: `number` = 0.000004 } |
| `chat16k.in` | `number` |
| `chat16k.out` | `number` |
| `completion` | { `in`: `number` = 0.00002; `out`: `number` = 0.00002 } |
| `completion.in` | `number` |
| `completion.out` | `number` |
| `editCode` | { `in`: `number` = 0; `out`: `number` = 0 } |
| `editCode.in` | `number` |
| `editCode.out` | `number` |
| `editText` | { `in`: `number` = 0; `out`: `number` = 0 } |
| `editText.in` | `number` |
| `editText.out` | `number` |

#### Defined in

src/api/OpenaiTokenUsage.ts:14

## Methods

### submit

▸ **submit**(`endpoint`, `data`): `void`

Submit usage data from an openai api response.

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | ``"completion"`` \| ``"chat"`` \| ``"chat16k"`` \| ``"editText"`` \| ``"editCode"`` |
| `data` | `CreateChatCompletionResponse` \| `CreateCompletionResponse` \| `CreateEditResponse` |

#### Returns

`void`

#### Defined in

src/api/OpenaiTokenUsage.ts:37
