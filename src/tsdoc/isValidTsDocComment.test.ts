import { isValidTsDocComment } from './isValidTsDocComment'

describe(isValidTsDocComment.name, () => {
  it('should return false if the code is empty', () => {
    expect(isValidTsDocComment('')).toBe(false)
  })

  it('should return false if the code does not start with "/**"', () => {
    expect(isValidTsDocComment('/* Comment */')).toBe(false)
  })

  it('should return false if the code does not end with "*/"', () => {
    expect(isValidTsDocComment('/** Comment')).toBe(false)
  })

  it('should return false if any line does not start with "*"', () => {
    expect(isValidTsDocComment('/**\n Comment\n*/')).toBe(false)
  })

  it('should return true if the code is a valid TSDoc comment', () => {
    expect(isValidTsDocComment('/**\n * Comment\n */')).toBe(true)
  })
})
