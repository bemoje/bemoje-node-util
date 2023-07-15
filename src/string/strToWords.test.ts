import { strToWords } from './strToWords'

describe('strToWords', () => {
  it('example', () => {
    expect(strToWords('How are you?')).toStrictEqual(['How', 'are', 'you'])
  })

  it('should return an array of words for a given string', () => {
    const result = strToWords('Hello World')
    expect(result).toEqual(['Hello', 'World'])
  })

  it('should return an empty array for an empty string', () => {
    const result = strToWords('')
    expect(result).toEqual([])
  })

  it('should return an array of words for a string with multiple spaces', () => {
    const result = strToWords('Hello   World')
    expect(result).toEqual(['Hello', 'World'])
  })

  it('should return an array of words for a string with special characters', () => {
    const result = strToWords('Hello, World!')
    expect(result).toEqual(['Hello', 'World'])
  })

  it('should return an array of words for a string with numbers', () => {
    const result = strToWords('Hello 123 World')
    expect(result).toEqual(['Hello', '123', 'World'])
  })
})
