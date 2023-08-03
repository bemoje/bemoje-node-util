/// <reference types="node" />
import type { Format } from 'cli-color';
import { EventEmitter } from 'events';
import { ILogEmitterEventsOptions } from './types/ILogEmitterEventsOptions';
import { ILoggerOptions } from './types/ILoggerOptions';
import { LogLevel } from './types/LogLevel';
/**
 * This class is a utility for logging messages to the console and/or a log file.
 * It supports different log levels ('NONE', 'DEBUG', 'INFO', 'WARN', 'ERROR') for both console and file logging.
 * It also supports color formatting for console messages. Different colors can be specified for each log level.
 */
export declare class Logger {
    /**
     * The log level for console output. Can be 'NONE', 'DEBUG', 'INFO', 'WARN', or 'ERROR'.
     */
    protected consoleLogLevel: LogLevel;
    /**
     * Whether to debug info to console.
     */
    protected debugToConsole: boolean;
    /**
     * Whether to log info to console.
     */
    protected infoToConsole: boolean;
    /**
     * Whether to log warnings to console.
     */
    protected warnToConsole: boolean;
    /**
     * Whether to log errors to console.
     */
    protected errorToConsole: boolean;
    /**
     * The log level for the logfile. Can be 'NONE', 'DEBUG', 'INFO', 'WARN', or 'ERROR'.
     */
    protected fileLogLevel: LogLevel;
    /**
     * Whether to log debug info to the logfile.
     */
    protected debugToFile: boolean;
    /**
     * Whether to log info to the logfile.
     */
    protected infoToFile: boolean;
    /**
     * Whether to log warnings to the logfile.
     */
    protected warnToFile: boolean;
    /**
     * Whether to log errors to the logfile.
     */
    protected errorToFile: boolean;
    /**
     * The directory path of the log file.
     */
    protected logDirpath: string;
    /**
     * The filepath of the log file.
     */
    protected logFilepath: string;
    /**
     * Color format for debug messages when logged to console.
     */
    protected debugColor: Format;
    /**
     * Color format for info messages when logged to console.
     */
    protected infoColor: Format;
    /**
     * Color format for warning messages when logged to console.
     */
    protected warnColor: Format;
    /**
     * Color format for error messages when logged to console.
     */
    protected errorColor: Format;
    /**
     * Default options for creating new instances.
     */
    static optionDefaults: Required<ILoggerOptions>;
    /**
     * Create a new instance.
     * @param options - Options for creating a new instance.
     */
    constructor(options?: ILoggerOptions);
    /**
     * Re-initialize the current instance with the specified options.
     */
    initialize(options?: ILoggerOptions): void;
    /**
     * Logs a debug message the console.
     * @param message The message to print to console.
     * @param depth The depth to which to print object properties.
     */
    debug<T>(message: T, depth?: number | null): T;
    /**
     * Logs an info message the console.
     * @param message The message to print to console.
     * @param depth The depth to which to print object properties.
     */
    info<T>(message: T, depth?: number | null): T;
    /**
     * Logs a warning message to the console.
     * @param message The message to print to console.
     */
    warn<T>(message: T, depth?: number | null): T;
    /**
     * Logs a error message to the console.
     * @param message The Error object or message to print to console.
     */
    error<T>(message: T, depth?: number | null): T;
    /**
     * Wrap an async function as a task, logging the start and end of the task.
     * @param description The description of the task.
     */
    task<T>(description: string, task: () => Promise<T>): Promise<T>;
    /**
     * Wrap a synchronous function as a task, logging the start and end of the task.
     * @param description The description of the task.
     */
    taskSync<T>(description: string, task: () => T): T;
    /**
     * Delete log files older than the specified number of days.
     * @param deleteFilesOlderThan The maximum age of log files in days. If not specified, no files will be deleted.
     */
    deleteLogFiles(deleteFilesOlderThan?: number): void;
    /**
     * Prints a given number of blank lines to the console.
     * @remarks This is not logged to the log file.
     * @param numLines The number of blank lines to print.
     */
    newline(numLines?: number): void;
    /**
     * Prints a given number of lines with dashes to the console.
     * @remarks This is not logged to the log file.
     * @param numLines The number of dash lines to print.
     * @param width The number of dashes per line.
     */
    dashline(numLines?: number, width?: number): void;
    /**
     * This function is used to print the events emitted by an EventEmitter.
     * @remarks This function allows you to see what events are being emitted by an EventEmitter at runtime.
     * @param emitter The EventEmitter that is emitting the events.
     * @param options Options for logging the events.
     */
    logEmitterEvents(emitter: EventEmitter, options?: ILogEmitterEventsOptions): void;
    /**
     * Write log entry to logfile
     * @param loglevel The log level.
     * @param message The message to print to console.
     */
    _logToFile<T>(loglevel: LogLevel, message: T): void;
    /**
     * Generic function for logging to console, used by the log-level specific functions.
     * @param loglevel The log level.
     * @param message The message to print to console.
     * @param levelColor A 'cli-color' module function to wrap the level-part of the string in color formatting.
     * @param color A 'cli-color' module function to wrap the output-part of the string in color formatting.
     * @param depth The depth to which to print object properties.
     */
    _logToConsole<T>(loglevel: LogLevel, message: T, color: Format, depth?: number | null): void;
    /**
     * Get the current instance's properties.
     */
    getProperties(): {
        consoleLogLevel: LogLevel;
        debugToConsole: boolean;
        infoToConsole: boolean;
        warnToConsole: boolean;
        errorToConsole: boolean;
        fileLogLevel: LogLevel;
        debugToFile: boolean;
        infoToFile: boolean;
        warnToFile: boolean;
        errorToFile: boolean;
        logDirpath: string;
        logFilepath: string;
        debugColor: import("cli-color/bare").Format;
        infoColor: import("cli-color/bare").Format;
        warnColor: import("cli-color/bare").Format;
        errorColor: import("cli-color/bare").Format;
    };
}
//# sourceMappingURL=Logger.d.ts.map