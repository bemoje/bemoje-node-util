import { MixinBase } from './MixinBase'
import { MixinTimestamped } from './MixinTimestamped'

describe('MixinTimestamped', () => {
  // Define a dummy base class to apply the mixin to
  class Timestamped extends MixinTimestamped(MixinBase) {}

  it('should return a constructor function', () => {
    expect(typeof Timestamped).toBe('function')
  })

  it('should create an instance with a timestamp property', () => {
    const instance = new Timestamped()
    expect(instance).toHaveProperty('timestamp')
  })

  it('should create an instance with a timestamp that is a number', () => {
    const instance = new Timestamped()
    expect(typeof instance.timestamp).toBe('number')
  })

  it('should create an instance with a timestamp that is not in the future', () => {
    const instance = new Timestamped()
    expect(instance.timestamp).toBeLessThanOrEqual(Date.now())
  })
})
