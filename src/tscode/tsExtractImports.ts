import { ITsExtractImportsResult } from './types/ITsExtractImportsResult'

/**
 * This function extracts all import statements from a given TypeScript code string.
 * @param code The TypeScript code as a string from which to extract import statements.
 * @returns An array of import statements.
 */
export function tsExtractImports(code: string): ITsExtractImportsResult[] {
  const isFirstLine = /^import /
  const isFirstLineInMulti = /\{\s*$/
  const isLastLineInMulti = /^\} from '/
  const result: ITsExtractImportsResult[] = []
  let isMulti = false
  let impLines = []
  const lines = code.split(/\r?\n/)
  for (let l = 0; l < lines.length; l++) {
    const line = lines[l]
    if (isFirstLine.test(line)) {
      if (isFirstLineInMulti.test(line)) {
        impLines.push(line)
        isMulti = true
      } else {
        result.push({
          start: l,
          end: l,
          match: line,
        })
      }
    } else if (isMulti) {
      impLines.push(line)
      if (isLastLineInMulti.test(line)) {
        result.push({
          start: l - impLines.length + 1,
          end: l,
          match: impLines.join('\n'),
        })
        impLines = []
        isMulti = false
      }
    }
  }
  return result
}
