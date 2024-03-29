/**
 * Recursively traverses an object and invokes a callback function for every encountered non-object value.
 * The callback function is passed the non-object value and an array representing the path to the value.
 * @param node - The object to be traversed.
 * @param callback - The callback function to be invoked for every non-object value.
 * @example ```ts
 * const obj = { a: 1, b: { c: 2, d: [3, 4] } };
 * objWalk(obj, (value, path) => {
 *   console.log(`Path: ${path.join('.')}, Value: ${value}`);
 * });
 * // Output:
 * // Path: a, Value: 1
 * // Path: b.c, Value: 2
 * // Path: b.d[0], Value: 3
 * // Path: b.d[1], Value: 4
 * ```
 */
export declare function objWalk(node: Record<string, any>, callback: (value: any, path: string[]) => void): void;
//# sourceMappingURL=objWalk.d.ts.map