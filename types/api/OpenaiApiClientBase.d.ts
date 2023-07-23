/// <reference types="node" />
import type { Options as AsyncRetryOptions } from 'async-retry';
import EventEmitter from 'events';
import type * as openai from 'openai';
import { OpenAIApi } from 'openai';
import type { PQueue } from '../async/PQueue';
import type { IQueueAddOptions } from '../async/types/IQueueAddOptions';
import type { IQueue } from '../datastructures/types/IQueue';
import type { RunFunction } from '../datastructures/types/RunFunction';
import { ApiReponseCache } from './ApiReponseCache';
import type { IApiClientApiDefaultsOptions } from './types/IApiClientApiDefaultsOptions';
import type { IApiClientOptions } from './types/IApiClientOptions';
import type { IChatRequestOptions } from './types/IChatRequestOptions';
import type { ICompletionRequestOptions } from './types/ICompletionRequestOptions';
import type { IEditRequestOptions } from './types/IEditRequestOptions';
import type { IResponseCacheOptions } from './types/IResponseCacheOptions';
/**
 * A class representing an OpenAI API client.
 */
export declare class OpenaiApiClientBase {
    /**
     * API client instance
     */
    readonly client: OpenAIApi;
    /**
     * Event emitter for cache events
     */
    readonly events: EventEmitter;
    /**
     * API response cache
     */
    readonly cache: ApiReponseCache<string[]>;
    /**
     * Defaults for API requests. Can be overriden in individual method calls.
     */
    readonly apiDefaults: IApiClientApiDefaultsOptions;
    /**
     * Options for async-retry
     */
    readonly retryDefaults: AsyncRetryOptions;
    /**
     * Options for whether to overwrite existing cached data by default for api requests
     */
    readonly cacheDefaults: IResponseCacheOptions;
    /**
     * Generic function for sending requests to the openai api.
     * This is used for all the API endpoints.
     * It handles retrying, cache, hashing, and emitting events.
     * This method is bound to the instance on initialization because it gets wrapped with a concurrency controller in the constructor.
     * @param request - The request object to send to the openai api.
     * @param retry - The retry options.
     * @param cache - The cache options.
     */
    protected readonly _apiRequest: (request: openai.CreateEditRequest | openai.CreateCompletionRequest | openai.CreateChatCompletionRequest | string, retry: AsyncRetryOptions, cache: IResponseCacheOptions, apiRequest: () => Promise<string[]>) => Promise<string>;
    /**
     * Queue for sending requests to the openai api.
     */
    readonly queue: PQueue<IQueue<RunFunction, IQueueAddOptions>, IQueueAddOptions>;
    /**
     * Create a new OpenaiApiClient instance.
     * @param options - The constructor options to use.
     */
    constructor(options?: IApiClientOptions);
    /**
     * Handle the options passed to the constructor.
     * @param options - The options to handle.
     */
    protected handleOptions(options: IApiClientOptions): IApiClientOptions;
    /**
     * Send a completion request to the openai api.
     * @param options - The options to use.
     */
    completion(options: ICompletionRequestOptions): Promise<string>;
    /**
     * Send a chat completion request to the openai api with a max_tokens cap of 4096.
     * Uses model: 'gpt-3.5-turbo'.
     * @param options - The options to use.
     */
    chat3_8(options: IChatRequestOptions): Promise<string>;
    /**
     * Send a chat completion request to the openai api with a max_tokens cap of 16384.
     * Uses model: 'gpt-3.5-turbo-16k'.
     * @param options - The options to use.
     */
    chat3_16(options: IChatRequestOptions): Promise<string>;
    /**
     * Send a gpt4 chat completion request to the openai api with a max_tokens cap of 8k.
     * Uses model: 'gpt-4'.
     * @param options - The options to use.
     */
    chat4_8(options: IChatRequestOptions): Promise<string>;
    /**
     * Edit text.
     * @param options - The options to use.
     */
    editText(options: IEditRequestOptions): Promise<string>;
    /**
     * Edit code.
     * @param options - The options to use.
     */
    editCode(options: IEditRequestOptions): Promise<string>;
    /**
     * Encode a string into tokens.
     * @param string - The string to encode.
     */
    stringTokens(string: string): number[];
    /**
     * Count the number of tokens in a string.
     * @param string - The string to count tokens in.
     */
    countTokens(string: string): number;
    /**
     * Handle completion options.
     * @param options - The options to handle.
     */
    protected handleCompletionOptions(options: ICompletionRequestOptions): [openai.CreateCompletionRequest, AsyncRetryOptions, IResponseCacheOptions];
    /**
     * Handle chat options.
     * @param options - The options to handle.
     */
    protected handleChatOptions(options: IChatRequestOptions): [openai.CreateChatCompletionRequest, AsyncRetryOptions, IResponseCacheOptions];
    /**
     * Handle edit options.
     * @param options - The options to handle.
     */
    protected handleEditOptions(options: IEditRequestOptions): [openai.CreateEditRequest, AsyncRetryOptions, IResponseCacheOptions];
    /**
     * Handle retry options.
     * @param retryOptions - The retry options to handle.
     */
    protected handleRetryOptions(retryOptions?: AsyncRetryOptions): AsyncRetryOptions;
    /**
     * Handle cache options.
     * @param cacheOptions - The cache options to handle.
     */
    protected handleCacheOptions(cacheOptions?: IResponseCacheOptions): IResponseCacheOptions;
    /**
     * Send completion request to the openai API.
     * This is used by all the preset methods, the public methods: completion.
     * @param request - The request object to send to the openai api.
     * @param retry - The retry options.
     * @param cache - The cache options.
     */
    protected _completion(request: openai.CreateCompletionRequest, retry: AsyncRetryOptions, cache: IResponseCacheOptions): Promise<string>;
    /**
     * Send chat request to the openai API.
     * This is used by all the preset methods, the public methods: chat3_8, chat3_16, and chat4_8.
     * @param request - The request object to send to the openai api.
     * @param retry - The retry options.
     * @param cache - The cache options.
     */
    protected _transcribe(filepath: string, retry: AsyncRetryOptions, cache: IResponseCacheOptions): Promise<string>;
    /**
     * Send chat request to the openai API.
     * This is used by all the preset methods, the public methods: chat3_8, chat3_16, and chat4_8.
     * @param request - The request object to send to the openai api.
     * @param retry - The retry options.
     * @param cache - The cache options.
     */
    protected _chat(request: openai.CreateChatCompletionRequest, retry: AsyncRetryOptions, cache: IResponseCacheOptions): Promise<string>;
    /**
     * Send edit request to the openai API.
     * This is used by all the preset methods, the public methods: editText, editCode
     * @param request - The request object to send to the openai api.
     * @param retry - The retry options.
     * @param cache - The cache options.
     */
    protected _edit(request: openai.CreateEditRequest, retry: AsyncRetryOptions, cache: IResponseCacheOptions): Promise<string>;
    /**
     * Generic function for sending requests to the openai api.
     * This is used for all the API endpoints.
     * It handles retrying, cache, hashing, and emitting events.
     * @param request - The request object to send to the openai api.
     * @param retry - The retry options.
     * @param cache - The cache options.
     */
    /**
     * Extract the actual concent from the 'choices' object from the response data.
     * @param choices - The choices object from the response data.
     */
    protected parseChoices(choices: openai.CreateChatCompletionResponseChoicesInner[] | openai.CreateCompletionResponseChoicesInner[]): string[];
    /**
     * Delete all options that are undefined or equal to the default value.
     * The response cache uses hashed options to determine if the request has already been made.
     * Removing default values and undefined values normalizes the options object so it hashes the same.
     * @param options - The options to delete from.
     * @param defaults - The default values to compare against.
     */
    protected deleteDefaultOrUndefinedOptions<T extends Record<string, any>>(options: T, defaults?: Record<string, any>): T;
    /**
     * Assert that the response data is complete by verifying that all returned choices have finish_reason: stop.
     */
    protected assertReponseDataComplete(data: openai.CreateChatCompletionResponse | openai.CreateCompletionResponse | openai.CreateEditResponse): void;
    /**
     * Get the default api key from 'process.env.USERPROFILE/repos/apikeys/openai.txt'
     */
    protected getDefaultApiKey(): string;
    /**
     * Emit an event but adds 'this' as an extra trailing argument.
     */
    protected emit<T>(event: string, arg: T): T;
    /**
     * console.log all emitted events
     */
    protected logAllEvents(): this;
}
//# sourceMappingURL=OpenaiApiClientBase.d.ts.map