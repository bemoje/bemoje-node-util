import { attr } from './attr'
import { el } from './el'
import { _HtmlElement } from './helpers/_HtmlElement'

/**
 * Render an HTML table element from a 2D array table.
 * @param rows The table's rows
 * @param hasHeaders Whether the first row is a header row
 */

export const tableFrom = (rows: string[][], hasHeaders = true): _HtmlElement => {
  const thead = el.thead()
  if (hasHeaders) {
    rows = rows.slice()
    thead.children.push(el.tr((rows.shift() || []).map((cell) => el.th(cell))))
  }
  return el.table(
    attr.class('table table-striped table-hover table-sm'),
    thead,
    el.tbody(rows.map((row) => el.tr(row.map((cell) => el.td(cell))))),
  )
}
