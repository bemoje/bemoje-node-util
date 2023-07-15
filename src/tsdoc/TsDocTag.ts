import { arrLast } from '../array/arrLast'

/**
 * A tag in a TsDoc instance.
 */
export class TsDocTag {
  /**
   * @param tag The kind of tag.
   * @param name The tag's name parameter, if it has one.
   */
  constructor(public tag: string, public name: string, public description: string[]) {
    if (tag === 'example') {
      const des = this.description.join('\n').trim().split('\n')
      if (arrLast(des).includes('```')) {
        des.pop()
      }
      if (des[0].includes('```')) {
        des.shift()
      }
      this.description = des
    }
  }

  /**
   * Renders the tag as a string.
   * @remarks Ensures that example tags are formatted as markdown ts-code blocks.
   */
  toString(): string {
    let result = this.tag === 'description' ? '' : '@' + this.tag
    result = result.trim()
    if (this.name) result += ' ' + this.name
    if (this.description.length) {
      let des = this.description.join('\n')
      if (this.tag === 'example') {
        des = '```ts\n' + des + '\n```'
      }
      result += ' ' + des
      result = result.trim()
    }
    return result
  }
}
