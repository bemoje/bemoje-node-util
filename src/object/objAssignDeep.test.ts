import { objAssignDeep } from './objAssignDeep'

describe('objAssignDeep', () => {
  it('should return a new object with combined properties of both target and source objects', () => {
    const target = { a: 1, b: 2 }
    const source = { b: 3, c: 4 }
    const result = objAssignDeep(target, source)
    expect(result).toEqual({ a: 1, b: 3, c: 4 })
  })

  it('should overwrite properties in target object with properties from source object', () => {
    const target = { a: 1, b: 2 }
    const source = { a: 3, c: 4 }
    const result = objAssignDeep(target, source)
    expect(result).toEqual({ a: 3, b: 2, c: 4 })
  })

  it('should handle nested objects', () => {
    const target = { a: 1, b: { c: 2 } }
    const source = { b: { d: 3 }, e: 4 }
    const result = objAssignDeep(target, source)
    expect(result).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 })
  })

  it('should handle arrays', () => {
    const target = { a: 1, b: [1, 2] }
    const source = { b: [3, 4], c: 4 }
    const result = objAssignDeep(target, source)
    expect(result).toEqual({ a: 1, b: [3, 4], c: 4 })
  })

  it('should return the target object if source object is empty', () => {
    const target = { a: 1, b: 2 }
    const source = {}
    const result = objAssignDeep(target, source)
    expect(result).toEqual(target)
  })

  it('should return the source object if target object is empty', () => {
    const target = {}
    const source = { a: 1, b: 2 }
    const result = objAssignDeep(target, source)
    expect(result).toEqual(source)
  })

  it('should return an empty object if both target and source objects are empty', () => {
    const target = {}
    const source = {}
    const result = objAssignDeep(target, source)
    expect(result).toEqual({})
  })
})
