/**
 * Sets the name of a function.
 * @param name The name to set.
 * @param fun The function to set the name of.
 */
export function funSetName<T>(name: string, fun: T): T {
  Object.defineProperty(fun, 'name', { value: name, configurable: true })
  return fun
}
