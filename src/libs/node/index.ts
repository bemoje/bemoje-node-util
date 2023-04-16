export * from './src/createFileExtensionFilter'
export * from './src/ensureValidWindowsPath'
export * from './src/memoryUsage'
export * from './src/normalizeFileExtension'
export * from './src/pathFromCwd'
export * from './src/readFileStringSync'
export * from './src/streamToString'
export * from './src/StringStream'

export type MemoryUsageValues = {
  processAllocationMB: number
  heapAllocationMB: number
  heapUsedMB: number
  extenalV8: number
}

export type MemoryUsageValuesFormatted = {
  processAllocationMB: string
  heapAllocationMB: string
  heapUsedMB: string
  extenalV8: string
}
