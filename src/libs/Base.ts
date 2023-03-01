import { setNonEnumerablePrivateProperties } from './object';

const hasCreatedFirstInstance: WeakSet<Function> = new WeakSet();

export class Base {
  constructor() {
    this.onFirstInstance();
  }

  private onFirstInstance() {
    if (!hasCreatedFirstInstance.has(this.constructor)) {
      hasCreatedFirstInstance.add(this.constructor);
      this.verifyStatic_IRevivableJSON();
    }
  }

  private verifyStatic_IRevivableJSON() {
    let hasToJSON = false;
    for (const proto of iteratePrototypeChain(this)) {
      if (proto !== Object.prototype) {
        if (Object.hasOwn(proto, 'toJSON')) {
          hasToJSON = true;
          break;
        }
      }
    }
    if (hasToJSON && !Object.hasOwn(this.constructor, 'fromJSON')) {
      throw new Error(
        `Interface IRevivableJSON requires (${this.constructor.name}) to have a static method fromJSON() for reviving serialized instances.`,
      );
    }
  }

  /**
   * Sets the 'enumerable' property descriptor attributes on the instance to false for all property names that start with '_' (underscore).
   */
  protected setNonEnumerablePrivateProperties(): void {
    setNonEnumerablePrivateProperties(this);
  }

  protected validateAmbiguousOptions(options: Record<string, any>, optionKeyPairs: Array<[string, string]>) {
    for (const [key1, key2] of optionKeyPairs) {
      if (options[key1] !== undefined && options[key2] !== undefined) {
        throw new Error(`Cannot use the '${key1}' option and the '${key2}' option simultanously.`);
      }
    }
  }

  protected validateOptionsRequireOtherOptions(options: Record<string, any>, optionKeyPairs: Array<[string, string]>) {
    for (const [key1, key2] of optionKeyPairs) {
      if (options[key1] !== undefined && options[key2] === undefined) {
        throw new Error(`Cannot use the '${key1}' option without the '${key2}' option.`);
      }
    }
  }
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
export function* iteratePrototypeChain(object: Object): Generator<Record<string, any>> {
  if (object == null) return;
  if (
    // if the below false, then object must be an instance
    !isPrototype(object) &&
    !isConstructor(object) &&
    // the two above depend on checking that typeof object is 'object'.
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

/**
 * Determine wheter a given object is a prototype-object (obj.constructor.prototype === obj).
 */
export function isPrototype(value: any): boolean {
  if (!isObject(value)) return false;
  if (!('constructor' in value)) return false;
  return value.constructor.prototype === value;
}

/**
 * Determine wheter the argument is a Object (is typeof object but not null).
 */
export function isObject(value: any): boolean {
  return value !== null && typeof value === 'object';
}

/**
 * Determine if value is a constructor function
 */
export function isConstructor(value: any): boolean {
  return (
    typeof value === 'function' &&
    'prototype' in value &&
    isPrototype(value.prototype) &&
    value === value.prototype.constructor
  );
}
