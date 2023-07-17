type ElemConstructorArgs = Attr[] | Attr | Elem | Elem[] | string | string[];
declare class Attr {
    name: string;
    value?: string | number | boolean | undefined;
    constructor(name: string, value?: string | number | boolean | undefined);
    get isBoolean(): boolean;
    toString(): string;
}
declare class Elem {
    tag: string;
    attributes: Map<string, Attr>;
    children: (Elem | string)[];
    constructor(tag: string, ...args: ElemConstructorArgs[]);
    get isVoid(): boolean;
    toString(): string;
    toHtmlElement(): HTMLElement;
}
declare class Doc extends Elem {
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
declare function comment<T>(comment: T): string;
declare function tableFrom(rows: string[][], hasHeaderRow?: boolean): Elem;
export declare const HtmlGenerator: {
    Doc: typeof Doc;
    Elem: typeof Elem;
    Attr: typeof Attr;
    el: Record<string, (...args: ElemConstructorArgs[]) => Elem>;
    attr: Record<string, (value?: string | number | boolean) => Attr>;
    comment: typeof comment;
    tableFrom: typeof tableFrom;
};
export {};
//# sourceMappingURL=HtmlGenerator.d.ts.map