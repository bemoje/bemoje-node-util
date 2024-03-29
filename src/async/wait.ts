import { assertion } from '../validation/assertion'
import { isPositiveInteger } from '../validation/numbers/isPositiveInteger'

/**
 * This function waits for a specified number of seconds before resolving a promise.
 * @returns A promise that resolves after the specified number of seconds.
 */
export function wait(ms = 0): Promise<void> {
  return new Promise((resolve) => {
    assertion(ms, isPositiveInteger)
    setTimeout(resolve, ms)
  })
}
