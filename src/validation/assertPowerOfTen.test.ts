import { assertPowerOfTen } from './assertPowerOfTen'

describe('assertPowerOfTen', () => {
  it('should return the number if it is a power of ten', () => {
    expect(assertPowerOfTen(10)).toBe(10)
    expect(assertPowerOfTen(100)).toBe(100)
    expect(assertPowerOfTen(1000)).toBe(1000)
  })

  it('should throw a TypeError if the number is not a power of ten', () => {
    expect(() => assertPowerOfTen(3)).toThrow(TypeError)
    expect(() => assertPowerOfTen(25)).toThrow(TypeError)
    expect(() => assertPowerOfTen(500)).toThrow(TypeError)
  })

  it('should throw a TypeError with a specific message if the number is not a power of ten', () => {
    expect(() => assertPowerOfTen(3)).toThrow('Expected number to be a power of ten. Got: 3')
    expect(() => assertPowerOfTen(25)).toThrow('Expected number to be a power of ten. Got: 25')
    expect(() => assertPowerOfTen(500)).toThrow('Expected number to be a power of ten. Got: 500')
  })

  it('should handle edge cases', () => {
    expect(() => assertPowerOfTen(0)).toThrow(TypeError)
    expect(() => assertPowerOfTen(-10)).toThrow(TypeError)
    expect(() => assertPowerOfTen(Infinity)).toThrow(TypeError)
    expect(() => assertPowerOfTen(NaN)).toThrow(TypeError)
  })
})
