import { tsStripInlineComments } from './tsStripInlineComments'

describe(tsStripInlineComments.name, () => {
  it('removes entire line when comment is the first line', () => {
    const code = ['// This is a comment', 'code'].join('\n')
    expect(tsStripInlineComments(code)).toBe('code')
  })

  it('removes entire line when comment is the last line', () => {
    const code = ['code', '// This is a comment'].join('\n')
    expect(tsStripInlineComments(code)).toBe('code')
  })

  it('removes entire line when comment is not first or last line', () => {
    const code = ['code', '// This is a comment', 'code'].join('\n')
    expect(tsStripInlineComments(code).split('\n')).toEqual(['code', 'code'])
  })

  it('works for multiple comments present', () => {
    const code = ['// This is a comment', 'code', '// This is a comment', 'code', '// This is a comment'].join('\n')
    expect(tsStripInlineComments(code).split('\n')).toEqual(['code', 'code'])
  })

  it('does not ignore line if the line contains more than just the comment.', () => {
    const code = ['code', 'code // This is a comment', 'code'].join('\n')
    expect(tsStripInlineComments(code).split('\n')).toEqual([
      'code',
      'code ',
      'code',
      //
    ])
  })
})
