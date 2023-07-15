import type { Constructor } from '../types/Constructor';
/**
 * This function is a mixin that adds an index to a class and provides several methods to get unique identifiers based on the class name and index.
 * @typeparam TBase - The type of the base constructor.
 * @param BaseConstructor The base constructor to extend.
 * @returns A constructor for a class that extends the base constructor and includes an index and methods for getting unique identifiers.
 * @example ```ts
 * //
 * ```
 */
export declare function MixinIndexed<TBase extends Constructor>(BaseConstructor: TBase): Constructor;
//# sourceMappingURL=MixinIndexed.d.ts.map