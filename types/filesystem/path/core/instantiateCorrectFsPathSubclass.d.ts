/// <reference types="node" />
import fs from 'fs';
import { AbstractFsPath } from './AbstractFsPath';
/**
 * Creates a new FsObject instance of the correct type.
 * @param absolute The absolute path to the filesystem object.
 * @param stat The fs.Stats object of the filesystem object.
 * @returns an instance of the correct subclass of @see AbstractFsPath.
 */
export declare function instantiateCorrectFsPathSubclass(absolute: string, stat: fs.Stats): AbstractFsPath;
//# sourceMappingURL=instantiateCorrectFsPathSubclass.d.ts.map