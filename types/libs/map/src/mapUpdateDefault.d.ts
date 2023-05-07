/**
 * For a given map, set a default value if the key is not present, then updates the value now definitely at key.
 * @param map - map to get value from
 * @param key - key to get value for
 * @param defaultValue - default value to set if key is not present
 * @param fun - function to update value with
 * @example
 * ```js
 * const m = new Map([
 *   ['a', 1],
 *   ['b', 2],
 *   ['c', 2],
 * ])
 * for (const key of [...m.keys(), 'd', 'e']) {
 *   mapUpdateDefault(m, key, 0, (v) => v + 1)
 * }
 * console.log(m)
 * //=> Map(5) { 'a' => 2, 'b' => 3, 'c' => 3, 'd' => 1, 'e' => 1 }
 * ```
 */
export declare function mapUpdateDefault<K, V>(map: Map<K, V>, key: K, defaultValue: V, fun: (value: V) => V): Map<K, V>;
//# sourceMappingURL=mapUpdateDefault.d.ts.map