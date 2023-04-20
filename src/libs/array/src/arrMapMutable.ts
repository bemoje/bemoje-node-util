import { Callback } from '../../../'

/**
 * Same as Array.prototype.map but performs operations in palce (not immutable).
 * @param input - input array
 * @param f - iterator
 * @example
 * ```js
 * expect(
 *   util.arrMapMutable([1, 2, 3, 4, 5], (value: number) => {
 *     return value + 1;
 *   }),
 * ).toStrictEqual([2, 3, 4, 5, 6]);
 * ```
 */

export function arrMapMutable(input: Array<any>, f: Callback): Array<any> {
  for (let i = 0; i < input.length; i++) {
    input[i] = f(input[i], i, input)
  }
  return input
}
