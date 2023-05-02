/*!
 * @bemoje/node-util v0.1.3
 * (c) Benjamin Møller Jensen
 * Homepage: https://github.com/bemoje/bemoje-node-util
 * Released under the MIT License.
 */

import { sort } from 'timsort';
import { split } from 'sentence-splitter';
import { words as words$1 } from 'lodash';
import { createHash, getHashes } from 'crypto';
import date from 'date-and-time';
import 'dotenv/config';
import { OpenAIApi, Configuration } from 'openai';
import fs from 'fs';
import path from 'path';
import numberFormat from 'format-number';
import { Readable } from 'stream';
import winston from 'winston';
import clc from 'cli-color';

/**
 * Converts a 2-dimensional array into a CSV string.
 * @param input a 2-dimensional array
 * @param delimiter csv delimiter
 */
function arr2dToCSV(input, delimiter = ';') {
    return input.map((row) => row.join(delimiter)).join('\n');
}

/**
 * Mutably assigns the values of source array to target array. Lengths will also be identical.
 */
function arrAssignFrom(target, source) {
    target.splice(source.length);
    for (let i = 0; i < source.length; i++) {
        target[i] = source[i];
    }
    return target;
}

/**
 * Returns true if the predicate is satisfied for every element of the passed array; otherwise false.
 * @param input - The array
 * @param  predicate - A predicate callback function
 */
function arrEvery(input, predicate) {
    for (let i = 0, len = input.length; i < len; i++) {
        if (predicate(input[i], i, input) === false) {
            return false;
        }
    }
    return true;
}

/**
 * Executes an async task with a timeout.
 * @param timeout The timeout in milliseconds.
 * @param task The async task to execute.
 * @param args The arguments to pass to the task.
 * @returns A promise that resolves with the task's result or rejects with an error.
 */
function asyncWithTimeout(timeout, task, ...args) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(`Timed out after ${timeout} ms.`));
        }, timeout);
        task(...args)
            .then((value) => {
            resolve(value);
        }, (error) => {
            reject(error);
        })
            .catch((error) => {
            reject(error);
        });
    });
}

/**
 * Run async tasks in parallel.
 */
async function asyncParallel(tasks) {
    return await Promise.all(tasks.map((task) => task()));
}

/**
 * Run async tasks serially, each task waiting for the previous one to complete.
 */
async function asyncSerial(tasks) {
    const results = [];
    for (const task of tasks) {
        results.push(await task());
    }
    return results;
}

/**
 * Converts a base64 buffer to a string
 */
function atob(str) {
    return Buffer.from(str, 'base64');
}

/**
 * Converts a string to a base64 buffer
 */
function btoa(buf) {
    return buf.toString('base64');
}

/**
 * Converts a byte-array to an integer.
 * Throws Error if the input is an invalid byte-array or corresponds to an integer value larger than 256^5.
 */
function bytesToInt(bytes) {
    return bytes.length === 1 && bytes[0] < 251
        ? bytes[0]
        : bytes.length === 2 && bytes[0] === 251
            ? 251 + bytes[1]
            : bytes.length === 3 && bytes[0] === 252
                ? 251 + 256 * bytes[1] + bytes[2]
                : bytes.length === 4 && bytes[0] === 253
                    ? 251 + 65536 * bytes[1] + 256 * bytes[2] + bytes[3]
                    : bytes.length === 5 && bytes[0] === 254
                        ? 251 + 16777216 * bytes[1] + 65536 * bytes[2] + 256 * bytes[3] + bytes[4]
                        : bytes.length > 5 && bytes[0] === 255
                            ? (() => {
                                let m = 0;
                                let x = 1;
                                const pivot = Math.max(2, bytes.length - 6);
                                for (let i = bytes.length - 1; i >= pivot; i--) {
                                    m += x * bytes[i];
                                    x *= 256;
                                }
                                const n = bytes[1] + 32 < 251
                                    ? bytesToInt([bytes[1] + 32]) - 11
                                    : bytes[0] === 255 && bytes[1] < 251
                                        ? bytes[1] + 21
                                        : pivot === 3
                                            ? bytesToInt([bytes[1], bytes[2] + 21])
                                            : pivot === 4
                                                ? bytesToInt([bytes[1], bytes[2], bytes[3] + 21])
                                                : 0;
                                const int = 251 + m / Math.pow(2, 32 - n);
                                if (!Number.isInteger(int))
                                    throw new Error(`Invalid bytes. Got [${bytes.join(', ')}] = ${int}`);
                                if (int > 1099511627776)
                                    throw new Error(`Bytes must correspond to an integer less than or equal to 256^5. Got [${bytes.join(', ')}] = ${int}`);
                                return int;
                            })()
                            : (() => {
                                throw new Error(`Invalid first byte. Got length: ${bytes.length}, and bytes: [${bytes.join(', ')}]`);
                            })();
}

/**
 * Converts an integer to an array of bytes
 */
function intToArrayBytes(int) {
    if (int < 256)
        return [int];
    const bin = new Uint8Array(new Uint32Array([int]).buffer);
    if (int < 65536)
        return [bin[0], bin[1]];
    if (int < 16777216)
        return [bin[0], bin[1], bin[2]];
    if (int < 4294967296)
        return [bin[0], bin[1], bin[2], bin[3]];
    return [256, 256, 256, 256];
}

/**
 * Converts an integer to a buffer
 */
function intToBuffer(int) {
    return Buffer.from(intToArrayBytes(int));
}

/**
 * Converts a positive integer to a byte array.
 * Throws Error if the input is larger than 256^5 or not a positive integer.
 */
function intToBytes(int) {
    if (!Number.isInteger(int) || int < 0)
        throw new Error(`input must be a positive integer. Got ${int}`);
    if (int > 1099511627776)
        throw new Error(`input must be less than or equal to 256^5. Got ${int}`);
    const x = int - 251;
    return int < 251
        ? [int]
        : x < 256
            ? [251, x]
            : x < 65536
                ? [252, Math.floor(x / 256), x % 256]
                : x < 16777216
                    ? [253, Math.floor(x / 65536), Math.floor(x / 256) % 256, x % 256]
                    : x < 4294967296
                        ? [254, Math.floor(x / 16777216), Math.floor(x / 65536) % 256, Math.floor(x / 256) % 256, x % 256]
                        : (() => {
                            const exp = Math.floor(Math.log(x) / Math.log(2)) - 32;
                            const bytes = [255, ...intToBytes(exp)];
                            const y = Math.floor(x / Math.pow(2, exp - 11));
                            for (let i = 5, d = 1099511627776; i >= 0; i--, d /= 256) {
                                bytes.push(Math.floor(y / d) % 256);
                            }
                            return bytes;
                        })();
}

/**
 * Pads an array of bytes on the left
 */
function padArrayBytesLeft(a) {
    const l = a.length;
    return l === 4 ? a : l === 1 ? [0, 0, 0, a[0]] : l === 2 ? [0, 0, a[0], a[1]] : [0, a[0], a[1], a[2]];
}

/**
 * Pads an array of bytes on the right
 */
function padArrayBytesRight(a) {
    const l = a.length;
    return l === 4 ? a : l === 1 ? [a[0], 0, 0, 0] : l === 2 ? [a[0], a[1], 0, 0] : [a[0], a[1], a[2], 0];
}

/**
 * Trims an array of bytes on the left
 */
function trimArrayBytesLeft(a) {
    if (a[0] === 0) {
        if (a[1] === 0) {
            if (a[2] === 0) {
                return [a[3]];
            }
            return [a[2], a[3]];
        }
        return [a[1], a[2], a[3]];
    }
    return a;
}

/**
 * Trims an array of bytes on the right
 */
function trimArrayBytesRight(a) {
    if (a[3] === 0) {
        if (a[2] === 0) {
            if (a[1] === 0) {
                return [a[0]];
            }
            return [a[0], a[1]];
        }
        return [a[0], a[1], a[2]];
    }
    return a;
}

/**
 * Determine wheter the argument is a Object (is typeof object but not null).
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function isObject(value) {
    return value !== null && typeof value === 'object';
}

/**
 * Determine wheter a given object is a prototype-object (obj.constructor.prototype === obj).
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function isPrototype(value) {
    if (!isObject(value))
        return false;
    if (!('constructor' in value))
        return false;
    return value.constructor.prototype === value;
}

/**
 * Determine if value is a constructor function
 */
function isConstructor(value) {
    return (typeof value === 'function' &&
        'prototype' in value &&
        isPrototype(value.prototype) &&
        value === value.prototype.constructor);
}

/**
 * Determine whether a string is a hexadecimal string.
 */
function isHex$1(s) {
    return /[\da-f]+$/i.test(s);
}

/**
 * Determine whether a string is either a hexadecimal or a '\u' or '0x' prepended unicode hex string.
 */
function isHexOrUnicode(s) {
    return /^(\\\\?u|0x)?[\da-f]+$/i.test(s);
}

/**
 * Check if an object is iterable
 * @param o The object to check
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function isIterable(o) {
    return (typeof Symbol !== 'undefined' &&
        Symbol &&
        'iterator' in Symbol &&
        o != null &&
        typeof o[Symbol.iterator] === 'function');
}

/**
 * Checks if a string is a number.
 * @param string - input string
 */
function isNumericString(string) {
    const n = Number(string.trim());
    return !isNaN(n) && isFinite(n);
}

/**
 * Iterate the prototype chain of a given object.
 * @example
 * ```js
 * class A {}
 * class B extends A {}
 * class C extends B {}
 * const instance = new C()
 *
 * iteratePrototypeChain(C)
 * //=> [ C, B, A, Function.prototype, Object.prototype]
 *
 * iteratePrototypeChain(C.prototype)
 * //=> [C.prototype, B.prototype, A.prototype, Object.prototype]
 *
 * iteratePrototypeChain(instance)
 * //=> [instance, C.prototype, B.prototype, A.prototype, Object.prototype]
 * ```
 */
function* iteratePrototypeChain(object) {
    if (object == null)
        return;
    if (
    // if the below false, then object must be an instance
    !isPrototype(object) &&
        !isConstructor(object) &&
        // the two above depend on checking that typeof object is 'object',
        // so this last check is in case of arrow functions and generator functions
        object !== Function.prototype) {
        yield object;
        object = object.constructor.prototype;
    }
    let objectOrNull = object;
    while (objectOrNull) {
        yield objectOrNull;
        objectOrNull = Reflect.getPrototypeOf(objectOrNull);
    }
}

/**
 * Set multiple 'enumerable' property descriptor attributes of the target object to true.
 * @param object The target object.
 * @param propertyName The property names to be affected.
 */
function setEnumerable(object, ...propertyNames) {
    for (const propertyName of propertyNames) {
        Object.defineProperty(object, propertyName, { enumerable: true });
    }
}

/**
 * Set multiple 'configurable' property descriptor attributes of the target object to false.
 * @param object The target object.
 * @param propertyName The property names to be affected.
 */
function setNonConfigurable(object, ...propertyNames) {
    for (const propertyName of propertyNames) {
        Object.defineProperty(object, propertyName, { configurable: false });
    }
}

/**
 * Set multiple 'enumerable' property descriptor attributes of the target object to false.
 * @param object The target object.
 * @param propertyName The property names to be affected.
 */
function setNonEnumerable(object, ...propertyNames) {
    if (!object || typeof object !== 'object') {
        throw new Error(`setValueAsGetter() requires an object as the first argument.`);
    }
    for (const propertyName of propertyNames) {
        if (!Object.hasOwn(object, propertyName)) {
            throw new Error(`Property '${propertyName}' does not exist on object.`);
        }
        const des = Object.getOwnPropertyDescriptor(object, propertyName);
        if (!des)
            throw new Error(`Property '${propertyName}' does not have a descriptor.`);
        des.enumerable = false;
        Object.defineProperty(object, propertyName, des);
    }
}

/**
 * Set the 'enumerable' property descriptor attributes on the target object to false for all property names that start with '_' (underscore).
 * @param object The target object.
 */
function setNonEnumerablePrivateProperties(object) {
    setNonEnumerable(object, ...Object.keys(object).filter((key) => key.charAt(0) === '_'));
}

/**
 * Set multiple 'writable' property descriptor attributes of the target object to false.
 * @param object The target object.
 * @param propertyName The property names to be affected.
 */
function setNonWritable(object, ...propertyNames) {
    for (const propertyName of propertyNames) {
        Object.defineProperty(object, propertyName, { writable: false });
    }
}

/**
 * Set multiple 'writable' property descriptor attributes of the target object to true.
 * @param object The target object.
 * @param propertyName The property names to be affected.
 */
function setWritable(object, ...propertyNames) {
    for (const propertyName of propertyNames) {
        Object.defineProperty(object, propertyName, { writable: true });
    }
}

/**
 * Copy static members from source to target.
 */
function inheritStaticMembers(target, source, ignoreKeys = []) {
    const ignore = new Set([...Reflect.ownKeys(target), ...ignoreKeys, 'prototype', 'name', 'constructor']);
    for (const key of Reflect.ownKeys(source)) {
        if (ignore.has(key))
            continue;
        const des = Object.getOwnPropertyDescriptor(source, key);
        if (!des)
            continue;
        Object.defineProperty(target, key, des);
    }
    return target;
}

/**
 * Returns the class constructor object belonging to a given object's class of origin.
 */
function getConstructor(o) {
    return Object.getPrototypeOf(o).constructor;
}

/**
 * Returns the prototype object belonging to a given object.
 * @param o - The object to get the prototype of.
 */
function getPrototype(o) {
    return Object.getPrototypeOf(o);
}

/**
 * Set multiple 'enumerable' property descriptor attributes of the target object to false.
 * @param object The target object.
 * @param propertyName The property names to be affected.
 */
