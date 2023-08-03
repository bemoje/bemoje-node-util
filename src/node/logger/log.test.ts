import { Logger } from './Logger'
import { LogLevel } from './types/LogLevel'

const log = new Logger({
  consoleLogLevel: LogLevel.DEBUG,
  fileLogLevel: LogLevel.NONE,
})

describe('log', () => {
  beforeEach(() => {
    console.log = jest.fn()
    console.warn = jest.fn()
    console.error = jest.fn()
    console.dir = jest.fn()
  })

  it('should log debug message', () => {
    const message = 'test info'
    expect(log.debug(message)).toBe(message)
    expect(console.log).toHaveBeenCalled()
  })

  it('should log info', () => {
    const message = 'test info'
    expect(log.info(message)).toBe(message)
    expect(console.log).toHaveBeenCalled()
  })

  it('should log warning', () => {
    const message = 'test warning'
    expect(log.warn(message)).toBe(message)
    expect(console.warn).toHaveBeenCalled()
  })

  it('should log warning', () => {
    const message = 'test error'
    expect(log.error(message)).toBe(message)
    expect(console.error).toHaveBeenCalled()
  })

  it('should run async task and log', async () => {
    const task = jest.fn().mockResolvedValue('task result')
    const description = 'test task'
    expect(await log.task(description, task)).toBe('task result')
    expect(console.log).toHaveBeenCalledTimes(2)
    expect(task).toHaveBeenCalled()
  })

  it('should run sync task and log', () => {
    const task = jest.fn().mockReturnValue('task result')
    const description = 'test task'
    expect(log.taskSync(description, task)).toBe('task result')
    expect(console.log).toHaveBeenCalledTimes(2)
    expect(task).toHaveBeenCalled()
  })
})
