/**
 * Represents an HTML attribute.
 * @remarks Can be rendered as real html or converted to a real DOM attribute from the _HtmlElement class.
 */
export declare class _HtmlAttribute {
    name: string;
    value?: string | number | boolean | undefined;
    /**
     * Creates an _HtmlAttribute instance.
     * @param name The attribute's name
     * @param value The attribute's value
     */
    constructor(name: string, value?: string | number | boolean | undefined);
    /**
     * Whether the attribute is a boolean attribute.
     */
    get isBoolean(): boolean;
    /**
     * Render the HTML attribute as a string.
     */
    toString(): string;
}
//# sourceMappingURL=_HtmlAttribute.d.ts.map