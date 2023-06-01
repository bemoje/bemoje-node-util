/**
 * Make an object's properties immutable, recursively.
 */
export function objDeepFreeze(o: Record<string | symbol, any>): Record<string | symbol, any> {
  for (const key of Reflect.ownKeys(o)) {
    const value = o[key]
    if ((value && typeof value === 'object') || typeof value === 'function') {
      objDeepFreeze(value)
    }
  }
  return Object.freeze(o)
}
