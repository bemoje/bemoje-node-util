/**
 * Run async tasks serially, each task waiting for the previous one to complete.
 */
export declare function asyncSerial<T>(tasks: Array<() => Promise<T>>): Promise<Array<T>>;
//# sourceMappingURL=asyncSerial.d.ts.map