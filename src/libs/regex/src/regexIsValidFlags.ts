import { strRemoveDuplicateChars } from '../../string'

/**
 * Checks if a string is a valid regex flags string.
 * @example
 * ```ts
 * regexIsValidFlags('gim') // true
 * regexIsValidFlags('gmisuy') // false
 * ```
 */
export function regexIsValidFlags(flags: string): boolean {
  return /^[gimsuy]*$/.test(flags) && strRemoveDuplicateChars(flags).length === flags.length
}
