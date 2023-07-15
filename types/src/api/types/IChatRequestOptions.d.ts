import type { CreateChatCompletionRequest, ChatCompletionRequestMessage } from 'openai';
import type { Options as AsyncRetryOptions } from 'async-retry';
import { IResponseCacheOptions } from './IResponseCacheOptions';
export interface IChatRequestOptions extends Omit<CreateChatCompletionRequest, 'model' | 'messages'> {
    model?: string;
    messages?: ChatCompletionRequestMessage[];
    prompt?: string;
    instruction?: string;
    retry?: AsyncRetryOptions;
    cache?: IResponseCacheOptions;
}
//# sourceMappingURL=IChatRequestOptions.d.ts.map