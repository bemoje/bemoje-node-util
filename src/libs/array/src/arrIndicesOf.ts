/**
 * Returns all indexes at which an element is found.
 * @param input - The array to search
 * @param element - The element to find
 */

export function arrIndicesOf<T>(input: Array<T>, element: T): Array<number> {
  const result: Array<number> = []
  for (let i = 0; i < input.length; i++) {
    if (element === input[i]) {
      result.push(i)
    }
  }
  return result
}
