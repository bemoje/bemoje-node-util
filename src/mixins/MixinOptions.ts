import type { Constructor } from '../types/Constructor'
import { arrEvery } from '../array/arrEvery'

/**
 * This function is a mixin that adds options management to a base class.
 * @template TBase The type of the base class to which this mixin is applied.
 * @param BaseConstructor The base class to which this mixin is applied.
 * @returns The resulting class with the mixin applied.
 */
export function MixinOptions<TBase extends Constructor>(BaseConstructor: TBase): Constructor {
  return class Options extends BaseConstructor {
    constructor(...args: any[]) {
      super(...args)
    }

    protected assertOptionsNoIllegalConcurrent<O extends Record<string, any>>(
      options: O,
      ...keys: string[]
    ): O {
      if (keys.filter((key) => options[key] !== undefined).length < 2) return options
      throw new Error(`Cannot use these options simultanously: ${keys.join(', ')}`)
    }

    protected assertOptionsNoMissingDependencies<O extends Record<string, any>>(
      options: O,
      key: string,
      ...dependencies: string[]
    ): O {
      if (
        options[key] === undefined ||
        arrEvery(dependencies, (d: string) => options[d] !== undefined)
      ) {
        return options
      }
      throw new Error(`Cannot use the '${key}' option without: ${dependencies.join(', ')}`)
    }
  }
}
