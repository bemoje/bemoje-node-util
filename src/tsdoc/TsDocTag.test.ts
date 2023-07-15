import { TsDocTag } from './TsDocTag'

describe(TsDocTag.name, () => {
  describe('constructor', () => {
    it('should set the tag, name, and description properties', () => {
      const tag = 'example'
      const name = 'exampleName'
      const description = ['example description']
      const tsDocTag = new TsDocTag(tag, name, description)
      expect(tsDocTag.tag).toBe(tag)
      expect(tsDocTag.name).toBe(name)
      expect(tsDocTag.description).toEqual(description)
    })

    it('should remove leading and trailing code blocks from description if tag is "example"', () => {
      const tag = 'example'
      const name = 'exampleName'
      const description = ['```', 'example description', '```']
      const tsDocTag = new TsDocTag(tag, name, description)
      expect(tsDocTag.description).toEqual(['example description'])
    })

    it('should correctly initialize TsDocTag instance', () => {
      const tag = new TsDocTag('param', 'name', ['description line 1', 'description line 2'])
      expect(tag.tag).toEqual('param')
      expect(tag.name).toEqual('name')
      expect(tag.description).toEqual(['description line 1', 'description line 2'])
    })
  })

  describe('toString', () => {
    it('should return the tag as a string', () => {
      const tag = 'param'
      const name = 'source'
      const description = ['The source code.']
      const tsDocTag = new TsDocTag(tag, name, description)
      const result = tsDocTag.toString()
      expect(result).toBe(`@${tag} ${name} ${description[0]}`)
    })

    it('should format example tags as markdown ts-code blocks', () => {
      const tag = 'example'
      const name = 'exampleName'
      const description = ['example description']
      const tsDocTag = new TsDocTag(tag, name, description)
      const result = tsDocTag.toString()
      expect(result).toBe(`@${tag} ${name} \`\`\`ts\n${description.join('\n')}\n\`\`\``)
    })

    it('should correctly format tag, name and description', () => {
      const tag = new TsDocTag('param', 'name', ['description line 1', 'description line 2'])
      expect(tag.toString()).toEqual('@param name description line 1\ndescription line 2')
    })

    it('should correctly format tag and name without description', () => {
      const tag = new TsDocTag('param', 'name', [])
      expect(tag.toString()).toEqual('@param name')
    })

    it('should correctly format tag without name and description', () => {
      const tag = new TsDocTag('param', '', [])
      expect(tag.toString()).toEqual('@param')
    })

    it('should correctly format description without tag and name', () => {
      const tag = new TsDocTag('description', '', ['description line 1', 'description line 2'])
      expect(tag.toString()).toEqual('description line 1\ndescription line 2')
    })
  })
})
