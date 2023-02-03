import { numFormatEU, numFormatUS } from './number';

export type MemoryUsageValues = {
  processAllocationMB: number;
  heapAllocationMB: number;
  heapUsedMB: number;
  extenalV8: number;
};

export type MemoryUsageValuesFormatted = {
  processAllocationMB: string;
  heapAllocationMB: string;
  heapUsedMB: string;
  extenalV8: string;
};

const toIntMB = (n: number) => Math.floor(n * 0.000001);

const getMemoryUsageFormatted = (
  format: (n: number) => string,
): MemoryUsageValuesFormatted => {
  const data = process.memoryUsage();
  return {
    processAllocationMB: format(data.rss),
    heapAllocationMB: format(data.heapTotal),
    heapUsedMB: format(data.heapUsed),
    extenalV8: format(data.external),
  };
};

/**
 * Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
 */
export function getMemoryUsage(): MemoryUsageValues {
  const data = process.memoryUsage();
  return {
    processAllocationMB: toIntMB(data.rss),
    heapAllocationMB: toIntMB(data.heapTotal),
    heapUsedMB: toIntMB(data.heapUsed),
    extenalV8: toIntMB(data.external),
  };
}

/**
 * Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
 * The values are formatted strings in the style of 5.000,00
 */
export function getMemoryUsageFormattedEU(): MemoryUsageValuesFormatted {
  return getMemoryUsageFormatted(
    (bytes: number) => `${numFormatEU(bytes * 0.000001, 2)} MB`,
  );
}

/**
 * Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
 * The values are formatted strings in the style of 5,000.00
 */
export function getMemoryUsageFormattedUS(): MemoryUsageValuesFormatted {
  return getMemoryUsageFormatted(
    (bytes: number) => `${numFormatUS(bytes * 0.000001, 2)} MB`,
  );
}
