import { magenta, green, cyan, yellow, red, bold, blackBright, blue, Format } from 'cli-color'
import { strRepeat } from '../string/strRepeat'

/**
 * A simple logging utility.
 */
export class log {
  /**
   * Logs a (cyan) message the console.
   */
  static info<T>(message: T, depth?: number | null): T {
    this.logToConsole('INFO', message, magenta, green, cyan, depth)
    return message
  }

  /**
   * Logs a (yellow) warning message to the console.
   */
  static warn<T>(message: T): T {
    this.logToConsole('WARN', message, magenta, yellow, yellow)
    return message
  }

  /**
   * Logs a (red) error message to the console.
   */
  static error<T>(error: T): T {
    const strError = JSON.stringify(error, null, 2)
    this.logToConsole('ERROR', bold(error), magenta, red, red)
    console.error(red(strError))
    return JSON.parse(strError)
  }

  /**
   * Wrap an async function as a task, logging the start and end of the task.
   */
  static async task<T>(description: string, task: () => Promise<T>): Promise<T> {
    this.info(`Began: ${description}.`)
    const t0 = Date.now()
    const returnValue = await task()
    this.info(`Ended: ${description}. (${((Date.now() - t0) / 1000).toString()} seconds)`)
    return returnValue
  }

  /**
   * Wrap a synchronous function as a task, logging the start and end of the task.
   */
  static taskSync<T>(description: string, task: () => T): T {
    this.info(`Began: ${description}.`)
    const t0 = Date.now()
    const returnValue = task()
    this.info(`Ended: ${description}. (${((Date.now() - t0) / 1000).toString()} seconds)`)
    return returnValue
  }

  /**
   * Clears the console by printing a number of blank lines.
   */
  static clear(numLines = 10): void {
    console.log(strRepeat('\n', numLines))
  }

  /**
   * Prints a light dotted line to the console.
   */
  static line(numLines = 1): void {
    const string = blackBright(strRepeat('-', 80))
    for (let i = 0; i < numLines; i++) {
      console.log(string)
    }
    console.log('\n\n')
  }

  /**
   * Generic function for logging to console, used by the log-level specific functions.
   */
  private static logToConsole<T>(
    level: string,
    message: T,
    timestampColor: Format,
    levelColor: Format,
    outputColor: Format,
    depth?: number | null,
  ): void {
    const ts = timestampColor(new Date().toISOString())
    const lvl = levelColor(level)
    const clog = lvl === 'ERROR' ? console.error : console.log
    if (typeof message === 'object') {
      // clog(`${ts} [${lvl}]:`)
      clog(`[${lvl}]:`)
      console.dir(message, { depth })
    } else {
      let _message = message + ''
      if (/^.+:/.test(_message) && _message.includes('\n')) {
        const arr = _message.split('\n')
        _message = outputColor(arr[0]) + '\n' + bold(blue(arr.slice(1).join('\n')))
      } else {
        _message = outputColor(_message)
      }
      // clog(`${ts} [${lvl}]: ${_message + ''}`)
      clog(`[${lvl}]: ${_message + ''}`)
    }
  }
}
