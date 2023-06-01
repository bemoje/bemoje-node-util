export function oEntriesArray<T>(o: Record<string, T>): Array<[string, T]> {
  return Array.from(Object.entries(o))
}
