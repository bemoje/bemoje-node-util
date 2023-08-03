import fs from 'fs'
import { iterateRawInboxData } from '../core/iterateRawInboxData'
import { fixRawDataFileEncoding } from './fixRawDataFileEncoding'

export function fixRawDataEncoding(dirpath: string) {
  console.time('fixRawDataEncoding')
  let count = 0
  for (const { data, filepath } of iterateRawInboxData(dirpath)) {
    try {
      // console.log({ data, filepath })
      const fixed = fixRawDataFileEncoding(data)
      const fixedSerialized = JSON.stringify(fixed)
      fs.writeFileSync(filepath, fixedSerialized, 'utf8')
      count++
    } catch (error) {
      console.error(error)
      console.error({ errorfilepath: filepath })
    }
  }
  console.log('Fixed encoding in ' + count + ' files.')
  console.timeEnd('fixRawDataEncoding')
}

// export function fixRawDataEncoding(dirpath: string, outpath: string) {
//   let count = 0
//   createDirectorySync(outpath)
//   for (const { data, filepath } of iterateRawInboxData(dirpath)) {
//     const filename = path.basename(filepath)
//     const dirname = path.basename(path.dirname(filepath))
//     const outfilepath = path.join(outpath, dirname, filename)
//     const fixed = fixRawDataFileEncoding(data)
//     const fixedSerialized = JSON.stringify(fixed)
//     createDirectorySync(path.dirname(outfilepath))
//     fs.writeFileSync(outfilepath, fixedSerialized, 'utf8')
//     console.log(count++ + ' | ' + outfilepath)
//   }
// }
