import { setNonEnumerable } from './setNonEnumerable'
/**
 * Set the 'enumerable' property descriptor attributes on the target object to false for all property names that start with '_' (underscore).
 * @param object The target object.
 */
export function setNonEnumerablePrivateProperties(object: Record<string, any>): void {
  setNonEnumerable(object, ...Object.keys(object).filter((key) => key.charAt(0) === '_'))
}
