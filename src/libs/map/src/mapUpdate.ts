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
export function mapUpdate<K, V>(map: Map<K, V>, key: K, fun: (value?: V) => V): Map<K, V> {
  const value = map.get(key)
  if (value === undefined) return map
  map.set(key, fun(value))
  return map
}
