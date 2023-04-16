import { arrEvery } from './arrEvery'

/**
 * Returns whether or not two arrays shallow equal each other.
 * @param input1 first array
 * @param input2 second array
 */
export function arrShallowEquals<T>(input1: Array<T>, input2: Array<T>): boolean {
  if (input1.length !== input2.length) return false
  return arrEvery(input1, (value, i) => value === input2[i])
}
