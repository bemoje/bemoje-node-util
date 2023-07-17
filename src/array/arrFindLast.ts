export function arrFindLast<T>(input: Array<T>, predicate: (value: T) => boolean): T | undefined {
  for (let i = input.length - 1; i >= 0; i--) {
    if (predicate(input[i])) {
      return input[i]
    }
  }
}
