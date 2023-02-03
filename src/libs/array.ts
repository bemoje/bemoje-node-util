export type Callback = (value: any, index: number, array: Array<any>) => void;
export type Predicate = (
  value: any,
  index: number,
  array: Array<any>,
) => boolean;

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
    input[i] = f(input[i], i, input);
  }
  return input;
}

/**
 * Uses Array.prototype.sort but sorts numbers.
 * @param input - input array
 */
export function arrSortNumeric(input: Array<any>): Array<any> {
  return input.sort((a, b) => {
    return a - b;
  });
}

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

/**
 * Shuffle items in an array in-place. Guarantees that the array has changes.
 * @param input - The array to shuffle.
 */
export function arrShuffle(input: Array<any>): Array<any> {
  const original = input.slice();
  let equal = true;
  while (equal) {
    for (let i = 0, len = input.length; i < len; i++) {
      const newIndex = Math.floor(Math.random() * len);
      arrSwap(input, i, newIndex);
    }
    equal = arrShallowEquals(input, original);
  }
  return input;
}

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

/**
 * Returns true if the predicate is satisfied for every element of the passed array; otherwise false.
 * @param input - The array
 * @param  predicate - A predicate callback function
 */
export function arrEvery(input: Array<any>, predicate: Predicate): boolean {
  for (let i = 0, len = input.length; i < len; i++) {
    if (predicate(input[i], i, input) === false) {
      return false;
    }
  }
  return true;
}

/**
 * Check whether a condition is true for any element of an array. The condition check is in the form of a callback.
 * @param input - The array
 * @param  predicate - A predicate callback function
 */
export function arrSome(input: Array<any>, predicate: Predicate): boolean {
  for (let i = 0, len = input.length; i < len; i++) {
    if (predicate(input[i], i, input) === true) {
      return true;
    }
  }
  return false;
}

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
