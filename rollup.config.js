// @ts-check
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import minify from 'rollup-plugin-babel-minify'
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
  external: [...Array.from(Object.keys(PKG.dependencies)), 'fs', 'path', 'stream', 'events', 'crypto'],
  output: [
    {
      banner,
      name: 'util',
      exports: 'named',
      sourcemap: true,
      file: './dist/index.cjs.js',
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
    resolve(),
    commonjs(),
    json(),
    typescript2({
      clean: true,
      useTsconfigDeclarationDir: true,
      tsconfig: './tsconfig.bundle.json',
    }),
    minify({ comments: false }),
  ],
}
