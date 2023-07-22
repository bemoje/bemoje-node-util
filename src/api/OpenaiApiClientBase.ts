import type { Options as AsyncRetryOptions } from 'async-retry'
import asyncRetry from 'async-retry'
import EventEmitter from 'events'
import fs from 'fs'
import { encode } from 'gpt-3-encoder'
import type * as openai from 'openai'
import { Configuration, OpenAIApi } from 'openai'
import path from 'path'
import { _printEmitterEvents } from '../node/_printEmitterEvents'
import { log } from '../node/log'
import { objAssignDeep } from '../object/objAssignDeep'
import { objDeleteKeys } from '../object/objDeleteKeys'
import { objDeleteKeysMutable } from '../object/objDeleteKeysMutable'
import { setNonEnumerable } from '../object/setNonEnumerable'
import { ApiReponseCache } from './ApiReponseCache'
import type { IApiClientApiDefaultsOptions } from './types/IApiClientApiDefaultsOptions'
import type { IApiClientOptions } from './types/IApiClientOptions'
import type { IApiResponseCacheOptions } from './types/IApiResponseCacheOptions'
import type { IChatRequestOptions } from './types/IChatRequestOptions'
import type { ICompletionRequestOptions } from './types/ICompletionRequestOptions'
import type { IEditRequestOptions } from './types/IEditRequestOptions'
import type { IResponseCacheOptions } from './types/IResponseCacheOptions'

export class OpenaiApiClientBase {
  /**
   * API client instance
   */
  readonly client: OpenAIApi

  /**
   * Event emitter for cache events
   */
  readonly events = new EventEmitter()

  /**
   * API response cache
   */
  readonly cache: ApiReponseCache<string[]>

  /**
   * Defaults for API requests. Can be overriden in individual method calls.
   */
  readonly apiDefaults: IApiClientApiDefaultsOptions = {
    completionModel: 'text-davinci-003',
    chat3_8Model: 'gpt-3.5-turbo',
    chat3_16Model: 'gpt-3.5-turbo-16k',
    chat4_8Model: 'gpt-4',
    editTextModel: 'text-davinci-edit-001',
    editCodeModel: 'code-davinci-edit-001',
    choicesDelimiter: '\n---------------\n',
  }

  /**
   * Options for async-retry
   */
  readonly retryDefaults: AsyncRetryOptions = {
    retries: 10,
    factor: 1.5,
    onRetry: (error) => this.emit('retry', error),
  }

  /**
   * Options for whether to overwrite existing cached data by default for api requests
   */
  readonly cacheDefaults: IResponseCacheOptions = {
    overwrite: false,
  }

  /**
   * Handle the options passed to the constructor.
   * @param options - The options to handle.
   */
  protected handleOptions(options: IApiClientOptions): IApiClientOptions {
    if (!options.cacheInit) options.cacheInit = {}
    if (!options.cacheInit.name) options.cacheInit.name = 'OpenaiApiClient'
    if (options.logAllEvents && options.cacheInit.logAllEvents === undefined) {
      options.cacheInit.logAllEvents = true
    }
    if (!options.apiKey) options.apiKey = this.getDefaultApiKey()
    if (options.logAllEvents) this.logAllEvents()
    this.emit('options', options)
    objAssignDeep(this, objDeleteKeys<any>(options, 'cacheInit', 'logAllEvents', 'apiKey'))
    return options
  }

  /**
   * Create a new OpenaiApiClient instance.
   * @param options - The constructor options to use.
   */
  constructor(options: IApiClientOptions = {}) {
    options = this.handleOptions(options)
    this.client = new OpenAIApi(new Configuration({ apiKey: options.apiKey }))
    this.cache = new ApiReponseCache<string[]>(options.cacheInit as IApiResponseCacheOptions)
    setNonEnumerable(this, 'client')
    this.emit('ready', void 0)
  }

  /**
   * Send a completion request to the openai api.
   * @param options - The options to use.
   */
  async completion(options: ICompletionRequestOptions): Promise<string> {
    return await this._completion(...this.handleCompletionOptions(options))
  }

  /**
   * Send a chat completion request to the openai api with a max_tokens cap of 4096.
   * Uses model: 'gpt-3.5-turbo'.
   * @param options - The options to use.
   */
  async chat3_8(options: IChatRequestOptions): Promise<string> {
    return await this._chat(...this.handleChatOptions(options))
  }

  /**
   * Send a chat completion request to the openai api with a max_tokens cap of 16384.
   * Uses model: 'gpt-3.5-turbo-16k'.
   * @param options - The options to use.
   */
  async chat3_16(options: IChatRequestOptions): Promise<string> {
    options.model = this.apiDefaults.chat3_16Model
    return await this._chat(...this.handleChatOptions(options))
  }

  /**
   * Send a gpt4 chat completion request to the openai api with a max_tokens cap of 8k.
   * Uses model: 'gpt-4'.
   * @param options - The options to use.
   */
  async chat4_8(options: IChatRequestOptions): Promise<string> {
    options.model = this.apiDefaults.chat4_8Model
    return await this._chat(...this.handleChatOptions(options))
  }

