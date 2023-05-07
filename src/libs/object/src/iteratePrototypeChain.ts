import { isPrototype } from '../../validation/src/isPrototype'
import { isConstructor } from '../../validation/src/isConstructor'
import type { Obj } from '../../interfaces'

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
export function* iteratePrototypeChain(object: Obj): Generator<Obj> {
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
  let objectOrNull: Obj | null = object
  while (objectOrNull) {
    yield objectOrNull
    objectOrNull = Reflect.getPrototypeOf(objectOrNull)
  }
}
