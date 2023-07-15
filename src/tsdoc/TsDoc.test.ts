import { TsDoc } from './TsDoc'
import { TsDocTag } from './TsDocTag'

describe(TsDoc.name, () => {
  describe('constructor', () => {
    it('should create a TsDoc instance with no code', () => {
      const tsDoc = new TsDoc()
      expect(tsDoc.size).toBe(0)
    })

    it('should create a TsDoc instance with valid code', () => {
      const code = `
        /**
         * This is a description.
         * @param name - The name.
         */
      `.trim()
      const tsDoc = new TsDoc(code)
      expect(tsDoc.size).toBe(2)
      expect(tsDoc.single.get('description')).toBeDefined()
      expect(tsDoc.namedMulti.get('param')?.get('name')).toBeDefined()
    })

    it('should throw Error when trying to create a TsDoc instance with invalid code', () => {
      const code = `
        /**
          This is an invalid TSDoc comment.
         */
      `.trim()
      expect(() => {
        new TsDoc(code)
      }).toThrow()
    })
  })

  describe('single', () => {
    it('should add a single tag', () => {
      const tsDoc = new TsDoc()
      const tag = new TsDocTag('description', '', ['an int'])
      tsDoc.addTag(tag)
      expect(tsDoc.single.get('description')).toBe(tag)
    })

    it('should not add a single tag if the tag is not in the tagOrder', () => {
      const tsDoc = new TsDoc()
      const tag = new TsDocTag('asdf', '', [])
      tsDoc.addTag(tag)
      expect(tsDoc.single.has('asdf')).toBe(false)
    })

    it('should remove a single tag', () => {
      const tsDoc = new TsDoc()
      const tag = new TsDocTag('description', '', [])
      tsDoc.addTag(tag)
      tsDoc.removeTags('description')
      expect(tsDoc.single.has('description')).toBe(false)
    })
  })

  describe('multi', () => {
    it('should add a multi tag', () => {
      const tsDoc = new TsDoc()
      const tag1 = new TsDocTag('throws', '', ['when sad'])
      const tag2 = new TsDocTag('throws', '', ['when happy'])
      tsDoc.addTag(tag1)
      tsDoc.addTag(tag2)
      expect(tsDoc.multi.get('throws')).toEqual([tag1, tag2])
    })

    it('should not add a multi tag if the tag is not in the tagOrder', () => {
      const tsDoc = new TsDoc()
      const tag = new TsDocTag('unknown', '', [])
      tsDoc.addTag(tag)
      expect(tsDoc.multi.has('unknown')).toBe(false)
    })

    it('should remove a multi tag', () => {
      const tsDoc = new TsDoc()
      const tag1 = new TsDocTag('throws', '', [])
      const tag2 = new TsDocTag('throws', '', [])
      tsDoc.addTag(tag1)
      tsDoc.addTag(tag2)
      expect(tsDoc.multi.has('throws')).toBe(true)
      tsDoc.removeTags('throws')
      expect(tsDoc.multi.has('throws')).toBe(false)
    })
  })

  describe('namedMulti', () => {
    it('should add a named multi tag', () => {
      const tsDoc = new TsDoc()
      const tag1 = new TsDocTag('param', 'firstName', ['the first name'])
      const tag2 = new TsDocTag('param', 'lastName', ['the last name'])
      tsDoc.addTag(tag1)
      tsDoc.addTag(tag2)
      expect(tsDoc.namedMulti.get('param')).toEqual(
        new Map([
          ['firstName', tag1],
          ['lastName', tag2],
        ]),
      )
    })

    it('should not add a named multi tag if the tag is not in the tagOrder', () => {
      const tsDoc = new TsDoc()
      const tag = new TsDocTag('unknown', 'name', [])
      tsDoc.addTag(tag)
      expect(tsDoc.namedMulti.has('unknown')).toBe(false)
    })

    it('should remove a named multi tag', () => {
      const tsDoc = new TsDoc()
      const tag1 = new TsDocTag('param', 'firstName', ['the first name'])
      const tag2 = new TsDocTag('param', 'lastName', ['the last name'])
      tsDoc.addTag(tag1)
      tsDoc.addTag(tag2)
      tsDoc.removeTags('param', 'firstName')
      expect(tsDoc.namedMulti.get('param')).toEqual(new Map([['lastName', tag2]]))
    })
  })

  describe('addTag', () => {
    it('should add a TsDocTag to the TsDoc instance', () => {
      const tsDoc = new TsDoc()
      const tag = new TsDocTag('description', '', ['This is a description.'])
      tsDoc.addTag(tag)
      expect(tsDoc.size).toBe(1)
      expect(tsDoc.single.get('description')).toBe(tag)
    })

    it('should not add a TsDocTag if the tag is not in the tagOrder', () => {
      const tsDoc = new TsDoc()
      const tag = new TsDocTag('invalidTag', '', ['This is an invalid tag.'])
      tsDoc.addTag(tag)
      expect(tsDoc.size).toBe(0)
    })

    it('should add a named multi TsDocTag to the TsDoc instance', () => {
      const tsDoc = new TsDoc()
      const tag = new TsDocTag('param', 'name', ['The name.'])
      tsDoc.addTag(tag)
      expect(tsDoc.size).toBe(1)
      expect(tsDoc.namedMulti.get('param')).toBeDefined()
      expect(tsDoc.namedMulti.get('param')?.get('name')).toBe(tag)
    })

    it('should add a multi TsDocTag to the TsDoc instance', () => {
      const tsDoc = new TsDoc()
      const tag = new TsDocTag('throws', '', ['This is an example.'])
      expect(tsDoc.size).toBe(0)
      tsDoc.addTag(tag)
      expect(tsDoc.size).toBe(1)
      expect(tsDoc.multi.get('throws')).toBeDefined()
      expect(tsDoc.multi.get('throws')?.[0]).toBe(tag)
    })
  })

  describe('removeTags', () => {
    it('should remove a single TsDocTag from the TsDoc instance', () => {
      const tsDoc = new TsDoc()
      const tag = new TsDocTag('description', '', ['This is a description.'])
      tsDoc.addTag(tag)
      tsDoc.removeTags('description')
      expect(tsDoc.size).toBe(0)
    })

    it('should remove a named multi TsDocTag from the TsDoc instance', () => {
      const tsDoc = new TsDoc()
      const tag = new TsDocTag('param', 'name', ['The name.'])
      tsDoc.addTag(tag)
      tsDoc.removeTags('param', 'name')
      expect(tsDoc.size).toBe(0)
    })

    it('should remove all named multi TsDocTags with the provided tag from the TsDoc instance if name is not provided', () => {
      const tsDoc = new TsDoc()
      const tag1 = new TsDocTag('param', 'name1', ['The name 1.'])
      const tag2 = new TsDocTag('param', 'name2', ['The name 2.'])
      tsDoc.addTag(tag1)
      tsDoc.addTag(tag2)
      tsDoc.removeTags('param')
      expect(tsDoc.size).toBe(0)
    })

    it('should remove a multi TsDocTag from the TsDoc instance', () => {
      const tsDoc = new TsDoc()
      const tag = new TsDocTag('example', '', ['This is an example.'])
      tsDoc.addTag(tag)
      tsDoc.removeTags('example')
      expect(tsDoc.size).toBe(0)
    })
  })

  describe('size', () => {
    it('should return the correct size', () => {
      const tsDoc = new TsDoc()
      const tag1 = new TsDocTag('description', '', ['asd'])
      const tag2 = new TsDocTag('returns', '', ['asd'])
      tsDoc.addTag(tag1)
      tsDoc.addTag(tag2)
      expect(tsDoc.size).toBe(2)
    })
  })

  describe('isEmpty', () => {
    it('should return true if the TsDoc instance has no tags', () => {
      const tsDoc = new TsDoc()
      expect(tsDoc.isEmpty).toBe(true)
    })

    it('should return false if the TsDoc instance has tags', () => {
      const tsDoc = new TsDoc()
      const tag = new TsDocTag('returns', '', ['something'])
      tsDoc.addTag(tag)
      expect(tsDoc.isEmpty).toBe(false)
    })
  })

  describe('clear', () => {
    it('should delete all tags', () => {
      const tsDoc = new TsDoc()
      const tag1 = new TsDocTag('description', '', ['asd'])
      const tag2 = new TsDocTag('returns', '', ['asd'])
      tsDoc.addTag(tag1)
      tsDoc.addTag(tag2)
      expect(tsDoc.size).toBe(2)
      tsDoc.clear()
      expect(tsDoc.size).toBe(0)
    })
  })

  describe('iterateTags', () => {
    it('should iterate over all tags in the order specified by tagOrder', () => {
      const tsDoc = new TsDoc('', { tagOrder: ['tag2', 'tag1', 'tag4', 'tag3'] })
      const tag1 = new TsDocTag('tag1', '', [])
      const tag2 = new TsDocTag('tag2', '', [])
      const tag3 = new TsDocTag('tag3', '', [])
      const tag4 = new TsDocTag('tag4', '', [])
      tsDoc.addTag(tag1)
      tsDoc.addTag(tag2)
      tsDoc.addTag(tag3)
      tsDoc.addTag(tag4)
      const tags = Array.from(tsDoc.iterateTags())
      expect(tags).toEqual([tag2, tag1, tag4, tag3])
    })

    it('should include empty strings if withSpaces is true', () => {
      const tsDoc = new TsDoc('', { tagOrder: ['tag1', '', 'tag2', 'tag3', '', 'tag4'] })
      const tag1 = new TsDocTag('tag1', '', [])
      const tag2 = new TsDocTag('tag2', '', [])
      const tag3 = new TsDocTag('tag3', '', [])
      const tag4 = new TsDocTag('tag4', '', [])
      tsDoc.addTag(tag1)
      tsDoc.addTag(tag2)
      tsDoc.addTag(tag3)
      tsDoc.addTag(tag4)
      const tags = Array.from(tsDoc.iterateTags(true))
      expect(tags).toEqual([tag1, '', tag2, tag3, '', tag4])
    })
  })

  describe('clone', () => {
    it('should return a deep clone of the TsDoc instance', () => {
      const tsDoc = new TsDoc()
      const tag = new TsDocTag('tag', '', [])
      tsDoc.addTag(tag)
      const clone = tsDoc.clone()
      expect(clone).not.toBe(tsDoc)
      expect(clone.render()).toBe(tsDoc.render())
    })
  })

  describe('assign', () => {
    it('should merge tags from another TsDoc instance 1', () => {
      const t1 = new TsDoc()
      const tt1 = new TsDocTag('description', '', ['The thing'])
      t1.addTag(tt1)

      const t2 = new TsDoc()
      const tt2 = new TsDocTag('throws', '', ['A thing'])
      t2.addTag(tt2)

      t1.assign(t2)
      expect(t1.size).toBe(2)
      expect(t1.single.get('description')).toBe(tt1)
      expect(t1.multi.get('throws')?.includes(tt2)).toBe(true)
    })

    it('should merge tags from another TsDoc instance 2', () => {
      const tsDoc1 = new TsDoc()
      const tag1 = new TsDocTag('description', '', ['This is a description.'])
      tsDoc1.addTag(tag1)

      const tsDoc2 = new TsDoc()
      const tag2 = new TsDocTag('param', 'name', ['The name.'])
      tsDoc2.addTag(tag2)

      tsDoc1.assign(tsDoc2)
      expect(tsDoc1.size).toBe(2)
      expect(tsDoc1.single.get('description')).toBe(tag1)
      expect(tsDoc1.namedMulti.get('param')).toBeDefined()
      expect(tsDoc1.namedMulti.get('param')?.get('name')).toBe(tag2)
    })
  })

  describe('reorderParams', () => {
    it('should sort the param tags according to the order specified in the paramOrder property', () => {
      const tsDoc = new TsDoc('', { paramOrder: ['c', 'a', 'b'] })
      const tag1 = new TsDocTag('param', 'b', [])
      const tag2 = new TsDocTag('param', 'a', [])
      const tag3 = new TsDocTag('param', 'c', [])
      tsDoc.addTag(tag1)
      tsDoc.addTag(tag2)
      tsDoc.addTag(tag3)
      tsDoc.reorderParams()
      const tags = Array.from(tsDoc.iterateTags())
      expect(tags).toEqual([tag3, tag2, tag1])
    })
  })

  describe('render', () => {
    it('should render a TSDoc block comment string with all tags in the order specified by the tagOrder property', () => {
      const tsDoc = new TsDoc('', { tagOrder: ['tag3', 'tag1', 'tag2'] })
      const tag1 = new TsDocTag('tag1', 'a', [])
      const tag2 = new TsDocTag('tag2', 'b', [])
      const tag3 = new TsDocTag('tag3', 'c', [])
      tsDoc.addTag(tag1)
      tsDoc.addTag(tag2)
      tsDoc.addTag(tag3)
      const rendered = tsDoc.render()
      expect(rendered).toBe('/**\n * @tag3 c\n * @tag1 a\n * @tag2 b\n */')
    })
  })

  describe('getTagOrder', () => {
    it('should return the tagOrder property if it is defined', () => {
      const tsDoc = new TsDoc(undefined, { tagOrder: ['tag1', 'tag2'] })
      expect(tsDoc.getTagOrder()).toEqual(['tag1', 'tag2'])
    })

    it('should return TsDoc.defaultTagOrder if the tagOrder property is not defined', () => {
      const tsDoc = new TsDoc()
      expect(tsDoc.getTagOrder()).toEqual(TsDoc.defaultTagOrder)
    })
  })
})
