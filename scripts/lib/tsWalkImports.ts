import fs from 'fs'
import path from 'path'
import { tsExtractImports } from '../../src/tscode/tsExtractImports'
import { WalkImportsResult } from '../types/WalkImportsResult'

/**
 * Walks through the imports of a TypeScript file and its dependencies up to a specified depth.
 * @remarks This function uses synchronous file operations and may block the event loop if used with large files or deep import trees.
 * @param rootfile The filepath to the TypeScript file to start the walk from.
 * @param maxDepth The maximum depth to walk through the imports. Default is 0, which means no limit.
 * @returns A `WalkImportsResult` object that maps each file path to its import details.
 * @throws Will throw an error if the file does not exist or if it is an external module.
 * @example ```ts
 * tsWalkImports('/src/index.ts', 2)
 * ```
 */
export function tsWalkImports(rootfile: string, maxDepth = 0): WalkImportsResult {
  const result = new Map()
  return (function recurse(filepath: string, match = '', depth = 1) {
    try {
      if (!fs.existsSync(filepath) || filepath.includes('node_modules')) {
        result.set(filepath, { depth, match, error: 'External module' })
        return result
      }
      const source = fs.readFileSync(filepath).toString()
      result.set(filepath, { depth, match, source })
      // recurse
      if (maxDepth && depth > maxDepth) return result
      const imports = tsExtractImports(source).map(({ match }) => {
        const arr = match.split("'")
        const from = arr[arr.length - 2]
        return [match, from]
      })
      for (const [match, from] of imports) {
        const relative = from
        const resolved = path.isAbsolute(relative) ? relative : path.resolve(path.dirname(filepath), relative + '.ts')
        if (result.has(resolved)) continue
        recurse(resolved, match, depth + 1)
      }
    } catch (error: unknown) {
      result.set(filepath, { depth, match, error })
    }
    return result
  })(path.normalize(rootfile))
}
