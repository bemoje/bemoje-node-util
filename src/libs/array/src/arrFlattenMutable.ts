import { arrAssignFrom } from './arrAssignFrom'
import { arrFlatten } from './arrFlatten'

/**
 * Flattens the passed array recursively. Mutable.
 * @param input - the array to flatten
 * @param maxDepth - the maximum recursive flattening depth.
 */
export function arrFlattenMutable<T>(input: Array<any>, maxDepth = Number.MAX_SAFE_INTEGER): Array<T> {
  return arrAssignFrom(input, arrFlatten(input, maxDepth))
}
