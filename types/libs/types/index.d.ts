export type primitive = bigint | boolean | null | number | string | symbol | undefined;
export type GenericFunction = (...args: any[]) => any;
export type Callback = (value: any, index: number, array: Array<any>) => void;
export type Predicate = (value: any, index: number, array: Array<any>) => boolean;
export interface IRevivable<SerializedForm> {
    toJSON: () => SerializedForm;
}
//# sourceMappingURL=index.d.ts.map