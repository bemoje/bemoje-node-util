/**
 * A simple logging utility.
 */
export declare class log {
    /**
     * Logs a (cyan) message the console.
     * @param message The message to print to console.
     * @param depth The depth to which to print object properties.
     */
    static info<T>(message: T, depth?: number | null): T;
    /**
     * Logs a (yellow) warning message to the console.
     * @param message The message to print to console.
     */
    static warn<T>(message: T): T;
    /**
     * Logs a (red) error message to the console.
     * @param error The Error object or message to print to console.
     */
    static error<T>(error: T): T;
    /**
     * Wrap an async function as a task, logging the start and end of the task.
     * @param description The description of the task.
     */
    static task<T>(description: string, task: () => Promise<T>): Promise<T>;
    /**
     * Wrap a synchronous function as a task, logging the start and end of the task.
     * @param description The description of the task.
     */
    static taskSync<T>(description: string, task: () => T): T;
    /**
     * Clears the console by printing a number of blank lines.
     * @param numLines The number of blank lines to print.
     */
    static clear(numLines?: number): void;
    /**
     * Prints a light dotted line to the console.
     * @param numLines The number of blank lines to print.
     */
    static line(numLines?: number): void;
    /**
     * Generic function for logging to console, used by the log-level specific functions.
     * @param level The log level.
     * @param message The message to print to console.
     * @param timestampColor A 'cli-color' module function to wrap the timestamp-part of the string in color formatting.
     * @param timestampColor A 'cli-color' module function to wrap the level-part of the string in color formatting.
     * @param timestampColor A 'cli-color' module function to wrap the output-part of the string in color formatting.
     * @param depth The depth to which to print object properties.
     */
    private static logToConsole;
}
//# sourceMappingURL=log.d.ts.map