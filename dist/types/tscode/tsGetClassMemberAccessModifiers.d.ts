/**
 * Returns a map of the private and protected class properties and methods of the provided TypeScript code for a class.
 * @remarks
 * This function does not handle public class members as they do not explicitly have an access modifier in TypeScript.
 * @param code - The TypeScript code string to extract the class member access modifiers from.
 * @returns A record where the keys are the names of the class members and the values are their corresponding access modifiers.
 * @throws an error if the provided code string is not valid TypeScript code.
 * @example ```ts
 * const code = `
 * class MyClass {
 *   private myPrivateMethod() {}
 *   protected myProtectedMethod() {}
 * }`;
 * tsGetClassMemberAccessModifiers(code);
 * //=> { myPrivateMethod: 'private', myProtectedMethod: 'protected' }
 * ```
 */
export declare function tsGetClassMemberAccessModifiers(code: string): Record<string, 'protected' | 'private'>;
//# sourceMappingURL=tsGetClassMemberAccessModifiers.d.ts.map