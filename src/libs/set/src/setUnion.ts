/**
 * Returns the set union of a provded array of Set instances.
 * @param sets - an array of Set instances
 */
export function setUnion<T>(sets: Array<Set<T>>): Set<T> {
  const result = new Set(sets[0].values())
  for (let i = 1; i < sets.length; i++) {
    for (const value of sets[i].values()) {
      result.add(value)
    }
  }
  return result
}
