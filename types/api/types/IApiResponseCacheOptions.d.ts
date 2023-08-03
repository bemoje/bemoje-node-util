export interface IApiResponseCacheOptions {
    /**
     * Whether to enable the cache. Defaults to false.
     */
    enable?: boolean;
    /**
     * Unique name to be used as the cache directory name.
     */
    name?: string;
    /**
     * Path to cache directory. Defaults to a directory named 'ApiReponseCache' in the logged in user's app data directory.
     */
    dirpath?: string;
    /**
     * Max age of cached data in milliseconds. Defaults to 0 (no max age).
     */
    maxAgeMs?: number;
    /**
     * Whether to output all events to console.
     * If undefined, only warn and error events will be output to console.
     * If false, no events will be output to console.
     */
    logAllEvents?: boolean;
}
//# sourceMappingURL=IApiResponseCacheOptions.d.ts.map