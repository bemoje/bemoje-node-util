/**
 * Flattens the passed array recursively to a specified depth. Immutable.
 * @param input - the array to flatten
 * @param maxDepth - the maximum recursive flattening depth.
 */
export function arrFlatten<T>(input: Array<any>, maxDepth = Number.MAX_SAFE_INTEGER): Array<T> {
  const accum = []
  ;(function recurse(arr = input, depth = 0) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && depth < maxDepth) {
        recurse(arr[i], depth + 1)
      } else {
        accum.push(arr[i])
      }
    }
  })()
  return accum
}
