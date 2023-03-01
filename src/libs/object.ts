// G:\My Drive\dev\dev\dev\src\object\iterate-object.js

/**
 * Set multiple 'enumerable' property descriptor attributes of the target object to true.
 * @param object The target object.
 * @param propertyName The property names to be affected.
 */
export function setEnumerable<T>(object: T, ...propertyNames: string[]): void {
  for (const propertyName of propertyNames) {
    Object.defineProperty(object, propertyName, { enumerable: true });
  }
}

/**
 * Set multiple 'enumerable' property descriptor attributes of the target object to false.
 * @param object The target object.
 * @param propertyName The property names to be affected.
 */
export function setNonEnumerable<T>(object: T, ...propertyNames: string[]): void {
  for (const propertyName of propertyNames) {
    Object.defineProperty(object, propertyName, { enumerable: false });
  }
}

/**
 * Set multiple 'writable' property descriptor attributes of the target object to true.
 * @param object The target object.
 * @param propertyName The property names to be affected.
 */
export function setWritable<T>(object: T, ...propertyNames: string[]): void {
  for (const propertyName of propertyNames) {
    Object.defineProperty(object, propertyName, { writable: true });
  }
}

/**
 * Set multiple 'writable' property descriptor attributes of the target object to false.
 * @param object The target object.
 * @param propertyName The property names to be affected.
 */
export function setNonWritable<T>(object: T, ...propertyNames: string[]): void {
  for (const propertyName of propertyNames) {
    Object.defineProperty(object, propertyName, { writable: false });
  }
}

/**
 * Set multiple 'configurable' property descriptor attributes of the target object to false.
 * @param object The target object.
 * @param propertyName The property names to be affected.
 */
export function setNonConfigurable<T>(object: T, ...propertyNames: string[]): void {
  for (const propertyName of propertyNames) {
    Object.defineProperty(object, propertyName, { configurable: false });
  }
}

/**
 * Set the 'enumerable' property descriptor attributes on the target object to false for all property names that start with '_' (underscore).
 * @param object The target object.
 */
export function setNonEnumerablePrivateProperties(object: Record<string, any>): void {
  setNonEnumerable(object, ...Object.keys(object).filter((key) => key.charAt(0) === '_'));
}
