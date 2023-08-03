import { IPriorityQueueOptions } from './types/IPriorityQueueOptions';
import { IQueue } from './types/IQueue';
import { RunFunction } from './types/RunFunction';
/**
 * A class representing a priority queue for async functions.
 */
export declare class PriorityQueue implements IQueue<RunFunction, IPriorityQueueOptions> {
    /**
     * Queue of functions to run
     */
    protected readonly queue: Array<IPriorityQueueOptions & {
        run: RunFunction;
    }>;
    /**
     * Get the number of functions in the queue
     */
    get size(): number;
    /**
     * Add a function to the queue
     * @param run Function to run
     * @param options Options for the queue
     */
    enqueue(run: RunFunction, options?: Partial<IPriorityQueueOptions>): void;
    /**
     * Remove a function from the queue
     */
    dequeue(): RunFunction | undefined;
    /**
     * Get the functions with the given priority.
     * @param options Options for the queue
     */
    filter(options: Readonly<Partial<IPriorityQueueOptions>>): RunFunction[];
}
//# sourceMappingURL=PriorityQueue.d.ts.map