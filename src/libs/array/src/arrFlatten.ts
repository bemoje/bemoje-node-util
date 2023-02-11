/**
 * Flattens the passed array recursively.
 * @param input - the array to flatten
 */

export function arrFlatten(input: Array<any>): Array<any> {
  return input.reduce((accum, elem) => {
    if (Array.isArray(elem)) {
      const flattened = arrFlatten(elem);
      for (let i = 0; i < flattened.length; i++) {
        accum.push(flattened[i]);
      }
    } else {
      accum.push(elem);
    }
    return accum;
  }, []);
}
