/**
 * Strips TypeScript types from the provided code string.
 * @remarks This function is useful when you want to remove TypeScript types from a code string.
 * @param code The TypeScript code string from which types should be stripped.
 * @returns The provided code string with all TypeScript types removed.
 * @example ```ts
 * tsDocStripTypes('let x: number = 5;');;
 * //=> 'let x = 5;'
 * ```
 */
export declare function tsDocStripTypes(code: string): string;
//# sourceMappingURL=tsDocStripTypes.d.ts.map