import { createDirectorySync } from './createDirectorySync'

describe(createDirectorySync.name, () => {
  it('should create a directory at the given path', () => {
    const dirpath = '/path/to/directory'
    const result = createDirectorySync(dirpath)
    expect(result).toBe(dirpath)
  })

  it('should create parent directories if they do not exist', () => {
    const dirpath = '/path/to/non/existing/directory'
    const result = createDirectorySync(dirpath)
    expect(result).toBe(dirpath)
  })
})
