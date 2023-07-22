import { assertValidNumber } from './assertValidNumber'

describe('assertValidNumber', () => {
  it('should return the number if it is valid', () => {
    const validNumber = 5
    expect(assertValidNumber(validNumber)).toBe(validNumber)
  })

  it('should throw an error if the number is NaN', () => {
    const invalidNumber = NaN
    expect(() => assertValidNumber(invalidNumber)).toThrow(TypeError)
    expect(() => assertValidNumber(invalidNumber)).toThrow('Expected number to be finite and not NaN. Got: NaN')
  })

  it('should throw an error if the number is Infinity', () => {
    const invalidNumber = Infinity
    expect(() => assertValidNumber(invalidNumber)).toThrow(TypeError)
    expect(() => assertValidNumber(invalidNumber)).toThrow('Expected number to be finite and not NaN. Got: Infinity')
  })

  it('should throw an error if the number is negative Infinity', () => {
    const invalidNumber = -Infinity
    expect(() => assertValidNumber(invalidNumber)).toThrow(TypeError)
    expect(() => assertValidNumber(invalidNumber)).toThrow('Expected number to be finite and not NaN. Got: -Infinity')
  })
})
