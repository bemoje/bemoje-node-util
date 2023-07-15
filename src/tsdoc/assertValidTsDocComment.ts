import { isValidTsDocComment } from './isValidTsDocComment'

export function assertValidTsDocComment(code: string): void {
  if (!isValidTsDocComment(code)) throw new Error('Invalid TSDoc comment')
}
