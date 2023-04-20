/**
 * Returns true if the first set is a superset of the second set.
 */
export function setIsSuperset<T>(set: Set<T>, subset: Set<T>): boolean {
  for (const elem of subset) {
    if (!set.has(elem)) {
      return false
    }
  }
  return true
}
