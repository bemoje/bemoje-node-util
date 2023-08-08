import { MixinBase } from '../mixins/MixinBase';
export declare class Queue<T> extends MixinBase {
    protected queue: Array<T>;
    static from<T>(o: Iterable<T>): Queue<T>;
    static fromJSON<T>(json: string): Queue<T>;
    enqueue(item: T): Queue<T>;
    dequeue(): T;
    get size(): number;
    toArray(): Array<T>;
    toJSON(): Array<T>;
    [Symbol.iterator](): Iterator<T>;
}
//# sourceMappingURL=Queue.d.ts.map