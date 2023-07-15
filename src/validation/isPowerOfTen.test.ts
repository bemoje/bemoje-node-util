import { isPowerOfTen } from './isPowerOfTen'

describe('isPowerOfTen', () => {
  it('should return true for numbers that are power of ten', () => {
    expect(isPowerOfTen(10)).toBe(true)
    expect(isPowerOfTen(100)).toBe(true)
    expect(isPowerOfTen(1000)).toBe(true)
    expect(isPowerOfTen(10000)).toBe(true)
  })

  it('should return false for numbers that are not power of ten', () => {
    expect(isPowerOfTen(3)).toBe(false)
    expect(isPowerOfTen(33)).toBe(false)
    expect(isPowerOfTen(200)).toBe(false)
    expect(isPowerOfTen(5000)).toBe(false)
  })

  it('should return false for negative numbers', () => {
    expect(isPowerOfTen(-10)).toBe(false)
    expect(isPowerOfTen(-100)).toBe(false)
  })

  it('should return false for zero', () => {
    expect(isPowerOfTen(0)).toBe(false)
  })

  it('should return false for decimal numbers', () => {
    expect(isPowerOfTen(10.5)).toBe(false)
    expect(isPowerOfTen(100.25)).toBe(false)
  })
})
