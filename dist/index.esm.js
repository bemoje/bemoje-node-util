/*!
 * @bemoje/node-util v0.0.1
 * (c) Benjamin Møller Jensen
 * Homepage: https://github.com/bemoje/bemoje-node-util
 * Released under the MIT License.
 */

import { sort } from 'timsort';
import date from 'date-and-time';
import Path from 'path';
import { split } from 'sentence-splitter';
import numberFormat from 'format-number';
import fs from 'fs';
import { Readable } from 'stream';

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
 * Returns a given comparator as an array compatible comparator. Behaves as if the array to sort was recursively flattened.
 * @param comparator compare function
 * @param descending whether the input comparator sorts in descending order
 */
function compareArray(comparator, descending = false) {
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
                const res = comparator(a, b);
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
 */
function compareNumber(a, b) {
    return a - b;
}

/**
 * Number comparator function (descending)
 * @param a first value to compare
 * @param b second value to compare
 */
function compareNumberDescending(a, b) {
    return b - a;
}

/**
 * number, bigint, boolean comparator function (ascending)
 * @param a first value to compare
 * @param b second value to compare
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

/**
 * Uses Array.prototype.sort but sorts numbers.
 * @param input - input array
 */
function arrSortNumeric(input) {
    return input.sort(compareNumeric);
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
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function isConstructor(value) {
    return (typeof value === 'function' &&
        'prototype' in value &&
        isPrototype(value.prototype) &&
        value === value.prototype.constructor);
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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function isIterable(o) {
    return (typeof Symbol !== 'undefined' &&
        Symbol &&
        'iterator' in Symbol &&
        o != null &&
        typeof o[Symbol.iterator] === 'function');
}

/**
 * Escapes a string so it can be used in a regular expression.
 */
function regexEscapeString(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

/**
 * Easily perform regex 'exec' on a string. An iterable is returned which steps through the exec process and yields all
 * the details you might need.
 * @param regex - The regular expression object
 * @param str - The string to perform the operation on
 * @example
 * ```js
 * const regex = /(?<group1>a)|(?<group2>d)/g
 * const str = 'Anthony wants a girlfriend.'
 * console.log([...rexec(regex, str)])
 * // [
 * // 	{
 * //     index: 9,
 * //     match: 'a',
 * //     groups: { g1: 'a', g2: undefined },
 * //     lastIndex: 10,
 * //   },
 * //   {
 * //     index: 14,
 * //     match: 'a',
 * //     groups: { g1: 'a', g2: undefined },
 * //     lastIndex: 15,
 * //   },
 * //   {
 * //     index: 25,
 * //     match: 'd',
 * //     groups: { g1: undefined, g2: 'd' },
 * //     lastIndex: 26,
 * //   },
 * // ]
 * ```
 */
function* rexec(regex, str) {
    let match;
    while ((match = regex.exec(str)) !== null) {
        yield {
            index: match.index,
            match: match[0],
            groups: Object.assign({}, match.groups),
            lastIndex: regex.lastIndex,
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
 * Returns a function that matches a string between two given strings or regexes.
 * @param left - string or regex to match before
 * @param right - string or regex to match after
 * @param flags - regex flags
 */
function regexMatchBetween(left, right, flags = '') {
    left = typeof left === 'string' ? regexEscapeString(left) : left.source;
    right = typeof right === 'string' ? regexEscapeString(right) : right.source;
    flags = `gms${flags.replace(/g|m|s/g, '')}`;
    const reLeft = new RegExp(`${left}`, flags);
    const reRight = new RegExp(`${right}`, flags);
    return function* (input) {
        const matchesRight = [...rexec(reRight, input)];
        const seen = new WeakSet();
        for (const left of rexec(reLeft, input)) {
            for (const right of matchesRight) {
                if (left.lastIndex > right.index || seen.has(right))
                    continue;
                seen.add(right);
                const mid = {
                    index: left.lastIndex,
                    match: input.substring(left.lastIndex, right.index),
                    groups: {},
                    lastIndex: right.index,
                };
                yield { left, mid, right };
                break;
            }
        }
    };
}
// const code = `
// import { regexEscapeString } from '../../regex'
// /**
//  * Inserts provided strings before and after a string.
//  * @param input - input string
//  * @param before - string to place before
//  * @param after - string to place after
//  * @example
//  */
// export function strUnwrap(input: string, before: string, after: string, caseSensitive = true): string {
//   const flags = caseSensitive ? '' : 'i'
//   return input
//     .replace(new RegExp('^' + regexEscapeString(before), flags), '')
//     .replace(new RegExp(regexEscapeString(after) + '$', flags), '')
// }
// /**
//  * asdasdsad
//  * @param input - input string
//  * @param before - string to place before
//  * @param after - string to place after
//  * @example
//  */
// `
// const left = '/**'
// const right = ' */'
// const matchBlockComment = regexMatchBetween(left, right)
// for (const match of matchBlockComment(code)) {
//   console.log(match)
// }

/**
 * Convert a regex for matching to a regex for validation.
 * @example ```js
 * const regexMatchDigits = /\d/g;
 * const regexIsDigit = regexMatcherToValidater(regexMatchDigits); //=> /^\d$/
 * const isDigit = (str) => regexIsDigit.test(str)
 * isDigit('1') //=> true
 * isDigit('a') //=> false
 * ```
 */
function regexMatcherToValidater(regex) {
    return new RegExp(`^${regex.source}$`, regex.flags.replace('g', ''));
}

/**
 * Matches 2 or more consecutive whitespace characters, including line terminators, tabs, etc.
 */
const regRepeatingWhiteSpace = /((\r?\r?\n)|\s|\t){2,}/g;
/**
 * Matches words in a string
 */
const regMatchWords = /\b[^\W]+/g;
/**
 * Matches Danish social security numbers with or without the dash.
 * Example: 151199-1512
 */
const regMatchSocialSecurityNumberDK = /(?<dd>[0-3][0-9])(?<mm>[0-1][0-9])(?<yy>[0-9]{2}).?(?<id>[0-9]{4})/g;
/**
 * Matches positive or negative integers.
 * Example: -20
 */
const regNumberInteger = /-?\d+/g;
/**
 * Matches inverted US format positive or negative decimal numbers with no thousand separators.
 * Example: -20412,3461
 */
const regNumberNoThousandSepEU = /-?\d+,\d+/g;
/**
 * Matches US format positive or negative decimal numbers with no thousand separators.
 * Example: -20412.3461
 */
const regNumberNoThousandSepUS = /-?\d+.\d+/g;
/**
 * Matches inverted US format positive or negative decimal numbers with thousand separators.
 * Example: -20.412,34
 */
const regNumberEUFormat = /-?\d{1,3}(\.\d{3})*(,\d+)?/g;
/**
 * Matches US format positive or negative decimal numbers with thousand separators.
 * Example: -20,412.34
 */
const regNumberUSFormat = /-?\d{1,3}(,\d{3})*(\.\d+)?/g;

const validators = [
    regNumberInteger,
    regNumberNoThousandSepEU,
    regNumberNoThousandSepUS,
    regNumberEUFormat,
    regNumberUSFormat,
].map((regex) => regexMatcherToValidater(regex));
/**
 * Checks if a string is a number.
 * @param str - input string
 */
function isNumericString(str) {
    str = str.trim();
    let n = Number(str);
    if (isNaN(n) || !isFinite(n)) {
        n = parseFloat(str);
    }
    return !isNaN(n) && isFinite(n) && validators.some((regex) => regex.test(str));
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
    for (const propertyName of propertyNames) {
        Object.defineProperty(object, propertyName, { enumerable: false });
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

// eslint-disable-next-line @typescript-eslint/ban-types
const hasCreatedFirstInstance = new Set();
/**
 * Abstract class that other classes can inherit from to gain various handy functionality.
 */
class Base {
    constructor() {
        this.onFirstInstance();
    }
    onFirstInstance() {
        if (!hasCreatedFirstInstance.has(this.constructor)) {
            hasCreatedFirstInstance.add(this.constructor);
            this.assertInterfaceStaticMembers('IRevivable', ['toJSON'], ['fromJSON']);
        }
    }
    assertInterfaceStaticMembers(interfaceName, requiredPropertyNames, requiredStaticProperties) {
        const found = new Set();
        for (const proto of iteratePrototypeChain(this)) {
            if (proto !== Object.prototype) {
                for (const key of requiredPropertyNames) {
                    if (Object.hasOwn(proto, key)) {
                        found.add(key);
                    }
                }
            }
        }
        const implementsInterface = found.size === requiredPropertyNames.length;
        if (implementsInterface) {
            for (const staticMember of requiredStaticProperties) {
                if (!Object.hasOwn(this.constructor, staticMember)) {
                    throw new Error(`Interface ${interfaceName} requires class ${this.constructor.name} to implement static member: ${staticMember}`);
                }
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

class SortedArray extends Array {
    constructor(options = {}) {
        super();
        this.compare = compareString;
        this.compareFound = false;
        this.allowDuplicates = true;
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

// const REGEX_VALID_A = /^[A-Z]+$/g;
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
    // if (REGEX_VALID_A.test(A)) throw new Error(`Invalid column letter: ${A}`);
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
            row.push(htmlCell.innerText.trim());
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

class Sudoku {
    constructor(sudoku, candidates, isGuess = false) {
        if (!isGuess) {
            if (sudoku.length !== 9)
                throw Error('Expected sudoku to be a 9x9 array of integers between 1 and 9.');
            for (const row of sudoku) {
                if (row.length !== 9)
                    throw Error('Expected sudoku to be a 9x9 array of integers between 1 and 9.');
                for (const cell of row) {
                    if (cell !== undefined && (!Number.isInteger(cell) || cell < 1 || cell > 9)) {
                        throw Error('Expected sudoku to be a 9x9 array of integers between 1 and 9.');
                    }
                }
            }
        }
        this.sudoku = [];
        for (let i = 0; i <= 8; i++) {
            this.sudoku[i] = sudoku[i].slice();
        }
        if (candidates) {
            this.candidates = candidates.map((row) => row.map((set) => new Set(set)));
        }
        else {
            this.candidates = [];
            for (let r = 0; r <= 8; r++) {
                this.candidates[r] = [];
                for (let c = 0; c <= 8; c++) {
                    if (this.sudoku[r][c] === undefined) {
                        this.candidates[r][c] = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
                    }
                    else {
                        this.candidates[r][c] = new Set([]);
                    }
                }
            }
        }
        this.isGuess = isGuess;
    }
    *itRow(r) {
        for (let c = 0; c <= 8; c++) {
            yield this.sudoku[r][c];
        }
    }
    *itRows() {
        for (let r = 0; r <= 8; r++) {
            yield this.itRow(r);
        }
    }
    *itCol(c) {
        for (let r = 0; r <= 8; r++) {
            yield this.sudoku[r][c];
        }
    }
    *itCols() {
        for (let c = 0; c <= 8; c++) {
            yield this.itCol(c);
        }
    }
    *itNonant(r, c) {
        const row = r < 3 ? 0 : r < 6 ? 3 : 6;
        const col = c < 3 ? 0 : c < 6 ? 3 : 6;
        for (let r = row; r < row + 3; r++) {
            for (let c = col; c < col + 3; c++) {
                yield this.sudoku[r][c];
            }
        }
    }
    *itNonants() {
        yield this.itNonant(0, 0);
        yield this.itNonant(0, 3);
        yield this.itNonant(0, 6);
        yield this.itNonant(3, 0);
        yield this.itNonant(3, 3);
        yield this.itNonant(3, 6);
        yield this.itNonant(6, 0);
        yield this.itNonant(6, 3);
        yield this.itNonant(6, 6);
    }
    *itAllSeries() {
        yield* this.itRows();
        yield* this.itCols();
        yield* this.itNonants();
    }
    isCompleteSeries(itSeries) {
        const seen = new Set();
        for (const v of itSeries) {
            if (v === undefined)
                return false;
            if (!seen.has(v)) {
                seen.add(v);
            }
            else {
                return false;
            }
        }
        return true;
    }
    isCompleteSudoku() {
        for (const itSeries of this.itAllSeries()) {
            if (!this.isCompleteSeries(itSeries)) {
                return false;
            }
        }
        return true;
    }
    solveAt(row, col) {
        if (this.sudoku[row][col] !== undefined)
            return false;
        const candidates = this.candidates[row][col];
        for (let i = 0; i <= 8; i++) {
            const v1 = this.sudoku[row][i];
            if (v1 !== undefined) {
                candidates.delete(v1);
            }
            const v2 = this.sudoku[i][col];
            if (v2 !== undefined) {
                candidates.delete(v2);
            }
        }
        for (const v of this.itNonant(row, col)) {
            if (v !== undefined) {
                candidates.delete(v);
            }
        }
        if (candidates.size === 1) {
            this.sudoku[row][col] = candidates.values().next().value;
            const v = this.sudoku[row][col];
            if (v !== undefined) {
                candidates.delete(v);
            }
            return true;
        }
        return false;
    }
    solve() {
        let foundAnswer = false;
        const tryAll = () => {
            for (let r = 0; r <= 8; r++) {
                for (let c = 0; c <= 8; c++) {
                    if (this.solveAt(r, c)) {
                        foundAnswer = true;
                    }
                }
            }
        };
        tryAll();
        tryAll();
        if (foundAnswer) {
            return this.solve();
        }
        else if (!this.isCompleteSudoku()) {
            for (let maxCandidates = 2; maxCandidates <= 9; maxCandidates++) {
                for (let r = 0; r <= 8; r++) {
                    for (let c = 0; c <= 8; c++) {
                        if (this.candidates[r][c].size === maxCandidates) {
                            const guess = this.candidates[r][c].values().next().value;
                            this.candidates[r][c].delete(guess);
                            const newSudoku = new Sudoku(this.sudoku, this.candidates, true);
                            newSudoku.sudoku[r][c] = guess;
                            newSudoku.candidates[r][c] = new Set();
                            const successful = newSudoku.solve();
                            if (successful) {
                                this.sudoku = newSudoku.sudoku;
                                this.candidates = newSudoku.candidates;
                            }
                            return this.solve();
                        }
                    }
                }
            }
            if (!this.isGuess) {
                this.print();
                throw Error('Sudoku is invalid and cannot be solved.');
            }
            return false;
        }
        else {
            return true;
        }
    }
    print() {
        console.log('-------------------');
        for (let r = 0; r <= 8; r++) {
            console.log('|' + this.sudoku[r].map((v) => (v === undefined ? ' ' : v)).join('|') + '|');
        }
        console.log('-------------------');
    }
}
function solveSudoku(sudoku) {
    const instance = new Sudoku(sudoku);
    instance.solve();
    return instance;
}

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
 * Returns an array of words in the string
 * @param input - input string
 * @example
 * ```js
 * strToWords('How are you?')
 * //=> ['How', 'are', 'you']
 * ```
 */
function strToWords(input) {
    return input.match(regMatchWords) || [];
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
// const str = 'hello'
// const wrapped = strWrapBetween(str, '(', ')')
// const unwrapped = strUnwrap(wrapped, '(', ')')
// console.log({ str, wrapped, unwrapped })

/**
 * Returns an array of words in the string
 * @param input - input string
 * @example
 * ```js
 * strSplitWordByCamelCase('someCamelCase')
 * //=> ['some', 'Camel', 'Case']
 * ```
 */
function strSplitWordByCamelCase(word) {
    function isCamelCaseWordBreakIndex(word, index) {
        return (strIsLowerCase(word[index - 1]) &&
            strIsUpperCase(word[index]) &&
            !isNumericString(word[index - 1]) &&
            !isNumericString(word[index]));
    }
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
 * Intelligently split a string into sentences. Uses AST parsing to determine sentence boundaries.
 * @param text Text to split into sentences
 */
function strToSentences(text) {
    return split(text)
        .map((node) => {
        const [start, end] = node.range;
        return text.substring(start, end).replace(regRepeatingWhiteSpace, ' ').trim();
    })
        .filter((s) => !!s);
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
 * Returns a given number of contatenations of a given input string.
 * @param input - input string
 * @param n - Number of repetitions of the input string
 */
function strRepeat(input, n) {
    return new Array(n).fill(input).join('');
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
            if (Path.extname(filepath) === ext) {
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
    return Path.join(process.cwd(), ...dirs);
}

/**
 * Takes a filepath and returns its utf8 contents as a single string.
 * @param path path to the file
 */
function readFileStringSync(path) {
    return fs.readFileSync(path, 'utf8').toString();
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
class StringStream extends Readable {
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
 * Extract birthdate (yyyy,mm,dd), four digit id and sex from a Danish social security number.
 * Assumes birth dates are at most 100 years in the past.
 * @param ssn - Danish social security number
 */
function parseSocialSecurityNumberDK(ssn) {
    const match = ssn.match(regexMatcherToValidater(regMatchSocialSecurityNumberDK));
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

export { A1ToColRow, Base, ExtensibleFunction, Matrix, Queue, SortedArray, StringStream, Table, Timer, arr2dToCSV, arrAssignFrom, arrEvery, arrFilterMutable, arrFlatten, arrFlattenMutable, arrIndicesOf, arrMapMutable, arrShallowEquals, arrShuffle, arrSome, arrSortNumeric, arrSwap, assertValidDate, assertValidDateDay, assertValidDateMonth, assertValidDateYear, asyncWithTimeout, bytesToInt, colRowToA1, colToLetter, compareArray, compareNumber, compareNumberDescending, compareNumeric, compareNumericDescending, compareString, compareStringDescending, createFileExtensionFilter, ensureValidWindowsPath, getCentury, getCurrentYear, htmlTableTo2dArray, intToBytes, isConstructor, isEven, isHex, isHexOrUnicode, isIterable, isLeapYear, isNumericString, isObject, isOdd, isPrototype, isSocialSecurityNumberDK, isValidDate, isValidDateDay, isValidDateMonth, isValidDateYear, iteratePrototypeChain, letterToCol, memoryUsage, memoryUsageEuFormat, memoryUsageUsFormat, normalizeFileExtension, normalizeLineLengths, numApproximateLog10, numDaysInMonth, numFormatEU, numFormatUS, parseSocialSecurityNumberDK, pathFromCwd, randomIntBetween, readFileStringSync, regMatchSocialSecurityNumberDK, regMatchWords, regNumberEUFormat, regNumberInteger, regNumberNoThousandSepEU, regNumberNoThousandSepUS, regNumberUSFormat, regRepeatingWhiteSpace, regexEscapeString, regexGetGroupNames, regexMatchBetween, regexMatcherToValidater, rexec, round, roundDown, roundUp, setEnumerable, setIntersection, setNonConfigurable, setNonEnumerable, setNonEnumerablePrivateProperties, setNonWritable, setUnion, setWritable, solveSudoku, strCountCharOccurances, strIsLowerCase, strIsUpperCase, strLinesRemoveEmpty, strLinesTrimLeft, strLinesTrimRight, strPrettifyMinifiedCode, strRepeat, strReplaceAll, strSplitWordByCamelCase, strToSentences, strToWords, strUnwrap, strWrapBetween, strWrapIn, strWrapInAngleBrackets, strWrapInBraces, strWrapInBrackets, strWrapInDoubleQuotes, strWrapInParenthesis, strWrapInSingleQuotes, streamToString };
//# sourceMappingURL=index.esm.js.map
