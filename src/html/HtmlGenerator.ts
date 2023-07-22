import { _HTML_ATTRIBUTES } from './HtmlMetaData/_HTML_ATTRIBUTES'
import { _HTML_BOOLEAN_ATTRIBUTES } from './HtmlMetaData/_HTML_BOOLEAN_ATTRIBUTES'
import { _HTML_ELEMENTS } from './HtmlMetaData/_HTML_ELEMENTS'
import { _HTML_VOID_ELEMENTS } from './HtmlMetaData/_HTML_VOID_ELEMENTS'

type ElemConstructorArgs = Attr[] | Attr | Elem | Elem[] | string | string[]

const el: Record<string, (...args: ElemConstructorArgs[]) => Elem> = {}
const attr: Record<string, (value?: string | number | boolean) => Attr> = {}

class Attr {
  constructor(
    public name: string,
    public value?: string | number | boolean,
  ) {}

  get isBoolean(): boolean {
    return _HTML_BOOLEAN_ATTRIBUTES.has(this.name)
  }

  toString(): string {
    return `${this.name}${this.isBoolean ? '' : `="${this.value || ''}"`}`
  }
}

class Elem {
  attributes: Map<string, Attr> = new Map()
  children: (Elem | string)[] = []

  constructor(
    public tag: string,
    ...args: ElemConstructorArgs[]
  ) {
    for (const arg of args.flat()) {
      if (arg instanceof Attr) {
        this.attributes.set(arg.name, arg)
      } else if (typeof arg === 'string' && tag !== 'script' && tag !== 'style') {
        this.children.push(arg.replace(/\r*\n/g, '<br />'))
      } else {
        this.children.push(arg)
      }
    }
    if (this.children.length && this.isVoid) {
      throw new Error('Void elements cannot have children.')
    }
  }

  get isVoid(): boolean {
    return _HTML_VOID_ELEMENTS.has(this.tag)
  }

  toString(): string {
    return `<${this.tag}${this.attributes.size ? ' ' + Array.from(this.attributes.values()).join(' ') : ''}${
      this.isVoid ? ' />' : `>${this.children.join('')}</${this.tag}>`
    }`
  }

  toHtmlElement(): HTMLElement {
    const elem = document.createElement(this.tag)
    for (const attr of this.attributes.values()) {
      elem.setAttribute(attr.name, attr.value?.toString() || '')
    }
    for (const child of this.children) {
      if (typeof child === 'string') {
        elem.appendChild(document.createTextNode(child))
      } else {
        elem.appendChild(child.toHtmlElement())
      }
    }
    return elem
  }
}

class Doc extends Elem {
  /**
   * Generate simple HTML page with reasonable defaults.
   */
  static simple(options: { title: string; head?: (Elem | string)[]; body?: (Elem | string)[]; scripts?: Elem[] }): Doc {
    return new Doc(
      attr.lang('en'),
      el.head(
        el.meta(attr.charset('utf-8')),
        el.meta(attr.name('viewport'), attr.content('width=device-width, initial-scale=1')),
        el.title(options.title || 'index'),
        comment('Bootstrap CSS'),
        el.link(
          attr.rel('stylesheet'),
          attr.href('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css'),
          attr.integrity('sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ'),
          attr.crossorigin('anonymous'),
        ),
        comment('Custom CSS'),
        el.style('body { margin: 50px; font-family: Arial, Helvetica, sans-serif; font-size: 12px; }'),
        ...(options.head || []),
      ),
      el.body(
        comment('Content'),
        el.div(attr.id('root'), attr.class('container'), ...(options.body || [])),
        comment('Bootstrap JS'),
        el.script(
          attr.src('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js'),
          attr.integrity('sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe'),
          attr.crossorigin('anonymous'),
        ),
        comment('Custom JS'),
        ...(options.scripts || []),
      ),
    )
  }

  constructor(...args: ElemConstructorArgs[]) {
    super('html', ...args)
  }
  toString(): string {
    return '<!DOCTYPE html>' + super.toString()
  }
}

function comment<T>(comment: T): string {
  return '<!-- ' + comment + ' -->'
}

function tableFrom(rows: string[][], hasHeaderRow = true): Elem {
  const thead = el.thead()
  if (hasHeaderRow) {
    rows = rows.slice()
    thead.children.push(el.tr((rows.shift() || []).map((cell) => el.th(cell))))
  }
  return el.table(
    attr.class('table table-striped table-hover table-sm'),
    thead,
    el.tbody(rows.map((row) => el.tr(row.map((cell) => el.td(cell))))),
  )
}

for (const tag of _HTML_ELEMENTS) {
  el[tag] = (...args: ElemConstructorArgs[]) => new Elem(tag, ...args)
}

el['html'] = (...args: ElemConstructorArgs[]) => new Doc('html', ...args)

for (const name of _HTML_ATTRIBUTES) {
  attr[name] = (value?: string | number | boolean) => new Attr(name, value)
}

export const HtmlGenerator = {
  Doc,
  Elem,
  Attr,
  el,
  attr,
  comment,
  tableFrom,
}
