import { Constructor } from '../types/Constructor';
/**
 * @typeparam TBase - The type of the base constructor.
 * @param BaseConstructor The base constructor to extend.
 * @returns A constructor for a class that extends the base constructor and includes an index and methods for getting unique identifiers.
 * @example ```ts
 * //
 * ```
 */
export declare function MixinEventEmitter<TBase extends Constructor>(BaseConstructor: TBase): Constructor;
//# sourceMappingURL=MixinEventEmitter.d.ts.map