  /**
   * Edit text.
   * @param options - The options to use.
   */
  async editText(options: IEditRequestOptions): Promise<string> {
    return await this._edit(...this.handleEditOptions(options))
  }

  /**
   * Edit code.
   * @param options - The options to use.
   */
  async editCode(options: IEditRequestOptions): Promise<string> {
    if (!options.model) options.model = this.apiDefaults.editCodeModel
    return await this._edit(...this.handleEditOptions(options))
  }

  /**
   * Encode a string into tokens.
   * @param string - The string to encode.
   */
  stringTokens(string: string): number[] {
    return encode(string)
  }

  /**
   * Count the number of tokens in a string.
   * @param string - The string to count tokens in.
   */
  countTokens(string: string): number {
    return encode(string).length
  }

  /**
   * Handle completion options.
   * @param options - The options to handle.
   */
  protected handleCompletionOptions(
    options: ICompletionRequestOptions,
  ): [openai.CreateCompletionRequest, AsyncRetryOptions, IResponseCacheOptions] {
    options = this.deleteDefaultOrUndefinedOptions(options, {
      presence_penalty: 0,
      frequency_penalty: 0,
      best_of: 1,
    })
    if (!options.model) options.model = this.apiDefaults.completionModel
    if (options.instruction) options.prompt = options.instruction + '\n\n' + options.prompt
    if (!options.max_tokens) {
      const count = this.countTokens(options.prompt as string)
      if (options.response_max_tokens) {
        options.max_tokens = count + options.response_max_tokens
      } else {
        options.max_tokens = 4096 - count
      }
    }
    options = objDeleteKeysMutable<any>(options, 'retry', 'cache', 'instruction', 'response_max_tokens')
    const request = options as openai.CreateCompletionRequest
    const retry = this.handleRetryOptions(options.retry)
    const cache = this.handleCacheOptions(options.cache)
    return this.emit('request', [request, retry, cache])
  }

  /**
   * Handle chat options.
   * @param options - The options to handle.
   */
  protected handleChatOptions(
    options: IChatRequestOptions,
  ): [openai.CreateChatCompletionRequest, AsyncRetryOptions, IResponseCacheOptions] {
    options = this.deleteDefaultOrUndefinedOptions(options, {
      presence_penalty: 0,
      frequency_penalty: 0,
    })
    const retry = this.handleRetryOptions(options.retry)
    const cache = this.handleCacheOptions(options.cache)
    const model = this.apiDefaults.chat3_8Model
    const messages: openai.ChatCompletionRequestMessage[] = []
    if (options.instruction) messages.push({ role: 'system', content: options.instruction })
    if (options.prompt) messages.push({ role: 'user', content: options.prompt })
    if (options.messages) messages.push(...options.messages)
    if (!messages.length) messages.push({ role: 'user', content: '' })
    options = objDeleteKeysMutable<any>(options, 'prompt', 'instruction', 'retry', 'cache')
    const request = { model, ...options, messages } as openai.CreateChatCompletionRequest
    return this.emit('request', [request, retry, cache])
  }

  /**
   * Handle edit options.
   * @param options - The options to handle.
   */
  protected handleEditOptions(options: IEditRequestOptions): [openai.CreateEditRequest, AsyncRetryOptions, IResponseCacheOptions] {
    options = this.deleteDefaultOrUndefinedOptions(options, {})
    const retry = this.handleRetryOptions(options.retry)
    const cache = this.handleCacheOptions(options.cache)
    const model = this.apiDefaults.editTextModel
    const input = options.prompt
    const instruction = options.instruction
    const _options = objDeleteKeysMutable<any>(options, 'prompt', 'retry', 'cache')
    const request = {
      model,
      ..._options,
      instruction,
      input,
    } as openai.CreateEditRequest
    return this.emit('request', [request, retry, cache])
  }

  /**
   * Handle retry options.
   * @param retryOptions - The retry options to handle.
   */
  protected handleRetryOptions(retryOptions?: AsyncRetryOptions): AsyncRetryOptions {
    if (retryOptions?.onRetry) {
      const onRetry = retryOptions.onRetry
      retryOptions.onRetry = (error, attempt) => {
        this.emit('retry', error)
        onRetry(error, attempt)
      }
    }
    return retryOptions ? Object.assign({}, this.retryDefaults, retryOptions) : this.retryDefaults
  }

  /**
   * Handle cache options.
   * @param cacheOptions - The cache options to handle.
   */
  protected handleCacheOptions(cacheOptions?: IResponseCacheOptions): IResponseCacheOptions {
    return cacheOptions ? Object.assign({}, this.cacheDefaults, cacheOptions) : this.cacheDefaults
  }

  /**
   * Send completion request to the openai API.
   * This is used by all the preset methods, the public methods: completion.
   * @param request - The request object to send to the openai api.
   * @param retry - The retry options.
   * @param cache - The cache options.
   */
  protected async _completion(
    request: openai.CreateCompletionRequest,
    retry: AsyncRetryOptions,
    cache: IResponseCacheOptions,
  ): Promise<string> {
    return await this._apiRequest(request, retry, cache, async () => {
      const { data } = await this.client.createCompletion(request)
      this.assertReponseDataComplete(data)
      return this.parseChoices(data.choices)
    })
  }

