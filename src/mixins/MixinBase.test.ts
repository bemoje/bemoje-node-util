import { MixinBase } from './MixinBase'

describe('MixinBase', () => {
  it('should create an instance', () => {
    const instance = new MixinBase()
    expect(instance).toBeInstanceOf(MixinBase)
  })

  it('should return the constructor', () => {
    const instance = new MixinBase()
    expect(instance.getConstructor()).toBe(MixinBase)
  })

  it('should return the prototype', () => {
    const instance = new MixinBase()
    expect(instance.getPrototype()).toBe(MixinBase.prototype)
  })

  it('should set non-enumerable properties', () => {
    class TestClass extends MixinBase {
      public prop1 = 'value1'
      public prop2 = 'value2'
      constructor() {
        super()
        this.setNonEnumerableProperties('prop1')
      }
    }
    const instance = new TestClass()

    const properties = Object.keys(instance)
    expect(properties).toEqual(['prop2'])
  })

  it('should set non-enumerable private properties', () => {
    class TestClass extends MixinBase {
      public _prop1 = 'value1'
      public prop2 = 'value2'
      constructor() {
        super()
        this.setNonEnumerablePrivateProperties()
      }
    }
    const instance = new TestClass()
    const properties = Object.keys(instance)
    expect(properties).toEqual(['prop2'])
  })
})
