/**
 * @throws if values array is passed in the returned function and if the number of keys length is smaller than the length of the passed values array.
 */
export type TPseudoClass<T> = (values?: T[]) => Record<string, T>

/**
 * Returns an object factory function that instantiates objects, always with the same keys in the same order.
 */
export function createPseudoClass<T>(keys: string[], defaultValues?: T[]): TPseudoClass<T> {
  const numKeys = keys.length
  if (defaultValues && defaultValues.length > numKeys) {
    throw new Error('defaultValues length larger than keys length.')
  }
  return function factory(values?: T[]) {
    if (values && values.length > numKeys) {
      throw new Error('values length larger than keys length.')
    }
    const o = {}
    for (let i = 0; i < numKeys; i++) {
      let value
      if (values) {
        value = values[i]
        if (value === undefined && defaultValues) {
          value = defaultValues[i]
        }
      } else if (defaultValues) {
        value = defaultValues[i]
      }
      Object.defineProperty(o, keys[i], {
        enumerable: true,
        writable: true,
        configurable: true,
        value,
      })
    }
    return o
  }
}
