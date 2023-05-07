/*!
 * @bemoje/node-util v0.2.0
 * (c) Benjamin Møller Jensen
 * Homepage: https://github.com/bemoje/bemoje-node-util
 * Released under the MIT License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var crypto = require('crypto');
var path = require('path');
var fs = require('fs');
var stream = require('stream');
var cliColor = require('cli-color');
var sentenceSplitter = require('sentence-splitter');
var lodash = require('lodash');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);

/**
 * Converts a 2-dimensional array into a CSV string.
 * If input data contains the delimiter, it will be removed.
 * Linebreaks will be removed.
 * @param input a 2-dimensional array
 * @param delimiter csv delimiter.
 * @param replaceLinebreakWith replace linebreaks with this string.
 */
function arr2dToCSV(input, delimiter = ';', replaceLinebreakWith = ' ') {
    return input
        .map((row) => {
        return row
            .map((item) => (item + '').replaceAll(delimiter, '').replace(/(\r*\n)+/g, replaceLinebreakWith))
            .join(delimiter);
    })
        .join('\n');
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
 * Flattens the passed array recursively to a specified depth. Immutable.
 * @param input - the array to flatten
 * @param maxDepth - the maximum recursive flattening depth.
 */
function arrFlatten(input, maxDepth = Number.MAX_SAFE_INTEGER) {
    const accum = [];
    function recurse(arr, depth) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && depth < maxDepth) {
                recurse(arr[i], depth + 1);
            }
            else {
                accum.push(arr[i]);
            }
        }
    }
    recurse(input, 0);
    return accum;
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

/**
 * Executes an async task with a timeout.
 * @param timeout The timeout in milliseconds.
 * @param task The async task to execute.
 * @param args The arguments to pass to the task.
 * @returns A promise that resolves with the task's result or rejects with an error.
 */
function asyncWithTimeout(timeout, task) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(`Timed out after ${timeout} ms.`));
        }, timeout);
        task()
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

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

/**
 * Run async tasks in parallel.
 */
function asyncParallel(tasks) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Promise.all(tasks.map((task) => task()));
    });
}

/**
 * Run async tasks serially, each task waiting for the previous one to complete.
 */
function asyncSerial(tasks) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = [];
        for (const task of tasks) {
            results.push(yield task());
        }
        return results;
    });
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
                        ? [
                            254,
                            Math.floor(x / 16777216),
                            Math.floor(x / 65536) % 256,
                            Math.floor(x / 256) % 256,
                            x % 256,
                        ]
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
    return l === 4
        ? a
        : l === 1
            ? [0, 0, 0, a[0]]
            : l === 2
                ? [0, 0, a[0], a[1]]
                : [0, a[0], a[1], a[2]];
}

/**
 * Pads an array of bytes on the right
 */
