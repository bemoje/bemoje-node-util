import { createDirectory } from './createDirectory'

describe(createDirectory.name, () => {
  it('should create a directory at the given path', async () => {
    const dirpath = '/path/to/directory'
    const result = await createDirectory(dirpath)
    expect(result).toBe(dirpath)
  })

  it('should create parent directories if they do not exist', async () => {
    const dirpath = '/path/to/non/existing/directory'
    const result = await createDirectory(dirpath)
    expect(result).toBe(dirpath)
  })
})
