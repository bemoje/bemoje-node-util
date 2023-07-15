import { TsDoc } from '../src/tsdoc/TsDoc'
import { SourceFile } from './SourceFile'

// const s1 = new SourceFile('/src/regex/buildRegexBetween.ts')
// const s1 = new SourceFile('/scripts/SourceFile.ts')
const s1 = new SourceFile('/src/api/OpenaiApiClientBase.ts')

console.log(SourceFile)

console.log(s1)

console.log({
  getters: {
    isPrivate: s1.isPrivate,
    fileExtension: s1.fileExtension,
    exportName: s1.exportName,
    filename: s1.filename,
    dirname: s1.dirname,
    dirpath: s1.dirpath,
    filepath: s1.filepath,
    testFilepath: s1.testFilepath,
    declarationFilepath: s1.declarationFilepath,
    backupFilepath: s1.backupFilepath,
  },
  methods: {
    fileExists: s1.fileExists(),
    testFileExists: s1.testFileExists(),
    declarationFileExists: s1.declarationFileExists(),
    fileSource: s1.fileSource().substring(0, 30),
    // testFileSource: s1.testFileSource().substring(0, 30),
    // declarationFileSource: s1.declarationFileSource().substring(0, 30),
  },
})

// console.log(s1.getImports())

// const { tsdoc } = s1.getTsDoc()
// console.dir(tsdoc, { depth: 10 })

// const rendered = tsdoc.render()
// console.log(rendered)

// const tsd = new TsDoc(`/**
// * @class SourceFile
// * Does something crazy.
// */`)
// s1.setTsDoc(tsd)

// const parsedClass = s1.parseClass()
// console.dir(parsedClass, { depth: null })

// s1.stripImports()
// console.log(s1.fileSource().split('\n').slice(0, 30).join('\n'))
