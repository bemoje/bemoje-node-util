import { regTsDocExampleLines } from '../regexlib/regTsDocExampleLines'

export function tsDocStripExample(string: string): string {
  return string.replace(regTsDocExampleLines, '').replace(/\n +\* +@example *\n/g, '\n')
}
