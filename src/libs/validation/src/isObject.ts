/**
 * Determine wheter the argument is a Object (is typeof object but not null).
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function isObject(value: any): boolean {
  return value !== null && typeof value === 'object'
}
