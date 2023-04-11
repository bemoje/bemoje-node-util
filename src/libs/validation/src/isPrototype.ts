import { isObject } from './isObject';

/**
 * Determine wheter a given object is a prototype-object (obj.constructor.prototype === obj).
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function isPrototype(value: any): boolean {
  if (!isObject(value)) return false;
  if (!('constructor' in value)) return false;
  return value.constructor.prototype === value;
}
