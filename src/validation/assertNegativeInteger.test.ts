import { assertNegativeInteger } from './assertNegativeInteger'

describe('assertNegativeInteger', () => {
  it('should return the number if it is a negative integer', () => {
    expect(assertNegativeInteger(0)).toBe(0)
    expect(assertNegativeInteger(-1)).toBe(-1)
    expect(assertNegativeInteger(-100)).toBe(-100)
    expect(assertNegativeInteger(-99999)).toBe(-99999)
  })

  it('should throw an error with a custom message', () => {
    expect(() => assertNegativeInteger(1)).toThrow('Expected int to be a negative integer. Got: 1')
    expect(() => assertNegativeInteger(100)).toThrow('Expected int to be a negative integer. Got: 100')
    expect(() => assertNegativeInteger(-1.5)).toThrow('Expected int to be a negative integer. Got: -1.5')
    expect(() => assertNegativeInteger(1.5)).toThrow('Expected int to be a negative integer. Got: 1.5')
  })
})
