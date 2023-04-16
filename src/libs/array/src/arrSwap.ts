/**
 * Swap array elements in place. Runtime: O(1)
 * @param input to be modified
 * @param from index of the first element
 * @param to index of the second element
 */
export function arrSwap<T>(input: Array<T>, from: number, to: number): Array<T> {
  // eslint-disable-next-line @typescript-eslint/no-extra-semi
  ;[input[from], input[to]] = [input[to], input[from]]
  return input
}
