import { getPrototype } from './getPrototype'

describe('getPrototype', () => {
  it('should return the prototype of the specified object', () => {
    const obj = { a: 1 }
    const proto = getPrototype(obj)
    expect(proto).toBe(Object.prototype)
  })

  it('should return null for objects created with null prototype', () => {
    const obj = Object.create(null)
    const proto = getPrototype(obj)
    expect(proto).toBe(null)
  })

  it('should return the prototype of an array', () => {
    const arr: any[] = []
    const proto = getPrototype(arr)
    expect(proto).toBe(Array.prototype)
  })

  it('should return the prototype of a date', () => {
    const date = new Date()
    const proto = getPrototype(date)
    expect(proto).toBe(Date.prototype)
  })

  it('should return the prototype of a regular expression', () => {
    const regex = /test/
    const proto = getPrototype(regex)
    expect(proto).toBe(RegExp.prototype)
  })

  it('should return the prototype of a string', () => {
    const str = 'test'
    const proto = getPrototype(str)
    expect(proto).toBe(String.prototype)
  })

  it('should return the prototype of a number', () => {
    const num = 1
    const proto = getPrototype(num)
    expect(proto).toBe(Number.prototype)
  })

  it('should return the prototype of a boolean', () => {
    const bool = true
    const proto = getPrototype(bool)
    expect(proto).toBe(Boolean.prototype)
  })
})
