/**
 * A simple logging utility.
 */
export declare class log {
    /**
     * Logs a (cyan) message the console.
     */
    static info<T>(message: T, depth?: number | null): T;
    /**
     * Logs a (yellow) warning message to the console.
     */
    static warn<T>(message: T): T;
    /**
     * Logs a (red) error message to the console.
     */
    static error<T>(error: T): T;
    /**
     * Wrap an async function as a task, logging the start and end of the task.
     */
    static task<T>(description: string, task: () => Promise<T>): Promise<T>;
    /**
     * Wrap a synchronous function as a task, logging the start and end of the task.
     */
    static taskSync<T>(description: string, task: () => T): T;
    /**
     * Clears the console by printing a number of blank lines.
     */
    static clear(numLines?: number): void;
    /**
     * Prints a light dotted line to the console.
     */
    static line(numLines?: number): void;
    /**
     * Generic function for logging to console, used by the log-level specific functions.
     */
    private static logToConsole;
}
//# sourceMappingURL=log.d.ts.map