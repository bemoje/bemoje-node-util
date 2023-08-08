/// <reference types="node" />
import { Readable } from 'stream';
/**
 * Extension of Node's native Readable class for converting a string into a Readable stream.
 * @param string - The string to create the stream from.
 */
export declare class StringStream extends Readable {
    string: string;
    ended: boolean;
    constructor(string: string);
    _read(): void;
}
//# sourceMappingURL=StringStream.d.ts.map