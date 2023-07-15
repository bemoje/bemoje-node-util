import type { Options as AsyncRetryOptions } from 'async-retry';
import type { IApiResponseCacheOptions } from './IApiResponseCacheOptions';
import type { IApiClientApiDefaultsOptions } from './IApiClientApiDefaultsOptions';
import type { IResponseCacheOptions } from './IResponseCacheOptions';
export interface IApiClientOptions {
    apiKey?: string;
    logAllEvents?: boolean;
    cacheInit?: IApiResponseCacheOptions;
    apiDefaults?: IApiClientApiDefaultsOptions;
    retryDefaults?: AsyncRetryOptions;
    cacheDefaults?: IResponseCacheOptions;
}
//# sourceMappingURL=IApiClientOptions.d.ts.map