import { _HTML_ATTRIBUTES } from './data/_HTML_ATTRIBUTES'
import { _HtmlAttribute } from './helpers/_HtmlAttribute'
import { AttributesMap } from './types/AttributesMap'

/**
 * Attribute name to _HtmlAttribute instance map.
 * The common HTML attributes are instantiated on module initialization.
 */
export const attr: AttributesMap = (() => {
  const attributes: AttributesMap = {}
  for (const name of _HTML_ATTRIBUTES) {
    attributes[name] = (value?: string | number | boolean) => new _HtmlAttribute(name, value)
  }
  return attributes
})()
