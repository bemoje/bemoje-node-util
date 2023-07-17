/// <reference types="node" />
import type { Options as AsyncRetryOptions } from 'async-retry';
import EventEmitter from 'events';
import type * as openai from 'openai';
import { OpenAIApi } from 'openai';
import { ApiReponseCache } from './ApiReponseCache';
import { OpenaiTokenUsage } from './OpenaiTokenUsage';
import type { IApiClientApiDefaultsOptions } from './types/IApiClientApiDefaultsOptions';
import type { IApiClientOptions } from './types/IApiClientOptions';
import type { IChatRequestOptions } from './types/IChatRequestOptions';
import type { ICompletionRequestOptions } from './types/ICompletionRequestOptions';
import type { IEditRequestOptions } from './types/IEditRequestOptions';
import type { IResponseCacheOptions } from './types/IResponseCacheOptions';
export declare class OpenaiApiClientBase {
    readonly client: OpenAIApi;
    readonly events: EventEmitter;
    readonly cache: ApiReponseCache<string[]>;
    readonly usage: OpenaiTokenUsage;
    readonly apiDefaults: IApiClientApiDefaultsOptions;
    readonly retryDefaults: AsyncRetryOptions;
    readonly cacheDefaults: IResponseCacheOptions;
    protected handleOptions(options: IApiClientOptions): IApiClientOptions;
    /**
     * Create a new OpenaiApiClient instance.
     */
    constructor(options?: IApiClientOptions);
    /**
     * Send a completion request to the openai api.
     */
    completion(options: ICompletionRequestOptions): Promise<string>;
    /**
     * Send a chat completion request to the openai api with a max_tokens cap of 4096.
     * Uses model: 'gpt-3.5-turbo'.
     */
    chat3_8(options: IChatRequestOptions): Promise<string>;
    /**
     * Send a chat completion request to the openai api with a max_tokens cap of 16384.
     * Uses model: 'gpt-3.5-turbo-16k'.
     */
    chat3_16(options: IChatRequestOptions): Promise<string>;
    /**
     * Send a gpt4 chat completion request to the openai api with a max_tokens cap of 8k.
     * Uses model: 'gpt-4'.
     */
    chat4_8(options: IChatRequestOptions): Promise<string>;
    /**
     * Edit text.
     */
    editText(options: IEditRequestOptions): Promise<string>;
    /**
     * Edit code.
     */
    editCode(options: IEditRequestOptions): Promise<string>;
    /**
     * Encode a string into tokens.
     */
    stringTokens(string: string): number[];
    /**
     * Count the number of tokens in a string.
     */
    countTokens(string: string): number;
    protected handleCompletionOptions(options: ICompletionRequestOptions): [openai.CreateCompletionRequest, AsyncRetryOptions, IResponseCacheOptions];
    protected handleChatOptions(options: IChatRequestOptions): [openai.CreateChatCompletionRequest, AsyncRetryOptions, IResponseCacheOptions];
    protected handleEditOptions(options: IEditRequestOptions): [openai.CreateEditRequest, AsyncRetryOptions, IResponseCacheOptions];
    protected handleRetryOptions(retryOptions?: AsyncRetryOptions): AsyncRetryOptions;
    protected handleCacheOptions(cacheOptions?: IResponseCacheOptions): IResponseCacheOptions;
    protected _completion(request: openai.CreateCompletionRequest, retry: AsyncRetryOptions, cache: IResponseCacheOptions): Promise<string>;
    protected _chat(request: openai.CreateChatCompletionRequest, retry: AsyncRetryOptions, cache: IResponseCacheOptions): Promise<string>;
    protected _edit(request: openai.CreateEditRequest, retry: AsyncRetryOptions, cache: IResponseCacheOptions): Promise<string>;
    /**
     * Generic function for sending requests to the openai api.
     * This is used for all the API endpoints.
     * It handles retrying, cache, hashing, and emitting events.
     */
    protected _apiRequest(request: openai.CreateEditRequest | openai.CreateCompletionRequest | openai.CreateChatCompletionRequest, retry: AsyncRetryOptions, cache: IResponseCacheOptions, apiRequest: () => Promise<string[]>): Promise<string>;
    protected parseChoices(choices: openai.CreateChatCompletionResponseChoicesInner[] | openai.CreateCompletionResponseChoicesInner[]): string[];
    protected deleteDefaultOrUndefined<T extends Record<string, any>>(options: T, defaults?: Record<string, any>): T;
    /**
     * Assert that the response data is complete by verifying that all returned choices have finish_reason: stop.
     */
    protected assertReponseDataComplete(data: openai.CreateChatCompletionResponse | openai.CreateCompletionResponse | openai.CreateEditResponse): void;
    protected getDefaultApiKey(): string;
    /**
     * Emit an event but adds 'this' as an extra trailing argument.
     */
    protected emit<T>(event: string, arg: T): T;
    /**
     * console.log all emitted events
     * @returns this (chainable)
     */
    protected logAllEvents(): this;
}
//# sourceMappingURL=OpenaiApiClientBase.d.ts.map