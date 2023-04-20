/**
 * Updates a value in a map, if the key is present.
 * @param map - map to get value from
 * @param key - key to get value for
 * @param fun - function to update value with
 * @example
 * ```ts
 * const map = new Map<string, number>()
 * map.set('key', 1)
 * mapUpdate(map, 'key', (value) => value! + 1) // Output: Map { 'key' => 2 }
 * mapUpdate(map, 'nonexistentKey', (value) => value! + 1) // Output: Map {}
 * ```
 */
export declare function mapUpdate<K, V>(map: Map<K, V>, key: K, fun: (value?: V) => V): Map<K, V>;
//# sourceMappingURL=mapUpdate.d.ts.map