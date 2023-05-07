/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as util from '../src/libs/object'

describe('setEnumerable', () => {
  it('should set the enumerable property to true.', () => {
    const o = { a: 1 }
    Object.defineProperty(o, 'a', { enumerable: false })
    expect(Object.keys(o).includes('a')).toBe(false)
    util.setEnumerable(o, 'a')
    expect(Object.keys(o).includes('a')).toBe(true)
  })
})

describe('setNonEnumerable', () => {
  it('should set the enumerable property to true.', () => {
    const o = { a: 1 }
    expect(Object.keys(o).includes('a')).toBe(true)
    util.setNonEnumerable(o, 'a')
    expect(Object.keys(o).includes('a')).toBe(false)
  })
})

describe('setWritable', () => {
  it('should set the writable property to true.', () => {
    const o = { a: 1 }
    Object.defineProperty(o, 'a', { writable: false })
    expect(() => (o.a = 2)).toThrowError()
    expect(o.a).toBe(1)
    util.setWritable(o, 'a')
    o.a = 2
    expect(o.a).toBe(2)
  })
})

describe('setNonWritable', () => {
  it('should set the writable property to true.', () => {
    const o = { a: 1 }
    util.setNonWritable(o, 'a')
    expect(() => (o.a = 2)).toThrowError()
    expect(o.a).toBe(1)
  })
})

describe('setNonConfigurable', () => {
  it('should set the configurable property to true.', () => {
    const o = { a: 1 }
    util.setNonConfigurable(o, 'a')
    expect(() => {
      Object.defineProperty(o, 'a', { enumerable: false })
    }).toThrowError()
  })
})

describe('setNonEnumerablePrivateProperties', () => {
  it('should set the enumerable property to false for all property names starting with an underscore.', () => {
    const o = { _a: 1, _b: 2, c: 3 }
    util.setNonEnumerablePrivateProperties(o)
    expect(Object.keys(o)).toStrictEqual(['c'])
  })
})

describe('iteratePrototypeChain', () => {
  class A {}
  class B extends A {}
  class C extends B {}
  const instance = new C()
  it('iterates prototype chain for class constructor', () => {
    expect([...util.iteratePrototypeChain(C)]).toStrictEqual([
      C,
      B,
      A,
      Function.prototype,
      Object.prototype,
    ])
  })
  it('iterates prototype chain for class prototype', () => {
    expect([...util.iteratePrototypeChain(C.prototype)]).toStrictEqual([
      C.prototype,
      B.prototype,
      A.prototype,
      Object.prototype,
    ])
  })
  it('iterates prototype chain for class instance', () => {
    expect([...util.iteratePrototypeChain(instance)]).toStrictEqual([
      instance,
      C.prototype,
      B.prototype,
      A.prototype,
      Object.prototype,
    ])
  })
})

describe('inheritStaticMembers', () => {
  it('should copy static members from source to target', () => {
    class Source {
      static staticProp = 'source'
      static staticMethod() {
        return 'source'
      }
    }

    class Target {}

    util.inheritStaticMembers(Target, Source)

    // @ts-ignore
    expect(Target.staticProp).toBe('source')
    // @ts-ignore
    expect(Target.staticMethod()).toBe('source')
  })

  it('should ignore specified keys', () => {
    class Source {
      static staticProp = 'source'
      static staticMethod() {
        return 'source'
      }
    }

    class Target {}

    // @ts-ignore
    util.inheritStaticMembers(Target, Source, ['staticProp'])

    // @ts-ignore
    expect(Target.staticProp).toBe(undefined)
    // @ts-ignore
    expect(Target.staticMethod()).toBe('source')
  })
})

describe('getPrototype', () => {
  it('should return the prototype object of a given object', () => {
    const obj = { a: 1 }
    expect(util.getPrototype(obj)).toBe(Object.prototype)
  })

  it('should return the prototype object of a given string', () => {
    const str = 'hello'
    expect(util.getPrototype(str)).toBe(String.prototype)
  })

  it('should return the prototype object of a given number', () => {
    const num = 42
    expect(util.getPrototype(num)).toBe(Number.prototype)
  })

  it('should return the prototype object of a given boolean', () => {
    const bool = true
    expect(util.getPrototype(bool)).toBe(Boolean.prototype)
  })
})

