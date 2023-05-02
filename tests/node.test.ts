import path from 'path'
import * as util from '../src/libs/node'

describe('getMemoryUsage', () => {
  it('example', () => {
    const m = util.memoryUsage()
    expect(typeof m.processAllocationMB).toBe('number')
    expect(typeof m.heapAllocationMB).toBe('number')
    expect(typeof m.heapUsedMB).toBe('number')
    expect(typeof m.extenalV8).toBe('number')
  })
})

describe('getMemoryUsageFormattedEU', () => {
  it('example', () => {
    const m = util.memoryUsageEuFormat()
    expect(typeof m.processAllocationMB).toBe('string')
    expect(typeof m.heapAllocationMB).toBe('string')
    expect(typeof m.heapUsedMB).toBe('string')
    expect(typeof m.extenalV8).toBe('string')
  })
})

describe('getMemoryUsageFormattedUS', () => {
  it('example', () => {
    const m = util.memoryUsageUsFormat()
    expect(typeof m.processAllocationMB).toBe('string')
    expect(typeof m.heapAllocationMB).toBe('string')
    expect(typeof m.heapUsedMB).toBe('string')
    expect(typeof m.extenalV8).toBe('string')
  })
})

describe('pathFromCwd', () => {
  it('example', () => {
    expect(/(\\|\/)src$/g.test(util.pathFromCwd('src'))).toBe(true)
    expect(/(\\|\/)src(\\|\/)libs$/g.test(util.pathFromCwd('src', 'libs'))).toBe(true)
  })
})

describe('readFileStringSync', () => {
  it('example', () => {
    expect(util.readFileStringSync(__filename).indexOf('describe(') !== -1).toBe(true)
  })
})
describe('normalizeFileExtension', () => {
  it('example', () => {
    expect(util.normalizeFileExtension('.js')).toBe('.js')
    expect(util.normalizeFileExtension('js')).toBe('.js')
    expect(util.normalizeFileExtension('test.js')).toBe('.js')
    expect(util.normalizeFileExtension('.test.js')).toBe('.js')
    expect(util.normalizeFileExtension('.test.js')).toBe('.js')
    expect(util.normalizeFileExtension('..js')).toBe('.js')
    expect(() => util.normalizeFileExtension('.>s')).toThrowError()
  })
})

describe('createFileExtensionFilter', () => {
  const paths = ['./src/file', './src/file.js', './src/file.ts', './src/file.md', './src/file.json']
  it('creates filter that accepts any extension', () => {
    const filter = util.createFileExtensionFilter()
    expect(paths.filter(filter)).toStrictEqual(paths)
  })
  it('creates filter that accepts one extension', () => {
    const filter = util.createFileExtensionFilter('.js')
    expect(paths.filter(filter)).toStrictEqual(['./src/file.js'])
  })
  it('creates filter that accepts multiple extensions', () => {
    const filter = util.createFileExtensionFilter('.js', 'md')
    expect(paths.filter(filter)).toStrictEqual(['./src/file.js', './src/file.md'])
  })
})

describe('ensureValidWindowsPath', () => {
  it('example', () => {
    util.ensureValidWindowsPath('C:\\Users\\John')
    // => true
  })
  it('accepts backslash', () => {
    expect(util.ensureValidWindowsPath('C:\\Users\\Benjamin\\Desktop')).toBe(true)
  })
  it('accepts forward slash', () => {
    expect(util.ensureValidWindowsPath('C:/Users/John/Desktop')).toBe(true)
  })
  it('rejects on both forward and backward slash in same path', () => {
    expect(util.ensureValidWindowsPath('C:/Users\\John')).toBe(false)
  })
  it('rejects when exceeding max length unless extendedMaxLength is enabled', () => {
    const longPath =
      'C:/Users/John/Desktop/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/index.js'
    expect(util.ensureValidWindowsPath(longPath)).toBe(false)
    expect(util.ensureValidWindowsPath(longPath, { extendedMaxLength: true })).toBe(true)
  })
  it('accepts network path', () => {
    expect(util.ensureValidWindowsPath('\\\\192.168.1.2')).toBe(true)
  })
  it('rejects on empty string', () => {
    expect(util.ensureValidWindowsPath('')).toBe(false)
  })
  it('rejects on illegal characters in windows file names', () => {
    expect(util.ensureValidWindowsPath('C:\\cool\\wow<wow.js')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\wow>wow.js')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\wow:wow.js')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\wow"wow.js')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\wow|wow.js')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\wow?wow.js')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\wow*wow.js')).toBe(false)
  })
  it('rejects on illegal windows filenames', () => {
    expect(util.ensureValidWindowsPath('C:\\cool\\CON')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\PRN')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\AUX')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\NUL')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\COM1')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\COM2')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\COM3')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\COM4')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\COM5')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\COM6')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\COM7')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\COM8')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\COM9')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\LPT1')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\LPT2')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\LPT3')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\LPT4')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\LPT5')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\LPT6')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\LPT7')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\LPT8')).toBe(false)
    expect(util.ensureValidWindowsPath('C:\\cool\\LPT9')).toBe(false)
  })
  it('accepts on illegal windows filename strings as part of filename', () => {
    expect(util.ensureValidWindowsPath('C:\\cool\\CON.txt')).toBe(true)
  })
  it('accets on illegal windows filename strings as part of directory name', () => {
    expect(util.ensureValidWindowsPath('C:\\CON4\\file.txt')).toBe(true)
  })
  it('rejects on illegal windows filename string as directory name', () => {
    expect(util.ensureValidWindowsPath('C:\\CON\\file.txt')).toBe(false)
  })
  it('rejects on invalid drive letter', () => {
    expect(util.ensureValidWindowsPath('CC:\\CON\\file.txt')).toBe(false)
  })
  it('throws on instead of returning false when enabled', () => {
    expect(() => util.ensureValidWindowsPath('', { assert: true })).toThrowError()
  })
})

describe('StringStream and streamToString', () => {
  it('example', async () => {
    const str = 'this is a string'
    const stream = new util.StringStream(str)
    expect(await util.streamToString(stream)).toBe(str)
  })
})

describe('absolutCwdPathToRelative', () => {
  it('should convert an absolute path to a relative path', () => {
    const filepath = path.join(process.cwd(), 'src', 'index.ts')
    const expected = 'src/index.ts'
    const result = util.absolutCwdPathToRelative(filepath)
    expect(result).toEqual(expected)
  })
})
