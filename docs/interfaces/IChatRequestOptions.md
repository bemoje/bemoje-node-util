[@bemoje/node-util](/docs/index.md) / IChatRequestOptions

# Interface: IChatRequestOptions

## Hierarchy

- `Omit`<`CreateChatCompletionRequest`, ``"model"`` \| ``"messages"``\>

  ↳ **`IChatRequestOptions`**

## Table of contents

### Properties

- [cache](/docs/interfaces/IChatRequestOptions.md#cache)
- [frequency\_penalty](/docs/interfaces/IChatRequestOptions.md#frequency_penalty)
- [function\_call](/docs/interfaces/IChatRequestOptions.md#function_call)
- [functions](/docs/interfaces/IChatRequestOptions.md#functions)
- [instruction](/docs/interfaces/IChatRequestOptions.md#instruction)
- [logit\_bias](/docs/interfaces/IChatRequestOptions.md#logit_bias)
- [max\_tokens](/docs/interfaces/IChatRequestOptions.md#max_tokens)
- [messages](/docs/interfaces/IChatRequestOptions.md#messages)
- [model](/docs/interfaces/IChatRequestOptions.md#model)
- [n](/docs/interfaces/IChatRequestOptions.md#n)
- [presence\_penalty](/docs/interfaces/IChatRequestOptions.md#presence_penalty)
- [prompt](/docs/interfaces/IChatRequestOptions.md#prompt)
- [retry](/docs/interfaces/IChatRequestOptions.md#retry)
- [stop](/docs/interfaces/IChatRequestOptions.md#stop)
- [stream](/docs/interfaces/IChatRequestOptions.md#stream)
- [temperature](/docs/interfaces/IChatRequestOptions.md#temperature)
- [top\_p](/docs/interfaces/IChatRequestOptions.md#top_p)
- [user](/docs/interfaces/IChatRequestOptions.md#user)

## Properties

### cache

• `Optional` **cache**: [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)

Cache options

#### Defined in

[src/api/types/IChatRequestOptions.ts:34](https://github.com/bemoje/bemoje-node-util/blob/3683199/src/api/types/IChatRequestOptions.ts#L34)

___

### frequency\_penalty

• `Optional` **frequency\_penalty**: ``null`` \| `number`

Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model\'s likelihood to repeat the same line verbatim.  [See more information about frequency and presence penalties.](/docs/api-reference/parameter-details)

**`Memberof`**

CreateChatCompletionRequest

#### Inherited from

Omit.frequency\_penalty

#### Defined in

node_modules/openai/dist/api.d.ts:392

___

### function\_call

• `Optional` **function\_call**: `CreateChatCompletionRequestFunctionCall`

**`Memberof`**

CreateChatCompletionRequest

#### Inherited from

Omit.function\_call

#### Defined in

node_modules/openai/dist/api.d.ts:344

___

### functions

• `Optional` **functions**: `ChatCompletionFunctions`[]

A list of functions the model may generate JSON inputs for.

**`Memberof`**

CreateChatCompletionRequest

#### Inherited from

Omit.functions

#### Defined in

node_modules/openai/dist/api.d.ts:338

___

### instruction

• `Optional` **instruction**: `string`

System instructions message inserted before all user and assistant messages

#### Defined in

[src/api/types/IChatRequestOptions.ts:24](https://github.com/bemoje/bemoje-node-util/blob/3683199/src/api/types/IChatRequestOptions.ts#L24)

___

### logit\_bias

• `Optional` **logit\_bias**: ``null`` \| `object`

Modify the likelihood of specified tokens appearing in the completion.  Accepts a json object that maps tokens (specified by their token ID in the tokenizer) to an associated bias value from -100 to 100. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.

**`Memberof`**

CreateChatCompletionRequest

#### Inherited from

Omit.logit\_bias

#### Defined in

node_modules/openai/dist/api.d.ts:398

___

### max\_tokens

• `Optional` **max\_tokens**: `number`

The maximum number of [tokens](/tokenizer) to generate in the chat completion.  The total length of input tokens and generated tokens is limited by the model\'s context length. [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb) for counting tokens.

**`Memberof`**

CreateChatCompletionRequest

#### Inherited from

Omit.max\_tokens

#### Defined in

node_modules/openai/dist/api.d.ts:380

___

### messages

• `Optional` **messages**: `ChatCompletionRequestMessage`[]

Message history

#### Defined in

[src/api/types/IChatRequestOptions.ts:14](https://github.com/bemoje/bemoje-node-util/blob/3683199/src/api/types/IChatRequestOptions.ts#L14)

___

### model

• `Optional` **model**: `string`

The model to use if not the defeault one.

#### Defined in

[src/api/types/IChatRequestOptions.ts:9](https://github.com/bemoje/bemoje-node-util/blob/3683199/src/api/types/IChatRequestOptions.ts#L9)

___

### n

• `Optional` **n**: ``null`` \| `number`

How many chat completion choices to generate for each input message.

**`Memberof`**

CreateChatCompletionRequest

#### Inherited from

Omit.n

#### Defined in

node_modules/openai/dist/api.d.ts:362

___

### presence\_penalty

• `Optional` **presence\_penalty**: ``null`` \| `number`

Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model\'s likelihood to talk about new topics.  [See more information about frequency and presence penalties.](/docs/api-reference/parameter-details)

**`Memberof`**

CreateChatCompletionRequest

#### Inherited from

Omit.presence\_penalty

#### Defined in

node_modules/openai/dist/api.d.ts:386

___

### prompt

• `Optional` **prompt**: `string`

A user message inserted before all other messages, except the system instructions message if provided

#### Defined in

[src/api/types/IChatRequestOptions.ts:19](https://github.com/bemoje/bemoje-node-util/blob/3683199/src/api/types/IChatRequestOptions.ts#L19)

___

### retry

• `Optional` **retry**: `Options`

API request retry options

#### Defined in

[src/api/types/IChatRequestOptions.ts:29](https://github.com/bemoje/bemoje-node-util/blob/3683199/src/api/types/IChatRequestOptions.ts#L29)

___

### stop

• `Optional` **stop**: `CreateChatCompletionRequestStop`

**`Memberof`**

CreateChatCompletionRequest

#### Inherited from

Omit.stop

#### Defined in

node_modules/openai/dist/api.d.ts:374

___

### stream

• `Optional` **stream**: ``null`` \| `boolean`

If set, partial message deltas will be sent, like in ChatGPT. Tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a `data: [DONE]` message. [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_stream_completions.ipynb).

**`Memberof`**

CreateChatCompletionRequest

#### Inherited from

Omit.stream

#### Defined in

node_modules/openai/dist/api.d.ts:368

___

### temperature

• `Optional` **temperature**: ``null`` \| `number`

What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.  We generally recommend altering this or `top_p` but not both.

**`Memberof`**

CreateChatCompletionRequest

#### Inherited from

Omit.temperature

#### Defined in

node_modules/openai/dist/api.d.ts:350

___

### top\_p

• `Optional` **top\_p**: ``null`` \| `number`

An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.  We generally recommend altering this or `temperature` but not both.

**`Memberof`**

CreateChatCompletionRequest

#### Inherited from

Omit.top\_p

#### Defined in

node_modules/openai/dist/api.d.ts:356

___

### user

• `Optional` **user**: `string`

A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).

**`Memberof`**

CreateChatCompletionRequest

#### Inherited from

Omit.user

#### Defined in

node_modules/openai/dist/api.d.ts:404