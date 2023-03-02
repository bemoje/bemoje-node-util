import { isConstructor, isPrototype } from './validation';

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

/**
 * Iterate the prototype chain of a given object.
 * @example
 * ```js
 * class A {}
 * class B extends A {}
 * class C extends B {}
 * const instance = new C()
 *
 * iteratePrototypeChain(C)
 * //=> [ C, B, A, Function.prototype, Object.prototype]
 *
 * iteratePrototypeChain(C.prototype)
 * //=> [C.prototype, B.prototype, A.prototype, Object.prototype]
 *
 * iteratePrototypeChain(instance)
 * //=> [instance, C.prototype, B.prototype, A.prototype, Object.prototype]
 * ```
 */
export function* iteratePrototypeChain(object: Record<string, any>): Generator<Record<string, any>> {
  if (object == null) return;
  if (
    // if the below false, then object must be an instance
    !isPrototype(object) &&
    !isConstructor(object) &&
    // the two above depend on checking that typeof object is 'object',
    // so this last check is in case of arrow functions and generator functions
    object !== Function.prototype
  ) {
    yield object;
    object = object.constructor.prototype;
  }
  let objectOrNull: Object | null = object;
  while (objectOrNull) {
    yield objectOrNull;
    objectOrNull = Reflect.getPrototypeOf(objectOrNull);
  }
}

// G:\My Drive\dev\dev\dev\src\object\iterate-object.js
