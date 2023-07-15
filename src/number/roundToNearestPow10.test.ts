import { roundToNearestPow10 } from './roundToNearestPow10'

describe('roundToNearestPow10', () => {
  it('should round to the nearest power of 10', () => {
    expect(roundToNearestPow10(15, 10)).toBe(20)
    expect(roundToNearestPow10(12, 10)).toBe(10)
    expect(roundToNearestPow10(105, 100)).toBe(100)
    expect(roundToNearestPow10(115, 100)).toBe(100)
    expect(roundToNearestPow10(150, 100)).toBe(200)
  })

  it('should throw an error when nearest is not a power of 10', () => {
    expect(() => roundToNearestPow10(15, 3)).toThrow(TypeError)
    expect(() => roundToNearestPow10(15, 7)).toThrow(TypeError)
    expect(() => roundToNearestPow10(15, 20)).toThrow(TypeError)
  })

  it('should throw an error when any of the first two arguments are not an integer', () => {
    expect(() => roundToNearestPow10(1.1, 1)).toThrow(TypeError)
    expect(() => roundToNearestPow10(1, 1.1)).toThrow(TypeError)
  })
})
