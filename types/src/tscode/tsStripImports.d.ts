/**
 * Strips all import statements from a given TypeScript code string.
 * @param code - The TypeScript code to strip import statements from.
 * @returns The TypeScript code without import statements.
 * @example ```ts
 * const code = `
 * import { Component } from '@angular/core';
 * import { OnInit } from '@angular/core';
 * const a = 1;
 * `.trim()
 * tsStripImports(code)
 * //=> 'const a = 1;'
 * ```
 */
export declare function tsStripImports(code: string): string;
//# sourceMappingURL=tsStripImports.d.ts.map