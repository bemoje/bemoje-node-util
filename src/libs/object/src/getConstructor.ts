import { Constructor } from '../../interfaces'

/**
 * Returns the class constructor object belonging to a given object's class of origin.
 */
export function getConstructor(o: string | number | boolean | Record<string, any>): Constructor {
  return Object.getPrototypeOf(o).constructor
}
