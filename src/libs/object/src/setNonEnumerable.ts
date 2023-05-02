/**
 * Set multiple 'enumerable' property descriptor attributes of the target object to false.
 * @param object The target object.
 * @param propertyName The property names to be affected.
 */
export function setNonEnumerable<T>(object: T, ...propertyNames: string[]): void {
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
