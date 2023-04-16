import { split } from 'sentence-splitter'
import { regRepeatingWhiteSpace } from '../../regex'

/**
 * Intelligently split a string into sentences. Uses AST parsing to determine sentence boundaries.
 * @param text Text to split into sentences
 */
export function strToSentences(text: string): Array<string> {
  return split(text)
    .map((node) => {
      const [start, end] = node.range
      return text.substring(start, end).replace(regRepeatingWhiteSpace, ' ').trim()
    })
    .filter((s) => !!s)
}
