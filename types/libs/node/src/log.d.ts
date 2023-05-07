/**
 * Depending configured environment variables, these functions will log to console, file and EventEmitter.
 */
export declare const log: {
    info<T>(message: T, depth?: number): T;
    warn<T_1>(message: T_1): T_1;
    error<T_2>(message: T_2): T_2;
    task<T_3>(description: string, task: () => Promise<T_3>): Promise<T_3>;
    taskSync<T_4>(description: string, task: () => T_4): T_4;
};
//# sourceMappingURL=log.d.ts.map