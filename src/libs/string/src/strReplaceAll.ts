import { regexEscapeString } from '../../regex/src/regexEscapeString'

/**
 * In a given string, replace all occurances of a given search string with a given replacement string.
 * @param input input string
 * @param replace string to find a replace
 * @param replaceWith string to replace matches with
 * @param flags RegExp flags as single string.
 */
export function strReplaceAll(input: string, replace: string, replaceWith: string, flags = 'g'): string {
  return input.replace(new RegExp(regexEscapeString(replace), flags), replaceWith)
}
