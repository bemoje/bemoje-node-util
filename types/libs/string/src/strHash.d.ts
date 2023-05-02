/// <reference types="node" />
import { Encoding } from 'crypto';
/**
 * String hashing
 */
export declare const strHash: {
    /**
     * Hash a string into a buffer with a given algorithm
     * @param string The string to hash
     * @param algorithm sha1 | sha256 | sha512 | md5 | etc...
     * @see strHashListAlgorithms for a list of accepted strings for 'algorithm'
     * @example
     * ```ts
     * strHash.toBuffer('hello')
     * //=> <Buffer 2c f2 4d ba 5f b0 a3 0e 26 e8 3b 2a c5 b9 e2 9e 1b 16 1e 5c 1f a7 42 5e 73 04 33 62 93 8b 98 24>
     * ```
     */
    toBuffer(string: string, algorithm?: string): Buffer;
    /**
     * Hash a string into an array of unsigned 32-bit integers.
     * @param string The string to hash
     * @param algorithm sha1 | sha256 | sha512 | md5 | etc...
     * @see strHashListAlgorithms for a list of accepted strings for 'algorithm'
     * @example
     * ```ts
     * strHash.toUint32Array('hello')
     * //=> Uint32Array(8) [3125670444,  245608543, 708569126, 2665658821, 1545475611, 1581426463, 1647510643, 613976979]
     * ```
     */
    toUint32Array(string: string, algorithm?: string): Uint32Array;
    /**
     * Hash a string into a buffer with a given algorithm
     * @param string The string to hash
     * @param algorithm sha1 | sha256 | sha512 | md5 | etc...
     * @see strHashListAlgorithms for a list of accepted strings for 'algorithm'
     * @param encoding base64 | base64url | hex | binary | utf8 | utf-8 | utf16le | latin1 | ascii | binary | ucs2 | ucs-2
     * @example
     * ```ts
     * strHash.toString('hello', 'sha256', 'hex')
     * //=> 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
     * ```
     */
    toString(string: string, algorithm?: string, encoding?: Encoding): string;
    /**
     * List all available hash algorithms (node-js crypto library)
     */
    listAlgorithms(): Array<string>;
};
//# sourceMappingURL=strHash.d.ts.map