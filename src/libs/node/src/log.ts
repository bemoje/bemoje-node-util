/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import winston from 'winston'
import clc from 'cli-color'

const logger = winston.createLogger({
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports: [new winston.transports.File({ filename: 'logs/app.log' })],
})

export const log = {
  info: (message: any): void => {
    logger.info(message)
    if (typeof message === 'object') {
      console.log(message)
    } else {
      console.log(clc.magenta(new Date().toISOString()) + ' [' + clc.green('INFO') + ']: ' + clc.cyan(message))
    }
  },
  warn: (message: any): void => {
    logger.warn(message)
    if (typeof message === 'object') {
      console.log(message)
    } else {
      console.log(clc.magenta(new Date().toISOString()) + ' [' + clc.yellow('WARN') + ']: ' + clc.yellow(message))
    }
  },
  error: (message: any): void => {
    logger.error(message)
    if (typeof message === 'object') {
      console.error(message)
    } else {
      console.error(clc.magenta(new Date().toISOString()) + ' [' + clc.red('ERROR') + ']: ' + clc.red(message))
    }
  },
}