function setValueAsGetter(object, ...propertyNames) {
    if (!object || typeof object !== 'object') {
        throw new Error(`setValueAsGetter() requires an object as the first argument.`);
    }
    for (const propertyName of propertyNames) {
        if (!Object.hasOwn(object, propertyName)) {
            throw new Error(`Property '${propertyName}' does not exist on object.`);
        }
        const des = Object.getOwnPropertyDescriptor(object, propertyName);
        if (!des)
            throw new Error(`Property '${propertyName}' does not have a descriptor.`);
        const { value, enumerable, configurable } = des;
        Object.defineProperty(object, propertyName, { configurable, enumerable, get: () => value });
    }
    return object;
}

const interfaceDefinitions = new Map();
interfaceDefinitions.set('IRevivable', [['toJSON'], ['fromJSON']]);
interfaceDefinitions.set('IOptions', [['options', 'defaultOptions', 'handleOptions'], ['defaultOptions']]);

const hasSeenFirstInstance = new WeakSet();
/**
 * Abstract class that other classes can inherit from to gain various handy functionality.
 */
class Base {
    constructor(options) {
        // this.init()
    }
    get klass() {
        return Object.getPrototypeOf(this).constructor;
    }
    get proto() {
        return Object.getPrototypeOf(this);
    }
    init() {
        if (!hasSeenFirstInstance.has(this.constructor)) {
            hasSeenFirstInstance.add(this.constructor);
            this.inheritAllStatic();
            this.checkInterfaces();
        }
    }
    inheritAllStatic() {
        const ctors = [...iteratePrototypeChain(this.klass)].reverse();
        for (const ctor of ctors) {
            if (typeof ctor !== 'object' && Object.hasOwn(ctor, 'prototype')) {
                inheritStaticMembers(this.klass, ctor);
            }
        }
    }
    checkInterfaces() {
        for (const [interfaceName, [instanceMembers, staticMembers]] of interfaceDefinitions) {
            if (this.hasInterfaceInstanceMembers(instanceMembers)) {
                this.assertInterfaceStaticMembers(interfaceName, staticMembers);
            }
        }
    }
    hasInterfaceInstanceMembers(instanceMembers) {
        return instanceMembers.length === instanceMembers.filter((key) => key in this).length;
    }
    assertInterfaceStaticMembers(interfaceName, staticMembers) {
        for (const key of staticMembers) {
            if (!Object.hasOwn(this.constructor, key)) {
                throw new Error(`Interface ${interfaceName} requires class ${this.constructor.name} to implement static member: ${key}`);
            }
        }
    }
    /**
     * Make the properties with property names that start with an underscore non-enumerable.
     */
    setNonEnumerablePrivateProperties() {
        setNonEnumerablePrivateProperties(this);
    }
    assertNoAmbiguousOptions(options, optionKeyPairs) {
        for (const [key1, key2] of optionKeyPairs) {
            if (options[key1] !== undefined && options[key2] !== undefined) {
                throw new Error(`Cannot use the '${key1}' option and the '${key2}' option simultanously.`);
            }
        }
    }
    assertNoOptionsRequireMissingOptions(options, optionKeyPairs) {
        for (const [key1, key2] of optionKeyPairs) {
            if (options[key1] !== undefined && options[key2] === undefined) {
                throw new Error(`Cannot use the '${key1}' option without the '${key2}' option.`);
            }
        }
    }
}

class Matrix {
    matrix;
    immutable = false;
    static fromArray(array) {
        const cols = array[0].length;
        const m = new this(array.length, cols);
        for (let r = 0; r < array.length; r++) {
            if (array[r].length !== cols) {
                throw new Error('All rows must have the same length.');
            }
            for (let c = 0; c < cols; c++) {
                m.matrix[r][c] = array[r][c];
            }
        }
        return m;
    }
    static fromIterable(iterable) {
        const arr = [];
        for (const row of iterable) {
            arr.push([...row]);
        }
        return this.fromArray(arr);
    }
    static identity(size) {
        const m = new Matrix(size, size);
        for (let i = 0; i < size; i++) {
            m.matrix[i][i] = 1;
        }
        return m;
    }
    constructor(rows, cols) {
        if (rows < 1)
            throw new Error('Expected rows to be greater than zero.');
        if (cols < 1)
            throw new Error('Expected cols to be greater than zero.');
        this.matrix = new Array(rows);
        for (let r = 0; r < rows; r++) {
            this.matrix[r] = new Array(cols).fill(0);
        }
    }
    get rows() {
        return this.matrix.length;
    }
    get cols() {
        return this.matrix[0].length;
    }
    isSameInstanceAs(other) {
        return this === other;
    }
    getImmutable() {
        return this.immutable;
    }
    setImmutable(immutable) {
        this.immutable = immutable;
        return this;
    }
    deepEquals(other) {
        const m = other instanceof Matrix ? other.matrix : other;
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if (this.matrix[r][c] !== m[r][c]) {
                    return false;
                }
            }
        }
        return true;
    }
    set(row, col, value) {
        const m = this.immutable ? this.clone() : this;
        m.matrix[row][col] = value;
        return m;
    }
    get(row, col) {
        return this.matrix[row][col];
    }
    has(row, col) {
        return row < this.rows && col < this.cols && row >= 0 && col >= 0;
    }
    toArray() {
        const result = new Array(this.rows);
        for (let r = 0; r < this.rows; r++) {
            result[r] = this.matrix[r].slice();
        }
        return result;
    }
    clone() {
        const clone = new Matrix(this.rows, this.cols);
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                clone.matrix[r][c] = this.matrix[r][c];
            }
        }
        return clone;
    }
    forEach(f) {
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if (f(this.matrix[r][c], r, c) === false) {
                    return this;
                }
            }
        }
        return this;
    }
    forEachInRow(row, f) {
        for (let c = 0; c < this.cols; c++) {
            if (f(this.matrix[row][c], c) === false) {
                return this;
            }
        }
        return this;
    }
    forEachInCol(col, f) {
        for (let r = 0; r < this.rows; r++) {
            if (f(this.matrix[r][col], r) === false) {
                return this;
            }
        }
        return this;
    }
    forEachInDiagonal(f) {
        for (let i = 0; i < Math.min(this.rows, this.cols); i++) {
            if (f(this.matrix[i][i], i, i) === false) {
                return this;
            }
        }
        return this;
    }
    map(f) {
        const m = this.immutable ? this.clone() : this;
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                m.matrix[r][c] = f(this.matrix[r][c], r, c);
            }
        }
        return m;
    }
    *[Symbol.iterator]() {
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                yield this.matrix[r][c];
            }
        }
    }
    *values() {
        yield* this;
    }
    mapRow(row, f) {
        const m = this.immutable ? this.clone() : this;
        for (let c = 0; c < this.cols; c++) {
            m.matrix[row][c] = f(this.matrix[row][c], c);
        }
        return m;
    }
    mapCol(col, f) {
        const m = this.immutable ? this.clone() : this;
        for (let r = 0; r < this.rows; r++) {
            m.matrix[r][col] = f(this.matrix[r][col], r);
        }
        return m;
    }
    appendRow(row) {
        const m = this.immutable ? this.clone() : this;
        if (row) {
            if (row.length !== this.cols) {
                throw new Error('Row must have length ' + this.cols);
            }
        }
        else {
            row = new Array(this.cols).fill(0);
        }
        m.matrix.push(row);
        return m;
    }
    appendCol(col) {
        const m = this.immutable ? this.clone() : this;
        if (col) {
            if (col.length !== this.rows) {
                throw new Error('Col must have length ' + this.rows);
            }
        }
        else {
            col = new Array(this.rows).fill(0);
        }
        for (let r = 0; r < this.rows; r++) {
            m.matrix[r].push(col[r]);
        }
        return m;
    }
    addBy(n) {
        const m = this.immutable ? this.clone() : this;
        return m.map((value) => value + n);
    }
    subtractBy(n) {
        const m = this.immutable ? this.clone() : this;
        return m.map((value) => value - n);
    }
    multiplyBy(n) {
        const m = this.immutable ? this.clone() : this;
        return m.map((value) => value * n);
    }
    divideBy(n) {
        const m = this.immutable ? this.clone() : this;
        return m.map((value) => value / n);
    }
    addRowBy(row, n) {
        const m = this.immutable ? this.clone() : this;
        return m.mapRow(row, (value) => value + n);
    }
    subtractRowBy(row, n) {
        const m = this.immutable ? this.clone() : this;
        return m.mapRow(row, (value) => value - n);
    }
    multiplyRowBy(row, n) {
        const m = this.immutable ? this.clone() : this;
        return m.mapRow(row, (value) => value * n);
    }
    divideRowBy(row, n) {
        const m = this.immutable ? this.clone() : this;
        return m.mapRow(row, (value) => value / n);
    }
    addColBy(col, n) {
        const m = this.immutable ? this.clone() : this;
        return m.mapCol(col, (value) => value + n);
    }
    subtractColBy(col, n) {
        const m = this.immutable ? this.clone() : this;
        return m.mapCol(col, (value) => value - n);
    }
    multiplyColBy(col, n) {
        const m = this.immutable ? this.clone() : this;
        return m.mapCol(col, (value) => value * n);
    }
    divideColBy(col, n) {
        const m = this.immutable ? this.clone() : this;
        return m.mapCol(col, (value) => value / n);
    }
    swapRows(row1, row2) {
        const m = this.immutable ? this.clone() : this;
        const r1 = m.matrix[row1];
        const r2 = m.matrix[row2];
        m.matrix[row1] = r2;
        m.matrix[row2] = r1;
        return m;
    }
    swapCols(col1, col2) {
        const m = this.immutable ? this.clone() : this;
        for (let r = 0; r < this.rows; r++) {
            const v1 = m.matrix[r][col1];
            const v2 = m.matrix[r][col2];
            m.matrix[r][col1] = v2;
            m.matrix[r][col2] = v1;
        }
        return m;
    }
    some(f) {
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if (f(this.matrix[r][c], r, c)) {
                    return true;
                }
            }
        }
        return false;
    }
    every(f) {
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if (!f(this.matrix[r][c], r, c)) {
                    return false;
                }
            }
        }
        return true;
    }
    hasDimensions(rows, cols) {
        return this.rows === rows && this.cols === cols;
    }
    isSquareMatrix() {
        return this.rows === this.cols;
    }
    /**
     * Returns whether the matrix is a square matrix that has identical values on its diagonal.
     */
    isScalarMatrix() {
        if (!this.isSquareMatrix())
            return false;
        const val = this.matrix[0][0];
        for (let i = 1; i < this.rows; i++) {
            if (this.matrix[i][i] !== val) {
                return false;
            }
        }
        return true;
    }
    isZeroMatrix() {
        return this.every((value) => value === 0);
    }
    /**
     * Performs dot product of the matrix with another given matrix.
     */
    dotProduct(other) {
        if (this.cols !== other.rows) {
            throw new Error('A*B dot product not possible unless the number of columns in A and number of rows in B are the same.');
        }
        const rows = this.rows;
        const cols = other.cols;
        const steps = this.cols;
        const result = new Matrix(rows, cols);
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                for (let step = 0; step < steps; step++) {
                    result.matrix[r][c] += this.matrix[r][step] * other.matrix[step][c];
                }
            }
        }
        return result;
    }
}

class Queue extends Base {
    queue = [];
    static from(o) {
        const instance = new Queue();
        instance.queue = [...o];
        return instance;
    }
    static fromJSON(json) {
        return Queue.from(JSON.parse(json));
    }
    enqueue(item) {
        this.queue.push(item);
        return this;
    }
    dequeue() {
        const item = this.queue.shift();
        if (!item)
            throw new Error('Queue is empty');
        return item;
    }
    get size() {
        return this.queue.length;
    }
    toArray() {
        return this.queue.slice();
    }
    toJSON() {
        return this.queue;
    }
    *[Symbol.iterator]() {
        yield* this.queue;
    }
}
// const q = new Queue()
// q.enqueue(1)
// const str = JSON.stringify(q)
// const q2 = Queue.fromJSON(str)
// console.log(q2)

/**
 * Returns a given comparator as an array compatible comparator. Behaves as if the array to sort was recursively flattened.
 * @param compareAt shallow compare function that compares two elements of an array
 * @param descending whether the input comparator sorts in descending order
 */
function compareArray(compareAt, descending = false) {
    const orderMultiplier = descending ? -1 : 1;
    function recursiveCompare(a, b, _lenCompareParent) {
        const aIsArr = Array.isArray(a);
        const bIsArr = Array.isArray(b);
        if (aIsArr) {
            if (bIsArr) {
                const aLen = a.length;
                const bLen = b.length;
                let lenShortest, lenCompare;
                if (aLen > bLen) {
                    lenShortest = aLen;
                    lenCompare = 1 * orderMultiplier;
                }
                else if (aLen < bLen) {
                    lenShortest = bLen;
                    lenCompare = -1 * orderMultiplier;
                }
                else {
                    lenShortest = aLen;
                    lenCompare = 0;
                }
                for (let i = 0, len = lenShortest; i < len; i++) {
                    const res = recursiveCompare(a[i], b[i], lenCompare);
                    if (res !== 0) {
                        return res;
                    }
                }
            }
            else {
                return 1 * orderMultiplier;
            }
        }
        else {
            if (bIsArr) {
                return -1 * orderMultiplier;
            }
            else {
                const res = compareAt(a, b);
                if (res === 0) {
                    return _lenCompareParent || res;
                }
                else {
                    return res;
                }
            }
        }
        return 0;
    }
    return (a, b) => {
        return recursiveCompare(a, b);
    };
}

/**
 * Number comparator function (ascending)
 * @param a first value to compare
 * @param b second value to compare
 * @example
 * ```ts
 * const arr = [3, 1, 4, 1, 5]
 * arr.sort(compareNumber) // [1, 1, 3, 4, 5]
 * ```
 */
