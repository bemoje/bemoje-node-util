/**
 * Determine wheter a given object is a prototype-object (obj.constructor.prototype === obj).
 */
export function isPrototype(value: any): boolean {
  if (!isObject(value)) return false;
  if (!('constructor' in value)) return false;
  return value.constructor.prototype === value;
}

/**
 * Determine wheter the argument is a Object (is typeof object but not null).
 */
export function isObject(value: any): boolean {
  return value !== null && typeof value === 'object';
}

/**
 * Determine if value is a constructor function
 */
export function isConstructor(value: any): boolean {
  return (
    typeof value === 'function' &&
    'prototype' in value &&
    isPrototype(value.prototype) &&
    value === value.prototype.constructor
  );
}
