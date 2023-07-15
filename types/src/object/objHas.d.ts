import { ObjectKey } from '../types/ObjectKey';
/**
 * Checks if an object has a specific key.
 * @param obj The object to check.
 * @template K - The type of the keys in the object.
 * @returns Returns true if the object has the key, false otherwise.
 * @param key The key to check for.
 * @example ```ts
 * const myObj = { name: 'John', age: 30 };
 * objHas(myObj, 'name');
 * //=> true
 * objHas(myObj, 'email');
 * //=> false
 * ```
 */
export declare function objHas<V>(obj: Record<ObjectKey, V>, key: ObjectKey): boolean;
//# sourceMappingURL=objHas.d.ts.map