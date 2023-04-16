/**
 * Set multiple 'writable' property descriptor attributes of the target object to true.
 * @param object The target object.
 * @param propertyName The property names to be affected.
 */
export function setWritable<T>(object: T, ...propertyNames: string[]): void {
  for (const propertyName of propertyNames) {
    Object.defineProperty(object, propertyName, { writable: true })
  }
}
