/**
 * Check if an object is iterable
 * @param o The object to check
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function isIterable<T>(o: T): boolean {
  return (
    typeof Symbol !== 'undefined' &&
    Symbol &&
    'iterator' in Symbol &&
    o != null &&
    typeof o === 'object' &&
    Symbol.iterator in o &&
    typeof o[Symbol.iterator] === 'function'
  )
}
