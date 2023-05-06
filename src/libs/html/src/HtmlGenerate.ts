import {
  HTML_VOID_TAGS,
  HTML_BOOLEAN_ATTRIBUTES,
  HTML_EVENT_HANDLER_ATTRIBUTES,
  HTML_ELEMENTS,
  HTML_ATTRIBUTES,
} from './html-meta-data'

class Doc {
  elements: (Elem | string)[] = []

  constructor(...elements: (Elem | string)[]) {
    this.elements = elements
  }

  toString(): string {
    return this.elements.join('')
  }
}

class Elem {
  type: string
  attributes: Map<string, Att>
  elements: (Elem | string)[]
  isVoid: boolean

  constructor(type: string, ...args: (Att[] | Elem | string)[]) {
    this.type = type
    this.checkValidType()
    this.isVoid = HTML_VOID_TAGS.has(type)
    this.attributes = new Map()
    this.elements = []
    for (const arg of args) {
      if (Array.isArray(arg)) {
        for (const att of arg) {
          this.attributes.set(att.type, att)
        }
      } else {
        if (this.isVoid) throw new Error("Void elements types can't have children. Got type: " + type)
        this.elements.push(arg as Elem | string)
      }
    }
  }

  get description(): string {
    return HTML_ELEMENTS[this.type].description
  }

  checkValidType() {
    if (!Object.hasOwn(HTML_ELEMENTS, this.type)) {
      //throw new Error(`Invalid HTMLElement tag: ${this.type}`)
      console.log(`Maybe invalid HTMLElement tag: ${this.type}`)
    }
  }

  private renderAttributes() {
    return this.attributes.size ? ' ' + Array.from(this.attributes.values()).join(' ') : ''
  }

  private renderChildren() {
    return this.elements.join('')
  }

  toString() {
    return `<${this.type}${this.renderAttributes()}${this.isVoid ? ' />' : `>${this.renderChildren()}</${this.type}>`}`
  }

  toHtmlElement() {
    const elem = document.createElement(this.type)
    for (const attr of this.attributes.values()) {
      elem.setAttribute(attr.type, attr.value || '')
    }
    for (const child of this.elements) {
      if (typeof child === 'string') {
        elem.appendChild(document.createTextNode(child))
      } else {
        elem.appendChild(child.toHtmlElement())
      }
    }
    return elem
  }
}

class Att {
  isBoolean: boolean

  constructor(public type: string, public value?: string) {
    this.checkValidType()
    this.isBoolean = HTML_BOOLEAN_ATTRIBUTES.has(type)
  }

  checkValidType() {
    if (
      !Object.hasOwn(HTML_ATTRIBUTES, this.type) &&
      !HTML_EVENT_HANDLER_ATTRIBUTES.has(this.type) &&
      !this.type.startsWith('data-')
    ) {
      // throw new Error(`Invalid attribute type: ${this.type}`)
      console.log(`Maybe invalid attribute type: ${this.type}`)
    }
  }

  toString(): string {
    return `${this.type}${this.isBoolean ? '' : `="${this.value || ''}"`}`
  }

  get relatedTags(): string[] {
    return HTML_ATTRIBUTES[this.type].relatedTags
  }

  get description(): string {
    return HTML_ATTRIBUTES[this.type].description
  }
}

const el: Record<string, (...args: any) => Elem> = {}
for (const type of Object.keys(HTML_ELEMENTS)) {
  el[type] = (...args) => new Elem(type, ...args)
}
function defineElementType(type: string): (...args: any[]) => Elem {
  el[type] = (...args) => new Elem(type, ...args)
  HTML_ELEMENTS[type] = { description: 'Custom Element' }
  return el[type]
}

const at: Record<string, (...args: any) => Att> = {}
for (const type of Object.keys(HTML_ATTRIBUTES)) {
  at[type] = (value?: string) => new Att(type, value)
}
for (const type of HTML_EVENT_HANDLER_ATTRIBUTES) {
  at[type] = (value?: string) => new Att(type, value)
}
function defineAttributeType(type: string): (value?: string) => Att {
  at[type] = (value?: string) => new Att(type, value)
  HTML_ATTRIBUTES[type] = { description: 'Custom Element', relatedTags: [] }
  return at[type]
}

const comment = (comment: string): string => `<!-- ${comment} -->`
const doctype = (type = 'html'): string => `<!DOCTYPE ${type}>`

function createTable(rows: string[][], hasHeader = false): Elem {
  const table = el.table()
  for (let i = 0; i < rows.length; i++) {
    const isHeader = i === 0 && hasHeader
    const row = rows[i]
    const tr = el.tr()
    for (const cell of row) {
      tr.elements.push(isHeader ? el.th(cell) : el.td(cell))
    }
    table.elements.push(tr)
  }
  return table
}

export default { Doc, el, at, comment, doctype, defineElementType, defineAttributeType }

// const doc = new Doc(
//   doctype(),
//   el.html(
//     [at.lang('en')],
//     el.head(
//       el.meta([at.charset('utf-8')]),
//       el.meta([at['http-equiv']('X-UA-Compatible'), at.content('ie=edge')]),
//       el.meta([at.name('viewport'), at.content('width=device-width, initial-scale=1.0')]),
//       comment('Bootstrap starter css template'),
//       el.title('my title'),
//       el.link([
//         at.rel('stylesheet'),
//         at.href('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'),
//       ]),
//       el.style(`
//         body {
//           margin: 0;
//           box-sizing: border-box;
//         }
//         .container {
//           line-height: 150%;
//         }
//       `),
//     ),
//     el.body(
//       el.div(
//         [at.id('outer')],
//         el.div(
//           [at.id('inner'), at.class('container bg-primary text-white')],
//           'some text',
//           'some more text',
//           el.div(
//             'some text',
//             el.ul([at.id('messages')], el.li('some message'), el.li('wow')),
//             el.div(
//               [at.id('input-area')],
//               el.textarea([at.id('uInput'), at.placeholder('Text...'), at.selected()], 'This is the text area text'),
//             ),
//           ),
//           el.ul([at.id('textlist')], el.li('something'), el.li('cool')),
//         ),
//         el.button([at.id('btn'), at.class('btn btn-primary'), at.onclick('doit()')], 'Click me!'),
//       ),
//       createTable(['a b c'.split(' '), '1 2 3'.split(' '), 'x y z'.split(' ')], true),
//       comment('Jquery import'),
//       el.script([
//         at.src('https://code.jquery.com/jquery-3.5.1.slim.min.js'),
//         at.crossorigin('anonymous'),
//         at.integrity('sha256-DrT5NfxfbHvMHux31Lkhxg42LY6of8TaYyK50jnxRnM='),
//       ]),
//       comment('Own script'),
//       el.script(`function doit() {console.log('did it')}`),
//     ),
//   ),
// )

// console.log(doc.toString())
// import fs from 'fs'
// fs.writeFileSync(__filename + '.html', doc.toString())
