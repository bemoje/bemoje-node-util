/**
 * Sets the specified properties of an object to be writable.
 * @template T - The type of the object.
 * @param object The object whose properties are to be made writable.
 * @param propertyNames The names of the properties to be made writable.
 * @remarks This function uses `Object.defineProperty` to set the `writable` attribute of the specified properties to `true`.
 * @example ```ts
 * setWritable({ a: 1, b: 2 }, 'a', 'b').a = 3;;
 * //=> 3
 * setWritable({ a: 1, b: 2 }, 'a', 'b').b = 4;;
 * //=> 4
 * ```
 * @returns void
 */
export function setWritable<T>(object: T, ...propertyNames: string[]): void {
  for (const propertyName of propertyNames) {
    Object.defineProperty(object, propertyName, { writable: true })
  }
}
