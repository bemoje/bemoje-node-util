import type { Options as AsyncRetryOptions } from 'async-retry'
import type { IApiResponseCacheOptions } from './IApiResponseCacheOptions'
import type { IApiClientApiDefaultsOptions } from './IApiClientApiDefaultsOptions'
import type { IResponseCacheOptions } from './IResponseCacheOptions'

export interface IApiClientOptions {
  // OpenAI API key
  apiKey?: string
  // Output all events to console
  logAllEvents?: boolean
  // Options for initialization the cache
  cacheInit?: IApiResponseCacheOptions
  // Defaults for API requests. Can be overriden in individual method calls.
  apiDefaults?: IApiClientApiDefaultsOptions
  // Defaults for API request retry behaviour. Can be overriden in individual method calls.
  retryDefaults?: AsyncRetryOptions
  // Defaults for API request cache behaviour. Can be overriden in individual method calls.
  cacheDefaults?: IResponseCacheOptions
}
