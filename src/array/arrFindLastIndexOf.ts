export function arrFindLastIndexOf<T>(input: Array<T>, predicate: (value: T) => boolean): number {
  for (let i = input.length - 1; i >= 0; i--) {
    if (predicate(input[i])) {
      return i
    }
  }
  return -1
}
