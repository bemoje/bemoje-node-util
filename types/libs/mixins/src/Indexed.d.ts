import { Constructor } from '../../interfaces';
import { Base } from './Base';
export declare function Indexed<TBase extends Constructor>(BaseConstructor: TBase): Constructor;
export declare function IndexedGetClass(classIndex: number): Constructor;
export declare function IndexedGetInstance(classIndex: number, instanceIndex: number): Base;
//# sourceMappingURL=Indexed.d.ts.map