/**
 * Returns all indexes at which an element is found.
 * @param input - The array to search
 * @param element - The element to find
 */

export function arrIndexesOf(input: Array<any>, element: any): Array<number> {
  return input.reduce((accum, elem, i) => {
    if (elem === element) {
      accum.push(i);
    }
    return accum;
  }, []);
}
