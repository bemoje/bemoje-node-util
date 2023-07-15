import type { CreateCompletionRequest } from 'openai'
import type { Options as AsyncRetryOptions } from 'async-retry'
import { IResponseCacheOptions } from './IResponseCacheOptions'

export interface ICompletionRequestOptions extends Omit<CreateCompletionRequest, 'model'> {
  // The model to use if not the defeault one.
  model?: string
  // Alternative to max_tokens. The maximum number of tokens to generate. Requests can use either max_tokens or response_max_tokens.
  response_max_tokens?: number
  // API request retry options
  retry?: AsyncRetryOptions
  // Instructions message prepended to the prompt
  instruction?: string
  // Cache options
  cache?: IResponseCacheOptions
}
