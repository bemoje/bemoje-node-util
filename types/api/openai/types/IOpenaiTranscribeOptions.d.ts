import { IAsyncRetryOptions } from '../../types/IAsyncRetryOptions';
import { IResponseCacheOptions } from '../../types/IResponseCacheOptions';
import { IOpenaiTranscribeRequest } from './IOpenaiTranscribeRequest';
export interface IOpenaiTranscribeOptions {
    /**
     * Transcription request object
     */
    request?: IOpenaiTranscribeRequest;
    /**
     * API request retry options
     */
    retry?: IAsyncRetryOptions;
    /**
     * Cache options
     */
    cache?: IResponseCacheOptions;
}
//# sourceMappingURL=IOpenaiTranscribeOptions.d.ts.map