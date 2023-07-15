/**
 * Converts an array of bytes to an integer.
 * @throws If the bytes are invalid or the resulting integer is greater than 256^5.
 * @param bytes The array of bytes to convert.
 * @example ```ts
 * const bytes = [255, 1, 2, 3, 4, 5];
 * bytesToInt(bytes);
 * //=> 1099511627776
 * ```
 */
export declare function bytesToInt(bytes: number[]): number;
//# sourceMappingURL=bytesToInt.d.ts.map