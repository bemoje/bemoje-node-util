import { _HtmlElementConstructorArgs } from '../types/_HtmlElementConstructorArgs';
import { _HtmlAttribute } from './_HtmlAttribute';
/**
 * Represents an HTML element.
 * @remarks Can be rendered as real html or converted to a real DOM element.
 */
export declare class _HtmlElement {
    tag: string;
    /**
     * The element's attributes.
     */
    attributes: Map<string, _HtmlAttribute>;
    /**
     * The element's children.
     */
    children: (_HtmlElement | string)[];
    /**
     * Creates an _HtmlElement instance.
     * @param tag The element's tag
     * @param args The element's attributes and children
     */
    constructor(tag: string, ...args: _HtmlElementConstructorArgs[]);
    /**
     * Whether the element is a void element.
     */
    get isVoid(): boolean;
    /**
     * Returns this instance as an actual DOM HTMLElement.
     */
    toHtmlElement(): HTMLElement;
    /**
     * Render the HTML element as a string.
     */
    toString(): string;
}
//# sourceMappingURL=_HtmlElement.d.ts.map