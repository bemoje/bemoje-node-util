import { Predicate } from '../../interfaces/index'
import { arrAssignFrom } from '../src/arrAssignFrom'

/**
 * Same as Array.prototype.filter but performs operations in palce (not immutable).
 * @param input - input array
 * @param f - predicate
 */
export function arrFilterMutable<T>(input: Array<T>, f: Predicate<T>): Array<T> {
  return arrAssignFrom(input, input.filter(f))
}
