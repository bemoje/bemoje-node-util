import EventEmitter from 'events'
import { PriorityQueue } from '../datastructures/PriorityQueue'
import { IQueue } from '../datastructures/types/IQueue'
import { RunFunction } from '../datastructures/types/RunFunction'
import { IPQueueOptions } from './types/IPQueueOptions'
import { IQueueAddOptions } from './types/IQueueAddOptions'
import { ITaskOptions } from './types/ITaskOptions'

type Task<TaskResultType> = ((options: ITaskOptions) => PromiseLike<TaskResultType>) | ((options: ITaskOptions) => TaskResultType)

type EventName = 'active' | 'idle' | 'empty' | 'add' | 'next' | 'completed' | 'error'

/**
 * Promise queue with concurrency control.
 * ESM compatible port from https://www.npmjs.com/package/p-queue
 */
export class PQueue<
  QueueType extends IQueue<RunFunction, EnqueueOptionsType> = PriorityQueue,
  EnqueueOptionsType extends IQueueAddOptions = IQueueAddOptions,
> extends EventEmitter {
  readonly #carryoverConcurrencyCount: boolean

  readonly #isIntervalIgnored: boolean

  #intervalCount = 0

  readonly #intervalCap: number

  readonly #interval: number

  #intervalEnd = 0

  #intervalId?: NodeJS.Timeout

  #timeoutId?: NodeJS.Timeout

  #queue: QueueType

  readonly #queueClass: new () => QueueType

  #pending = 0

  #concurrency!: number

  #isPaused: boolean

  readonly #throwOnTimeout: boolean

  /**
   * Per-operation timeout in milliseconds. Operations fulfill once `timeout` elapses if they haven't already.
   * Applies to each future operation.
   */
  timeout?: number

  constructor(options?: IPQueueOptions<QueueType, EnqueueOptionsType>) {
    super()

    options = {
      carryoverConcurrencyCount: false,
      intervalCap: Number.POSITIVE_INFINITY,
      interval: 0,
      concurrency: Number.POSITIVE_INFINITY,
      autoStart: true,
      queueClass: PriorityQueue,
      ...options,
    } as IPQueueOptions<QueueType, EnqueueOptionsType>

    if (!(typeof options.intervalCap === 'number' && options.intervalCap >= 1)) {
      throw new TypeError(
        `Expected \`intervalCap\` to be a number from 1 and up, got \`${
          options.intervalCap?.toString() ?? ''
        }\` (${typeof options.intervalCap})`,
      )
    }

    if (options.interval === undefined || !(Number.isFinite(options.interval) && options.interval >= 0)) {
      throw new TypeError(
        `Expected \`interval\` to be a finite number >= 0, got \`${options.interval?.toString() ?? ''}\` (${typeof options.interval})`,
      )
    }

    this.#carryoverConcurrencyCount = options.carryoverConcurrencyCount!
    this.#isIntervalIgnored = options.intervalCap === Number.POSITIVE_INFINITY || options.interval === 0
    this.#intervalCap = options.intervalCap
    this.#interval = options.interval
    this.#queue = new options.queueClass!()
    this.#queueClass = options.queueClass!
    this.concurrency = options.concurrency!
    this.timeout = options.timeout
    this.#throwOnTimeout = options.throwOnTimeout === true
    this.#isPaused = options.autoStart === false
  }

  get #doesIntervalAllowAnother(): boolean {
    return this.#isIntervalIgnored || this.#intervalCount < this.#intervalCap
  }

  get #doesConcurrentAllowAnother(): boolean {
    return this.#pending < this.#concurrency
  }

  #next(): void {
    this.#pending--
    this.#tryToStartAnother()
    this.emit('next')
  }

  #onResumeInterval(): void {
    this.#onInterval()
    this.#initializeIntervalIfNeeded()
    this.#timeoutId = undefined
  }

  get #isIntervalPaused(): boolean {
    const now = Date.now()

    if (this.#intervalId === undefined) {
      const delay = this.#intervalEnd - now
      if (delay < 0) {
        // Act as the interval was done
        // We don't need to resume it here because it will be resumed on line 160
        this.#intervalCount = this.#carryoverConcurrencyCount ? this.#pending : 0
      } else {
        // Act as the interval is pending
        if (this.#timeoutId === undefined) {
          this.#timeoutId = setTimeout(() => {
            this.#onResumeInterval()
          }, delay)
        }

        return true
      }
    }

    return false
  }

  #tryToStartAnother(): boolean {
    if (this.#queue.size === 0) {
      // We can clear the interval ("pause")
      // Because we can redo it later ("resume")
      if (this.#intervalId) {
        clearInterval(this.#intervalId)
      }

      this.#intervalId = undefined

      this.emit('empty')

      if (this.#pending === 0) {
        this.emit('idle')
      }

      return false
    }

    if (!this.#isPaused) {
      const canInitializeInterval = !this.#isIntervalPaused
      if (this.#doesIntervalAllowAnother && this.#doesConcurrentAllowAnother) {
        const job = this.#queue.dequeue()
        if (!job) {
          return false
        }

        this.emit('active')
        job()

        if (canInitializeInterval) {
          this.#initializeIntervalIfNeeded()
        }

        return true
      }
    }

    return false
  }

  #initializeIntervalIfNeeded(): void {
    if (this.#isIntervalIgnored || this.#intervalId !== undefined) {
      return
    }

    this.#intervalId = setInterval(() => {
      this.#onInterval()
    }, this.#interval)

    this.#intervalEnd = Date.now() + this.#interval
  }

  #onInterval(): void {
    if (this.#intervalCount === 0 && this.#pending === 0 && this.#intervalId) {
      clearInterval(this.#intervalId)
      this.#intervalId = undefined
    }

    this.#intervalCount = this.#carryoverConcurrencyCount ? this.#pending : 0
    this.#processQueue()
  }

  /**
   * Executes all queued functions until it reaches the limit.
   */
  #processQueue(): void {
    // eslint-disable-next-line no-empty
    while (this.#tryToStartAnother()) {}
  }

  get concurrency(): number {
    return this.#concurrency
  }

  set concurrency(newConcurrency: number) {
    if (!(typeof newConcurrency === 'number' && newConcurrency >= 1)) {
      throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${newConcurrency}\` (${typeof newConcurrency})`)
    }

    this.#concurrency = newConcurrency

    this.#processQueue()
  }

  async #throwOnAbort(signal: AbortSignal): Promise<never> {
    return new Promise((_resolve, reject) => {
      signal.addEventListener(
        'abort',
        () => {
          reject(new PQueueAbortError('The task was aborted.'))
        },
        { once: true },
      )
    })
  }

  /**
   * Adds a sync or async task to the queue. Always returns a promise.
   */
  async add<TaskResultType>(
    function_: Task<TaskResultType>,
    options: { throwOnTimeout: true } & Exclude<EnqueueOptionsType, 'throwOnTimeout'>,
  ): Promise<TaskResultType>
  async add<TaskResultType>(function_: Task<TaskResultType>, options?: Partial<EnqueueOptionsType>): Promise<TaskResultType | void>
  async add<TaskResultType>(function_: Task<TaskResultType>, options: Partial<EnqueueOptionsType> = {}): Promise<TaskResultType | void> {
    options = {
      timeout: this.timeout,
      throwOnTimeout: this.#throwOnTimeout,
      ...options,
    }

    return new Promise((resolve, reject) => {
      this.#queue.enqueue(async () => {
        this.#pending++
        this.#intervalCount++

        try {
          if (options.signal?.aborted) {
            throw new PQueueAbortError('The task was aborted.')
          }

          let operation = function_({ signal: options.signal })

          if (options.timeout) {
            operation = pTimeout(Promise.resolve(operation), options.timeout)
          }

          if (options.signal) {
            operation = Promise.race([operation, this.#throwOnAbort(options.signal)])
          }

          const result = await operation
          resolve(result)
          this.emit('completed', result)
        } catch (error: unknown) {
          if (error instanceof PQueueTimeoutError && !options.throwOnTimeout) {
            resolve()
            return
          }

          reject(error)
          this.emit('error', error)
        } finally {
          this.#next()
        }
      }, options)

      this.emit('add')

      this.#tryToStartAnother()
    })
  }

  /**
   * Same as `.add()`, but accepts an array of sync or async functions.
   * @returns A promise that resolves when all functions are resolved.
   */
  async addAll<TaskResultsType>(
    functions: ReadonlyArray<Task<TaskResultsType>>,
    options?: { throwOnTimeout: true } & Partial<Exclude<EnqueueOptionsType, 'throwOnTimeout'>>,
  ): Promise<TaskResultsType[]>
  async addAll<TaskResultsType>(
    functions: ReadonlyArray<Task<TaskResultsType>>,
    options?: Partial<EnqueueOptionsType>,
  ): Promise<Array<TaskResultsType | void>>
  async addAll<TaskResultsType>(
    functions: ReadonlyArray<Task<TaskResultsType>>,
    options?: Partial<EnqueueOptionsType>,
  ): Promise<Array<TaskResultsType | void>> {
    return Promise.all(functions.map(async (function_) => this.add(function_, options)))
  }

  /**
   * Start (or resume) executing enqueued tasks within concurrency limit. No need to call this if queue is not paused (via `options.autoStart = false` or by `.pause()` method.)
   */
  start(): this {
    if (!this.#isPaused) {
      return this
    }

    this.#isPaused = false

    this.#processQueue()
    return this
  }

  /**
   * Put queue execution on hold.
   */
  pause(): void {
    this.#isPaused = true
  }

  /**
   * Clear the queue.
   */
  clear(): void {
    this.#queue = new this.#queueClass()
  }

  /**
   * Can be called multiple times. Useful if you for example add additional items at a later time.
   * @returns A promise that settles when the queue becomes empty.
   */
  async onEmpty(): Promise<void> {
    // Instantly resolve if the queue is empty
    if (this.#queue.size === 0) {
      return
    }

    await this.#onEvent('empty')
  }

  /**
   * @returns A promise that settles when the queue size is less than the given limit: `queue.size < limit`.
   * If you want to avoid having the queue grow beyond a certain size you can `await queue.onSizeLessThan()` before adding a new item.
   * Note that this only limits the number of items waiting to start. There could still be up to `concurrency` jobs already running that this call does not include in its calculation.
   */
  async onSizeLessThan(limit: number): Promise<void> {
    // Instantly resolve if the queue is empty.
    if (this.#queue.size < limit) {
      return
    }

    await this.#onEvent('next', () => this.#queue.size < limit)
  }

  /**
   * The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.
   * @returns A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.
   */
  async onIdle(): Promise<void> {
    // Instantly resolve if none pending and if nothing else is queued
    if (this.#pending === 0 && this.#queue.size === 0) {
      return
    }

    await this.#onEvent('idle')
  }

  async #onEvent(event: EventName, filter?: () => boolean): Promise<void> {
    return new Promise((resolve) => {
      const listener = () => {
        if (filter && !filter()) {
          return
        }

        this.off(event, listener)
        resolve()
      }

      this.on(event, listener)
    })
  }

  /**
   * Size of the queue, the number of queued items waiting to run.
   */
  get size(): number {
    return this.#queue.size
  }

  /**
   * Size of the queue, filtered by the given options.
   * For example, this can be used to find the number of items remaining in the queue with a specific priority level.
   */
  sizeBy(options: Readonly<Partial<EnqueueOptionsType>>): number {
    return this.#queue.filter(options).length
  }

  /**
   * Number of running items (no longer in the queue).
   */
  get pending(): number {
    return this.#pending
  }

  /**
   * Whether the queue is currently paused.
   */
  get isPaused(): boolean {
    return this.#isPaused
  }
}

