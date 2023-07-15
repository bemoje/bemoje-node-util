import type { Constructor } from '../types/Constructor'
import { strHashToString } from '../string/strHashToString'

const nextClassIndex = new Map<Constructor, number>()

/**
 * This function is a mixin that adds an index to a class and provides several methods to get unique identifiers based on the class name and index.
 * @typeparam TBase - The type of the base constructor.
 * @param BaseConstructor The base constructor to extend.
 * @returns A constructor for a class that extends the base constructor and includes an index and methods for getting unique identifiers.
 * @example ```ts
 * //
 * ```
 */
export function MixinIndexed<TBase extends Constructor>(BaseConstructor: TBase): Constructor {
  return class Indexed extends BaseConstructor {
    public i: number

    constructor(...args: any[]) {
      super(...args)
      const Class = this.getConstructor()
      const i = nextClassIndex.get(Class)
      if (i === undefined) {
        nextClassIndex.set(Class, (this.i = 0))
      } else {
        nextClassIndex.set(Class, (this.i = i + 1))
      }
    }
    public get uid(): [string, number] {
      return [this.getConstructor().name, this.i]
    }
    public get uidString(): string {
      return this.uid.join(':')
    }
    public get uidHashMd5(): string {
      return strHashToString(this.uidString, 'md5', 'base64url')
    }
    public get uidHashSha1(): string {
      return strHashToString(this.uidString, 'sha1', 'base64url')
    }
    public get uidHashSha256(): string {
      return strHashToString(this.uidString, 'sha256', 'base64url')
    }
  }
}
