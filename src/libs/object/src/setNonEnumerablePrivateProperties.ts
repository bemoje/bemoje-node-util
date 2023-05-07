import { setNonEnumerable } from './setNonEnumerable'
import type { Obj } from '../../interfaces'
/**
 * Set the 'enumerable' property descriptor attributes on the target object to false for all property names that start with '_' (underscore).
 * @param object The target object.
 */
export function setNonEnumerablePrivateProperties(object: Obj): void {
  setNonEnumerable(object, ...Object.keys(object).filter((key) => key.charAt(0) === '_'))
}
