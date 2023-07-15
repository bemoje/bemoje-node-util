import { tsStripFullSlashCommentLines } from './tsStripFullSlashCommentLines'

describe(tsStripFullSlashCommentLines.name, () => {
  it('removes entire line when comment is the first line', () => {
    const code = ['// This is a comment', 'code'].join('\n')
    expect(tsStripFullSlashCommentLines(code)).toBe('code')
  })

  it('removes entire line when comment is the last line', () => {
    const code = ['code', '// This is a comment'].join('\n')
    expect(tsStripFullSlashCommentLines(code)).toBe('code')
  })

  it('removes entire line when comment is not first or last line', () => {
    const code = ['code', '// This is a comment', 'code'].join('\n')
    expect(tsStripFullSlashCommentLines(code).split('\n')).toEqual(['code', 'code'])
  })

  it('works for multiple comments present', () => {
    const code = [
      '// This is a comment',
      'code',
      '// This is a comment',
      'code',
      '// This is a comment',
    ].join('\n')
    expect(tsStripFullSlashCommentLines(code).split('\n')).toEqual(['code', 'code'])
  })

  it('ignores line if the line contains more than just the comment.', () => {
    const code = ['code', 'code // This is a comment', 'code'].join('\n')
    expect(tsStripFullSlashCommentLines(code).split('\n')).toEqual([
      'code',
      'code // This is a comment',
      'code',
    ])
  })
})
