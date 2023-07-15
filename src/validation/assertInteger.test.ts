import { assertInteger } from './assertInteger'

describe('assertInteger', () => {
  it('should return the input value if it is an integer', () => {
    expect(assertInteger(5)).toBe(5)
    expect(assertInteger(0)).toBe(0)
    expect(assertInteger(-5)).toBe(-5)
  })

  it('should throw an error if the input value is not an integer', () => {
    expect(() => assertInteger(5.5)).toThrow(TypeError)
    expect(() => assertInteger(0.1)).toThrow(TypeError)
    expect(() => assertInteger(-5.5)).toThrow(TypeError)
  })

  it('should throw an error with a specific message if the input value is not an integer', () => {
    expect(() => assertInteger(5.5)).toThrow('Expected int to be an integer. Got: 5.5')
    expect(() => assertInteger(0.1)).toThrow('Expected int to be an integer. Got: 0.1')
    expect(() => assertInteger(-5.5)).toThrow('Expected int to be an integer. Got: -5.5')
  })

  it('should throw an error if the input value is not a number', () => {
    expect(() => assertInteger('5' as any)).toThrow(TypeError)
    expect(() => assertInteger('0' as any)).toThrow(TypeError)
    expect(() => assertInteger('-5' as any)).toThrow(TypeError)
    expect(() => assertInteger(undefined as any)).toThrow(TypeError)
    expect(() => assertInteger(null as any)).toThrow(TypeError)
    expect(() => assertInteger({} as any)).toThrow(TypeError)
    expect(() => assertInteger([] as any)).toThrow(TypeError)
  })
})
