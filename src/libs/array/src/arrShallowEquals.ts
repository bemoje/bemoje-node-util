/**
 * Returns whether or not two arrays shallow equal each other.
 * @param input1 first array
 * @param input2 second array
 */

export function arrShallowEquals(
  input1: Array<any>,
  input2: Array<any>,
): boolean {
  if (input1.length !== input2.length) return false;
  for (let i = 0; i < input1.length; i++) {
    if (input1[i] !== input2[i]) {
      return false;
    }
  }
  return true;
}
