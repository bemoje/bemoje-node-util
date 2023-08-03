import { AbstractApiClient } from './AbstractApiClient';
import { IAbstractApiClientOptions } from './types/IAbstractApiClientOptions';
import { IAsyncRetryOptions } from './types/IAsyncRetryOptions';
import { IResponseCacheOptions } from './types/IResponseCacheOptions';
/**
 * Build API client class by extending AbstractApiClient
 */
export declare class SomeApiClient extends AbstractApiClient {
    constructor(options?: IAbstractApiClientOptions);
    /**
     * example method that calls api endpoint
     */
    getApiData(seconds: number, options?: {
        retry?: IAsyncRetryOptions;
        cache?: IResponseCacheOptions;
    }): Promise<string>;
}
export declare const api: SomeApiClient;
//# sourceMappingURL=AbstractApiClient.example.d.ts.map