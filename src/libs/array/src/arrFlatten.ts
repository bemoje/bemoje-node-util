import type { NestedArray } from '../../interfaces'

/**
 * Flattens the passed array recursively to a specified depth. Immutable.
 * @param input - the array to flatten
 * @param maxDepth - the maximum recursive flattening depth.
 */
export function arrFlatten<T>(input: NestedArray<T>, maxDepth = Number.MAX_SAFE_INTEGER): Array<T> {
  const accum: T[] = []
  function recurse(arr: NestedArray<T>, depth: number) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && depth < maxDepth) {
        recurse(arr[i] as T[], depth + 1)
      } else {
        accum.push(arr[i] as T)
      }
    }
  }
  recurse(input, 0)
  return accum
}
