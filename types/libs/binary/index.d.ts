/// <reference types="node" />
export * from './src/intToBytes';
export * from './src/bytesToInt';
/**
 * Trims an array of bytes on the right
 */
export declare function trimArrayBytesRight(a: Array<number>): Array<number>;
/**
 * Trims an array of bytes on the left
 */
export declare function trimArrayBytesLeft(a: Array<number>): Array<number>;
/**
 * Pads an array of bytes on the right
 */
export declare function padArrayBytesRight(a: Array<number>): Array<number>;
/**
 * Pads an array of bytes on the left
 */
export declare function padArrayBytesLeft(a: Array<number>): Array<number>;
/**
 * Converts an array of bytes to an integer
 */
export declare function arrayBytesToInt(bytes: Array<number>): number;
/**
 * Converts an integer to an array of bytes
 */
export declare function intToArrayBytes(int: number): Array<number>;
/**
 * Converts an integer to a buffer
 */
export declare function intToBuffer(int: number): Buffer;
/**
 * Converts a buffer to an integer
 */
export declare function bufferToInt(buf: Buffer): number;
/**
 * Converts a string to a base64 buffer
 */
export declare function btoa(buf: Buffer): string;
/**
 * Converts a base64 buffer to a string
 */
export declare function atob(str: string): Buffer;
//# sourceMappingURL=index.d.ts.map