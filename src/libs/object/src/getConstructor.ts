import type { Constructor, ExistentValue } from '../../interfaces'

/**
 * Returns the class constructor object belonging to a given object's class of origin.
 */
export function getConstructor(o: ExistentValue): Constructor {
  return Object.getPrototypeOf(o).constructor
}
