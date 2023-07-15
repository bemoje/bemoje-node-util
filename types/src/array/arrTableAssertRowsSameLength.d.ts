/**
 * Asserts that all rows in a 2D array have the same length.
 * @param - Optional array of headers to compare the row length against.
 * @throws If any row in the array has a different length than the others.
 * @param headers Optional. An array of headers. If provided, each row must have the same length as this array.
 * @typeparam T - The type of elements in the rows.
 * @param rows The 2D array to check.
 * @example ```ts
 *  const rows = [
 *    [1, 2, 3],
 *    [4, 5, 6],
 *    [7, 8, 9],
 *  ];
 *  arrTableAssertRowsSameLength(rows);
 *  //=> undefined
 *  const rowsWithDifferentLength = [
 *    [1, 2, 3],
 *    [4, 5],
 *    [7, 8, 9],
 *  ];
 *  arrTableAssertRowsSameLength(rowsWithDifferentLength);
 *  //=> Error: Expected 3 columns, got 2
 *  ```
 */
export declare function arrTableAssertRowsSameLength<T>(rows: T[][], headers?: string[]): void;
//# sourceMappingURL=arrTableAssertRowsSameLength.d.ts.map