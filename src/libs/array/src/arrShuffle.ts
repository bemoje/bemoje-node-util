import { arrSwap } from './arrSwap';
import { arrShallowEquals } from './arrShallowEquals';

/**
 * Shuffle items in an array in-place. Guarantees that the array has changes.
 * @param input - The array to shuffle.
 */
export function arrShuffle<T>(input: Array<T>): Array<T> {
  const original = input.slice();
  let equal = true;
  while (equal) {
    for (let i = 0, len = input.length; i < len; i++) {
      const newIndex = Math.floor(Math.random() * len);
      arrSwap(input, i, newIndex);
    }
    equal = arrShallowEquals(input, original);
  }
  return input;
}
