/**
 * Splits a string by a delimiter and trims each of the resulting strings.
 */
export function strSplitAndTrim(string: string, delimiter: string): string[] {
  return string.split(delimiter).map((s) => s.trim())
}
