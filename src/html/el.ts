import { _HTML_ELEMENTS } from './data/_HTML_ELEMENTS'
import { _HtmlDocument } from './helpers/_HtmlDocument'
import { _HtmlElement } from './helpers/_HtmlElement'
import { _HtmlElementConstructorArgs } from './types/_HtmlElementConstructorArgs'
import { ElementsMap } from './types/ElementsMap'

/**
 * Element tag to _HtmlElement instance map.
 * The common HTML tags are instantiated on module initialization.
 */

export const el: ElementsMap = (() => {
  const elements: ElementsMap = {}
  for (const tag of _HTML_ELEMENTS) {
    elements[tag] = (...args: _HtmlElementConstructorArgs[]) => new _HtmlElement(tag, ...args)
  }
  elements['html'] = (...args: _HtmlElementConstructorArgs[]) => new _HtmlDocument('html', ...args)
  return elements
})()
