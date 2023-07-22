[@bemoje/node-util](/docs/index.md) / IApiClientApiDefaultsOptions

# Interface: IApiClientApiDefaultsOptions

## Table of contents

### Properties

- [chat3\_16Model](/docs/interfaces/IApiClientApiDefaultsOptions.md#chat3_16model)
- [chat3\_8Model](/docs/interfaces/IApiClientApiDefaultsOptions.md#chat3_8model)
- [chat4\_8Model](/docs/interfaces/IApiClientApiDefaultsOptions.md#chat4_8model)
- [choicesDelimiter](/docs/interfaces/IApiClientApiDefaultsOptions.md#choicesdelimiter)
- [completionModel](/docs/interfaces/IApiClientApiDefaultsOptions.md#completionmodel)
- [editCodeModel](/docs/interfaces/IApiClientApiDefaultsOptions.md#editcodemodel)
- [editTextModel](/docs/interfaces/IApiClientApiDefaultsOptions.md#edittextmodel)

## Properties

### chat3\_16Model

• `Optional` **chat3\_16Model**: `string`

Default model to use for chat gpt3 16k tokens completion requests

#### Defined in

[src/api/types/IApiClientApiDefaultsOptions.ts:15](https://github.com/bemoje/bemoje-node-util/blob/ca2fc78/src/api/types/IApiClientApiDefaultsOptions.ts#L15)

___

### chat3\_8Model

• `Optional` **chat3\_8Model**: `string`

Default model to use for chat gpt3 8k tokens completion requests

#### Defined in

[src/api/types/IApiClientApiDefaultsOptions.ts:10](https://github.com/bemoje/bemoje-node-util/blob/ca2fc78/src/api/types/IApiClientApiDefaultsOptions.ts#L10)

___

### chat4\_8Model

• `Optional` **chat4\_8Model**: `string`

Default model to use for chat gpt4 8k tokens completion requests

#### Defined in

[src/api/types/IApiClientApiDefaultsOptions.ts:20](https://github.com/bemoje/bemoje-node-util/blob/ca2fc78/src/api/types/IApiClientApiDefaultsOptions.ts#L20)

___

### choicesDelimiter

• `Optional` **choicesDelimiter**: `string`

If openai api returns more than one choice, this string will be used to delimit them.

#### Defined in

[src/api/types/IApiClientApiDefaultsOptions.ts:35](https://github.com/bemoje/bemoje-node-util/blob/ca2fc78/src/api/types/IApiClientApiDefaultsOptions.ts#L35)

___

### completionModel

• `Optional` **completionModel**: `string`

Default model to use for completion requests

#### Defined in

[src/api/types/IApiClientApiDefaultsOptions.ts:5](https://github.com/bemoje/bemoje-node-util/blob/ca2fc78/src/api/types/IApiClientApiDefaultsOptions.ts#L5)

___

### editCodeModel

• `Optional` **editCodeModel**: `string`

Default model to use for code edit requests

#### Defined in

[src/api/types/IApiClientApiDefaultsOptions.ts:30](https://github.com/bemoje/bemoje-node-util/blob/ca2fc78/src/api/types/IApiClientApiDefaultsOptions.ts#L30)

___

### editTextModel

• `Optional` **editTextModel**: `string`

Default model to use for text edit requests

#### Defined in

[src/api/types/IApiClientApiDefaultsOptions.ts:25](https://github.com/bemoje/bemoje-node-util/blob/ca2fc78/src/api/types/IApiClientApiDefaultsOptions.ts#L25)
