/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * @param min The lower bound integer.
 * @param max The upper bound integer.
 */
export function randomIntBetween(min: number, max: number): number {
  if (!Number.isInteger(min)) throw new Error(`min must be an integer. Got ${min}`);
  if (!Number.isInteger(max)) throw new Error(`max must be an integer. Got ${max}`);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
