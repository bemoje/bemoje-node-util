import { tsStripBlockComments } from './tsStripBlockComments'

describe(tsStripBlockComments.name, () => {
  describe('when given a code string without block comments', () => {
    it('should return the same code string', () => {
      const code = `
        const a = 1;
        const b = 2;
        const c = 3;
        const d = 4;
      `
      const result = tsStripBlockComments(code)
      expect(result).toEqual(code)
    })
  })

  describe('when given a code string with multiple block comments in a single line', () => {
    it('should remove the block comments', () => {
      const code = `
        const a = 1; /* Block comment 1 */ const b = 2 /* Block comment 2 */ const c = 3;
        const d = /* Block comment 3 */ 4 /* Block comment 4 */ const e = 5;
      `
      const expected = `
        const a = 1;  const b = 2  const c = 3;
        const d =  4  const e = 5;
      `
      const result = tsStripBlockComments(code)
      expect(result).toEqual(expected)
    })
  })

  describe('when given a code string with block comments in strings or regular expressions', () => {
    it('should not remove the block comments inside strings or regular expressions', () => {
      const code = `
        const str = '/* This is a block comment */';
        const regex = /\\/\\* This is a block comment \\*\\//;
        const template = \`/* This is a block comment */\`;
      `
      const expected = `
        const str = '/* This is a block comment */';
        const regex = /\\/\\* This is a block comment \\*\\//;
        const template = \`/* This is a block comment */\`;
      `
      const result = tsStripBlockComments(code)
      expect(result).toEqual(expected)
    })
  })
})
