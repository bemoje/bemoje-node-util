/**
 * Returns an array of all valid flags for a regular expression.
 * @example
 * ```ts
 * regexValidFlags() //=> ['g', 'i', 'm', 's', 'u', 'y']
 * ```
 */
export function regexValidFlags(): Array<string> {
  return ['g', 'i', 'm', 's', 'u', 'y']
}
