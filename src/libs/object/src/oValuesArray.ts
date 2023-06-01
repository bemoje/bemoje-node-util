export function oValuesArray<T>(o: Record<string, T>): T[] {
  return Array.from(Object.values(o))
}
