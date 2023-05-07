import { strIsLowerCase } from './strIsLowerCase'
import { strIsUpperCase } from './strIsUpperCase'
import { isNumericString } from '../../validation/src/isNumericString'

function isCamelCaseWordBreakIndex(word: string, index: number) {
  return (
    strIsLowerCase(word[index - 1]) &&
    strIsUpperCase(word[index]) &&
    !isNumericString(word[index - 1]) &&
    !isNumericString(word[index])
  )
}

/**
 * Returns an array of words in the string
 * @param input - input string
 * @example
 * ```js
 * strSplitCamelCase('someCamelCase')
 * //=> ['some', 'Camel', 'Case']
 * ```
 */
export function strSplitCamelCase(word: string): Array<string> {
  const result = []
  const lastCharIndex = word.length - 1
  let lastCamelCaseBreakIndex = 0
  let foundCamelCase = false
  for (let i = 1; i < word.length; i++) {
    if (foundCamelCase && i === lastCharIndex) {
      // last char
      const sub = word.substring(lastCamelCaseBreakIndex)
      if (sub) result.push(sub)
      continue
    }
    if (isCamelCaseWordBreakIndex(word, i)) {
      const sub = word.substring(lastCamelCaseBreakIndex, i)
      if (!sub) continue
      result.push(sub)
      lastCamelCaseBreakIndex = i
      foundCamelCase = true
    }
  }
  // if no splits needed, just return the word as it was
  if (!foundCamelCase) {
    result.push(word)
  }
  return result
}
