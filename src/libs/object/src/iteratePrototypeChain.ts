import { isConstructor, isPrototype } from '../../validation'

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
  if (object == null) return
  if (
    // if the below false, then object must be an instance
    !isPrototype(object) &&
    !isConstructor(object) &&
    // the two above depend on checking that typeof object is 'object',
    // so this last check is in case of arrow functions and generator functions
    object !== Function.prototype
  ) {
    yield object
    object = object.constructor.prototype
  }
  let objectOrNull: Record<string, any> | null = object
  while (objectOrNull) {
    yield objectOrNull
    objectOrNull = Reflect.getPrototypeOf(objectOrNull)
  }
}
