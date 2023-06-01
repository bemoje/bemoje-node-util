export function oKeysArray<T>(o: Record<string, T>): string[] {
  return Array.from(Object.keys(o))
}
