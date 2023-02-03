/**
 * Returns the set intersection of a provded array of Set instances.
 * @param sets - an array of Set instances
 */
export function setIntersection(sets: Array<Set<any>>): Set<any> {
  const result = new Set(sets[0].values());
  for (let i = 1; i < sets.length; i++) {
    for (const value of result.values()) {
      if (!sets[i].has(value)) {
        result.delete(value);
      }
    }
  }
  return result;
}

/**
 * Returns the set union of a provded array of Set instances.
 * @param sets - an array of Set instances
 */
export function setUnion(sets: Array<Set<any>>): Set<any> {
  const result = new Set(sets[0].values());
  for (let i = 1; i < sets.length; i++) {
    for (const value of sets[i].values()) {
      result.add(value);
    }
  }
  return result;
}