  /**
   * Send chat request to the openai API.
   * This is used by all the preset methods, the public methods: chat3_8, chat3_16, and chat4_8.
   * @param request - The request object to send to the openai api.
   * @param retry - The retry options.
   * @param cache - The cache options.
   */
  protected async _chat(
    request: openai.CreateChatCompletionRequest,
    retry: AsyncRetryOptions,
    cache: IResponseCacheOptions,
  ): Promise<string> {
    return await this._apiRequest(request, retry, cache, async () => {
      const { data } = await this.client.createChatCompletion(request)
      this.assertReponseDataComplete(data)
      return this.parseChoices(data.choices)
    })
  }

  /**
   * Send edit request to the openai API.
   * This is used by all the preset methods, the public methods: editText, editCode
   * @param request - The request object to send to the openai api.
   * @param retry - The retry options.
   * @param cache - The cache options.
   */
  protected async _edit(request: openai.CreateEditRequest, retry: AsyncRetryOptions, cache: IResponseCacheOptions): Promise<string> {
    return await this._apiRequest(request, retry, cache, async () => {
      const { data } = await this.client.createEdit(request)
      return this.parseChoices(data.choices)
    })
  }

  /**
   * Generic function for sending requests to the openai api.
   * This is used for all the API endpoints.
   * It handles retrying, cache, hashing, and emitting events.
   * @param request - The request object to send to the openai api.
   * @param retry - The retry options.
   * @param cache - The cache options.
   */
  protected async _apiRequest(
    request: openai.CreateEditRequest | openai.CreateCompletionRequest | openai.CreateChatCompletionRequest,
    retry: AsyncRetryOptions,
    cache: IResponseCacheOptions,
    apiRequest: () => Promise<string[]>,
  ): Promise<string> {
    const hash = this.cache.hashKey(request)
    const results = await asyncRetry(async () => {
      if (cache.overwrite) await this.cache.delete(hash)
      return await this.cache.getOrElse(hash, apiRequest)
    }, retry)
    return this.emit('response', results.join(this.apiDefaults.choicesDelimiter))
  }

  /**
   * Extract the actual concent from the 'choices' object from the response data.
   * @param choices - The choices object from the response data.
   */
  protected parseChoices(
    choices: openai.CreateChatCompletionResponseChoicesInner[] | openai.CreateCompletionResponseChoicesInner[],
  ): string[] {
    return choices.map((choice) => {
      if (Reflect.has(choice, 'text')) {
        return Reflect.get(choice, 'text').trim()
      } else if (Reflect.has(choice, 'message')) {
        return Reflect.get(choice, 'message').content.trim()
      }
    })
  }

  /**
   * Delete all options that are undefined or equal to the default value.
   * The response cache uses hashed options to determine if the request has already been made.
   * Removing default values and undefined values normalizes the options object so it hashes the same.
   * @param options - The options to delete from.
   * @param defaults - The default values to compare against.
   */
  protected deleteDefaultOrUndefinedOptions<T extends Record<string, any>>(options: T, defaults: Record<string, any> = {}): T {
    options = Object.assign({}, options)
    defaults.temperature = 1
    defaults.top_p = 1
    defaults.n = 1
    for (const [key, value] of Object.entries(defaults)) {
      if (Reflect.get(options, key) === value) {
        Reflect.deleteProperty(options, key)
      }
    }
    for (const [key, value] of Object.entries(options)) {
      if (!value && value !== 0) {
        Reflect.deleteProperty(options, key)
      }
    }
    return options
  }

  /**
   * Assert that the response data is complete by verifying that all returned choices have finish_reason: stop.
   */
  protected assertReponseDataComplete(
    data: openai.CreateChatCompletionResponse | openai.CreateCompletionResponse | openai.CreateEditResponse,
  ): void {
    for (const choice of data.choices) {
      if (choice.finish_reason !== 'stop') {
        this.emit('error', 'Expected finish_reason to be: stop. Got: ' + choice.finish_reason)
      }
    }
  }

  /**
   * Get the default api key from 'process.env.USERPROFILE/repos/apikeys/openai.txt'
   */
  protected getDefaultApiKey(): string {
    try {
      const filepath = path.join(process.env.USERPROFILE || '', 'repos', 'apikeys', 'openai.txt')
      return fs.existsSync(filepath) ? fs.readFileSync(filepath).toString() : ''
    } catch (error) {
      return ''
    }
  }

  /**
   * Emit an event but adds 'this' as an extra trailing argument.
   */
  protected emit<T>(event: string, arg: T): T {
    this.events.emit(event, arg, this)
    return arg
  }

  /**
   * console.log all emitted events
   */
  protected logAllEvents(): this {
    log.line(3)
    _printEmitterEvents(this, this.events, {
      info: ['options', 'ready', 'request', 'response'],
      error: ['error', 'retry'],
    })
    return this
  }
}
