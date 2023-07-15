import type { CreateCompletionRequest } from 'openai';
import type { Options as AsyncRetryOptions } from 'async-retry';
import { IResponseCacheOptions } from './IResponseCacheOptions';
export interface ICompletionRequestOptions extends Omit<CreateCompletionRequest, 'model'> {
    model?: string;
    response_max_tokens?: number;
    retry?: AsyncRetryOptions;
    instruction?: string;
    cache?: IResponseCacheOptions;
}
//# sourceMappingURL=ICompletionRequestOptions.d.ts.map