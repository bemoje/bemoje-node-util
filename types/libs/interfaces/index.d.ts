export type Obj = Record<string, any>;
export type GenericArgs = any[];
export type DefinedPrimitive = bigint | boolean | number | string | symbol;
export type UndefinedPrimitive = null | undefined;
export type Primitive = DefinedPrimitive | UndefinedPrimitive;
export type ExistentValue = DefinedPrimitive | Obj;
export type GenericFunction = (...args: GenericArgs) => any;
export type Callback<T> = (value: T, index: number, array: Array<T>) => void;
export type MapIterator<T> = (value: T, index: number, array: Array<T>) => T;
export type Predicate<T> = (value: T, index: number, array: Array<T>) => boolean;
export type Comparator = (a: any, b: any) => number;
export type NestedArray<T> = Array<NestedArray<T> | T>;
export type Constructor<T = Record<string, any>> = new (...args: GenericArgs) => T;
export type ConstructorOf<T> = {
    new (): T;
    name: string;
};
export type Bit = 0 | 1;
export type BitArray = Array<Bit>;
export type ByteInt = PositiveIntegerLessThan<256>;
export type ByteArray = Array<ByteInt>;
export type RGB = [ByteInt, ByteInt, ByteInt];
export type PositiveIntegerLessThan<L extends number, T extends any[] = [], Z = 0> = T extends {
    length: L;
} ? Z : PositiveIntegerLessThan<L, [...T, any], Z | T extends {
    length: infer L;
} ? L : never>;
//# sourceMappingURL=index.d.ts.map