/**
 * Returns the string as is, except the first character is capitalized.
 * @param string The string to capitalize the first character of.
 */
export function strFirstCharToUpperCase(string: string): string {
  return string.charAt(0).toUpperCase() + string.substring(1)
}