function compareNumber(a, b) {
    return a - b;
}

/**
 * Number comparator function (descending)
 * @param a first value to compare
 * @param b second value to compare
 * @example
 * ```ts
 * const arr = [3, 1, 4, 1, 5]
 * arr.sort(compareNumberDescending) // [5, 4, 3, 1, 1]
 * ```
 */
function compareNumberDescending(a, b) {
    return b - a;
}

/**
 * number, bigint, boolean comparator function (ascending)
 * @param a first value to compare
 * @param b second value to compare
 * @example
 * ```ts
 * const arr = [3n, true, -2n, false]
 * arr.sort(compareNumeric) // [-2n, false, true, 3n]
 * ```
 */
function compareNumeric(a, b) {
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
}

/**
 * number, bigint, boolean comparator function (descending)
 * @param a first value to compare
 * @param b second value to compare
 * @example
 * ```ts
 * const arr = [true, 3n, -2n, false]
 * arr.sort(compareNumericDescending) // [3n, true, false, -2n]
 * ```
 */
function compareNumericDescending(a, b) {
    if (a > b)
        return -1;
    if (a < b)
        return 1;
    return 0;
}

/**
 * Alpha numeric comparator function (ascending)
 * @param a first value to compare
 * @param b second value to compare
 */
function compareString(a, b) {
    return a.localeCompare(b);
}

/**
 * Alpha numeric comparator function (descending)
 * @param a first value to compare
 * @param b second value to compare
 */
function compareStringDescending(a, b) {
    return b.localeCompare(a);
}

class SortedArray extends Array {
    compare = compareString;
    compareFound = false;
    allowDuplicates = true;
    constructor(options = {}) {
        super();
        Object.defineProperty(this, 'compare', { enumerable: false });
        Object.defineProperty(this, 'compareFound', { enumerable: false });
        Object.defineProperty(this, 'allowDuplicates', { enumerable: false });
        if (options.compare) {
            this.compare = options.compare;
            this.compareFound = true;
        }
        if (options.data) {
            for (const e of options.data) {
                this.push(e);
            }
            if (!this.compareFound && this.length && typeof this[0] !== 'string') {
                this.compare = compareNumeric;
                this.compareFound = true;
            }
            sort(this, this.compare);
        }
        if (options.allowDuplicates === false) {
            this.allowDuplicates = false;
            this.unique();
        }
    }
    /**
     * Convert to a normal Array instance
     */
    toArray() {
        return Array.from(this);
    }
    add(element) {
        if (!this.compareFound) {
            if (typeof element !== 'string') {
                this.compare = compareNumeric;
                this.compareFound = true;
            }
        }
        if (this.length === 0) {
            this.push(element);
            return this;
        }
        const [index, foundIdentical] = this.insertionIndex(element);
        if (foundIdentical && !this.allowDuplicates)
            return this;
        this.splice(index, 0, element);
        return this;
    }
    /**
     * Add elements to the sorted array.
     * @param elements - The elements to add to the sorted array
     */
    addMany(...elements) {
        if (elements.length === 0)
            return this;
        for (const e of elements) {
            this.add(e);
        }
        return this;
    }
    /**
     * Remove all duplicate elements in the sorted array, leaving only unique values. Equality is determined by the compare function.
     */
    unique() {
        let len = this.length;
        if (len <= 1)
            return this;
        for (let prev, curr, i = 1; i < len; i++) {
            prev = this[i - 1];
            curr = this[i];
            if (this.compare(prev, curr) === 0) {
                this.splice(i, 1);
                len--;
                i--;
            }
        }
        return this;
    }
    /**
     * Returns a tuple containing the index of where to add an element to keep the array sorted and also whether an identical element was found.
     * @param element - The element for which to find its insertion index
     */
    insertionIndex(element) {
        if (this.length === 0)
            return [0, false];
        let low = 0;
        let high = this.length;
        while (low < high) {
            const mid = (low + high) >>> 1;
            const order = this.compare(this[mid], element);
            if (order === 0)
                return [mid, true];
            if (order < 0) {
                low = mid + 1;
            }
            else {
                high = mid;
            }
        }
        return [low, false];
    }
    /**
     * Returns a tuple containing the first index of where to add an element to keep the array sorted and also whether an identical element was found.
     * @param element - The element for which to find its insertion index
     */
    firstInsertionIndex(element) {
        const [index, foundIdentical] = this.insertionIndex(element);
        if (!foundIdentical)
            return [index, foundIdentical];
        let i = index - 1;
        while (i >= 0) {
            if (this.compare(this[i], element) !== 0) {
                return [i + 1, foundIdentical];
            }
            i--;
        }
        return [0, foundIdentical];
    }
    /**
     * Returns a tuple containing the last index of where to add an element to keep the array sorted and also whether an identical element was found.
     * @param element - The element for which to find its insertion index
     */
    lastInsertionIndex(element) {
        const [index, foundIdentical] = this.insertionIndex(element);
        if (!foundIdentical)
            return [index, foundIdentical];
        let i = index + 1;
        while (i < this.length) {
            if (this.compare(this[i], element) !== 0) {
                return [i, foundIdentical];
            }
            i++;
        }
        return [this.length, foundIdentical];
    }
    /**
     * Returns the index of the first element found that is determined equal by the compare function.
     * @param element - The element to find
     */
    indexOfCompare(element) {
        if (this.length === 0)
            return -1;
        if (this.length === 1)
            return this.compare(this[0], element) === 0 ? 0 : -1;
        const [index, foundIdentical] = this.insertionIndex(element);
        return foundIdentical ? index : -1;
    }
    /**
     * Returns the index of the first element that is determined equal by the compare function.
     * @param element - The element to find
     */
    firstIndexOfCompare(element) {
        if (this.length === 0)
            return -1;
        if (this.length === 1)
            return this.compare(this[0], element) === 0 ? 0 : -1;
        const [index, foundIdentical] = this.firstInsertionIndex(element);
        return foundIdentical ? index : -1;
    }
    /**
     * Returns the index of the last element that is determined equal by the compare function.
     * @param element - The element to find
     */
    lastIndexOfCompare(element) {
        if (this.length === 0)
            return -1;
        if (this.length === 1)
            return this.compare(this[0], element) === 0 ? 0 : -1;
        const [index, foundIdentical] = this.lastInsertionIndex(element);
        return foundIdentical ? index - 1 : -1;
    }
    /**
     * Returns all indices at which element exists. Equality is determined by the compare function.
     * @param element - The element to find
     */
    indicesOfCompare(element) {
        const index = this.indexOfCompare(element);
        if (index === -1)
            return [];
        const result = [];
        if (!this.allowDuplicates)
            return result;
        let i = index - 1;
        while (i >= 0) {
            if (this.compare(this[i], element) === 0) {
                result.push(i);
            }
            else {
                break;
            }
            i--;
        }
        result.push(index);
        i = index + 1;
        while (i < this.length) {
            if (this.compare(this[i], element) === 0) {
                result.push(i);
            }
            else {
                break;
            }
            i++;
        }
        result.sort(compareNumber);
        return result;
    }
    /**
     * Returns the interestion of this and another sorted array.
     * @param sorted - another sorted array with which to find intersections
     */
    intersection(sorted) {
        const result = [];
        let i1 = 0;
        let i2 = 0;
        // if a1 curr < a2 curr, loop a1 elems until a1 curr >= a2 curr
        while (i1 < this.length && i2 < sorted.length) {
            if (this.compare(this[i1], sorted[i2]) < 0) {
                i1++;
            }
            else if (this.compare(this[i1], sorted[i2]) === 0) {
                result.push(this[i1]);
                i1++;
                i2++;
            }
            else {
                i2++;
            }
        }
        return result;
    }
}

/**
 * Matches 2 or more consecutive whitespace characters, including line terminators, tabs, etc.
 */
const repeatingWhiteSpace = /((\r?\r?\n)|\s|\t){2,}/g;
/**
 * Matches words in a string
 */
const words = /\b[^\W]+/g;
/**
 * Matches Danish social security numbers with or without the dash.
 * Example: 151199-1512
 */
const socialSecurityNumbersDK = /(?<dd>[0-3][0-9])(?<mm>[0-1][0-9])(?<yy>[0-9]{2}).?(?<id>[0-9]{4})/g;
/**
 * Matches positive or negative integers.
 * Example: -20
 */
const integers = /-?\d+/g;
/**
 * Matches inverted US format positive or negative decimal numbers with no thousand separators.
 * Example: -20412,3461
 */
const numberNoThousandSepCommaDecimal = /-?\d+,\d+/g;
/**
 * Matches US format positive or negative decimal numbers with no thousand separators.
 * Example: -20412.3461
 */
const numberNoThousandSepDotDecimal = /-?\d+.\d+/g;
/**
 * Matches inverted US format positive or negative decimal numbers with thousand separators.
 * Example: -20.412,34
 */
const numberDotSepCommaDecimal = /-?\d{1,3}(\.\d{3})*(,\d+)?/g;
/**
 * Matches US format positive or negative decimal numbers with thousand separators.
 * Example: -20,412.34
 */
const numberCommaSepDotDecimal = /-?\d{1,3}(,\d{3})*(\.\d+)?/g;
/**
 * Prefixes for hex colors, hex decimal and regexp unicode hex
 */
