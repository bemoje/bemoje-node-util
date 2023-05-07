import { setNonEnumerable } from '../../object/src/setNonEnumerable'
import type { Constructor, Obj, GenericArgs } from '../../interfaces'
import type { IRevivable } from './interfaces'

export function Revivable<TBase extends Constructor>(BaseConstructor: TBase): Constructor {
  const serializeIgnoreKeys: Array<string> = []

  return class Revivable extends BaseConstructor implements IRevivable<Obj> {
    /**
     * Ignore a key when serializing to JSON.
     */
    public static ignoreKeyWhenSerializing(key: string): void {
      serializeIgnoreKeys.push(key)
    }

    /**
     * Revive an instance from a JSON string.
     */
    public static fromJSON<T extends Revivable>(json: string): T {
      return Object.setPrototypeOf(JSON.parse(json), this.prototype)
    }

    constructor(...args: GenericArgs) {
      super(...args)
      setNonEnumerable(this, ...serializeIgnoreKeys)
    }

    /**
     * Invoked by JSON.stringify when serializing.
     */
    toJSON(): Revivable {
      return this
    }

    /**
     * Stringify an instance into JSON.
     */
    public stringify(indent = 0): string {
      return JSON.stringify(this, null, indent)
    }
  }
}
