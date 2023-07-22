import type { Options as AsyncRetryOptions } from 'async-retry';
import type { CreateEditRequest } from 'openai';
import { IResponseCacheOptions } from './IResponseCacheOptions';
export interface IEditRequestOptions extends Omit<CreateEditRequest, 'model' | 'input'> {
    /**
     * The model to use if not the defeault one.
     */
    model?: string;
    /**
     * prompt alias for input
     */
    prompt?: string;
    /**
     * API request retry options
     */
    retry?: AsyncRetryOptions;
    /**
     * Cache options
     */
    cache?: IResponseCacheOptions;
}
//# sourceMappingURL=IEditRequestOptions.d.ts.map