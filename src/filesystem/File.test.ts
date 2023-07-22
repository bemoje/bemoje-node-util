import path from 'path'
import { File } from './File'

describe(File.name, () => {
  describe('constructor', () => {
    it('should set the filepath property', () => {
      const filepath = __filename
      const file = new File(filepath)
      expect(file.filepath).toBe(filepath)
    })
  })

  describe('fileExtension', () => {
    it('should return the file extension of the source file', () => {
      const filepath = path.join(process.cwd(), 'tests', 'file.txt')
      const file = new File(filepath)
      expect(file.fileExtension).toBe('.txt')
    })
  })

  describe('filename', () => {
    it('should return the name of the source file', () => {
      const filepath = path.join(process.cwd(), 'tests', 'file.txt')
      const file = new File(filepath)
      expect(file.filename).toBe('file.txt')
    })
  })

  describe('dirname', () => {
    it('should return the name of the directory of the source file', () => {
      const filepath = path.join(process.cwd(), 'tests', 'file.txt')
      const file = new File(filepath)
      expect(file.dirname).toBe('tests')
    })
  })

  describe('dirpath', () => {
    it('should return the absolute path to the directory of the source file', () => {
      const filepath = path.join(process.cwd(), 'tests', 'file.txt')
      const file = new File(filepath)
      expect(file.dirpath).toBe(path.join(process.cwd(), 'tests'))
    })
  })

  describe('relative', () => {
    it('should return the relative path to the source file from the working directory', () => {
      const filepath = path.join(process.cwd(), 'tests', 'file.txt')
      const file = new File(filepath)
      expect(file.relative).toBe(['tests', 'file.txt'].join(path.sep))
    })
  })
})
