// @ts-check
import typescript2 from 'rollup-plugin-typescript2'
import PKG from './package.json'

const banner = `/*!
 * ${PKG.name} v${PKG.version}
 * (c) ${PKG.author.name}
 * Homepage: ${PKG.homepage}
 * Released under the ${PKG.license} License.
 */
`

export default {
  input: './src/index.ts',
  external: [
    'fs',
    'path',
    'stream',
    'cli-color',
    'format-number',
    'sentence-splitter',
    'lodash',
    'crypto',
  ],
  output: [
    {
      banner,
      name: 'util',
      exports: 'named',
      sourcemap: true,
      file: './dist/index.js',
      format: 'commonjs',
    },
    {
      banner,
      name: 'util',
      exports: 'named',
      sourcemap: true,
      file: './dist/index.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    typescript2({
      clean: true,
      useTsconfigDeclarationDir: true,
      tsconfig: './tsconfig.bundle.json',
    }),
  ],
}
