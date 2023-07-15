import type { Constructor } from '../types/Constructor'

/**
 * This function is a mixin that adds timestamp functionality to a base class.
 * @template TBase - The type of the base constructor.
 * @param BaseConstructor The base constructor that the mixin is applied to.
 * @returns The constructor of the new class with the timestamp functionality.
 * @example ```ts
 * //
 * ```
 */
export function MixinTimestamped<TBase extends Constructor>(BaseConstructor: TBase): Constructor {
  return class Timestamped extends BaseConstructor {
    public timestamp = Date.now()
    constructor(...args: any[]) {
      super(...args)
    }
  }
}
