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
        logAllEvents: undefined;
    };
    /**
     * Create a new instance.
     * @param options - Options for creating a new instance.
     * @emits options - the options used to create the instance.
     */
    constructor(options: IApiResponseCacheOptions);
    /**
     * Hash any type of key to a base64 string, using the SHA1 algorithm.
     * @param key - The key to hash.
     */
    hashKey(key: any): string;
    /**
     * Get a value for a given hash key if it exists.
     * If the does not exist, returns a value from the api by invoking the provided function and then stores that value in the cache.
     * @param hash - The hash key.
     * @param apiRequest - function that returns a new value for a given key if it doesn't exist in the cache.
     * @emits hit - if the value exists in the cache.
     * @emits miss - if the value does not exist in the cache.
     */
    getOrElse(hash: string, apiRequest: () => V | Promise<V>): Promise<V>;
    /**
     * Get a value for a given hash key.
     * @param hash - The hash key.
     * @emits error - if the value does not exist for the give hash.
     * @emits get - if the value exists for the given hash.
     */
    get(hash: string): Promise<V>;
    /**
     * Get a value for a given hash key or undefined if it does not exist or an error occurs.
     * @param hash - The hash key.
     * @emits get - if the value exists for the given hash.
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
     * @emits put - if insertion succeeds.
     * @emits error - if insertion fails.
     */
    put(hash: string, value: V): Promise<V>;
    /**
     * Delete a given value for a given hash key if it exists.
     * @remarks No error is thrown if no value exists for the given hash.
     * @param hash - The hash key.
     * @emits error - if deletion fails.
     * @emits delete - if deletion succeeds.
     */
    delete(hash: string): Promise<void>;
    /**
     * Delete all expired data.
     */
    deleteExpired(): Promise<this>;
    /**
     * Delete all cached API responses.
     * @emits delete - if deletion succeeds.
     */
    deleteEverything(): Promise<void>;
    /**
     * Iterate over all [key, value] pairs in the cache.
     * @remarks This data entries are expired, they are deleted and not yielded.
     * @emits error - if iteration encounters an error.
     */
    entries(): AsyncIterableIterator<[string, V]>;
    /**
     * Iterate over all keys in the cache.
     * @emits error - if iteration encounters an error.
     */
    keys(): AsyncIterableIterator<string>;
    /**
     * Iterate over all values in the cache.
     * @emits error - if iteration encounters an error.
     */
    values(): AsyncIterableIterator<V>;
    /**
     * Get the number of entries in the cache.
     */
    size(): Promise<number>;
    /**
     * Deletes a value from the cache if it is expired.
     * @param hash - The hash key.
     * @param serialized - The serialized value.
     * @emits expired - if the value is expired.
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
     * Shorthand for try/catch block with error-handling.
     * Wrap a function call in a try catch block and emit an error event if an error occurs.
     * @param fn - The function to wrap.
     * @emits error - if the provided function throws an error.
     * @returns The return value of the provided function.
     */
    protected orThrow<T>(fn: () => T | Promise<T>): T | Promise<T>;
    /**
     * Emit an event but this automatically adds 'this' as an extra argument.
     * @param eventName - The event name.
     */
    protected emit<T>(eventName: string, arg: T): T;
    /**
     * Output all events to the console.
     */
    protected logAllEvents(): void;
    /**
     * Output all 'warn' and 'error' events to the console.
     */
    protected logWarnErrorEvents(): void;
}
//# sourceMappingURL=ApiReponseCache.d.ts.map