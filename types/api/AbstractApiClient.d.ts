/// <reference types="node" />
import EventEmitter from 'events';
import type { PromiseQueue } from '../async/PromiseQueue';
import { IPromiseQueueOptions } from '../async/types/IPromiseQueueOptions';
import type { IQueueAddOptions } from '../async/types/IQueueAddOptions';
import type { IQueue } from '../datastructures/types/IQueue';
import type { RunFunction } from '../datastructures/types/RunFunction';
import { ApiReponseCache } from './ApiReponseCache';
import { IAbstractApiClientOptions } from './types/IAbstractApiClientOptions';
import { IAsyncRetryOptions } from './types/IAsyncRetryOptions';
import type { IResponseCacheOptions } from './types/IResponseCacheOptions';
/**
 * A class representing some kind of client retrieving resources over the internet, like an API or SQL server.
 * @remarks
 * In order to use this class, it must be extended first and then use the sendRequest method.
 */
export declare abstract class AbstractApiClient {
    /**
     * Event emitter for cache events
     */
    readonly events: EventEmitter;
    /**
     * API response cache
     */
    readonly cache?: ApiReponseCache<any>;
    /**
     * Global queue for sending requests to the openai api.
     */
    readonly queue: PromiseQueue<IQueue<RunFunction, IQueueAddOptions>, IQueueAddOptions>;
    /**
     * Default options for async retry for api requests.
     * Can be overriden in individual method calls.
     */
    readonly retryDefaults: IAsyncRetryOptions;
    /**
     * Default options for caching for api requests.
     * Can be overriden in individual method calls.
     */
    readonly cacheDefaults: IResponseCacheOptions;
    /**
     * Options for concurrency control. These affect all API requests.
     */
    static readonly concurrencyDefaults: IPromiseQueueOptions<IQueue<RunFunction, IQueueAddOptions>, IQueueAddOptions>;
    /**
     * Generic function for sending requests to the openai api.
     * This is used for all the API endpoints.
     * It handles retrying, cache, hashing, and emitting events.
     * This method is bound to the instance on initialization because it gets wrapped with a concurrency controller in the constructor.
     * @param apiRequest - The function that makes an API request and returns the response.
     * @param args - The request options that make this request unique. When using the cache, this is what is hashed to get a cache key.
     * @param retry - The retry options.
     * @param cache - The cache options.
     */
    protected readonly sendRequest: <T>(options: {
        apiRequest: () => Promise<T>;
        args: any[];
        retry?: IAsyncRetryOptions;
        cache?: IResponseCacheOptions;
    }) => Promise<T>;
    /**
     * Create a new OpenaiApiClient instance.
     * @param options - The constructor options to use.
     */
    constructor(options?: IAbstractApiClientOptions);
    /**
     * Handle the options passed to the constructor.
     * @param options - The options to handle.
     */
    protected handleOptions(options: IAbstractApiClientOptions): IAbstractApiClientOptions;
    /**
     * Handle retry options.
     * @param retryOptions - The retry options to handle.
     */
    protected handleRetryOptions(retryOptions?: IAsyncRetryOptions): IAsyncRetryOptions;
    /**
     * Handle cache options.
     * @param cacheOptions - The cache options to handle.
     */
    protected handleCacheOptions(cacheOptions?: IResponseCacheOptions): IResponseCacheOptions;
    /**
     * Emit an event but adds 'this' as an extra trailing argument.
     * @param event - The event name.
     * @param arg - The argument to emit.
     */
    protected emit<T>(event: string, arg: T): T;
    /**
     * Output all events to the console.
     */
    protected logAllEvents(): this;
    /**
     * Output all 'warn' and 'error' events to the console.
     */
    protected logWarnErrorEvents(): void;
}
//# sourceMappingURL=AbstractApiClient.d.ts.map