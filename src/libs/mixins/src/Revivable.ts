import { setNonEnumerable } from '../../object'
import { Constructor } from '../../interfaces'
import { IRevivable } from './interfaces'
import { Base } from './Base'

export function Revivable<TBase extends Constructor>(BaseConstructor: TBase): Constructor {
  const serializeIgnoreKeys: Array<string> = []

  return class Revivable extends BaseConstructor implements IRevivable<Record<string, any>> {
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

    constructor(...args: any[]) {
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
