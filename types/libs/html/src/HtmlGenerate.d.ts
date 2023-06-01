export type ElemConstructorArgs = Attr[] | Attr | Elem | Elem[] | string | string[];
export declare const el: Record<string, (...args: ElemConstructorArgs[]) => Elem>;
export declare const attr: Record<string, (value?: string | number | boolean) => Attr>;
export declare class Attr {
    name: string;
    value?: string | number | boolean | undefined;
    constructor(name: string, value?: string | number | boolean | undefined);
    get isBoolean(): boolean;
    toString(): string;
}
export declare class Elem {
    tag: string;
    attributes: Map<string, Attr>;
    children: (Elem | string)[];
    constructor(tag: string, ...args: ElemConstructorArgs[]);
    get isVoid(): boolean;
    toString(): string;
    toHtmlElement(): HTMLElement;
}
export declare class Doc extends Elem {
    /**
     * Generate simple HTML page with reasonable defaults.
     */
    static simple(options: {
        title: string;
        head?: (Elem | string)[];
        body?: (Elem | string)[];
        scripts?: Elem[];
    }): Doc;
    constructor(...args: ElemConstructorArgs[]);
    toString(): string;
}
export declare function comment<T>(comment: T): string;
export declare function tableFrom(rows: string[][], hasHeaderRow?: boolean): Elem;
declare const _default: {
    Doc: typeof Doc;
    Elem: typeof Elem;
    Attr: typeof Attr;
    el: Record<string, (...args: ElemConstructorArgs[]) => Elem>;
    attr: Record<string, (value?: string | number | boolean | undefined) => Attr>;
    comment: typeof comment;
    tableFrom: typeof tableFrom;
};
export default _default;
//# sourceMappingURL=HtmlGenerate.d.ts.map