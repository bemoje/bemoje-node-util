import { split } from 'sentence-splitter'

/**
 * Intelligently split a string into sentences.
 * @throws Will throw an error if the input is not a string.
 * @param text Text to split into sentences.
 * @example ```ts
 * strToSentences('Hello world. How are you?');
 * //=> ['Hello world.', 'How are you?']
 * ```
 */
export function strToSentences(text: string): string[] {
  if (!text) return []
  const arr = split(text)
  return arr.filter((node) => node.type === 'Sentence').map((node) => node.raw)
}
