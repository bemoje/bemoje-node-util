export function getOrElse<T>(obj: T | undefined, func: () => T): T {
  if (obj === undefined) return func()
  return obj
}
