import { TsDoc } from './TsDoc'

/**
 * Normalizes a tag name by converting it to lowercase.
 * If the tag name is not found in the map, it returns the original tag name.
 * @param code The tag name to normalize.
 * @remarks This function is case-insensitive and will return the input string if no equivalent TypeScript keyword is found.
 * @returns The normalized tag name.
 * @example ```ts
 * tsDocNormalizeTagName("TagName");;
 * //=> "tagname"
 * ```
 */
export function tsDocNormalizeTagName(code: string): string {
  code = code.toLowerCase()
  if (code === 'virtual') return 'abstract'
  if (code === 'augments') return 'extends'
  if (code === 'constructor') return 'class'
  if (code === 'const') return 'constant'
  if (code === 'defaultvalue') return 'default'
  if (code === 'desc') return 'description'
  if (code === 'host') return 'external'
  if (code === 'fileoverview') return 'file'
  if (code === 'fires') return 'emits'
  if (code === 'func') return 'function'
  if (code === 'var') return 'member'
  if (code === 'arg') return 'param'
  if (code === 'prop') return 'property'
  if (code === 'return') return 'returns'
  if (code === 'exception') return 'throws'
  if (code === 'yield') return 'yields'
  return code
}
