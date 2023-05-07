import { strRepeat } from '../../string/src/strRepeat'
import { strLinesTrimRight } from '../../string/src/strLinesTrimRight'
import { strLinesRemoveEmpty } from '../../string/src/strLinesRemoveEmpty'

/**
 * Very crude, simple, fast code formatting of minified code.
 * Only works when input code:
 * - is minified
 * - is scoped with brackets
 * - expressions end with semicolon
 * - has no string literals containing semicolons or braces.
 * @param input The minified source code
 * @param indent The string to use as indentation
 */
export function strPrettifyMinifiedCode(input: string, indent = '  '): string {
  const getIndents = (n: number) => strRepeat('\t', n)
  const fixIndents = (s: string) => {
    return s.replace(/\t +/g, '\t').replace(/\t/g, indent)
  }
  let depth = 0
  const arr = Array.from(input).map((c) => {
    if (c === '{') {
      depth++
      return '{\n' + getIndents(depth)
    } else if (c === '}') {
      depth--
      return '\n' + getIndents(depth) + '}\n' + getIndents(depth)
    } else if (c === ';') {
      return ';\n' + getIndents(depth)
    } else return c
  })
  return fixIndents(strLinesTrimRight(strLinesRemoveEmpty(arr.join(''))))
}
