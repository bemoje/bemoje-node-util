export interface IMemoryUsageValues {
    processAllocationMB: number;
    heapAllocationMB: number;
    heapUsedMB: number;
    extenalV8: number;
}
export interface IMemoryUsageValuesFormatted {
    processAllocationMB: string;
    heapAllocationMB: string;
    heapUsedMB: string;
    extenalV8: string;
}
/**
 * Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
 */
export declare function memoryUsage(): IMemoryUsageValues;
/**
 * Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
 * The values are formatted strings in the style of 5.000,00
 */
export declare function memoryUsageDkFormat(): IMemoryUsageValuesFormatted;
/**
 * Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
 * The values are formatted strings in the style of 5,000.00
 */
export declare function memoryUsageUsFormat(): IMemoryUsageValuesFormatted;
//# sourceMappingURL=memoryUsage.d.ts.map