const isHexPrefix = /^(0x|0h|(\\?u)|#)/i;
/**
 * Understands prefixes for hex colors, hex decimal and regexp unicode hex
 */
const isHex = /^(0x|0h|(\\?u)|#)?[0-9A-F]+$/i;
/**
 * For checking if a string is of only alpha characters for a specific locale.
 */
const isLocaleAlpha = new Map([
    ['en-US', /^[A-Z]+$/i],
    ['az-AZ', /^[A-VXYZÇƏĞİıÖŞÜ]+$/i],
    ['bg-BG', /^[А-Я]+$/i],
    ['cs-CZ', /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i],
    ['da-DK', /^[A-ZÆØÅ]+$/i],
    ['de-DE', /^[A-ZÄÖÜß]+$/i],
    ['el-GR', /^[Α-ώ]+$/i],
    ['es-ES', /^[A-ZÁÉÍÑÓÚÜ]+$/i],
    ['fa-IR', /^[ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/i],
    ['fr-FR', /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i],
    ['it-IT', /^[A-ZÀÉÈÌÎÓÒÙ]+$/i],
    ['nb-NO', /^[A-ZÆØÅ]+$/i],
    ['nl-NL', /^[A-ZÁÉËÏÓÖÜÚ]+$/i],
    ['nn-NO', /^[A-ZÆØÅ]+$/i],
    ['hu-HU', /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i],
    ['pl-PL', /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i],
    ['pt-PT', /^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i],
    ['ru-RU', /^[А-ЯЁ]+$/i],
    ['sl-SI', /^[A-ZČĆĐŠŽ]+$/i],
    ['sk-SK', /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i],
    ['sr-RS@latin', /^[A-ZČĆŽŠĐ]+$/i],
    ['sr-RS', /^[А-ЯЂЈЉЊЋЏ]+$/i],
    ['sv-SE', /^[A-ZÅÄÖ]+$/i],
    ['th-TH', /^[ก-๐\s]+$/i],
    ['tr-TR', /^[A-ZÇĞİıÖŞÜ]+$/i],
    ['uk-UA', /^[А-ЩЬЮЯЄIЇҐі]+$/i],
    ['vi-VN', /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i],
    ['ku-IQ', /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i],
    // eslint-disable-next-line no-misleading-character-class
    ['ar', /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/],
    ['he', /^[א-ת]+$/],
    ['fa', /^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی']+$/i],
]);
/**
 * For checking if a string is of only alpha-numeric characters for a specific locale.
 */
const isLocaleAlphaNumeric = new Map([
    ['en-US', /^[0-9A-Z]+$/i],
    ['az-AZ', /^[0-9A-VXYZÇƏĞİıÖŞÜ]+$/i],
    ['bg-BG', /^[0-9А-Я]+$/i],
    ['cs-CZ', /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i],
    ['da-DK', /^[0-9A-ZÆØÅ]+$/i],
    ['de-DE', /^[0-9A-ZÄÖÜß]+$/i],
    ['el-GR', /^[0-9Α-ω]+$/i],
    ['es-ES', /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i],
    ['fr-FR', /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i],
    ['it-IT', /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i],
    ['hu-HU', /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i],
    ['nb-NO', /^[0-9A-ZÆØÅ]+$/i],
    ['nl-NL', /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i],
    ['nn-NO', /^[0-9A-ZÆØÅ]+$/i],
    ['pl-PL', /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i],
    ['pt-PT', /^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i],
    ['ru-RU', /^[0-9А-ЯЁ]+$/i],
    ['sl-SI', /^[0-9A-ZČĆĐŠŽ]+$/i],
    ['sk-SK', /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i],
    ['sr-RS@latin', /^[0-9A-ZČĆŽŠĐ]+$/i],
    ['sr-RS', /^[0-9А-ЯЂЈЉЊЋЏ]+$/i],
    ['sv-SE', /^[0-9A-ZÅÄÖ]+$/i],
    ['th-TH', /^[ก-๙\s]+$/i],
    ['tr-TR', /^[0-9A-ZÇĞİıÖŞÜ]+$/i],
    ['uk-UA', /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i],
    ['ku-IQ', /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i],
    ['vi-VN', /^[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i],
    // eslint-disable-next-line no-misleading-character-class
    ['ar', /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/],
    ['he', /^[0-9א-ת]+$/],
    ['fa', /^['0-9آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی۱۲۳۴۵۶۷۸۹۰']+$/i],
]);

var regexLibrary = /*#__PURE__*/Object.freeze({
  __proto__: null,
  repeatingWhiteSpace: repeatingWhiteSpace,
  words: words,
  socialSecurityNumbersDK: socialSecurityNumbersDK,
  integers: integers,
  numberNoThousandSepCommaDecimal: numberNoThousandSepCommaDecimal,
  numberNoThousandSepDotDecimal: numberNoThousandSepDotDecimal,
  numberDotSepCommaDecimal: numberDotSepCommaDecimal,
  numberCommaSepDotDecimal: numberCommaSepDotDecimal,
  isHexPrefix: isHexPrefix,
  isHex: isHex,
  isLocaleAlpha: isLocaleAlpha,
  isLocaleAlphaNumeric: isLocaleAlphaNumeric
});

/**
 * Easily perform regex 'exec' on a string. An iterable is returned which steps through the exec process and yields all the details you might need.
 * @param regex - The regular expression object
 * @param string - The string to perform the operation on
 * @example
 * ```js
 * const regex = /(?<g1>a)/g
 * const str = 'Anthony wants a girlfriend.'
 * console.log([...rexec(regex, str)])
 * // [
 * // 	{
 * //     index: 9,
 * //     lastIndex: 10,
 * //     groups: { g1: 'a' },
 * //     match: 'a',
 * //   },
 * //   {
 * //     index: 14,
 * //     lastIndex: 15,
 * //     groups: { g1: 'a' },
 * //     match: 'a',
 * //   },
 * // ]
 * ```
 */
function* rexec(regex, string) {
    let match;
    while ((match = regex.exec(string)) !== null) {
        yield {
            index: match.index,
            lastIndex: regex.lastIndex,
            groups: Object.assign({}, match.groups),
            match: match[0],
        };
    }
}

/**
 * Returns an array of named groups defined inside a RegExp instance.
 * @param re RegExp instance to extract named groups from.
 */
function regexGetGroupNames(re) {
    const names = [];
    for (const res of rexec(/\(\?<(?<name>\w+)>/g, re.toString())) {
        names.push(res.groups.name);
    }
    return names;
}

/**
 * Escapes a string so it can be used in a regular expression.
 */
function regexEscapeString(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

/**
 * Convert a regex for matching to a regex for validation.
 * @param regex - The regex to convert
 * @example ```js
 * const regexMatchDigits = /\d+/gi;
 * const regexIsDigit = regexMatcherToValidater(regexMatchDigits); //=> /^\d+$/i
 * const isDigit = (str) => regexIsDigit.test(str)
 * isDigit('1') //=> true
 * isDigit('a') //=> false
 * ```
 */
function regexMatcherToValidater(regex) {
    return new RegExp(`^${regex.source}$`, regex.flags.replace('g', ''));
}

/**
 * Count occurances of a character within a given string.
 * @param input - The string to search
 * @param char - The character to find
 */
function strCountCharOccurances(input, char) {
    if (char.length !== 1) {
        throw new Error('Expected char to be a single character string of length 1.');
    }
    let result = 0;
    for (const c of input) {
        if (c === char) {
            result++;
        }
    }
    return result;
}

/**
 * Count the number of occurrences of each character in a string.
 * @example
 * ```ts
 * strCountChars('Hello!') // Map(9) { 'H' => 1, 'e' => 1, 'l' => 2, 'o' => 1, '!' => 1 }
 * ```
 */
function strCountChars(string) {
    const result = new Map();
    for (const char of string) {
        const count = result.get(char);
        result.set(char, count ? count + 1 : 1);
    }
    return result;
}

/**
 * Returns whether the string is lower case.
 * @param input - input string
 * @example
 * ```js
 * strIsLowerCase('abc')
 * //=> true
 *
 * strIsLowerCase('ABC')
 * //=> false
 * ```
 */
function strIsLowerCase(input) {
    return input === input.toLowerCase();
}

/**
 * Returns whether the string is upper case.
 * @param input - input string
 * @example
 * ```js
 * strIsUpperCase('abc')
 * //=> false
 *
 * strIsUpperCase('ABC')
 * //=> true
 * ```
 */
function strIsUpperCase(input) {
    return input === input.toUpperCase();
}

/**
 * Takes a multiline string and removes lines that are empty or only contain whitespace.
 * @param input - input string
 */
function strLinesRemoveEmpty(input) {
    return input
        .replace(/\r?\n\s*\r?\n/gm, '\n')
        .trimStart()
        .trimEnd();
}

/**
 * Takes a multiline string and performs a left side trim of whitespace on each line.
 * @param input - input string
 */
function strLinesTrimLeft(input) {
    return input.replace(/\n\r?\s+/gm, '\n');
}

/**
 * Takes a multiline string and performs a right side trim of whitespace on each line.
 * @param input - input string
 */
function strLinesTrimRight(input) {
    return input.replace(/\s+\n/gm, '\n');
}

/**
 * Very crude, simple, fast code formatting of minified code.
 * Only works when input code:
 * - is minified
 * - is scoped with brackets
 * - expressions end with semicolon
 * - has no string literals containing any of these characters: '{', '}', ';'.
 * @param input The minified source code
 * @param indent The string to use as indentation
 */
function strPrettifyMinifiedCode(input, indent = '  ') {
    const getIndents = (n) => strRepeat('\t', n);
    const fixIndents = (s) => {
        return s.replace(/\t +/g, '\t').replace(/\t/g, indent);
    };
    let depth = 0;
    const arr = Array.from(input).map((c) => {
        if (c === '{') {
            depth++;
            return '{\n' + getIndents(depth);
        }
        else if (c === '}') {
            depth--;
            return '\n' + getIndents(depth) + '}\n' + getIndents(depth);
        }
        else if (c === ';') {
            return ';\n' + getIndents(depth);
        }
        else
            return c;
    });
    return fixIndents(strLinesTrimRight(strLinesRemoveEmpty(arr.join(''))));
}

/**
 * Remove duplicate characters from a string.
 * ```ts
 * strRemoveDuplicateChars('Hello world!') // 'Helo wrd!'
 * ```
 */
function strRemoveDuplicateChars(string) {
    return Array.from(new Set(string)).join('');
}

/**
 * Returns a given number of contatenations of a given input string.
 * @param input - input string
 * @param n - Number of repetitions of the input string
 */
function strRepeat(input, n) {
    return new Array(n).fill(input).join('');
}

/**
 * In a given string, replace all occurances of a given search string with a given replacement string.
 * @param input input string
 * @param replace string to find a replace
 * @param replaceWith string to replace matches with
 * @param flags RegExp flags as single string.
 */
function strReplaceAll(input, replace, replaceWith, flags = 'g') {
    return input.replace(new RegExp(regexEscapeString(replace), flags), replaceWith);
}

/**
 * Sorts the characters in a string.
 * @example
 * ```ts
 * strSortChars('hello') // 'ehllo'
 * ```
 */
function strSortChars(string) {
    return Array.from(string).sort().join('');
}

function isCamelCaseWordBreakIndex(word, index) {
    return (strIsLowerCase(word[index - 1]) &&
        strIsUpperCase(word[index]) &&
        !isNumericString(word[index - 1]) &&
        !isNumericString(word[index]));
}
/**
 * Returns an array of words in the string
 * @param input - input string
 * @example
 * ```js
 * strSplitCamelCase('someCamelCase')
 * //=> ['some', 'Camel', 'Case']
 * ```
 */
function strSplitCamelCase(word) {
    const result = [];
    const lastCharIndex = word.length - 1;
    let lastCamelCaseBreakIndex = 0;
    let foundCamelCase = false;
    for (let i = 1; i < word.length; i++) {
        if (foundCamelCase && i === lastCharIndex) {
            // last char
            const sub = word.substring(lastCamelCaseBreakIndex);
            if (sub)
                result.push(sub);
            continue;
        }
        if (isCamelCaseWordBreakIndex(word, i)) {
            const sub = word.substring(lastCamelCaseBreakIndex, i);
            if (!sub)
                continue;
            result.push(sub);
            lastCamelCaseBreakIndex = i;
            foundCamelCase = true;
        }
    }
    // if no splits needed, just return the word as it was
    if (!foundCamelCase) {
        result.push(word);
    }
    return result;
}

/**
 * Converts a string to an array of char codes
 * @example
 * ```ts
 * strToCharCodes('hello') // [104, 101, 108, 108, 111]
 * ```
 */
function strToCharCodes(str) {
    const len = str.length;
    const ret = new Array(len);
    for (let i = 0; i < len; i++) {
        ret[i] = str.charCodeAt(i);
    }
    return ret;
}

/**
 * Returns a string containing the set of all unique characters in a string.
 * @example
 * ```ts
 * strToCharSet('hello') // 'ehlo'
 * ```
 */
function strToCharSet(string) {
    return Array.from(new Set(string)).sort().join('');
}

/**
 * Intelligently split a string into sentences. Uses NLP with parse tree to determine sentence boundaries.
 * @param text Text to split into sentences
 * @example
 * ```ts
 * strToSentences('Hello world. How are you?') // ['Hello world.', 'How are you?']
 * ```
 */
function strToSentences(text) {
    return split(text)
        .map((node) => {
        const [start, end] = node.range;
        return text.substring(start, end).replace(repeatingWhiteSpace, ' ').trim();
    })
        .filter((s) => !!s);
}

/**
 * Returns an array of words in the string
 * @param input - input string
 * @example
 * ```js
 * strToWords('How are you?')
 * //=> ['How', 'are', 'you']
 * ```
 */
function strToWords(input) {
    return words$1(input);
}

/**
 * Inserts provided strings before and after a string.
 * @param input - input string
 * @param left - string to place before
 * @param right - string to place after
 * @param flags - regex flags
 */
function strUnwrap(input, left, right, flags = '') {
    return input
        .replace(new RegExp('^' + regexEscapeString(left), flags), '')
        .replace(new RegExp(regexEscapeString(right) + '$', flags), '');
}

/**
 * Inserts provided strings before and after a string.
 * @param input - input string
 * @param left - string to place before
 * @param right - string to place after
 * @example
 * ```js
 * expect(util.strWrapBetween('input', '#', '&')).toBe('#input&');
 * ```
 */
function strWrapBetween(input, left, right) {
    return left + input + right;
}

/**
 * Inserts a provided string before and after a string.
 * @param input - input string
 * @param wrap - string to place before and after
 * @example
 * ```js
 * expect(util.strWrapIn('input', '#')).toBe('#input#');
 * ```
 */
function strWrapIn(input, wrap) {
    return wrap + input + wrap;
}

/**
 * Wraps a string in angle brackets.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInAngleBrackets('input')).toBe('<input>');
 * ```
 */
function strWrapInAngleBrackets(input) {
    return '<' + input + '>';
}

/**
 * Wraps a string in braces.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInBraces('input')).toBe('{input}');
 * ```
 */
function strWrapInBraces(input) {
    return '{' + input + '}';
}

/**
 * Wraps a string in brackets.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInBrackets('input')).toBe('[input]');
 * ```
 */
function strWrapInBrackets(input) {
    return '[' + input + ']';
}

/**
 * Wraps a string in parenthesis.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInDoubleQuotes('input')).toBe('"input"');
 * ```
 */
function strWrapInDoubleQuotes(input) {
    return '"' + input + '"';
}

/**
 * Wraps a string in parenthesis.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInParenthesis('input')).toBe('(input)');
 * ```
 */
function strWrapInParenthesis(input) {
    return '(' + input + ')';
}

/**
 * Wraps a string in parenthesis.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInSingleQuotes('input')).toBe("'input'");
 * ```
 */
function strWrapInSingleQuotes(input) {
    return "'" + input + "'";
}

/**
 * String hashing
 */
const strHash = {
    /**
     * Hash a string into a buffer with a given algorithm
     * @param string The string to hash
     * @param algorithm sha1 | sha256 | sha512 | md5 | etc...
     * @see strHashListAlgorithms for a list of accepted strings for 'algorithm'
     * @example
     * ```ts
     * strHash.toBuffer('hello')
     * //=> <Buffer 2c f2 4d ba 5f b0 a3 0e 26 e8 3b 2a c5 b9 e2 9e 1b 16 1e 5c 1f a7 42 5e 73 04 33 62 93 8b 98 24>
     * ```
     */
    toBuffer(string, algorithm = 'sha256') {
        return createHash(algorithm).update(string).digest();
    },
    /**
     * Hash a string into an array of unsigned 32-bit integers.
     * @param string The string to hash
     * @param algorithm sha1 | sha256 | sha512 | md5 | etc...
     * @see strHashListAlgorithms for a list of accepted strings for 'algorithm'
     * @example
     * ```ts
     * strHash.toUint32Array('hello')
     * //=> Uint32Array(8) [3125670444,  245608543, 708569126, 2665658821, 1545475611, 1581426463, 1647510643, 613976979]
     * ```
     */
    toUint32Array(string, algorithm = 'sha256') {
        return new Uint32Array(this.toBuffer(string, algorithm).buffer);
    },
    /**
     * Hash a string into a buffer with a given algorithm
     * @param string The string to hash
     * @param algorithm sha1 | sha256 | sha512 | md5 | etc...
     * @see strHashListAlgorithms for a list of accepted strings for 'algorithm'
     * @param encoding base64 | base64url | hex | binary | utf8 | utf-8 | utf16le | latin1 | ascii | binary | ucs2 | ucs-2
     * @example
     * ```ts
     * strHash.toString('hello', 'sha256', 'hex')
     * //=> 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
     * ```
     */
    toString(string, algorithm = 'sha256', encoding = 'base64') {
        return this.toBuffer(string, algorithm).toString(encoding);
    },
    /**
     * List all available hash algorithms (node-js crypto library)
     */
    listAlgorithms() {
        return getHashes();
    },
};

/**
 * Returns the string as is, except the first character is capitalized.
 * @param string The string to capitalize the first character of.
 */
function strFirstCharToUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
}

/**
 * Tries to parse strings such as "false" and "true" into corresponding booleans.
 * @param string The string to parse.
 */
function strParseBoolean(string) {
    return string.toLowerCase() === 'true';
}

/**
 * Checks if a string is a valid regex flags string.
 * @example
 * ```ts
 * regexIsValidFlags('gim') // true
 * regexIsValidFlags('gmisuy') // false
 * ```
 */
function regexIsValidFlags(flags) {
    return /^[gimsuy]*$/.test(flags) && strRemoveDuplicateChars(flags).length === flags.length;
}

/**
 * Takes a string of RegExp flags and returns a string guaranteed to be valid.
 * @param flags - string of RegExp flags
 * @example
 * ```ts
 * regexFixFlags('ggim') // 'gim'
 * regexFixFlags('?gim*') // 'gim'
 * ```
 */
function regexFixFlags(flags) {
    if (!flags)
        return flags;
    return strSortChars(strRemoveDuplicateChars(flags).replace(/[^gimsuy]/gi, ''));
}

/**
 * Returns an array of all valid flags for a regular expression.
 * @example
 * ```ts
 * regexValidFlags() //=> ['g', 'i', 'm', 's', 'u', 'y']
 * ```
 */
function regexValidFlags() {
    return ['g', 'i', 'm', 's', 'u', 'y'];
}

/**
 * A RegExp class extension with extra features.
 */
class BemojeRegex extends RegExp {
    static defaultOptions = {
        escapeSourceString: false,
        fixFlags: false,
    };
    options;
    constructor(source, flags = '', options) {
        if (source instanceof RegExp && !flags) {
            super(source);
        }
        else {
            options = Object.assign({}, BemojeRegex.defaultOptions, options);
            if (source instanceof RegExp) {
                flags = flags ? flags : source.flags;
                source = source.source;
            }
            else if (options?.escapeSourceString) {
                source = regexEscapeString(source);
            }
            if (options.fixFlags) {
                flags = regexFixFlags(flags);
            }
            else {
                flags = strSortChars(flags);
            }
            super(source, flags);
        }
        this.options = options || BemojeRegex.defaultOptions;
    }
    /**
     * Checks if a string is a valid regex flags string.
     */
    static isValidFlags = regexIsValidFlags;
    /**
     * Takes a string of RegExp flags and returns a string guaranteed to be valid.
     * @param flags - string of RegExp flags
     */
    static fixFlags = regexFixFlags;
    /**
     * Returns an array of all valid flags for a regular expression.
     */
    static getValidFlags = regexValidFlags;
    /**
     * Returns true if the RegExp instance has same source and flags.
     * @param regex - RegExp instance to compare to.
     */
    compareTo(regex) {
        return this.source === regex.source && this.flags === regex.flags;
    }
    /**
     * Returns true if the RegExp instance is a also BemojeRegex instance and both have the same source and flags.
     * @param regex - RegExp instance to compare to.
     */
    compareToStrict(regex) {
        return regex instanceof BemojeRegex && this.source === regex.source && this.flags === regex.flags;
    }
    /**
     * Returns an array of named groups defined inside the RegExp instance.
     */
    getGroupNames() {
        return regexGetGroupNames(this);
    }
    /**
     * Easily perform regex 'exec' on a string. An iterable is returned which steps through the exec process and yields all the details you might need.
     */
    *rexec(string) {
        yield* rexec(this, string);
    }
    /**
     * Convert a regex for matching to a regex for validation.
     */
    toValidator() {
        return Object.setPrototypeOf(regexMatcherToValidater(this), BemojeRegex.prototype);
    }
    /**
     * Convert the BemojeRegex instance to a RegExp instance.
     */
    toRegExp() {
        return Object.setPrototypeOf(this, RegExp.prototype);
    }
}
// declare global {
//   interface RegExp {
//     /**
//      * Convert the RegExp instance to a BemojeRegex instance.
//      */
//     get bemoje(): BemojeRegex
//   }
// }
// Object.defineProperty(RegExp.prototype, 'bemoje', {
//   get: function () {
//     return Object.setPrototypeOf(this, BemojeRegex.prototype)
//   },
// })
// const reg = new BemojeRegex(/(?<asd>\/\*\*)(?<aga3>.*?)(?=\*\/)(?<ahfdtr>\*\/)/gi)
// console.log(reg.getGroupNames())
// console.log(reg.getGroupNames())
// console.log(reg.toValidator())
// console.log(reg.toRegExp())
// const reg2 = new BemojeRegex(/abc/g)
// const str2 = 'lala abc lalala abc ...'
// console.log([...reg2.rexec(str2)])

/**
 * Builds a regex that matches a string between two strings. Supports regex instead of string.
 * @param left - string or regex to match before
 * @param right - string or regex to match after
 * @param flags - regex flags - 'g' and 's' are always added to whatever flags are passed.
 * @example
 * ```ts
 * const regex = buildRegexBetween(/a/, /b/)
 * 'abc'.match(regex)?.groups?.mid // 'c'
 * ```
 */
function buildRegexBetween(left, right, flags) {
    left = typeof left === 'string' ? regexEscapeString(left) : left.source;
    right = typeof right === 'string' ? regexEscapeString(right) : right.source;
    flags = flags ? strRemoveDuplicateChars('gs' + flags) : 'gs';
    return new RegExp(`(?<left>${left})(?<mid>.*?)(?=${right})(?<right>${right})`, flags);
}

/**
 * Sets the name of a function.
 * @param name The name to set.
 * @param fun The function to set the name of.
 */
function funSetName(name, fun) {
    Object.defineProperty(fun, 'name', { value: name, configurable: true });
    return fun;
}

function parseParam(param) {
    const isString = typeof param === 'string';
    const reg = isString
        ? new RegExp(regexEscapeString(param), 'g')
        : new RegExp(param.source, strRemoveDuplicateChars(param.flags + 'g'));
    const regValidate = new RegExp('^' + reg.source + '$', '');
    return [reg, regValidate];
}
/**
 * Builds a regex that matches a string between two strings. Supports regex instead of string.
 * @param type - type of scope being matched
 * @param left - string or regex to match before
 * @param right - string or regex to match after
 * @param flags - regex flags - 'g' and 's' are always added to whatever flags are passed.
 * @example
 * ```ts
 * const regex = buildRegexBetween(/a/, /b/)
 * 'abc'.match(regex)?.groups?.mid // 'c'
 * ```
 */
function regexScopeTree(type, left, right) {
    const [regLeft, regLeftValidate] = parseParam(left);
    const [regRight, regRightValidate] = parseParam(right);
    return funSetName(type, function* (string, yieldOnlyRootNodes = false) {
        const matches = [...rexec(regLeft, string)].concat([...rexec(regRight, string)]);
        matches.sort(compareArray((a, b) => a.index - b.index));
        const nodes = [];
        const stack = [];
        for (const match of matches) {
            if (regLeftValidate.test(match.match)) {
                stack.push(match);
            }
            else if (regRightValidate.test(match.match)) {
                const left = stack.pop();
                if (!left)
                    continue;
                const right = match;
                const depth = stack.length;
                const node = {
                    type,
                    parent: null,
                    depth,
                    left,
                    right,
                    between: {
                        index: left.lastIndex,
                        lastIndex: right.index,
                        groups: {},
                        match: string.substring(left.lastIndex, right.index),
                    },
                    children: [],
                };
                setNonEnumerable(node, 'parent');
                for (let i = nodes.length - 1; i >= 0; i--) {
                    if (left.index >= nodes[i].left.index || right.lastIndex <= nodes[i].right.lastIndex)
                        break;
                    node.children.push(nodes[i]);
                    if (nodes[i].parent !== null)
                        continue;
                    nodes[i].parent = node;
                }
                nodes.push(node);
                if (yieldOnlyRootNodes && depth > 0)
                    continue;
                yield node;
            }
            else {
                throw new Error('Match does not recognize itself as neither left nor right, which should be impossible.');
            }
        }
    });
}
// const parenthesesTree = regexScopeTree('Parentheses', '(', ')')
// const string = '(1+((3)+(1)))+(15+(21-(521))))'
// console.dir([...parenthesesTree(string, true)], { depth: null })

const REGEX_VALID_A = /^[A-Z]*$/i;
const alphaToColMap = new Map();
/**
 * Convert spreadsheet column letter(s) to column-number
 * @param A - Column letter
 * @param zeroIndexed - Whether or not column number start at one or zero.
 */
function letterToCol(A, zeroIndexed = false) {
    A = A.toUpperCase();
    const fromMem = alphaToColMap.get(A);
    if (fromMem)
        return fromMem;
    if (!REGEX_VALID_A.test(A))
        throw new Error(`Invalid column letter: ${A}`);
    let col = 0;
    const length = A.length;
    for (let i = 0; i < length; i++) {
        col += (A.charCodeAt(i) - 64) * Math.pow(26, length - i - 1);
    }
    return col - (zeroIndexed ? 1 : 0);
}

const REGEX_VALID_A1 = /^(?<a>[A-Z]+)(?<n>[1-9]+)$/g;
/**
 * Convert spreadsheet A1-notation to [column, row].
 * @param A1 - A1-notation string.
 * @param zeroIndexed - Whether or not column and row numbers start at one or zero.
 */
function A1ToColRow(A1, zeroIndexed = false) {
    A1 = A1.toUpperCase();
    const matches = [...rexec(REGEX_VALID_A1, A1)];
    if (!matches.length)
        throw new Error(`Invalid A1 string: ${A1}`);
    const adjust = zeroIndexed ? 1 : 0;
    return [letterToCol(matches[0].groups.a) - adjust, parseInt(matches[0].groups.n) - adjust];
}

const colToAlphaMap = new Map();
/**
 * Convert a spreadsheet column number to a column letter.
 * @param col - Column number
 * @param zeroIndexed - Whether or not column number start at one or zero.
 */
function colToLetter(col, zeroIndexed = false) {
    if (zeroIndexed)
        col++;
    const fromMem = colToAlphaMap.get(col);
    if (fromMem)
        return fromMem;
    if (!Number.isInteger(col))
        throw new Error(`Expected col to be an integer. Got: ${col}`);
    if (col < 1)
        throw new Error(`Expected col to be greater than zero. Got: ${col}`);
    let letter = '';
    let temp;
    while (col > 0) {
        temp = (col - 1) % 26;
        letter = String.fromCharCode(temp + 65) + letter;
        col = (col - temp - 1) / 26;
    }
    return letter;
}

/**
 * Convert spreadsheet [column, row] to A1-notation.
 * @param CR - [column, row]
 * @param zeroIndexed - Whether or not column number start at one or zero.
 */
function colRowToA1(CR, zeroIndexed = false) {
    if (CR.length !== 2)
        throw new Error(`Expected CR to to be length 2. Got: ${CR.length}`);
    if (!Number.isInteger(CR[1]))
        throw new Error(`Expected row to be an integer. Got: ${CR[1]}`);
    if (CR[1] < 1)
        throw new Error(`Expected row to be greater than zero. Got: ${CR[1]}`);
    return colToLetter(CR[0], zeroIndexed) + CR[1].toString();
}

/**
 * Two-dimensional table class supporting column and row headers.
 */
class Table extends Base {
    _columnHeaders;
    _rowHeaders;
    _data = [];
    /**
     * Creates a Table instance from CSV string data.
     * @param csv CSV data string
     * @param delimiter csv delimiter
     * @param options TableOptions constructor options.
     */
    static fromCSV(csv, delimiter = ';', options = {}) {
        options.data = csv
            .split('\n')
            .filter((line) => line.length)
            .map((line) => line.trim().split(delimiter));
        return new Table(options);
    }
    /**
     * Revive a stringified Table object.
     * @param json a stringified Table object.
     */
    static fromJSON(json) {
        return new Table(JSON.parse(json));
    }
    constructor(options = {}) {
        super();
        this.validateOptions(options);
        this.handleOptions(options);
        this.validateData();
        this.setNonEnumerablePrivateProperties();
    }
    /**
     * Gets the number of cols in the table, not including headers.
     */
    get columns() {
        return this._data[0].length;
    }
    /**
     * Gets the number of rows in the table, not including headers.
     */
    get rows() {
        return this._data.length;
    }
    /**
     * Gets the column headers.
     */
    get columnHeaders() {
        if (!this._columnHeaders) {
            throw new Error('No column headers are defined for this table.');
        }
        return this._columnHeaders ? this._columnHeaders.slice() : [];
    }
    /**
     * Gets the row headers.
     */
    get rowHeaders() {
        if (!this._rowHeaders) {
            throw new Error('No row headers are defined for this table.');
        }
        return this._rowHeaders ? this._rowHeaders.slice() : [];
    }
    /**
     * Returns a value at a given (row, col) position.
     * @param column Column index
     * @param row Row index
     * @param spreadsheetNotation Interpret row and col as spreadsheet coordinates, eg. ("A","1")
     */
    get(column, row, spreadsheetNotation = false) {
        [column, row] = this.normalizeColRow(column, row, spreadsheetNotation);
        return this._data[row][column];
    }
    /**
     * Inserts a given value at a given (row, col) position.
     * @param column Column index
     * @param row Row index
     * @param value The value to insert
     * @param spreadsheetNotation Interpret row and col as spreadsheet coordinates, eg. ("A","1")
     */
    set(column, row, value, spreadsheetNotation = false) {
        [column, row] = this.normalizeColRow(column, row, spreadsheetNotation);
        this._data[row][column] = value;
        return this;
    }
    /**
     * Deletes a column in the table.
     * @param column Column index
     * @param spreadsheetNotation Interpret row and col as spreadsheet coordinates, eg. ("A","1")
     */
    removeColumn(column, spreadsheetNotation = false) {
        column = this.normalizeCol(column, spreadsheetNotation);
        arrMapMutable(this._data, (row) => {
            row.splice(column, 1);
            return row;
        });
        if (this._columnHeaders) {
            this._columnHeaders.splice(column + (this._rowHeaders ? 1 : 0), 1);
        }
        return this;
    }
    /**
     * Deletes a row in the table.
     * @param row Row index
     * @param spreadsheetNotation Interpret row and col as spreadsheet coordinates, eg. ("A","1")
     */
    removeRow(row, spreadsheetNotation = false) {
        row = this.normalizeRow(row, spreadsheetNotation);
        this._data.splice(row, 1);
        if (this._rowHeaders)
            this._rowHeaders.splice(row, 1);
        return this;
    }
    /**
     * Gets the index of a given column header.
     * Even if row headers are defined, this is not considered a column and is ignored in this search.
     */
    indexOfColumnHeader(header) {
        if (!this._columnHeaders) {
            throw new Error('No column headers are defined for this table.');
        }
        return this._columnHeaders.indexOf(header) - (this._rowHeaders ? 1 : 0);
    }
    /**
     * Gets the index of a given row header.
     */
    indexOfRowHeader(header) {
        if (!this._rowHeaders) {
            throw new Error('No row headers are defined for this table.');
        }
        return this._rowHeaders.indexOf(header);
    }
    /**
     * Returns the table as a two-dimensional array, including row and column headers..
     */
    toArray() {
        const result = [];
        if (this._columnHeaders) {
            result.push(this.columnHeaders);
        }
        for (let i = 0; i < this.rows; i++) {
            const row = this._data[i].slice();
            if (this._rowHeaders)
                row.unshift(this._rowHeaders[i]);
            result.push(row);
        }
        return result;
    }
    /**
     * Returns the table as a two-dimensional array, without row and column headers.
     */
    toArrayDataOnly() {
        const result = [];
        for (let i = 0; i < this.rows; i++) {
            result.push(this._data[i].slice());
        }
        return result;
    }
    /**
     * Returns the table as a CSV string.
     * @param delimiter csv delimiter
     */
    toCSV(delimiter = ';') {
        return arr2dToCSV(this.toArray(), delimiter);
    }
    /**
     * Override of the native toJSON method. When parsing the returned json string, it can be revived as a Table object when using the static Table.fromJSON method.
     */
    toJSON() {
        return {
            columnHeaders: this._columnHeaders || [],
            rowHeaders: this._rowHeaders || [],
            data: this._data,
        };
    }
    validateOptions(options) {
        this.assertNoAmbiguousOptions(options, [
            ['extractColumnHeaders', 'columnHeaders'],
            ['extractRowHeaders', 'rowHeaders'],
            ['columns', 'data'],
            ['rows', 'data'],
            ['columns', 'columnHeaders'],
            ['rows', 'rowHeaders'],
        ]);
        this.assertNoOptionsRequireMissingOptions(options, [
            ['extractColumnHeaders', 'data'],
            ['extractRowHeaders', 'data'],
        ]);
    }
    handleOptions(options) {
        options = Object.assign({}, options);
        if (options.extractColumnHeaders && options.data) {
            options.data = options.data.slice();
            options.columnHeaders = options.data.splice(0, 1)[0].map((h) => h + '');
        }
        if (options.extractRowHeaders && options.data) {
            options.data = options.data.map((row) => row.slice());
            options.rowHeaders = [];
            for (let i = 0; i < options.data.length; i++) {
                options.rowHeaders.push(options.data[i].splice(0, 1)[0] + '');
            }
        }
        if (options.rowHeaders) {
            this._rowHeaders = options.rowHeaders.slice();
            options.rows = options.rowHeaders.length;
        }
        else if (options.rows === undefined) {
            options.rows = 1;
        }
        else {
            this.validateRowMin(options.rows);
        }
        if (options.columnHeaders) {
            this._columnHeaders = options.columnHeaders.slice();
            options.columns = options.columnHeaders.length - (options.rowHeaders ? 1 : 0);
        }
        else if (options.columns === undefined) {
            options.columns = 1;
        }
        else {
            this.validateColMin(options.columns);
        }
        if (options.data) {
            for (let i = 0; i < options.data.length; i++) {
                this._data.push(options.data[i].slice());
            }
        }
        else {
            this.buildEmptyTableWithDimensions(options.rows, options.columns);
        }
    }
    validateData() {
        if (this._columnHeaders) {
            const targetLength = this._columnHeaders.length - (this._rowHeaders ? 1 : 0);
            if (!arrEvery(this._data.map((row) => row.length), (rowLength) => rowLength === targetLength)) {
                throw new Error('Expected all rows to be of same length.');
            }
        }
        if (this._rowHeaders && this._rowHeaders.length !== this._data.length) {
            throw new Error('Expected a row header for each row.');
        }
    }
    buildEmptyTableWithDimensions(rows, cols) {
        for (let i = 0; i < rows; i++) {
            this._data.push(new Array(cols));
        }
    }
    validateRowMin(rows) {
        if (rows < 1) {
            throw new Error('Expected rows to be integer larger than 0 but got: ' + rows);
        }
        if (!Number.isInteger(rows)) {
            throw new Error('Expected rows to be integer an integer.');
        }
    }
    validateColMin(cols) {
        if (cols < 1) {
            throw new Error('Expected columns to be integer larger than 0 but got: ' + cols);
        }
        if (!Number.isInteger(cols)) {
            throw new Error('Expected columns to be integer an integer.');
        }
    }
    ensureValidRowIndex(row) {
        if (typeof row === 'string') {
            if (!this._rowHeaders) {
                throw new Error('Cannot pass row as string when no rowHeaders are defined.');
            }
            row = this._rowHeaders.indexOf(row);
            if (row === -1) {
                throw new Error('Row not found in rowHeaders.');
            }
        }
        else
            this.validateRowMin(row + 1);
        return row;
    }
    ensureValidColIndex(col) {
        if (typeof col === 'string') {
            if (!this._columnHeaders) {
                throw new Error('Cannot pass col as string when no columnHeaders are defined.');
            }
            col = this._columnHeaders.indexOf(col) - (this._rowHeaders ? 1 : 0);
            if (col < 0) {
                throw new Error('Col not found in columnHeaders.');
            }
        }
        else
            this.validateColMin(col + 1);
        return col;
    }
    normalizeCol(col, spreadsheetNotation) {
        if (spreadsheetNotation) {
            col = letterToCol(String(col), true);
        }
        return this.ensureValidColIndex(col);
    }
    normalizeRow(row, spreadsheetNotation) {
        if (spreadsheetNotation) {
            row = Number(row);
        }
        return this.ensureValidRowIndex(row);
    }
    normalizeColRow(col, row, spreadsheetNotation) {
        if (spreadsheetNotation) {
            [col, row] = A1ToColRow(String(col) + String(row), true);
        }
        return [this.ensureValidColIndex(col), this.ensureValidRowIndex(row)];
    }
}

function isValidDate(year, month, day, hour, minute, second, millisecond) {
    let str = '';
    let format = '';
    if (year !== undefined) {
        format += 'YYYY';
        str += `${year.toString().padStart(4, '0')}`;
    }
    if (month !== undefined) {
        format += '-MM';
        str += `-${month.toString().padStart(2, '0')}`;
    }
    if (day !== undefined) {
        format += '-DD';
        str += `-${day.toString().padStart(2, '0')}`;
    }
    if (hour !== undefined) {
        format += ' HH';
        str += ` ${hour.toString().padStart(2, '0')}`;
    }
    if (minute !== undefined) {
        format += ':mm';
        str += `:${minute.toString().padStart(2, '0')}`;
    }
    if (second !== undefined) {
        format += ':ss';
        str += `:${second.toString().padStart(2, '0')}`;
    }
    if (millisecond !== undefined) {
        format += ':SSS';
        str += `:${millisecond.toString().padStart(3, '0')}`;
    }
    return date.isValid(str, format);
}

/**
 * Throws if the given year is invalid.
 */
function assertValidDate(year, month, day, hour, minute, second, millisecond) {
    if (!isValidDate(year, month, day, hour, minute, second, millisecond)) {
        throw new Error(`Expected valid date. Got: ${JSON.stringify({
            year,
            month,
            day,
            hour,
            minute,
            second,
            millisecond,
        })}.`);
    }
}

/**
 * Check if a given month number is valid.
 */
function isValidDateMonth(month) {
    return Number.isInteger(month) && month >= 1 && month <= 12;
}

/**
 * Throws error if the given month is invalid.
 */
function assertValidDateMonth(month) {
    if (!isValidDateMonth(month))
        throw new Error(`Invalid month: ${month}.`);
}

const DAYS_IN_MONTH = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/**
 * Get number of days that there are in a given month of a given year.
 * Note: The number of days in february depends on whether it is leap year. If no year is given, it is assumed that it is not leap year.
 */
function numDaysInMonth(month, year) {
    assertValidDateMonth(month);
    return month === 2 && year !== undefined && isLeapYear(year) ? 29 : DAYS_IN_MONTH[month];
}

/**
 * Returns whether a day of month is a valid date for the given month and year.
 */
function isValidDateDay(day, month, year) {
    if (!Number.isInteger(day))
        return false;
    if (day < 1)
        return false;
    if (day > numDaysInMonth(month, year))
        return false;
    return true;
}

/**
 * Throws an error if the day of the month is invalid.
 */
function assertValidDateDay(day, month, year) {
    if (!isValidDateDay(day, month, year))
        throw new Error(`Invalid day of the month: ${day}.`);
}

/**
 * Checks if the given year is a valid year > 0.
 */
function isValidDateYear(year) {
    return Number.isInteger(year) && year >= 0;
}

/**
 * Throws if the given year is invalid.
 */
function assertValidDateYear(year) {
    if (!isValidDateYear(year))
        throw new Error(`Invalid year: ${year}.`);
}

/**
 * Get century from year.
 * @example
 * ```js
 * getCentury(2009);
 * //=> 21
 * ```
 */
function getCentury(year) {
    assertValidDateYear(year);
    return Math.floor(year / 100) + 1;
}

/**
 * Returns the current year (UTC full year).
 */
function getCurrentYear() {
    return new Date().getUTCFullYear();
}

/**
 * Check whether a given year is a leap year.
 */
function isLeapYear(year) {
    assertValidDateYear(year);
    return (0 == year % 4 && 0 != year % 100) || 0 == year % 400;
}

/**
 * Returns an ISO date string but only digits remaining.
 * This will correctly sort in chronological order.
 * @param date - The date to convert to an ISO date string.
 */
function isoDateTimestamp(date = new Date()) {
    return date.toISOString().replace(/\D/g, '');
}

/**
 * A Function class that can be extended.
 * @example
 * ```ts
 * class MyFunction<T> extends util.ExtensibleFunction {
 *   constructor(f: (...args: any[]) => any) {
 *     let self: MyFunction<T> | undefined = undefined;
 *     super(f.name, function anonymous(...args: any[]) {
 *       // do something with self
 *       return f.call(self, ...args);
 *     });
 *     self = this;
 *   }
 * }
 * ```
 */
class ExtensibleFunction extends Function {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    constructor(name, f) {
        Object.defineProperty(f, 'name', { value: name });
        super(f);
        return Object.setPrototypeOf(f, new.target.prototype);
    }
}

/**
 * Converts the table element's data content to a 2-dimensional array.
 * @param {HTMLElement} element - The table element
 * @param {boolean} headers - Whether to extract table column header data from <th> elements.
 * @returns {Array<Array<string>>} Data table which is an arrays of row-arrays of cell content (string).
 */
function htmlTableTo2dArray(element, headers = true) {
    const result = [];
    const htmlRows = element.querySelectorAll('tr');
    for (let i = 0; i < htmlRows.length; i++) {
        const htmlRow = htmlRows[i];
        const row = [];
        const htmlCells = htmlRow.querySelectorAll(headers ? 'th,td' : 'td');
        for (let j = 0; j < htmlCells.length; j++) {
            const htmlCell = htmlCells[j];
            if (htmlCell) {
                row.push(htmlCell?.textContent?.trim() || '');
            }
        }
        if (!headers) {
            if (htmlRow.querySelectorAll('th').length) {
                continue;
            }
        }
        if (row.length) {
            result.push(row);
        }
    }
    return result;
}

/**
 * Returns a value from a map, while setting a given default value before returning it, if the key is not present.
 * @param map - map to get value from
 * @param key - key to get value for
 * @param defaultValue - default value to set if key is not present
 * @example
 * ```ts
 * const map = new Map<string, number>()
 * map.set('key', 1)
 * mapGetOrDefault(map, 'key', 2) // Output: 1
 * mapGetOrDefault(map, 'nonexistentKey', 2) // Output: 2
 * ```
 */
function mapGetOrDefault(map, key, defaultValue) {
    const value = map.get(key);
    if (value !== undefined)
        return value;
    map.set(key, defaultValue);
    return defaultValue;
}

/**
 * Updates a value in a map, if the key is present.
 * @param map - map to get value from
 * @param key - key to get value for
 * @param fun - function to update value with
 * @example
 * ```ts
 * const map = new Map<string, number>()
 * map.set('key', 1)
 * mapUpdate(map, 'key', (value) => value! + 1) // Output: Map { 'key' => 2 }
 * mapUpdate(map, 'nonexistentKey', (value) => value! + 1) // Output: Map {}
 * ```
 */
function mapUpdate(map, key, fun) {
    const value = map.get(key);
    if (value === undefined)
        return map;
    map.set(key, fun(value));
    return map;
}

/**
 * For a given map, set a default value if the key is not present, then updates the value now definitely at key.
 * @param map - map to get value from
 * @param key - key to get value for
 * @param defaultValue - default value to set if key is not present
 * @param fun - function to update value with
 * @example
 * ```js
 * const m = new Map([
 *   ['a', 1],
 *   ['b', 2],
 *   ['c', 2],
 * ])
 * for (const key of [...m.keys(), 'd', 'e']) {
 *   mapUpdateDefault(m, key, 0, (v) => v + 1)
 * }
 * console.log(m)
 * //=> Map(5) { 'a' => 2, 'b' => 3, 'c' => 3, 'd' => 1, 'e' => 1 }
 * ```
 */
function mapUpdateDefault(map, key, defaultValue, fun) {
    const value = map.get(key);
    map.set(key, fun(value === undefined ? defaultValue : value));
    return map;
}

/**
 * Returns a value from a map, while setting a given default value before returning it, if the key is not present.
 * @param map - map to get value from
 * @param key - key to get value for
 * @param callback - callback to set the value if key is not present
 * @example
 * ```ts
 * const map = new Map<string, number>()
 * map.set('key', 1)
 * mapGetOrElse(map, 'nonexistentKey', () => 2) // Output: 2
 * ```
 */
function mapGetOrElse(map, key, callback) {
    let value = map.get(key);
    if (value !== undefined)
        return value;
    value = callback(key);
    map.set(key, value);
    return value;
}

const allIndexedInstances = [];
const allIndexedClasses = [];
let nextClassIndex = -1;
function Indexed(BaseConstructor) {
    const classIndex = ++nextClassIndex;
    allIndexedInstances[classIndex] = [];
    let nextInstanceIndex = -1;
    const Class = class Indexed extends BaseConstructor {
        static instances = allIndexedInstances[classIndex];
        static clsId = classIndex;
        id;
        constructor(...args) {
            super(...args);
            this.id = [classIndex, ++nextInstanceIndex];
            this.klass.instances[this.insId] = this;
        }
        get clsId() {
            return this.id[0];
        }
        get insId() {
            return this.id[1];
        }
        get uidString() {
            return this.clsId.toString(16) + '-' + this.insId.toString(16);
        }
        get guidHashMd5() {
            return strHash.toString(this.uidString, 'md5', 'base64url');
        }
        get guidHashSha256() {
            return strHash.toString(this.uidString, 'sha256', 'base64url');
        }
        get klass() {
            return this.constructor.prototype.constructor;
        }
    };
    allIndexedClasses[classIndex] = Class;
    return Class;
}
function IndexedGetClass(classIndex) {
    return allIndexedClasses[classIndex];
}
function IndexedGetInstance(classIndex, instanceIndex) {
    return allIndexedInstances[classIndex][instanceIndex];
}

function Timestamped(BaseConstructor) {
    const t0 = Date.now();
    return class Timestamped extends BaseConstructor {
        static timestamp = t0;
        timestamp = Date.now();
    };
}

function Options(BaseConstructor) {
    const wmap = new WeakMap();
    return class Options extends BaseConstructor {
        constructor(...args) {
            let options = args.shift();
            super(...args);
            options = Object.assign({}, this.defaultOptions, options);
            wmap.set(this, options);
            this.handleOptions(options);
        }
        handleOptions(options) {
            Object.assign(this, options);
        }
        get options() {
            return wmap.get(this) || {};
        }
        get defaultOptions() {
            return this.klass.defaultOptions;
        }
        get klass() {
            return this.constructor.prototype.constructor;
        }
    };
}

function Revivable(BaseConstructor) {
    const serializeIgnoreKeys = [];
    return class Revivable extends BaseConstructor {
        /**
         * Ignore a key when serializing to JSON.
         */
        static ignoreKeyWhenSerializing(key) {
            serializeIgnoreKeys.push(key);
        }
        /**
         * Revive an instance from a JSON string.
         */
        static fromJSON(json) {
            return Object.setPrototypeOf(JSON.parse(json), this.prototype);
        }
        constructor(...args) {
            super(...args);
            setNonEnumerable(this, ...serializeIgnoreKeys);
        }
        /**
         * Invoked by JSON.stringify when serializing.
         */
        toJSON() {
            return this;
        }
        /**
         * Stringify an instance into JSON.
         */
        stringify(indent = 0) {
            return JSON.stringify(this, null, indent);
        }
    };
}

class User extends Revivable(Options(Timestamped(Indexed(Base)))) {
    static defaultOptions = {
        wow: 'cool',
        dam: 2,
    };
    constructor(options) {
        super(options);
        this.init();
    }
}
// new User({ wow: 'yeah' })
// new User({ dam: 6 })
// console.log(Reflect.ownKeys(User))
// console.log(Reflect.ownKeys(User.prototype))
// console.log(User)

const Mixins = {
    Base,
    Indexed,
    IndexedGetClass,
    IndexedGetInstance,
    Timestamped,
    Options,
};

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
}));
// type t = { data: CreateChatCompletionResponse; text: string }
function gptHttpRequester(temperature = 0, instructions) {
    return async function (prompt) {
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            temperature,
            // top_p: 0.1,
            messages: [
                {
                    role: 'system',
                    content: instructions,
                },
                { role: 'user', content: prompt },
            ],
        });
        const data = response.data;
        const text = data?.choices[0]?.message?.content?.toString() || '';
        return { data, text };
    };
}
const generateUnitTestsGPT = gptHttpRequester(0, [
    'You are a helpful assistant who will help write tests for TypeScript code.',
    'The tests need to be written using the Jest testing framwork.',
    'Use the Jest framework methods called "describe" and "it".',
    'Your reply should only be the code. No comments or other text.',
].join('\n'));
async function generateUnitTests(sourceCode, dirname, exportName, append = true) {
    const testFilepath = path.join(process.cwd(), 'tests', dirname + '.test.ts');
    const testFileExists = fs.existsSync(testFilepath);
    if (!append && testFileExists)
        return console.log('test already exists: ' + testFilepath);
    if (append && !testFileExists)
        append = false;
    let testFileCurrentCode = '';
    if (append) {
        testFileCurrentCode = fs.readFileSync(testFilepath).toString();
        if (testFileCurrentCode.includes(exportName)) {
            return console.log('tests already exists in the file: ' + testFilepath);
        }
    }
    const result = await generateUnitTestsGPT(sourceCode.replace(/import .+\n/gm, '').trim());
    const data = result.data;
    const text = (append ? '' : `import * as util from '../src/libs/${dirname}'\n\n`) +
        result.text
            .trim()
            .replace(/^```(\w+)?/, '')
            .replace(/```$/, '')
            .replace(/import .+\n/gm, '')
            .split(exportName)
            .join('util.' + exportName)
            .replace(`describe('util.`, `describe('`)
            .replace(`describe("util.`, `describe("`)
            .trim();
    await fs.promises.writeFile(testFilepath, append ? testFileCurrentCode + '\n\n' + text : text);
    return { data, text };
}
// generateUnitTests(code1, 'object', 'iteratePrototypeChain')
// generateUnitTests(code2, 'node', 'createFileExtensionFilter', true)
// generateUnitTests(code3, 'regex', 'rexec')

function singlePass(sentences, lowerBound, upperBound) {
    // determine lower and upper bounds if not given
    if (lowerBound === undefined || upperBound === undefined) {
        let average = 0;
        let max = 0;
        for (const s of sentences) {
            const l = s.length;
            average += l;
            if (l > max)
                max = l;
        }
        average = Math.floor(average / sentences.length);
        if (lowerBound === undefined)
            lowerBound = average - Math.floor(average / 2);
        if (upperBound === undefined)
            upperBound = max - Math.floor(average / 2);
    }
    // merge sentences
    for (let i = 1; i < sentences.length; i++) {
        const cur = sentences[i];
        const pre = sentences[i - 1];
        if (cur.length + pre.length < upperBound && (cur.length < lowerBound || pre.length < lowerBound)) {
            sentences[i] = `${pre} ${cur}`;
            sentences[i - 1] = '';
        }
    }
    return sentences.filter((s) => !!s);
}
/**
 * Normalize line lengths. Tries to merge sentences with its neighboring sentences onto the same line if they are short.
 * @param sentences Array of sentences
 * @param lowerBound Will try to merge sentences if the length of the current sentence is less than this value. If no user input is given, this value is automatically determined by calculating statistics on the data.
 * @param upperBound Will not merge sentences if the conbined length of the sentences is greater than this value. If no user input is given, this value is automatically determined by calculating statistics on the data.
 */
function normalizeLineLengths(sentences, lowerBound, upperBound) {
    let newSentences = singlePass(sentences, lowerBound, upperBound);
    while (newSentences.length !== sentences.length) {
        sentences = newSentences;
        newSentences = singlePass(sentences, lowerBound, upperBound);
    }
    return newSentences;
}

/**
 * Normalize a file extension to the form: .[ext]
 * Anything before the last "." is not returned.
 * @param ext file extension
 */
function normalizeFileExtension(ext) {
    if (ext === '' || ext === '.')
        return '';
    if (/[<>"|?*:]/g.test(ext)) {
        throw new Error(`Illegal characters in file extension: ${ext}  |  Illegal characters are: <>"|?:*`);
    }
    if (strCountCharOccurances(ext, '.') === 0)
        return '.' + ext;
    return ext.substring(ext.lastIndexOf('.'));
}

/**
 * Takes a list of file extensions and returns a filter function that returns true if a filepath/filename passed to it contains one of the given file extensions.
 * @param fileExtensions file extensions
 */
function createFileExtensionFilter(...fileExtensions) {
    if (!fileExtensions.length)
        return () => true;
    return (filepath) => {
        for (const ext of fileExtensions.map(normalizeFileExtension)) {
            if (path.extname(filepath) === ext) {
                return true;
            }
        }
        return false;
    };
}

/**
 * Check whether a provided windows filesystem path string is valid according to:
 * https://msdn.microsoft.com/en-us/library/windows/desktop/aa365247(v=vs.85).aspx
 * @param path The path to validate
 * @param extendedMaxLength On most versions of windows, the max allowed length of paths has been
 * raised.
 */
function ensureValidWindowsPath(path, options) {
    const throwOrFalse = (msg) => {
        if (options && options.assert === true) {
            throw new Error(`Invalid windows path. ${msg}  |  input received: ${path}`);
        }
        return false;
    };
    if (path.length === 0) {
        return throwOrFalse('Path string is length 0.');
    }
    if (strCountCharOccurances(path, '/') > 0 && strCountCharOccurances(path, '\\') > 0) {
        return throwOrFalse('Path contains both backslash and forward slash.');
    }
    const maxLength = (options && options.extendedMaxLength ? 32767 : 260) - 12;
    if (path.length > maxLength) {
        return throwOrFalse(`Maximum length of ${maxLength} exceeded`);
    }
    let noDriveLetter = path;
    if (/^\w:(\\|\/)/g.test(path)) {
        noDriveLetter = path.substring(2);
    }
    if (/[<>"|?*:]/g.test(noDriveLetter)) {
        return throwOrFalse(`Illegal characters in: ${path}  |  Illegal characters are: <>"|?:*`);
    }
    if (/(\\|\/)(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])((\\|\/)|$)/g.test(path)) {
        return throwOrFalse('Illegal name in path string');
    }
    return true;
}

/**
 * Returns true if a given interger is even.
 */
function isEven(n) {
    if (!Number.isInteger(n))
        throw new Error(`Expected integer. Got ${n}`);
    return n % 2 === 0;
}

/**
 * Returns true if a given interger is odd.
 */
function isOdd(n) {
    if (!Number.isInteger(n))
        throw new Error(`Expected integer. Got ${n}`);
    return n % 2 !== 0;
}

const POW10 = [1, 1e1, 1e2, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9];
/**
 * Approximate the logarithm base 10 of a small integer.
 */
function numApproximateLog10(n) {
    if (!Number.isInteger(n) || n < 0 || n >= 1e10) {
        throw new Error(`Expected positive integer smaller than 10^10. Got ${n}`);
    }
    if (n < POW10[5]) {
        if (n < POW10[2]) {
            return n < POW10[1] ? 0 : 1;
        }
        if (n < POW10[4]) {
            return n < POW10[3] ? 2 : 3;
        }
        return 4;
    }
    if (n < POW10[7]) {
        return n < POW10[6] ? 5 : 6;
    }
    if (n < POW10[9]) {
        return n < POW10[8] ? 7 : 8;
    }
    return 9;
}

const eu = new Map();
/**
 * Formats a number input to a string representation in the style of 5.000.000,00
 * @param input number to format
 * @param decimalPlaces number of decimal places to return. Will pad string with zeroes to ensure this length.
 */
function numFormatEU(input, decimalPlaces = 0) {
    let formatter = eu.get(decimalPlaces);
    if (!formatter) {
        formatter = numberFormat({
            truncate: decimalPlaces,
            padRight: decimalPlaces,
            integerSeparator: '.',
            decimal: ',',
        });
        eu.set(decimalPlaces, formatter);
    }
    return formatter(input);
}

const us = new Map();
/**
 * Formats a number input to a string representation in the style of 5,000,000.00
 * @param input number to format
 * @param decimalPlaces number of decimal places to return. Will pad string with zeroes to ensure this length.
 */
function numFormatUS(input, decimalPlaces = 0) {
    let formatter = us.get(decimalPlaces);
    if (!formatter) {
        formatter = numberFormat({
            truncate: decimalPlaces,
            padRight: decimalPlaces,
            integerSeparator: ',',
            decimal: '.',
        });
        us.set(decimalPlaces, formatter);
    }
    return formatter(input);
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * @param min The lower bound integer.
 * @param max The upper bound integer.
 */
function randomIntBetween(min, max) {
    if (!Number.isInteger(min))
        throw new Error(`min must be an integer. Got ${min}`);
    if (!Number.isInteger(max))
        throw new Error(`max must be an integer. Got ${max}`);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Round value with a given number of decimal points.
 * @param n the number to round.
 * @param decimalPoints the number of decimal points.
 */
function round(n, decimalPoints = 0) {
    return Math.round(n * Math.pow(10, decimalPoints)) / Math.pow(10, decimalPoints) + 0;
}

/**
 * Round number down to the nearest integer.
 */
function roundDown(n) {
    return Math.floor(n);
}

/**
 * Round number up to the nearest integer.
 */
function roundUp(n) {
    return Math.ceil(n) + 0;
}

/**
 * Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
 */
function memoryUsage() {
    const toIntMB = (n) => Math.floor(n * 0.000001);
    const data = process.memoryUsage();
    return {
        processAllocationMB: toIntMB(data.rss),
        heapAllocationMB: toIntMB(data.heapTotal),
        heapUsedMB: toIntMB(data.heapUsed),
        extenalV8: toIntMB(data.external),
    };
}
const formatMemoryUsageOutput = (format) => {
    const data = process.memoryUsage();
    return {
        processAllocationMB: format(data.rss),
        heapAllocationMB: format(data.heapTotal),
        heapUsedMB: format(data.heapUsed),
        extenalV8: format(data.external),
    };
};
/**
 * Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
 * The values are formatted strings in the style of 5.000,00
 */
function memoryUsageEuFormat() {
    return formatMemoryUsageOutput((bytes) => `${numFormatEU(bytes * 0.000001, 2)} MB`);
}
/**
 * Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
 * The values are formatted strings in the style of 5,000.00
 */
function memoryUsageUsFormat() {
    return formatMemoryUsageOutput((bytes) => `${numFormatUS(bytes * 0.000001, 2)} MB`);
}

/**
 * Takes a directory path as a list of directory/folder names from the current working directory and returns it as a full path string.
 * @param dirs directory names from the current working directory.
 */
function pathFromCwd(...dirs) {
    return path.join(process.cwd(), ...dirs);
}

/**
 * Takes a filepath and returns its utf8 contents as a single string.
 * @param path path to the file
 */
function readFileStringSync(path) {
    return fs.readFileSync(path, 'utf8').toString();
}

/**
 * Drain a Readable into a string.
 * @param stream - a Readable of string chunks
 */
async function streamToString(stream) {
    const chunks = [];
    for await (const chunk of stream) {
        chunks.push(Buffer.from(chunk).toString());
    }
    return chunks.join('');
}

/**
 * Extension of Node's native Readable class for converting a string into a Readable stream.
 */
class StringStream extends Readable {
    str;
    ended;
    constructor(str) {
        super();
        this.str = str;
        this.ended = false;
    }
    _read() {
        if (!this.ended) {
            process.nextTick(() => {
                this.push(Buffer.from(this.str));
                this.push(null);
            });
            this.ended = true;
        }
    }
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const logger = winston.createLogger({
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
    transports: [new winston.transports.File({ filename: 'logs/app.log' })],
});
const log = {
    info: (message) => {
        logger.info(message);
        if (typeof message === 'object') {
            console.log(message);
        }
        else {
            console.log(clc.magenta(new Date().toISOString()) + ' [' + clc.green('INFO') + ']: ' + clc.cyan(message));
        }
    },
    warn: (message) => {
        logger.warn(message);
        if (typeof message === 'object') {
            console.log(message);
        }
        else {
            console.log(clc.magenta(new Date().toISOString()) + ' [' + clc.yellow('WARN') + ']: ' + clc.yellow(message));
        }
    },
    error: (message) => {
        logger.error(message);
        if (typeof message === 'object') {
            console.error(message);
        }
        else {
            console.error(clc.magenta(new Date().toISOString()) + ' [' + clc.red('ERROR') + ']: ' + clc.red(message));
        }
    },
};

/**
 * If the filepath is somewhere in the current working directory, it can be converted into a relative path.
 * @param filepath - the absolute filepath to convert.
 */
function absolutCwdPathToRelative(filepath) {
    return filepath.replace(process.cwd(), '').replace(/\\/g, '/').replace(/^\//, '');
}

/**
 * Extract birthdate (yyyy,mm,dd), four digit id and sex from a Danish social security number.
 * Assumes birth dates are at most 100 years in the past.
 * @param ssn - Danish social security number
 */
function parseSocialSecurityNumberDK(ssn) {
    const match = ssn.match(regexMatcherToValidater(socialSecurityNumbersDK));
    if (!match || !match.groups)
        throw new Error(`Invalid Danish social security number format. Expected ddmmyy[-]xxxx. Got: ${ssn}`);
    const { dd, mm, yy, id } = match.groups;
    const iDay = parseInt(dd);
    const iMon = parseInt(mm);
    const iCurYear = getCurrentYear();
    const iYear = parseInt(yy) > parseInt(String(iCurYear).substring(2))
        ? parseInt(`${getCentury(iCurYear) - 2}${yy}`)
        : parseInt(`${getCentury(iCurYear) - 1}${yy}`);
    if (!isValidDate(iYear, iMon, iDay)) {
        throw new Error(`Expected valid birth date.`);
    }
    const iId = parseInt(id);
    const sex = isEven(parseInt(id.substring(3))) ? 'F' : 'M';
    return {
        year: iYear,
        month: iMon,
        day: iDay,
        id: iId,
        sex,
    };
}
/**
 * Determine whether a string is a valid Danish social security number.
 * @param s - String to test
 */
function isSocialSecurityNumberDK(s) {
    try {
        parseSocialSecurityNumberDK(s);
        return true;
    }
    catch (e) {
        return false;
    }
}

/**
 * For recording time passed since constructor was invoked and until the stop() method i called.
 */
class Timer {
    /**
     * The initial time
     */
    t0;
    constructor() {
        this.t0 = Date.now();
    }
    /**
     * Returns the time passed since constructor was invoked in milliseconds.
     */
    stop() {
        return Date.now() - this.t0;
    }
}

/**
 * Returns the set intersection of a provded array of Set instances.
 * @param sets - an array of Set instances
 */
function setIntersection(sets) {
    const result = new Set(sets[0].values());
    for (let i = 1; i < sets.length; i++) {
        for (const value of result.values()) {
            if (!sets[i].has(value)) {
                result.delete(value);
            }
        }
    }
    return result;
}

/**
 * Returns the set union of a provded array of Set instances.
 * @param sets - an array of Set instances
 */
function setUnion(sets) {
    const result = new Set(sets[0].values());
    for (let i = 1; i < sets.length; i++) {
        for (const value of sets[i].values()) {
            result.add(value);
        }
    }
    return result;
}

/**
 * Returns a new set with all elements that are in the first set but not in the second set.
 */
function setDifference(setA, setB) {
    const _difference = new Set(setA);
    for (const elem of setB) {
        _difference.delete(elem);
    }
    return _difference;
}

/**
 * Returns true if the first set is a superset of the second set.
 */
function setIsSuperset(set, subset) {
    for (const elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}

/**
 * Returns the symmetric difference between two sets.
 */
function setSymmetricDifference(setA, setB) {
    const _difference = new Set(setA);
    for (const elem of setB) {
        if (_difference.has(elem)) {
            _difference.delete(elem);
        }
        else {
            _difference.add(elem);
        }
    }
    return _difference;
}

/**
 * Same as Array.prototype.filter but performs operations in palce (not immutable).
 * @param input - input array
 * @param f - predicate
 */
function arrFilterMutable(input, f) {
    return arrAssignFrom(input, input.filter(f));
}

/**
 * Flattens the passed array recursively to a specified depth. Immutable.
 * @param input - the array to flatten
 * @param maxDepth - the maximum recursive flattening depth.
 */
function arrFlatten(input, maxDepth = Number.MAX_SAFE_INTEGER) {
    const accum = [];
    (function recurse(arr = input, depth = 0) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && depth < maxDepth) {
                recurse(arr[i], depth + 1);
            }
            else {
                accum.push(arr[i]);
            }
        }
    })();
    return accum;
}

/**
 * Flattens the passed array recursively. Mutable.
 * @param input - the array to flatten
 * @param maxDepth - the maximum recursive flattening depth.
 */
function arrFlattenMutable(input, maxDepth = Number.MAX_SAFE_INTEGER) {
    return arrAssignFrom(input, arrFlatten(input, maxDepth));
}

/**
 * Returns all indexes at which an element is found.
 * @param input - The array to search
 * @param element - The element to find
 */
function arrIndicesOf(input, element) {
    const result = [];
    for (let i = 0; i < input.length; i++) {
        if (element === input[i]) {
            result.push(i);
        }
    }
    return result;
}

/**
 * Same as Array.prototype.map but performs operations in palce (not immutable).
 * @param input - input array
 * @param f - iterator
 * @example
 * ```js
 * expect(
 *   util.arrMapMutable([1, 2, 3, 4, 5], (value: number) => {
 *     return value + 1;
 *   }),
 * ).toStrictEqual([2, 3, 4, 5, 6]);
 * ```
 */
function arrMapMutable(input, f) {
    for (let i = 0; i < input.length; i++) {
        input[i] = f(input[i], i, input);
    }
    return input;
}

/**
 * Returns whether or not two arrays shallow equal each other.
 * @param input1 first array
 * @param input2 second array
 */
function arrShallowEquals(input1, input2) {
    if (input1.length !== input2.length)
        return false;
    return arrEvery(input1, (value, i) => value === input2[i]);
}

/**
 * Swap array elements in place. Runtime: O(1)
 * @param input to be modified
 * @param from index of the first element
 * @param to index of the second element
 */
function arrSwap(input, from, to) {
    [input[from], input[to]] = [input[to], input[from]];
    return input;
}

/**
 * Shuffle items in an array in-place. Guarantees that the array has changes.
 * @param input - The array to shuffle.
 */
function arrShuffle(input) {
    const original = input.slice();
    let equal = true;
    while (equal) {
        for (let i = 0, len = input.length; i < len; i++) {
            const newIndex = Math.floor(Math.random() * len);
            arrSwap(input, i, newIndex);
        }
        equal = arrShallowEquals(input, original);
    }
    return input;
}

/**
 * Check whether a condition is true for any element of an array. The condition check is in the form of a callback.
 * @param input - The array
 * @param  predicate - A predicate callback function
 */
function arrSome(input, predicate) {
    for (let i = 0, len = input.length; i < len; i++) {
        if (predicate(input[i], i, input) === true) {
            return true;
        }
    }
    return false;
}

/**
 * Uses Array.prototype.sort but sorts numbers.
 * @param input - input array
 */
function arrSortNumeric(input) {
    return input.sort(compareNumeric);
}

/**
 * Calculates the sum of an array of numbers.
 * @param array - The array of numbers to sum.
 */
function arrSum(array) {
    return array.reduce((acc, cur) => acc + cur, 0);
}

/**
 * Calculates the average of an array of numbers.
 * @param array - The array of numbers to average.
 */
function arrAverage(array) {
    return arrSum(array) / array.length;
}

export { A1ToColRow, Base, BemojeRegex, ExtensibleFunction, Indexed, IndexedGetClass, IndexedGetInstance, Matrix, Mixins, Options, Queue, Revivable, SortedArray, StringStream, Table, Timer, Timestamped, absolutCwdPathToRelative, arr2dToCSV, arrAssignFrom, arrAverage, arrEvery, arrFilterMutable, arrFlatten, arrFlattenMutable, arrIndicesOf, arrMapMutable, arrShallowEquals, arrShuffle, arrSome, arrSortNumeric, arrSum, arrSwap, assertValidDate, assertValidDateDay, assertValidDateMonth, assertValidDateYear, asyncParallel, asyncSerial, asyncWithTimeout, atob, btoa, buildRegexBetween, bytesToInt, colRowToA1, colToLetter, compareArray, compareNumber, compareNumberDescending, compareNumeric, compareNumericDescending, compareString, compareStringDescending, createFileExtensionFilter, ensureValidWindowsPath, funSetName, generateUnitTests, getCentury, getConstructor, getCurrentYear, getPrototype, htmlTableTo2dArray, inheritStaticMembers, intToArrayBytes, intToBuffer, intToBytes, interfaceDefinitions, isConstructor, isEven, isHex$1 as isHex, isHexOrUnicode, isIterable, isLeapYear, isNumericString, isObject, isOdd, isPrototype, isSocialSecurityNumberDK, isValidDate, isValidDateDay, isValidDateMonth, isValidDateYear, isoDateTimestamp, iteratePrototypeChain, letterToCol, log, mapGetOrDefault, mapGetOrElse, mapUpdate, mapUpdateDefault, memoryUsage, memoryUsageEuFormat, memoryUsageUsFormat, normalizeFileExtension, normalizeLineLengths, numApproximateLog10, numDaysInMonth, numFormatEU, numFormatUS, padArrayBytesLeft, padArrayBytesRight, parseSocialSecurityNumberDK, pathFromCwd, randomIntBetween, readFileStringSync, regexEscapeString, regexFixFlags, regexGetGroupNames, regexIsValidFlags, regexLibrary, regexMatcherToValidater, regexScopeTree, regexValidFlags, rexec, round, roundDown, roundUp, setDifference, setEnumerable, setIntersection, setIsSuperset, setNonConfigurable, setNonEnumerable, setNonEnumerablePrivateProperties, setNonWritable, setSymmetricDifference, setUnion, setValueAsGetter, setWritable, strCountCharOccurances, strCountChars, strFirstCharToUpperCase, strHash, strIsLowerCase, strIsUpperCase, strLinesRemoveEmpty, strLinesTrimLeft, strLinesTrimRight, strParseBoolean, strPrettifyMinifiedCode, strRemoveDuplicateChars, strRepeat, strReplaceAll, strSortChars, strSplitCamelCase, strToCharCodes, strToCharSet, strToSentences, strToWords, strUnwrap, strWrapBetween, strWrapIn, strWrapInAngleBrackets, strWrapInBraces, strWrapInBrackets, strWrapInDoubleQuotes, strWrapInParenthesis, strWrapInSingleQuotes, streamToString, trimArrayBytesLeft, trimArrayBytesRight };
//# sourceMappingURL=index.esm.js.map
