/**
 * Determine wheter a given object is a prototype-object (obj.constructor.prototype === obj).
 */
export function isPrototype<T>(value: T): boolean {
  if (value === null || typeof value !== 'object') return false
  if (!('constructor' in value)) return false
  return value.constructor.prototype === value
}
