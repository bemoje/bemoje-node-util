/// <reference types="node" />
import { Readable } from 'stream';
/**
 * Extension of Node's native Readable class for converting a string into a Readable stream.
 */
export declare class StringStream extends Readable {
    private str;
    private ended;
    constructor(str: string);
    _read(): void;
}
//# sourceMappingURL=StringStream.d.ts.map