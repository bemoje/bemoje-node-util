/**
 * Converts a column number to a column letter (e.g. 1 => 'A', 27 => 'AA').
 * @param col The column number to convert. Must be a positive integer.
 * @param zeroIndexed Optional. Whether the column number is zero-indexed. Defaults to false.
 * @throws If `col` is not an integer.
 * @throws If `col` is less than 1.
 * @returns The column letter corresponding to the column number.
 * @example ```ts
 * colToLetter(1);;
 * //=> 'A'
 * colToLetter(27);;
 * //=> 'AA'
 * colToLetter(1, true);;
 * //=> 'B'
 * ```
 */
export declare function colToLetter(col: number, zeroIndexed?: boolean): string;
//# sourceMappingURL=colToLetter.d.ts.map