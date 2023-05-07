import { magenta, green, cyan, yellow, red, blackBright } from 'cli-color'
import type { Format } from 'cli-color/bare'

/**
 * Generic function for logging to console, used by the log-level specific functions.
 */
function logToConsole<T>(
  level: string,
  message: T,
  timestampColor: Format,
  levelColor: Format,
  outpuColor: Format,
  depth?: number,
): void {
  const ts = timestampColor(new Date().toISOString())
  const lvl = levelColor(level)
  if (typeof message === 'object') {
    console.log(`${ts} [${lvl}]:`)
    console.dir(message, depth)
    console.log(blackBright('------------------------------------------'))
  } else {
    console.log(
      `${ts} [${lvl}]: ${outpuColor((message + '').includes('\n') ? '\n' + message : message)}`,
    )
  }
}

/**
 * Depending configured environment variables, these functions will log to console, file and EventEmitter.
 */
export const log = {
  info<T>(message: T, depth?: number): T {
    logToConsole('INFO', message, magenta, green, cyan, depth)
    return message
  },
  warn<T>(message: T): T {
    logToConsole('WARN', message, magenta, yellow, yellow)
    return message
  },
  error<T>(message: T): T {
    logToConsole('ERROR', message, magenta, red, red)
    return message
  },
  async task<T>(description: string, task: () => Promise<T>): Promise<T> {
    log.info(`Began: ${description}.`)
    const t0 = Date.now()
    const returnValue = await task()
    log.info(`Ended: ${description}. (${((Date.now() - t0) / 1000).toString()} seconds)`)
    return returnValue
  },
  taskSync<T>(description: string, task: () => T): T {
    log.info(`Began: ${description}.`)
    const t0 = Date.now()
    const returnValue = task()
    log.info(`Ended: ${description}. (${((Date.now() - t0) / 1000).toString()} seconds)`)
    return returnValue
  },
}
