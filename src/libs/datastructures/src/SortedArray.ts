import { sort as timsort } from 'timsort';
import { Comparator, compareString, compareNumber, compareNumeric } from '../../sort';

export interface ISortedArrayOptions<T> {
  data?: Iterable<T>;
  compare?: Comparator;
  allowDuplicates?: boolean;
}

export class SortedArray<T> extends Array {
  private compare: Comparator = compareString;
  private compareFound = false;
  private allowDuplicates = true;

  constructor(options: ISortedArrayOptions<T> = {}) {
    super();
    Object.defineProperty(this, 'compare', { enumerable: false });
    Object.defineProperty(this, 'compareFound', { enumerable: false });
    Object.defineProperty(this, 'allowDuplicates', { enumerable: false });
    if (options.compare) {
      this.compare = options.compare;
      this.compareFound = true;
    }
    if (options.data) {
      for (const e of options.data) {
        this.push(e);
      }
      if (!this.compareFound && this.length && typeof this[0] !== 'string') {
        this.compare = compareNumeric;
        this.compareFound = true;
      }
      timsort(this, this.compare);
    }
    if (options.allowDuplicates === false) {
      this.allowDuplicates = false;
      this.unique();
    }
  }

  /**
   * Convert to a normal Array instance
   */
  public toArray(): Array<T> {
    return Array.from(this);
  }

  public add(element: T): SortedArray<T> {
    if (!this.compareFound) {
      if (typeof element !== 'string') {
        this.compare = compareNumeric;
        this.compareFound = true;
      }
    }
    if (this.length === 0) {
      this.push(element);
      return this;
    }
    const [index, foundIdentical] = this.insertionIndex(element);
    if (foundIdentical && !this.allowDuplicates) return this;
    this.splice(index, 0, element);
    return this;
  }

  /**
   * Add elements to the sorted array.
   * @param elements - The elements to add to the sorted array
   */
  public addMany(...elements: T[]): SortedArray<T> {
    if (elements.length === 0) return this;
    for (const e of elements) {
      this.add(e);
    }
    return this;
  }

  /**
   * Remove all duplicate elements in the sorted array, leaving only unique values. Equality is determined by the compare function.
   */
  public unique(): SortedArray<T> {
    let len = this.length;
    if (len <= 1) return this;
    for (let prev, curr, i = 1; i < len; i++) {
      prev = this[i - 1];
      curr = this[i];
      if (this.compare(prev, curr) === 0) {
        this.splice(i, 1);
        len--;
        i--;
      }
    }
    return this;
  }

  /**
   * Returns a tuple containing the index of where to add an element to keep the array sorted and also whether an identical element was found.
   * @param element - The element for which to find its insertion index
   */
  public insertionIndex(element: T): [number, boolean] {
    if (this.length === 0) return [0, false];
    let low = 0;
    let high = this.length;
    while (low < high) {
      const mid = (low + high) >>> 1;
      const order = this.compare(this[mid], element);
      if (order === 0) return [mid, true];
      if (order < 0) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return [low, false];
  }

  /**
   * Returns a tuple containing the first index of where to add an element to keep the array sorted and also whether an identical element was found.
   * @param element - The element for which to find its insertion index
   */
  public firstInsertionIndex(element: T): [number, boolean] {
    const [index, foundIdentical] = this.insertionIndex(element);
    if (!foundIdentical) return [index, foundIdentical];
    let i = index - 1;
    while (i >= 0) {
      if (this.compare(this[i], element) !== 0) {
        return [i + 1, foundIdentical];
      }
      i--;
    }
    return [0, foundIdentical];
  }

  /**
   * Returns a tuple containing the last index of where to add an element to keep the array sorted and also whether an identical element was found.
   * @param element - The element for which to find its insertion index
   */
  public lastInsertionIndex(element: T): [number, boolean] {
    const [index, foundIdentical] = this.insertionIndex(element);
    if (!foundIdentical) return [index, foundIdentical];
    let i = index + 1;
    while (i < this.length) {
      if (this.compare(this[i], element) !== 0) {
        return [i, foundIdentical];
      }
      i++;
    }
    return [this.length, foundIdentical];
  }

  /**
   * Returns the index of the first element found that is determined equal by the compare function.
   * @param element - The element to find
   */
  public indexOfCompare(element: T): number {
    if (this.length === 0) return -1;
    if (this.length === 1) return this.compare(this[0], element) === 0 ? 0 : -1;
    const [index, foundIdentical] = this.insertionIndex(element);
    return foundIdentical ? index : -1;
  }

  /**
   * Returns the index of the first element that is determined equal by the compare function.
   * @param element - The element to find
   */
  public firstIndexOfCompare(element: T): number {
    if (this.length === 0) return -1;
    if (this.length === 1) return this.compare(this[0], element) === 0 ? 0 : -1;
    const [index, foundIdentical] = this.firstInsertionIndex(element);
    return foundIdentical ? index : -1;
  }

  /**
   * Returns the index of the last element that is determined equal by the compare function.
   * @param element - The element to find
   */
  public lastIndexOfCompare(element: T): number {
    if (this.length === 0) return -1;
    if (this.length === 1) return this.compare(this[0], element) === 0 ? 0 : -1;
    const [index, foundIdentical] = this.lastInsertionIndex(element);
    return foundIdentical ? index - 1 : -1;
  }

  /**
   * Returns all indices at which element exists. Equality is determined by the compare function.
   * @param element - The element to find
   */
  public indicesOfCompare(element: T): Array<number> {
    const index = this.indexOfCompare(element);
    if (index === -1) return [];
    const result: Array<number> = [];
    if (!this.allowDuplicates) return result;
    let i = index - 1;
    while (i >= 0) {
      if (this.compare(this[i], element) === 0) {
        result.push(i);
      } else {
        break;
      }
      i--;
    }
    result.push(index);
    i = index + 1;
    while (i < this.length) {
      if (this.compare(this[i], element) === 0) {
        result.push(i);
      } else {
        break;
      }
      i++;
    }
    result.sort(compareNumber);
    return result;
  }

  /**
   * Returns the interestion of this and another sorted array.
   * @param sorted - another sorted array with which to find intersections
   */
  public intersection(sorted: Array<T>): Array<T> {
    const result = [];
    let i1 = 0;
    let i2 = 0;
    // if a1 curr < a2 curr, loop a1 elems until a1 curr >= a2 curr
    while (i1 < this.length && i2 < sorted.length) {
      if (this.compare(this[i1], sorted[i2]) < 0) {
        i1++;
      } else if (this.compare(this[i1], sorted[i2]) === 0) {
        result.push(this[i1]);
        i1++;
        i2++;
      } else {
        i2++;
      }
    }
    return result;
  }
}
