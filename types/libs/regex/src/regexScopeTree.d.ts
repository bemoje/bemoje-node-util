import { RexecYield } from './rexec';
export interface IScopeNode {
    type: string;
    parent: IScopeNode | null;
    depth: number;
    left: RexecYield;
    right: RexecYield;
    between: RexecYield;
    children: IScopeNode[];
}
/**
 * Builds a regex that matches a string between two strings. Supports regex instead of string.
 * @param type - type of scope being matched
 * @param left - string or regex to match before
 * @param right - string or regex to match after
 * @param flags - regex flags - 'g' and 's' are always added to whatever flags are passed.
 * @example
 * ```ts
 * const regex = buildRegexBetween(/a/, /b/)
 * 'abc'.match(regex)?.groups?.mid // 'c'
 * ```
 */
export declare function regexScopeTree(type: string, left: string | RegExp, right: string | RegExp): (string: string, yieldOnlyRootNodes?: boolean) => Generator<IScopeNode>;
//# sourceMappingURL=regexScopeTree.d.ts.map