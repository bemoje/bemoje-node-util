import { strToSentences } from './strToSentences'

describe('strToSentences', () => {
  it('should return an empty array when the input is an empty string', () => {
    expect(strToSentences('')).toEqual([])
  })

  it('should return an array of sentences when the input is a string with multiple sentences', () => {
    const text =
      'This is the first sentence. This is the second sentence. And this is the third one.'
    const expected = [
      'This is the first sentence.',
      'This is the second sentence.',
      'And this is the third one.',
    ]
    expect(strToSentences(text)).toEqual(expected)
  })

  it('should return an array with a single sentence when the input is a string with one sentence', () => {
    const text = 'This is a single sentence.'
    const expected = ['This is a single sentence.']
    expect(strToSentences(text)).toEqual(expected)
  })
})
