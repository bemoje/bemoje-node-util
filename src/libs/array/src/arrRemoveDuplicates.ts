/**
 * Remove duplicates from an array
 */
export function arrRemoveDuplicates<T>(array: T[]): T[] {
  return Array.from(new Set(array))
}
