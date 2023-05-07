/**
 * Determine wheter the argument is a Object (is typeof object but not null).
 */
export function isObject<T>(value: T): boolean {
  return value !== null && typeof value === 'object'
}
