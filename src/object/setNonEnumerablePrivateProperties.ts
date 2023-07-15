import { setNonEnumerable } from './setNonEnumerable'
import { ObjectKey } from '../types/ObjectKey'

/**
 * Sets non-enumerable private properties of an object.
 * Private properties are determined by the convention of prefixing the property name with an underscore.
 * @remarks This function modifies the original object by setting its private properties as non-enumerable.
 * @param object The object whose private properties are to be set as non-enumerable.
 * @example ```ts
 * const obj = { _private: 'secret', public: 'hello world' };
 * setNonEnumerablePrivateProperties(obj);
 * for (let key in obj) {
 *   key;;
 * //=> 'public'
 * }
 * ```
 * @returns void
 */
export function setNonEnumerablePrivateProperties(object: Record<ObjectKey, any>): void {
  setNonEnumerable(object, ...Object.keys(object).filter((key) => key.charAt(0) === '_'))
}
