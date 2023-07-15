import { ObjectKey } from '../types/ObjectKey'

/**
 * Sets the specified properties of an object as non-enumerable.
 * @remarks This function modifies the original object by setting the specified properties as non-enumerable.
 * If the object or any of the property names are not valid, it throws an error.
 * @param object The object whose properties are to be set as non-enumerable.
 * @param propertyNames The names of the properties to be set as non-enumerable.
 * @throws Will throw an error if the first argument is not an object.
 * @throws Will throw an error if any of the specified properties do not exist on the object.
 * @throws Will throw an error if any of the specified properties do not have a descriptor.
 * @example ```ts
 * setNonEnumerable({ a: 1, b: 2, c: 3 }, 'a', 'b');
 * Object.keys({ a: 1, b: 2, c: 3 });;
 * //=> ['c']
 * ```
 */
export function setNonEnumerable(object: Record<ObjectKey, any>, ...propertyNames: string[]): void {
  if (!object || typeof object !== 'object') {
    throw new Error(`setValueAsGetter() requires an object as the first argument.`)
  }
  for (const propertyName of propertyNames) {
    if (!Object.hasOwn(object, propertyName)) {
      throw new Error(`Property '${propertyName}' does not exist on object.`)
    }
    const des = Object.getOwnPropertyDescriptor(object, propertyName)
    if (!des) throw new Error(`Property '${propertyName}' does not have a descriptor.`)
    des.enumerable = false
    Object.defineProperty(object, propertyName, des)
  }
}
