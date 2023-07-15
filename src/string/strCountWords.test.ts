import { strCountWords } from './strCountWords'

describe('strCountWords', () => {
  it('should return 0 for an empty string', () => {
    expect(strCountWords('')).toBe(0)
  })

  it('should return 1 for a single word string', () => {
    expect(strCountWords('word')).toBe(1)
  })

  it('should return the correct count for a multi-word string', () => {
    expect(strCountWords('This is a test string')).toBe(5)
  })

  it('should ignore leading and trailing spaces', () => {
    expect(strCountWords('  This is a test string  ')).toBe(5)
  })

  it('should ignore multiple spaces between words', () => {
    expect(strCountWords('This  is  a  test  string')).toBe(5)
  })

  it('should return 0 for a string of only spaces', () => {
    expect(strCountWords('     ')).toBe(0)
  })

  it('should handle special characters correctly', () => {
    expect(strCountWords('This is a test-string')).toBe(5)
    expect(strCountWords('This is a "test" string')).toBe(5)
    expect(strCountWords('This is a test/string')).toBe(5)
  })
})
