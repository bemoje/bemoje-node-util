/**
 * Swap array elements in place. Runtime: O(1)
 * @param input to be modified
 * @param from index of the first element
 * @param to index of the second element
 */

export function arrSwap(
  input: Array<any>,
  from: number,
  to: number,
): Array<any> {
  [input[from], input[to]] = [input[to], input[from]];
  return input;
}
