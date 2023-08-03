export function getOrThrow<T>(obj: T | undefined, error: Error): T {
  if (obj === undefined) throw error
  return obj
}
