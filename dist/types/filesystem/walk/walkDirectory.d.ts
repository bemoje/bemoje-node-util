/// <reference types="node" />
import fs from 'fs';
import { IWalkDirectoryOptions } from './types/IWalkDirectoryOptions';
export declare function walkDirectory(dirpath: string, options?: IWalkDirectoryOptions, callback?: (filepath: string, stat: fs.Stats) => void): Promise<string[]>;
//# sourceMappingURL=walkDirectory.d.ts.map