import { strRemoveDuplicateChars } from '../../string/src/strRemoveDuplicateChars'
import { strSortChars } from '../../string/src/strSortChars'

/**
 * Takes a string of RegExp flags and returns a string guaranteed to be valid.
 * @param flags - string of RegExp flags
 * @example
 * ```ts
 * regexFixFlags('ggim') // 'gim'
 * regexFixFlags('?gim*') // 'gim'
 * ```
 */
export function regexFixFlags(flags: string): string {
  if (!flags) return flags
  return strSortChars(strRemoveDuplicateChars(flags).replace(/[^gimsuy]/gi, ''))
}
