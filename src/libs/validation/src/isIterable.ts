/**
 * Check if an object is iterable
 * @param o The object to check
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function isIterable(o: any): boolean {
  return (
    typeof Symbol !== 'undefined' &&
    Symbol &&
    'iterator' in Symbol &&
    o != null &&
    typeof o[Symbol.iterator] === 'function'
  )
}
