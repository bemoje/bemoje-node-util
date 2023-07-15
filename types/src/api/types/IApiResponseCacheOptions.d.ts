export interface IApiResponseCacheOptions {
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
     * Output all events to console
     */
    logAllEvents?: boolean;
}
//# sourceMappingURL=IApiResponseCacheOptions.d.ts.map