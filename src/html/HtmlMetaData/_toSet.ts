export function _toSet(string: string, ...concatSets: Set<string>[]): Set<string> {
  return new Set(string.split(',').concat(concatSets.map((set) => Array.from(set)).flat()))
}
