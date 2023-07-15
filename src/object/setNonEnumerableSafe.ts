/**
 * Sets the specified properties of an object as non-enumerable.
 * @remarks This function modifies the original object by setting the enumerable attribute of the specified properties to false.
 * If the object does not have the specified property, it will be ignored.
 * If the object is not an object, an error will be thrown.
 * @typeparam T - The type of the object.
 * @param object The object whose properties are to be set as non-enumerable.
 * @param propertyNames The names of the properties to be set as non-enumerable.
 * @throws Will throw an error if the first argument is not an object.
 * @throws Will throw an error if a specified property does not have a descriptor.
 * @example ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * setNonEnumerableSafe(obj, 'a', 'b');
 * Object.keys(obj);;
 * //=> ['c']
 * ```
 */
export function setNonEnumerableSafe<T>(object: T, ...propertyNames: string[]): void {
  if (!object || typeof object !== 'object') {
    throw new Error(`setValueAsGetter() requires an object as the first argument.`)
  }
  for (const propertyName of propertyNames) {
    if (!Object.hasOwn(object, propertyName)) {
      continue
    }
    const des = Object.getOwnPropertyDescriptor(object, propertyName)
    if (!des) throw new Error(`Property '${propertyName}' does not have a descriptor.`)
    des.enumerable = false
    Object.defineProperty(object, propertyName, des)
  }
}
