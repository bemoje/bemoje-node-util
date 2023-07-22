/// <reference types="node" />
import EventEmitter from 'events';
import { Level } from 'level';
import { IApiResponseCacheOptions } from './types/IApiResponseCacheOptions';
/**
 * Persistent API response cache based on level-db.
 */
export declare class ApiReponseCache<V> {
    /**
     * Level database instance
     */
    readonly db: Level<string, string>;
    /**
     * Event emitter for cache events
     */
    readonly events: EventEmitter;
    /**
     * Max age of cached data in milliseconds. Defaults to 0 (no max age).
     */
    readonly maxAgeMs: number;
    /**
     * Default options for creating new instances
     */
    static readonly optionsDefaults: {
        name: string;
        dirpath: string;
        maxAgeMs: number;
        logAllEvents: boolean;
    };
    /**
     * Create a new instance.
     * @param options - Options for creating a new instance.
     */
    constructor(options: IApiResponseCacheOptions);
    /**
     * Hash any type of key.
     * @param key - The key to hash.
     */
    hashKey(key: unknown): string;
    /**
     * Get a value for a given hash key if it exists. Otherwise, get retrive a value with a given function and then store that value in the cache.
     * @param hash - The hash key.
     * @param apiRequest - function that returns a new value for a given key if it doesn't exist in the cache.
     */
    getOrElse(hash: string, apiRequest: () => V | Promise<V>): Promise<V>;
    /**
     * Get a value for a given hash key.
     * @param hash - The hash key.
     * @throws if the value does not exist for the give hash.
     */
    get(hash: string): Promise<V>;
    /**
     * Get a value for a given hash key.
     * @param hash - The hash key.
     */
    getSafe(hash: string): Promise<V | undefined>;
    /**
     * Returns whether a value exists for a given key.
     * @param hash - The hash key.
     */
    has(hash: string): Promise<boolean>;
    /**
     * Set a given value for a given hash key.
     * @param hash - The hash key.
     * @param value - The value to store.
     * @throws if the value does not exist for the give hash.
     */
    put(hash: string, value: V): Promise<V>;
    /**
     * Delete a given value for a given hash key if it exists.
     * @param hash - The hash key.
     */
    delete(hash: string): Promise<void>;
    /**
     * Delete all expired data.
     */
    deleteExpired(): Promise<this>;
    /**
     * Delete all cached API responses.
     */
    deleteEverything(): Promise<void>;
    /**
     * Iterate over all [key, value] pairs in the cache.
     */
    entries(): AsyncIterableIterator<[string, V]>;
    /**
     * Iterate over all keys in the cache.
     */
    keys(): AsyncIterableIterator<string>;
    /**
     * Iterate over all values in the cache.
     */
    values(): AsyncIterableIterator<V>;
    /**
     * Get the number of entries in the cache.
     */
    size(): Promise<number>;
    /**
     * Output all events to the console.
     */
    protected logAllEvents(): void;
    /**
     * Deletes a value from the cache if it is expired.
     * @param hash - The hash key.
     * @param serialized - The serialized value.
     * @throws if the value is expired.
     */
    protected ensureNotExpired(hash: string, serialized: string): Promise<void>;
    /**
     * Check if a still raw serialized value string is expired.
     * @param serialized - The serialized value.
     */
    protected isExpired(serialized: string): boolean;
    /**
     * Custom JSON stringify function that prepends a timestamp to the stringified object.
     * @param value - The value to serialize.
     */
    protected serializeValue(value: V): string;
    /**
     * Parse the timestamp part of a raw serialized value string from the database.
     * @param serialized - The serialized value.
     */
    protected parseSerializedTimestamp(serialized: string): number;
    /**
     * Parse the json part of a raw serialized value string from the database.
     * @param serialized - The serialized value.
     */
    protected parseSerializedValue(serialized: string): V;
    /**
     * Shorthand for try/catch block with error-handling
     * Wrap a function in a try catch block and emit an error event if an error occurs.
     * @param fn - The function to wrap.
     */
    protected orThrow<T>(fn: () => T | Promise<T>): T | Promise<T>;
    /**
     * Emit an event but this automatically adds 'this' as an extra argument.
     * @param eventName - The event name.
     */
    protected emit<T>(eventName: string, arg: T): T;
}
//# sourceMappingURL=ApiReponseCache.d.ts.map