import type { CreateChatCompletionRequest, ChatCompletionRequestMessage } from 'openai'
import type { Options as AsyncRetryOptions } from 'async-retry'
import { IResponseCacheOptions } from './IResponseCacheOptions'

export interface IChatRequestOptions
  extends Omit<CreateChatCompletionRequest, 'model' | 'messages'> {
  // The model to use if not the defeault one.
  model?: string
  // Message history
  messages?: ChatCompletionRequestMessage[]
  // A user message inserted before all other messages, except the system instructions message if provided
  prompt?: string
  // System instructions message inserted before all user and assistant messages
  instruction?: string
  // API request retry options
  retry?: AsyncRetryOptions
  // Cache options
  cache?: IResponseCacheOptions
}
