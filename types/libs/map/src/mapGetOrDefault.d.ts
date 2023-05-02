/**
 * Returns a value from a map, while setting a given default value before returning it, if the key is not present.
 * @param map - map to get value from
 * @param key - key to get value for
 * @param defaultValue - default value to set if key is not present
 * @example
 * ```ts
 * const map = new Map<string, number>()
 * map.set('key', 1)
 * mapGetOrDefault(map, 'key', 2) // Output: 1
 * mapGetOrDefault(map, 'nonexistentKey', 2) // Output: 2
 * ```
 */
export declare function mapGetOrDefault<K, V>(map: Map<K, V> | WeakMap<any, V>, key: K, defaultValue: V): V;
//# sourceMappingURL=mapGetOrDefault.d.ts.map