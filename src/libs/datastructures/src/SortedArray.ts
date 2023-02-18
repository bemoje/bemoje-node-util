import { sort as timsort } from 'timsort';
import { compareAlphaNumeric } from '../../sort';

export type SortedArrayOptions<T> = {
  data?: Iterable<T>;
  compare?: (a: any, b: any) => number;
  allowDuplicates?: boolean;
};

export class SortedArray<T> extends Array {
  private compare: (a: any, b: any) => number = compareAlphaNumeric;
  private allowDuplicates = true;

  constructor(options: SortedArrayOptions<T> = {}) {
    super();
    if (options.compare) {
      this.compare = options.compare;
    }
    if (options.data) {
      for (const e of options.data) {
        this.push(e);
      }
      timsort(this, this.compare);
    }
    if (options.allowDuplicates === false) {
      this.allowDuplicates = false;
      this.unique();
    }
  }

  /**
   * Add elements to the sorted array.
   * @param elements - The elements to add to the sorted array
   */
  add(...elements: T[]): SortedArray<T> {
    if (elements.length === 0) return this;
    if (elements.length > 1) {
      for (let i = 0; i < elements.length; i++) {
        this.add(elements[i]);
      }
      return this;
    }

    const element = elements[0];
    if (this.length === 0) {
      super.push(element);
      return this;
    }
    const pos = this.insertionIndex(element);
    if (!this.allowDuplicates && this.compare(this[pos], element) === 0) {
      return this;
    }
    super.push(element);
    if (pos === this.length) return this;
    let i = this.length;
    while (i > pos) {
      this[i] = this[--i];
    }
    this[pos] = element;
    return this;
  }

  /**
   * Remove all duplicate elements in the sorted array, leaving only unique values. Equality is determined by the compare function.
   */
  unique(): SortedArray<T> {
    if (this.length < 2) return this;
    for (let prev, cur, i = 1, l = this.length; i < l; i++) {
      prev = this[i - 1];
      cur = this[i];
      if (this.compare(prev, cur) === 0) {
        this.splice(i, 1);
        l--;
        i--;
      }
    }
    return this;
  }

  /**
   * Returns the index of where to add an element to keep the array sorted.
   * @param element - The element for which to find its insertion index
   */
  insertionIndex(element: T): number {
    if (this.length === 0) return 0;
    let hi = this.length - 1;
    let lo = 0;
    let i, ord;
    while (hi >= lo) {
      i = ((hi + lo) / 2) >>> 0;
      ord = this.compare(this[i], element);
      if (ord < 0) {
        lo = i + 1;
      } else if (ord > 0) {
        hi = i - 1;
      } else {
        return i;
      }
    }
    return lo;
  }

  /**
   * Returns the index of the first element found that is determined equal by the compare function.
   * @param element - The element to find
   */
  indexOf(element: T): number {
    if (this.length === 0) return -1;
    if (this.length === 1) {
      if (this.compare(this[0], element) === 0) {
        return 0;
      } else {
        return -1;
      }
    }
    let hi = this.length - 1;
    let lo = 0;
    let i, ord;
    while (hi >= lo) {
      i = ((hi + lo) / 2) >>> 0;
      ord = this.compare(this[i], element);
      if (ord < 0) {
        lo = i + 1;
      } else if (ord > 0) {
        hi = i - 1;
      } else {
        return i;
      }
    }
    return -1;
  }

  /**
   * Returns all indices at which element exists. Equality is determined by the compare function.
   * @param element - The element to find
   */
  indicesOf(element: T): Array<number> {
    const lo = this.indexOf(element);
    if (lo === -1) return [];
    const result = [lo];
    if (!this.allowDuplicates) return result;
    for (let i = lo + 1; i < this.length; i++) {
      if (this.compare(this[i], element) === 0) {
        result.push(i);
      } else {
        break;
      }
    }
    for (let i = lo - 1; i >= 0; i--) {
      if (this.compare(this[i], element) === 0) {
        result.push(i);
      } else {
        break;
      }
    }
    return result;
  }

  /**
   * Returns the interestion of this and another sorted array.
   * @param sorted - another sorted array with which to find intersections
   */
  intersection(sorted: Array<T>): Array<T> {
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

  /**
   * Convert to a normal Array instance
   */
  toArray(): Array<T> {
    return Array.from(this);
  }
}
