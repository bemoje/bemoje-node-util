/// <reference types="node" />
import fs from 'fs';
import { IWalkDirectoryOptions } from './types/IWalkDirectoryOptions';
export declare function walkDirectorySync(dirpath: string, options?: IWalkDirectoryOptions, callback?: (filepath: string, stat: fs.Stats) => void): string[];
//# sourceMappingURL=walkDirectorySync.d.ts.map