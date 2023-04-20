import { split } from 'sentence-splitter'
import { regexLibrary } from '../../regex/'

/**
 * Intelligently split a string into sentences. Uses NLP with parse tree to determine sentence boundaries.
 * @param text Text to split into sentences
 * @example
 * ```ts
 * strToSentences('Hello world. How are you?') // ['Hello world.', 'How are you?']
 * ```
 */
export function strToSentences(text: string): Array<string> {
  return split(text)
    .map((node) => {
      const [start, end] = node.range
      return text.substring(start, end).replace(regexLibrary.repeatingWhiteSpace, ' ').trim()
    })
    .filter((s) => !!s)
}