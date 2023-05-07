/**
 * Similar to Array.prototype.map, but for object keys - not values.
 * @param object The object to iterate over.
 * @param callback The function to call for each key-value pair.
 * @param getKeys A function that returns the keys of the object.
 */

export function objMapKeys<T>(
  object: Record<string, T>,
  callback: (key: string, value: T) => string,
  getKeys: (obj: typeof object) => Iterable<string> = Object.keys,
): Record<string, T> {
  const result: Record<string, T> = {}
  for (const key of getKeys(object)) {
    result[callback(key, object[key])] = object[key]
  }
  return result
}
