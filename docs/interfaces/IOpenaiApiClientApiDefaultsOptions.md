[@bemoje/node-util](/docs/index.md) / IOpenaiApiClientApiDefaultsOptions

# Interface: IOpenaiApiClientApiDefaultsOptions

## Table of contents

### Properties

- [chat3\_16Model](/docs/interfaces/IOpenaiApiClientApiDefaultsOptions.md#chat3_16model)
- [chat3\_8Model](/docs/interfaces/IOpenaiApiClientApiDefaultsOptions.md#chat3_8model)
- [chat4\_8Model](/docs/interfaces/IOpenaiApiClientApiDefaultsOptions.md#chat4_8model)
- [choicesDelimiter](/docs/interfaces/IOpenaiApiClientApiDefaultsOptions.md#choicesdelimiter)
- [completionModel](/docs/interfaces/IOpenaiApiClientApiDefaultsOptions.md#completionmodel)

## Properties

### chat3\_16Model

• `Optional` **chat3\_16Model**: `string`

Default model to use for chat gpt3 16k tokens completion requests

#### Defined in

src/api/openai/types/IOpenaiApiClientApiDefaultsOptions.ts:15

___

### chat3\_8Model

• `Optional` **chat3\_8Model**: `string`

Default model to use for chat gpt3 8k tokens completion requests

#### Defined in

src/api/openai/types/IOpenaiApiClientApiDefaultsOptions.ts:10

___

### chat4\_8Model

• `Optional` **chat4\_8Model**: `string`

Default model to use for chat gpt4 8k tokens completion requests

#### Defined in

src/api/openai/types/IOpenaiApiClientApiDefaultsOptions.ts:20

___

### choicesDelimiter

• `Optional` **choicesDelimiter**: `string`

If openai api returns more than one choice, this string will be used to delimit them.

#### Defined in

src/api/openai/types/IOpenaiApiClientApiDefaultsOptions.ts:25

___

### completionModel

• `Optional` **completionModel**: `string`

Default model to use for completion requests

#### Defined in

src/api/openai/types/IOpenaiApiClientApiDefaultsOptions.ts:5