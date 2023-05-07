import { numFormatUS } from '../../number/src/numFormatUS'
import { numFormatDK } from '../../number/src/numFormatDK'

export interface IMemoryUsageValues {
  processAllocationMB: number
  heapAllocationMB: number
  heapUsedMB: number
  extenalV8: number
}

export interface IMemoryUsageValuesFormatted {
  processAllocationMB: string
  heapAllocationMB: string
  heapUsedMB: string
  extenalV8: string
}

/**
 * Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
 */
export function memoryUsage(): IMemoryUsageValues {
  const toIntMB = (n: number) => Math.floor(n * 0.000001)
  const data = process.memoryUsage()
  return {
    processAllocationMB: toIntMB(data.rss),
    heapAllocationMB: toIntMB(data.heapTotal),
    heapUsedMB: toIntMB(data.heapUsed),
    extenalV8: toIntMB(data.external),
  }
}

const formatMemoryUsageOutput = (format: (n: number) => string): IMemoryUsageValuesFormatted => {
  const data = process.memoryUsage()
  return {
    processAllocationMB: format(data.rss),
    heapAllocationMB: format(data.heapTotal),
    heapUsedMB: format(data.heapUsed),
    extenalV8: format(data.external),
  }
}

/**
 * Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
 * The values are formatted strings in the style of 5.000,00
 */
export function memoryUsageDkFormat(): IMemoryUsageValuesFormatted {
  return formatMemoryUsageOutput((bytes: number) => `${numFormatDK(bytes * 0.000001, 2)} MB`)
}

/**
 * Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
 * The values are formatted strings in the style of 5,000.00
 */
export function memoryUsageUsFormat(): IMemoryUsageValuesFormatted {
  return formatMemoryUsageOutput((bytes: number) => `${numFormatUS(bytes * 0.000001, 2)} MB`)
}