describe('getConstructor', () => {
  it('should return the constructor of a string', () => {
    expect(util.getConstructor('hello')).toBe(String)
  })

  it('should return the constructor of a number', () => {
    expect(util.getConstructor(42)).toBe(Number)
  })

  it('should return the constructor of a boolean', () => {
    expect(util.getConstructor(true)).toBe(Boolean)
  })

  it('should return the constructor of an object', () => {
    expect(util.getConstructor({})).toBe(Object)
  })
})

describe('setValueAsGetter', () => {
  it('should throw an error if the first argument is not an object', () => {
    expect(() => util.setValueAsGetter(null, 'prop')).toThrowError(
      'setValueAsGetter() requires an object as the first argument.',
    )
    expect(() => util.setValueAsGetter(undefined, 'prop')).toThrowError(
      'setValueAsGetter() requires an object as the first argument.',
    )
    expect(() => util.setValueAsGetter(123, 'prop')).toThrowError(
      'setValueAsGetter() requires an object as the first argument.',
    )
    expect(() => util.setValueAsGetter('string', 'prop')).toThrowError(
      'setValueAsGetter() requires an object as the first argument.',
    )
  })

  it('should throw an error if the property does not exist on the object', () => {
    const obj = {}
    expect(() => util.setValueAsGetter(obj, 'prop')).toThrowError(
      `Property 'prop' does not exist on object.`,
    )
  })

  it('should set the property as a getter', () => {
    const obj = { prop: 'value' }
    util.setValueAsGetter(obj, 'prop')
    expect(obj.prop).toBe('value')
  })

  it('should set multiple properties as getters', () => {
    const obj = { prop1: 'value1', prop2: 'value2' }
    util.setValueAsGetter(obj, 'prop1', 'prop2')
    expect(obj.prop1).toBe('value1')
    expect(obj.prop2).toBe('value2')
  })
})

describe('objForEach', () => {
  it('example', () => {
    const o = {
      a: 1,
      b: 2,
      c: 3,
    }
    let sum = 0
    util.objForEach(o, (value, key) => (sum += key.length + value))
    expect(sum).toBe(9)
  })
})

describe('objMap', () => {
  it('example', () => {
    const o = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      _e: 6,
    }
    expect(util.objMap(o, (value, key) => (key.length === 1 ? value * 2 : 0))).toEqual({
      a: 2,
      b: 4,
      c: 6,
      d: 8,
      _e: 0,
    })
    Object.defineProperty(o, '_e', { enumerable: false })
    expect(util.objMap(o, (value, key) => (key.length === 1 ? value * 2 : 0))).toEqual({
      a: 2,
      b: 4,
      c: 6,
      d: 8,
    })
    expect(
      util.objMap(
        o,
        (value, key) => (key.length === 1 ? value * 2 : 0),
        Object.getOwnPropertyNames,
      ),
    ).toEqual({ a: 2, b: 4, c: 6, d: 8, _e: 0 })
  })
})

describe('objMapKeys', () => {
  it('example', () => {
    const o = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      _e: 6,
    }
    expect(util.objMapKeys(o, (key, value) => key + value)).toEqual({
      a1: 1,
      b2: 2,
      c3: 3,
      d4: 4,
      _e6: 6,
    })
  })
})

describe('objFilter', () => {
  it('example', () => {
    const o = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      _e: 6,
    }
    expect(util.objFilter(o, (value, key) => value % 2 === 0 && key.length === 1)).toEqual({
      b: 2,
      d: 4,
    })
  })
})

describe('objReduce', () => {
  it('example', () => {
    const o = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      _e: 6,
    }
    expect(util.objReduce(o, (accum, value, key) => accum + value - key.length, 0)).toBe(10)
  })
})
