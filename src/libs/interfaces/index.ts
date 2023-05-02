export type primitive = bigint | boolean | null | number | string | symbol | undefined
export type GenericFunction = (...args: any[]) => any
export type Callback<T> = (value: T, index: number, array: Array<T>) => void
export type MapIterator<T> = (value: T, index: number, array: Array<T>) => T
export type Predicate<T> = (value: T, index: number, array: Array<T>) => boolean
export type Comparator = (a: any, b: any) => number
export type Constructor<T = Record<string, any>> = new (...args: any[]) => T

type Length<T extends any[]> = T extends { length: infer L } ? L : never
export type PositiveIntegerLessThan<L extends number, T extends any[] = [], Z = 0> = T extends { length: L }
  ? Z
  : PositiveIntegerLessThan<L, [...T, any], Z | Length<T>>

export type Bit = 0 | 1
export type BitArray = Array<Bit>

export type ByteInt = PositiveIntegerLessThan<256>
export type ByteArray = Array<ByteInt>

export type RGB = [ByteInt, ByteInt, ByteInt]
