/**
 * Splits a string by a delimiter and trims each of the resulting strings.
 */
export function strSplitAndTrim(
  string: string,
  delimiter: string,
  removeEmptyLines = false,
): string[] {
  const lines = string.split(delimiter).map((s) => s.trim())
  return removeEmptyLines ? lines.filter((s) => !!s) : lines
}
