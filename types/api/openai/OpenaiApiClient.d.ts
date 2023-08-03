import 'dotenv/config';
import type * as openai from 'openai';
import { OpenAIApi } from 'openai';
import { AbstractApiClient } from '../AbstractApiClient';
import { IAsyncRetryOptions } from '../types/IAsyncRetryOptions';
import { IResponseCacheOptions } from '../types/IResponseCacheOptions';
import { IOpenaiApiClientApiDefaultsOptions } from './types/IOpenaiApiClientApiDefaultsOptions';
import { IOpenaiApiClientOptions } from './types/IOpenaiApiClientOptions';
import { IOpenaiChatRequestOptions } from './types/IOpenaiChatRequestOptions';
import { IOpenaiCompletionRequestOptions } from './types/IOpenaiCompletionRequestOptions';
import { IOpenaiTranscribeOptions } from './types/IOpenaiTranscribeOptions';
import { IOpenaiTranscribeRequest } from './types/IOpenaiTranscribeRequest';
/**
 * A class representing an OpenAI API client.
 */
export declare class OpenaiApiClient extends AbstractApiClient {
    /**
     * API client instance
     */
    readonly client: OpenAIApi;
    /**
     * Defaults for API requests. Can be overriden in individual method calls.
     */
    readonly apiDefaults: IOpenaiApiClientApiDefaultsOptions;
    protected concurrencyJustReduced: boolean;
    /**
     * Create a new OpenaiApiClient instance.
     * @param options - The constructor options to use.
     */
    constructor(options?: IOpenaiApiClientOptions);
    /**
     * Send a completion request to the openai api.
     * @param options - The options to use.
     */
    completion(options: IOpenaiCompletionRequestOptions): Promise<string>;
    /**
     * Send a chat completion request to the openai api with a max_tokens cap of 4096.
     * @param options - The options to use.
     */
    gpt3_8k(options: IOpenaiChatRequestOptions): Promise<string>;
    /**
     * Send a chat completion request to the openai api with a max_tokens cap of 16384.
     * @param options - The options to use.
     */
    gpt3_16k(options: IOpenaiChatRequestOptions): Promise<string>;
    /**
     * Send a gpt4 chat completion request to the openai api with a max_tokens cap of 8k.
     * @param options - The options to use.
     */
    gpt4_8k(options: IOpenaiChatRequestOptions): Promise<string>;
    /**
     * Send a transcribe completion request to the openai api.
     * @param options - The options to use.
     */
    transcribe(options: IOpenaiTranscribeOptions): Promise<string>;
    /**
     * Handle completion options.
     * @param options - The options to handle.
     */
    protected handleCompletionOptions(options: IOpenaiCompletionRequestOptions): [openai.CreateCompletionRequest, IAsyncRetryOptions, IResponseCacheOptions];
    /**
     * Handle chat options.
     * @param options - The options to handle.
     */
    protected handleChatOptions(options: IOpenaiChatRequestOptions): [openai.CreateChatCompletionRequest, IAsyncRetryOptions, IResponseCacheOptions];
    /**
     * Handle transcribe options.
     * @param options - The options to handle.
     */
    protected handleTranscribeOptions(options: IOpenaiTranscribeOptions): [IOpenaiTranscribeRequest, IAsyncRetryOptions, IResponseCacheOptions];
    /**
     * Send completion request to the openai API.
     * This is used by all the preset methods, the public methods: completion.
     * @param request - The request object to send to the openai api.
     * @param retry - The retry options.
     * @param cache - The cache options.
     */
    protected _completion(request: openai.CreateCompletionRequest, retry: IAsyncRetryOptions, cache: IResponseCacheOptions): Promise<string>;
    /**
     * Send chat request to the openai API.
     * This is used by all the preset methods, the public methods: chat3_8, chat3_16, and chat4_8.
     * @param request - The request object to send to the openai api.
     * @param retry - The retry options.
     * @param cache - The cache options.
     */
    protected _chat(request: openai.CreateChatCompletionRequest, retry: IAsyncRetryOptions, cache: IResponseCacheOptions): Promise<string>;
    /**
     * Send transcribe (speech to text) request to the openai API.
     * @param request - The request object to send to the openai api.
     * @param retry - The retry options.
     * @param cache - The cache options.
     */
    protected _transcribe(request: IOpenaiTranscribeRequest, retry: IAsyncRetryOptions, cache: IResponseCacheOptions): Promise<string>;
    /**
     * Parses API error codes.
     * When the error is a rate limit error, lowers the concurrency.
     * @param error - The error to parse.
     */
    protected handleApiError(error: any): void;
    /**
     * Lower the concurrency to prevent rate limiting.
     * Automatically raises the concurrency again after a delay.
     * @param lowerBy - The amount to lower the concurrency by.
     * @param raiseAgainBy - The amount to raise the concurrency by after a delay.
     * @param delay - The delay to wait before raising the concurrency again. This is randomized by +/- 5 seconds to prevent multiple requests from affecting the concurrency at the same time.
     */
    protected lowerConcurrency(lowerBy?: number, raiseAgainBy?: number, delay?: number): void;
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
    protected assertReponseDataComplete(data: openai.CreateChatCompletionResponse | openai.CreateCompletionResponse): void;
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
}
//# sourceMappingURL=OpenaiApiClient.d.ts.map