/**
 * ESM compatible port of https://www.npmjs.com/package/p-timeout
 */
function pTimeout(promise: any, options: any) {
  const getDOMException = (errorMessage: string) => {
    return globalThis.DOMException === undefined ? new PQueueAbortError(errorMessage) : new DOMException(errorMessage)
  }

  const getAbortedReason = (signal: any) => {
    const reason = signal.reason === undefined ? getDOMException('This operation was aborted.') : signal.reason
    return reason instanceof Error ? reason : getDOMException(reason)
  }

  const { milliseconds, fallback, message, customTimers = { setTimeout, clearTimeout } } = options
  let timer: any
  const wrappedPromise = new Promise((resolve, reject) => {
    if (typeof milliseconds !== 'number' || Math.sign(milliseconds) !== 1) {
      throw new TypeError(`Expected \`milliseconds\` to be a positive number, got \`${milliseconds}\``)
    }
    if (options.signal) {
      const { signal } = options
      if (signal.aborted) {
        reject(getAbortedReason(signal))
      }
      signal.addEventListener('abort', () => {
        reject(getAbortedReason(signal))
      })
    }
    if (milliseconds === Number.POSITIVE_INFINITY) {
      promise.then(resolve, reject)
      return
    }
    // We create the error outside of `setTimeout` to preserve the stack trace.
    const timeoutError = new PQueueTimeoutError()
    timer = customTimers.setTimeout.call(
      undefined,
      () => {
        if (fallback) {
          try {
            resolve(fallback())
          } catch (error) {
            reject(error)
          }
          return
        }
        if (typeof promise.cancel === 'function') {
          promise.cancel()
        }
        if (message === false) {
          resolve(undefined)
        } else if (message instanceof Error) {
          reject(message)
        } else {
          timeoutError.message = message ?? `Promise timed out after ${milliseconds} milliseconds`
          reject(timeoutError)
        }
      },
      milliseconds,
    )
    ;(async () => {
      try {
        resolve(await promise)
      } catch (error) {
        reject(error)
      }
    })()
  })

  const cancelablePromise: any = wrappedPromise.finally(() => {
    cancelablePromise.clear()
  })

  cancelablePromise.clear = () => {
    customTimers.clearTimeout.call(undefined, timer)
    timer = undefined
  }

  return cancelablePromise
}

/**
 * The error thrown by `queue.add()` when a job is aborted before it is run. See `signal`.
 */
class PQueueAbortError extends Error {
  constructor(message: string) {
    super()
    this.name = 'AbortError'
    this.message = message
  }
}

class PQueueTimeoutError extends Error {
  constructor(message?: string) {
    super(message)
    this.name = 'TimeoutError'
  }
}
