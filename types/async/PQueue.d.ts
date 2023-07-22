/// <reference types="node" />
import EventEmitter from 'events';
import { PriorityQueue } from '../datastructures/PriorityQueue';
import { IQueue } from '../datastructures/types/IQueue';
import { RunFunction } from '../datastructures/types/RunFunction';
import { IPQueueOptions } from './types/IPQueueOptions';
import { IQueueAddOptions } from './types/IQueueAddOptions';
import { ITaskOptions } from './types/ITaskOptions';
type Task<TaskResultType> = ((options: ITaskOptions) => PromiseLike<TaskResultType>) | ((options: ITaskOptions) => TaskResultType);
/**
 * Promise queue with concurrency control.
 * ESM compatible port from https://www.npmjs.com/package/p-queue
 */
export declare class PQueue<QueueType extends IQueue<RunFunction, EnqueueOptionsType> = PriorityQueue, EnqueueOptionsType extends IQueueAddOptions = IQueueAddOptions> extends EventEmitter {
    #private;
    /**
     * Per-operation timeout in milliseconds. Operations fulfill once `timeout` elapses if they haven't already.
     * Applies to each future operation.
     */
    timeout?: number;
    constructor(options?: IPQueueOptions<QueueType, EnqueueOptionsType>);
    get concurrency(): number;
    set concurrency(newConcurrency: number);
    /**
     * Adds a sync or async task to the queue. Always returns a promise.
     */
    add<TaskResultType>(function_: Task<TaskResultType>, options: {
        throwOnTimeout: true;
    } & Exclude<EnqueueOptionsType, 'throwOnTimeout'>): Promise<TaskResultType>;
    add<TaskResultType>(function_: Task<TaskResultType>, options?: Partial<EnqueueOptionsType>): Promise<TaskResultType | void>;
    /**
     * Same as `.add()`, but accepts an array of sync or async functions.
     * @returns A promise that resolves when all functions are resolved.
     */
    addAll<TaskResultsType>(functions: ReadonlyArray<Task<TaskResultsType>>, options?: {
        throwOnTimeout: true;
    } & Partial<Exclude<EnqueueOptionsType, 'throwOnTimeout'>>): Promise<TaskResultsType[]>;
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
//# sourceMappingURL=PQueue.d.ts.map