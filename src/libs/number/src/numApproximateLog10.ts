const POW10 = [1, 1e1, 1e2, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9];

/**
 * Approximate the logarithm base 10 of a small integer.
 */
export function numApproximateLog10(n: number): number {
  if (!Number.isInteger(n) || n < 0 || n >= 1e10) {
    throw new Error(`Expected positive integer smaller than 10^10. Got ${n}`);
  }
  if (n < POW10[5]) {
    if (n < POW10[2]) {
      return n < POW10[1] ? 0 : 1;
    }
    if (n < POW10[4]) {
      return n < POW10[3] ? 2 : 3;
    }
    return 4;
  }
  if (n < POW10[7]) {
    return n < POW10[6] ? 5 : 6;
  }
  if (n < POW10[9]) {
    return n < POW10[8] ? 7 : 8;
  }
  return 9;
}
