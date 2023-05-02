/**
 * Returns the prototype object belonging to a given object.
 * @param o - The object to get the prototype of.
 */
export function getPrototype(o: string | number | boolean | Record<string, any>): typeof Object.prototype {
  return Object.getPrototypeOf(o)
}
