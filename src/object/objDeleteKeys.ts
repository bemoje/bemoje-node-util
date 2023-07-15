import { objFilter } from './objFilter'

/**
 * Deletes specified keys from an object. This function takes an object and an array of keys to be deleted from the object. It returns a new object with the specified keys removed.
 * @param obj The object from which keys are to be deleted.
 * @template V - The type of the values in the object.
 * @returns A new object with the specified keys deleted.
 * @param keys The keys to be deleted from the object.
 * @example ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * objDeleteKeys(obj, 'a', 'c');
 * //=> { b: 2 }
 * ```
 */
export function objDeleteKeys<V>(obj: Record<string, V>, ...keys: string[]): Record<string, V> {
  return objFilter<any>(obj, (_, key: string) => !keys.includes(key))
}
