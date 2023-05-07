/**
 * Similar to Array.prototype.map, but for objects - and mutable! This changes the original object.
 * @param object The object to iterate over.
 * @param callback The function to call for each key-value pair.
 * @param getKeys A function that returns the keys of the object.
 */

export function objMapMutable<T>(
  object: Record<string, T>,
  callback: (value: T, key: string) => T,
  getKeys: (obj: typeof object) => Iterable<string> = Object.keys,
): typeof object {
  for (const key of getKeys(object)) {
    object[key] = callback(object[key], key)
  }
  return object
}
