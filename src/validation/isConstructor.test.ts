import { isConstructor } from './isConstructor'

describe('isConstructor', () => {
  it('should return true for a constructor function', () => {
    function Test() {
      //
    }
    expect(isConstructor(Test)).toBe(true)
  })

  it('should return false for a non-constructor function', () => {
    const Test = () => {
      //
    }
    expect(isConstructor(Test)).toBe(false)
  })

  it('should return false for an object', () => {
    const Test = {}
    expect(isConstructor(Test)).toBe(false)
  })

  it('should return false for a null value', () => {
    const Test = null
    expect(isConstructor(Test)).toBe(false)
  })

  it('should return false for an undefined value', () => {
    const Test = undefined
    expect(isConstructor(Test)).toBe(false)
  })

  it('should return false for a string', () => {
    const Test = 'test'
    expect(isConstructor(Test)).toBe(false)
  })

  it('should return false for a number', () => {
    const Test = 123
    expect(isConstructor(Test)).toBe(false)
  })

  it('should return false for a boolean', () => {
    const Test = true
    expect(isConstructor(Test)).toBe(false)
  })

  it('should return false for a function with prototype not being a prototype-object', () => {
    function Test() {
      //
    }
    Test.prototype = {}
    expect(isConstructor(Test)).toBe(false)
  })
})
