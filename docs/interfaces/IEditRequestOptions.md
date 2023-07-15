[@bemoje/node-util](/docs/index.md) / IEditRequestOptions

# Interface: IEditRequestOptions

## Hierarchy

- `Omit`<`CreateEditRequest`, ``"model"`` \| ``"input"``\>

  ↳ **`IEditRequestOptions`**

## Table of contents

### Properties

- [cache](/docs/interfaces/IEditRequestOptions.md#cache)
- [instruction](/docs/interfaces/IEditRequestOptions.md#instruction)
- [model](/docs/interfaces/IEditRequestOptions.md#model)
- [n](/docs/interfaces/IEditRequestOptions.md#n)
- [prompt](/docs/interfaces/IEditRequestOptions.md#prompt)
- [retry](/docs/interfaces/IEditRequestOptions.md#retry)
- [temperature](/docs/interfaces/IEditRequestOptions.md#temperature)
- [top\_p](/docs/interfaces/IEditRequestOptions.md#top_p)

## Properties

### cache

• `Optional` **cache**: [`IResponseCacheOptions`](/docs/interfaces/IResponseCacheOptions.md)

#### Defined in

src/api/types/IEditRequestOptions.ts:13

___

### instruction

• **instruction**: `string`

The instruction that tells the model how to edit the prompt.

**`Memberof`**

CreateEditRequest

#### Inherited from

Omit.instruction

#### Defined in

node_modules/openai/dist/api.d.ts:926

___

### model

• `Optional` **model**: `string`

#### Defined in

src/api/types/IEditRequestOptions.ts:7

___

### n

• `Optional` **n**: ``null`` \| `number`

How many edits to generate for the input and instruction.

**`Memberof`**

CreateEditRequest

#### Inherited from

Omit.n

#### Defined in

node_modules/openai/dist/api.d.ts:932

___

### prompt

• `Optional` **prompt**: `string`

#### Defined in

src/api/types/IEditRequestOptions.ts:9

___

### retry

• `Optional` **retry**: `Options`

#### Defined in

src/api/types/IEditRequestOptions.ts:11

___

### temperature

• `Optional` **temperature**: ``null`` \| `number`

What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.  We generally recommend altering this or `top_p` but not both.

**`Memberof`**

CreateEditRequest

#### Inherited from

Omit.temperature

#### Defined in

node_modules/openai/dist/api.d.ts:938

___

### top\_p

• `Optional` **top\_p**: ``null`` \| `number`

An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.  We generally recommend altering this or `temperature` but not both.

**`Memberof`**

CreateEditRequest

#### Inherited from

Omit.top\_p

#### Defined in

node_modules/openai/dist/api.d.ts:944