function padArrayBytesRight(a) {
    const l = a.length;
    return l === 4
        ? a
        : l === 1
            ? [a[0], 0, 0, 0]
            : l === 2
                ? [a[0], a[1], 0, 0]
                : [a[0], a[1], a[2], 0];
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
 * Copy static members from source to target.
 */
function inheritStaticMembers(target, source, ignoreKeys = []) {
    const ignore = new Set([
        ...Reflect.ownKeys(target),
        ...ignoreKeys,
        'prototype',
        'name',
        'constructor',
    ]);
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
 * Determine wheter a given object is a prototype-object (obj.constructor.prototype === obj).
 */
function isPrototype(value) {
    if (value === null || typeof value !== 'object')
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
 * Returns the class constructor object belonging to a given object's class of origin.
 */
function getConstructor(o) {
    return Object.getPrototypeOf(o).constructor;
}

const interfaceDefinitions = new Map();
interfaceDefinitions.set('IRevivable', [['toJSON'], ['fromJSON']]);
interfaceDefinitions.set('IOptions', [
    ['options', 'defaultOptions', 'handleOptions'],
    ['defaultOptions'],
]);

const hasSeenFirstInstance = new WeakSet();
/**
 * Abstract class that other classes can inherit from to gain various handy functionality.
 */
class Base {
    constructor() {
        // this.init()
    }
    get klass() {
        return Object.getPrototypeOf(this).constructor;
    }
    get proto() {
        return Object.getPrototypeOf(this);
    }
    init() {
        if (!hasSeenFirstInstance.has(getConstructor(this))) {
            hasSeenFirstInstance.add(getConstructor(this));
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
        this.immutable = false;
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
    constructor() {
        super(...arguments);
        this.queue = [];
    }
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
 * Alpha numeric comparator function (ascending)
 * @param a first value to compare
 * @param b second value to compare
 */
function compareString(a, b) {
    return a.localeCompare(b);
}

class SortedArray extends Array {
    constructor(options = {}) {
        super();
        this.compare = compareString;
        this.allowDuplicates = true;
        setNonEnumerable(this, 'compare', 'allowDuplicates');
        if (options.compare) {
            this.compare = options.compare;
        }
        if (options.allowDuplicates === false) {
            this.allowDuplicates = false;
        }
        if (options.data) {
            const data = this.allowDuplicates ? options.data : new Set(options.data);
            for (const element of data) {
                super.push(element);
            }
            if (!options.compare && typeof this[0] === 'number') {
                this.compare = compareNumber;
            }
            this.sort(this.compare);
        }
    }
    /**
     * Convert to a normal Array instance
     */
    toArray() {
        return Array.from(this);
    }
    add(element) {
        if (this.length === 0) {
            super.push(element);
            return this;
        }
        const [index, foundIdentical] = this.insertionIndex(element);
        if (foundIdentical && !this.allowDuplicates)
            return this;
        super.splice(index, 0, element);
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
                super.splice(i, 1);
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
    /**
     * Pushes and sorts an element into the array.
     */
    push(...elements) {
        this.addMany(...elements);
        return this.length;
    }
    /**
     * Throws an error since it would break the sorted state.
     */
    reverse() {
        throw new Error('Cannot reverse a SortedArray since it would then no longer be sorted.');
    }
    /**
     * Same as Array.prototype.splice, but cannot insert elements
     */
    splice(start, deleteCount) {
        return super.splice(start, deleteCount);
    }
}

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

/**
 * Two-dimensional table class supporting column and row headers.
 */
class Table extends Base {
    /**
     * Revive a stringified Table object.
     * @param json a stringified Table object.
     */
    static fromJSON(json) {
        return new Table(JSON.parse(json));
    }
    constructor(options = {}) {
        super();
        this._data = [];
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
    year = year ? Number(year) : 0;
    month = month ? Number(month) : 0;
    day = day ? Number(day) : 0;
    hour = hour ? Number(hour) : 0;
    minute = minute ? Number(minute) : 0;
    second = second ? Number(second) : 0;
    millisecond = millisecond ? Number(millisecond) : 0;
    const d = new Date(year, month - 1, day, hour, minute, second, millisecond);
    return (d.getFullYear() === year &&
        d.getMonth() + 1 === month &&
        d.getDate() === day &&
        d.getHours() === hour &&
        d.getMinutes() === minute &&
        d.getSeconds() === second &&
        d.getMilliseconds() === millisecond);
}
// import date from 'date-and-time'
// export function isValidDate(
//   year?: number | string,
//   month?: number | string,
//   day?: number | string,
//   hour?: number | string,
//   minute?: number | string,
//   second?: number | string,
//   millisecond?: number | string,
// ): boolean {
//   let str = ''
//   let format = ''
//   if (year !== undefined) {
//     format += 'YYYY'
//     str += `${year.toString().padStart(4, '0')}`
//   }
//   if (month !== undefined) {
//     format += '-MM'
//     str += `-${month.toString().padStart(2, '0')}`
//   }
//   if (day !== undefined) {
//     format += '-DD'
//     str += `-${day.toString().padStart(2, '0')}`
//   }
//   if (hour !== undefined) {
//     format += ' HH'
//     str += ` ${hour.toString().padStart(2, '0')}`
//   }
//   if (minute !== undefined) {
//     format += ':mm'
//     str += `:${minute.toString().padStart(2, '0')}`
//   }
//   if (second !== undefined) {
//     format += ':ss'
//     str += `:${second.toString().padStart(2, '0')}`
//   }
//   if (millisecond !== undefined) {
//     format += ':SSS'
//     str += `:${millisecond.toString().padStart(3, '0')}`
//   }
//   return date.isValid(str, format)
// }

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
 * Check whether a given year is a leap year.
 */
function isLeapYear(year) {
    assertValidDateYear(year);
    return (0 == year % 4 && 0 != year % 100) || 0 == year % 400;
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
    constructor(name, f) {
        Object.defineProperty(f, 'name', { value: name });
        super(typeof f === 'string' ? f : f.toString());
        return Object.setPrototypeOf(f, new.target.prototype);
    }
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

const HTML_VOID_TAGS = new Set([
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
]);
const HTML_BOOLEAN_ATTRIBUTES = new Set([
    'async',
    'autocomplete',
    'autofocus',
    'autoplay',
    'border',
    'challenge',
    'checked',
    'compact',
    'contenteditable',
    'controls',
    'default',
    'defer',
    'disabled',
    'formNoValidate',
    'frameborder',
    'hidden',
    'indeterminate',
    'ismap',
    'loop',
    'multiple',
    'muted',
    'nohref',
    'noresize',
    'noshade',
    'novalidate',
    'nowrap',
    'open',
    'readonly',
    'required',
    'reversed',
    'scoped',
    'scrolling',
    'seamless',
    'selected',
    'sortable',
    'spellcheck',
    'translate',
]);
const HTML_EVENT_HANDLER_ATTRIBUTES = new Set([
    'onabort',
    'onautocomplete',
    'onautocompleteerror',
    'onblur',
    'oncancel',
    'oncanplay',
    'oncanplaythrough',
    'onchange',
    'onclick',
    'onclose',
    'oncontextmenu',
    'oncuechange',
    'ondblclick',
    'ondrag',
    'ondragend',
    'ondragenter',
    'ondragleave',
    'ondragover',
    'ondragstart',
    'ondrop',
    'ondurationchange',
    'onemptied',
    'onended',
    'onerror',
    'onfocus',
    'oninput',
    'oninvalid',
    'onkeydown',
    'onkeypress',
    'onkeyup',
    'onload',
    'onloadeddata',
    'onloadedmetadata',
    'onloadstart',
    'onmousedown',
    'onmouseenter',
    'onmouseleave',
    'onmousemove',
    'onmouseout',
    'onmouseover',
    'onmouseup',
    'onmousewheel',
    'onpause',
    'onplay',
    'onplaying',
    'onprogress',
    'onratechange',
    'onreset',
    'onresize',
    'onscroll',
    'onseeked',
    'onseeking',
    'onselect',
    'onshow',
    'onsort',
    'onstalled',
    'onsubmit',
    'onsuspend',
    'ontimeupdate',
    'ontoggle',
    'onvolumechange',
    'onwaiting',
]);
const HTML_ATTRIBUTES = {
    'http-equiv': {
        description: '',
        relatedTags: ['meta'],
    },
    'accept': {
        description: 'List of types the server accepts, typically a file type.',
        relatedTags: ['form', 'input'],
    },
    'accesskey': {
        description: 'Defines a keyboard shortcut to activate or add focus to the element.',
        relatedTags: ['Global attribute'],
    },
    'action': {
        description: 'The URI of a program that processes the information submitted via the form.',
        relatedTags: ['form'],
    },
    'align': {
        description: 'Specifies the horizontal alignment of the element.',
        relatedTags: [
            'applet',
            'caption',
            'col',
            'colgroup',
            'hr',
            'iframe',
            'img',
            'table',
            'tbody',
            'td',
            'tfoot',
            'th',
            'thead',
            'tr',
        ],
    },
    'allow': {
        description: 'Specifies a feature-policy for the iframe.',
        relatedTags: ['iframe'],
    },
    'alt': {
        description: "Alternative text in case an image can't be displayed.",
        relatedTags: ['applet', 'area', 'img', 'input'],
    },
    'async': {
        description: 'Indicates that the script should be executed asynchronously.',
        relatedTags: ['script'],
    },
    'autocapitalize': {
        description: 'Controls whether and how text input is automatically capitalized as it is entered/edited by the user.',
        relatedTags: ['Global attribute'],
    },
    'autocomplete': {
        description: 'Indicates whether controls in this form can by default have their values automatically completed by the browser.',
        relatedTags: ['form', 'input', ' select', 'textarea'],
    },
    'autofocus': {
        description: 'The element should be automatically focused after the page loaded.',
        relatedTags: ['button', 'input', 'keygen', 'select', 'textarea'],
    },
    'autoplay': {
        description: 'The audio or video should play as soon as possible.',
        relatedTags: ['audio', 'video'],
    },
    'background': {
        description: 'Specifies the URL of an image file.Note:Although browsers and email clients may still support this attribute, it is obsolete. Use CSSbackground-imageinstead.',
        relatedTags: ['body', 'table', 'td', 'th'],
    },
    'bgcolor': {
        description: 'Background color of the element. Note:This is a legacy attribute. Please use the CSSbackground-colorproperty instead.',
        relatedTags: [
            'body',
            'col',
            'colgroup',
            'marquee',
            'table',
            'tbody',
            'tfoot',
            'td',
            'th',
            'tr',
        ],
    },
    'border': {
        description: 'The border width. Note:This is a legacy attribute. Please use the CSSborderproperty instead.',
        relatedTags: ['img', 'object', 'table'],
    },
    'buffered': {
        description: 'Contains the time range of already buffered media.',
        relatedTags: ['audio', 'video'],
    },
    'challenge': {
        description: 'A challenge string that is submitted along with the public key.',
        relatedTags: ['keygen'],
    },
    'charset': {
        description: 'Declares the character encoding of the page or script.',
        relatedTags: ['meta', 'script'],
    },
    'checked': {
        description: 'Indicates whether the element should be checked on page load.',
        relatedTags: ['command', 'input'],
    },
    'cite': {
        description: 'Contains a URI which points to the source of the quote or change.',
        relatedTags: ['blockquote', 'del', 'ins', 'q'],
    },
    'class': {
        description: 'Often used with CSS to style elements with common properties.',
        relatedTags: ['Global attribute'],
    },
    'code': {
        description: "Specifies the URL of the applet's class file to be loaded and executed.",
        relatedTags: ['applet'],
    },
    'codebase': {
        description: "This attribute gives the absolute or relative URL of the directory where applets' .class files referenced by the code attribute are stored.",
        relatedTags: ['applet'],
    },
    'color': {
        description: 'This attribute sets the text color using either a named color or a color specified in the hexadecimal #RRGGBB format. Note:This is a legacy attribute. Please use the CSScolorproperty instead.',
        relatedTags: ['basefont', 'font', 'hr'],
    },
    'cols': {
        description: 'Defines the number of columns in a textarea.',
        relatedTags: ['textarea'],
    },
    'colspan': {
        description: 'The colspan attribute defines the number of columns a cell should span.',
        relatedTags: ['td', 'th'],
    },
    'content': {
        description: 'A value associated withhttp-equivornamedepending on the context.',
        relatedTags: ['meta'],
    },
    'contenteditable': {
        description: "Indicates whether the element's content is editable.",
        relatedTags: ['Global attribute'],
    },
    'contextmenu': {
        description: "Defines the ID of amenuelement which will serve as the element's context menu.",
        relatedTags: ['Global attribute'],
    },
    'controls': {
        description: 'Indicates whether the browser should show playback controls to the user.',
        relatedTags: ['audio', 'video'],
    },
    'coords': {
        description: 'A set of values specifying the coordinates of the hot-spot region.',
        relatedTags: ['area'],
    },
    'crossorigin': {
        description: 'How the element handles cross-origin requests',
        relatedTags: ['audio', 'img', 'link', 'script', 'video'],
    },
    'csp': {
        description: 'Specifies the Content Security Policy that an embedded document must agree to enforce upon itself.',
        relatedTags: ['iframe'],
    },
    'data': {
        description: 'Specifies the URL of the resource.',
        relatedTags: ['object'],
    },
    'datetime': {
        description: 'Indicates the date and time associated with the element.',
        relatedTags: ['del', 'ins', 'time'],
    },
    'decoding': {
        description: 'Indicates the preferred method to decode the image.',
        relatedTags: ['img'],
    },
    'default': {
        description: "Indicates that the track should be enabled unless the user's preferences indicate something different.",
        relatedTags: ['track'],
    },
    'defer': {
        description: 'Indicates that the script should be executed after the page has been parsed.',
        relatedTags: ['script'],
    },
    'dir': {
        description: 'Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)',
        relatedTags: ['Global attribute'],
    },
    'dirname': {
        description: '',
        relatedTags: ['input', 'textarea'],
    },
    'disabled': {
        description: 'Indicates whether the user can interact with the element.',
        relatedTags: [
            'button',
            'command',
            'fieldset',
            'input',
            'keygen',
            'optgroup',
            'option',
            'select',
            'textarea',
        ],
    },
    'download': {
        description: 'Indicates that the hyperlink is to be used for downloading a resource.',
        relatedTags: ['a', 'area'],
    },
    'draggable': {
        description: 'Defines whether the element can be dragged.',
        relatedTags: ['Global attribute'],
    },
    'dropzone': {
        description: 'Indicates that the element accept the dropping of content on it.',
        relatedTags: ['Global attribute'],
    },
    'enctype': {
        description: 'Defines the content type of the form date when themethodis POST.',
        relatedTags: ['form'],
    },
    'enterkeyhint': {
        description: 'Theenterkeyhintspecifies what action label (or icon) to present for the enter key on virtual keyboards. The attribute can be used with form controls (such as the value oftextareaelements), or in elements in an editing host (e.g., usingcontenteditableattribute).',
        relatedTags: ['textarea', 'contenteditable'],
    },
    'for': {
        description: 'Describes elements which belongs to this one.',
        relatedTags: ['label', 'output'],
    },
    'form': {
        description: 'Indicates the form that is the owner of the element.',
        relatedTags: [
            'button',
            'fieldset',
            'input',
            'keygen',
            'label',
            'meter',
            'object',
            'output',
            'progress',
            'select',
            'textarea',
        ],
    },
    'formaction': {
        description: 'Indicates the action of the element, overriding the action defined in theform.',
        relatedTags: ['input', 'button'],
    },
    'formenctype': {
        description: 'If the button/input is a submit button (type="submit"), this attribute sets the encoding type to use during form submission. If this attribute is specified, it overrides theenctypeattribute of the button\'sformowner.',
        relatedTags: ['button', 'input'],
    },
    'formmethod': {
        description: 'If the button/input is a submit button (type="submit"), this attribute sets the submission method to use during form submission (GET,POST, etc.). If this attribute is specified, it overrides themethodattribute of the button\'sformowner.',
        relatedTags: ['button', 'input'],
    },
    'formnovalidate': {
        description: 'If the button/input is a submit button (type="submit"), this boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides thenovalidateattribute of the button\'sformowner.',
        relatedTags: ['button', 'input'],
    },
    'formtarget': {
        description: 'If the button/input is a submit button (type="submit"), this attribute specifies the browsing context (for example, tab, window, or inline frame) in which to display the response that is received after submitting the form. If this attribute is specified, it overrides thetargetattribute of the button\'sformowner.',
        relatedTags: ['button', 'input'],
    },
    'headers': {
        description: 'IDs of thethelements which applies to this element.',
        relatedTags: ['td', 'th'],
    },
    'height': {
        description: 'Specifies the height of elements listed here. For all other elements, use the CSSheightproperty. Note:In some instances, such asdiv, this is a legacy attribute, in which case the CSSheightproperty should be used instead.',
        relatedTags: ['canvas', 'embed', 'iframe', 'img', 'input', 'object', 'video'],
    },
    'hidden': {
        description: 'Prevents rendering of given element, while keeping child elements, e.g. script elements, active.',
        relatedTags: ['Global attribute'],
    },
    'high': {
        description: 'Indicates the lower bound of the upper range.',
        relatedTags: ['meter'],
    },
    'href': {
        description: 'The URL of a linked resource.',
        relatedTags: ['a', 'area', 'base', 'link'],
    },
    'hreflang': {
        description: 'Specifies the language of the linked resource.',
        relatedTags: ['a', 'area', 'link'],
    },
    'icon': {
        description: 'Specifies a picture which represents the command.',
        relatedTags: ['command'],
    },
    'id': {
        description: 'Often used with CSS to style a specific element. The value of this attribute must be unique.',
        relatedTags: ['Global attribute'],
    },
    'importance': {
        description: 'Indicates the relative fetch priority for the resource.',
        relatedTags: ['iframe', 'img', 'link', 'script'],
    },
    'integrity': {
        description: 'Specifies aSubresource Integrityvalue that allows browsers to verify what they fetch.',
        relatedTags: ['link', 'script'],
    },
    'intrinsicsize': {
        description: 'This attribute tells the browser to ignore the actual intrinsic size of the image and pretend itâ€™s the size specified in the attribute.',
        relatedTags: ['img'],
    },
    'inputmode': {
        description: 'Provides a hint as to the type of data that might be entered by the user while editing the element or its contents. The attribute can be used with form controls (such as the value oftextareaelements), or in elements in an editing host (e.g., usingcontenteditableattribute).',
        relatedTags: ['textarea', 'contenteditable'],
    },
    'ismap': {
        description: 'Indicates that the image is part of a server-side image map.',
        relatedTags: ['img'],
    },
    'itemprop': {
        description: '',
        relatedTags: ['Global attribute'],
    },
    'keytype': {
        description: 'Specifies the type of key generated.',
        relatedTags: ['keygen'],
    },
    'kind': {
        description: 'Specifies the kind of text track.',
        relatedTags: ['track'],
    },
    'label': {
        description: 'Specifies a user-readable title of the element.',
        relatedTags: ['optgroup', ' option', ' track'],
    },
    'lang': {
        description: 'Defines the language used in the element.',
        relatedTags: ['Global attribute'],
    },
    'language': {
        description: 'Defines the script language used in the element.',
        relatedTags: ['script'],
    },
    'loading': {
        description: 'Indicates if the element should be loaded lazily.WIP:WHATWG PR #3752',
        relatedTags: ['img', 'iframe'],
    },
    'list': {
        description: 'Identifies a list of pre-defined options to suggest to the user.',
        relatedTags: ['input'],
    },
    'loop': {
        description: "Indicates whether the media should start playing from the start when it's finished.",
        relatedTags: ['audio', 'bgsound', 'marquee', 'video'],
    },
    'low': {
        description: 'Indicates the upper bound of the lower range.',
        relatedTags: ['meter'],
    },
    'manifest': {
        description: 'Specifies the URL of the document\'s cache manifest. Note:This attribute is obsolete, uselink rel="manifest"instead.',
        relatedTags: ['html'],
    },
    'max': {
        description: 'Indicates the maximum value allowed.',
        relatedTags: ['input', 'meter', 'progress'],
    },
    'maxlength': {
        description: 'Defines the maximum number of characters allowed in the element.',
        relatedTags: ['input', 'textarea'],
    },
    'minlength': {
        description: 'Defines the minimum number of characters allowed in the element.',
        relatedTags: ['input', 'textarea'],
    },
    'media': {
        description: 'Specifies a hint of the media for which the linked resource was designed.',
        relatedTags: ['a', 'area', 'link', 'source', 'style'],
    },
    'method': {
        description: 'Defines whichHTTPmethod to use when submitting the form. Can beGET(default) orPOST.',
        relatedTags: ['form'],
    },
    'min': {
        description: 'Indicates the minimum value allowed.',
        relatedTags: ['input', 'meter'],
    },
    'multiple': {
        description: 'Indicates whether multiple values can be entered in an input of the typeemailorfile.',
        relatedTags: ['input', 'select'],
    },
    'muted': {
        description: 'Indicates whether the audio will be initially silenced on page load.',
        relatedTags: ['audio', 'video'],
    },
    'name': {
        description: 'Name of the element. For example used by the server to identify the fields in form submits.',
        relatedTags: [
            'button',
            'form',
            'fieldset',
            'iframe',
            'input',
            'keygen',
            'object',
            'output',
            'select',
            'textarea',
            'map',
            'meta',
            'param',
        ],
    },
    'novalidate': {
        description: "This attribute indicates that the form shouldn't be validated when submitted.",
        relatedTags: ['form'],
    },
    'open': {
        description: 'Indicates whether the details will be shown on page load.',
        relatedTags: ['details'],
    },
    'optimum': {
        description: 'Indicates the optimal numeric value.',
        relatedTags: ['meter'],
    },
    'pattern': {
        description: "Defines a regular expression which the element's value will be validated against.",
        relatedTags: ['input'],
    },
    'ping': {
        description: 'Thepingattribute specifies a space-separated list of URLs to be notified if a user follows the hyperlink.',
        relatedTags: ['a', 'area'],
    },
    'placeholder': {
        description: 'Provides a hint to the user of what can be entered in the field.',
        relatedTags: ['input', 'textarea'],
    },
    'poster': {
        description: 'A URL indicating a poster frame to show until the user plays or seeks.',
        relatedTags: ['video'],
    },
    'preload': {
        description: 'Indicates whether the whole resource, parts of it or nothing should be preloaded.',
        relatedTags: ['audio', 'video'],
    },
    'radiogroup': {
        description: '',
        relatedTags: ['command'],
    },
    'readonly': {
        description: 'Indicates whether the element can be edited.',
        relatedTags: ['input', 'textarea'],
    },
    'referrerpolicy': {
        description: 'Specifies which referrer is sent when fetching the resource.',
        relatedTags: ['a', 'area', 'iframe', 'img', 'link', 'script'],
    },
    'rel': {
        description: 'Specifies the relationship of the target object to the link object.',
        relatedTags: ['a', 'area', 'link'],
    },
    'required': {
        description: 'Indicates whether this element is required to fill out or not.',
        relatedTags: ['input', 'select', 'textarea'],
    },
    'reversed': {
        description: 'Indicates whether the list should be displayed in a descending order instead of a ascending.',
        relatedTags: ['ol'],
    },
    'rows': {
        description: 'Defines the number of rows in a text area.',
        relatedTags: ['textarea'],
    },
    'rowspan': {
        description: 'Defines the number of rows a table cell should span over.',
        relatedTags: ['td', 'th'],
    },
    'sandbox': {
        description: 'Stops a document loaded in an iframe from using certain features (such as submitting forms or opening new windows).',
        relatedTags: ['iframe'],
    },
    'scope': {
        description: 'Defines the cells that the header test (defined in thethelement) relates to.',
        relatedTags: ['th'],
    },
    'scoped': {
        description: '',
        relatedTags: ['style'],
    },
    'selected': {
        description: 'Defines a value which will be selected on page load.',
        relatedTags: ['option'],
    },
    'shape': {
        description: '',
        relatedTags: ['a', 'area'],
    },
    'size': {
        description: "Defines the width of the element (in pixels). If the element'stypeattribute istextorpasswordthen it's the number of characters.",
        relatedTags: ['input', 'select'],
    },
    'sizes': {
        description: '',
        relatedTags: ['link', 'img', 'source'],
    },
    'slot': {
        description: 'Assigns a slot in a shadow DOM shadow tree to an element.',
        relatedTags: ['Global attribute'],
    },
    'span': {
        description: '',
        relatedTags: ['col', 'colgroup'],
    },
    'spellcheck': {
        description: 'Indicates whether spell checking is allowed for the element.',
        relatedTags: ['Global attribute'],
    },
    'src': {
        description: 'The URL of the embeddable content.',
        relatedTags: ['audio', 'embed', 'iframe', 'img', 'input', 'script', 'source', 'track', 'video'],
    },
    'srcdoc': {
        description: '',
        relatedTags: ['iframe'],
    },
    'srclang': {
        description: '',
        relatedTags: ['track'],
    },
    'srcset': {
        description: 'One or more responsive image candidates.',
        relatedTags: ['img', 'source'],
    },
    'start': {
        description: 'Defines the first number if other than 1.',
        relatedTags: ['ol'],
    },
    'step': {
        description: '',
        relatedTags: ['input'],
    },
    'style': {
        description: 'Defines CSS styles which will override styles previously set.',
        relatedTags: ['Global attribute'],
    },
    'summary': {
        description: '',
        relatedTags: ['table'],
    },
    'tabindex': {
        description: "Overrides the browser's default tab order and follows the one specified instead.",
        relatedTags: ['Global attribute'],
    },
    'target': {
        description: '',
        relatedTags: ['a', 'area', 'base', 'form'],
    },
    'title': {
        description: 'Text to be displayed in a tooltip when hovering over the element.',
        relatedTags: ['Global attribute'],
    },
    'translate': {
        description: 'Specify whether an elementâ€™s attribute values and the values of itsTextnode children are to be translated when the page is localized, or whether to leave them unchanged.',
        relatedTags: ['Global attribute'],
    },
    'type': {
        description: 'Defines the type of the element.',
        relatedTags: [
            'button',
            'input',
            'command',
            'embed',
            'object',
            'script',
            'source',
            'style',
            'menu',
        ],
    },
    'usemap': {
        description: '',
        relatedTags: ['img', 'input', 'object'],
    },
    'value': {
        description: 'Defines a default value which will be displayed in the element on page load.',
        relatedTags: ['button', 'data', 'input', 'li', 'meter', 'option', 'progress', 'param'],
    },
    'width': {
        description: "For the elements listed here, this establishes the element's width. Note:For all other instances, such asdiv, this is a legacy attribute, in which case the CSSwidthproperty should be used instead.",
        relatedTags: ['canvas', 'embed', 'iframe', 'img', 'input', 'object', 'video'],
    },
    'wrap': {
        description: 'Indicates whether the text should be wrapped.',
        relatedTags: ['textarea'],
    },
};
const HTML_ELEMENTS = {
    a: {
        description: 'Defines a hyperlink',
    },
    abbr: {
        description: 'Defines an abbreviation or an acronym',
    },
    acronym: {
        description: 'Not supported in HTML5. Use <abbr> instead.',
    },
    address: {
        description: 'Defines contact information for the author/owner of a document',
    },
    applet: {
        description: 'Not supported in HTML5. Use <embed> or <object> instead.',
    },
    area: {
        description: 'Defines an area inside an image-map',
    },
    article: {
        description: 'Defines an article',
    },
    aside: {
        description: 'Defines content aside from the page content',
    },
    audio: {
        description: 'Defines sound content',
    },
    b: {
        description: 'Defines bold text',
    },
    base: {
        description: 'Specifies the base URL/target for all relative URLs in a document',
    },
    basefont: {
        description: 'Not supported in HTML5. Use CSS instead.',
    },
    bdi: {
        description: 'Isolates a part of text that might be formatted in a different direction from other text outside it',
    },
    bdo: {
        description: 'Overrides the current text direction',
    },
    big: {
        description: 'Not supported in HTML5. Use CSS instead.',
    },
    blockquote: {
        description: 'Defines a section that is quoted from another source',
    },
    body: {
        description: "Defines the document's body",
    },
    br: {
        description: 'Defines a single line break',
    },
    button: {
        description: 'Defines a clickable button',
    },
    canvas: {
        description: 'Used to draw graphics, on the fly, via scripting (usually JavaScript)',
    },
    caption: {
        description: 'Defines a table caption',
    },
    center: {
        description: 'Not supported in HTML5. Use CSS instead.',
    },
    cite: {
        description: 'Defines the title of a work',
    },
    code: {
        description: 'Defines a piece of computer code',
    },
    col: {
        description: 'Specifies column properties for each column within a <colgroup> element',
    },
    colgroup: {
        description: 'Specifies a group of one or more columns in a table for formatting',
    },
    data: {
        description: 'Links the given content with a machine-readable translation',
    },
    datalist: {
        description: 'Specifies a list of pre-defined options for input controls',
    },
    dd: {
        description: 'Defines a description/value of a term in a description list',
    },
    del: {
        description: 'Defines text that has been deleted from a document',
    },
    details: {
        description: 'Defines additional details that the user can view or hide',
    },
    dfn: {
        description: 'Represents the defining instance of a term',
    },
    dialog: {
        description: 'Defines a dialog box or window',
    },
    dir: {
        description: 'Not supported in HTML5. Use <ul> instead.',
    },
    div: {
        description: 'Defines a section in a document',
    },
    dl: {
        description: 'Defines a description list',
    },
    dt: {
        description: 'Defines a term/name in a description list',
    },
    em: {
        description: 'Defines emphasized text',
    },
    embed: {
        description: 'Defines a container for an external (non-HTML) application',
    },
    fieldset: {
        description: 'Groups related elements in a form',
    },
    figcaption: {
        description: 'Defines a caption for a <figure> element',
    },
    figure: {
        description: 'Specifies self-contained content',
    },
    font: {
        description: 'Not supported in HTML5. Use CSS instead.',
    },
    footer: {
        description: 'Defines a footer for a document or section',
    },
    form: {
        description: 'Defines an HTML form for user input',
    },
    frame: {
        description: 'Not supported in HTML5.',
    },
    frameset: {
        description: 'Not supported in HTML5.',
    },
    h1: {
        description: 'Defines HTML headings',
    },
    h2: {
        description: 'Defines HTML headings',
    },
    h3: {
        description: 'Defines HTML headings',
    },
    h4: {
        description: 'Defines HTML headings',
    },
    h5: {
        description: 'Defines HTML headings',
    },
    h6: {
        description: 'Defines HTML headings',
    },
    head: {
        description: 'Defines information about the document',
    },
    header: {
        description: 'Defines a header for a document or section',
    },
    hr: {
        description: 'Defines a thematic change in the content',
    },
    html: {
        description: 'Defines the root of an HTML document',
    },
    i: {
        description: 'Defines a part of text in an alternate voice or mood',
    },
    iframe: {
        description: 'Defines an inline frame',
    },
    img: {
        description: 'Defines an image',
    },
    input: {
        description: 'Defines an input control',
    },
    ins: {
        description: 'Defines a text that has been inserted into a document',
    },
    kbd: {
        description: 'Defines keyboard input',
    },
    label: {
        description: 'Defines a label for an <input> element',
    },
    legend: {
        description: 'Defines a caption for a <fieldset> element',
    },
    li: {
        description: 'Defines a list item',
    },
    link: {
        description: 'Defines the relationship between a document and an external resource (most used to link to style sheets)',
    },
    main: {
        description: 'Specifies the main content of a document',
    },
    map: {
        description: 'Defines a client-side image-map',
    },
    mark: {
        description: 'Defines marked/highlighted text',
    },
    meta: {
        description: 'Defines metadata about an HTML document',
    },
    meter: {
        description: 'Defines a scalar measurement within a known range (a gauge)',
    },
    nav: {
        description: 'Defines navigation links',
    },
    noframes: {
        description: 'Not supported in HTML5.',
    },
    noscript: {
        description: 'Defines an alternate content for users that do not support client-side scripts',
    },
    object: {
        description: 'Defines an embedded object',
    },
    ol: {
        description: 'Defines an ordered list',
    },
    optgroup: {
        description: 'Defines a group of related options in a drop-down list',
    },
    option: {
        description: 'Defines an option in a drop-down list',
    },
    output: {
        description: 'Defines the result of a calculation',
    },
    p: {
        description: 'Defines a paragraph',
    },
    param: {
        description: 'Defines a parameter for an object',
    },
    picture: {
        description: 'Defines a container for multiple image resources',
    },
    pre: {
        description: 'Defines preformatted text',
    },
    progress: {
        description: 'Represents the progress of a task',
    },
    q: {
        description: 'Defines a short quotation',
    },
    rp: {
        description: 'Defines what to show in browsers that do not support ruby annotations',
    },
    rt: {
        description: 'Defines an explanation/pronunciation of characters (for East Asian typography)',
    },
    ruby: {
        description: 'Defines a ruby annotation (for East Asian typography)',
    },
    s: {
        description: 'Defines text that is no longer correct',
    },
    samp: {
        description: 'Defines sample output from a computer program',
    },
    script: {
        description: 'Defines a client-side script',
    },
    section: {
        description: 'Defines a section in a document',
    },
    select: {
        description: 'Defines a drop-down list',
    },
    small: {
        description: 'Defines smaller text',
    },
    source: {
        description: 'Defines multiple media resources for media elements (<video> and <audio>)',
    },
    span: {
        description: 'Defines a section in a document',
    },
    strike: {
        description: 'Not supported in HTML5. Use <del> or <s> instead.',
    },
    strong: {
        description: 'Defines important text',
    },
    style: {
        description: 'Defines style information for a document',
    },
    sub: {
        description: 'Defines subscripted text',
    },
    summary: {
        description: 'Defines a visible heading for a <details> element',
    },
    sup: {
        description: 'Defines superscripted text',
    },
    svg: {
        description: 'Defines a container for SVG graphics',
    },
    table: {
        description: 'Defines a table',
    },
    tbody: {
        description: 'Groups the body content in a table',
    },
    td: {
        description: 'Defines a cell in a table',
    },
    template: {
        description: 'Defines a template',
    },
    textarea: {
        description: 'Defines a multiline input control (text area)',
    },
    tfoot: {
        description: 'Groups the footer content in a table',
    },
    th: {
        description: 'Defines a header cell in a table',
    },
    thead: {
        description: 'Groups the header content in a table',
    },
    time: {
        description: 'Defines a date/time',
    },
    title: {
        description: 'Defines a title for the document',
    },
    tr: {
        description: 'Defines a row in a table',
    },
    track: {
        description: 'Defines text tracks for media elements (<video> and <audio>)',
    },
    tt: {
        description: 'Not supported in HTML5. Use CSS instead.',
    },
    u: {
        description: 'Defines text that should be stylistically different from normal text',
    },
    ul: {
        description: 'Defines an unordered list',
    },
    var: {
        description: 'Defines a variable',
    },
    video: {
        description: 'Defines a video or movie',
    },
    wbr: {
        description: 'Defines a possible line-break',
    },
};

class Doc {
    constructor(...elements) {
        this.elements = [];
        this.elements = elements;
    }
    toString() {
        return this.elements.join('');
    }
}
class Elem {
    constructor(type, ...args) {
        this.type = type;
        this.isVoid = HTML_VOID_TAGS.has(type);
        this.attributes = new Map();
        this.elements = [];
        for (const arg of args) {
            if (Array.isArray(arg)) {
                for (const att of arg) {
                    this.attributes.set(att.type, att);
                }
            }
            else {
                if (this.isVoid)
                    throw new Error("Void elements types can't have children. Got type: " + type);
                this.elements.push(arg);
            }
        }
    }
    get description() {
        return HTML_ELEMENTS[this.type].description;
    }
    renderAttributes() {
        return this.attributes.size ? ' ' + Array.from(this.attributes.values()).join(' ') : '';
    }
    renderChildren() {
        return this.elements.join('');
    }
    toString() {
        return `<${this.type}${this.renderAttributes()}${this.isVoid ? ' />' : `>${this.renderChildren()}</${this.type}>`}`;
    }
    toHtmlElement() {
        const elem = document.createElement(this.type);
        for (const attr of this.attributes.values()) {
            elem.setAttribute(attr.type, attr.value || '');
        }
        for (const child of this.elements) {
            if (typeof child === 'string') {
                elem.appendChild(document.createTextNode(child));
            }
            else {
                elem.appendChild(child.toHtmlElement());
            }
        }
        return elem;
    }
}
class Att {
    constructor(type, value) {
        this.type = type;
        this.value = value;
        this.isBoolean = HTML_BOOLEAN_ATTRIBUTES.has(type);
    }
    toString() {
        return `${this.type}${this.isBoolean ? '' : `="${this.value || ''}"`}`;
    }
    get relatedTags() {
        return HTML_ATTRIBUTES[this.type].relatedTags;
    }
    get description() {
        return HTML_ATTRIBUTES[this.type].description;
    }
}
const el = {};
for (const type of Object.keys(HTML_ELEMENTS)) {
    el[type] = (...args) => new Elem(type, ...args);
}
function defineElementType(type) {
    el[type] = (...args) => new Elem(type, ...args);
    HTML_ELEMENTS[type] = { description: 'Custom Element' };
    return el[type];
}
const at = {};
for (const type of Object.keys(HTML_ATTRIBUTES)) {
    at[type] = (value) => new Att(type, value);
}
for (const type of HTML_EVENT_HANDLER_ATTRIBUTES) {
    at[type] = (value) => new Att(type, value);
}
function defineAttributeType(type) {
    at[type] = (value) => new Att(type, value);
    HTML_ATTRIBUTES[type] = { description: 'Custom Element', relatedTags: [] };
    return at[type];
}
const comment = (comment) => `<!-- ${comment} -->`;
const doctype = (type = 'html') => `<!DOCTYPE ${type}>`;
function createTable(rows, hasHeader = false) {
    const table = el.table();
    for (let i = 0; i < rows.length; i++) {
        const isHeader = i === 0 && hasHeader;
        const row = rows[i];
        const tr = el.tr();
        for (const cell of row) {
            tr.elements.push(isHeader ? el.th(cell) : el.td(cell));
        }
        table.elements.push(tr);
    }
    return table;
}
const HtmlGenerate = {
    el,
    at,
    comment,
    doctype,
    defineElementType,
    defineAttributeType,
    createTable,
};
// const doc = new Doc(
//   doctype(),
//   el.html(
//     [at.lang('en')],
//     el.head(
//       el.meta([at.charset('utf-8')]),
//       el.meta([at['http-equiv']('X-UA-Compatible'), at.content('ie=edge')]),
//       el.meta([at.name('viewport'), at.content('width=device-width, initial-scale=1.0')]),
//       comment('Bootstrap starter css template'),
//       el.title('my title'),
//       el.link([
//         at.rel('stylesheet'),
//         at.href('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'),
//       ]),
//       el.style(`
//         body {
//           margin: 0;
//           box-sizing: border-box;
//         }
//         .container {
//           line-height: 150%;
//         }
//       `),
//     ),
//     el.body(
//       el.div(
//         [at.id('outer')],
//         el.div(
//           [at.id('inner'), at.class('container bg-primary text-white')],
//           'some text',
//           'some more text',
//           el.div(
//             'some text',
//             el.ul([at.id('messages')], el.li('some message'), el.li('wow')),
//             el.div(
//               [at.id('input-area')],
//               el.textarea([at.id('uInput'), at.placeholder('Text...'), at.selected()], 'This is the text area text'),
//             ),
//           ),
//           el.ul([at.id('textlist')], el.li('something'), el.li('cool')),
//         ),
//         el.button([at.id('btn'), at.class('btn btn-primary'), at.onclick('doit()')], 'Click me!'),
//       ),
//       createTable(['a b c'.split(' '), '1 2 3'.split(' '), 'x y z'.split(' ')], true),
//       comment('Jquery import'),
//       el.script([
//         at.src('https://code.jquery.com/jquery-3.5.1.slim.min.js'),
//         at.crossorigin('anonymous'),
//         at.integrity('sha256-DrT5NfxfbHvMHux31Lkhxg42LY6of8TaYyK50jnxRnM='),
//       ]),
//       comment('Own script'),
//       el.script(`function doit() {console.log('did it')}`),
//     ),
//   ),
// )
// console.log(doc.toString())
// import fs from 'fs'
// fs.writeFileSync(__filename + '.html', doc.toString())

/**
 * Converts the table element's data content to a 2-dimensional array.
 * @param {HTMLElement} element - The table element
 * @param {boolean} headers - Whether to extract table column header data from <th> elements.
 * @returns {Array<Array<string>>} Data table which is an arrays of row-arrays of cell content (string).
 */
function htmlTableTo2dArray(element, headers = true) {
    var _a;
    const result = [];
    const htmlRows = element.querySelectorAll('tr');
    for (let i = 0; i < htmlRows.length; i++) {
        const htmlRow = htmlRows[i];
        const row = [];
        const htmlCells = htmlRow.querySelectorAll(headers ? 'th,td' : 'td');
        for (let j = 0; j < htmlCells.length; j++) {
            const htmlCell = htmlCells[j];
            if (htmlCell) {
                row.push(((_a = htmlCell === null || htmlCell === void 0 ? void 0 : htmlCell.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || '');
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
        return crypto.createHash(algorithm).update(string).digest();
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
        return crypto.getHashes();
    },
};

const allIndexedInstances = [];
const allIndexedClasses = [];
let nextClassIndex = -1;
function Indexed(BaseConstructor) {
    var _a;
    const classIndex = ++nextClassIndex;
    allIndexedInstances[classIndex] = [];
    let nextInstanceIndex = -1;
    const Class = (_a = class Indexed extends BaseConstructor {
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
        },
        _a.instances = allIndexedInstances[classIndex],
        _a.clsId = classIndex,
        _a);
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
    var _a;
    const t0 = Date.now();
    return _a = class Timestamped extends BaseConstructor {
            constructor() {
                super(...arguments);
                this.timestamp = Date.now();
            }
        },
        _a.timestamp = t0,
        _a;
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
    constructor(options) {
        super(options);
        this.init();
    }
}
User.defaultOptions = {
    wow: 'cool',
    dam: 2,
};
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
        if (cur.length + pre.length < upperBound &&
            (cur.length < lowerBound || pre.length < lowerBound)) {
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
            if (path__default["default"].extname(filepath) === ext) {
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
 * Round value with a given number of decimal points.
 * @param n the number to round.
 * @param decimalPoints the number of decimal points.
 */
function round(n, decimalPoints = 0) {
    return Math.round(n * Math.pow(10, decimalPoints)) / Math.pow(10, decimalPoints) + 0;
}

/**
 * Formats a number input to a string representation with a given number of decimal places, thousand seperator and decimal seperator.
 * @param input number to format
 * @param thousandSeperator character to use as thousand seperator
 * @param fractionDigits number of decimal places to return. Will pad string with zeroes to ensure this length.
 * @param decimalSeperator character to use as decimal seperator
 */
function numFormat(input, thousandSeperator = '.', fractionDigits = 2, decimalSeperator = ',') {
    const minus = input < 0 ? '-' : '';
    const string = Math.abs(round(input, fractionDigits)).toString();
    const split = string.split('.');
    const integer = split[0];
    const decimals = fractionDigits
        ? decimalSeperator + (split[1] || '').padEnd(fractionDigits, '0')
        : '';
    let result = '';
    for (let i = 0; i < integer.length; i++) {
        if (i % 3 === 0 && i !== 0) {
            result = thousandSeperator + result;
        }
        result = integer[integer.length - i - 1] + result;
    }
    return minus + result + decimals;
}

/**
 * Formats a number input to a string representation in the style of 5,000,000.00
 * @param input number to format
 * @param decimalPlaces number of decimal places to return. Will pad string with zeroes to ensure this length.
 */
function numFormatUS(input, decimalPlaces = 0) {
    return numFormat(input, ',', decimalPlaces, '.');
}

/**
 * Formats a number input to a string representation in the style of 5.000.000,00
 * @param input number to format
 * @param decimalPlaces number of decimal places to return. Will pad string with zeroes to ensure this length.
 */
function numFormatDK(input, decimalPlaces = 0) {
    return numFormat(input, '.', decimalPlaces, ',');
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
function memoryUsageDkFormat() {
    return formatMemoryUsageOutput((bytes) => `${numFormatDK(bytes * 0.000001, 2)} MB`);
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
    return path__default["default"].join(process.cwd(), ...dirs);
}

/**
 * Takes a filepath and returns its utf8 contents as a single string.
 * @param path path to the file
 */
function readFileStringSync(path) {
    return fs__default["default"].readFileSync(path, 'utf8').toString();
}

/**
 * Drain a Readable into a string.
 * @param stream - a Readable of string chunks
 */
function streamToString(stream) {
    var _a, stream_1, stream_1_1;
    var _b, e_1, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        const chunks = [];
        try {
            for (_a = true, stream_1 = __asyncValues(stream); stream_1_1 = yield stream_1.next(), _b = stream_1_1.done, !_b;) {
                _d = stream_1_1.value;
                _a = false;
                try {
                    const chunk = _d;
                    chunks.push(Buffer.from(chunk).toString());
                }
                finally {
                    _a = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_a && !_b && (_c = stream_1.return)) yield _c.call(stream_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return chunks.join('');
    });
}

/**
 * Extension of Node's native Readable class for converting a string into a Readable stream.
 */
class StringStream extends stream.Readable {
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

/**
 * Generic function for logging to console, used by the log-level specific functions.
 */
function logToConsole(level, message, timestampColor, levelColor, outpuColor, depth) {
    const ts = timestampColor(new Date().toISOString());
    const lvl = levelColor(level);
    if (typeof message === 'object') {
        console.log(`${ts} [${lvl}]:`);
        console.dir(message, depth);
        console.log(cliColor.blackBright('------------------------------------------'));
    }
    else {
        console.log(`${ts} [${lvl}]: ${outpuColor((message + '').includes('\n') ? '\n' + message : message)}`);
    }
}
/**
 * Depending configured environment variables, these functions will log to console, file and EventEmitter.
 */
const log = {
    info(message, depth) {
        logToConsole('INFO', message, cliColor.magenta, cliColor.green, cliColor.cyan, depth);
        return message;
    },
    warn(message) {
        logToConsole('WARN', message, cliColor.magenta, cliColor.yellow, cliColor.yellow);
        return message;
    },
    error(message) {
        logToConsole('ERROR', message, cliColor.magenta, cliColor.red, cliColor.red);
        return message;
    },
    task(description, task) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info(`Began: ${description}.`);
            const t0 = Date.now();
            const returnValue = yield task();
            log.info(`Ended: ${description}. (${((Date.now() - t0) / 1000).toString()} seconds)`);
            return returnValue;
        });
    },
    taskSync(description, task) {
        log.info(`Began: ${description}.`);
        const t0 = Date.now();
        const returnValue = task();
        log.info(`Ended: ${description}. (${((Date.now() - t0) / 1000).toString()} seconds)`);
        return returnValue;
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

/**
 * Parses a formatted number string to a number
 * @param input string to parse
 * @param thousandSeperator character to use as thousand seperator
 * @param decimalSeperator character to use as decimal seperator
 */
function numParseFormatted(input, thousandSeperator = ',', decimalSeperator = '.') {
    return Number(input
        .replaceAll(thousandSeperator, '')
        .replace(decimalSeperator, '.')
        .replace(/[^\d.-]/g, ''));
}

/**
 * Parses a danish-formatted number string to a number
 */
function numParseFormattedDK(input) {
    return numParseFormatted(input, '.', ',');
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

/**
 * Similar to Array.prototype.map, but for objects.
 * @param object The object to iterate over.
 * @param callback The function to call for each key-value pair.
 * @param getKeys A function that returns the keys of the object.
 */
function objMap(object, callback, getKeys = Object.keys) {
    const result = {};
    for (const key of getKeys(object)) {
        result[key] = callback(object[key], key);
    }
    return result;
}

/**
 * Similar to Array.prototype.filter, but for objects.
 * @param object The object to iterate over.
 * @param callback The function to call for each key-value pair.
 * @param getKeys A function that returns the keys of the object.
 */
function objFilter(object, callback, getKeys = Object.keys) {
    const result = {};
    for (const key of getKeys(object)) {
        if (callback(object[key], key)) {
            result[key] = object[key];
        }
    }
    return result;
}

/**
 * Similar to Array.prototype.forEach, but for objects.
 * @param object The object to iterate over.
 * @param callback The function to call for each key-value pair.
 * @param getKeys A function that returns the keys of the object.
 */
function objForEach(object, callback, getKeys = Object.keys) {
    for (const key of getKeys(object)) {
        callback(object[key], key);
    }
    return object;
}

/**
 * Similar to Array.prototype.map, but for object keys - not values.
 * @param object The object to iterate over.
 * @param callback The function to call for each key-value pair.
 * @param getKeys A function that returns the keys of the object.
 */
function objMapKeys(object, callback, getKeys = Object.keys) {
    const result = {};
    for (const key of getKeys(object)) {
        result[callback(key, object[key])] = object[key];
    }
    return result;
}

/**
 * Similar to Array.prototype.reduce, but for objects.
 * @param object The object to iterate over.
 * @param callback The function to call for each key-value pair.
 * @param accum The initial value of the accumulator.
 * @param getKeys A function that returns the keys of the object.
 */
function objReduce(object, callback, accum, getKeys = Object.keys) {
    for (const key of getKeys(object)) {
        accum = callback(accum, object[key], key);
    }
    return accum;
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
const isHex$1 = /^(0x|0h|(\\?u)|#)?[0-9A-F]+$/i;
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
  isHex: isHex$1,
  isLocaleAlpha: isLocaleAlpha,
  isLocaleAlphaNumeric: isLocaleAlphaNumeric
});

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
 * Sorts the characters in a string.
 * @example
 * ```ts
 * strSortChars('hello') // 'ehllo'
 * ```
 */
function strSortChars(string) {
    return Array.from(string).sort().join('');
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
            else if (options === null || options === void 0 ? void 0 : options.escapeSourceString) {
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
        return (regex instanceof BemojeRegex && this.source === regex.source && this.flags === regex.flags);
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
BemojeRegex.defaultOptions = {
    escapeSourceString: false,
    fixFlags: false,
};
/**
 * Checks if a string is a valid regex flags string.
 */
BemojeRegex.isValidFlags = regexIsValidFlags;
/**
 * Takes a string of RegExp flags and returns a string guaranteed to be valid.
 * @param flags - string of RegExp flags
 */
BemojeRegex.fixFlags = regexFixFlags;
/**
 * Returns an array of all valid flags for a regular expression.
 */
BemojeRegex.getValidFlags = regexValidFlags;
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
 * Alpha numeric comparator function (descending)
 * @param a first value to compare
 * @param b second value to compare
 */
function compareStringDescending(a, b) {
    return b.localeCompare(a);
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
 * Returns a given number of contatenations of a given input string.
 * @param input - input string
 * @param n - Number of repetitions of the input string
 */
function strRepeat(input, n) {
    return new Array(n).fill(input).join('');
}

/**
 * Very crude, simple, fast code formatting of minified code.
 * Only works when input code:
 * - is minified
 * - is scoped with brackets
 * - expressions end with semicolon
 * - has no string literals containing semicolons or braces.
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
 * Checks if a string is a number.
 * @param string - input string
 */
function isNumericString(string) {
    const n = Number(string.trim());
    return !isNaN(n) && isFinite(n);
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
    return sentenceSplitter.split(text)
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
    return lodash.words(input);
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
 * Determine whether a string is a hexadecimal string.
 */
function isHex(s) {
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
        typeof o === 'object' &&
        Symbol.iterator in o &&
        typeof o[Symbol.iterator] === 'function');
}

/**
 * Determine wheter the argument is a Object (is typeof object but not null).
 */
function isObject(value) {
    return value !== null && typeof value === 'object';
}

exports.A1ToColRow = A1ToColRow;
exports.Att = Att;
exports.Base = Base;
exports.BemojeRegex = BemojeRegex;
exports.Doc = Doc;
exports.Elem = Elem;
exports.ExtensibleFunction = ExtensibleFunction;
exports.HTML_ATTRIBUTES = HTML_ATTRIBUTES;
exports.HTML_BOOLEAN_ATTRIBUTES = HTML_BOOLEAN_ATTRIBUTES;
exports.HTML_ELEMENTS = HTML_ELEMENTS;
exports.HTML_EVENT_HANDLER_ATTRIBUTES = HTML_EVENT_HANDLER_ATTRIBUTES;
exports.HTML_VOID_TAGS = HTML_VOID_TAGS;
exports.HtmlGenerate = HtmlGenerate;
exports.Indexed = Indexed;
exports.IndexedGetClass = IndexedGetClass;
exports.IndexedGetInstance = IndexedGetInstance;
exports.Matrix = Matrix;
exports.Mixins = Mixins;
exports.Options = Options;
exports.Queue = Queue;
exports.Revivable = Revivable;
exports.SortedArray = SortedArray;
exports.StringStream = StringStream;
exports.Table = Table;
exports.Timer = Timer;
exports.Timestamped = Timestamped;
exports.absolutCwdPathToRelative = absolutCwdPathToRelative;
exports.arr2dToCSV = arr2dToCSV;
exports.arrAverage = arrAverage;
exports.arrEvery = arrEvery;
exports.arrFlatten = arrFlatten;
exports.arrIndicesOf = arrIndicesOf;
exports.arrMapMutable = arrMapMutable;
exports.arrShallowEquals = arrShallowEquals;
exports.arrShuffle = arrShuffle;
exports.arrSome = arrSome;
exports.arrSortNumeric = arrSortNumeric;
exports.arrSum = arrSum;
exports.arrSwap = arrSwap;
exports.assertValidDate = assertValidDate;
exports.assertValidDateDay = assertValidDateDay;
exports.assertValidDateMonth = assertValidDateMonth;
exports.assertValidDateYear = assertValidDateYear;
exports.asyncParallel = asyncParallel;
exports.asyncSerial = asyncSerial;
exports.asyncWithTimeout = asyncWithTimeout;
exports.atob = atob;
exports.btoa = btoa;
exports.buildRegexBetween = buildRegexBetween;
exports.bytesToInt = bytesToInt;
exports.colRowToA1 = colRowToA1;
exports.colToLetter = colToLetter;
exports.compareArray = compareArray;
exports.compareNumber = compareNumber;
exports.compareNumberDescending = compareNumberDescending;
exports.compareNumeric = compareNumeric;
exports.compareNumericDescending = compareNumericDescending;
exports.compareString = compareString;
exports.compareStringDescending = compareStringDescending;
exports.createFileExtensionFilter = createFileExtensionFilter;
exports.ensureValidWindowsPath = ensureValidWindowsPath;
exports.funSetName = funSetName;
exports.getCentury = getCentury;
exports.getConstructor = getConstructor;
exports.getCurrentYear = getCurrentYear;
exports.getPrototype = getPrototype;
exports.htmlTableTo2dArray = htmlTableTo2dArray;
exports.inheritStaticMembers = inheritStaticMembers;
exports.intToArrayBytes = intToArrayBytes;
exports.intToBuffer = intToBuffer;
exports.intToBytes = intToBytes;
exports.interfaceDefinitions = interfaceDefinitions;
exports.isConstructor = isConstructor;
exports.isEven = isEven;
exports.isHex = isHex;
exports.isHexOrUnicode = isHexOrUnicode;
exports.isIterable = isIterable;
exports.isLeapYear = isLeapYear;
exports.isNumericString = isNumericString;
exports.isObject = isObject;
exports.isOdd = isOdd;
exports.isPrototype = isPrototype;
exports.isSocialSecurityNumberDK = isSocialSecurityNumberDK;
exports.isValidDate = isValidDate;
exports.isValidDateDay = isValidDateDay;
exports.isValidDateMonth = isValidDateMonth;
exports.isValidDateYear = isValidDateYear;
exports.isoDateTimestamp = isoDateTimestamp;
exports.iteratePrototypeChain = iteratePrototypeChain;
exports.letterToCol = letterToCol;
exports.log = log;
exports.mapGetOrDefault = mapGetOrDefault;
exports.mapGetOrElse = mapGetOrElse;
exports.mapUpdate = mapUpdate;
exports.mapUpdateDefault = mapUpdateDefault;
exports.memoryUsage = memoryUsage;
exports.memoryUsageDkFormat = memoryUsageDkFormat;
exports.memoryUsageUsFormat = memoryUsageUsFormat;
exports.normalizeFileExtension = normalizeFileExtension;
exports.normalizeLineLengths = normalizeLineLengths;
exports.numApproximateLog10 = numApproximateLog10;
exports.numDaysInMonth = numDaysInMonth;
exports.numFormat = numFormat;
exports.numFormatDK = numFormatDK;
exports.numFormatUS = numFormatUS;
exports.numParseFormatted = numParseFormatted;
exports.numParseFormattedDK = numParseFormattedDK;
exports.objFilter = objFilter;
exports.objForEach = objForEach;
exports.objMap = objMap;
exports.objMapKeys = objMapKeys;
exports.objReduce = objReduce;
exports.padArrayBytesLeft = padArrayBytesLeft;
exports.padArrayBytesRight = padArrayBytesRight;
exports.parseSocialSecurityNumberDK = parseSocialSecurityNumberDK;
exports.pathFromCwd = pathFromCwd;
exports.randomIntBetween = randomIntBetween;
exports.readFileStringSync = readFileStringSync;
exports.regexEscapeString = regexEscapeString;
exports.regexFixFlags = regexFixFlags;
exports.regexGetGroupNames = regexGetGroupNames;
exports.regexIsValidFlags = regexIsValidFlags;
exports.regexLibrary = regexLibrary;
exports.regexMatcherToValidater = regexMatcherToValidater;
exports.regexScopeTree = regexScopeTree;
exports.regexValidFlags = regexValidFlags;
exports.rexec = rexec;
exports.round = round;
exports.roundDown = roundDown;
exports.roundUp = roundUp;
exports.setDifference = setDifference;
exports.setEnumerable = setEnumerable;
exports.setIntersection = setIntersection;
exports.setIsSuperset = setIsSuperset;
exports.setNonConfigurable = setNonConfigurable;
exports.setNonEnumerable = setNonEnumerable;
exports.setNonEnumerablePrivateProperties = setNonEnumerablePrivateProperties;
exports.setNonWritable = setNonWritable;
exports.setSymmetricDifference = setSymmetricDifference;
exports.setUnion = setUnion;
exports.setValueAsGetter = setValueAsGetter;
exports.setWritable = setWritable;
exports.strCountCharOccurances = strCountCharOccurances;
exports.strCountChars = strCountChars;
exports.strFirstCharToUpperCase = strFirstCharToUpperCase;
exports.strHash = strHash;
exports.strIsLowerCase = strIsLowerCase;
exports.strIsUpperCase = strIsUpperCase;
exports.strLinesRemoveEmpty = strLinesRemoveEmpty;
exports.strLinesTrimLeft = strLinesTrimLeft;
exports.strLinesTrimRight = strLinesTrimRight;
exports.strParseBoolean = strParseBoolean;
exports.strPrettifyMinifiedCode = strPrettifyMinifiedCode;
exports.strRemoveDuplicateChars = strRemoveDuplicateChars;
exports.strRepeat = strRepeat;
exports.strReplaceAll = strReplaceAll;
exports.strSortChars = strSortChars;
exports.strSplitCamelCase = strSplitCamelCase;
exports.strToCharCodes = strToCharCodes;
exports.strToCharSet = strToCharSet;
exports.strToSentences = strToSentences;
exports.strToWords = strToWords;
exports.strUnwrap = strUnwrap;
exports.strWrapBetween = strWrapBetween;
exports.strWrapIn = strWrapIn;
exports.strWrapInAngleBrackets = strWrapInAngleBrackets;
exports.strWrapInBraces = strWrapInBraces;
exports.strWrapInBrackets = strWrapInBrackets;
exports.strWrapInDoubleQuotes = strWrapInDoubleQuotes;
exports.strWrapInParenthesis = strWrapInParenthesis;
exports.strWrapInSingleQuotes = strWrapInSingleQuotes;
exports.streamToString = streamToString;
exports.trimArrayBytesLeft = trimArrayBytesLeft;
exports.trimArrayBytesRight = trimArrayBytesRight;
//# sourceMappingURL=index.js.map
