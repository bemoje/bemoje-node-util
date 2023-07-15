import { tsBundleImportsForUnitTestGeneration } from './tsBundleImportsForUnitTestGeneration'
import fs from 'fs'
const p = 'scripts/SourceFile.ts'
const b = tsBundleImportsForUnitTestGeneration(p)
fs.writeFileSync('scripts/SourceFile.out.ts', b.map((a) => a.join('\n')).join('\n\n'))
