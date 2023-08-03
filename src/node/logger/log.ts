import 'dotenv/config'
import { Logger } from './Logger'

export const log = new Logger({
  // consoleLogLevel: (process.env.LOG_LEVEL_CONSOLE?.toUpperCase() as LogLevel) || void 0,
  // fileLogLevel: (process.env.LOG_LEVEL_FILE?.toUpperCase() as LogLevel) || void 0,
  // logDirpath: process.env.LOG_DIRPATH || void 0,
  // deleteFilesOlderThan: Number(process.env.DELETE_FILES_OLDER_THAN || void 0),
})
