/**
 * Returns the prototype object belonging to a given object.
 * @param o - The object to get the prototype of.
 */
export function getPrototype(o: typeof Object.prototype): typeof Object.prototype {
  return Object.getPrototypeOf(o)
}
