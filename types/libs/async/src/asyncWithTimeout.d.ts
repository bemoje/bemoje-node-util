/**
 * Executes an async task with a timeout.
 * @param timeout The timeout in milliseconds.
 * @param task The async task to execute.
 * @param args The arguments to pass to the task.
 * @returns A promise that resolves with the task's result or rejects with an error.
 */
export declare function asyncWithTimeout<T>(timeout: number, task: () => Promise<T>): Promise<T>;
//# sourceMappingURL=asyncWithTimeout.d.ts.map