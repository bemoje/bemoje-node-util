import { assertPositiveInteger } from './assertPositiveInteger'

describe('assertPositiveInteger', () => {
  it('should return the same number if it is a positive integer', () => {
    expect(assertPositiveInteger(5)).toBe(5)
    expect(assertPositiveInteger(1)).toBe(1)
    expect(assertPositiveInteger(100)).toBe(100)
  })

  it('should throw an error if the number is not a positive integer', () => {
    expect(() => assertPositiveInteger(-1)).toThrow(TypeError)
    expect(() => assertPositiveInteger(0)).toThrow(TypeError)
    expect(() => assertPositiveInteger(1.5)).toThrow(TypeError)
    expect(() => assertPositiveInteger(-1.5)).toThrow(TypeError)
  })

  it('should throw an error with a message indicating the invalid input', () => {
    expect(() => assertPositiveInteger(-1)).toThrow('Expected int to be an integer. Got: -1')
    expect(() => assertPositiveInteger(0)).toThrow('Expected int to be an integer. Got: 0')
    expect(() => assertPositiveInteger(1.5)).toThrow('Expected int to be an integer. Got: 1.5')
    expect(() => assertPositiveInteger(-1.5)).toThrow('Expected int to be an integer. Got: -1.5')
  })
})
