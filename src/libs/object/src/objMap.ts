/**
 * Similar to Array.prototype.map, but for objects.
 * @param object The object to iterate over.
 * @param callback The function to call for each key-value pair.
 * @param getKeys A function that returns the keys of the object.
 */
export function objMap<T>(
  object: Record<string, T>,
  callback: (value: T, key: string) => T,
  getKeys: (obj: typeof object) => Iterable<string> = Object.keys,
): Record<string, T> {
  const result: Record<string, T> = {}
  for (const key of getKeys(object)) {
    result[key] = callback(object[key], key)
  }
  return result
}
