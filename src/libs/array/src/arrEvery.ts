import { Predicate } from '../../array';

/**
 * Returns true if the predicate is satisfied for every element of the passed array; otherwise false.
 * @param input - The array
 * @param  predicate - A predicate callback function
 */

export function arrEvery<T>(input: Array<T>, predicate: Predicate): boolean {
  for (let i = 0, len = input.length; i < len; i++) {
    if (predicate(input[i], i, input) === false) {
      return false;
    }
  }
  return true;
}
