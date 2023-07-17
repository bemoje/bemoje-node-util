import type { ConstructorOf } from '../types/ConstructorOf';
/**
 * Returns the constructor of the given object.
 * @template T - The type of the object.
 * @param o The object whose constructor is to be returned.
 * @returns The constructor of the object.
 * @example ```ts
 * class MyClass {}
 * getConstructor(new MyClass()) === MyClass;;
 * //=> true
 * ```
 */
export declare function getConstructor<T>(o: T): ConstructorOf<T>;
//# sourceMappingURL=getConstructor.d.ts.map