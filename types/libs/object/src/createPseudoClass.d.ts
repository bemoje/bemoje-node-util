/**
 * @throws if values array is passed in the returned function and if the number of keys length is smaller than the length of the passed values array.
 */
export type TPseudoClass<T> = (values?: T[]) => Record<string, T>;
/**
 * Returns an object factory function that instantiates objects, always with the same keys in the same order.
 */
export declare function createPseudoClass<T>(keys: string[], defaultValues?: T[]): TPseudoClass<T>;
//# sourceMappingURL=createPseudoClass.d.ts.map