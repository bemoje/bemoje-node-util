import { RegexScopeTreeNode } from './types/RegexScopeTreeNode';
/**
 * Builds a regex that matches a string between two strings. Supports regex instead of string.
 * @param left string or regex to match before
 * @param right string or regex to match after
 * @returns A generator function that takes a string and an optional boolean parameter.
 * The generator function yields nodes of type IRegexScopeTreeNode.
 * @throws If a match does not recognize itself as neither left nor right.
 * @example ```ts
 * const generator = regexScopeTree('(', ')')
 * const iterable = generator('(1+((3)+(1)))+(15+(21-(521))))', true)
 * console.dir([...iterable], { depth: null })
 * ```
 */
export declare function regexScopeTree(left: string | RegExp, right: string | RegExp): (string: string, yieldOnlyRootNodes?: boolean) => Generator<RegexScopeTreeNode>;
//# sourceMappingURL=regexScopeTree.d.ts.map