import { MemoryUsageValues } from '../';
import { MemoryUsageValuesFormatted } from '../';
/**
 * Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
 */
export declare function memoryUsage(): MemoryUsageValues;
/**
 * Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
 * The values are formatted strings in the style of 5.000,00
 */
export declare function memoryUsageEuFormat(): MemoryUsageValuesFormatted;
/**
 * Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
 * The values are formatted strings in the style of 5,000.00
 */
export declare function memoryUsageUsFormat(): MemoryUsageValuesFormatted;
//# sourceMappingURL=memoryUsage.d.ts.map