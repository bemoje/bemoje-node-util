/**
 * Type that represents a positive integer less than a specified number.
 * @typeparam L - The upper limit for the integer. Must be a number.
 * @typeparam T - An array type used for internal recursion. Defaults to an empty array.
 * @typeparam Z - A type used for internal recursion. Defaults to 0.
 * @returns The type will resolve to a positive integer less than L. If L is 0, the type will resolve to 0.
 * @remarks
 * This type uses TypeScript's conditional types and recursive types to calculate the type. It starts with an empty array and keeps adding elements until the length of the array is equal to L. At each step, it checks if the length of the array is less than L. If it is, it continues the recursion. If it's not, it returns the length of the array as the type.
 */
export type PositiveIntegerLessThan<L extends number, T extends any[] = [], Z = 0> = T extends {
  length: L
}
  ? Z
  : PositiveIntegerLessThan<L, [...T, any], Z | T extends { length: infer L } ? L : never>
