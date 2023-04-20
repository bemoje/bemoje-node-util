import { regexEscapeString } from '../../regex'

/**
 * Inserts provided strings before and after a string.
 * @param input - input string
 * @param left - string to place before
 * @param right - string to place after
 * @param flags - regex flags
 */
export function strUnwrap(input: string, left: string, right: string, flags = ''): string {
  return input
    .replace(new RegExp('^' + regexEscapeString(left), flags), '')
    .replace(new RegExp(regexEscapeString(right) + '$', flags), '')
}
