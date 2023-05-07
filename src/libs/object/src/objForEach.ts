/**
 * Similar to Array.prototype.forEach, but for objects.
 * @param object The object to iterate over.
 * @param callback The function to call for each key-value pair.
 * @param getKeys A function that returns the keys of the object.
 */
export function objForEach<T>(
  object: Record<string, T>,
  callback: (value: T, key: string) => void,
  getKeys: (obj: typeof object) => Iterable<string> = Object.keys,
): typeof object {
  for (const key of getKeys(object)) {
    callback(object[key], key)
  }
  return object
}
