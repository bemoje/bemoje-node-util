import type { ExistentValue } from '../../interfaces'
import { isPrototype } from './isPrototype'

/**
 * Determine if value is a constructor function
 */
export function isConstructor(value: ExistentValue): boolean {
  return (
    typeof value === 'function' &&
    'prototype' in value &&
    isPrototype(value.prototype) &&
    value === value.prototype.constructor
  )
}
