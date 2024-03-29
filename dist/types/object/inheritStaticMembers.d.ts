import type { Constructor } from '../types/Constructor';
/**
 * Copies static members from a source constructor to a target constructor, excluding specified keys.
 * @param target The target constructor to inherit static members.
 * @param source The source constructor to copy static members from.
 * @param ignoreKeys An optional array of keys to exclude from copying.
 * @returns The target constructor with the inherited static members.
 * @throws If `target` or `source` is not a constructor.
 * @param - The keys that should not be inherited.
 * @example ```ts
 * class Parent {
 *   static parentStaticMethod() {
 *     return 'Parent static method'
 *   }
 * }
 * class Child {
 *   static childStaticMethod() {
 *     return 'Child static method'
 *   }
 * }
 * inheritStaticMembers(Child, Parent)
 * Child.parentStaticMethod() //=> 'Parent static method'
 * ```
 */
export declare function inheritStaticMembers(target: Constructor, source: Constructor, ignoreKeys?: string[]): Constructor;
//# sourceMappingURL=inheritStaticMembers.d.ts.map