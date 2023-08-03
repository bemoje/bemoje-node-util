/// <reference types="node" />
/// <reference types="node" />
import EventEmitter from 'events';
import { PriorityQueue } from '../datastructures/PriorityQueue';
import type { IQueue } from '../datastructures/types/IQueue';
import type { RunFunction } from '../datastructures/types/RunFunction';
import type { IPromiseQueueOptions } from './types/IPromiseQueueOptions';
import type { IQueueAddOptions } from './types/IQueueAddOptions';
import type { ITaskOptions } from './types/ITaskOptions';
type Task<TaskResultType> = ((options: ITaskOptions) => PromiseLike<TaskResultType>) | ((options: ITaskOptions) => TaskResultType);
type EventName = 'active' | 'idle' | 'empty' | 'add' | 'next' | 'completed' | 'error';
/**
 * Promise queue with concurrency control.
 * ESM compatible port from https://www.npmjs.com/package/p-queue
 */
export declare class PromiseQueue<QueueType extends IQueue<RunFunction, EnqueueOptionsType> = PriorityQueue, EnqueueOptionsType extends IQueueAddOptions = IQueueAddOptions> extends EventEmitter {
    readonly _carryoverConcurrencyCount: boolean;
    readonly _isIntervalIgnored: boolean;
    _intervalCount: number;
    readonly _intervalCap: number;
    readonly _interval: number;
    _intervalEnd: number;
    _intervalId?: NodeJS.Timeout;
    _timeoutId?: NodeJS.Timeout;
    _queue: QueueType;
    readonly _queueClass: new () => QueueType;
    _pending: number;
    _concurrency: number;
    _isPaused: boolean;
    /**
     * Creates a new `PromiseQueue` instance.
     */
    constructor(options?: IPromiseQueueOptions<QueueType, EnqueueOptionsType>);
    get _doesIntervalAllowAnother(): boolean;
    get _doesConcurrentAllowAnother(): boolean;
    _next(): void;
    _onResumeInterval(): void;
    get _isIntervalPaused(): boolean;
    _tryToStartAnother(): boolean;
    _initializeIntervalIfNeeded(): void;
    _onInterval(): void;
    /**
     * Executes all queued functions until it reaches the limit.
     */
    _processQueue(): void;
    get concurrency(): number;
    set concurrency(newConcurrency: number);
    _throwOnAbort(signal: AbortSignal): Promise<never>;
    /**
     * Adds a sync or async task to the queue. Always returns a promise.
     */
    add<TaskResultType>(function_: Task<TaskResultType>, options: Exclude<EnqueueOptionsType, 'throwOnTimeout'>): Promise<TaskResultType>;
    add<TaskResultType>(function_: Task<TaskResultType>, options?: Partial<EnqueueOptionsType>): Promise<TaskResultType | void>;
    /**
     * Same as `.add()`, but accepts an array of sync or async functions.
     * @returns A promise that resolves when all functions are resolved.
     */
    addAll<TaskResultsType>(functions: ReadonlyArray<Task<TaskResultsType>>, options?: Partial<Exclude<EnqueueOptionsType, 'throwOnTimeout'>>): Promise<TaskResultsType[]>;
    addAll<TaskResultsType>(functions: ReadonlyArray<Task<TaskResultsType>>, options?: Partial<EnqueueOptionsType>): Promise<Array<TaskResultsType | void>>;
    /**
     * Start (or resume) executing enqueued tasks within concurrency limit. No need to call this if queue is not paused (via `options.autoStart = false` or by `.pause()` method.)
     */
    start(): this;
    /**
     * Put queue execution on hold.
     */
    pause(): void;
    /**
     * Clear the queue.
     */
    clear(): void;
    /**
     * Can be called multiple times. Useful if you for example add additional items at a later time.
     * @returns A promise that settles when the queue becomes empty.
     */
    onEmpty(): Promise<void>;
    /**
     * @returns A promise that settles when the queue size is less than the given limit: `queue.size < limit`.
     * If you want to avoid having the queue grow beyond a certain size you can `await queue.onSizeLessThan()` before adding a new item.
     * Note that this only limits the number of items waiting to start. There could still be up to `concurrency` jobs already running that this call does not include in its calculation.
     */
    onSizeLessThan(limit: number): Promise<void>;
    /**
     * The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.
     * @returns A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.
     */
    onIdle(): Promise<void>;
    _onEvent(event: EventName, filter?: () => boolean): Promise<void>;
    /**
     * Size of the queue, the number of queued items waiting to run.
     */
    get size(): number;
    /**
     * Size of the queue, filtered by the given options.
     * For example, this can be used to find the number of items remaining in the queue with a specific priority level.
     */
    sizeBy(options: Readonly<Partial<EnqueueOptionsType>>): number;
    /**
     * Number of running items (no longer in the queue).
     */
    get pending(): number;
    /**
     * Whether the queue is currently paused.
     */
    get isPaused(): boolean;
}
export {};
//# sourceMappingURL=PromiseQueue.d.ts.map