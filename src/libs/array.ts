/**
 * Same as Array.prototype.map but performs operations in palce (not immutable).
 */
export function arrMapMutable(
  input: Array<any>,
  f: (value: any, index: number, array: Array<any>) => void,
): Array<any> {
  for (let i = 0; i < input.length; i++) {
    input[i] = f(input[i], i, input);
  }
  return input;
}
