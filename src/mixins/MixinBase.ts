import { setNonEnumerablePrivateProperties } from '../object/setNonEnumerablePrivateProperties'
import { setNonEnumerable } from '../object/setNonEnumerable'

/**
 * Abstract class that other classes can inherit from to gain various handy functionality.
 */
export class MixinBase {
  public getConstructor(): typeof MixinBase {
    return Object.getPrototypeOf(this).constructor
  }

  public getPrototype(): typeof MixinBase.prototype {
    return Object.getPrototypeOf(this)
  }

  /**
   * Make the properties with property names that start with an underscore non-enumerable.
   */
  protected setNonEnumerablePrivateProperties(): void {
    setNonEnumerablePrivateProperties(this)
  }

  /**
   * Make the properties with the given property names non-enumerable.
   */
  protected setNonEnumerableProperties(...propertyNames: string[]): void {
    setNonEnumerable(this, ...propertyNames)
  }
}
