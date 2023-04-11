import { isPrototype } from './isPrototype';

/**
 * Determine if value is a constructor function
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function isConstructor(value: any): boolean {
  return (
    typeof value === 'function' &&
    'prototype' in value &&
    isPrototype(value.prototype) &&
    value === value.prototype.constructor
  );
}
