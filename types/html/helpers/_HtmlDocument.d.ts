import { _HtmlElementConstructorArgs } from '../types/_HtmlElementConstructorArgs';
import { _HtmlElement } from './_HtmlElement';
/**
 * Represents an HTML document.
 * @remarks Can be rendered as real html.
 * @example ```ts
 * import { html } from './html'
 * const { el, attr, tableFrom, comment } = html
 *
 * const doc = _HtmlDocument.simple({
 *   title: 'index',
 *   head: [el.style('.row { margin-top: 10px } .col { margin: 20px }')],
 *   body: [
 *     comment('First row'),
 *     el.div(
 *       attr.class('row'),
 *       el.div(
 *         attr.class('col'),
 *         el.h3('Table'),
 *         tableFrom([
 *           ['A', 'B', 'C'],
 *           ['Abe', 'Ben', 'Citron'],
 *           ['Ananas', 'Bongo', 'Cirkus'],
 *         ]),
 *         el.div(attr.class('col'), el.h3('Text'), el.p('This is a paragraph.')),
 *       ),
 *     ),
 *     comment('Second row'),
 *     el.div(
 *       attr.class('row'),
 *       el.div(
 *         attr.class('col'),
 *         el.h3('List'),
 *         el.ul(['one', 'two', 'three', 'four'].map((item) => el.li(attr.contenteditable(true), item))),
 *       ),
 *       el.div(attr.class('col'), el.h3('Button'), el.button([attr.class('btn btn-primary'), attr.onclick('doit()')], 'Click me!')),
 *     ),
 *   ],
 *   scripts: [
 *     el.script(`function doit() { console.log('did it'); }`),
 *   ],
 * })
 *
 * console.dir(doc, { depth: null })
 * console.log(doc.toString())
 * fs.writeFileSync(__filename + '.html', doc.toString())
 * ```
 */
export declare class _HtmlDocument extends _HtmlElement {
    /**
     * Generate simple HTML page with reasonable defaults.
     */
    static simple(options: {
        title: string;
        head?: (_HtmlElement | string)[];
        body?: (_HtmlElement | string)[];
        scripts?: _HtmlElement[];
    }): _HtmlDocument;
    /**
     * Creates an _HtmlDocument instance.
     * @param args Identical to the _HtmlElement constructors arguments to which they are passed directly.
     */
    constructor(...args: _HtmlElementConstructorArgs[]);
    /**
     * Render the HTML document as an html string.
     */
    toString(): string;
}
//# sourceMappingURL=_HtmlDocument.d.ts.map