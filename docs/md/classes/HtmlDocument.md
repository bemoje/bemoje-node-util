[@bemoje/node-util](/docs/md/index.md) / \_HtmlDocument

# Class: \_HtmlDocument

Represents an HTML document.

**`Remarks`**

Can be rendered as real html.

**`Example`**

```ts
import { attr, comment, el, tableFrom } from './html'

const doc = _HtmlDocument.simple({
  title: 'index',
  head: [el.style('.row { margin-top: 10px } .col { margin: 20px }')],
  body: [
    comment('First row'),
    el.div(
      attr.class('row'),
      el.div(
        attr.class('col'),
        el.h3('Table'),
        tableFrom([
          ['A', 'B', 'C'],
          ['Abe', 'Ben', 'Citron'],
          ['Ananas', 'Bongo', 'Cirkus'],
        ]),
        el.div(attr.class('col'), el.h3('Text'), el.p('This is a paragraph.')),
      ),
    ),
    comment('Second row'),
    el.div(
      attr.class('row'),
      el.div(
        attr.class('col'),
        el.h3('List'),
        el.ul(['one', 'two', 'three', 'four'].map((item) => el.li(attr.contenteditable(true), item))),
      ),
      el.div(attr.class('col'), el.h3('Button'), el.button([attr.class('btn btn-primary'), attr.onclick('doit()')], 'Click me!')),
    ),
  ],
  scripts: [
    el.script(`function doit() { console.log('did it'); }`),
    //
  ],
})

console.dir(doc, { depth: null })
//=> Shows a tree structure similar to a DOM.

console.log(doc.toString())
// => `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>index</title><!-- Bootstrap CSS --><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous" /><!-- Custom CSS --><style>body { margin: 50px; font-family: Arial, Helvetica, sans-serif; font-size: 12px; }</style><style>.row { margin-top: 10px } .col { margin: 20px }</style></head><body><!-- Content --><div id="root" class="container"><!-- First row --><div class="row"><div class="col"><h3>Table</h3><table class="table table-striped table-hover table-sm"><thead><tr><th>A</th><th>B</th><th>C</th></tr></thead><tbody><tr><td>Abe</td><td>Ben</td><td>Citron</td></tr><tr><td>Ananas</td><td>Bongo</td><td>Cirkus</td></tr></tbody></table><div class="col"><h3>Text</h3><p>This is a paragraph.</p></div></div></div><!-- Second row --><div class="row"><div class="col"><h3>List</h3><ul><li contenteditable>one</li><li contenteditable>two</li><li contenteditable>three</li><li contenteditable>four</li></ul></div><div class="col"><h3>Button</h3><button class="btn btn-primary" onclick="doit()">Click me!</button></div></div></div><!-- Bootstrap JS --><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script><!-- Custom JS --><script>function doit() { console.log('did it'); }</script></body></html>`
```

## Hierarchy

- [`_HtmlElement`](/docs/md/classes/HtmlElement.md)

  ↳ **`_HtmlDocument`**

## Table of contents

### Constructors

- [constructor](/docs/md/classes/HtmlDocument.md#constructor)

### Properties

- [attributes](/docs/md/classes/HtmlDocument.md#attributes)
- [children](/docs/md/classes/HtmlDocument.md#children)
- [tag](/docs/md/classes/HtmlDocument.md#tag)

### Accessors

- [isVoid](/docs/md/classes/HtmlDocument.md#isvoid)

### Methods

- [toHtmlElement](/docs/md/classes/HtmlDocument.md#tohtmlelement)
- [toString](/docs/md/classes/HtmlDocument.md#tostring)
- [simple](/docs/md/classes/HtmlDocument.md#simple)

## Constructors

### constructor

• **new _HtmlDocument**(`...args`)

Creates an _HtmlDocument instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...args` | [`_HtmlElementConstructorArgs`](/docs/md/index.md#_htmlelementconstructorargs)[] | Identical to the _HtmlElement constructors arguments to which they are passed directly. |

#### Overrides

[_HtmlElement](/docs/md/classes/HtmlElement.md).[constructor](/docs/md/classes/HtmlElement.md#constructor)

#### Defined in

[src/html/helpers/_HtmlDocument.ts:99](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/html/helpers/_HtmlDocument.ts#L99)

## Properties

### attributes

• **attributes**: `Map`<`string`, [`_HtmlAttribute`](/docs/md/classes/HtmlAttribute.md)\>

The element's attributes.

#### Inherited from

[_HtmlElement](/docs/md/classes/HtmlElement.md).[attributes](/docs/md/classes/HtmlElement.md#attributes)

#### Defined in

[src/html/helpers/_HtmlElement.ts:13](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/html/helpers/_HtmlElement.ts#L13)

___

### children

• **children**: (`string` \| [`_HtmlElement`](/docs/md/classes/HtmlElement.md))[] = `[]`

The element's children.

#### Inherited from

[_HtmlElement](/docs/md/classes/HtmlElement.md).[children](/docs/md/classes/HtmlElement.md#children)

#### Defined in

[src/html/helpers/_HtmlElement.ts:19](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/html/helpers/_HtmlElement.ts#L19)

___

### tag

• **tag**: `string`

The element's tag

#### Inherited from

[_HtmlElement](/docs/md/classes/HtmlElement.md).[tag](/docs/md/classes/HtmlElement.md#tag)

#### Defined in

[src/html/helpers/_HtmlElement.ts:27](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/html/helpers/_HtmlElement.ts#L27)

## Accessors

### isVoid

• `get` **isVoid**(): `boolean`

Whether the element is a void element.

#### Returns

`boolean`

#### Inherited from

\_HtmlElement.isVoid

#### Defined in

[src/html/helpers/_HtmlElement.ts:47](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/html/helpers/_HtmlElement.ts#L47)

## Methods

### toHtmlElement

▸ **toHtmlElement**(): `HTMLElement`

Returns this instance as an actual DOM HTMLElement.

#### Returns

`HTMLElement`

#### Inherited from

[_HtmlElement](/docs/md/classes/HtmlElement.md).[toHtmlElement](/docs/md/classes/HtmlElement.md#tohtmlelement)

#### Defined in

[src/html/helpers/_HtmlElement.ts:54](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/html/helpers/_HtmlElement.ts#L54)

___

### toString

▸ **toString**(): `string`

Render the HTML document as an html string.

#### Returns

`string`

#### Overrides

[_HtmlElement](/docs/md/classes/HtmlElement.md).[toString](/docs/md/classes/HtmlElement.md#tostring)

#### Defined in

[src/html/helpers/_HtmlDocument.ts:106](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/html/helpers/_HtmlDocument.ts#L106)

___

### simple

▸ `Static` **simple**(`options`): [`_HtmlDocument`](/docs/md/classes/HtmlDocument.md)

Generate simple HTML page with reasonable defaults.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.body?` | (`string` \| [`_HtmlElement`](/docs/md/classes/HtmlElement.md))[] |
| `options.head?` | (`string` \| [`_HtmlElement`](/docs/md/classes/HtmlElement.md))[] |
| `options.scripts?` | [`_HtmlElement`](/docs/md/classes/HtmlElement.md)[] |
| `options.title` | `string` |

#### Returns

[`_HtmlDocument`](/docs/md/classes/HtmlDocument.md)

#### Defined in

[src/html/helpers/_HtmlDocument.ts:57](https://github.com/bemoje/bemoje-node-util/blob/b545282/src/html/helpers/_HtmlDocument.ts#L57)
