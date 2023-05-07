/**
 * Similar to Array.prototype.filter, but for objects.
 * @param object The object to iterate over.
 * @param callback The function to call for each key-value pair.
 * @param getKeys A function that returns the keys of the object.
 */

export function objFilter<T>(
  object: Record<string, T>,
  callback: (value: T, key: string) => boolean,
  getKeys: (obj: typeof object) => Iterable<string> = Object.keys,
): Record<string, T> {
  const result: Record<string, T> = {}
  for (const key of getKeys(object)) {
    if (callback(object[key], key)) {
      result[key] = object[key]
    }
  }
  return result
}
