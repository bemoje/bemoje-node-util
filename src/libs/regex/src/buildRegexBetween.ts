import { strRemoveDuplicateChars } from '../../string/src/strRemoveDuplicateChars'
import { regexEscapeString } from './regexEscapeString'

/**
 * Builds a regex that matches a string between two strings. Supports regex instead of string.
 * @param left - string or regex to match before
 * @param right - string or regex to match after
 * @param flags - regex flags - 'g' and 's' are always added to whatever flags are passed.
 * @example
 * ```ts
 * const regex = buildRegexBetween(/a/, /b/)
 * 'abc'.match(regex)?.groups?.mid // 'c'
 * ```
 */
export function buildRegexBetween(
  left: string | RegExp,
  right: string | RegExp,
  flags?: string,
): RegExp {
  left = typeof left === 'string' ? regexEscapeString(left) : left.source
  right = typeof right === 'string' ? regexEscapeString(right) : right.source
  flags = flags ? strRemoveDuplicateChars('gs' + flags) : 'gs'
  return new RegExp(`(?<left>${left})(?<mid>.*?)(?=${right})(?<right>${right})`, flags)
}
