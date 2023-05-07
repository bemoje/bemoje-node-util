import type { GenericArgs } from '../../interfaces';
export declare class Doc {
    elements: (Elem | string)[];
    constructor(...elements: (Elem | string)[]);
    toString(): string;
}
export declare class Elem {
    type: string;
    attributes: Map<string, Att>;
    elements: (Elem | string)[];
    isVoid: boolean;
    constructor(type: string, ...args: (Att[] | Elem | string)[]);
    get description(): string;
    private renderAttributes;
    private renderChildren;
    toString(): string;
    toHtmlElement(): HTMLElement;
}
export declare class Att {
    type: string;
    value?: string | undefined;
    isBoolean: boolean;
    constructor(type: string, value?: string | undefined);
    toString(): string;
    get relatedTags(): string[];
    get description(): string;
}
declare function defineElementType(type: string): (...args: GenericArgs) => Elem;
declare function defineAttributeType(type: string): (value?: string) => Att;
declare function createTable(rows: string[][], hasHeader?: boolean): Elem;
export declare const HtmlGenerate: {
    el: Record<string, (...args: GenericArgs) => Elem>;
    at: Record<string, (...args: GenericArgs) => Att>;
    comment: (comment: string) => string;
    doctype: (type?: string) => string;
    defineElementType: typeof defineElementType;
    defineAttributeType: typeof defineAttributeType;
    createTable: typeof createTable;
};
export {};
//# sourceMappingURL=HtmlGenerate.d.ts.map