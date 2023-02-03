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
/**
 * Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
 */
export declare function getMemoryUsage(): MemoryUsageValues;
/**
 * Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
 * The values are formatted strings in the style of 5.000,00
 */
export declare function getMemoryUsageFormattedEU(): MemoryUsageValuesFormatted;
/**
 * Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
 * The values are formatted strings in the style of 5,000.00
 */
export declare function getMemoryUsageFormattedUS(): MemoryUsageValuesFormatted;
//# sourceMappingURL=node.d.ts.map