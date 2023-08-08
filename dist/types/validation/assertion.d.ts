/**
 * Type assertion that syntactically reads like prose.
 * It uses the name of the validation function to produce the error message.
 * @example ```ts
 * const isPositive = (n: number) => n >= 0
 *
 * assertion(-5, isPositive)
 * //=> throws TypeError: Expected 'isPositive' to be true for input: '-5'
 *
 * assertion(5, isPositive, false)
 * //=> throws TypeError: Expected 'isPositive' to be false for input: '5'
 * ```
 */
export declare function assertion<T>(value: T, validate: (value: T) => boolean, expectation?: boolean): T;
//# sourceMappingURL=assertion.d.ts.map