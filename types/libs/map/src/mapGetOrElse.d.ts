/**
 * Returns a value from a map, while setting a given default value before returning it, if the key is not present.
 * @param map - map to get value from
 * @param key - key to get value for
 * @param callback - callback to set the value if key is not present
 * @example
 * ```ts
 * const map = new Map<string, number>()
 * map.set('key', 1)
 * mapGetOrElse(map, 'nonexistentKey', () => 2) // Output: 2
 * ```
 */
export declare function mapGetOrElse<K, V>(map: Map<K, V> | WeakMap<any, V>, key: K, callback: (key: K) => V): V;
//# sourceMappingURL=mapGetOrElse.d.ts.map