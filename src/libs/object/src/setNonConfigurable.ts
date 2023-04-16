/**
 * Set multiple 'configurable' property descriptor attributes of the target object to false.
 * @param object The target object.
 * @param propertyName The property names to be affected.
 */
export function setNonConfigurable<T>(object: T, ...propertyNames: string[]): void {
  for (const propertyName of propertyNames) {
    Object.defineProperty(object, propertyName, { configurable: false })
  }
}
