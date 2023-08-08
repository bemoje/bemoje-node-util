/**
 * Converts a column letter (e.g., A, B, C, ..., Z, AA, AB, ...) to a column number.
 * @param A The column letter to convert.
 * @param zeroIndexed Optional. If true, the function will return a zero-indexed column number. Default is false.
 * @throws Will throw an error if the input column letter is invalid.
 * @returns The column number corresponding to the input column letter.
 * @example ```ts
 * letterToCol('A');;
 * //=> 1
 * letterToCol('Z');;
 * //=> 26
 * letterToCol('AA');;
 * //=> 27
 * letterToCol('AB', true);;
 * //=> 27
 * ```
 */
export declare function letterToCol(A: string, zeroIndexed?: boolean): number;
//# sourceMappingURL=letterToCol.d.ts.map