import { assertPositiveInteger } from './assertPositiveInteger'

describe('assertPositiveInteger', () => {
  it('should return the same number if it is a positive integer', () => {
    expect(assertPositiveInteger(5)).toBe(5)
    expect(assertPositiveInteger(0)).toBe(0)
    expect(assertPositiveInteger(1)).toBe(1)
    expect(assertPositiveInteger(100)).toBe(100)
  })

  it('should throw an error with a message indicating the invalid input', () => {
    expect(() => assertPositiveInteger(-1)).toThrow('Expected a positive integer. Got: -1')
    expect(() => assertPositiveInteger(1.5)).toThrow('Expected a positive integer. Got: 1.5')
    expect(() => assertPositiveInteger(-1.5)).toThrow('Expected a positive integer. Got: -1.5')
  })
})
