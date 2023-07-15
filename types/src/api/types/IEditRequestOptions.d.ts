import type { CreateEditRequest } from 'openai';
import type { Options as AsyncRetryOptions } from 'async-retry';
import { IResponseCacheOptions } from './IResponseCacheOptions';
export interface IEditRequestOptions extends Omit<CreateEditRequest, 'model' | 'input'> {
    model?: string;
    prompt?: string;
    retry?: AsyncRetryOptions;
    cache?: IResponseCacheOptions;
}
//# sourceMappingURL=IEditRequestOptions.d.ts.map