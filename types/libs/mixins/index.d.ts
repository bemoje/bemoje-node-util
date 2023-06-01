export type { IRevivable, IHandledOptions } from './src/interfaces';
import { Base } from './src/Base';
import { Indexed, IndexedGetClass, IndexedGetInstance } from './src/Indexed';
import { Timestamped } from './src/Timestamped';
import { Options } from './src/Options';
export declare const Mixins: {
    Base: typeof Base;
    Indexed: typeof Indexed;
    IndexedGetClass: typeof IndexedGetClass;
    IndexedGetInstance: typeof IndexedGetInstance;
    Timestamped: typeof Timestamped;
    Options: typeof Options;
};
export default Mixins;
export * from './src/Base';
export * from './src/Indexed';
export * from './src/interfaces';
export * from './src/mixins';
export * from './src/Options';
export * from './src/Revivable';
export * from './src/Timestamped';
//# sourceMappingURL=index.d.ts.map