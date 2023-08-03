import { ObjectKey } from '../types/ObjectKey';
/**
 * Updates the property descriptors of the specified properties on the given object.
 * @param object - The object whose property descriptors are to be updated.
 * @param properties - An array of property names for which the descriptors are to be updated.
 * @param update - A function that takes a property descriptor and a property name, and returns a new property descriptor.
 * @throws Will throw an error if any of the specified properties do not exist on the object.
 * @example ```ts
 * const obj = { a: 1, b: 2 };
 * objUpdatePropertyDescriptors(obj, ['a', 'b'], (descriptor, property) => {
 *   descriptor.writable = true;
 *   return obj;
 * });
 * ```
 */
export declare function objUpdatePropertyDescriptors<V>(object: Record<ObjectKey, V>, properties: string[], update: <T extends PropertyDescriptor>(descriptor: T, property: string) => T): void;
//# sourceMappingURL=objUpdatePropertyDescriptors.d.ts.map