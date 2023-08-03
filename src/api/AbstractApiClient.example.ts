import { setTimeout } from 'timers/promises'
import { log } from '../node/logger/log'
import { AbstractApiClient } from './AbstractApiClient'
import { IAbstractApiClientOptions } from './types/IAbstractApiClientOptions'
import { IAsyncRetryOptions } from './types/IAsyncRetryOptions'
import { IResponseCacheOptions } from './types/IResponseCacheOptions'

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

/**
 * Build API client class by extending AbstractApiClient
 */
export class SomeApiClient extends AbstractApiClient {
  constructor(options: IAbstractApiClientOptions = {}) {
    super(options)
  }

  /**
   * example method that calls api endpoint
   */
  async getApiData(
    seconds: number,
    options: { retry?: IAsyncRetryOptions; cache?: IResponseCacheOptions } = {},
  ): Promise<string> {
    log.warn('getThing was called.')

    // merge with defaults
    const retry = this.handleRetryOptions(options.retry || {})
    const cache = this.handleCacheOptions(options.cache || {})

    // mock api request
    const apiRequest = async () => {
      log.info('Getting the thing...')
      await setTimeout(seconds * 1000)
      return 'done'
    }

    // the sendRequest method handles retries, caching, concurrency, etc...
    return await this.sendRequest({
      apiRequest,
      args: [seconds],
      retry,
      cache,
    })
  }
}

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//                          SIMPLE EXAMPLE
//////////////////////////////////////////////////////

// instantiate
export const api = new SomeApiClient({
  cache: { enable: true, maxAgeMs: 8000 },
  concurrency: { concurrency: 1 },
  logAllEvents: true,
})

// run async thing with concurrency=1
for (let i = 1; i <= 3; i++) {
  // should miss cache on first and hit on second
  api.getApiData(i)
  api.getApiData(i)
}

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//             ALL AVAILABLE CONSTRUCTOR OPTIONS
//////////////////////////////////////////////////////

new SomeApiClient({
  /**
   * Whether to output all events to console/file.
   * If undefined, only warn and error events will be output to console.
   * If false, no events will be output to console.
   */
  logAllEvents: true,

  // CACHE SETTINGS
  cache: {
    /**
     * Whether to enable the cache. Defaults to false.
     */
    enable: true,

    /**
     * Unique name to be used as the cache directory name.
     */
    name: '',

    /**
     * Path to cache directory. Defaults to a directory named 'ApiReponseCache' in the logged in user's app data directory.
     */
    dirpath: '',

    /**
     * Max age of cached data in milliseconds. Defaults to 0 (no max age).
     */
    maxAgeMs: 100000,

    /**
     * Whether to output all events to console.
     * If undefined, only warn and error events will be output to console.
     * If false, no events will be output to console.
     */
    logAllEvents: true,
  },

  // CONCURRENCY SETTINGS
  concurrency: {
    // max requests
    intervalCap: 10000,

    // per minute
    interval: 1000 * 60,

    // Whether the task must finish in the given interval or will be carried over into the next interval count.
    carryoverConcurrencyCount: false,

    // concurrent requests
    concurrency: 100,

    // whether to start immediately when pushed to queue
    autoStart: true,
  },
})

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//             ALL AVAILABLE API CALL OPTIONS
//////////////////////////////////////////////////////

new SomeApiClient().getApiData(10, {
  // CACHE SETTINGS
  cache: {
    /**
     * Whether to overwrite existing cached data instead of using it even if it exists.
     */
    overwrite: false,
  },

  // RETRY SETTINGS
  retry: {
    /**
     * The maximum amount of times to retry the operation.
     * @default 5
     */
    retries: 5,

    /**
     * An optional function that is invoked after a new retry is performed. It's passed the `Error` that triggered it as a parameter.
     */
    onRetry: (e: Error, attempt: number) => {},

    /**
     * Whether to retry forever.
     * @default false
     */
    forever: false,

    /**
     * Whether to [unref](https://nodejs.org/api/timers.html#timers_unref) the setTimeout's.
     * @default false
     */
    unref: false,

    /**
     * The maximum time (in milliseconds) that the retried operation is allowed to run.
     * @default Infinity
     */
    maxRetryTime: Infinity,

    /**
     * The exponential factor to use.
     * @default 2.5
     */
    factor: 2.5,

    /**
     * The number of milliseconds before starting the first retry.
     * @default 1000
     */
    minTimeout: 1000,

    /**
     * The maximum number of milliseconds between two retries.
     * @default Infinity
     */
    maxTimeout: Infinity,

    /**
     * Randomizes the timeouts by multiplying a factor between 1-2.
     * @default false
     */
    randomize: false,
  },
})
