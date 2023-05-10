/**
 * Returns whether an object has no enumerable own keys defined.
 */
export function objIsEmpty<T>(obj: Record<string, T>): boolean {
  for (const key of Object.keys(obj)) {
    if (key) return false
  }
  return true
}
