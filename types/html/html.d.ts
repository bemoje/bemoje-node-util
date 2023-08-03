import { _HtmlElement } from './helpers/_HtmlElement';
import { AttributesMap } from './types/AttributesMap';
import { ElementsMap } from './types/ElementsMap';
/**
 * Module with functions for writing and rendering HTML with javascript syntax.
 * @module html
 */
export { attr, comment, el, tableFrom };
/**
 * Attribute name to _HtmlAttribute instance map.
 * The common HTML attributes are instantiated on module initialization.
 */
declare const attr: AttributesMap;
/**
 * Render an HTML comment.
 */
declare const comment: <T>(comment: T) => string;
/**
 * Element tag to _HtmlElement instance map.
 * The common HTML tags are instantiated on module initialization.
 */
declare const el: ElementsMap;
/**
 * Render an HTML table element from a 2D array table.
 * @param rows The table's rows
 * @param hasHeaders Whether the first row is a header row
 */
declare const tableFrom: (rows: string[][], hasHeaders?: boolean) => _HtmlElement;
//# sourceMappingURL=html.d.ts.map