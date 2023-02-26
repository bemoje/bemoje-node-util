/**
 * Mutably assigns the values of source array to target array. Lengths will also be identical.
 */
export function arrAssignFrom<T>(target: Array<T>, source: Array<T>): Array<T> {
  target.splice(source.length);
  for (let i = 0; i < source.length; i++) {
    target[i] = source[i];
  }
  return target;
}
