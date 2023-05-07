import type { Predicate } from '../../interfaces'

/**
 * Check whether a condition is true for any element of an array. The condition check is in the form of a callback.
 * @param input - The array
 * @param  predicate - A predicate callback function
 */

export function arrSome<T>(input: Array<T>, predicate: Predicate<T>): boolean {
  for (let i = 0, len = input.length; i < len; i++) {
    if (predicate(input[i], i, input) === true) {
      return true
    }
  }
  return false
}
