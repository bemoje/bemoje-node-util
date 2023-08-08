/// <reference types="node" />
import fs from 'fs';
export declare function convertFilter(filter: (fullpath: string, stat: fs.Stats) => boolean): (directory: string, files: string[]) => string[] | Promise<string[]>;
//# sourceMappingURL=convertFilter.d.ts.map