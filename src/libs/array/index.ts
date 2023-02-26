export { arr2dToCSV } from './src/arr2dToCSV';
export { arrAssignFrom } from './src/arrAssignFrom';
export { arrEvery } from './src/arrEvery';
export { arrFilterMutable } from './src/arrFilterMutable';
export { arrFlatten } from './src/arrFlatten';
export { arrFlattenMutable } from './src/arrFlattenMutable';
export { arrIndicesOf } from './src/arrIndicesOf';
export { arrMapMutable } from './src/arrMapMutable';
export { arrShallowEquals } from './src/arrShallowEquals';
export { arrShuffle } from './src/arrShuffle';
export { arrSome } from './src/arrSome';
export { arrSortNumeric } from './src/arrSortNumeric';
export { arrSwap } from './src/arrSwap';

export type Callback = (value: any, index: number, array: Array<any>) => void;

export type Predicate = (
  value: any,
  index: number,
  array: Array<any>,
) => boolean;
