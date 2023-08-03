import { tsBundleImports } from './tsBundleImports'

export function tsBundleImportsForUnitTestGeneration(filepath: string): string[][] {
  const bundle1 = tsBundleImports(filepath, {
    maxDepth: 1,
    stripInlineComments: false,
    stripEmptyLines: true,
  })
  const code1 = bundle1.pop() || []

  const bundle2 = tsBundleImports(filepath, {
    maxDepth: 2,
    declarations: false,
    stripExportKeywords: true,
    stripInlineComments: false,
    stripEmptyLines: true,
    stripTsDocSoOnlyDescription: true,
  })
  bundle2.pop()
  const code2 = bundle2.pop() || []

  const bundle3 = tsBundleImports(filepath, {
    declarations: true,
    stripExportKeywords: true,
    // stripBlockComments: true,
    stripInlineComments: true,
    stripEmptyLines: true,
    stripTsDocSoOnlyDescription: true,
  })
  bundle3.pop()
  bundle3.pop()

  return [...bundle3, code2, code1]
}
