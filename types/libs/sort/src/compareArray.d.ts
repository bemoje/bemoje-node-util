import type { Comparator } from '../../interfaces';
/**
 * Returns a given comparator as an array compatible comparator. Behaves as if the array to sort was recursively flattened.
 * @param compareAt shallow compare function that compares two elements of an array
 * @param descending whether the input comparator sorts in descending order
 */
export declare function compareArray<T>(compareAt: Comparator, descending?: boolean): Comparator;
//# sourceMappingURL=compareArray.d.ts.map