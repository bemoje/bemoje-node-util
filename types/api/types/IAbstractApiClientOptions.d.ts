import type { Options as IAsyncRetryOptions } from 'async-retry';
import { IPromiseQueueOptions } from '../../async/types/IPromiseQueueOptions';
import { IQueueAddOptions } from '../../async/types/IQueueAddOptions';
import { IQueue } from '../../datastructures/types/IQueue';
import { RunFunction } from '../../datastructures/types/RunFunction';
import { IApiResponseCacheOptions } from './IApiResponseCacheOptions';
import { IResponseCacheOptions } from './IResponseCacheOptions';
/**
 * Options for creating a new instance of AbstractApiClient.
 * @see AbstractApiClient
 */
export interface IAbstractApiClientOptions {
    /**
     * Output all events to console
     */
    logAllEvents?: boolean;
    /**
     * Options for initialization the cache
     */
    cache?: IApiResponseCacheOptions;
    /**
     * Global options for concurrency control. These affect all API requests.
     */
    concurrency?: IPromiseQueueOptions<IQueue<RunFunction, IQueueAddOptions>, IQueueAddOptions>;
    /**
     * Defaults for API request retry behaviour. Can be overriden in individual method calls.
     */
    retryDefaults?: IAsyncRetryOptions;
    /**
     * Defaults for API request cache behaviour. Can be overriden in individual method calls.
     */
    cacheDefaults?: IResponseCacheOptions;
}
//# sourceMappingURL=IAbstractApiClientOptions.d.ts.map