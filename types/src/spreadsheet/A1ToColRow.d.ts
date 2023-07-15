/**
 * Converts an A1 notation string to a column-row pair.
 * @param A1 The A1 notation string to convert.
 * @param - Whether to return zero-indexed values.
 * @param zeroIndexed Optional. If true, the returned indices will be zero-based. Default is false.
 * @returns An array where the first element is the column index and the second element is the row index.
 * @throws If the A1 string is invalid.
 * @example ```ts
 * //=> [1, 1]
 * A1ToColRow('B2', true);
 * //=> [1, 1]
 * ```
 */
export declare function A1ToColRow(A1: string, zeroIndexed?: boolean): number[];
//# sourceMappingURL=A1ToColRow.d.ts.map