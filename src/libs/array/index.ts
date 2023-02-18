export { arr2dToCSV } from './src/arr2dToCSV';
export { arrEvery } from './src/arrEvery';
export { arrFlatten } from './src/arrFlatten';
export { arrIndexesOf } from './src/arrIndexesOf';
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
