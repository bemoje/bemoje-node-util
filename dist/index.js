/*!
 * @bemoje/node-util v0.3.0
 * (c) Benjamin Møller Jensen
 * Homepage: https://github.com/bemoje/bemoje-node-util
 * Released under the MIT License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var level = require('level');
var EventEmitter = require('events');
var hash = require('object-hash');
var mkdirp = require('mkdirp');
var getAppDataPath = require('appdata-path');
var path = require('path');
var cliColor = require('cli-color');
var titleCase = require('title-case');
var fs = require('fs');
var asyncRetry = require('async-retry');
var openai = require('openai');
var gpt3Encoder = require('gpt-3-encoder');
var deepAssign = require('deep-assign');
var excelJs = require('exceljs');
var esprima = require('esprima');
var crypto = require('crypto');
var util = require('util');
var child_process = require('child_process');
var stream = require('stream');
var pdf = require('pdf-parse');
var pdfLib = require('pdf-lib');
var lodash = require('lodash');
var sentenceSplitter = require('sentence-splitter');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var EventEmitter__default = /*#__PURE__*/_interopDefaultLegacy(EventEmitter);
var hash__default = /*#__PURE__*/_interopDefaultLegacy(hash);
var getAppDataPath__default = /*#__PURE__*/_interopDefaultLegacy(getAppDataPath);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var asyncRetry__default = /*#__PURE__*/_interopDefaultLegacy(asyncRetry);
var deepAssign__default = /*#__PURE__*/_interopDefaultLegacy(deepAssign);
var excelJs__default = /*#__PURE__*/_interopDefaultLegacy(excelJs);
var pdf__default = /*#__PURE__*/_interopDefaultLegacy(pdf);

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

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

/**
 * Create a directory at a given path if it does not exist.
 * Automatically creates parent directories if they do not exist.
 * @param dirpath The path where the directory should be created.
 * @remarks This function uses the `mkdirpSync` function from the `mkdirp` library to create a directory at the specified path.
 * @returns The path of the directory.
 * @example ```ts
 * createDirectorySync('/path/to/directory')
 * ```
 */
function createDirectorySync(dirpath) {
    mkdirp.mkdirpSync(dirpath);
    return dirpath;
}

/**
 * Returns the constructor of the given object.
 * @template T - The type of the object.
 * @param o The object whose constructor is to be returned.
 * @returns The constructor of the object.
 * @example ```ts
 * class MyClass {}
 * getConstructor(new MyClass()) === MyClass;;
 * //=> true
 * ```
 */
function getConstructor(o) {
    return Object.getPrototypeOf(o).constructor;
}

/**
 * Repeats the given string `n` times.
 * @param input The string to repeat.
 * @param n The number of times to repeat the string.
 * @example ```ts
 * strRepeat('abc', 3);;
 * //=> 'abcabcabc'
 * ```
 */
function strRepeat(input, n) {
    return new Array(n).fill(input).join('');
}

/**
 * A simple logging utility.
 */
class log {
    /**
     * Logs a (cyan) message the console.
     */
    static info(message, depth) {
        this.logToConsole('INFO', message, cliColor.magenta, cliColor.green, cliColor.cyan, depth);
        return message;
    }
    /**
     * Logs a (yellow) warning message to the console.
     */
    static warn(message) {
        this.logToConsole('WARN', message, cliColor.magenta, cliColor.yellow, cliColor.yellow);
        return message;
    }
    /**
     * Logs a (red) error message to the console.
     */
    static error(error) {
        const strError = JSON.stringify(error, null, 2);
        this.logToConsole('ERROR', cliColor.bold(error), cliColor.magenta, cliColor.red, cliColor.red);
        console.error(cliColor.red(strError));
        return JSON.parse(strError);
    }
    /**
     * Wrap an async function as a task, logging the start and end of the task.
     */
    static task(description, task) {
        return __awaiter(this, void 0, void 0, function* () {
            this.info(`Began: ${description}.`);
            const t0 = Date.now();
            const returnValue = yield task();
            this.info(`Ended: ${description}. (${((Date.now() - t0) / 1000).toString()} seconds)`);
            return returnValue;
        });
    }
    /**
     * Wrap a synchronous function as a task, logging the start and end of the task.
     */
    static taskSync(description, task) {
        this.info(`Began: ${description}.`);
        const t0 = Date.now();
        const returnValue = task();
        this.info(`Ended: ${description}. (${((Date.now() - t0) / 1000).toString()} seconds)`);
        return returnValue;
    }
    /**
     * Clears the console by printing a number of blank lines.
     */
    static clear(numLines = 10) {
        console.log(strRepeat('\n', numLines));
    }
    /**
     * Prints a light dotted line to the console.
     */
    static line(numLines = 1) {
        const string = cliColor.blackBright(strRepeat('-', 80));
        for (let i = 0; i < numLines; i++) {
            console.log(string);
        }
        console.log('\n\n');
    }
    /**
     * Generic function for logging to console, used by the log-level specific functions.
     */
    static logToConsole(level, message, timestampColor, levelColor, outputColor, depth) {
        timestampColor(new Date().toISOString());
        const lvl = levelColor(level);
        const clog = lvl === 'ERROR' ? console.error : console.log;
        if (typeof message === 'object') {
            // clog(`${ts} [${lvl}]:`)
            clog(`[${lvl}]:`);
            console.dir(message, { depth });
        }
        else {
            let _message = message + '';
            if (/^.+:/.test(_message) && _message.includes('\n')) {
                const arr = _message.split('\n');
                _message = outputColor(arr[0]) + '\n' + cliColor.bold(cliColor.blue(arr.slice(1).join('\n')));
            }
            else {
                _message = outputColor(_message);
            }
            // clog(`${ts} [${lvl}]: ${_message + ''}`)
            clog(`[${lvl}]: ${_message + ''}`);
        }
    }
}

/**
 * This function is used to print the events emitted by an EventEmitter. It takes three parameters: the instance of the class, the EventEmitter, and an object containing arrays of event names categorized by log levels (info, warn, error).
 * @remarks This function is useful for debugging purposes, as it allows you to see what events are being emitted by an EventEmitter at runtime.
 * @param self The instance of the class that the EventEmitter belongs to.
 * @param emitter The EventEmitter that is emitting the events.
 * @param eventLogLevels An object containing arrays of event names categorized by log levels (info, warn, error).
 * @typeparam T - The type of the instance of the class that the EventEmitter belongs to.
 * @returns void
 * @example ```ts
 * new EventEmitter();
 * new MyClass();
 * printEmitterEvents(new MyClass(), new EventEmitter(), {
 *   info: ['event1', 'event2'],
 *   warn: ['event3', 'event4'],
 *   error: ['event5', 'event6']
 * });;
 * //=> {result}
 * ```
 */
function _printEmitterEvents(self, emitter, eventLogLevels) {
    const className = getConstructor(self).name;
    for (const event of eventLogLevels.info || []) {
        emitter.on(event, (arg) => {
            const _event = className + '.' + event.toString() + ': ';
            if (typeof arg === 'object') {
                log.info(_event);
                console.dir(arg, { depth: null });
            }
            log.info(_event + arg);
        });
    }
    for (const event of eventLogLevels.warn || []) {
        emitter.on(event, (arg) => {
            const _event = className + '.' + event.toString() + ': ';
            if (typeof arg === 'object') {
                log.warn(_event);
                console.dir(arg, { depth: null });
            }
            log.warn(_event + arg);
        });
    }
    for (const event of eventLogLevels.error || ['error']) {
        emitter.on(event, (arg) => {
            log.error(arg);
        });
    }
}

/**
 * Persistent API response cache based on level-db.
 */
class ApiReponseCache {
    /**
     * Create a new instance.
     */
    constructor(options) {
        /**
         * Event emitter for cache events
         */
        this.events = new EventEmitter__default["default"]();
        const _options = Object.assign({}, ApiReponseCache.optionsDefaults, options);
        const { name, dirpath, maxAgeMs, logAllEvents } = _options;
        if (logAllEvents)
            this.logAllEvents();
        this.emit('options', _options);
        this.maxAgeMs = maxAgeMs;
        this.db = new level.Level(createDirectorySync(path__default["default"].join(dirpath, name)));
    }
    /**
     * Hash any type of key.
     */
    hashKey(key) {
        return hash__default["default"](key === undefined ? 'undefined' : key, { algorithm: 'sha1', encoding: 'base64' });
    }
    /**
     * Get a value for a given hash key if it exists. Otherwise, get retrive a value with a given function and then store that value in the cache.
     * @param apiRequest - function that returns a new value for a given key if it doesn't exist in the cache.
     */
    getOrElse(hash, apiRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const value = yield this.get(hash);
                this.emit('hit', hash);
                return value;
            }
            catch (e) {
                this.emit('miss', hash);
                const value = yield apiRequest();
                return yield this.put(hash, value);
            }
        });
    }
    /**
     * Get a value for a given hash key.
     * @throws if the value does not exist for the give hash.
     */
    get(hash) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.orThrow(() => __awaiter(this, void 0, void 0, function* () {
                const serialized = yield this.db.get(hash);
                yield this.ensureNotExpired(hash, serialized);
                this.emit('get', hash);
                return this.parseSerializedValue(serialized);
            }));
        });
    }
    /**
     * Get a value for a given hash key.
     */
    getSafe(hash) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const serialized = yield this.db.get(hash);
                yield this.ensureNotExpired(hash, serialized);
                this.emit('get', hash);
                return this.parseSerializedValue(serialized);
            }
            catch (error) {
                return undefined;
            }
        });
    }
    /**
     * Returns whether a value exists for a given key.
     */
    has(hash) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.db.get(hash);
                return true;
            }
            catch (e) {
                return false;
            }
        });
    }
    /**
     * Set a given value for a given hash key.
     */
    put(hash, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.orThrow(() => __awaiter(this, void 0, void 0, function* () {
                const serialized = this.serializeValue(value);
                yield this.db.put(hash, serialized);
                this.emit('put', hash);
                return value;
            }));
        });
    }
    /**
     * Delete a given value for a given hash key.
     * @throws if the value does not exist for the give hash.
     */
    delete(hash) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.orThrow(() => __awaiter(this, void 0, void 0, function* () {
                yield this.db.del(hash);
                this.emit('delete', hash);
            }));
        });
    }
    /**
     * Delete a given value for a given hash key.
     */
    deleteSafe(hash) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.db.del(hash);
                this.emit('delete', hash);
                return true;
            }
            catch (e) {
                return false;
            }
        });
    }
    /**
     * Delete all expired data.
     */
    deleteExpired() {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                for (var _d = true, _e = __asyncValues(this.entries()), _f; _f = yield _e.next(), _a = _f.done, !_a;) {
                    _c = _f.value;
                    _d = false;
                    try {
                        const _ = _c;
                    }
                    finally {
                        _d = true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = _e.return)) yield _b.call(_e);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return this;
        });
    }
    /**
     * Delete all cached API responses.
     */
    deleteEverything() {
        return __awaiter(this, void 0, void 0, function* () {
            this.orThrow(() => __awaiter(this, void 0, void 0, function* () {
                yield this.db.clear();
                this.emit('delete', 'All cache data was deleted.');
            }));
        });
    }
    /**
     * Iterate over all [key, value] pairs in the cache.
     */
    entries() {
        return __asyncGenerator(this, arguments, function* entries_1() {
            var _a, e_2, _b, _c;
            try {
                try {
                    for (var _d = true, _e = __asyncValues(this.db.iterator()), _f; _f = yield __await(_e.next()), _a = _f.done, !_a;) {
                        _c = _f.value;
                        _d = false;
                        try {
                            const [hash, serialized] = _c;
                            if (this.isExpired(serialized)) {
                                this.db.del(hash).then(() => this.emit('expired', hash));
                            }
                            yield yield __await([hash, this.parseSerializedValue(serialized)]);
                        }
                        finally {
                            _d = true;
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (!_d && !_a && (_b = _e.return)) yield __await(_b.call(_e));
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            catch (error) {
                throw this.emit('error', error);
            }
        });
    }
    /**
     * Iterate over all keys in the cache.
     */
    keys() {
        return __asyncGenerator(this, arguments, function* keys_1() {
            var _a, e_3, _b, _c;
            try {
                try {
                    for (var _d = true, _e = __asyncValues(this.entries()), _f; _f = yield __await(_e.next()), _a = _f.done, !_a;) {
                        _c = _f.value;
                        _d = false;
                        try {
                            const [hash] = _c;
                            yield yield __await(hash);
                        }
                        finally {
                            _d = true;
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (!_d && !_a && (_b = _e.return)) yield __await(_b.call(_e));
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
            catch (error) {
                throw this.emit('error', error);
            }
        });
    }
    /**
     * Iterate over all values in the cache.
     */
    values() {
        return __asyncGenerator(this, arguments, function* values_1() {
            var _a, e_4, _b, _c;
            try {
                try {
                    for (var _d = true, _e = __asyncValues(this.entries()), _f; _f = yield __await(_e.next()), _a = _f.done, !_a;) {
                        _c = _f.value;
                        _d = false;
                        try {
                            const [_, value] = _c;
                            yield yield __await(value);
                        }
                        finally {
                            _d = true;
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (!_d && !_a && (_b = _e.return)) yield __await(_b.call(_e));
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
            catch (error) {
                throw this.emit('error', error);
            }
        });
    }
    /**
     * Get the number of entries in the cache.
     */
    size() {
        var _a, e_5, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let size = 0;
            try {
                for (var _d = true, _e = __asyncValues(this.entries()), _f; _f = yield _e.next(), _a = _f.done, !_a;) {
                    _c = _f.value;
                    _d = false;
                    try {
                        const _ = _c;
                        size++;
                    }
                    finally {
                        _d = true;
                    }
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = _e.return)) yield _b.call(_e);
                }
                finally { if (e_5) throw e_5.error; }
            }
            return size;
        });
    }
    /**
     * Output all events to the console.
     */
    logAllEvents() {
        _printEmitterEvents(this, this.events, {
            info: ['options', 'hit', 'miss', 'put', 'get'],
            warn: ['expired', 'delete'],
            error: ['error'],
        });
    }
    /**
     * Deletes a value from the cache if it is expired.
     */
    ensureNotExpired(hash, serialized) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isExpired(serialized)) {
                yield this.db.del(hash);
                this.emit('expired', hash);
                throw new Error('Expired');
            }
        });
    }
    /**
     * Check if a still raw serialized value string is expired.
     */
    isExpired(serialized) {
        if (!this.maxAgeMs)
            return false;
        return Date.now() - this.parseSerializedTimestamp(serialized) > this.maxAgeMs;
    }
    /**
     * Custom JSON stringify function that prepends a timestamp to the stringified object.
     */
    serializeValue(value) {
        return Date.now() + JSON.stringify(value);
    }
    /**
     * Parse the timestamp part of a raw serialized value string from the database.
     */
    parseSerializedTimestamp(serialized) {
        return parseInt(serialized.substring(0, 13));
    }
    /**
     * Parse the json part of a raw serialized value string from the database.
     */
    parseSerializedValue(serialized) {
        return JSON.parse(serialized.substring(13));
    }
    /**
     * Shorthand for try/catch block with error-handling
     * Wrap a function in a try catch block and emit an error event if an error occurs.
     */
    orThrow(fn) {
        try {
            return fn();
        }
        catch (error) {
            throw this.emit('error', error);
        }
    }
    /**
     * Emit an event but this automatically adds 'this' as an extra argument.
     */
    emit(eventName, arg) {
        this.events.emit(eventName, arg, this);
        return arg;
    }
}
/**
 * Default options for creating new instances
 */
ApiReponseCache.optionsDefaults = {
    name: 'default',
    dirpath: getAppDataPath__default["default"]('ApiReponseCache'),
    maxAgeMs: 0,
    logAllEvents: false,
};

/**
 * Checks if the provided value is a valid number.
 * @remarks This function checks if the provided value is a finite number and not NaN.
 * @param number The value to check.
 * @returns A boolean indicating whether the provided value is a valid number.
 * @example ```ts
 * isValidNumber(123);
 * //=> true
 * isValidNumber(NaN);
 * //=> false
 * isValidNumber(Infinity);
 * //=> false
 * ```
 */
function isValidNumber(number) {
    return isFinite(number) && !isNaN(number);
}

/**
 * Asserts that the provided value is a valid number. If the value is not a valid number, it throws a TypeError.
 * A valid number is a finite number and not NaN.
 * @param number The number to be validated.
 * @returns Returns the validated number if it is valid.
 * @throws Throws an error if the provided number is not valid.
 * @example ```ts
 * assertValidNumber(5);;
 * //=> 5
 * assertValidNumber(NaN);;
 * //=> throws TypeError
 * ```
 */
function assertValidNumber(number) {
    if (isValidNumber(number))
        return number;
    throw new TypeError('Expected number to be finite and not NaN. Got: ' + number);
}

/**
 * Round a given number with a given precision and rounding function.
 * Shifts with exponential notation to avoid floating-point issues.
 * @param number the number to round.
 * @param precision the number of decimal points.
 * @param func the rounding function to use.
 * @returns The rounded number.
 * @throws if the given number is not finite or NaN.
 * @example ```ts
 * roundWith(1.2345, 2);;
 * //=> 1.23
 * roundWith(1.2345, 2, Math.ceil);;
 * //=> 1.24
 * ```
 */
function roundWith(number, precision, func = Math.round) {
    const pair1 = (assertValidNumber(number) + 'e').split('e');
    const pair2 = (func(+(pair1[0] + 'e' + (+pair1[1] + precision))) + 'e').split('e');
    return +(pair2[0] + 'e' + (+pair2[1] - precision));
}

/**
 * Round a given number with a given precision.
 * Shifts with exponential notation to avoid floating-point issues.
 * @param number the number to round.
 * @param precision the number of decimal points.
 * @param - The number of decimal places to round to. Defaults to 0 if not specified.
 * @returns The rounded number.
 * @throws if the given number is not finite or NaN.
 * @example ```ts
 * round(1.2345, 2);;
 * //=> 1.23
 * round(1.2345);;
 * //=> 1
 * ```
 */
function round(number, precision = 0) {
    return roundWith(number, precision, Math.round);
}

/**
 * For monitoring openai api token usage.
 */
class OpenaiTokenUsage {
    constructor() {
        this.events = new EventEmitter__default["default"]();
        this.usage = {
            completion: { in: { tokens: 0, USD: 0 }, out: { tokens: 0, USD: 0 } },
            chat: { in: { tokens: 0, USD: 0 }, out: { tokens: 0, USD: 0 } },
            chat16k: { in: { tokens: 0, USD: 0 }, out: { tokens: 0, USD: 0 } },
            editText: { in: { tokens: 0, USD: 0 }, out: { tokens: 0, USD: 0 } },
            editCode: { in: { tokens: 0, USD: 0 }, out: { tokens: 0, USD: 0 } },
        };
        this.total = { total_tokens: 0, total_USD: 0 };
    }
    /**
     * Submit usage data from an openai api response.
     */
    submit(endpoint, data) {
        const usage = data.usage;
        const { prompt_tokens, completion_tokens } = usage;
        const prices = OpenaiTokenUsage.prices[endpoint];
        const stats = this.usage[endpoint];
        const total = this.total;
        stats.in.tokens += prompt_tokens;
        stats.out.tokens += completion_tokens;
        stats.in.USD = round(stats.in.USD + prompt_tokens * prices.in, 7);
        stats.out.USD = round(stats.out.USD + completion_tokens * prices.out, 7);
        total.total_tokens += prompt_tokens + completion_tokens;
        total.total_USD = round(total.total_USD + (prompt_tokens * prices.in + completion_tokens * prices.out), 7);
        this.events.emit('usage', usage, this);
        this.events.emit('total', this.total, this);
    }
}
OpenaiTokenUsage.prices = {
    completion: { in: 0.00002, out: 0.00002 },
    chat: { in: 0.0000015, out: 0.000002 },
    chat16k: { in: 0.000003, out: 0.000004 },
    editText: { in: 0, out: 0 },
    editCode: { in: 0, out: 0 },
};

/**
 * Sets the specified properties of an object as non-enumerable.
 * @remarks This function modifies the original object by setting the specified properties as non-enumerable.
 * If the object or any of the property names are not valid, it throws an error.
 * @param object The object whose properties are to be set as non-enumerable.
 * @param propertyNames The names of the properties to be set as non-enumerable.
 * @throws Will throw an error if the first argument is not an object.
 * @throws Will throw an error if any of the specified properties do not exist on the object.
 * @throws Will throw an error if any of the specified properties do not have a descriptor.
 * @example ```ts
 * setNonEnumerable({ a: 1, b: 2, c: 3 }, 'a', 'b');
 * Object.keys({ a: 1, b: 2, c: 3 });;
 * //=> ['c']
 * ```
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
 * Merges two objects deeply, returning a new object that has the combined properties of both.
 * If a property exists in both objects, the value from the source object will be used.
 * @template T - The type of the target object.
 * @template U - The type of the source object.
 * @param target The target object to which properties will be added.
 * @param source The source object from which properties will be copied.
 * @returns A new object that has the combined properties of both the target and source objects.
 * @example ```ts
 * objAssignDeep({ a: 1, b: 2 }, { b: 3, c: 4 });;
 * //=> { a: 1, b: 3, c: 4 }
 * ```
 */
function objAssignDeep(target, source) {
    return deepAssign__default["default"](target, source);
}

/**
 * Deletes the specified keys from an object in a mutable way.
 * @param obj The object from which to delete the keys.
 * @returns The modified object with the specified keys deleted.
 * @typeparam V - The type of the values in the object.
 * @param keys The keys to delete from the object.
 * @example ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * objDeleteKeysMutable(obj, 'a', 'c');
 * //=> { b: 2 }
 * ```
 */
function objDeleteKeysMutable(obj, ...keys) {
    for (const key of keys) {
        Reflect.deleteProperty(obj, key);
    }
    return obj;
}

/**
 * Filters the properties of an object based on a callback function.
 * @param object The object to filter.
 * @param callback The callback function used to filter the object properties.
 * @template T - The type of the values in the object.
 * @param - The function to get the keys of the object. Defaults to `Object.keys`.
 * @returns A new object with the properties that passed the test. If no properties passed the test, an empty object will be returned.
 * @param getKeys The function used to get the keys of the object.
 * @example ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * objFilter(obj, (value, key) => value > 1);
 * //=> { b: 2, c: 3 }
 * ```
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
 * Deletes specified keys from an object. This function takes an object and an array of keys to be deleted from the object. It returns a new object with the specified keys removed.
 * @param obj The object from which keys are to be deleted.
 * @template V - The type of the values in the object.
 * @returns A new object with the specified keys deleted.
 * @param keys The keys to be deleted from the object.
 * @example ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * objDeleteKeys(obj, 'a', 'c');
 * //=> { b: 2 }
 * ```
 */
function objDeleteKeys(obj, ...keys) {
    return objFilter(obj, (_, key) => !keys.includes(key));
}

class OpenaiApiClientBase {
    handleOptions(options) {
        if (!options.cacheInit)
            options.cacheInit = {};
        if (!options.cacheInit.name)
            options.cacheInit.name = 'OpenaiApiClient';
        if (options.logAllEvents && options.cacheInit.logAllEvents === undefined) {
            options.cacheInit.logAllEvents = true;
        }
        if (!options.apiKey)
            options.apiKey = this.getDefaultApiKey();
        if (options.logAllEvents)
            this.logAllEvents();
        this.emit('options', options);
        objAssignDeep(this, objDeleteKeys(options, 'cacheInit', 'logAllEvents', 'apiKey'));
        return options;
    }
    /**
     * Create a new OpenaiApiClient instance.
     */
    constructor(options = {}) {
        // Event emitter for cache events
        this.events = new EventEmitter__default["default"]();
        // OpenAI API token usage statistics
        this.usage = new OpenaiTokenUsage();
        // Defaults for API requests. Can be overriden in individual method calls.
        this.apiDefaults = {
            completionModel: 'text-davinci-003',
            chat3_8Model: 'gpt-3.5-turbo',
            chat3_16Model: 'gpt-3.5-turbo-16k',
            chat4_8Model: 'gpt-4',
            editTextModel: 'text-davinci-edit-001',
            editCodeModel: 'code-davinci-edit-001',
            choicesDelimiter: '\n---------------\n',
        };
        // Options for async-retry
        this.retryDefaults = {
            retries: 3,
            onRetry: (error) => this.emit('retry', error),
        };
        // Options for whether to overwrite existing cached data by default for api requests
        this.cacheDefaults = {
            overwrite: false,
        };
        options = this.handleOptions(options);
        this.client = new openai.OpenAIApi(new openai.Configuration({ apiKey: options.apiKey }));
        this.cache = new ApiReponseCache(options.cacheInit);
        setNonEnumerable(this, 'client');
        this.emit('ready', void 0);
    }
    /**
     * Send a completion request to the openai api.
     */
    completion(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._completion(...this.handleCompletionOptions(options));
        });
    }
    /**
     * Send a chat completion request to the openai api with a max_tokens cap of 4096.
     * Uses model: 'gpt-3.5-turbo'.
     */
    chat3_8(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._chat(...this.handleChatOptions(options));
        });
    }
    /**
     * Send a chat completion request to the openai api with a max_tokens cap of 16384.
     * Uses model: 'gpt-3.5-turbo-16k'.
     */
    chat3_16(options) {
        return __awaiter(this, void 0, void 0, function* () {
            options.model = 'gpt-3.5-turbo-16k';
            return yield this._chat(...this.handleChatOptions(options));
        });
    }
    /**
     * Send a gpt4 chat completion request to the openai api with a max_tokens cap of 8k.
     * Uses model: 'gpt-4'.
     */
    chat4_8(options) {
        return __awaiter(this, void 0, void 0, function* () {
            options.model = 'gpt-4';
            return yield this._chat(...this.handleChatOptions(options));
        });
    }
    /**
     * Edit text.
     */
    editText(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._edit(...this.handleEditOptions(options));
        });
    }
    /**
     * Edit code.
     */
    editCode(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!options.model)
                options.model = this.apiDefaults.editCodeModel;
            return yield this._edit(...this.handleEditOptions(options));
        });
    }
    /**
     * Encode a string into tokens.
     */
    stringTokens(string) {
        return gpt3Encoder.encode(string);
    }
    /**
     * Count the number of tokens in a string.
     */
    countTokens(string) {
        return gpt3Encoder.encode(string).length;
    }
    handleCompletionOptions(options) {
        options = this.deleteDefaultOrUndefined(options, {
            presence_penalty: 0,
            frequency_penalty: 0,
            best_of: 1,
        });
        if (!options.model)
            options.model = this.apiDefaults.completionModel;
        if (options.instruction)
            options.prompt = options.instruction + '\n\n' + options.prompt;
        if (!options.max_tokens) {
            const count = this.countTokens(options.prompt);
            if (options.response_max_tokens) {
                options.max_tokens = count + options.response_max_tokens;
            }
            else {
                options.max_tokens = 4096 - count;
            }
        }
        options = objDeleteKeysMutable(options, 'retry', 'cache', 'instruction', 'response_max_tokens');
        const request = options;
        const retry = this.handleRetryOptions(options.retry);
        const cache = this.handleCacheOptions(options.cache);
        return this.emit('request', [request, retry, cache]);
    }
    handleChatOptions(options) {
        options = this.deleteDefaultOrUndefined(options, {
            presence_penalty: 0,
            frequency_penalty: 0,
        });
        const retry = this.handleRetryOptions(options.retry);
        const cache = this.handleCacheOptions(options.cache);
        const model = this.apiDefaults.chat3_8Model;
        const messages = [];
        if (options.instruction)
            messages.push({ role: 'system', content: options.instruction });
        if (options.prompt)
            messages.push({ role: 'user', content: options.prompt });
        if (options.messages)
            messages.push(...options.messages);
        if (!messages.length)
            messages.push({ role: 'user', content: '' });
        options = objDeleteKeysMutable(options, 'prompt', 'instruction', 'retry', 'cache');
        const request = Object.assign(Object.assign({ model }, options), { messages });
        return this.emit('request', [request, retry, cache]);
    }
    handleEditOptions(options) {
        options = this.deleteDefaultOrUndefined(options, {});
        const retry = this.handleRetryOptions(options.retry);
        const cache = this.handleCacheOptions(options.cache);
        const model = this.apiDefaults.editTextModel;
        const input = options.prompt;
        const instruction = options.instruction;
        const _options = objDeleteKeysMutable(options, 'prompt', 'retry', 'cache');
        const request = Object.assign(Object.assign({ model }, _options), { instruction,
            input });
        return this.emit('request', [request, retry, cache]);
    }
    handleRetryOptions(retryOptions) {
        if (retryOptions === null || retryOptions === void 0 ? void 0 : retryOptions.onRetry) {
            const onRetry = retryOptions.onRetry;
            retryOptions.onRetry = (error, attempt) => {
                this.emit('retry', error);
                onRetry(error, attempt);
            };
        }
        return retryOptions ? Object.assign({}, this.retryDefaults, retryOptions) : this.retryDefaults;
    }
    handleCacheOptions(cacheOptions) {
        return cacheOptions ? Object.assign({}, this.cacheDefaults, cacheOptions) : this.cacheDefaults;
    }
    _completion(request, retry, cache) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._apiRequest(request, retry, cache, () => __awaiter(this, void 0, void 0, function* () {
                const { data } = yield this.client.createCompletion(request);
                this.usage.submit('completion', data);
                this.assertReponseDataComplete(data);
                return this.parseChoices(data.choices);
            }));
        });
    }
    _chat(request, retry, cache) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._apiRequest(request, retry, cache, () => __awaiter(this, void 0, void 0, function* () {
                const { data } = yield this.client.createChatCompletion(request);
                this.usage.submit(request.model.endsWith('16k') ? 'chat16k' : 'chat', data);
                this.assertReponseDataComplete(data);
                return this.parseChoices(data.choices);
            }));
        });
    }
    _edit(request, retry, cache) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._apiRequest(request, retry, cache, () => __awaiter(this, void 0, void 0, function* () {
                const { data } = yield this.client.createEdit(request);
                this.usage.submit(request.model.startsWith('text') ? 'editText' : 'editCode', data);
                return this.parseChoices(data.choices);
            }));
        });
    }
    /**
     * Generic function for sending requests to the openai api.
     * This is used for all the API endpoints.
     * It handles retrying, cache, hashing, and emitting events.
     */
    _apiRequest(request, retry, cache, apiRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const hash = this.cache.hashKey(request);
            const results = yield asyncRetry__default["default"](() => __awaiter(this, void 0, void 0, function* () {
                if (cache.overwrite)
                    yield this.cache.deleteSafe(hash);
                return yield this.cache.getOrElse(hash, apiRequest);
            }), retry);
            return this.emit('response', results.join(this.apiDefaults.choicesDelimiter));
        });
    }
    parseChoices(choices) {
        return choices.map((choice) => {
            if (Reflect.has(choice, 'text')) {
                return Reflect.get(choice, 'text').trim();
            }
            else if (Reflect.has(choice, 'message')) {
                return Reflect.get(choice, 'message').content.trim();
            }
        });
    }
    deleteDefaultOrUndefined(options, defaults = {}) {
        options = Object.assign({}, options);
        defaults.temperature = 1;
        defaults.top_p = 1;
        defaults.n = 1;
        for (const [key, value] of Object.entries(defaults)) {
            if (Reflect.get(options, key) === value) {
                Reflect.deleteProperty(options, key);
            }
        }
        for (const [key, value] of Object.entries(options)) {
            if (!value && value !== 0) {
                Reflect.deleteProperty(options, key);
            }
        }
        return options;
    }
    /**
     * Assert that the response data is complete by verifying that all returned choices have finish_reason: stop.
     */
    assertReponseDataComplete(data) {
        for (const choice of data.choices) {
            if (choice.finish_reason !== 'stop') {
                this.emit('error', 'Expected finish_reason to be: stop. Got: ' + choice.finish_reason);
            }
        }
    }
    getDefaultApiKey() {
        try {
            const filepath = path__default["default"].join(process.env.USERPROFILE || '', 'repos', 'apikeys', 'openai.txt');
            return fs__default["default"].existsSync(filepath) ? fs__default["default"].readFileSync(filepath).toString() : '';
        }
        catch (error) {
            return '';
        }
    }
    /**
     * Emit an event but adds 'this' as an extra trailing argument.
     */
    emit(event, arg) {
        this.events.emit(event, arg, this);
        return arg;
    }
    /**
     * console.log all emitted events
     * @returns this (chainable)
     */
    logAllEvents() {
        log.line(3);
        _printEmitterEvents(this, this.events, {
            info: ['options', 'ready', 'request', 'response'],
            error: ['error', 'retry'],
        });
        _printEmitterEvents(this.usage, this.usage.events, {
            info: ['usage', 'total'],
            error: ['error'],
        });
        return this;
    }
}

class OpenaiApiClient extends OpenaiApiClientBase {
    /**
     * Create a new OpenAiApiClient instance.
     * @example
     * ```ts
     * const openai = new OpenaiAPIClient({ apiKey: "API_KEY" })
     * ```
     */
    constructor(options = {}) {
        super(options);
    }
    /**
     * Proofread in a given language.
     * @param language The language of the input.
     * @param prompt The input string.
     * @example ```ts
     * await openai.proofread('english', 'I no have more money.')
     * await openai.proofread('java', `System.out.println("Hello")`)
     * ```
     */
    proofread(language, prompt, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            options.instruction =
                (options.instruction ? options.instruction + '\n\n' : '') +
                    `Proofread and correct ${titleCase.titleCase(language)}.\n\nRespond the corrected version.`;
            return yield this.chat3_8(Object.assign(Object.assign({ temperature: 0 }, options), { prompt }));
        });
    }
    /**
     * Proofread in English.
     * @param prompt The input string.
     * @example ```ts
     * await openai.proofread('english', 'I no have more money.')
     * await openai.proofread('java', `System.out.println("Hello")`)
     * ```
     */
    proofreadEnglish(prompt, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            options.instruction =
                (options.instruction ? options.instruction + '\n\n' : '') +
                    'Proofread and correct English.\n\nRespond the corrected version.';
            return yield this.chat3_8(Object.assign(Object.assign({ temperature: 0 }, options), { prompt }));
        });
    }
    /**
     * Translate text from one language to another.
     * For short input text, use options.instruction to provide context.
     * @param prompt The text to translate.
     * @example ```ts
     * await openai.translateFrom('English', 'Spanish', 'Clear', { instruction: 'This is a color.' })
     * ```
     */
    translateFrom(fromLanguage, toLanguage, prompt, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            options.instruction =
                (options.instruction ? options.instruction + '\n\n' : '') +
                    `Translate from ${titleCase.titleCase(fromLanguage)} to ${titleCase.titleCase(toLanguage)}.`;
            return yield this.chat3_8(Object.assign(Object.assign({ temperature: 0.3 }, options), { prompt }));
        });
    }
    /**
     * Translate text from English to a given language.
     * For short input text, use options.instruction to provide context.
     * @example ```ts
     * await openai.translateEnglishTo('Spanish', 'Clear', { instruction: 'This is a color.' })
     * ```
     */
    translateEnglishTo(language, prompt, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.translateFrom('English', language, prompt, options);
        });
    }
}

/**
 * Calculates the sum of an array of numbers.
 * @returns The sum of all numbers in the array.
 * @param array The array of numbers to sum.
 * @example ```ts
 * const numbers = [1, 2, 3, 4, 5];
 * arrSum(numbers);
 * //=> 15
 * ```
 */
function arrSum(array) {
    return array.reduce((acc, cur) => acc + cur, 0);
}

/**
 * Calculates the average of an array of numbers.
 * @returns The average of all numbers in the array. Returns 0 if the array is empty.
 * @throws Will throw an error if the array is not of type number[].
 * @param array The array of numbers.
 * @example ```ts
 * const numbers = [1, 2, 3, 4, 5];
 * arrAverage(numbers);
 * //=> 3
 * ```
 */
function arrAverage(array) {
    if (!array.length)
        return 0;
    return arrSum(array) / array.length;
}

/**
 * Coerce each element of an array to string.
 * @template T - The type of elements in the input array.
 * @returns A new array where each element is the string representation of the corresponding element in the input array.
 * @param array The array to iterate over.
 * @example ```ts
 * const numbers = [1, 2, 3];
 * arrEachToString(numbers);
 * //=> ['1', '2', '3']
 * ```
 */
function arrEachToString(array) {
    return array.map((element) => '' + element);
}

/**
 * Returns true if the predicate is satisfied for every element of the passed array; otherwise false.
 * @param input The array
 * @template T - The type of elements in the array.
 * @returns Returns `true` if all elements pass the predicate check, else `false`.
 * @param predicate A predicate callback function
 * @example ```ts
 * const numbers = [1, 2, 3, 4, 5];
 * const isEven = (num) => num % 2 === 0;
 * arrEvery(numbers, isEven);
 * //=> false
 * arrEvery(numbers, (num) => num > 0);
 * //=> true
 * ```
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
 * This function filters an array based on a predicate function, modifying the original array.
 * @template T The type of elements in the input array.
 * @param input The array to be filtered.
 * @param f The predicate function to determine which elements to keep. This function takes three arguments: the current element, its index, and the original array.
 * @returns The original array, now filtered based on the predicate function.
 * @example ```ts
 * arrFilterMutable([1, 2, 3, 4, 5], (num: number) => num % 2 === 0);;
 * //=> [2, 4]
 * ```
 */
function arrFilterMutable(input, f) {
    for (let i = 0; i < input.length; i++) {
        if (!f(input[i], i, input)) {
            input.splice(i, 1);
            i--;
        }
    }
    return input;
}

/**
 * Flattens the passed array recursively to a specified depth. Immutable.
 * @param input the array to flatten
 * @template T - The type of the elements in the input array.
 * @param - The maximum depth to flatten. Defaults to the maximum safe integer.
 * @returns The flattened array.
 * @throws If the input is not an array.
 * @param maxDepth the maximum recursive flattening depth.
 * @example ```ts
 * const nestedArray = [[1, 2], [3, [4, 5]], [6]];
 * arrFlatten(nestedArray, 1);
 * //=> [1, 2, 3, [4, 5], 6]
 * ```
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
 * @param input The array to search
 * @template T - The type of elements in the input array.
 * @returns An array of indices where the specified element can be found.
 * @param element The element to find
 * @example ```ts
 *  const inputArray = [1, 2, 3, 2, 4, 2, 5];
 *  const elementToFind = 2;
 *  arrIndicesOf(inputArray, elementToFind);
 *  //=> [1, 3, 5]
 *  ```
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
 * Returns the last element of an array.
 * @param array The array from which to retrieve the last element.
 * @template T - The type of elements in the array.
 * @returns The last element of the array.
 * @throws If the array is empty.
 * @example ```ts
 * const numbers = [1, 2, 3, 4, 5];
 * arrLast(numbers);
 * //=> 5
 * const emptyArray = [];
 * arrLast(emptyArray); // Throws an error
 * ```
 */
function arrLast(array) {
    if (!array.length)
        throw new Error('Cannot get last element of empty array.');
    return array[array.length - 1];
}

/**
 * This function takes an array and a callback function as arguments. It applies the callback function to each element of the array, mutating the original array in the process.
 * @template T The type of elements in the input array.
 * @param input The array to be mapped over.
 * @param f The callback function to be applied to each element of the array. This function takes three arguments: the current element, its index, and the original array.
 * @returns The original array, mutated by the callback function.
 * @example ```ts
 * arrMapMutable([1, 2, 3], (value: number) => value * 2);;
 * //=> [2, 4, 6]
 * ```
 */
function arrMapMutable(input, f) {
    for (let i = 0; i < input.length; i++) {
        input[i] = f(input[i], i, input);
    }
    return input;
}

/**
 * Returns an array of all unique object keys found in an array of objects.
 * @template T - The type of values in the input objects.
 * @returns An array of unique keys present in the input objects.
 * @param objects The array of objects.
 * @example ```ts
 * const objects = [
 *   { name: 'John', age: 25 },
 *   { name: 'Jane', gender: 'female' },
 *   { name: 'Bob', age: 30, gender: 'male' },
 * ];
 * arrObjectsUniqueKeys(objects);
 * //=> ['name', 'age', 'gender']
 * ```
 */
function arrObjectsUniqueKeys(objects) {
    const keys = new Set();
    for (const o of objects) {
        for (const key of Object.keys(o)) {
            keys.add(key);
        }
    }
    return Array.from(keys);
}

/**
 * Convert an array of objects to a two-dimensional table.
 * @param objects The array of objects to convert to a table.
 * @template T - The type of the values in the objects.
 * @param options.headers An optional array of strings specifying the headers (property names) to use. If not provided, the function will use all unique keys found in the objects.
 * @param options.emptyCell An optional value to use for empty cells. If not provided, the function will use `undefined`.
 * @returns A 2D array (table) where each row represents an object and each column represents a property of the object.
 * @param options The options for converting the objects to a table.
 * @example ```ts
 * arrObjectsToTable(
 *   [
 *     { a: 1, b: 2 },
 *     { a: 3, b: 4, c: 5 },
 *   ],
 *   { emptyCell:1 },
 * ) //=> [ [ 'a', 'b', 'c' ], [ 1, 2,1 ], [ 3, 4, 5 ] ]
 * ```
 */
function arrObjectsToTable(objects, options = {}) {
    var _a;
    const headers = ((_a = options === null || options === void 0 ? void 0 : options.headers) === null || _a === void 0 ? void 0 : _a.slice()) || arrObjectsUniqueKeys(objects);
    const table = [headers];
    for (const o of objects) {
        const row = headers.map((header) => {
            const value = o[header];
            return value !== undefined ? value : options.emptyCell;
        });
        table.push(row);
    }
    return table;
}

/**
 * Remove duplicates from an array
 * @remarks This function uses the JavaScript Set object to remove duplicate values from an array.
 * @typeparam T - The type of elements in the array.
 * @returns The new array with duplicates removed.
 * @param array The array from which to remove duplicates.
 * @example ```ts
 * const array = [1, 2, 2, 3, 4, 4, 5];
 * arrRemoveDuplicates(array);
 * //=> [1, 2, 3, 4, 5]
 * ```
 */
function arrRemoveDuplicates(array) {
    return Array.from(new Set(array));
}

/**
 * This function compares the length of the two arrays and then checks if each element at the corresponding index is equal.
 * @param input1 The first array to compare.
 * @template T - The type of the elements in the arrays.
 * @returns A boolean indicating whether the two arrays are shallowly equal.
 * @param input2 The second array to compare.
 * Checks if two arrays are shallowly equal.
 * @example ```ts
 * arrShallowEquals([1, 2, 3], [1, 2, 3]);
 * //=> true
 * arrShallowEquals([1, 2, 3], [1, 2, 4]);
 * //=> false
 * ```
 */
function arrShallowEquals(input1, input2) {
    if (input1.length !== input2.length)
        return false;
    return arrEvery(input1, (value, i) => value === input2[i]);
}

/**
 * Swaps two elements in an array. This function takes an input array and swaps the elements at the specified indices.
 * @param to The index of the element to swap to.
 * @param from The index of the element to swap from.
 * @template T - The type of elements in the array.
 * @returns The modified array with swapped elements.
 * @throws Will throw an error if 'from' or 'to' is not a valid index in the array.
 * @param input The input array.
 * @example ```ts
 * const arr = [1, 2, 3, 4, 5]
 * arrSwap(arr, 1, 3) //=> [1, 4, 3, 2, 5]
 * ```
 */
function arrSwap(input, from, to) {
    if (from === to)
        return input;
    [input[from], input[to]] = [input[to], input[from]];
    return input;
}

/**
 * Asserts that the provided value is an integer. If the value is not an integer, a TypeError is thrown.
 * @param int The value to be checked.
 * @returns Returns the input value if it is an integer.
 * @throws Throws an error if the input value is not an integer.
 * @example ```ts
 * assertInteger(5);;
 * //=> 5
 * assertInteger(5.5);;
 * //=> throws TypeError
 * ```
 */
function assertInteger(int) {
    if (Number.isInteger(int))
        return int;
    throw new TypeError('Expected int to be an integer. Got: ' + int);
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * @param min The lower bound integer.
 * @param max The upper bound integer.
 * @throws if min is not an integer.
 * @returns A random integer between min and max.
 * @throws if max is not an integer.
 * @example ```ts
 * randomIntBetween(1, 10);;
 * //=> {random integer between 1 and 10}
 * ```
 */
function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (assertInteger(max) - assertInteger(min) + 1) + min);
}

/**
 * Shuffle items in an array in-place. Guarantees changes.
 * @remarks This function does not guarantee that the order of the elements will be different after shuffling.
 * @typeparam T - The type of the elements in the input array.
 * @returns The same array, but shuffled.
 * @param input The array to shuffle.
 * @example ```ts
 * const input = [1, 2, 3, 4, 5];
 * arrShuffle(input);
 * //=> [3, 1, 5, 2, 4]
 * ```
 */
function arrShuffle(input) {
    if (input.length <= 1)
        return input;
    const original = input.slice();
    let equal = true;
    while (equal) {
        for (let i = 0; i < input.length; i++) {
            const newIndex = randomIntBetween(0, input.length - 1);
            arrSwap(input, i, newIndex);
        }
        equal = arrShallowEquals(input, original);
    }
    return input;
}

/**
 * Checks if at least one element in the array satisfies the provided predicate.
 * @param predicate The predicate function to apply to each element.
 * @template T The type of elements in the input array.
 * @returns Returns `true` if at least one element in the array passes the test implemented by the provided function, otherwise `false`.
 * @param input The array to check.
 * @example ```ts
 * const numbers = [1, 2, 3, 4, 5];
 * const isEven = (num) => num % 2 === 0;
 * arrSome(numbers, isEven);
 * //=> true
 * ```
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
 * @returns A number indicating the relationship between the two numbers:
 * - `-1` if `a` is less than `b`
 * - `1` if `a` is greater than `b`
 * - `0` if `a` is equal to `b`
 * @example ```ts
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
 * Sorts an array of numbers, bigints, or booleans in ascending order.
 * @returns The sorted array.
 * @remarks This function uses the JavaScript `Array.prototype.sort()` method, which sorts elements in place.
 * Therefore, the original array will be modified.
 * @throws If any element in the input array is not a number, bigint, or boolean.
 * @param input The array to be sorted.
 * @example ```ts
 * const input = [5, 2n, true, 10, false];
 * arrSortNumeric(input);
 * //=> [false, true, 2n, 5, 10]
 * ```
 */
function arrSortNumeric(input) {
    return input.sort(compareNumeric);
}

/**
 * Asserts that all rows in a 2D array have the same length.
 * @param - Optional array of headers to compare the row length against.
 * @throws If any row in the array has a different length than the others.
 * @param headers Optional. An array of headers. If provided, each row must have the same length as this array.
 * @typeparam T - The type of elements in the rows.
 * @param rows The 2D array to check.
 * @example ```ts
 *  const rows = [
 *    [1, 2, 3],
 *    [4, 5, 6],
 *    [7, 8, 9],
 *  ];
 *  arrTableAssertRowsSameLength(rows);
 *  //=> undefined
 *  const rowsWithDifferentLength = [
 *    [1, 2, 3],
 *    [4, 5],
 *    [7, 8, 9],
 *  ];
 *  arrTableAssertRowsSameLength(rowsWithDifferentLength);
 *  //=> Error: Expected 3 columns, got 2
 *  ```
 */
function arrTableAssertRowsSameLength(rows, headers) {
    const numHeaders = (headers || rows[0]).length;
    for (const row of rows) {
        if (row.length !== numHeaders) {
            throw new Error(`Expected ${numHeaders} columns, got ${row.length}`);
        }
    }
}

/**
 * Coerce each value of a 2D array table to string.
 * @template T - The type of the elements in the input array.
 * @returns The converted 2D array where each element is a string.
 * @param table The 2D array to convert.
 * @example ```ts
 * const input: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
 * arrTableEachToString(input);
 * //=> [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']]
 * ```
 */
function arrTableEachToString(table) {
    return table.map(arrEachToString);
}

/**
 * Escapes special characters in a string to be used in a regular expression.
 * @param str The input string to escape.
 * @returns The escaped string.
 * @example ```ts
 * const input = 'Hello, world!';
 * regexEscapeString(input);;
 * //=> 'Hello, world!'
 * ```
 */
function regexEscapeString(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

/**
 * Replaces all occurrences of a substring in a string with a specified replacement.
 * @param input The input string.
 * @param replace The substring to be replaced.
 * @param replaceWith The replacement string.
 * @param flags Optional. The flags for the regular expression. Defaults to 'g'.
 * @example ```ts
 * const input = 'Hello, world!';
 * const replace = 'o';
 * const replaceWith = '0';
 * strReplaceAll(input, replace, replaceWith);
 * //=> 'Hell0, w0rld!'
 * ```
 */
function strReplaceAll(input, replace, replaceWith, flags = 'g') {
    if (!input || !replace)
        return input;
    return input.replace(new RegExp(regexEscapeString(replace), flags), replaceWith);
}

/**
 * Converts a 2D array to a CSV string.
 * @param input The input 2D array.
 * @remarks This function is useful for exporting data to CSV format.
 * @param replaceLinebreakWith The character used to replace line breaks in the CSV string. Defaults to '|'.
 * @typeparam T - The type of the elements in the input array.
 * @returns The CSV string representation of the input array.
 * @param delimiter The delimiter to use for separating values in the CSV string.
 * @example ```ts
 * const input = [
 *   ['Name', 'Age', 'Country'],
 *   ['John', '25', 'USA'],
 *   ['Alice', '30', 'Canada'],
 *   ['Bob', '35', 'UK'],
 * ];
 * arrTableToCSV(input);
 * //=> "Name;Age;Country\nJohn;25;USA\nAlice;30;Canada\nBob;35;UK"
 * ```
 */
function arrTableToCSV(input, delimiter = ';', replaceLinebreakWith = '|') {
    return input
        .map((row) => {
        return row
            .map((item) => strReplaceAll(item + '', delimiter, '').replace(/(\r*\n)+/g, replaceLinebreakWith))
            .join(delimiter);
    })
        .join('\n');
}

/**
 * Creates a factory function for creating objects with specified keys and default values.
 * @template T The type of the values.
 * @param keys An array of strings representing the keys of the objects to be created.
 * @param defaultValues An optional array of default values for the keys. If provided, its length should not be larger than the length of the keys array.
 * @returns An `ObjectFactory` function. When called, this function takes an optional array of values and returns an object with the specified keys and values. If the values array is not provided or if a value is `undefined`, the corresponding default value is used.
 * @throws If the length of the `defaultValues` array is larger than the length of the `keys` array, or if the length of the `values` array passed to the factory function is larger than the length of the `keys` array.
 * @example ```ts
 * createObjectFactory(['key1', 'key2'], ['default1', 'default2'])(['value1']);
 * //=> { key1: 'value1', key2: 'default2' }
 * ```
 */
function createObjectFactory(keys, defaultValues) {
    const numKeys = keys.length;
    if (defaultValues && defaultValues.length > numKeys) {
        throw new Error('defaultValues length larger than keys length.');
    }
    return function factory(values) {
        if (values && values.length > numKeys) {
            throw new Error('values length larger than keys length.');
        }
        const o = {};
        for (let i = 0; i < numKeys; i++) {
            let value;
            if (values) {
                value = values[i];
                if (value === undefined && defaultValues) {
                    value = defaultValues[i];
                }
            }
            else if (defaultValues) {
                value = defaultValues[i];
            }
            Object.defineProperty(o, keys[i], {
                enumerable: true,
                writable: true,
                configurable: true,
                value,
            });
        }
        return o;
    };
}

/**
 * Converts a 2D array representing a table into an array of objects.
 * @param rows The 2D array representing the table.
 * @template T - The type of the elements in the rows.
 * @param headers The headers to use as keys for the objects. If not provided, the first row of the table is used as headers.
 * @returns An array of objects, where each object represents a row in the table.
 * @throws Throws an error if the headers are not provided and the table is empty or only contains one row.
 * @param headers Optional array of headers for the table.
 * @example ```ts
 * const table = [
 *   ['Name', 'Age', 'Country'],
 *   ['John', 25, 'USA'],
 *   ['Jane', 30, 'Canada'],
 * ];
 * const headers = ['Name', 'Age', 'Country'];
 * arrTableToObjects(table, headers) //=> [
 * //   { Name: 'John', Age: 25, Country: 'USA' },
 * //   { Name: 'Jane', Age: 30, Country: 'Canada' },
 * // ]
 * ```
 */
function arrTableToObjects(rows, headers) {
    if (headers) {
        if (!rows.length)
            return [];
    }
    else {
        if (rows.length <= 1)
            return [];
        headers = rows[0].map((header) => {
            return header === null || header === undefined ? '' : String(header);
        });
        rows = rows.slice(1);
    }
    const oRow = createObjectFactory(headers);
    return rows.map((row) => oRow(row));
}

/**
 * Run async tasks in parallel with a limit on the number of concurrent tasks.
 * @param concurrency number of tasks to run concurrently
 * @param tasks array of functions that return a promise
 * @param callback callback is invoked in order of completion
 * @typeparam T - The type of the return value of the tasks.
 * @throws Will throw an error if any of the tasks fail.
 * @returns array of return values which are ordered with indices identical to their respective tasks in the input array.
 * @example ```ts
 * const tasks = [
 *   () => new Promise((resolve) => setTimeout(() => resolve('Task A complete'), 2000)),
 *   () => new Promise((resolve) => setTimeout(() => resolve('Task B complete'), 1000)),
 *   () => new Promise((resolve) => setTimeout(() => resolve('Task C complete'), 3000)),
 *   () => new Promise((resolve) => setTimeout(() => resolve('Task D complete'), 4000)),
 *   () => new Promise((resolve) => setTimeout(() => resolve('Task E complete'), 5000)),
 * ]
 * const results2 = await asyncTasksLimit(2, tasks, (value, index) => {
 *   console.log(`Task ${index} completed with value ${value}`)
 * })
 * console.log(results2)
 * ```
 */
function asyncTasksLimit(concurrency, tasks, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = new Set();
        const returnValues = [];
        let nextIndex = 0;
        for (const task of tasks) {
            const index = nextIndex++;
            if (promises.size === concurrency) {
                yield Promise.race(promises);
            }
            const promise = task();
            promises.add(promise);
            promise.then((retval) => {
                returnValues[index] = retval;
                if (callback)
                    callback(retval, index);
                promises.delete(promise);
            });
        }
        yield Promise.all(promises);
        return returnValues;
    });
}
// import { setTimeout } from 'node:timers/promises'
// async function example() {
//   const returnAfter = async (value: number, ms: number) => {
//     console.log('Task started')
//     await setTimeout(ms)
//     return value
//   }
//   const arr = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
//   const random = () => Math.floor(Math.random() * (1500 - 200 + 1)) + 200
//   const tasks = arr.map((n) => () => returnAfter(n, random()))
//   // callback will be called in order of completion
//   const callback = (value: number, i: number) => console.log(`${i}. ${value}`)
//   // return values are ordered by input tasks array
//   const returnValuesOrder = await asyncTasksLimit(3, tasks, callback)
//   console.log(returnValuesOrder)
// }
// example()

/**
 * Executes an array of asynchronous tasks in parallel and returns an array of results.
 * @remarks This function is useful when you need to perform multiple asynchronous operations concurrently and wait for all of them to complete.
 * @typeparam T - The type of the result that each asynchronous task returns.
 * @param tasks An array of functions that return a Promise of type T.
 * @returns A Promise that resolves to an array of results of type T.
 * @example ```ts
 * [
 *   async () => await fetch('https://api.example.com/data1'),
 *   async () => await fetch('https://api.example.com/data2'),
 *   async () => await fetch('https://api.example.com/data3')
 * ].map(task => asyncTasksParallel(task));;
 * //=> {results}
 * ```
 */
function asyncTasksParallel(tasks) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Promise.all(tasks.map((task) => task()));
    });
}

/**
 * Executes an array of asynchronous tasks in a serial manner, one after the other.
 * Returns a promise that resolves with an array of results of each task.
 * @template T - The type of the result of each task.
 * @param tasks An array of functions that return a promise.
 * @returns A promise that resolves with an array of results of each task.
 * @example ```ts
 * [() => Promise.resolve(1), () => Promise.resolve(2), () => Promise.resolve(3)].map(task => asyncTasksSerial(task));
 * //=> [1, 2, 3]
 * ```
 * @throws If any of the tasks fail, the function will throw an error.
 */
function asyncTasksSerial(tasks) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = [];
        for (const task of tasks) {
            results.push(yield task());
        }
        return results;
    });
}

/**
 * Executes an async task with a timeout.
 * @param timeout The timeout in milliseconds.
 * @param task The async task to execute.
 * @param args The arguments to pass to the task.
 * @template T The type of the value that the Promise resolves to.
 * @throws If the Promise does not resolve within the specified time, an Error is thrown with a message indicating the timeout.
 * @returns A promise that resolves with the task's result or rejects with an error.
 * @example ```ts
 * // Example 1: Resolving a promise within the timeout
 * asyncWithTimeout(5000, async () => {
 *   await new Promise((resolve) => setTimeout(resolve, 2000))
 *   return 'Task completed within timeout'
 * })
 *   .then((result) => console.log(result))
 *   .catch((error) => console.error(error))
 * // Example 2: Rejecting a promise due to timeout
 * asyncWithTimeout(2000, async () => {
 *   await new Promise((resolve) => setTimeout(resolve, 5000))
 *   return 'This should not be returned'
 * })
 *   .then((result) => console.log(result))
 *   .catch((error) => console.error(error))
 * ```
 */
function asyncWithTimeout(timeout, task) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(`Timed out after ${timeout} ms.`));
        }, timeout);
        task().then((value) => {
            resolve(value);
        }, (error) => {
            reject(error);
        });
    });
}

/**
 * Decodes a base64 encoded string into a Buffer.
 * @param str The base64 encoded string to decode.
 * @example ```ts
 * const encodedString = 'SGVsbG8gd29ybGQ=';
 * atob(encodedString) //=> <Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64>
 * ```
 */
function atob(str) {
    return Buffer.from(str, 'base64');
}

/**
 * Encodes a Buffer object to a base64 string.
 * @param buf The Buffer object to encode.
 * @example ```ts
 * const buffer = Buffer.from('Hello, World!', 'utf8');
 * btoa(buffer);
 * //=> "SGVsbG8sIFdvcmxkIQ=="
 * ```
 */
function btoa(buf) {
    return buf.toString('base64');
}

/**
 * Converts an array of bytes to an integer.
 * @throws If the bytes are invalid or the resulting integer is greater than 256^5.
 * @param bytes The array of bytes to convert.
 * @example ```ts
 * const bytes = [255, 1, 2, 3, 4, 5];
 * bytesToInt(bytes);
 * //=> 1099511627776
 * ```
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
 * Converts an integer to an array of bytes.
 * @param int The integer to convert.
 * @example ```ts
 * intToArrayBytes(1234567890);
 * //=> [210, 2, 150, 73]
 * ```
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
 * Converts an integer to a Buffer.
 * @param int The integer to convert.
 * @example ```ts
 * const int = 42;
 * intToBuffer(int) //=> <Buffer 00 00 00 2a>
 * ```
 */
function intToBuffer(int) {
    return Buffer.from(intToArrayBytes(int));
}

/**
 * Converts a positive integer to an array of bytes.
 * @throws An error if the input is not a positive integer or exceeds 256^5.
 * @param int The positive integer to convert.
 * @example ```ts
 * intToBytes(12345);
 * //=> [ 251, 0, 48, 57 ]
 * ```
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
 * Pads an array of bytes on the left side with zeros to make it a fixed length of 4 bytes.
 * @param a The array of bytes to pad.
 * @example ```ts
 * padArrayBytesLeft([1, 2, 3]);
 * //=> [0, 1, 2, 3]
 * padArrayBytesLeft([1]);
 * //=> [0, 0, 0, 1]
 * ```
 */
function padArrayBytesLeft(a) {
    if (!a.length)
        return [0, 0, 0, 0];
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
 * Pads an array of bytes on the right with zeros to ensure it has a length of 4.
 * @param a The array of bytes to pad.
 * @example ```ts
 * padArrayBytesRight([1, 2, 3]);
 * //=> [1, 2, 3, 0]
 * padArrayBytesRight([1]);
 * //=> [1, 0, 0, 0]
 * ```
 */
function padArrayBytesRight(a) {
    if (!a.length)
        return [0, 0, 0, 0];
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
 * Trims the left side of an array of bytes by removing leading zeros.
 * @param a The array of bytes to trim.
 * @example ```ts
 * const input = [0, 0, 0, 1, 2, 3];
 * trimArrayBytesLeft(input);
 * //=> [1, 2, 3]
 * ```
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
 * Trims the trailing zero bytes from an array of numbers.
 * @param a The input array of numbers.
 * @example ```ts
 * const input = [1, 2, 3, 0, 0, 0];
 * trimArrayBytesRight(input);
 * //=> [1, 2, 3]
 * ```
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

/**
 * Sets non-enumerable private properties of an object.
 * Private properties are determined by the convention of prefixing the property name with an underscore.
 * @remarks This function modifies the original object by setting its private properties as non-enumerable.
 * @param object The object whose private properties are to be set as non-enumerable.
 * @example ```ts
 * const obj = { _private: 'secret', public: 'hello world' };
 * setNonEnumerablePrivateProperties(obj);
 * for (let key in obj) {
 *   key;;
 * //=> 'public'
 * }
 * ```
 * @returns void
 */
function setNonEnumerablePrivateProperties(object) {
    setNonEnumerable(object, ...Object.keys(object).filter((key) => key.charAt(0) === '_'));
}

/**
 * Abstract class that other classes can inherit from to gain various handy functionality.
 */
class MixinBase {
    getConstructor() {
        return Object.getPrototypeOf(this).constructor;
    }
    getPrototype() {
        return Object.getPrototypeOf(this);
    }
    /**
     * Make the properties with property names that start with an underscore non-enumerable.
     */
    setNonEnumerablePrivateProperties() {
        setNonEnumerablePrivateProperties(this);
    }
    /**
     * Make the properties with the given property names non-enumerable.
     */
    setNonEnumerableProperties(...propertyNames) {
        setNonEnumerable(this, ...propertyNames);
    }
}

class Queue extends MixinBase {
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

/**
 * Two-dimensional table class supporting column and row headers.
 * @template T The type of the data in the table.
 */
class SimpleTable extends MixinBase {
    /**
     * Revive a stringified Table object.
     * @param json a stringified Table object.
     */
    static fromJSON(json) {
        const { headers, data } = JSON.parse(json);
        return new SimpleTable(data, headers);
    }
    /**
     * Creates a new SimpleTable.
     * @param data The data of the table.
     * @param headers The headers of the table.
     */
    constructor(data, headers) {
        super();
        /**
         * Map from column names to column indices.
         */
        this._colIndexMap = {};
        /**
         * The data of the table.
         */
        this._data = [];
        if (headers) {
            this._headers = headers.slice();
            this._data = data.map((row) => {
                this.assertRowValidLength(row);
                return row.slice();
            });
        }
        else {
            this._headers = data[0].map((header) => '' + header);
            this._data = data.slice(1).map((row) => {
                this.assertRowValidLength(row);
                return row.slice();
            });
        }
        if (!this._headers.length)
            throw new Error('Table must have at least one column.');
        if (!this._data.length)
            throw new Error('Table must have at least one row.');
        this._headers.forEach((header, i) => {
            this._colIndexMap[header] = i;
        });
        this.setNonEnumerablePrivateProperties();
    }
    /**
     * Checks if a row has the correct length.
     * @param row The row to check.
     */
    assertRowValidLength(row) {
        if (row.length !== this._headers.length)
            throw new Error('Row length does not match headers length.');
    }
    /**
     * Gets the number of cols in the table, not including headers.
     */
    get numColumns() {
        return this._data[0].length;
    }
    /**
     * Gets the number of rows in the table, not including headers.
     */
    get numRows() {
        return this._data.length;
    }
    /**
     * Gets the column headers.
     */
    get headers() {
        return this._headers.slice();
    }
    /**
     * Returns the table as a two-dimensional array, without column headers.
     */
    get data() {
        return this._data.slice().map((row) => row.slice());
    }
    /**
     * Returns a value at a given (row, col) position.
     * @param column Column index or name
     * @param row Row index
     */
    get(column, row) {
        if (typeof column === 'string') {
            column = this._colIndexMap[column];
        }
        return this._data[row][column];
    }
    /**
     * Inserts a given value at a given (row, col) position.
     * @param column Column index
     * @param row Row index
     * @param value The value to insert
     */
    set(column, row, value) {
        if (typeof column === 'string') {
            column = this._colIndexMap[column];
        }
        this._data[row][column] = value;
        return this;
    }
    /**
     * Returns the table as a two-dimensional array, including row and column headers..
     */
    toArray() {
        const result = [this.headers];
        return result.concat(this.data);
    }
    /**
     * Override of the native toJSON method. When parsing the returned json string, it can be revived as a Table object when using the static Table.fromJSON method.
     */
    toJSON() {
        return {
            headers: this._headers,
            data: this._data,
        };
    }
}

/**
 * Number comparator function (ascending)
 * @remarks This function subtracts the second number from the first number and returns the result.
 * @param a first value to compare
 * @param b second value to compare
 * @returns The difference between the two numbers
 * @example ```ts
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
 * @returns A number indicating whether a reference string comes before or after or is the same as the given string in sort order.
 * @example ```ts
 * compareString("apple", "banana");;
 * //=> -1
 * compareString("banana", "apple");;
 * //=> 1
 * compareString("apple", "apple");;
 * //=> 0
 * ```
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
 * Checks if the provided date and time values form a valid date.
 * @param year The year of the date.
 * @param month The month of the date.
 * @param day The day of the date.
 * @param hour The hour of the time.
 * @param minute The minute of the time.
 * @param second The second of the time.
 * @param millisecond The millisecond of the time.
 * @returns A boolean indicating whether the provided date and time values form a valid date.
 * @example ```ts
 * isValidDate(2021, 12, 31, 23, 59, 59, 999);;
 * //=> true
 * isValidDate('2021', '12', '31', '23', '59', '59', '999');;
 * //=> true
 * isValidDate(2021, 13, 31, 23, 59, 59, 999);;
 * //=> false
 * ```
 */
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

/**
 * Asserts that the provided date parameters form a valid date.
 * @param year The year of the date.
 * @param month The month of the date.
 * @param day The day of the date.
 * @param hour The hour of the date.
 * @param minute The minute of the date.
 * @param second The second of the date.
 * @param millisecond The millisecond of the date.
 * @throws Will throw an error if the date is not valid.
 * @example ```ts
 * assertValidDate(2021, 12, 31, 23, 59, 59, 999);;
 * //=> true
 * assertValidDate(2021, 13, 31, 23, 59, 59, 999);;
 * //=> throws an error
 * ```
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
 * Checks if the provided month is a valid month number (1-12).
 * @param month The month number to validate.
 * @returns A boolean indicating whether the month is valid.
 * @example ```ts
 * isValidDateMonth(5);;
 * //=> true
 * isValidDateMonth(13);;
 * //=> false
 * ```
 */
function isValidDateMonth(month) {
    return Number.isInteger(month) && month >= 1 && month <= 12;
}

/**
 * Asserts if the provided month is a valid date month.
 * @param month The month to be validated. Should be a number between 1 and 12.
 * @throws Will throw an error if the month is not a valid date month.
 * @example ```ts
 * assertValidDateMonth(13);;
 * //=> Error: Invalid month: 13.
 * assertValidDateMonth(1);;
 * //=> undefined
 * ```
 */
function assertValidDateMonth(month) {
    if (!isValidDateMonth(month))
        throw new Error(`Invalid month: ${month}.`);
}

/**
 * Checks if the provided year is a valid date year.
 * @remarks This function will return true if the year is a positive integer, false otherwise.
 * @param year The year to be checked.
 * @returns A boolean indicating whether the year is valid or not.
 * @example ```ts
 * isValidDateYear(2020); ;
 * //=> true
 * isValidDateYear(-2020);;
 * //=> false
 * isValidDateYear(2020.5);;
 * //=> false
 * ```
 */
function isValidDateYear(year) {
    return Number.isInteger(year) && year >= 0;
}

/**
 * Asserts that the provided year is a valid date year.
 * @param year The year to be validated
 * @throws Will throw an error if the year is not valid.
 * @example ```ts
 * assertValidDateYear(2020);;
 * //=> undefined
 * assertValidDateYear(10000);;
 * //=> Error: Invalid year: 10000.
 * ```
 * @returns void
 */
function assertValidDateYear(year) {
    if (!isValidDateYear(year))
        throw new Error(`Invalid year: ${year}.`);
}

/**
 * Checks if a given year is a leap year.
 * A leap year is exactly divisible by 4 except for century years (years ending with 00).
 * The century year is a leap year only if it is perfectly divisible by 400.
 * @param year The year to check. Must be a valid year number.
 * @returns `true` if the year is a leap year, `false` otherwise.
 * @throws Will throw an error if the year is not a valid number.
 * @example ```ts
 * isLeapYear(2000); ;
 * //=> true
 * isLeapYear(2001); ;
 * //=> false
 * ```
 */
function isLeapYear(year) {
    assertValidDateYear(year);
    return (0 == year % 4 && 0 != year % 100) || 0 == year % 400;
}

/**
 * Get number of days that there are in a given month of a given year.
 * Note: The number of days in february depends on whether it is leap year. If no year is given, it is assumed that it is not leap year.
 * @param month The month for which the number of days is to be calculated. Should be a number between 1 and 12.
 * @param year The year for which the number of days in the month is to be calculated. Optional.
 * @returns The number of days in the given month for the specified year.
 * @throws Will throw an error if the month is not a valid number between 1 and 12.
 * @example ```ts
 * numDaysInMonth(2, 2020);;
 * //=> 29
 * numDaysInMonth(2);;
 * //=> 28
 * numDaysInMonth(1);;
 * //=> 31
 * ```
 */
function numDaysInMonth(month, year) {
    assertValidDateMonth(month);
    const DAYS_IN_MONTH = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return month === 2 && year !== undefined && isLeapYear(year) ? 29 : DAYS_IN_MONTH[month];
}

/**
 * Checks if the given day is a valid day of the month.
 * @param day The day of the month. Must be an integer.
 * @param month The month of the year. Must be an integer.
 * @param year The year. Optional parameter. If not provided, the function will not check for leap years.
 * @returns A boolean indicating whether the day is valid for the given month and year.
 * @example ```ts
 * isValidDateDay(31, 1, 2000);
 * //=> true
 * isValidDateDay(31, 2, 2000);
 * //=> false
 * isValidDateDay(29, 2);
 * //=> true
 * ```
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
 * Asserts that the provided day, month, and optional year form a valid date.
 * If the date is not valid, it throws an error.
 * @param day The day of the month. Should be an integer between 1 and 31.
 * @param month The month of the year. Should be an integer between 1 and 12.
 * @param year The year of the date. Optional parameter. If provided, should be a positive integer.
 * @throws Will throw an error if the provided day, month, and optional year do not form a valid date.
 * @example ```ts
 * assertValidDateDay(31, 2, 2020);;
 * //=> Error: Invalid day of the month: 31.
 * assertValidDateDay(29, 2, 2020);;
 * //=> no error
 * ```
 */
function assertValidDateDay(day, month, year) {
    if (!isValidDateDay(day, month, year))
        throw new Error(`Invalid day of the month: ${day}.`);
}

/**
 * The number of milliseconds in a day.
 */
const MS_IN_DAY = 1000 * 60 * 60 * 24;

/**
 * The number of milliseconds in an hour.
 */
const MS_IN_HOUR = 1000 * 60 * 60;

/**
 * The number of milliseconds in a minute.
 */
const MS_IN_MINUTE = 1000 * 60;

/**
 * The number of milliseconds in a month.
 */
const MS_IN_MONTH = (1000 * 60 * 60 * 24 * 365) / 12;

/**
 * The number of milliseconds in a second.
 */
const MS_IN_SECOND = 1000;

/**
 * The number of milliseconds in a week.
 */
const MS_IN_WEEK = 1000 * 60 * 60 * 24 * 7;

/**
 * The number of milliseconds in a year.
 */
const MS_IN_YEAR = 1000 * 60 * 60 * 24 * 365;

/**
 * Returns a Date object representing a date that is a certain number of days in the past.
 * @param days The number of days ago for the date to represent.
 * @returns A Date object representing the date that is the specified number of days in the past.
 * @example ```ts
 * dateDaysAgo(5);;
 * //=> {result}
 * ```
 */
function dateDaysAgo(days) {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date;
}

/**
 * Calculates the number of milliseconds that have passed since the provided date.
 * @param date The date from which to calculate the elapsed time.
 * @returns The number of milliseconds that have passed since the provided date.
 * @example ```ts
 * msSinceDate(new Date('2020-01-01'));;
 * //=> {number of milliseconds since 2020-01-01}
 * ```
 */
function msSinceDate(date) {
    return Date.now() - date.getTime();
}

/**
 * Calculates the number of days that have passed since the given date.
 * @param date The date from which to calculate the number of days passed.
 * @returns The number of days since the given date.
 * @example ```ts
 * new Date('2020-01-01');;
 * //=> <date object>
 * daysSinceDate(new Date('2020-01-01'));;
 * //=> <number of days since 2020-01-01>
 * ```
 */
function daysSinceDate(date) {
    return msSinceDate(date) / MS_IN_DAY;
}

/**
 * This function takes a year as a parameter and returns the century it belongs to.
 * @param year The year to determine the century for. Must be a valid year number.
 * @returns The century the year belongs to.
 * @throws Will throw an error if the year is not a valid number.
 * @example ```ts
 * getCentury(2000);;
 * //=> 20
 * getCentury(1899);;
 * //=> 19
 * ```
 */
function getCentury(year) {
    assertValidDateYear(year);
    return Math.floor(year / 100) + 1;
}

/**
 * Returns the current year as a number.
 * @remarks This function uses the `getUTCFullYear` method of the `Date` object to get the current year.
 * @returns The current year as a number.
 * @example ```ts
 * getCurrentYear();;
 * //=> 2022
 * ```
 */
function getCurrentYear() {
    return new Date().getUTCFullYear();
}

/**
 * Calculates the number of hours that have passed since the given date.
 * @param date The date from which to calculate the number of hours passed.
 * @returns The number of hours that have passed since the given date.
 * @example ```ts
 * new Date('2020-01-01T00:00:00Z');;
 * //=> {date object}
 * hoursSinceDate(new Date('2020-01-01T00:00:00Z'));;
 * //=> {number of hours since January 1, 2020}
 * ```
 */
function hoursSinceDate(date) {
    return msSinceDate(date) / MS_IN_HOUR;
}

/**
 * Converts a given date to an ISO date timestamp string.
 * If no date is provided, the current date and time will be used.
 * @param - The date to convert. Defaults to the current date and time.
 * @returns The ISO date timestamp string.
 * @example ```ts
 * isoDateTimestamp(new Date('2020-01-01T00:00:00Z'));;
 * //=> "20200101T000000Z"
 * ```
 * @example ```ts
 * const timestamp = isoDateTimestamp();
 * console.log(timestamp); // Outputs the current date and time in ISO format, e.g. "20210520T102030Z"
 * ```
 */
function isoDateTimestamp(date = new Date()) {
    return date.toISOString().replace(/\D/g, '');
}

/**
 * This function takes a date object and returns a string in ISO format suitable for filenames.
 * If no date is provided, it uses the current date and time.
 * @param date The date object to be converted. Defaults to the current date and time.
 * @returns A string in the format "YYYY-MM-DD-HH-MM-SS-SSS".
 * @example ```ts
 * isoDateTimestampForFilename(new Date('2022-01-01T00:00:00Z'));;
 * //=> "2022-01-01-00-00-00-000"
 * ```
 */
function isoDateTimestampForFilename(date = new Date()) {
    return date
        .toISOString()
        .replace(/[-:T.]/g, '-')
        .replace('Z', '');
}

/**
 * Calculates the number of minutes that have passed since the given date.
 * @param date The date from which to calculate the number of minutes that have passed.
 * @returns The number of minutes that have passed since the given date.
 * @example ```ts
 * new Date('2020-01-01T00:00:00Z');;
 * //=> {date}
 * minutesSinceDate(new Date('2020-01-01T00:00:00Z'));;
 * //=> {number of minutes since 2020-01-01T00:00:00Z}
 * ```
 */
function minutesSinceDate(date) {
    return msSinceDate(date) / MS_IN_MINUTE;
}

/**
 * Calculates the number of months that have passed since the provided date.
 * @param date The date from which to calculate the number of passed months.
 * @returns The number of months that have passed since the provided date.
 * @example ```ts
 * new Date(2020, 0, 1);;
 * //=> {date}
 * monthsSinceDate(new Date(2020, 0, 1));;
 * //=> {number of months since January 1, 2020}
 * ```
 */
function monthsSinceDate(date) {
    return msSinceDate(date) / MS_IN_MONTH;
}

/**
 * Returns the number of seconds that have passed since the given date.
 * @param date The date from which to calculate the number of seconds.
 * @returns The number of seconds since the given date.
 * @example ```ts
 * secondsSinceDate(new Date('2020-01-01'));;
 * //=> {number of seconds since 2020-01-01}
 * ```
 */
function secondsSinceDate(date) {
    return msSinceDate(date) / MS_IN_SECOND;
}

/**
 * Calculates the number of weeks that have passed since the provided date.
 * @param date The date from which to calculate the number of weeks passed.
 * @returns The number of weeks since the provided date.
 * @example ```ts
 * weeksSinceDate(new Date('2020-01-01'));;
 * //=> {number of weeks since '2020-01-01'}
 * ```
 */
function weeksSinceDate(date) {
    return msSinceDate(date) / MS_IN_WEEK;
}

/**
 * Calculates the number of years that have passed since the provided date.
 * @param date The date from which to calculate the number of years passed.
 * @returns The number of years that have passed since the provided date.
 * @example ```ts
 * yearsSinceDate(new Date('2000-01-01'));;
 * //=> {number of years since '2000-01-01'}
 * ```
 */
function yearsSinceDate(date) {
    return msSinceDate(date) / MS_IN_YEAR;
}

/**
 * If the filepath is somewhere in the current working directory, it can be converted into a relative path.
 * @remarks This function takes an absolute path as input and returns a relative path. It replaces the current working directory in the path with an empty string,
 * replaces all backslashes with forward slashes, and removes any leading forward slashes.
 * @param workingDirectory The directory relative to which the path should be converted. Defaults to the current working directory.
 * @returns The relative path.
 * @param absolute the absolute filepath to convert.
 * @example ```ts
 * absoluteToRelativePath(__filename)
 * //=> 'src/absoluteToRelativePath.ts'
 * ```
 */
function absoluteToRelativePath(absolute, workingDirectory = process.cwd()) {
    return path__default["default"]
        .normalize(absolute)
        .replace(new RegExp(regexEscapeString(path__default["default"].normalize(workingDirectory) + path__default["default"].sep), 'i'), '');
}

/**
 * Cleans a directory by removing files that match a filter.
 * @remarks This function is asynchronous and returns a promise that resolves to the path of the cleaned directory.
 * @param dirpath The path of the directory to clean.
 * @param filter A function that takes a filename and returns a boolean. Files for which this function returns `true` will be removed.
 * @returns A promise that resolves to the path of the cleaned directory.
 * @throws If the directory cannot be read or a file cannot be removed.
 * @example ```ts
 * cleanDirectory('./src', (filename: string) => filename.endsWith('.ts'));
 * ```
 */
function cleanDirectory(dirpath, filter) {
    return __awaiter(this, void 0, void 0, function* () {
        const options = { recursive: true, force: true };
        for (const filename of yield fs__default["default"].promises.readdir(dirpath)) {
            if (!filter(filename))
                continue;
            yield fs__default["default"].promises.rm(path__default["default"].join(dirpath, filename), options);
        }
        return dirpath;
    });
}

/**
 * Cleans a directory in a safe manner by checking if the directory exists before attempting to clean it.
 * The cleaning process is determined by a filter function that is passed as an argument.
 * @param dirpath The path of the directory to be cleaned.
 * @param filter A function that takes a filename as an argument and returns a boolean.
 * Files for which this function returns `true` will be deleted.
 * @returns A promise that resolves to the path of the directory.
 * @example ```ts
 * cleanDirectorySafe('./src', (filename: string) => filename.endsWith('.ts'));
 * ```
 */
function cleanDirectorySafe(dirpath, filter) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!fs__default["default"].existsSync(dirpath))
            return dirpath;
        return yield cleanDirectory(dirpath, filter);
    });
}

/**
 * Synchronously cleans a directory by removing files that match a provided filter function.
 * @param dirpath The path to the directory to clean.
 * @param filter A function that takes a filename as a parameter and returns a boolean. Files for which this function returns `true` will be removed.
 * @returns The path to the cleaned directory.
 * @throws Will throw an error if the directory does not exist or if an error occurs while removing a file.
 * @example ```ts
 * cleanDirectorySync('./src', (filename: string) => filename.endsWith('.ts'));
 * ```
 */
function cleanDirectorySync(dirpath, filter) {
    const options = { recursive: true, force: true };
    for (const filename of fs__default["default"].readdirSync(dirpath)) {
        if (!filter(filename))
            continue;
        fs__default["default"].rmSync(path__default["default"].join(dirpath, filename), options);
    }
    return dirpath;
}

/**
 * Synchronously cleans a directory in a safe manner. If the directory does not exist, it will return the directory path without making any changes.
 * @param dirpath The path of the directory to clean.
 * @param filter A function that takes a filename as a parameter and returns a boolean. If the function returns true, the file will be kept; otherwise, it will be deleted.
 * @returns The path of the directory.
 * @example ```ts
 * cleanDirectorySafeSync('./src', (filename: string) => filename.endsWith('.ts'));
 * ```
 * @throws If the directory path is not a string or the filter is not a function.
 */
function cleanDirectorySafeSync(dirpath, filter) {
    if (!fs__default["default"].existsSync(dirpath))
        return dirpath;
    return cleanDirectorySync(dirpath, filter);
}

/**
 * Create a directory at a given path if it does not exist.
 * Automatically creates parent directories if they do not exist.
 * @param dirpath The path where the directory should be created.
 * @remarks This function uses the `mkdirp` package to create directories.
 * @returns The path of the directory.
 * @example ```ts
 * createDirectory('/path/to/directory')
 * ```
 */
function createDirectory(dirpath) {
    return __awaiter(this, void 0, void 0, function* () {
        yield mkdirp.mkdirp(dirpath);
        return dirpath;
    });
}

/**
 * Counts the number of occurrences of a specific character in a string.
 * @param input The string to search within.
 * @param char The character to count occurrences of. Must be a single character string of length 1.
 * @throws If the char parameter is not a single character string of length 1.
 * @example ```ts
 * strCountCharOccurances('hello world', 'o');;
 * //=> 2
 * ```
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
 * @returns The normalized file extension.
 * @throws If the extension contains illegal characters.
 * @param ext file extension
 * @example ```ts
 * normalizeFileExtension('jpg');;
 * //=> '.jpg'
 * normalizeFileExtension('.jpg');;
 * //=> '.jpg'
 * normalizeFileExtension('..jpg');;
 * //=> '.jpg'
 * normalizeFileExtension('');;
 * //=> ''
 * normalizeFileExtension('.');;
 * //=> ''
 * normalizeFileExtension('jpg|png');;
 * //=> Error
 * ```
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
 * @remarks If no file extensions are provided, the filter will always return true.
 * @returns A function that takes a filepath and returns true if the filepath has one of the specified file extensions, false otherwise.
 * @param fileExtensions file extensions
 * @example ```ts
 * createFileExtensionFilter('.ts', '.tsx')('index.ts');;
 * //=> true
 * createFileExtensionFilter('.ts', '.tsx')('index.js');;
 * //=> false
 * ```
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
 * Deletes a directory and all of its contents.
 * @remarks This function uses Node.js's `fs.promises.rm` method with the `recursive` and `force` options set to `true`.
 * This means it will delete the directory and all of its contents, even if the directory is not empty.
 * @param dirpath The path to the directory to delete.
 * @returns A Promise that resolves when the directory has been deleted.
 * @throws Will throw an error if the directory does not exist, or if there was a problem deleting the directory.
 * @example ```ts
 * deleteDirectory('/path/to/directory');;
 * //=> undefined
 * ```
 */
function deleteDirectory(dirpath) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fs__default["default"].promises.rm(dirpath, { recursive: true, force: true });
    });
}

/**
 * Deletes a directory safely if it exists.
 * @remarks This function uses Node.js' `fs.promises.rm` method with the `recursive` and `force` options set to `true`.
 * This means it will delete the directory and all its contents, even if the directory is not empty.
 * @param dirpath The path of the directory to delete.
 * @returns A promise that resolves to `void` when the directory has been deleted.
 * @throws Will throw an error if the `fs.promises.rm` operation fails.
 * @example ```ts
 * deleteDirectorySafe('/path/to/directory');;
 * //=> undefined
 * ```
 */
function deleteDirectorySafe(dirpath) {
    return __awaiter(this, void 0, void 0, function* () {
        if (fs__default["default"].existsSync(dirpath))
            yield fs__default["default"].promises.rm(dirpath, { recursive: true, force: true });
    });
}

/**
 * Deletes a directory synchronously in a safe manner. If the directory does not exist, it will simply return the directory path without throwing an error.
 * @param dirpath The path of the directory to be deleted.
 * @returns The path of the directory that was intended to be deleted.
 * @throws Will throw an error if the operation fails for reasons other than the directory not existing.
 * @example ```ts
 * deleteDirectorySafeSync('/path/to/directory');;
 * //=> undefined
 * ```
 */
function deleteDirectorySafeSync(dirpath) {
    if (!fs__default["default"].existsSync(dirpath))
        return dirpath;
    fs__default["default"].rmSync(dirpath, { recursive: true, force: true });
    return dirpath;
}

/**
 * Deletes a directory synchronously.
 * @remarks This function uses Node.js's `fs.rmSync` method with the options `{ recursive: true, force: true }`.
 * @param dirpath The path of the directory to delete.
 * @returns The path of the deleted directory.
 * @throws Will throw an error if the directory does not exist or if the process lacks permissions to delete it.
 * @example ```ts
 * deleteDirectorySync('/path/to/directory');;
 * //=> undefined
 * ```
 */
function deleteDirectorySync(dirpath) {
    fs__default["default"].rmSync(dirpath, { recursive: true, force: true });
    return dirpath;
}

/**
 * Check whether a provided windows filesystem path string is valid according to:
 * https://msdn.microsoft.com/en-us/library/windows/desktop/aa365247(v=vs.85).aspx
 * @param path The path to validate.
 * @returns A boolean indicating whether the path is valid. If the `assert` option is true, the function will throw an error instead of returning false.
 * @throws Will throw an error if the `assert` option is true and the path is invalid.
 * @param options An optional object that may contain the following properties:
 *   - `assert`: If true, the function will throw an error if the path is invalid. Default is false.
 *   - `extendedMaxLength`: If true, the function will allow paths up to 32767 characters long. Default is false.
 * @example ```ts
 * ensureValidWindowsPath('C:\\Users\\User\\Documents\\file.txt');;
 * //=> true
 * ensureValidWindowsPath('C:/Users/User/Documents/file.txt');;
 * //=> false
 * ensureValidWindowsPath('C:\\Users\\User\\Documents\\file.txt', { assert: true });;
 * //=> throws an error
 * ensureValidWindowsPath('C:\\Users\\User\\Documents\\file.txt', { extendedMaxLength: true });;
 * //=> true
 * ```
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
 * This function retrieves all the values from a given Excel file worksheet.
 * It iterates over each row and cell in the worksheet, converting the cell values to strings and trimming any excess whitespace.
 * The result is a two-dimensional array of strings, where each inner array represents a row in the worksheet.
 * @param worksheet The Excel file worksheet to retrieve values from.
 * @remarks This function is useful when you need to extract all the data from an Excel worksheet and manipulate it in your TypeScript application.
 * @returns A two-dimensional array of strings representing the values in the worksheet.
 * @example ```ts
 * import { Worksheet } from 'exceljs';
 * // Assuming 'worksheet' is an instance of 'Worksheet'
 * getExcelFileWorksheetValues(worksheet);;
 * //=> {result}
 * ```
 */
function getExcelFileWorksheetValues(worksheet) {
    const rows = [];
    worksheet.eachRow((cells) => {
        const row = [];
        cells.eachCell((cell) => {
            row.push(String(cell.value).trim());
        });
        rows.push(row);
    });
    return rows;
}

/**
 * Reads an Excel file and returns a record where each key is the name of a worksheet and the value is a 2D array of the worksheet's cell values.
 * @remarks This function is asynchronous and returns a Promise.
 * @param filepath The path to the Excel file to read.
 * @returns A Promise that resolves to a Record. Each key in the Record is the name of a worksheet in the Excel file. Each value is a 2D array of strings, where each string is the value of a cell in the worksheet.
 * @throws Will throw an error if the file at the provided filepath cannot be read.
 * @example ```ts
 * readExcelFile('path/to/excel/file.xlsx').then((worksheets) => {
 *   worksheets['Sheet1'];;
 * //=> {result}
 * });
 * ```
 */
function readExcelFile(filepath) {
    return __awaiter(this, void 0, void 0, function* () {
        const workbook = new excelJs__default["default"].Workbook();
        yield workbook.xlsx.readFile(filepath);
        const worksheets = {};
        workbook.eachSheet((worksheet) => {
            worksheets[worksheet.name] = getExcelFileWorksheetValues(worksheet);
        });
        return worksheets;
    });
}

/**
 * Reads an Excel file and returns the values of a specified worksheet as a 2D string array.
 * @remarks This function uses the `exceljs` library to read the Excel file and extract the worksheet data.
 * @param filepath The path to the Excel file to read.
 * @param worksheetIndexOrName The index or name of the worksheet to read. Defaults to the first worksheet (index 0) if not provided.
 * @returns A Promise that resolves to a 2D string array containing the values of the specified worksheet.
 * @throws Will throw an error if the specified file does not exist or if the specified worksheet does not exist in the file.
 * @example ```ts
 * readExcelFileWorksheet('path/to/file.xlsx', 'Sheet1').then((data) => {
 *   data;;
 * //=> {result}
 * });
 * ```
 * @example ```ts
 * readExcelFileWorksheet('path/to/file.xlsx', 0).then((data) => {
 *   console.log(data); // Logs the values of the first worksheet in 'file.xlsx'
 * });
 * ```
 */
function readExcelFileWorksheet(filepath, worksheetIndexOrName = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        const workbook = new excelJs__default["default"].Workbook();
        yield workbook.xlsx.readFile(filepath);
        const worksheet = typeof worksheetIndexOrName === 'number'
            ? workbook.worksheets[worksheetIndexOrName]
            : workbook.getWorksheet(worksheetIndexOrName);
        return getExcelFileWorksheetValues(worksheet);
    });
}

/**
 * Takes a filepath and returns its utf8 contents as a single string.
 * @remarks This function is part of the `fs` module.
 * @returns The content of the file as a string.
 * @throws Will throw an error if the file cannot be read.
 * @param path path to the file
 * @example ```ts
 * readFileStringSync('/path/to/file.txt');;
 * //=> "{file content}"
 * ```
 */
function readFileStringSync(path) {
    return fs__default["default"].readFileSync(path, 'utf8').toString();
}

/**
 * Reads a JSON file and returns its content as a Promise.
 * @remarks This function is asynchronous and should be awaited.
 * @param filepath The path to the JSON file to read.
 * @typeparam T - The expected return type of the JSON file content.
 * @returns A Promise that resolves to the content of the JSON file.
 * @throws Will throw an error if the file cannot be read or parsed.
 * Read a JSON file and return the parsed content (async).
 * @example ```ts
 * readJsonFile<MyType>('/path/to/file.json');;
 * //=> {result}
 * ```
 */
function readJsonFile(filepath) {
    return __awaiter(this, void 0, void 0, function* () {
        return JSON.parse((yield fs__default["default"].promises.readFile(filepath)).toString());
    });
}

/**
 * Reads a JSON file synchronously and returns a Promise that resolves with the parsed JSON data.
 * @template T The expected return type of the JSON data.
 * @param filepath The path to the JSON file to read.
 * @returns A Promise that resolves with the parsed JSON data.
 * @throws Will throw an error if the file cannot be read or the JSON cannot be parsed.
 * Read a JSON file and return the parsed content (sync).
 * @example ```ts
 * readJsonFileSync<MyType>('/path/to/file.json');
 * //=> {result}
 * ```
 */
function readJsonFileSync(filepath) {
    return JSON.parse(fs__default["default"].readFileSync(filepath).toString());
}

/**
 * Writes a 2D array to an Excel file.
 * @remarks This function is asynchronous and returns a Promise that resolves to `void`.
 * @typeparam T - The type of elements in the 2D array.
 * @param filepath The path where the Excel file will be written.
 * @param table The 2D array to be written to the Excel file.
 * @param worksheetName The name of the worksheet where the array will be written. Defaults to 'Sheet1'.
 * @returns A Promise that resolves to `void`.
 * @example ```ts
 * [['Name', 'Age'], ['John Doe', 30], ['Jane Doe', 25]];;
 * //=> data
 * writeExcelFile('path/to/file.xlsx', data, 'People');;
 * //=> Promise<void>
 * ```
 * @throws If the file cannot be written.
 */
function writeExcelFile(filepath, table, worksheetName = 'Sheet1') {
    return __awaiter(this, void 0, void 0, function* () {
        const workbook = new excelJs__default["default"].Workbook();
        const worksheet = workbook.addWorksheet(worksheetName);
        worksheet.addRows(table);
        yield workbook.xlsx.writeFile(filepath);
    });
}

/**
 * Converts the given data to a JSON string.
 * @template T - The type of the data to be converted to JSON.
 * @param data The data to be converted to JSON.
 * @param pretty Optional parameter that determines whether the resulting JSON string should be pretty-printed. Default is `false`.
 * @returns The JSON string representation of the given data.
 * @example ```ts
 * toJson({ name: 'John', age: 30 }, true);;
 * //=> "{\n  "name": "John",\n  "age": 30\n}"
 * ```
 */
function toJson(data, pretty = false) {
    return pretty ? JSON.stringify(data, null, 2) : JSON.stringify(data);
}

/**
 * Writes a JSON file to the specified filepath with the provided data.
 * @remarks This function is asynchronous and returns a Promise that resolves to `void`.
 * @param filepath The path where the JSON file will be written.
 * @param data The data to be written to the JSON file.
 * @param pretty Optional parameter. If true, the JSON file will be formatted in a pretty, human-readable format. Default is `false`.
 * @typeparam T - The type of the data to be written to the JSON file.
 * @returns A Promise that resolves to `void`.
 * @throws If there's an error writing the file.
 * Write a JSON file (async).
 * @example ```ts
 * writeJsonFile('./data.json', { name: 'John', age: 30 }, true);;
 * //=> undefined
 * ```
 */
function writeJsonFile(filepath, data, pretty = false) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fs__default["default"].promises.writeFile(filepath, toJson(data, pretty));
    });
}

/**
 * Writes JSON data to a file synchronously.
 * @remarks This method will throw an error if the file cannot be written.
 * @param filepath The path of the file where the data will be written.
 * @param data The data to be written to the file.
 * @param pretty Optional parameter. If true, the JSON data will be formatted in a pretty, human-readable format. Default is false.
 * @typeparam T - The type of the data to be written to the file.
 * @throws Will throw an error if the file cannot be written.
 * Write a JSON file (sync).
 * @example ```ts
 * writeJsonFileSync("./path/to/file.json", { key: "value" }, true);
 * //=> undefined
 * ```
 */
function writeJsonFileSync(filepath, data, pretty = false) {
    fs__default["default"].writeFileSync(filepath, toJson(data, pretty));
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

function funParseClass(ctor) {
    var _a, _b, _c;
    const node = (_a = esprima.parseScript(ctor.toString(), {
        tolerant: true,
    }).body) === null || _a === void 0 ? void 0 : _a[0];
    const name = (_b = Reflect.get(node, 'id')) === null || _b === void 0 ? void 0 : _b.name;
    if (node.type !== 'ClassDeclaration')
        throw new Error('Expected Class source code.');
    if (!node.body.body)
        throw new Error('Expected Class body.');
    const properties = [];
    const methods = (_c = node.body) === null || _c === void 0 ? void 0 : _c.body.filter((node) => {
        return node.type === 'MethodDefinition';
    }).map((node) => {
        var _a, _b, _c, _d, _e, _f;
        const kind = node.kind;
        if (kind === 'constructor') {
            (_c = (_b = (_a = node.value) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.body) === null || _c === void 0 ? void 0 : _c.forEach((block) => {
                if (block.type !== 'ExpressionStatement')
                    return;
                if (block.expression.type !== 'AssignmentExpression')
                    return;
                if (block.expression.left.type !== 'MemberExpression')
                    return;
                if (block.expression.left.object.type !== 'ThisExpression')
                    return;
                properties.push(block.expression.left.property.name);
            });
        }
        const name = (_d = node === null || node === void 0 ? void 0 : node.key) === null || _d === void 0 ? void 0 : _d.name;
        const params = ((_f = (_e = node === null || node === void 0 ? void 0 : node.value) === null || _e === void 0 ? void 0 : _e.params) === null || _f === void 0 ? void 0 : _f.map((param) => param === null || param === void 0 ? void 0 : param.name)) || [];
        return { kind, name, params };
    });
    return { name, properties, methods };
}

function funParseFunction(func) {
    var _a, _b, _c, _d, _e;
    const root = (_a = esprima.parseScript(func.toString(), {
        tolerant: true,
    }).body) === null || _a === void 0 ? void 0 : _a[0];
    let name = '';
    let params = [];
    if ((root === null || root === void 0 ? void 0 : root.type) === 'FunctionDeclaration') {
        name = ((_b = root === null || root === void 0 ? void 0 : root.id) === null || _b === void 0 ? void 0 : _b.name) || '';
        params = ((_c = root === null || root === void 0 ? void 0 : root.params) === null || _c === void 0 ? void 0 : _c.map((param) => param === null || param === void 0 ? void 0 : param.name)) || [];
    }
    else if ((root === null || root === void 0 ? void 0 : root.type) === 'ExpressionStatement' &&
        (root === null || root === void 0 ? void 0 : root.expression.type) === 'ArrowFunctionExpression') {
        params = ((_e = (_d = root === null || root === void 0 ? void 0 : root.expression) === null || _d === void 0 ? void 0 : _d.params) === null || _e === void 0 ? void 0 : _e.map((param) => param === null || param === void 0 ? void 0 : param.name)) || [];
    }
    return { name, params };
}

/**
 * This function sets the name of a function and returns the function with the new name.
 * @template T - The type of the function.
 * @param name The new name to be set for the function.
 * @param fun The function whose name is to be set.
 * @returns The function with the new name.
 * @example ```ts
 * const myFun = () => 'Hello World';
 * funSetName('newFun', myFun).name;;
 * //=> 'newFun'
 * ```
 */
function funSetName(name, fun) {
    Object.defineProperty(fun, 'name', { value: name, configurable: true });
    return fun;
}

function _toSet(string, ...concatSets) {
    return new Set(string.split(',').concat(concatSets.map((set) => Array.from(set)).flat()));
}

const _HTML_VOID_ELEMENTS = _toSet('area,base,br,col,embed,hr,img,input,keygen,link,meta,param,source,track,wbr');

const _HTML_ELEMENTS = _toSet('a,area,audio,button,col,colgroup,details,dialog,embed,fieldset,form,html,iframe,img,input,link,map,math,meta,object,ol,optgroup,option,script,select,td,textarea,th,video,abbr,acronym,address,applet,article,aside,b,basefont,bdi,bdo,bgsound,big,blink,blockquote,body,canvas,caption,center,cite,code,data,datalist,dd,del,dfn,dir,div,dl,dt,em,figcaption,figure,font,footer,frame,frameset,h1,h2,h3,h4,h5,h6,head,header,hgroup,i,ins,isindex,kbd,label,legend,li,listing,main,mark,marquee,menu,meter,multicol,nav,nextid,nobr,noembed,noframes,noscript,output,p,picture,plaintext,pre,progress,q,rb,rp,rt,rtc,ruby,s,samp,section,slot,small,spacer,span,strike,strong,style,sub,summary,sup,svg,svg:desc,svg:title,table,tbody,template,tfoot,thead,time,title,tr,tt,u,ul,var,xmp', _HTML_VOID_ELEMENTS);

const _HTML_BOOLEAN_ATTRIBUTES = _toSet('async,autocomplete,autofocus,autoplay,border,challenge,checked,compact,contenteditable,controls,default,defer,disabled,formNoValidate,frameborder,hidden,indeterminate,ismap,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,readonly,required,reversed,scoped,scrolling,seamless,selected,sortable,spellcheck,translate');

const _HTML_EVENT_ATTRIBUTES = _toSet('onabort,onautocomplete,onautocompleteerror,onblur,oncancel,oncanplay,oncanplaythrough,onchange,onclick,onclose,oncontextmenu,oncuechange,ondblclick,ondrag,ondragend,ondragenter,ondragleave,ondragover,ondragstart,ondrop,ondurationchange,onemptied,onended,onerror,onfocus,oninput,oninvalid,onkeydown,onkeypress,onkeyup,onload,onloadeddata,onloadedmetadata,onloadstart,onmousedown,onmouseenter,onmouseleave,onmousemove,onmouseout,onmouseover,onmouseup,onmousewheel,onpause,onplay,onplaying,onprogress,onratechange,onreset,onresize,onscroll,onseeked,onseeking,onselect,onshow,onsort,onstalled,onsubmit,onsuspend,ontimeupdate,ontoggle,onvolumechange,onwaiting');

const _HTML_GLOBAL_ATTRIBUTES = _toSet('accesskey,autocapitalize,class,contenteditable,contextmenu,dir,draggable,dropzone,hidden,id,itemprop,lang,slot,spellcheck,style,tabindex,title');

const _HTML_ATTRIBUTES = _toSet('charset,coords,datafld,datasrc,download,href,hreflang,methods,name,ping,referrerpolicy,rel,shape,target,type,urn,alt,crossorigin,preload,alink,background,bgcolor,link,marginbottom,marginheight,marginleft,marginright,margintop,marginwidth,text,vlink,clear,dataformatas,formaction,formenctype,formmethod,formnovalidate,formtarget,align,char,charoff,span,valign,width,src,action,accept,method,profile,color,size,version,allowtransparency,hspace,vspace,decoding,lowsrc,srcset,capture,inputmode,usemap,as,blocking,integrity,display,overflow,content,http-equiv,scheme,archive,classid,code,codebase,codetype,data,declare,standby,valuetype,event,for,language,nomodule,bordercolor,cellpadding,cellspacing,datapagesize,frame,rules,summary,axis,colspan,height,rowspan,scope,cols,maxlength,minlength,rows,wrap,allow,buffered,cite,csp,datetime,dirname,enctype,enterkeyhint,form,headers,high,icon,importance,intrinsicsize,keytype,kind,label,loading,list,low,manifest,max,media,min,optimum,pattern,placeholder,poster,radiogroup,sandbox,sizes,srcdoc,srclang,start,step,value', _HTML_GLOBAL_ATTRIBUTES, _HTML_EVENT_ATTRIBUTES, _HTML_BOOLEAN_ATTRIBUTES);

const el = {};
const attr = {};
class Attr {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
    get isBoolean() {
        return _HTML_BOOLEAN_ATTRIBUTES.has(this.name);
    }
    toString() {
        return `${this.name}${this.isBoolean ? '' : `="${this.value || ''}"`}`;
    }
}
class Elem {
    constructor(tag, ...args) {
        this.tag = tag;
        this.attributes = new Map();
        this.children = [];
        for (const arg of args.flat()) {
            if (arg instanceof Attr) {
                this.attributes.set(arg.name, arg);
            }
            else if (typeof arg === 'string' && tag !== 'script' && tag !== 'style') {
                this.children.push(arg.replace(/\r*\n/g, '<br />'));
            }
            else {
                this.children.push(arg);
            }
        }
        if (this.children.length && this.isVoid) {
            throw new Error('Void elements cannot have children.');
        }
    }
    get isVoid() {
        return _HTML_VOID_ELEMENTS.has(this.tag);
    }
    toString() {
        return `<${this.tag}${this.attributes.size ? ' ' + Array.from(this.attributes.values()).join(' ') : ''}${this.isVoid ? ' />' : `>${this.children.join('')}</${this.tag}>`}`;
    }
    toHtmlElement() {
        var _a;
        const elem = document.createElement(this.tag);
        for (const attr of this.attributes.values()) {
            elem.setAttribute(attr.name, ((_a = attr.value) === null || _a === void 0 ? void 0 : _a.toString()) || '');
        }
        for (const child of this.children) {
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
class Doc extends Elem {
    /**
     * Generate simple HTML page with reasonable defaults.
     */
    static simple(options) {
        return new Doc(attr.lang('en'), el.head(el.meta(attr.charset('utf-8')), el.meta(attr.name('viewport'), attr.content('width=device-width, initial-scale=1')), el.title(options.title || 'index'), comment('Bootstrap CSS'), el.link(attr.rel('stylesheet'), attr.href('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css'), attr.integrity('sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ'), attr.crossorigin('anonymous')), comment('Custom CSS'), el.style('body { margin: 50px; font-family: Arial, Helvetica, sans-serif; font-size: 12px; }'), ...(options.head || [])), el.body(comment('Content'), el.div(attr.id('root'), attr.class('container'), ...(options.body || [])), comment('Bootstrap JS'), el.script(attr.src('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js'), attr.integrity('sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe'), attr.crossorigin('anonymous')), comment('Custom JS'), ...(options.scripts || [])));
    }
    constructor(...args) {
        super('html', ...args);
    }
    toString() {
        return '<!DOCTYPE html>' + super.toString();
    }
}
function comment(comment) {
    return '<!-- ' + comment + ' -->';
}
function tableFrom(rows, hasHeaderRow = true) {
    const thead = el.thead();
    if (hasHeaderRow) {
        rows = rows.slice();
        thead.children.push(el.tr((rows.shift() || []).map((cell) => el.th(cell))));
    }
    return el.table(attr.class('table table-striped table-hover table-sm'), thead, el.tbody(rows.map((row) => el.tr(row.map((cell) => el.td(cell))))));
}
for (const tag of _HTML_ELEMENTS) {
    el[tag] = (...args) => new Elem(tag, ...args);
}
el['html'] = (...args) => new Doc('html', ...args);
for (const name of _HTML_ATTRIBUTES) {
    attr[name] = (value) => new Attr(name, value);
}
const HtmlGenerator = {
    Doc,
    Elem,
    Attr,
    el,
    attr,
    comment,
    tableFrom,
};

/**
 * Returns a value from a map, while setting a given default value before returning it, if the key is not present.
 * @param map map to get value from
 * @param key key to get value for
 * @param callback callback to set the value if key is not present
 * @template K - The type of the keys in the Map.
 * @returns The value retrieved from the Map or generated by the callback function.
 * @example ```ts
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
 * Reverses the order of entries in a Map.
 * @remarks This function creates a new Map with the entries of the original Map in reverse order.
 * The original Map is not modified.
 * @typeparam K - The type of the keys in the Map.
 * @typeparam V - The type of the values in the Map.
 * @param map The Map to reverse.
 * @returns A new Map with the entries of the original Map in reverse order.
 * @example ```ts
 * mapReverse(new Map([['a', 1], ['b', 2], ['c', 3]]));;
 * //=> [['c', 3], ['b', 2], ['a', 1]]
 * ```
 */
function mapReverse(map) {
    return new Map([...map.entries()].reverse());
}

/**
 * Updates the value for the given key in the map using the provided function.
 * If the key does not exist in the map, the function will be called with `undefined` as the value.
 * @template K - The type of the keys in the map.
 * @param map - The map to update.
 * @param key - The key of the value to update.
 * @param fun - The function to use to update the value.
 * This function takes the current value (or `undefined` if the key does not exist) and the key as arguments,
 * and should return the new value.
 * @returns - The new value for the key.
 * @example ```ts
 * const map = new Map<string, number>()
 * map.set('a', 1)
 * mapUpdate(map, 'a', (value, key) => value !== undefined ? value + 1 : 0)
 * map.get('a')
 * //=> 2
 * ```
 */
function mapUpdate(map, key, fun) {
    const value = fun(map.get(key), key);
    map.set(key, value);
    return value;
}

/**
 * Hash a string into a buffer with a given algorithm
 * @param string The string to hash
 * @param algorithm sha1 | sha256 | sha512 | md5 | etc...
 * @see crypto.getHashes for a list of accepted strings for 'algorithm'
 * @example ```ts
 * strHash.toBuffer('hello')
 * //=> <Buffer 2c f2 4d ba 5f b0 a3 0e 26 e8 3b 2a c5 b9 e2 9e 1b 16 1e 5c 1f a7 42 5e 73 04 33 62 93 8b 98 24>
 * ```
 */
function strHashToBuffer(string, algorithm = 'sha256') {
    return crypto.createHash(algorithm).update(string).digest();
}

/**
 * Hash a string into a buffer with a given algorithm
 * @param string The string to hash
 * @param algorithm sha1 | sha256 | sha512 | md5 | etc...
 * @see crypto.getHashes for a list of accepted strings for 'algorithm'
 * @param encoding base64 | base64url | hex | binary | utf8 | utf-8 | utf16le | latin1 | ascii | binary | ucs2 | ucs-2
 * @example ```ts
 * strHash.toString('hello', 'sha256', 'hex')
 * //=> 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
 * ```
 */
function strHashToString(string, algorithm = 'sha256', encoding = 'base64') {
    return strHashToBuffer(string, algorithm).toString(encoding);
}

const nextClassIndex = new Map();
/**
 * This function is a mixin that adds an index to a class and provides several methods to get unique identifiers based on the class name and index.
 * @typeparam TBase - The type of the base constructor.
 * @param BaseConstructor The base constructor to extend.
 * @returns A constructor for a class that extends the base constructor and includes an index and methods for getting unique identifiers.
 * @example ```ts
 * //
 * ```
 */
function MixinIndexed(BaseConstructor) {
    return class Indexed extends BaseConstructor {
        constructor(...args) {
            super(...args);
            const Class = this.getConstructor();
            const i = nextClassIndex.get(Class);
            if (i === undefined) {
                nextClassIndex.set(Class, (this.i = 0));
            }
            else {
                nextClassIndex.set(Class, (this.i = i + 1));
            }
        }
        get uid() {
            return [this.getConstructor().name, this.i];
        }
        get uidString() {
            return this.uid.join(':');
        }
        get uidHashMd5() {
            return strHashToString(this.uidString, 'md5', 'base64url');
        }
        get uidHashSha1() {
            return strHashToString(this.uidString, 'sha1', 'base64url');
        }
        get uidHashSha256() {
            return strHashToString(this.uidString, 'sha256', 'base64url');
        }
    };
}

/**
 * This function is a mixin that adds options management to a base class.
 * @template TBase The type of the base class to which this mixin is applied.
 * @param BaseConstructor The base class to which this mixin is applied.
 * @returns The resulting class with the mixin applied.
 */
function MixinOptions(BaseConstructor) {
    return class Options extends BaseConstructor {
        constructor(...args) {
            super(...args);
        }
        assertOptionsNoIllegalConcurrent(options, ...keys) {
            if (keys.filter((key) => options[key] !== undefined).length < 2)
                return options;
            throw new Error(`Cannot use these options simultanously: ${keys.join(', ')}`);
        }
        assertOptionsNoMissingDependencies(options, key, ...dependencies) {
            if (options[key] === undefined ||
                arrEvery(dependencies, (d) => options[d] !== undefined)) {
                return options;
            }
            throw new Error(`Cannot use the '${key}' option without: ${dependencies.join(', ')}`);
        }
    };
}

/**
 * This function is a mixin that adds timestamp functionality to a base class.
 * @template TBase - The type of the base constructor.
 * @param BaseConstructor The base constructor that the mixin is applied to.
 * @returns The constructor of the new class with the timestamp functionality.
 * @example ```ts
 * //
 * ```
 */
function MixinTimestamped(BaseConstructor) {
    return class Timestamped extends BaseConstructor {
        constructor(...args) {
            super(...args);
            this.timestamp = Date.now();
        }
    };
}

/**
 * Normalize line lengths. Tries to merge sentences with its neighboring sentences onto the same line if they are short.
 * @param sentences Array of sentences
 * @param lowerBound Will try to merge sentences if the length of the current sentence is less than this value. If no user input is given, this value is automatically determined by calculating statistics on the data.
 * @param upperBound Will not merge sentences if the conbined length of the sentences is greater than this value. If no user input is given, this value is automatically determined by calculating statistics on the data.
 */
function normalizeLineLengths(sentences, lowerBound, upperBound) {
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
    let newSentences = singlePass(sentences, lowerBound, upperBound);
    while (newSentences.length !== sentences.length) {
        sentences = newSentences;
        newSentences = singlePass(sentences, lowerBound, upperBound);
    }
    return newSentences;
}

const _exec = util.promisify(child_process.exec);
/**
 * Executes a shell command and returns an object that contains the standard output and standard error.
 * @remarks This function is asynchronous and returns a Promise.
 * @param command The shell command to execute.
 * @returns A Promise that resolves to an object with `stdout` and `stderr` properties.
 * @throws Will throw an error if the command execution fails.
 * @example ```ts
 * executeCommand('ls -la')
 *   .then(result => result.stdout);
 * //=> "expected stdout result"
 *   .catch(error => error.stderr);;
 * //=> "expected stderr result"
 * ```
 */
function executeCommand(command) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield _exec(command);
    });
}

/**
 * @returns An object with the following properties:
 * - `processAllocationMB`: The amount of memory that Node.js has obtained from the system.
 * - `heapAllocationMB`: The amount of memory V8 has allocated for the heap. This is just the memory used by the heap itself, not including the memory used by the objects it contains.
 * - `heapUsedMB`: The amount of memory used by application data on the V8 heap.
 * - `extenalV8`: The amount of memory used by C++ objects bound to JavaScript objects managed by V8.
 * Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
 * @example ```ts
 * memoryUsage().processAllocationMB;;
 * //=> {result in MB}
 * memoryUsage().heapAllocationMB;;
 * //=> {result in MB}
 * memoryUsage().heapUsedMB;;
 * //=> {result in MB}
 * memoryUsage().extenalV8;;
 * //=> {result in MB}
 * ```
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

/**
 * Drain a Readable into a string.
 * @remarks This function is asynchronous and returns a promise that resolves to a string.
 * If an error occurs during the conversion, it returns an empty string.
 * @returns A promise that resolves to a string.
 * @param stream a Readable of string chunks
 * @example ```ts
 * require('fs').createReadStream('file.txt');;
 * //=> {stream}
 * await streamToString(fs.createReadStream('file.txt'));;
 * //=> {content of 'file.txt'}
 * ```
 */
function streamToString(stream) {
    var _a, stream_1, stream_1_1;
    var _b, e_1, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        const chunks = [];
        try {
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
        }
        catch (error) {
            return '';
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
 * Checks if a number is greater than a given lower bound.
 * @param number The number to check.
 * @param lowerBound The lower bound to compare against.
 * @returns A boolean indicating whether the number is greater than the lower bound.
 * @example ```ts
 * isGT(5, 3);;
 * //=> true
 * isGT(2, 3);;
 * //=> false
 * ```
 */
function isGT(number, lowerBound) {
    return number > lowerBound;
}

/**
 * Checks if a number is greater than or equal to a lower bound.
 * @param number The number to check.
 * @param lowerBound The lower bound to compare against.
 * @returns A boolean indicating whether the number is greater than or equal to the lower bound.
 * @example ```ts
 * isGTE(5, 3); ;
 * //=> true
 * isGTE(2, 3); ;
 * //=> false
 * ```
 */
function isGTE(number, lowerBound) {
    return number >= lowerBound;
}

/**
 * Checks if a number is less than or equal to an upper bound.
 * @param number The number to check.
 * @param upperBound The upper bound to compare against.
 * @returns A boolean indicating whether the number is less than or equal to the upper bound.
 * @example ```ts
 * isLTE(5, 10); ;
 * //=> true
 * isLTE(15, 10);;
 * //=> false
 * ```
 */
function isLTE(number, upperBound) {
    return number <= upperBound;
}

/**
 * Checks if a number is less than an upper bound.
 * @remarks This function is part of the `NumberUtils` library.
 * @param number The number to check.
 * @param upperBound The upper bound to compare against.
 * @returns A boolean indicating whether the number is less than the upper bound.
 * @example ```ts
 * import { isLT } from './NumberUtils';
 * isLT(5, 10); ;
 * //=> true
 * isLT(10, 5); ;
 * //=> false
 * ```
 */
function isLT(number, upperBound) {
    return number < upperBound;
}

/**
 * Checks if a number is between two other numbers.
 * @param n The number to check.
 * @param min The minimum boundary.
 * @param max The maximum boundary.
 * @param minExcl If true, the minimum boundary is exclusive. Default is false.
 * @param maxExcl If true, the maximum boundary is exclusive. Default is false.
 * @returns A boolean indicating whether the number is between the two boundaries.
 * @example ```ts
 * isBetween(5, 1, 10);
 * //=> true
 * isBetween(1, 1, 10);
 * //=> true
 * isBetween(1, 1, 10, true);
 * //=> false
 * ```
 */
function isBetween(n, min, max, minExcl = false, maxExcl = false) {
    return (minExcl ? isGT : isGTE)(n, min) && (maxExcl ? isLT : isLTE)(n, max);
}

/**
 * Checks if a number is even.
 * @remarks This function will throw an error if the provided value is not an integer.
 * @param n The number to check.
 * @returns A boolean indicating whether the number is even.
 * @throws Will throw an error if the provided value is not an integer.
 * @example ```ts
 * isEven(2);
 * //=> true
 * isEven(3);
 * //=> false
 * ```
 */
function isEven(n) {
    if (!Number.isInteger(n))
        throw new Error(`Expected integer. Got ${n}`);
    return n % 2 === 0;
}

/**
 * Checks if a number is within a specified range.
 * @param n The number to check.
 * @param range The range to check within. It is an array of two numbers, where the first number is the start of the range and the second number is the end of the range.
 * @param exclusive An optional parameter that specifies whether the start and end of the range are exclusive. It is an array of two booleans, where the first boolean corresponds to the start of the range and the second boolean corresponds to the end of the range. If a boolean is true, the corresponding end of the range is exclusive. Default is [false, false], which means both ends of the range are inclusive.
 * @returns A boolean indicating whether the number is within the range.
 * @example ```ts
 * isInRange(5, [1, 10]);
 * //=> true
 * isInRange(1, [1, 10]);
 * //=> true
 * isInRange(10, [1, 10]);
 * //=> true
 * isInRange(0, [1, 10]);
 * //=> false
 * isInRange(11, [1, 10]);
 * //=> false
 * isInRange(1, [1, 10], [true, false]);
 * //=> false
 * isInRange(10, [1, 10], [false, true]);
 * //=> false
 * ```
 */
function isInRange(n, range, exclusive = [false, false]) {
    return isBetween(n, ...range, ...exclusive);
}

/**
 * Checks if a number is odd.
 * @remarks This function will throw an error if the provided value is not an integer.
 * @param n The number to check.
 * @returns A boolean indicating whether the number is odd.
 * @throws Will throw an error if the input is not an integer.
 * @example ```ts
 * isOdd(5);
 * //=> true
 * isOdd(4);
 * //=> false
 * ```
 */
function isOdd(n) {
    if (!Number.isInteger(n))
        throw new Error(`Expected integer. Got ${n}`);
    return n % 2 !== 0;
}

const locales = new Map([
    ['en-US', [',', '.']],
    ['da-DK', ['.', ',']],
]);
class NumberFormatter {
    /**
     * Create a new number formatter.
     * @param precision The number of decimals to round to.
     */
    constructor(precision = 2) {
        // The character to use as thousand separator.
        this.thousandSeparator = ',';
        // The character to use as decimal separator.
        this.decimalSeparator = '.';
        this.precision = precision;
    }
    /**
     * Set separator strings for a given locale.
     */
    static defineLocale(locale, thousandSeparator, decimalSeparator) {
        locales.set(locale, [thousandSeparator, decimalSeparator]);
    }
    /**
     * Returns a copy of the locales map.
     */
    static getLocales() {
        const result = new Map();
        for (const entry of locales.entries()) {
            result.set(entry[0], [entry[1][0], entry[1][1]]);
        }
        return result;
    }
    /**
     * Set the locale for the number formatter.
     */
    locale(locale) {
        const sep = locales.get(locale);
        if (!sep)
            throw new Error(`Invalid locale: ${locale}. Valid: ${Array.from(locales.keys())}}.`);
        this.thousandSeparator = sep[0];
        this.decimalSeparator = sep[1];
        return this;
    }
    /**
     * Format a number to a string.
     */
    format(number) {
        assertValidNumber(number);
        const negative = number >= 0 ? '' : '-';
        const split = Math.abs(round(number, this.precision)).toString().split('.');
        const decimals = this.precision
            ? this.decimalSeparator + (split[1] || '').padEnd(this.precision, '0')
            : '';
        let result = '';
        for (let i = 0; i < split[0].length; i++) {
            if (i % 3 === 0 && i !== 0) {
                result = this.thousandSeparator + result;
            }
            result = split[0][split[0].length - i - 1] + result;
        }
        return negative + result + decimals;
    }
    /**
     * Parse a formatted string to a number.
     */
    parse(string) {
        return assertValidNumber(Number(strReplaceAll(string, this.thousandSeparator, '')
            .replace(this.decimalSeparator, '.')
            .replace(/[^\d.-]/g, '')
            .split('.')
            .map((s) => parseInt(s))
            .join('.')));
    }
}

/**
 * Generates an array of numbers within a specified range.
 * @param start - The start of the range.
 * @param end - The end of the range.
 * @returns An array of numbers from start to end, inclusive.
 * @throws Will throw an error if start is greater than end.
 * @example ```ts
 * numRange(1, 5);
 * //=> [1, 2, 3, 4, 5]
 * numRange(5, 5);
 * //=> [5]
 * ```
 */
function numRange(start, end) {
    if (start > end) {
        throw new Error(`Expected start to be less than or equal to end. Got: ${start} > ${end}`);
    }
    if (start === end)
        return [start];
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

/**
 * Round a given number down with a given precision.
 * Shifts with exponential notation to avoid floating-point issues.
 * @param number the number to round.
 * @param precision the number of decimal points.
 * @returns The rounded down number.
 * @throws if the given number is not finite or NaN.
 * @example ```ts
 * roundDown(5.6789, 2);;
 * //=> 5.67
 * roundDown(5.6789);;
 * //=> 5
 * ```
 */
function roundDown(number, precision = 0) {
    return roundWith(number, precision, Math.floor);
}

/**
 * Round a given number to a given nearest whole number.
 * @param integer the number to round.
 * @param nearest the nearest whole number to round to.
 * @returns The rounded number.
 * @throws if any of the arguments are either not finite, NaN or not an integer.
 * @example ```ts
 * roundToNearest(111, 1) //=> 111
 * roundToNearest(111, 10) //=> 110
 * roundToNearest(111, 100) //=> 100
 * roundToNearest(111, 1000) //=> 0
 * roundToNearest(13, 3) //=> 12
 * ```
 */
function roundToNearest(integer, nearest = 1) {
    return Math.round(assertInteger(integer) / assertInteger(nearest)) * nearest;
}

/**
 * Matches integers that are a power of 10.
 * Requires that thousand-separators removed.
 */
const regPowerOfTen = /^10*$/;

/**
 * Checks if a given integer is a power of ten.
 * @remarks This function uses regular expressions to test if the integer is a power of ten.
 * @param integer The integer to be checked.
 * @returns A boolean indicating whether the integer is a power of ten.
 * @example ```ts
 * isPowerOfTen(1000); ;
 * //=> true
 * isPowerOfTen(500);  ;
 * //=> false
 * ```
 */
function isPowerOfTen(integer) {
    return regPowerOfTen.test(integer.toString());
}

/**
 * Asserts if the given number is a power of ten.
 * If the number is a power of ten, it returns the number.
 * If the number is not a power of ten, it throws a TypeError.
 * @param number The number to be checked.
 * @returns Returns the number if it is a power of ten.
 * @throws Throws an error if the number is not a power of ten.
 * @example ```ts
 * assertPowerOfTen(10);;
 * //=> true
 * assertPowerOfTen(15);;
 * //=> throws TypeError: Expected number to be a power of ten. Got: 15
 * ```
 */
function assertPowerOfTen(number) {
    if (isPowerOfTen(number))
        return number;
    throw new TypeError(`Expected number to be a power of ten. Got: ${number}`);
}

/**
 * Round a given number to a given nearest whole number.
 * @param integer the number to round.
 * @param nearest the nearest power of ten to round to.
 * @throws if any of the arguments are either not finite, NaN or not an integer.
 * @returns The rounded integer.
 * @throws if 'nearest' is not a power of ten.
 * @example ```ts
 * roundToNearestPow10(111, 1) //=> 111
 * roundToNearestPow10(111, 10) //=> 110
 * roundToNearestPow10(111, 100) //=> 100
 * roundToNearestPow10(111, 1000) //=> 0
 * roundToNearestPow10(111, 50) //=> throws TypeError
 * ```
 */
function roundToNearestPow10(integer, nearest = 1) {
    return Math.round(assertInteger(integer) / assertInteger(assertPowerOfTen(nearest))) * nearest;
}

/**
 * Round a given number up with a given precision.
 * Shifts with exponential notation to avoid floating-point issues.
 * @param number the number to round.
 * @param precision the number of decimal points.
 * @returns The rounded number.
 * @throws if the given number is not finite or NaN.
 * @example ```ts
 * roundUp(1.2345, 2);;
 * //=> 1.24
 * roundUp(1.2345);;
 * //=> 2
 * ```
 */
function roundUp(number, precision = 0) {
    return roundWith(number, precision, Math.ceil);
}

/**
 * Returns the prototype (i.e. the internal [[Prototype]] property) of the specified object.
 * @remarks This function is a wrapper around the built-in `Object.getPrototypeOf` function.
 * @param o The object whose prototype is to be returned.
 * @returns The prototype of the specified object.
 * @example ```ts
 * getPrototype({ a: 1 });;
 * //=> "{}"
 * ```
 */
function getPrototype(o) {
    return Object.getPrototypeOf(o);
}

/**
 * Copies static members from a source constructor to a target constructor, excluding specified keys.
 * @param target The target constructor to inherit static members.
 * @param source The source constructor to copy static members from.
 * @param ignoreKeys An optional array of keys to exclude from copying.
 * @returns The target constructor with the inherited static members.
 * @throws If `target` or `source` is not a constructor.
 * @param - The keys that should not be inherited.
 * @example ```ts
 * class Parent {
 *   static parentStaticMethod() {
 *     return 'Parent static method'
 *   }
 * }
 * class Child {
 *   static childStaticMethod() {
 *     return 'Child static method'
 *   }
 * }
 * inheritStaticMembers(Child, Parent)
 * Child.parentStaticMethod() //=> 'Parent static method'
 * ```
 */
function inheritStaticMembers(target, source, ignoreKeys = []) {
    const ignore = new Set([...ignoreKeys, 'prototype', 'name', 'constructor']);
    for (const key of Reflect.ownKeys(source)) {
        if (ignore.has(key))
            continue;
        if (Reflect.has(target, key))
            continue;
        const des = Object.getOwnPropertyDescriptor(source, key);
        if (!des)
            continue;
        Object.defineProperty(target, key, des);
    }
    return target;
}

/**
 * Returns the first element of an iterable object.
 * @template T - The type of elements in the iterable.
 * @param iterable The iterable object.
 * @returns The first element of the iterable object, or `undefined` if the iterable is empty.
 * @example ```ts
 * iterableFirstElement([1, 2, 3, 4, 5]);;
 * //=> 1
 * ```
 */
function iterableFirstElement(iterable) {
    for (const item of iterable)
        return item;
}

/**
 * Checks if the given value is a prototype.
 * @template T - The type of the value to check.
 * @param value The value to check.
 * @returns A boolean indicating whether the value is a prototype.
 * @example ```ts
 * isPrototype({});;
 * //=> false
 * isPrototype(Object.getPrototypeOf({}));;
 * //=> true
 * ```
 */
function isPrototype(value) {
    if (value === null || typeof value !== 'object')
        return false;
    if (!('constructor' in value))
        return false;
    return value.constructor.prototype === value;
}

/**
 * Checks if the given value is a constructor.
 * @template T - The type of the value to check.
 * @param value The value to check.
 * @returns A boolean indicating whether the value is a constructor or not.
 * @example ```ts
 * class MyClass {}
 * isConstructor(MyClass);;
 * //=> true
 * isConstructor('Not a class');;
 * //=> false
 * ```
 */
function isConstructor(value) {
    return (typeof value === 'function' &&
        'prototype' in value &&
        isPrototype(value.prototype) &&
        value === value.prototype.constructor);
}

/**
 * Iterate the prototype chain of a given object.
 * @remarks This function uses the `Reflect.getPrototypeOf` method to traverse the prototype chain.
 * It also uses the `isPrototype` and `isConstructor` helper functions to determine whether
 * the given object is a prototype or a constructor function.
 * @param object The object whose prototype chain is to be iterated over.
 * @throws If the provided object is not an object or a function, a TypeError will be thrown.
 * @returns A generator that yields each prototype in the chain.
 * @example ```ts
 * class A {}
 * class B extends A {}
 * class C extends B {}
 * const instance = new C()
 * iteratePrototypeChain(C)
 * //=> [ C, B, A, Function.prototype, Object.prototype]
 * iteratePrototypeChain(C.prototype)
 * //=> [C.prototype, B.prototype, A.prototype, Object.prototype]
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
 * Deep freezes an object, making it immutable by recursively freezing all nested objects and functions.
 * @returns The same object, but deeply frozen.
 * @throws If the object is not an object or function.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze | Object.freeze}
 * @param o The object to deep freeze.
 * This function uses `Object.freeze()` to freeze the object and all its nested objects and functions.
 * @example ```ts
 * const obj = {
 *   prop1: 'value1',
 *   prop2: {
 *     nestedProp1: 'nestedValue1',
 *     nestedProp2: {
 *       deeplyNestedProp: 'deeplyNestedValue'
 *     }
 *   },
 *   prop3: () => {
 *     //=> Hello, world!
 *   }
 * }
 * const frozenObj = objDeepFreeze(obj)
 * // Attempting to modify the frozen object will throw an error
 * frozenObj.prop1 //=> 'value1'
 * frozenObj.prop2.nestedProp1 //=> 'nestedValue1'
 * frozenObj.prop2.nestedProp2.deeplyNestedProp //=> 'deeplyNestedValue'
 * frozenObj.prop3() //=> undefined
 * ```
 */
function objDeepFreeze(o) {
    for (const key of Reflect.ownKeys(o)) {
        const value = o[key];
        if ((value && typeof value === 'object') || typeof value === 'function') {
            objDeepFreeze(value);
        }
    }
    return Object.freeze(o);
}

/**
 * Deletes a property from an object and returns the modified object.
 * @param obj The object from which to delete the property.
 * @template K - The type of the keys in the object.
 * @returns The modified object with the key deleted.
 * @param key The key of the property to delete.
 * @example ```ts
 * const obj = { name: 'John', age: 30 };
 * objDelete(obj, 'age');
 * //=> { name: 'John' }
 * ```
 */
function objDelete(obj, key) {
    delete obj[key];
    return obj;
}

/**
 * Returns an iterable of key-value pairs from the given object.
 * @remarks This function is a part of Object Utilities.
 * @typeparam V - The type of values in the object.
 * @returns An iterable of tuples where each tuple is a key-value pair from the object.
 * @param obj The object to iterate over.
 * @example ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * for (const [key, value] of objEntries(obj)) {
 *   //=> a  //=> b  //=> c 3
 * }
 * ```
 */
function* objEntries(obj) {
    yield* Object.entries(obj);
}

/**
 * Returns an array of key-value pairs from the given object.
 * @remarks This function is a utility for converting an object into an array of its entries.
 * Each entry is a tuple where the first element is the key and the second is the value.
 * @typeparam V - The type of the values in the object.
 * @returns An array of entries, where each entry is a tuple of a string and a value of type `V`.
 * @param obj The object to extract keyvalue pairs from.
 * @example ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * objEntriesArray(obj);
 * //=> [['a', 1], ['b', 2], ['c', 3]]
 * ```
 */
function objEntriesArray(obj) {
    return Array.from(Object.entries(obj));
}

/**
 * Applies a callback function to each key-value pair in an object.
 * @param object The object to iterate over.
 * @param callback The function to apply to each keyvalue pair.
 * @template T - The type of the object's properties.
 * @param - An optional function to determine the keys to iterate over. Defaults to `Object.keys`.
 * @returns The original object.
 * @param getKeys The function to retrieve the keys of the object.
 * @example ```ts
 * const myObject = { a: 1, b: 2, c: 3 };
 * objForEach(myObject, (value, key) => {
 *   //=> ${key}: ${value}
 * });
 * ```
 */
function objForEach(object, callback, getKeys = Object.keys) {
    for (const key of getKeys(object)) {
        callback(object[key], key);
    }
    return object;
}

/**
 * Retrieves the value associated with the specified key from an object.
 * @param obj The object from which to retrieve the value.
 * @template K - The type of the keys in the object.
 * @returns The value of the specified key in the object, or `undefined` if the key does not exist.
 * @param key The key of the value to retrieve.
 * @example ```ts
 * const myObj = { name: 'John', age: 30 };
 * objGet(myObj, 'name');
 * //=> 'John'
 * objGet(myObj, 'age');
 * //=> 30
 * objGet(myObj, 'address');
 * //=> undefined
 * ```
 */
function objGet(obj, key) {
    return obj[key];
}

/**
 * This function attempts to retrieve a value from an object using a provided key.
 * If the key does not exist in the object, it uses a callback function to generate a default value.
 * @param obj The object from which to retrieve the value.
 * @param key The key to use when retrieving the value.
 * @param callback The function to call when the key does not exist in the object. This function should return the default value.
 * @returns The value associated with the key in the object, or the result of the callback function if the key does not exist in the object.
 * @example ```ts
 * objGetOrElse({ a: 1, b: 2 }, 'c', (key) => 3);;
 * //=> 3
 * ```
 * @typeparam V - The type of the values in the object.
 */
function objGetOrElse(obj, key, callback) {
    const value = obj[key];
    if (value !== undefined)
        return value;
    return (obj[key] = callback(key));
}

/**
 * Checks if an object has a specific key.
 * @param obj The object to check.
 * @template K - The type of the keys in the object.
 * @returns Returns true if the object has the key, false otherwise.
 * @param key The key to check for.
 * @example ```ts
 * const myObj = { name: 'John', age: 30 };
 * objHas(myObj, 'name');
 * //=> true
 * objHas(myObj, 'email');
 * //=> false
 * ```
 */
function objHas(obj, key) {
    return Object.hasOwn(obj, key);
}

/**
 * Checks if an object is empty. This function iterates over the keys of the provided object and checks if any key is defined.
 * @remarks This function uses the `Object.keys()` method to check if the object has any keys.
 * If the object has at least one key, the function returns `false`, otherwise it returns `true`.
 * @typeparam T - The type of the values in the object.
 * @returns A boolean indicating whether the object is empty or not.
 * @param obj The object to check.
 * @example ```ts
 * const emptyObject = {};
 * const nonEmptyObject = { key: 'value' };
 * objIsEmpty(emptyObject);
 * //=> true
 * objIsEmpty(nonEmptyObject);
 * //=> false
 * ```
 */
function objIsEmpty(obj) {
    for (const key of Object.keys(obj)) {
        if (key !== undefined)
            return false;
    }
    return true;
}

/**
 * Returns an iterable of all the keys in the given object.
 * @remarks This function is a part of the `utils` module.
 * @typeparam V - The type of the values in the object.
 * @returns An iterable of the object's keys.
 * @param obj The object whose keys to iterate over.
 * @example ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * const keys = objKeys(obj);
 * for (const key of keys) {
 *   //=>  //=>  //=> c
 * }
 * ```
 */
function* objKeys(obj) {
    yield* Object.keys(obj);
}

/**
 * Returns an array of keys from the provided object.
 * @remarks This function is a part of Object Utilities.
 * @typeparam V - The type of values in the object.
 * @returns The array of keys of the input object.
 * @param obj The object from which to extract the keys.
 * @example ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * objKeysArray(obj);
 * //=> ['a', 'b', 'c']
 * ```
 */
function objKeysArray(obj) {
    return Array.from(Object.keys(obj));
}

/**
 * Maps over the values of an object and returns a new object with the mapped values.
 * @param object The object to map over.
 * @param callback The mapping function to apply to each value.
 * @template T The type of the values in the input object.
 * @param An optional function to determine the keys to iterate over. Defaults to `Object.keys`.
 * @returns A new object with the same keys as the input object, but with each value transformed by the callback function.
 * @param getKeys The function used to get the keys of the object.
 * @example ```ts
 * const object = { a: 1, b: 2, c: 3 }
 * const callback = (value: number, key: string) => value * 2
 * objMap(object, callback) //=> { a: 2, b: 4, c: 6 }
 * ```
 */
function objMap(object, callback, getKeys = Object.keys) {
    const result = {};
    for (const key of getKeys(object)) {
        result[key] = callback(object[key], key);
    }
    return result;
}

/**
 * Maps the keys of an object using a callback function.
 * @param object The object whose keys will be mapped.
 * @param callback The callback function that maps the keys.
 * @template T - The type of the values in the object.
 * @param - The function to get the keys of the object.
 * @returns A new object with the keys mapped.
 * @param getKeys The function that retrieves the keys of the object.
 * @example ```ts
 * const object = { a: 1, b: 2, c: 3 };
 * const callback = (key: string, value: number) => key.toUpperCase();
 * objMapKeys(object, callback);
 * //=> { A: 1, B: 2, C: 3 }
 * ```
 */
function objMapKeys(object, callback, getKeys = Object.keys) {
    const result = {};
    for (const key of getKeys(object)) {
        result[callback(key, object[key])] = object[key];
    }
    return result;
}

/**
 * Applies a callback function to each key-value pair in an object and mutates the object.
 * @param object The object to be mapped.
 * @param callback The callback function to apply to each valuekey pair.
 * @template T - The type of the properties in the object.
 * @param - An optional function to determine the keys to be iterated over.
 * @returns The mutated object.
 * @param getKeys The function used to get the keys of the object.
 * @example ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * const callback = (value: number, key: string) => value * 2;
 * objMapMutable(obj, callback);
 * //=> { a: 2, b: 4, c: 6 }
 * ```
 */
function objMapMutable(object, callback, getKeys = Object.keys) {
    for (const key of getKeys(object)) {
        object[key] = callback(object[key], key);
    }
    return object;
}

/**
 * Converts the specified properties of an object into getter functions.
 * @template K - The type of the keys of the object.
 * @template V - The type of the values of the object.
 * @template T - The type of the object.
 * @param object The object whose properties are to be converted into getter functions.
 * @param propertyNames The names of the properties to be converted into getter functions.
 * @returns The object with the specified properties converted into getter functions.
 * @throws Throws an error if the property descriptor for a specified property name is not found.
 * @example ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * objPropertyValueToGetter(obj, 'a', 'b');
 * obj.a;;
 * //=> 1
 * obj.b;;
 * //=> 2
 * obj.c;;
 * //=> 3
 * ```
 */
function objPropertyValueToGetter(object, ...propertyNames) {
    for (const propertyName of propertyNames) {
        const descriptor = Object.getOwnPropertyDescriptor(object, propertyName);
        if (!descriptor)
            throw new Error(`Property descriptor for '${String(propertyName)}' not found.`);
        const { enumerable, configurable, value } = descriptor;
        Object.defineProperty(object, propertyName, { enumerable, configurable, get: () => value });
    }
    return object;
}

/**
 * Reduces the values of an object into a single value.
 * @param object The object to reduce.
 * @param callback The function that handles the reduction logic.
 * @param accum The initial value of the accumulator.
 * @template T - The type of the values in the input object.
 * @param - An optional function to get the keys of the object. Defaults to `Object.keys`.
 * @returns The final accumulated value.
 * @param getKeys The function that retrieves the keys of the object.
 * @example ```ts
 * const object = { a: 1, b: 2, c: 3 };
 * const callback = (accum, value, key) => accum + value;
 * const initialAccum = 0;
 * objReduce(object, callback, initialAccum);
 * //=> 6
 * ```
 */
function objReduce(object, callback, accum, getKeys = Object.keys) {
    for (const key of getKeys(object)) {
        accum = callback(accum, object[key], key);
    }
    return accum;
}

/**
 * Reverses the order of the properties in the given object.
 * @remarks This function does not mutate the original object. It returns a new object with the properties in reverse order.
 * @param obj The object to reverse. The object's keys are of type `ObjectKey` and its values are of type `V`.
 * @returns A new object with the properties of the input object in reverse order. The returned object's keys are of type `ObjectKey` and its values are of type `V`.
 * @typeparam V - The type of the values in the input object and the returned object.
 * @example ```ts
 * objReverse({ a: 1, b: 2, c: 3 });;
 * //=> { c: 3, b: 2, a: 1 }
 * ```
 */
function objReverse(obj) {
    return Object.fromEntries(objEntriesArray(obj).reverse());
}

/**
 * Sets a value for a key in an object and returns the value.
 * @template ObjectKey - The type of the keys in the object.
 * @template V - The type of the values in the object.
 * @param obj The object in which to set the value.
 * @param key The key for which to set the value.
 * @param value The value to set.
 * @returns The value that was set.
 * @example ```ts
 * objSet({ a: 1, b: 2 }, 'a', 3);;
 * //=> { a: 3, b: 2 }
 * ```
 */
function objSet(obj, key, value) {
    return (obj[key] = value);
}

/**
 * Calculates and returns the size of the given object.
 * @remarks This function uses `Object.keys(obj).length` to determine the size of the object.
 * @param obj The object whose size is to be calculated.
 * @typeparam V - The type of the values in the object.
 * @returns The size of the object.
 * @example ```ts
 * objSize({ a: 1, b: 2, c: 3 });;
 * //=> 3
 * ```
 */
function objSize(obj) {
    return Object.keys(obj).length;
}

/**
 * Sorts the keys of an object in alphabetical order.
 * @remarks This function does not mutate the original object. It returns a new object with sorted keys.
 * @typeparam V - The type of the values in the object.
 * @returns A new object with the same values as the original, but with keys sorted in ascending order.
 * @param o The object whose keys should be sorted.
 * @example ```ts
 * const obj = { c: 1, a: 2, b: 3 };
 * objSortKeys(obj);
 * //=> { a: 2, b: 3, c: 1 }
 * ```
 */
function objSortKeys(o) {
    return Object.fromEntries(Object.entries(o).sort((a, b) => a[0].localeCompare(b[0])));
}

/**
 * Converts an object to a Map.
 * @remarks This function is useful when you need to convert an object to a Map data structure.
 * @typeparam V - The type of the values in the object.
 * @returns A new Map object populated with the [key, value] pairs from the original object.
 * @param obj The object to convert to a Map.
 * @example ```ts
 * const obj = { key1: 'value1', key2: 'value2' };
 * const map = objToMap(obj);
 * map.get('key1');
 * //=> 'value1'
 * map.get('key2');
 * //=> 'value2'
 * ```
 */
function objToMap(obj) {
    return new Map(Object.entries(obj));
}

/**
 * Updates the value of a specific key in an object using a callback function.
 * @template V - The type of the values in the object.
 * @param obj The object to update.
 * @param key The key of the value to update.
 * @param callback The function to generate the new value. It receives the current value and the key as arguments.
 * @returns The new value.
 * @example ```ts
 * objUpdate({ a: 1, b: 2 }, 'a', (value, key) => value + 1);;
 * //=> { a: 2, b: 2 }
 * ```
 */
function objUpdate(obj, key, callback) {
    return (obj[key] = callback(obj[key], key));
}

/**
 * Returns an iterable of the values of the given object.
 * @remarks This function uses the `Object.values()` method to get all the values of the object and then yields them one by one.
 * @typeparam V - The type of the values in the object.
 * @returns An iterable that yields all the values of the given object.
 * @param obj The object whose values should be returned.
 * @example ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * const values = objValues(obj);
 * for (const value of values) {
 *   //=> {value}
 * }
 * // Output:
 * // 1
 * // 2
 * // 3
 * ```
 */
function* objValues(obj) {
    yield* Object.values(obj);
}

/**
 * Returns an array containing the values of the given object.
 * @remarks This function is a part of Object Utilities.
 * @typeparam V - The type of values in the object.
 * @returns An array of the values of the object.
 * @param obj The object whose values will be extracted.
 * @example ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * objValuesArray(obj);
 * //=> [1, 2, 3]
 * ```
 */
function objValuesArray(obj) {
    return Array.from(Object.values(obj));
}

/**
 * Recursively traverses an object and invokes a callback function for every encountered non-object value.
 * The callback function is passed the non-object value and an array representing the path to the value.
 * @param node - The object to be traversed.
 * @param callback - The callback function to be invoked for every non-object value.
 * @example ```ts
 * const obj = { a: 1, b: { c: 2, d: [3, 4] } };
 * objWalk(obj, (value, path) => {
 *   console.log(`Path: ${path.join('.')}, Value: ${value}`);
 * });
 * // Output:
 * // Path: a, Value: 1
 * // Path: b.c, Value: 2
 * // Path: b.d[0], Value: 3
 * // Path: b.d[1], Value: 4
 * ```
 */
function objWalk(node, callback) {
    const hasOwn = Object.prototype.hasOwnProperty;
    function recurse(node, path = []) {
        for (const key in node) {
            if (!hasOwn.call(node, key))
                continue;
            const child = node[key];
            if (typeof child === 'object' && child !== null) {
                if (Array.isArray(child)) {
                    child.forEach((node, index) => {
                        recurse(node, path.concat([`${key}[${index}]`]));
                    });
                }
                else {
                    recurse(child, path.concat(key));
                }
            }
            else {
                callback(child, path.concat(key));
            }
        }
    }
    recurse(node);
}

/**
 * Sets the enumerable property of the specified properties of an object to true.
 * @template T - The type of the object.
 * @param object The object whose properties' enumerable property will be set to true.
 * @param propertyNames The names of the properties to be set enumerable.
 * @returns void
 * @example ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * setEnumerable(obj, 'a', 'b');
 * Object.keys(obj);;
 * //=> ['a', 'b']
 * ```
 * @remarks This function uses `Object.defineProperty` to set the enumerable property.
 * @throws This function will throw an error if the property does not exist on the object.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty | Object.defineProperty}
 */
function setEnumerable(object, ...propertyNames) {
    for (const propertyName of propertyNames) {
        Object.defineProperty(object, propertyName, { enumerable: true });
    }
}

/**
 * Sets the specified properties of an object as non-configurable.
 * @remarks This function modifies the original object by setting the `configurable` attribute of the specified properties to `false`.
 * Once a property is made non-configurable, it can neither be deleted from the object nor changed to configurable.
 * @typeparam T - The type of the object.
 * @param object The object whose properties are to be made non-configurable.
 * @param propertyNames The names of the properties to be made non-configurable.
 * @throws If `object` is not an object or `propertyNames` is not a string array.
 * @example ```ts
 * setNonConfigurable({ a: 1, b: 2, c: 3 }, 'a', 'b');
 * Object.getOwnPropertyDescriptor({ a: 1, b: 2, c: 3 }, 'a');;
 * //=> {value: 1, writable: true, enumerable: true, configurable: false}
 * Object.getOwnPropertyDescriptor({ a: 1, b: 2, c: 3 }, 'b');;
 * //=> {value: 2, writable: true, enumerable: true, configurable: false}
 * Object.getOwnPropertyDescriptor({ a: 1, b: 2, c: 3 }, 'c');;
 * //=> {value: 3, writable: true, enumerable: true, configurable: true}
 * ```
 */
function setNonConfigurable(object, ...propertyNames) {
    for (const propertyName of propertyNames) {
        Object.defineProperty(object, propertyName, { configurable: false });
    }
}

/**
 * Sets the specified properties of an object as non-enumerable.
 * @remarks This function modifies the original object by setting the enumerable attribute of the specified properties to false.
 * If the object does not have the specified property, it will be ignored.
 * If the object is not an object, an error will be thrown.
 * @typeparam T - The type of the object.
 * @param object The object whose properties are to be set as non-enumerable.
 * @param propertyNames The names of the properties to be set as non-enumerable.
 * @throws Will throw an error if the first argument is not an object.
 * @throws Will throw an error if a specified property does not have a descriptor.
 * @example ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * setNonEnumerableSafe(obj, 'a', 'b');
 * Object.keys(obj);;
 * //=> ['c']
 * ```
 */
function setNonEnumerableSafe(object, ...propertyNames) {
    if (!object || typeof object !== 'object') {
        throw new Error(`setValueAsGetter() requires an object as the first argument.`);
    }
    for (const propertyName of propertyNames) {
        if (!Object.hasOwn(object, propertyName)) {
            continue;
        }
        const des = Object.getOwnPropertyDescriptor(object, propertyName);
        if (!des)
            throw new Error(`Property '${propertyName}' does not have a descriptor.`);
        des.enumerable = false;
        Object.defineProperty(object, propertyName, des);
    }
}

/**
 * Sets the specified properties of an object to be non-writable.
 * @template T - The type of the object.
 * @param object The object whose properties are to be made non-writable.
 * @param propertyNames The names of the properties to be made non-writable.
 * @returns void
 * @example ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * setNonWritable(obj, 'a', 'b');
 * obj;;
 * //=> { a: 1, b: 2, c: 3 }
 * obj.a = 10;;
 * //=> Throws an error
 * obj.b = 20;;
 * //=> Throws an error
 * obj.c = 30;;
 * //=> Works fine
 * ```
 */
function setNonWritable(object, ...propertyNames) {
    for (const propertyName of propertyNames) {
        Object.defineProperty(object, propertyName, { writable: false });
    }
}

/**
 * Sets the specified properties of an object to be writable.
 * @template T - The type of the object.
 * @param object The object whose properties are to be made writable.
 * @param propertyNames The names of the properties to be made writable.
 * @remarks This function uses `Object.defineProperty` to set the `writable` attribute of the specified properties to `true`.
 * @example ```ts
 * setWritable({ a: 1, b: 2 }, 'a', 'b').a = 3;;
 * //=> 3
 * setWritable({ a: 1, b: 2 }, 'a', 'b').b = 4;;
 * //=> 4
 * ```
 * @returns void
 */
function setWritable(object, ...propertyNames) {
    for (const propertyName of propertyNames) {
        Object.defineProperty(object, propertyName, { writable: true });
    }
}

/**
 * Wraps a given code string in a markdown code block.
 * @param code The code string to be wrapped.
 * @param language The language of the code string. Default is an empty string.
 * @remarks This function is useful when you want to format a string of code to be displayed in markdown.
 * @returns The code string wrapped in a markdown code block.
 * @example ```ts
 * markdownWrapCodeBlock("console.log('Hello, World!')", "javascript");;
 * //=> "```javascript\nconsole.log('Hello, World!')\n```"
 * ```
 */
function markdownWrapCodeBlock(code, language = '') {
    return '```' + language + '\n' + code.trim() + '\n```';
}

/**
 * Clones a regular expression.
 * @remarks This function creates a new instance of the RegExp using the source and flags of the provided regular expression.
 * @param regex The regular expression to clone.
 * @returns A new RegExp instance with the same source and flags as the provided regular expression.
 * @example ```ts
 * /abc/gi;;
 * //=> /abc/gi
 * regexClone(/abc/gi);;
 * //=> /abc/gi
 * ```
 */
function regexClone(regex) {
    return new RegExp(regex.source, regex.flags);
}

/**
 * Easily perform regex 'exec' on a string. An iterable is returned which steps through the exec process and yields all the details you might need.
 * @param regex The regular expression object
 * @returns A generator that yields an object for each match.
 * @throws If the provided regex is not a RegExp instance.
 * @param string The string to perform the operation on
 * @example ```ts
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
    regex = regexClone(regex);
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
 * Returns the first match of a regular expression in a string.
 * @remarks This function is a part of RegExp utilities.
 * @param regex The regular expression to be used for matching.
 * @param string The string in which to search for a match.
 * @returns The first match as an `RexecYield` object, or `undefined` if no match is found.
 * @example ```ts
 * rexecFirstMatch(/hello/g, 'hello world');;
 * //=> { match: 'hello', index: 0, input: 'hello world', groups: undefined }
 * ```
 */
function rexecFirstMatch(regex, string) {
    return iterableFirstElement(rexec(new RegExp(regex.source, regex.flags), string));
}

/**
 * Parse language and code content from a markdown code block.
 * @param string The markdown string containing the code block.
 * @remarks This function uses regular expressions to parse the markdown code block.
 * @returns An object containing the language and the code from the markdown code block.
 * @throws Throws an error if the markdown code block cannot be parsed.
 * @example ```ts
 * const markdown = "```javascript\nconsole.log('Hello, World!');\n```";
 * parseMarkdownCodeBlock(markdown);
 * //=> { language: "javascript", code: "console.log('Hello, World!');" }
 * ```
 */
function parseMarkdownCodeBlock(string) {
    var _a;
    const groups = (_a = rexecFirstMatch(/```(?<language>\w+)?(?<code>.+)```/gs, string.trim())) === null || _a === void 0 ? void 0 : _a.groups;
    if (!groups)
        throw new Error('Could not parse the markdown code block.');
    const { language, code } = groups;
    return { language, code: code.trim() };
}

/**
 * Parses a markdown table into a 2D array of strings.
 * @remarks This function will remove leading and trailing pipes from each row, as well as any empty lines.
 * It will also remove the separator line (the second line in a standard markdown table).
 * Each cell's content will be trimmed of leading and trailing whitespace.
 * @returns A 2D array of strings, where each inner array represents a row of the table, and each string within that array represents a cell.
 * @param string The markdown table to parse.
 * @example ```ts
 * | Header 1 | Header 2 |
 * |----------|----------|
 * | Cell 1   | Cell 2   |
 * | Cell 3   | Cell 4   |
 * `);
 * //=> [['Header 1', 'Header 2'], ['Cell 1', 'Cell 2'], ['Cell 3', 'Cell 4']]
 * ```
 */
function parseMarkdownTable(string) {
    return string
        .trim() // allow leading/trailing whitespace
        .split('\n')
        .map((s) => s.trim())
        .filter((s, i) => !!s) // remove empty lines
        .filter((s, i) => i !== 1) // remove the separator line
        .map((row) => {
        return row
            .trim()
            .replace(/^\|/, '') // remove leading pipe
            .replace(/\|$/, '') // remove trailing pipe
            .split('|')
            .map((cell) => cell.trim());
    });
}

/**
 * Parse text content of each page in a PDF file. Array indices correspond to page numbers.
 */
function pdfIteratePages(filepath, begin, end) {
    return __asyncGenerator(this, arguments, function* pdfIteratePages_1() {
        const buffer = yield __await(fs__default["default"].promises.readFile(filepath));
        const doc = yield __await(pdfLib.PDFDocument.load(buffer.buffer));
        if (!end)
            end = doc.getPages().length;
        if (!begin)
            begin = 0;
        for (let i = begin; i < end; i++) {
            try {
                const pageDoc = yield __await(pdfLib.PDFDocument.create());
                const [pageCopy] = yield __await(pageDoc.copyPages(doc, [i]));
                pageDoc.addPage(pageCopy);
                const pageIntArray = yield __await(pageDoc.save());
                const pageBuffer = Buffer.from(pageIntArray);
                const pageData = yield __await(pdf__default["default"](pageBuffer));
                yield yield __await(pageData.text);
            }
            catch (error) {
                yield yield __await('');
            }
        }
    });
}

/**
 * Parse text content of each page in a PDF file. Array indices correspond to page numbers.
 */
function pdfGetPages(filepath, begin, end) {
    var _a, e_1, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        const result = [];
        try {
            for (var _d = true, _e = __asyncValues(pdfIteratePages(filepath, begin, end)), _f; _f = yield _e.next(), _a = _f.done, !_a;) {
                _c = _f.value;
                _d = false;
                try {
                    const page = _c;
                    result.push(page);
                }
                finally {
                    _d = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = _e.return)) yield _b.call(_e);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
    });
}

/**
 * Split a given PDF file into separate single-page-files.
 * @returns Array of filepaths of the split files. Array indices correspond to page numbers.
 */
function pdfSplitPages(filepath, outputDirpath) {
    return __awaiter(this, void 0, void 0, function* () {
        const inputBuffer = yield fs__default["default"].promises.readFile(filepath);
        const doc = yield pdfLib.PDFDocument.load(inputBuffer);
        const numPages = doc.getPages().length;
        const numPageNumDigits = numPages.toString().length;
        const filepaths = [];
        yield mkdirp.mkdirp(outputDirpath);
        for (let i = 0; i < numPages; i++) {
            const page = yield pdfLib.PDFDocument.create();
            const [copiedPage] = yield page.copyPages(doc, [i]);
            page.addPage(copiedPage);
            const pageNumber = i;
            const outputBuffer = yield page.save();
            const outputFilename = `${pageNumber.toString().padStart(numPageNumDigits, '0')}.pdf`;
            const outputFilepath = path__default["default"].join(outputDirpath, outputFilename);
            yield fs__default["default"].promises.writeFile(outputFilepath, outputBuffer);
            filepaths[pageNumber] = outputFilepath;
        }
        return filepaths;
    });
}

/**
 * Removes duplicate characters from a string.
 * @throws Will throw an error if the provided argument is not a string.
 * @param string The string from which to remove duplicate characters.
 * @example ```ts
 * strRemoveDuplicateChars('hello');
 * //=> 'helo'
 * ```
 */
function strRemoveDuplicateChars(string) {
    return Array.from(new Set(string)).join('');
}

/**
 * Builds a regex that matches a string between two strings. Supports regex instead of string.
 * @param left string or regex to match before
 * @param flags regex flags - 'g' and 's' are always added to whatever flags are passed.
 * @remarks The function accepts either strings or regular expressions as the left and right patterns.
 * If a string is provided, it will be escaped to form a valid regular expression.
 * The function also accepts an optional flags parameter to specify regular expression flags.
 * @returns A regular expression that matches text between the left and right patterns.
 * @example ```ts
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
 * Sorts the characters in a string in alphabetical order.
 * @param string The string to sort.
 * @example ```ts
 * strSortChars('dcba');
 * //=> 'abcd'
 * ```
 */
function strSortChars(string) {
    return Array.from(string).sort().join('');
}

/**
 * Takes a string of RegExp flags and returns a string guaranteed to be valid.
 * @returns The processed string of regex flags.
 * @remarks This function does not validate if the input string is a valid regex flags string. It only removes duplicates and non-regex characters.
 * @throws This function does not throw any exceptions.
 * @see strSortChars, strRemoveDuplicateChars
 * @param flags string of RegExp flags
 * @example ```ts
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
 * Returns an array of group names from a regular expression.
 * @param re The regular expression to extract group names from.
 * @returns An array of group names.
 * @example ```ts
 * regexGetGroupNames(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/);;
 * //=> ['year', 'month', 'day']
 * ```
 * @remarks This function only works with regular expressions that use named capture groups.
 */
function regexGetGroupNames(re) {
    const names = [];
    for (const res of rexec(/\(\?<(?<name>\w+)>/g, re.toString())) {
        names.push(res.groups.name);
    }
    return names;
}

/**
 * Checks if the provided string is a valid regular expression flag.
 * @remarks This function checks if the provided string contains only the characters 'g', 'i', 'm', 's', 'u', 'y' and if there are no duplicate characters.
 * @param flags The string to be checked.
 * @returns A boolean indicating whether the string is a valid regular expression flag.
 * Checks if a string is a valid regex flags string.
 * @example ```ts
 * regexIsValidFlags('gim') // true
 * regexIsValidFlags('gmisuy') // false
 * ```
 */
function regexIsValidFlags(flags) {
    return /^[gimsuy]*$/.test(flags) && strRemoveDuplicateChars(flags).length === flags.length;
}

/**
 * Convert a regex for matching to a regex for validation.
 * @returns A new regular expression that matches the entire string.
 * @param regex The regex to convert
 * @example ```ts
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
 * This function compares two arrays using a provided comparator function.
 * It can compare arrays of any type, as long as the comparator function can handle the type.
 * If the arrays are of different lengths, the shorter one is considered smaller.
 * If the arrays are of the same length, the elements are compared one by one until a difference is found.
 * If no difference is found, the arrays are considered equal.
 * @template T - The type of the elements in the arrays.
 * @param compareAt The comparator function to use for comparing elements.
 * It should take two arguments of type T and return a number:
 * - a negative number if the first argument is smaller,
 * - a positive number if the first argument is larger,
 * - and 0 if they are equal.
 * @param descending Whether to sort in descending order. Defaults to false.
 * If true, larger elements will come before smaller ones.
 * If false (the default), smaller elements will come before larger ones.
 * @returns A comparator function that can be used for sorting arrays with the Array.prototype.sort method.
 * @example ```ts
 * [[1, 2, 3], [1, 2, 2], [1, 1, 4]].sort(compareArray((a, b) => a - b));;
 * //=> [[1, 1, 4], [1, 2, 2], [1, 2, 3]]
 * ```
 */
function compareArray(compareAt, descending = false) {
    const order = descending ? -1 : 1;
    function recursiveCompare(a, b, compareParent) {
        if (Array.isArray(a)) {
            if (!Array.isArray(b))
                return 1 * order;
            let shortest, compare;
            if (a.length > b.length) {
                shortest = a.length;
                compare = 1 * order;
            }
            else if (a.length < b.length) {
                shortest = b.length;
                compare = -1 * order;
            }
            else {
                shortest = a.length;
                compare = 0;
            }
            for (let i = 0, len = shortest; i < len; i++) {
                const res = recursiveCompare(a[i], b[i], compare);
                if (res !== 0) {
                    return res;
                }
            }
        }
        else {
            if (Array.isArray(b))
                return -1 * order;
            const res = compareAt(a, b);
            return res === 0 ? compareParent || res : res;
        }
        return 0;
    }
    return (a, b) => {
        return recursiveCompare(a, b);
    };
}

/**
 * Builds a regex that matches a string between two strings. Supports regex instead of string.
 * @param left string or regex to match before
 * @param right string or regex to match after
 * @returns A generator function that takes a string and an optional boolean parameter.
 * The generator function yields nodes of type IRegexScopeTreeNode.
 * @throws If a match does not recognize itself as neither left nor right.
 * @example ```ts
 * const generator = regexScopeTree('(', ')')
 * const iterable = generator('(1+((3)+(1)))+(15+(21-(521))))', true)
 * console.dir([...iterable], { depth: null })
 * ```
 */
function regexScopeTree(left, right) {
    function parseParam(param) {
        const isString = typeof param === 'string';
        const reg = isString
            ? new RegExp(regexEscapeString(param), 'g')
            : new RegExp(param.source, strRemoveDuplicateChars(param.flags + 'g'));
        const regValidate = new RegExp('^' + reg.source + '$', '');
        return [reg, regValidate];
    }
    const [regLeft, regLeftValidate] = parseParam(left);
    const [regRight, regRightValidate] = parseParam(right);
    return function* (string, yieldOnlyRootNodes = false) {
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
    };
}

/**
 * This function returns an array of valid flags for regular expressions in JavaScript.
 * @returns An array of valid flags for regular expressions.
 * Returns an array of all valid flags for a regular expression.
 * @example ```ts
 * regexValidFlags() //=> ['g', 'i', 'm', 's', 'u', 'y']
 * ```
 */
function regexValidFlags() {
    return ['g', 'i', 'm', 's', 'u', 'y'];
}

/**
 * Matches block comments including if they are indented.
 */
const regBlockCommentsWithIndent = buildRegexBetween(/(^|\n| *)\/\*\*/g, /\n +\*\//g);

/**
 * Matches exported functions in TypeScript source code.
 */
const regFunctionsExports = buildRegexBetween(/(^|\n)export (default )?(async )?function/, /\n\}(\n|$)/);

/**
 * Understands prefixes for hex colors, hex decimal and regexp unicode hex.
 */
const regHex = /^(0x|0h|(\\?u)|#)?[0-9A-F]+$/i;

/**
 * Prefixes for hex colors, hex decimal and regexp unicode hex
 */
const regHexPrefix = /^(0x|0h|(\\?u)|#)/i;

/**
 * Matches positive or negative integers.
 * Example: -20
 */
const regInteger$1 = /-?\d+/g;

/**
 * Matches root level Jest describe() tests.
 */
const regJestTests = buildRegexBetween(/(^|\n)describe\(/, '\n})');

/**
 * For checking if a string is of only alpha characters for a specific locale.
 */
const regLocaleAlpha = new Map([
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
    ['he', /^[א-ת]+$/],
    ['fa', /^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی']+$/i],
]);

/**
 * For checking if a string is of only alpha-numeric characters for a specific locale.
 */
const regLocaleAlphaNumeric = new Map([
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
    ['he', /^[0-9א-ת]+$/],
    ['fa', /^['0-9آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی۱۲۳۴۵۶۷۸۹۰']+$/i],
]);

/**
 * Matches US format positive or negative decimal numbers with thousand separators.
 * Example: -20,412.34
 */
const regNumberCommaSepDotDecimal = /-?\d{1,3}(,\d{3})*(\.\d+)?/g;

/**
 * Matches inverted US format positive or negative decimal numbers with thousand separators.
 * Example: -20.412,34
 */
const regNumberDotSepCommaDecimal = /-?\d{1,3}(\.\d{3})*(,\d+)?/g;

/**
 * Matches inverted US format positive or negative decimal numbers with no thousand separators.
 * Example: -20412,3461
 */
const regNumberNoThousandSepCommaDecimal = /-?\d+,\d+/g;

/**
 * Matches US format positive or negative decimal numbers with no thousand separators.
 * Example: -20412.3461
 */
const regNumberNoThousandSepDotDecimal = /-?\d+.\d+/g;

/**
 * Matches 2 or more consecutive whitespace characters, including line terminators, tabs, etc.
 */
const regRepeatingWhiteSpace = /((\r?\r?\n)|\s|\t){2,}/g;

/**
 * Matches Danish social security numbers with or without the dash.
 * Example: 151199-1512
 */
const regSocialSecurityNumbersDK = /(?<dd>[0-3][0-9])(?<mm>[0-1][0-9])(?<yy>[0-9]{2}).?(?<id4>[0-9]{4})/g;

/**
 * Matches TSDoc example-tag content wrapped in markdown typescript code blocks.
 */
const regTsDocExampleCode = buildRegexBetween(/```(ts|typescript)/i, ' * ```');

/**
 * Matches TSDoc example-tag content wrapped in markdown typescript code blocks.
 */
const regTsDocExampleLines = buildRegexBetween(/ +\* +(@example )?```(ts|typescript|js|javascript)?/i, / +\* +```\n/g);

/**
 * Matches words in a text string.
 */
const regWords = /\b[^\W]+/g;

/**
 * Returns a new set that contains all elements of the first set that are not in the second set.
 * @template T - The type of elements in the set.
 * @param set1 The first set.
 * @param set2 The second set.
 * @returns A new set that contains all elements of the first set that are not in the second set.
 * @example ```ts
 * new Set([1, 2, 3, 4]);;
 * //=> Set {1, 2, 3, 4}
 * new Set([3, 4, 5, 6]);;
 * //=> Set {3, 4, 5, 6}
 * setDifference(new Set([1, 2, 3, 4]), new Set([3, 4, 5, 6]));;
 * //=> Set {1, 2}
 * ```
 */
function setDifference(set1, set2) {
    const result = new Set(set1);
    for (const elem of set2) {
        result.delete(elem);
    }
    return result;
}

/**
 * Computes the intersection of multiple sets.
 * @typeparam T - The type of elements in the sets.
 * @returns The intersection of all sets in the array.
 * @param sets An array of sets to compute the intersection from.
 * @example ```ts
 * const set1 = new Set([1, 2, 3]);
 * const set2 = new Set([2, 3, 4]);
 * const set3 = new Set([3, 4, 5]);
 * setIntersection([set1, set2, set3]);
 * //=> new Set([3])
 * ```
 */
function setIntersection(sets) {
    if (!sets.length)
        return new Set();
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
 * Checks if a given set is a superset of another set. This function iterates over each element in the `subset` set and checks if it exists in the `set` set. If any element in the `subset` set does not exist in the `set` set, the function returns `false`. Otherwise, it returns `true`.
 * @param set The set to check if it is a superset.
 * @remarks This function will return true if all elements of the subset are found in the set, otherwise it will return false.
 * @typeparam T - The type of elements in the set.
 * @returns A boolean indicating whether the set is a superset of the subset.
 * @param subset The set to check if it is a subset.
 * @example ```ts
 * const set1 = new Set([1, 2, 3, 4]);
 * const set2 = new Set([2, 4]);
 * setIsSuperset(set1, set2);
 * //=> true
 * ```
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
 * Calculates the symmetric difference between two sets. The symmetric difference of two sets is the set of elements that are in either of the sets, but not in their intersection.
 * @param setA The first set.
 * @template T - The type of elements in the input sets.
 * @returns A new Set containing the symmetric difference between the input sets.
 * @param setB The second set.
 * @example ```ts
 * const setA = new Set([1, 2, 3]);
 * const setB = new Set([2, 3, 4]);
 * setSymmetricDifference(setA, setB);
 * //=> Set([1, 4])
 * ```
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
 * Computes the union of multiple sets.
 * @remarks This function does not mutate the original sets.
 * @typeparam T - The type of elements in the sets.
 * @returns A new set that is the union of all sets in the input array.
 * @param sets An array of sets to compute the union of.
 * @example ```ts
 * const set1 = new Set([1, 2, 3]);
 * const set2 = new Set([2, 3, 4]);
 * const set3 = new Set([3, 4, 5]);
 * setUnion([set1, set2, set3]);
 * //=> Set(5) { 1, 2, 3, 4, 5 }
 * ```
 */
function setUnion(sets) {
    if (!sets.length)
        return new Set();
    const result = new Set(sets[0].values());
    for (let i = 1; i < sets.length; i++) {
        for (const value of sets[i].values()) {
            result.add(value);
        }
    }
    return result;
}

/**
 * Number comparator function (descending)
 * @param a first value to compare
 * @param b second value to compare
 * @returns The difference between the two numbers (b - a). If the result is positive, `b` is larger. If the result is negative, `a` is larger. If the result is 0, both numbers are equal.
 * @example ```ts
 * const arr = [3, 1, 4, 1, 5]
 * arr.sort(compareNumberDescending) // [5, 4, 3, 1, 1]
 * ```
 */
function compareNumberDescending(a, b) {
    return b - a;
}

/**
 * number, bigint, boolean comparator function (descending)
 * @remarks This function is used for sorting arrays of numbers in descending order.
 * @param a first value to compare
 * @param b second value to compare
 * @returns A number indicating the sort order. -1 if `a` is greater than `b`, 1 if `a` is less than `b`, 0 if they are equal.
 * @example ```ts
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
 * @returns A negative number if `a` is greater than `b`, a positive number if `a` is less than `b`, or 0 if they are equal.
 * @example ```ts
 * compareStringDescending('apple', 'banana');;
 * //=> 1
 * compareStringDescending('banana', 'apple');;
 * //=> -1
 * compareStringDescending('apple', 'apple');;
 * //=> 0
 * ```
 */
function compareStringDescending(a, b) {
    return b.localeCompare(a);
}

/**
 * Converts a column letter (e.g., A, B, C, ..., Z, AA, AB, ...) to a column number.
 * @param A The column letter to convert.
 * @param zeroIndexed Optional. If true, the function will return a zero-indexed column number. Default is false.
 * @throws Will throw an error if the input column letter is invalid.
 * @returns The column number corresponding to the input column letter.
 * @example ```ts
 * letterToCol('A');;
 * //=> 1
 * letterToCol('Z');;
 * //=> 26
 * letterToCol('AA');;
 * //=> 27
 * letterToCol('AB', true);;
 * //=> 27
 * ```
 */
function letterToCol(A, zeroIndexed = false) {
    const REGEX_VALID_A = /^[A-Z]*$/i;
    A = A.toUpperCase();
    if (!REGEX_VALID_A.test(A))
        throw new Error(`Invalid column letter: ${A}`);
    let col = 0;
    const length = A.length;
    for (let i = 0; i < length; i++) {
        col += (A.charCodeAt(i) - 64) * Math.pow(26, length - i - 1);
    }
    return col - (zeroIndexed ? 1 : 0);
}

/**
 * Converts an A1 notation string to a column-row pair.
 * @param A1 The A1 notation string to convert.
 * @param - Whether to return zero-indexed values.
 * @param zeroIndexed Optional. If true, the returned indices will be zero-based. Default is false.
 * @returns An array where the first element is the column index and the second element is the row index.
 * @throws If the A1 string is invalid.
 * @example ```ts
 * //=> [1, 1]
 * A1ToColRow('B2', true);
 * //=> [1, 1]
 * ```
 */
function A1ToColRow(A1, zeroIndexed = false) {
    const REGEX_VALID_A1 = /^(?<a>[A-Z]+)(?<n>[1-9]+)$/g;
    A1 = A1.toUpperCase();
    const matches = [...rexec(REGEX_VALID_A1, A1)];
    if (!matches.length)
        throw new Error(`Invalid A1 string: ${A1}`);
    const adjust = zeroIndexed ? 1 : 0;
    return [letterToCol(matches[0].groups.a) - adjust, parseInt(matches[0].groups.n) - adjust];
}

/**
 * Converts a column number to a column letter (e.g. 1 => 'A', 27 => 'AA').
 * @param col The column number to convert. Must be a positive integer.
 * @param zeroIndexed Optional. Whether the column number is zero-indexed. Defaults to false.
 * @throws If `col` is not an integer.
 * @throws If `col` is less than 1.
 * @returns The column letter corresponding to the column number.
 * @example ```ts
 * colToLetter(1);;
 * //=> 'A'
 * colToLetter(27);;
 * //=> 'AA'
 * colToLetter(1, true);;
 * //=> 'B'
 * ```
 */
function colToLetter(col, zeroIndexed = false) {
    if (zeroIndexed)
        col++;
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
 * Converts a column and row index to A1 notation.
 * @param CR An array of two numbers where the first number is the column index and the second number is the row index.
 * @param zeroIndexed A boolean indicating whether the column and row indexes are zero-based. Defaults to false.
 * @throws If the length of the CR array is not 2.
 * @throws If the row index is not an integer.
 * @throws If the row index is less than 1.
 * @returns The A1 notation of the column and row index.
 * @example ```ts
 * colRowToA1([3, 5]);;
 * //=> 'D5'
 * colRowToA1([3, 5], true);;
 * //=> 'C5'
 * ```
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
 * Counts the number of occurrences of each character in a string and returns a Map where the keys are the characters and the values are their counts.
 * @param string The string to count characters in.
 * @example ```ts
 * strCountChars("hello");;
 * //=> Map { 'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1 }
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
 * Just a wrapper for lodash's 'words' function.
 * Returns an array of words in the string.
 * @param input input string
 * @example ```ts
 * strToWords('How are you?')
 * //=> ['How', 'are', 'you']
 * ```
 */
function strToWords(input) {
    return lodash.words(input);
}

/**
 * Counts the number of words in a given string.
 * @param string The input string to count the words from.
 * @example ```ts
 * const inputString = "Hello world! This is a sample string.";
 * strCountWords(inputString);
 * //=> 7
 * ```
 */
function strCountWords(string) {
    return strToWords(string).length;
}

/**
 * Ensures that a string ends with a specified substring. If the string already ends with the specified substring, it is returned as is. Otherwise, the substring is appended to the end of the string.
 * @param string The string to be processed.
 * @param endsWith The substring that the string should end with.
 * @example ```ts
 * strEnsureEndsWith('Hello', ' World');
 * //=> 'Hello World'
 * strEnsureEndsWith('Hello World', ' World');
 * //=> 'Hello World'
 * ```
 */
function strEnsureEndsWith(string, endsWith) {
    return string.endsWith(endsWith) ? string : string + endsWith;
}

/**
 * Converts the first character of a string to uppercase.
 * @param string The string to be converted.
 * @example ```ts
 * strFirstCharToUpperCase('hello');
 * //=> 'Hello'
 * ```
 */
function strFirstCharToUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
}

/**
 * Hash a string into an array of unsigned 32-bit integers.
 * @param string The string to hash
 * @param algorithm sha1 | sha256 | sha512 | md5 | etc...
 * @param - The hashing algorithm to be used. Defaults to 'sha256'.
 * @throws Will throw an error if the hashing algorithm is not supported.
 * @see crypto.getHashes for a list of accepted strings for 'algorithm'
 * @example ```ts
 * strHash.toUint32Array('hello')
 * //=> Uint32Array(8) [3125670444,  245608543, 708569126, 2665658821, 1545475611, 1581426463, 1647510643, 613976979]
 * ```
 */
function strHashToUint32Array(string, algorithm = 'sha256') {
    return new Uint32Array(strHashToBuffer(string, algorithm).buffer);
}

/**
 * Checks if the given string is in lower case.
 * @param input The string to be checked.
 * @example ```ts
 * strIsLowerCase('hello');
 * //=> true
 * strIsLowerCase('Hello');
 * //=> false
 * ```
 */
function strIsLowerCase(input) {
    return input === input.toLowerCase();
}

/**
 * Checks if a string contains multiple lines.
 * @param string The string to check.
 * @example ```ts
 * strIsMultiLine("Hello\nWorld");
 * //=> true
 * strIsMultiLine("Hello World");
 * //=> false
 * ```
 */
function strIsMultiLine(string) {
    return string.includes('\n');
}

/**
 * Checks if the given string is in upper case.
 * @param input The string to be checked.
 * @example ```ts
 * strIsUpperCase('HELLO');;
 * //=> true
 * strIsUpperCase('Hello');;
 * //=> false
 * ```
 */
function strIsUpperCase(input) {
    return input === input.toUpperCase();
}

/**
 * Removes consecutive empty lines from a given string.
 * @param code The string from which to remove consecutive empty lines.
 * @example ```ts
 * strNoConsecutiveEmptyLines("Hello\n\n\nWorld");;
 * //=> "Hello\n\nWorld"
 * ```
 */
function strNoConsecutiveEmptyLines(code) {
    return code.replace(/\n\n+/g, '\n\n');
}

/**
 * Removes consecutive whitespace characters in a string and replaces them with a single space.
 * @param string The string to be processed.
 * @example ```ts
 * strNoConsecutiveWhitespace('Hello   World');
 * //=> 'Hello World'
 * ```
 */
function strNoConsecutiveWhitespace(string) {
    return string.replace(/\s{2,}/g, ' ');
}

/**
 * Parses a string into a boolean.
 * @param string The string to parse into a boolean.
 * @example ```ts
 * strParseBoolean('True');
 * //=> true
 * strParseBoolean('False');
 * //=> false
 * ```
 */
function strParseBoolean(string) {
    return string.trim().toLowerCase() === 'true';
}

function strPrependLines(string, toPrepend) {
    return string
        .split(/\r?\n/)
        .map((line) => toPrepend + line)
        .join('\n');
}

/**
 * Removes all empty lines from a given string.
 * @param string The string from which to remove empty lines.
 * @example ```ts
 * strRemoveEmptyLines('Hello\n\nWorld\n\n!');;
 * //=> 'Hello\nWorld\n!'
 * ```
 */
function strRemoveEmptyLines(string) {
    return string
        .split(/\r?\n/)
        .filter((l) => !!l.trim())
        .join('\n');
}

/**
 * Removes the first and last line from a given string.
 * @param string The string from which the first and last line will be removed.
 * @example ```ts
 * strRemoveFirstAndLastLine('Line1\nLine2\nLine3');;
 * //=> 'Line2'
 * ```
 */
function strRemoveFirstAndLastLine(string) {
    const lines = string.split(/\r?\n/);
    if (lines.length <= 2)
        return '';
    return lines.slice(1, lines.length - 1).join('\n');
}

/**
 * Removes all new line characters from a string.
 * @param string The string from which to remove new line characters.
 * @param replaceWith The string to replace new line characters with. Default is an empty string.
 * @example ```ts
 * strRemoveNewLines('Hello\nWorld');;
 * //=> 'HelloWorld'
 * ```
 * @example ```ts
 * const str = 'Hello\nWorld';
 * const result = strRemoveNewLines(str, ' ');
 * console.log(result); // 'Hello World'
 * ```
 */
function strRemoveNewLines(string, replaceWith = '') {
    return string.replace(/\r*\n/g, replaceWith);
}

/**
 * Splits a string by a specified delimiter and trims each resulting substring.
 * Optionally, it can also remove empty lines.
 * @param string The string to be split and trimmed.
 * @param delimiter The delimiter to split the string by.
 * @param removeEmptyLines Optional parameter. If true, removes empty lines from the resulting array. Default is false.
 * @example ```ts
 * strSplitAndTrim("  Hello ;  world ; ". ";", true;
 * //=> ["Hello", "world"]
 * strSplitAndTrim("  Hello ;  world ; ". ";", false;
 * //=> ["Hello", "world", ""]
 * ```
 */
function strSplitAndTrim(string, delimiter, removeEmptyLines = false) {
    const lines = string.split(delimiter).map((s) => s.trim());
    return removeEmptyLines ? lines.filter((s) => !!s.trim()) : lines;
}

/**
 * Returns an array of words in the string
 * @param word The camel case word to split.
 * @throws Throws an error if the input is not a string.
 * @param input input string
 * @example ```ts
 * strSplitCamelCase('someCamel10Case')
 * //=> ['some', 'Camel10', 'Case']
 * ```
 */
function strSplitCamelCase(word) {
    if (!word)
        return [];
    if (word.length <= 2)
        return [word];
    const result = [];
    const lastCharIndex = word.length - 1;
    let lastSplitIndex = 0;
    let foundCamelCase = false;
    for (let i = 1; i < word.length; i++) {
        if (isWordSplitIndex(word, i)) {
            const sub = word.substring(lastSplitIndex, i);
            if (sub) {
                result.push(sub);
                lastSplitIndex = i;
                foundCamelCase = true;
            }
        }
        if (foundCamelCase && i === lastCharIndex) {
            const sub = word.substring(lastSplitIndex);
            if (sub)
                result.push(sub);
        }
    }
    if (!foundCamelCase)
        result.push(word);
    return result;
}
const regInteger = /\d+/g;
const regSpecial = /[^\w]+/g;
function isWordSplitIndex(word, index) {
    return (strIsLowerCase(word[index - 1]) &&
        strIsUpperCase(word[index]) &&
        !regInteger.test(word[index - 1]) &&
        !regInteger.test(word[index]) &&
        !regSpecial.test(word[index - 1]) &&
        !regSpecial.test(word[index]));
}

/**
 * Converts a string to an array of character codes.
 * @param string The string to convert.
 * @example ```ts
 * strToCharCodes('Hello');;
 * //=> [72, 101, 108, 108, 111]
 * ```
 */
function strToCharCodes(string) {
    const result = new Array(string.length);
    for (let i = 0; i < string.length; i++) {
        result[i] = string.codePointAt(i);
    }
    return result;
}

/**
 * Converts a string to a set of unique characters.
 * @param string The string to be converted.
 * @example ```ts
 * strToCharSet('hello');;
 * //=> Set { 'h', 'e', 'l', 'o' }
 * ```
 */
function strToCharSet(string) {
    return new Set(string);
}

/**
 * Intelligently split a string into sentences.
 * @throws Will throw an error if the input is not a string.
 * @param text Text to split into sentences.
 * @example ```ts
 * strToSentences('Hello world. How are you?');
 * //=> ['Hello world.', 'How are you?']
 * ```
 */
function strToSentences(text) {
    if (!text)
        return [];
    const arr = sentenceSplitter.split(text);
    return arr.filter((node) => node.type === 'Sentence').map((node) => node.raw);
}

/**
 * Converts a string to a sorted set of unique characters.
 * @param string The string to be converted.
 * @example ```ts
 * strToSortedCharSet('banana');
 * //=> 'abn'
 * ```
 */
function strToSortedCharSet(string) {
    return Array.from(new Set(string)).sort().join('');
}

/**
 * Trims leading and trailing whitespace from each line in a string.
 * @param string The string to trim.
 * @example ```ts
 * strTrimLines('  Hello, world!  \n  How are you?  ');;
 * //=> 'Hello, world!\nHow are you?'
 * ```
 */
function strTrimLines(string) {
    return string
        .split(/\r?\n/)
        .map((line) => line.trim())
        .join('\n');
}

/**
 * Trims the leading whitespace from each line in a string.
 * @param string The string to trim.
 * @example ```ts
 * strTrimLinesLeft('   line1\n   line2\n   line3');;
 * //=> 'line1\nline2\nline3'
 * ```
 */
function strTrimLinesLeft(string) {
    return string
        .split(/\r?\n/)
        .map((line) => line.trimStart())
        .join('\n');
}

/**
 * Trims trailing whitespace from each line in a string.
 * @param string The string to trim.
 * @example ```ts
 * strTrimLinesRight('  Hello, world!  \n  How are you?  ');;
 * //=> '  Hello, world!\n  How are you?'
 * ```
 */
function strTrimLinesRight(string) {
    return string
        .split(/\r?\n/)
        .map((line) => line.trimEnd())
        .join('\n');
}

/**
 * Removes the specified left and right substrings from the input string.
 * @param input The input string from which to remove the substrings.
 * @param left The left substring to remove.
 * @param right The right substring to remove.
 * @param flags The flags for the RegExp. Default is an empty string.
 * @example ```ts
 * const input = 'Hello World';
 * const left = 'Hello ';
 * const right = ' World';
 * strUnwrap(input, left, right);
 * //=> 'World'
 * ```
 */
function strUnwrap(input, left, right, flags = '') {
    return input
        .replace(new RegExp('^' + regexEscapeString(left), flags), '')
        .replace(new RegExp(regexEscapeString(right) + '$', flags), '');
}

/**
 * Wraps a string between two other strings.
 * @param input The string to be wrapped.
 * @param left The string to be added to the left of the input string.
 * @param right The string to be added to the right of the input string.
 * @example ```ts
 * strWrapBetween('Hello', '<', '>');;
 * //=> '<Hello>'
 * ```
 */
function strWrapBetween(input, left, right) {
    return left + input + right;
}

/**
 * Wraps a given string with another string.
 * @param input The string to be wrapped.
 * @param wrap The string to wrap around the input.
 * @example ```ts
 * strWrapIn('hello', '*');;
 * //=> '*hello*'
 * ```
 */
function strWrapIn(input, wrap) {
    return wrap + input + wrap;
}

/**
 * Wraps a string in angle brackets.
 * @param input The string to be wrapped in angle brackets.
 * @example ```ts
 * strWrapInAngleBrackets('example');;
 * //=> '<example>'
 * ```
 */
function strWrapInAngleBrackets(input) {
    return '<' + input + '>';
}

/**
 * Wraps a given string in braces.
 * @param input The string to be wrapped in braces.
 * @example ```ts
 * strWrapInBraces('hello');
 * //=> "{hello}"
 * ```
 */
function strWrapInBraces(input) {
    return '{' + input + '}';
}

/**
 * Wraps a string in brackets.
 * @param input The string to be wrapped in brackets.
 * @example ```ts
 * strWrapInBrackets('test');
 * //=> '[test]'
 * ```
 */
function strWrapInBrackets(input) {
    return '[' + input + ']';
}

/**
 * Wraps a given string in double quotes.
 * @param input The string to be wrapped in double quotes.
 * @example ```ts
 * strWrapInDoubleQuotes('Hello World');
 * //=> '"Hello World"'
 * ```
 */
function strWrapInDoubleQuotes(input) {
    return '"' + input + '"';
}

/**
 * Wraps a given string in parenthesis.
 * @param input The string to be wrapped in parenthesis.
 * @example ```ts
 * strWrapInParenthesis('hello');
 * //=> '(hello)'
 * ```
 */
function strWrapInParenthesis(input) {
    return '(' + input + ')';
}

/**
 * Wraps a given string in single quotes.
 * @param input The string to be wrapped in single quotes.
 * @example ```ts
 * strWrapInSingleQuotes('Hello World');
 * //=> "'Hello World'"
 * ```
 */
function strWrapInSingleQuotes(input) {
    return "'" + input + "'";
}

/**
 * Counts the number of export statements in a given code string.
 * @param code - The code string to analyze.
 * @returns The number of export statements found in the code.
 * @example ```ts
 * const code = `
 *   export const foo = 42;
 *   export function bar() {
 *     return "Hello, world!";
 *   }
 * `;
 * const count = tsCountExports(code);
 * //=> 2
 * ```
 */
function tsCountExports(code) {
    var _a;
    return ((_a = code.match(/^export /gm)) === null || _a === void 0 ? void 0 : _a.length) || 0;
}

/**
 * This function extracts all import statements from a given TypeScript code string.
 * @param code The TypeScript code as a string from which to extract import statements.
 */
function tsExtractImports(code) {
    const isFirstLine = /^import /;
    const isFirstLineInMulti = /\{\s*$/;
    const isLastLineInMulti = /^\} from '/;
    const result = [];
    let isMulti = false;
    let impLines = [];
    const lines = code.split(/\r?\n/);
    for (let l = 0; l < lines.length; l++) {
        const line = lines[l];
        if (isFirstLine.test(line)) {
            if (isFirstLineInMulti.test(line)) {
                impLines.push(line);
                isMulti = true;
            }
            else {
                result.push({
                    start: l,
                    end: l,
                    match: line,
                });
            }
        }
        else if (isMulti) {
            impLines.push(line);
            if (isLastLineInMulti.test(line)) {
                result.push({
                    start: l - impLines.length + 1,
                    end: l,
                    match: impLines.join('\n'),
                });
                impLines = [];
                isMulti = false;
            }
        }
    }
    return result;
}

/**
 * Parses the Jest tests from the given string.
 * @remarks This function uses the `rexecFirstMatch` function from the `regex` module and the `regJestTests` function from the `regexlib` module.
 * @param code The string to parse Jest tests from.
 * @returns The extracted Jest tests as a string.
 * @throws Throws an error if the tests could not be parsed from the input source code.
 * @example ```ts
 * parseJestTests('test("should pass", () => { expect(true).toBe(true); });');;
 * //=> 'should pass'
 * ```
 */
function tsExtractJestTests(code) {
    var _a;
    const result = (_a = rexecFirstMatch(regJestTests, code)) === null || _a === void 0 ? void 0 : _a.match.trim();
    if (!result)
        throw new Error('Could not parse the tests from the input source code.');
    return result;
}

/**
 * Returns a map of the private and protected class properties and methods of the provided TypeScript code for a class.
 */
function tsGetClassMemberAccessModifiers(code) {
    const regex = /^\s*(?<privacy>protected|private) ((static|abstract|optional|readonly|get|set|async) )*(?<name>\w+)/gm;
    const result = {};
    for (const { groups } of rexec(regex, code)) {
        result[groups.name] = groups.privacy;
    }
    return result;
}

function tsHasDefaultExport(code) {
    return /^export default /m.test(code);
}

/**
 * Converts the name of an exported function or variable in a Jest test suite to use the `.name` property of the exported item.
 * This is useful for keeping test suite names in sync with the names of the items they are testing.
 * @param code - The source code of the Jest test suite.
 * @param funName - The name of the function being tested.
 * @returns The modified source code.
 * @example ```ts
 * const code = `describe('myFunction', () => {...})`;
 * const exportName = 'myFunction';
 * const newCode = tsJestConvertExportNameString(code, exportName);
 * //=> `describe(myFunction.name, () => {...})`
 * ```
 */
function tsJestConvertExportNameString(code, funName) {
    const replaceWith = 'describe(' + funName + '.name';
    return code
        .replace("describe('" + funName + "'", replaceWith)
        .replace('describe("' + funName + '"', replaceWith);
}

function tsJestFixLineSpacing(code) {
    return strRemoveEmptyLines(code)
        .split('\n')
        .map((line) => {
        if (/^(describe|it)\(/.test(line.trimStart()))
            return '\n' + line;
        return line;
    })
        .join('\n');
}

/**
 * Minifies the given TypeScript code by removing empty lines and trimming lines.
 * @param string The TypeScript code to minify.
 * @returns The minified TypeScript code.
 * @example ```ts
 * //
 * ```
 * @function tsSimpleMinifyCode
 */
function tsSimpleMinifyCode(string) {
    return strRemoveEmptyLines(strTrimLines(string));
}

/**
 * This function takes a source string, and parses all TSDoc block comments in it..
 * @param code The source code string.
 */
function* tsDocExtractAllComments(code) {
    let lines = code.split(/\r?\n/);
    let offset = 0;
    while (true) {
        const index = lines.findIndex((line) => line.trim() === '/**');
        const lastIndex = lines.findIndex((line) => line.trim() === '*/');
        if (index !== -1 && lastIndex !== -1) {
            let nextLine;
            if (lastIndex + 1 < lines.length)
                nextLine = lines[lastIndex + 1];
            if ((nextLine === null || nextLine === void 0 ? void 0 : nextLine.trim()) === '' && lastIndex + 2 < lines.length)
                nextLine = lines[lastIndex + 2];
            yield {
                start: index + offset,
                end: lastIndex + offset,
                match: lines.slice(index, lastIndex + 1).join('\n'),
                nextLine,
            };
            lines = lines.slice(lastIndex + 1);
            offset += lastIndex + 1;
        }
        else {
            break;
        }
    }
}

/**
 * Strips block comments from the provided TypeScript code.
 */
function tsStripBlockComments(code) {
    const lines = code.split('\n');
    const remove = new Set();
    for (const { start, end } of tsDocExtractAllComments(code)) {
        for (const int of numRange(start, end))
            remove.add(int);
    }
    return lines.filter((_, i) => !remove.has(i)).join('\n');
}

/**
 * Removes lines that consist of only a double-slash comment, from the given code.
 * @remarks This function uses a regular expression to remove all lines that start with a single-line comment.
 * @returns The TypeScript code without single-line comments.
 * @param code The code from which to remove the comments.
 * @example ```ts
 * const code = `const x = 5;
 * // This is a comment
 * const y = 10;`;
 * stripSlashComments(code);
 * //=> "const x = 5;\nconst y = 10;"
 * ```
 */
function tsStripFullSlashCommentLines(code) {
    return code.replace(/\n\s*\/\/.*\n/g, '\n').replace(/(^|\n)\s*\/\/.*(\n|$)/g, '');
}

/**
 * Removes all comments from JavaScript or TypeScript code.
 */
function tsStripComments(code) {
    return tsStripFullSlashCommentLines(tsStripBlockComments(code));
}

/**
 * Strips out TypeScript declaration source map comments from the provided code string.
 * @remarks This function is useful when you want to clean up TypeScript code for readability or performance reasons.
 * @param code The TypeScript code string from which to strip source map comments.
 * @returns The cleaned TypeScript code string without source map comments.
 * @example ```ts
 * tsStripDeclSourceMapComments(
 *   ['// some code', '//# sourceMappingURL=buildRegexBetween.d.ts.map', ''].join('\n')
 * );
 * //=> '// some code\n'
 * ```
 */
function tsStripDeclSourceMapComments(code) {
    return code.replace(/\n\s*\/\/#.+\.d\.ts\.map(\n|$)/g, '\n');
}

/**
 * Strips the 'export' keyword from the beginning of each line in the provided source string.
 * @param source The source string from which to strip the 'export' keyword.
 * @remarks This function is useful when you want to remove the 'export' keyword from TypeScript code.
 * @returns The source string with the 'export' keyword stripped from the beginning of each line.
 * @example ```ts
 * tsStripExportKeyword('export const foo = "bar";\nexport function baz() {}');;
 * //=> 'const foo = "bar";\nfunction baz() {}'
 * ```
 */
function tsStripExportKeyword(source) {
    return source.replace(/^export /gm, '');
}

/**
 * Strips all import statements from a given TypeScript code string.
 * @param code - The TypeScript code to strip import statements from.
 * @returns The TypeScript code without import statements.
 * @example ```ts
 * const code = `
 * import { Component } from '@angular/core';
 * import { OnInit } from '@angular/core';
 * const a = 1;
 * `.trim()
 * tsStripImports(code)
 * //=> 'const a = 1;'
 * ```
 */
function tsStripImports(code) {
    const lines = code.split('\n');
    const imports = tsExtractImports(code);
    const remove = new Set();
    for (const { start, end } of imports) {
        for (const int of numRange(start, end))
            remove.add(int);
    }
    return lines
        .filter((_, i) => !remove.has(i))
        .join('\n')
        .trimStart();
}

/**
 * Walks through the imports of a TypeScript file and its dependencies up to a specified depth.
 * @remarks This function uses synchronous file operations and may block the event loop if used with large files or deep import trees.
 * @param rootfile The root TypeScript file to start the walk from.
 * @param maxDepth The maximum depth to walk through the imports. Default is 0, which means no limit.
 * @returns A `WalkImportsResult` object that maps each file path to its import details.
 * @throws Will throw an error if the file does not exist or if it is an external module.
 * @example ```ts
 * tsWalkImports('./src/index.ts', 2);;
 * //=> {result}
 * ```
 */
function tsWalkImports(rootfile, maxDepth = 0) {
    const result = new Map();
    return (function recurse(filepath, match = '', depth = 1) {
        try {
            if (!fs__default["default"].existsSync(filepath) || filepath.includes('node_modules')) {
                result.set(filepath, { depth, match, error: 'External module' });
                return result;
            }
            const source = readFileStringSync(filepath);
            result.set(filepath, { depth, match, source });
            // recurse
            if (maxDepth && depth > maxDepth)
                return result;
            const imports = tsExtractImports(source).map(({ match }) => {
                const arr = match.split("'");
                const from = arr[arr.length - 2];
                return [match, from];
            });
            for (const [match, from] of imports) {
                const relative = from;
                const resolved = path__default["default"].isAbsolute(relative)
                    ? relative
                    : path__default["default"].resolve(path__default["default"].dirname(filepath), relative + '.ts');
                if (result.has(resolved))
                    continue;
                recurse(resolved, match, depth + 1);
            }
        }
        catch (error) {
            result.set(filepath, { depth, match, error });
        }
        return result;
    })(path__default["default"].normalize(rootfile));
}

/**
 * Checks if the provided code string is a valid TSDoc comment.
 * @remarks This function tests each line of the provided code string against a regular expression that matches the TSDoc comment syntax.
 * @param code The source code string to be checked.
 * @returns A boolean indicating whether the provided code string is a valid TSDoc comment.
 */
function isValidTsDocComment(code) {
    if (!code)
        return false;
    const lines = code.split(/\r?\n/);
    if (lines.length < 3)
        return false;
    const last = lines.pop();
    if (last && !last.trimStart().startsWith('*/'))
        return false;
    const first = lines.shift();
    if (first && !first.trimStart().startsWith('/**'))
        return false;
    for (const line of lines) {
        if (!line.trimStart().startsWith('*'))
            return false;
    }
    return true;
}
// export function isValidTsDocComment(code: string): boolean {
//   if (!code) return false
//   const lines = code.split(/\r?\n/)
//   const re = /^ *(\/\*\*|\*\/|\*)/
//   return arrEvery(lines, (line) => re.test(line))
// }

function assertValidTsDocComment(code) {
    if (!isValidTsDocComment(code))
        throw new Error('Invalid TSDoc comment');
}

/**
 * Checks if the provided tag is a multi TSDoc tag.
 * @remarks This function is case-insensitive.
 * @param tag The tag to check.
 * @returns A boolean indicating whether the tag is a multi TSDoc tag.
 * @example ```ts
 * isMultiTsDocTag('param');;
 * //=> true
 * isMultiTsDocTag('example');;
 * //=> false
 * ```
 */
function isMultiTsDocTag(tag) {
    return /^(param|throws|see|template|typeParam|inheritDoc|link|deprecated)$/i.test(tag);
}

/**
 * Checks if the provided tag is a named multi TSDoc tag.
 * Named multi TSDoc tags are 'param' and 'property'.
 * @param tag The tag to check.
 * @returns Returns true if the tag is a named multi TSDoc tag, false otherwise.
 * @example ```ts
 * isNamedMultiTsDocTag('param');;
 * //=> true
 * isNamedMultiTsDocTag('returns');;
 * //=> false
 * ```
 */
function isNamedMultiTsDocTag(tag) {
    return /^(param)$/i.test(tag);
}

/**
 * Checks if the given tag is a named TSDoc tag.
 * @param tag The tag to check.
 * @returns A boolean indicating whether the tag is a named TSDoc tag.
 * @example ```ts
 * isNamedTsDocTag('param');;
 * //=> true
 * isNamedTsDocTag('random');;
 * //=> false
 * ```
 */
function isNamedTsDocTag(tag) {
    return /^(param|property|typedef|alias|event|function|method|namespace|enum|interface|class|type|var|module)$/i.test(tag);
}

/**
 * Unwraps a TSDoc block comment, removing the comment markers and leading asterisks.
 * Throws an error if the provided string is not a valid TSDoc block comment.
 * @param code The TSDoc block comment to unwrap.
 * @returns The unwrapped TSDoc comment.
 * @remarks This function will throw an error if the provided string is not a valid TSDoc block comment.
 * @throws If the provided string is not a valid TSDoc block comment.
 */
function tsDocUnwrapComment(code) {
    assertValidTsDocComment(code);
    code = strRemoveFirstAndLastLine(code);
    code = code.replace(/^ *\*( |$)/gm, '');
    code = strTrimLinesRight(code);
    return code;
}

/**
 * A tag in a TsDoc instance.
 */
class TsDocTag {
    /**
     * @param tag The kind of tag.
     * @param name The tag's name parameter, if it has one.
     */
    constructor(tag, name, description) {
        this.tag = tag;
        this.name = name;
        this.description = description;
        if (tag === 'example') {
            const des = this.description.join('\n').trim().split('\n');
            if (arrLast(des).includes('```')) {
                des.pop();
            }
            if (des[0].includes('```')) {
                des.shift();
            }
            this.description = des;
        }
    }
    /**
     * Renders the tag as a string.
     * @remarks Ensures that example tags are formatted as markdown ts-code blocks.
     */
    toString() {
        let result = this.tag === 'description' ? '' : '@' + this.tag;
        result = result.trim();
        if (this.name)
            result += ' ' + this.name;
        if (this.description.length) {
            let des = this.description.join('\n');
            if (this.tag === 'example') {
                des = '```ts\n' + des + '\n```';
            }
            result += ' ' + des;
            result = result.trim();
        }
        return result;
    }
}

/**
 * Normalizes a tag name by converting it to lowercase.
 * If the tag name is not found in the map, it returns the original tag name.
 * @param code The tag name to normalize.
 * @remarks This function is case-insensitive and will return the input string if no equivalent TypeScript keyword is found.
 * @returns The normalized tag name.
 * @example ```ts
 * tsDocNormalizeTagName("TagName");;
 * //=> "tagname"
 * ```
 */
function tsDocNormalizeTagName(code) {
    code = code.toLowerCase();
    if (code === 'virtual')
        return 'abstract';
    if (code === 'augments')
        return 'extends';
    if (code === 'constructor')
        return 'class';
    if (code === 'const')
        return 'constant';
    if (code === 'defaultvalue')
        return 'default';
    if (code === 'desc')
        return 'description';
    if (code === 'host')
        return 'external';
    if (code === 'fileoverview')
        return 'file';
    if (code === 'fires')
        return 'emits';
    if (code === 'func')
        return 'function';
    if (code === 'var')
        return 'member';
    if (code === 'arg')
        return 'param';
    if (code === 'prop')
        return 'property';
    if (code === 'return')
        return 'returns';
    if (code === 'exception')
        return 'throws';
    if (code === 'yield')
        return 'yields';
    return code;
}

/**
 * Wraps a given string into a TSDoc block comment.
 * @remarks This function is useful when you want to generate TSDoc comments programmatically.
 * @param string The string to be wrapped into a TSDoc block comment.
 * @returns The input string wrapped into a TSDoc block comment.
 */
function tsDocWrapAsComment(string) {
    return ['/**', strPrependLines(string, ' * '), ' */'].join('\n');
}

/**
 * Strips TypeScript types from the provided code string.
 * @remarks This function is useful when you want to remove TypeScript types from a code string.
 * @param code The TypeScript code string from which types should be stripped.
 * @returns The provided code string with all TypeScript types removed.
 * @example ```ts
 * tsDocStripTypes('let x: number = 5;');;
 * //=> 'let x = 5;'
 * ```
 */
function tsDocStripTypes(code) {
    for (const match of rexec(/^( *\* +)?@\w+ (?<trash>(\{|\[).+(\}|\]) )/gm, code)) {
        code = code.replace(match.groups.trash, '');
    }
    return code;
}

class TsDoc {
    /**
     * Creates a new TSDoc comment.
     * @param code The TSDoc block comment soruce code.
     * @param options Options for the TSDoc instance.
     * @throws If the provided code is not a valid TSDoc block comment.
     */
    constructor(code, options) {
        /**
         * Single tags are tags that can only appear once in a TSDoc comment.
         */
        this.single = new Map();
        /**
         * Multi tags are tags that can appear multiple times in a TSDoc comment, but each instance must have unique description text.
         */
        this.multi = new Map();
        /**
         * Named multi tags are tags that can appear multiple times in a TSDoc comment, but each instance must have a unique name.
         */
        this.namedMulti = new Map();
        if (options) {
            if (options.tagOrder)
                this.tagOrder = Array.from(options.tagOrder);
            if (options.paramOrder)
                this.paramOrder = new Set(options.paramOrder);
        }
        if (code)
            this.addBlockComment(code);
    }
    addBlockComment(code) {
        code = tsDocUnwrapComment(code);
        code = tsDocStripTypes(code);
        if (!code.startsWith('@'))
            code = 'description ' + code;
        const lines = code.split(/^@/gm);
        for (const line of lines) {
            const desc = line.trimEnd().split(/\r?\n/);
            const words = desc[0].split(' ');
            const tag = tsDocNormalizeTagName(words.shift() || '');
            if (!this.getTagOrder().includes(tag))
                return this;
            const isNamed = isNamedTsDocTag(tag);
            const name = isNamed ? words.shift() || '' : '';
            if (!name && isNamed)
                return this;
            desc[0] = words.join(' ').trim();
            arrFilterMutable(desc, (line) => !!line.trim());
            if (!desc.length)
                return this;
            this.addTag(new TsDocTag(tag, name, desc));
        }
        return this;
    }
    /**
     * The number of tags in the TsDoc instance.
     */
    get size() {
        let size = this.single.size;
        for (const map of this.namedMulti.values())
            size += map.size;
        for (const arr of this.multi.values())
            size += arr.length;
        return size;
    }
    /**
     * Returns whether the TsDoc instance has no tags.
     */
    get isEmpty() {
        return this.size === 0;
    }
    /**
     * Deletes all tags.
     * The tagOrder and paramOrder properties are not affected.
     */
    clear() {
        this.single.clear();
        this.multi.clear();
        this.namedMulti.clear();
        return this;
    }
    /**
     * Adds a TsDocTag to the TsDoc instance.
     * @param tsDocTag The TsDocTag to add.
     */
    addTag(tsDocTag) {
        tsDocTag.tag = tsDocNormalizeTagName(tsDocTag.tag);
        const { tag, name, description } = tsDocTag;
        if (!this.getTagOrder().includes(tag))
            return this;
        if (isNamedMultiTsDocTag(tag)) {
            const map = mapGetOrElse(this.namedMulti, tag, () => new Map());
            if (!map.has(name))
                map.set(name, tsDocTag);
        }
        else if (isMultiTsDocTag(tag)) {
            const arr = mapGetOrElse(this.multi, tag, () => []);
            const index = arr.findIndex((t) => arrShallowEquals(t.description, description));
            if (index === -1)
                arr.push(tsDocTag);
            else
                arr[index] = tsDocTag;
        }
        else {
            if (!this.single.has(tag))
                this.single.set(tag, tsDocTag);
        }
        return this;
    }
    /**
     * Deletes one or all TsDocTag matching the provided tag.
     * If name is not provided, all tags matching the provided tag are deleted.
     * @param tag The tag to remove.
     * @param name The name of the tag to remove.
     */
    removeTags(tag, name) {
        var _a;
        tag = tsDocNormalizeTagName(tag);
        if (!this.getTagOrder().includes(tag))
            return this;
        if (isNamedMultiTsDocTag(tag)) {
            if (name !== undefined)
                (_a = this.namedMulti.get(tag)) === null || _a === void 0 ? void 0 : _a.delete(name);
            else
                this.namedMulti.delete(tag);
        }
        else if (isMultiTsDocTag(tag)) {
            this.multi.delete(tag);
        }
        else {
            this.single.delete(tag);
        }
        return this;
    }
    /**
     * Iterate tags in the order specified in the ´tagOrder´ and ´paramOrder´ properties.
     * @param withSpaces Whether to yield empty strings encountered in ´tagOrder´. Empty strings are used to add spacing between tags.
     */
    *iterateTags(withSpaces) {
        this.reorderParams();
        for (const tag of this.getTagOrder()) {
            if (withSpaces && tag === '')
                yield tag;
            if (isNamedMultiTsDocTag(tag)) {
                const map = this.namedMulti.get(tag);
                if (map)
                    for (const o of map.values())
                        yield o;
            }
            else if (isMultiTsDocTag(tag)) {
                const arr = this.multi.get(tag);
                if (arr)
                    for (const o of arr)
                        yield o;
            }
            else {
                const o = this.single.get(tag);
                if (o)
                    yield o;
            }
        }
    }
    /**
     * Returns a deep clone of this instance.
     */
    clone() {
        return new TsDoc(this.render());
    }
    /**
     * Merge tags from another TsDoc instance.
     */
    assign(tsdoc) {
        for (const tag of tsdoc.iterateTags()) {
            if (tag)
                this.addTag(tag);
        }
        return this;
    }
    /**
     * Sort the param tags according to the order specified in the paramOrder property.
     */
    reorderParams() {
        if (!this.paramOrder)
            return this;
        const curMap = this.namedMulti.get('param');
        if (!curMap)
            return this;
        const newMap = new Map();
        for (const param of this.paramOrder) {
            const tag = curMap.get(param);
            if (tag)
                newMap.set(param, tag);
        }
        this.namedMulti.set('param', newMap);
        return this;
    }
    /**
     * Renders a TSDoc block comment string with all tags in the order specified by the tagOrder property.
     */
    render() {
        return tsDocWrapAsComment([...this.iterateTags(true)].join('\n'));
    }
    /**
     * Renders a TSDoc block comment string with all tags in the order specified by the tagOrder property.
     * @remarks Identical to the `render` method.
     */
    toString() {
        return this.render();
    }
    /**
     * Returns the order in which tags are rendered in the TSDoc comment.
     * If no tagOrder was specified in the constructor options, TsDoc.defaultTagOrder is used.
     */
    getTagOrder() {
        return this.tagOrder || TsDoc.defaultTagOrder;
    }
}
/**
 * The default order in which tags are rendered in the TSDoc comment.
 */
TsDoc.defaultTagOrder = [
    'description',
    'remarks',
    'typeparam',
    'template',
    'param',
    'returns',
    'yields',
    'emits',
    'throws',
    'method',
    'example',
];

/**
 * Extracts the first TSDoc @example code block from the given code string.
 * @param code The code string to extract the TSDoc @example from.
 * @returns The extracted TSDoc @example code block.
 * @remarks This function uses regular expressions to find the @example tag in a TSDoc comment and extracts the code within it.
 * If no @example tag is found, it throws an error.
 * @throws Throws an error if a TSDoc @example cannot be found in the code.
 * @example ```ts
 * `
 * /**
 *  * @example
 *  * 'Hello, world!';
 * //=> "Hello, world!"
 *  *\/
 * function helloWorld() {
 *   return 'Hello, world!'
 * }
 * `
 * tsDocExtractExample(code);
 * //=> "return 'Hello, world!'"
 * ```
 */
function tsDocExtractExample(code) {
    var _a, _b;
    const match = rexecFirstMatch(regTsDocExampleCode, code);
    const result = (_b = (_a = match === null || match === void 0 ? void 0 : match.groups) === null || _a === void 0 ? void 0 : _a.mid) === null || _b === void 0 ? void 0 : _b.replace(/^ \* /gm, '').trim();
    if (!result)
        throw new Error('Could not find a TSDoc @example in the code.');
    return result;
}

/**
 * Extracts the first TSDoc block comment from the provided TypeScript code.
 * @param code The TypeScript code to extract the TSDoc block comment from.
 */
function tsDocExtractFirstComment(code) {
    for (const res of tsDocExtractAllComments(code)) {
        return res;
    }
}

/**
 * This function fixes the spacing before and after the code in a TypeScript file.
 * It replaces multiple newlines after a block comment end with a single newline.
 * It also ensures that there is a newline before the start of a block comment if there is any non-whitespace character before it.
 * @param code - The TypeScript code to fix the spacing for.
 * @returns The TypeScript code with fixed spacing.
 * @example ```ts
 * const code = `
 * function example() {
 *   // some code
 * }
 * /**
 *  * This is a comment.
 *  *\/
 * function anotherExample() {
 *   // some more code
 * }
 * `;
 * const fixedCode = tsDocFixSpacingBeforeAfter(code);
 * //=> fixedCode
 * ```
 */
function tsDocFixSpacingBeforeAfter(code) {
    return code
        .replace(/ \*\/\s*\n\n/g, ' *' + '/\n')
        .split(/\r?\n/)
        .map((line, i, arr) => {
        if (/^(\s*\/\*\*\s*)$/.test(line) && i && arr[i - 1].trim()) {
            return '\n' + line;
        }
        return line;
    })
        .join('\n');
}

/**
 * Removes all empty lines from the given string.
 * @remarks This function is particularly useful when dealing with multi-line strings that may have unnecessary empty lines.
 * @param string The string from which to remove empty lines.
 */
function tsDocRemoveEmptyLines(string) {
    return string.replace(/(^|\n) *\* *(\n|$)/g, '\n');
}

/**
 * This function takes a source string, extracts all TSDoc comments from it, and then strips all TSDoc tags from these comments except for the 'throws' and 'param' tags.
 * The function then returns the modified source string.
 * @remarks This function is useful when you want to simplify your TSDoc comments by removing all tags except for the 'throws' and 'param' tags.
 * @param source - The source string from which TSDoc comments are to be extracted and modified.
 * @returns The modified source string with all TSDoc tags stripped except for the 'throws' and 'param' tags.
 * @throws If the source string is not a valid TSDoc comment.
 * @example ```ts
 * const source = `
 * /**
 *  * @param a - The first number.
 *  * @param b - The second number.
 *  * @returns The sum of a and b.
 *  * @throws If a or b is not a number.
 *  *\/
 * function add(a, b) {
 *   if (typeof a !== 'number' || typeof b !== 'number') {
 *     throw new Error('Both a and b must be numbers.');
 *   }
 *   return a + b;
 * }
 * `;
 * tsDocStripAllTagsExcepThrowsParamDescription(source);
 * //=> result
 * ```
 */
function tsDocStripAllTagsExcepThrowsParamDescription(source) {
    let result = source + '';
    for (const { match } of tsDocExtractAllComments(source)) {
        const tsdoc = new TsDoc(match);
        const description = tsdoc.single.get('description');
        const params = tsdoc.namedMulti.get('param');
        const thro = tsdoc.multi.get('throws');
        tsdoc.clear();
        if (description)
            tsdoc.single.set('description', description);
        if (params)
            tsdoc.namedMulti.set('param', params);
        if (thro)
            tsdoc.multi.set('throws', thro);
        result = result === null || result === void 0 ? void 0 : result.replace(match, tsdoc.render());
    }
    return result;
}

function tsDocStripExample(string) {
    return string.replace(regTsDocExampleLines, '').replace(/\n +\* +@example *\n/g, '\n');
}

/**
 * Wraps the given code in a TSDoc block comment with an @example tag.
 * @returns The wrapped TypeScript code.
 * @param code The code to be wrapped.
 * @example ```ts
 * const code = 'console.log("Hello, world!");';
 * tsWrapDocExample(code);
 * //=> 'console.log("Hello, world!");'
 * ```
 * //
 */
function tsDocWrapExample(code) {
    return (' * @example ```ts\n' +
        code
            .split('\n')
            .map((line) => ' * ' + line)
            .join('\n') +
        '\n * ```');
}

/**
 * Asserts that the provided number is a negative integer.
 * If the number is not a negative integer, it throws a TypeError.
 * @param int The number to be checked.
 * @returns Returns the number if it is a negative integer.
 * @throws Throws an error if the provided number is not a negative integer.
 * @example ```ts
 * assertNegativeInteger(-5);;
 * //=> -5
 * assertNegativeInteger(5);;
 * //=> throws TypeError
 * ```
 */
function assertNegativeInteger(int) {
    if (Number.isInteger(int) && int < 0)
        return int;
    throw new TypeError('Expected int to be an integer. Got: ' + int);
}

/**
 * Asserts that the provided number is a positive integer.
 * If the number is not a positive integer, a TypeError is thrown.
 * @param int The number to be checked.
 * @returns The same number if it is a positive integer.
 * @throws Throws an error if the provided number is not a positive integer.
 * @example ```ts
 * assertPositiveInteger(5);;
 * //=> 5
 * assertPositiveInteger(-2);;
 * //=> throws TypeError
 * assertPositiveInteger(2.5);;
 * //=> throws TypeError
 * ```
 */
function assertPositiveInteger(int) {
    if (Number.isInteger(int) && int > 0)
        return int;
    throw new TypeError('Expected int to be an integer. Got: ' + int);
}

/**
 * Checks if a string is a hexadecimal number.
 * Understands prefixes for hex colors, hex decimal and regexp unicode hex.
 * @remarks This function uses a regular expression to test if the input string is a hexadecimal number.
 * @param s The string to be tested.
 * @returns A boolean indicating whether the string is a hexadecimal number.
 * @example ```ts
 * isHex('123abc');
 * //=> true
 * isHex('123g');
 * //=> false
 * ```
 */
function isHex(s) {
    return regHex.test(s);
}

/**
 * Checks if a given string is a hexadecimal or unicode.
 * @remarks This function uses a regular expression to test if the input string is a hexadecimal or unicode.
 * @param s The string to be tested.
 * @returns A boolean value indicating whether the string is a hexadecimal or unicode.
 * @example ```ts
 * isHexOrUnicode('0x123');
 * //=> true
 * isHexOrUnicode('u123');
 * //=> true
 * isHexOrUnicode('123');
 * //=> false
 * ```
 */
function isHexOrUnicode(s) {
    return /^(\\\\?u|0x)?[\da-f]+$/i.test(s);
}

/**
 * Checks if the provided number is an integer.
 * @remarks This function uses the built-in `Number.isInteger` method.
 * @param int The number to check.
 * @returns A boolean indicating whether the provided number is an integer.
 * @example ```ts
 * isInteger(5);
 * //=> true
 * isInteger(5.5);
 * //=> false
 * ```
 */
function isInteger(int) {
    return Number.isInteger(int);
}

/**
 * Checks if the given object is iterable.
 * @remarks This function checks if the given object is iterable by checking if the object is not null, is an object, and has a function for the Symbol.iterator property.
 * @typeparam T - The type of the object to check.
 * @param o The object to check.
 * @returns A boolean indicating whether the object is iterable.
 * @example ```ts
 * isIterable([1, 2, 3]);;
 * //=> true
 * isIterable(5);;
 * //=> false
 * ```
 */
function isIterable(o) {
    if (typeof o === 'string')
        return true;
    return (typeof Symbol !== 'undefined' &&
        Symbol &&
        'iterator' in Symbol &&
        o != null &&
        typeof o === 'object' &&
        Symbol.iterator in o &&
        typeof o[Symbol.iterator] === 'function');
}

/**
 * Checks if a given number is a negative integer.
 * @remarks This function uses the `Number.isInteger` method to check if the input is an integer, and then checks if it is less than 0.
 * @param int The number to check.
 * @returns A boolean indicating whether the input is a negative integer.
 * @example ```ts
 * isNegativeInteger(-5); ;
 * //=> true
 * isNegativeInteger(0);  ;
 * //=> false
 * isNegativeInteger(5);  ;
 * //=> false
 * ```
 */
function isNegativeInteger(int) {
    return Number.isInteger(int) && int < 0;
}

/**
 * Checks if a given string is numeric.
 * @remarks This function will return true if the string can be converted to a finite number, false otherwise.
 * @param string The string to be checked.
 * @returns A boolean indicating whether the string is numeric or not.
 * @example ```ts
 * isNumericString("123");;
 * //=> true
 * isNumericString("abc");;
 * //=> false
 * ```
 */
function isNumericString(string) {
    const trim = string.trim();
    if (!trim)
        return false;
    const n = Number(trim);
    return !isNaN(n) && isFinite(n);
}

/**
 * Checks if the provided value is an object.
 * @template T - The type of the value to check.
 * @param value The value to check.
 * @returns A boolean indicating whether the provided value is an object.
 * @example ```ts
 * isObject({});;
 * //=> true
 * isObject(123);;
 * //=> false
 * ```
 */
function isObject(value) {
    return value !== null && typeof value === 'object';
}

/**
 * Checks if a given number is a positive integer.
 * @remarks This function uses the `Number.isInteger` method and a simple greater than zero check.
 * @param int The number to check.
 * @returns A boolean indicating whether the input is a positive integer.
 * @example ```ts
 * isPositiveInteger(5); ;
 * //=> true
 * isPositiveInteger(-5);;
 * //=> false
 * isPositiveInteger(0); ;
 * //=> false
 * isPositiveInteger(5.5);;
 * //=> false
 * ```
 */
function isPositiveInteger(int) {
    return Number.isInteger(int) && int > 0;
}

/**
 * Extract birthdate (yyyy,mm,dd), four digit id and sex from a Danish social security number.
 * Assumes birth dates are at most 100 years in the past.
 * @returns An object containing the birth year, month, day, id, and sex of the individual.
 * @throws Will throw an error if the SSN is not a valid Danish Social Security Number.
 * @param ssn Danish social security number
 * @example ```ts
 * const ssn = '010203-1234'
 * parseSocialSecurityNumberDK(ssn)
 * //=> { year: 2003, month: 2, day: 1, id: 1234, sex: 'F' }
 * ```
 */
function parseSocialSecurityNumberDK(ssn) {
    const match = ssn.match(regexMatcherToValidater(regSocialSecurityNumbersDK));
    if (!match || !match.groups)
        return undefined;
    const { dd, mm, yy, id4 } = match.groups;
    const day = parseInt(dd);
    const month = parseInt(mm);
    const iCurYear = getCurrentYear();
    const isMinusTwo = parseInt(yy) > parseInt(String(iCurYear).substring(2));
    const year = parseInt(`${getCentury(iCurYear) - (isMinusTwo ? 2 : 1)}${yy}`);
    if (!isValidDate(year, month, day))
        return undefined;
    const id = parseInt(id4);
    const sex = isEven(parseInt(id4.substring(3))) ? 'F' : 'M';
    return { year, month, day, id, sex };
}

/**
 * Checks if the given string is a valid Danish Social Security Number (SSN).
 * @remarks This function uses the `parseSocialSecurityNumberDK` function to validate the SSN.
 * @param ssn The string to be checked.
 * @returns A boolean indicating whether the string is a valid Danish SSN.
 * @throws Will throw an error if the `parseSocialSecurityNumberDK` function throws an error.
 * @example ```ts
 * isSocialSecurityNumberDK('123456-7890');;
 * //=> true
 * isSocialSecurityNumberDK('123456-789');;
 * //=> false
 * ```
 */
function isSocialSecurityNumberDK(ssn) {
    return !!parseSocialSecurityNumberDK(ssn);
}

exports.A1ToColRow = A1ToColRow;
exports.ApiReponseCache = ApiReponseCache;
exports.ExtensibleFunction = ExtensibleFunction;
exports.HtmlGenerator = HtmlGenerator;
exports.MS_IN_DAY = MS_IN_DAY;
exports.MS_IN_HOUR = MS_IN_HOUR;
exports.MS_IN_MINUTE = MS_IN_MINUTE;
exports.MS_IN_MONTH = MS_IN_MONTH;
exports.MS_IN_SECOND = MS_IN_SECOND;
exports.MS_IN_WEEK = MS_IN_WEEK;
exports.MS_IN_YEAR = MS_IN_YEAR;
exports.Matrix = Matrix;
exports.MixinBase = MixinBase;
exports.MixinIndexed = MixinIndexed;
exports.MixinOptions = MixinOptions;
exports.MixinTimestamped = MixinTimestamped;
exports.NumberFormatter = NumberFormatter;
exports.OpenaiApiClient = OpenaiApiClient;
exports.OpenaiApiClientBase = OpenaiApiClientBase;
exports.OpenaiTokenUsage = OpenaiTokenUsage;
exports.Queue = Queue;
exports.SimpleTable = SimpleTable;
exports.SortedArray = SortedArray;
exports.StringStream = StringStream;
exports.TsDoc = TsDoc;
exports.TsDocTag = TsDocTag;
exports.absoluteToRelativePath = absoluteToRelativePath;
exports.arrAverage = arrAverage;
exports.arrEachToString = arrEachToString;
exports.arrEvery = arrEvery;
exports.arrFilterMutable = arrFilterMutable;
exports.arrFlatten = arrFlatten;
exports.arrIndicesOf = arrIndicesOf;
exports.arrLast = arrLast;
exports.arrMapMutable = arrMapMutable;
exports.arrObjectsToTable = arrObjectsToTable;
exports.arrObjectsUniqueKeys = arrObjectsUniqueKeys;
exports.arrRemoveDuplicates = arrRemoveDuplicates;
exports.arrShallowEquals = arrShallowEquals;
exports.arrShuffle = arrShuffle;
exports.arrSome = arrSome;
exports.arrSortNumeric = arrSortNumeric;
exports.arrSum = arrSum;
exports.arrSwap = arrSwap;
exports.arrTableAssertRowsSameLength = arrTableAssertRowsSameLength;
exports.arrTableEachToString = arrTableEachToString;
exports.arrTableToCSV = arrTableToCSV;
exports.arrTableToObjects = arrTableToObjects;
exports.assertInteger = assertInteger;
exports.assertNegativeInteger = assertNegativeInteger;
exports.assertPositiveInteger = assertPositiveInteger;
exports.assertPowerOfTen = assertPowerOfTen;
exports.assertValidDate = assertValidDate;
exports.assertValidDateDay = assertValidDateDay;
exports.assertValidDateMonth = assertValidDateMonth;
exports.assertValidDateYear = assertValidDateYear;
exports.assertValidNumber = assertValidNumber;
exports.assertValidTsDocComment = assertValidTsDocComment;
exports.asyncTasksLimit = asyncTasksLimit;
exports.asyncTasksParallel = asyncTasksParallel;
exports.asyncTasksSerial = asyncTasksSerial;
exports.asyncWithTimeout = asyncWithTimeout;
exports.atob = atob;
exports.btoa = btoa;
exports.buildRegexBetween = buildRegexBetween;
exports.bytesToInt = bytesToInt;
exports.cleanDirectory = cleanDirectory;
exports.cleanDirectorySafe = cleanDirectorySafe;
exports.cleanDirectorySafeSync = cleanDirectorySafeSync;
exports.cleanDirectorySync = cleanDirectorySync;
exports.colRowToA1 = colRowToA1;
exports.colToLetter = colToLetter;
exports.compareArray = compareArray;
exports.compareNumber = compareNumber;
exports.compareNumberDescending = compareNumberDescending;
exports.compareNumeric = compareNumeric;
exports.compareNumericDescending = compareNumericDescending;
exports.compareString = compareString;
exports.compareStringDescending = compareStringDescending;
exports.createDirectory = createDirectory;
exports.createDirectorySync = createDirectorySync;
exports.createFileExtensionFilter = createFileExtensionFilter;
exports.createObjectFactory = createObjectFactory;
exports.dateDaysAgo = dateDaysAgo;
exports.daysSinceDate = daysSinceDate;
exports.deleteDirectory = deleteDirectory;
exports.deleteDirectorySafe = deleteDirectorySafe;
exports.deleteDirectorySafeSync = deleteDirectorySafeSync;
exports.deleteDirectorySync = deleteDirectorySync;
exports.ensureValidWindowsPath = ensureValidWindowsPath;
exports.executeCommand = executeCommand;
exports.funParseClass = funParseClass;
exports.funParseFunction = funParseFunction;
exports.funSetName = funSetName;
exports.getCentury = getCentury;
exports.getConstructor = getConstructor;
exports.getCurrentYear = getCurrentYear;
exports.getPrototype = getPrototype;
exports.hoursSinceDate = hoursSinceDate;
exports.inheritStaticMembers = inheritStaticMembers;
exports.intToArrayBytes = intToArrayBytes;
exports.intToBuffer = intToBuffer;
exports.intToBytes = intToBytes;
exports.isBetween = isBetween;
exports.isConstructor = isConstructor;
exports.isEven = isEven;
exports.isGT = isGT;
exports.isGTE = isGTE;
exports.isHex = isHex;
exports.isHexOrUnicode = isHexOrUnicode;
exports.isInRange = isInRange;
exports.isInteger = isInteger;
exports.isIterable = isIterable;
exports.isLT = isLT;
exports.isLTE = isLTE;
exports.isLeapYear = isLeapYear;
exports.isMultiTsDocTag = isMultiTsDocTag;
exports.isNamedMultiTsDocTag = isNamedMultiTsDocTag;
exports.isNamedTsDocTag = isNamedTsDocTag;
exports.isNegativeInteger = isNegativeInteger;
exports.isNumericString = isNumericString;
exports.isObject = isObject;
exports.isOdd = isOdd;
exports.isPositiveInteger = isPositiveInteger;
exports.isPowerOfTen = isPowerOfTen;
exports.isPrototype = isPrototype;
exports.isSocialSecurityNumberDK = isSocialSecurityNumberDK;
exports.isValidDate = isValidDate;
exports.isValidDateDay = isValidDateDay;
exports.isValidDateMonth = isValidDateMonth;
exports.isValidDateYear = isValidDateYear;
exports.isValidNumber = isValidNumber;
exports.isValidTsDocComment = isValidTsDocComment;
exports.isoDateTimestamp = isoDateTimestamp;
exports.isoDateTimestampForFilename = isoDateTimestampForFilename;
exports.iterableFirstElement = iterableFirstElement;
exports.iteratePrototypeChain = iteratePrototypeChain;
exports.letterToCol = letterToCol;
exports.log = log;
exports.mapGetOrElse = mapGetOrElse;
exports.mapReverse = mapReverse;
exports.mapUpdate = mapUpdate;
exports.markdownWrapCodeBlock = markdownWrapCodeBlock;
exports.memoryUsage = memoryUsage;
exports.minutesSinceDate = minutesSinceDate;
exports.monthsSinceDate = monthsSinceDate;
exports.msSinceDate = msSinceDate;
exports.normalizeFileExtension = normalizeFileExtension;
exports.normalizeLineLengths = normalizeLineLengths;
exports.numDaysInMonth = numDaysInMonth;
exports.numRange = numRange;
exports.objAssignDeep = objAssignDeep;
exports.objDeepFreeze = objDeepFreeze;
exports.objDelete = objDelete;
exports.objDeleteKeys = objDeleteKeys;
exports.objDeleteKeysMutable = objDeleteKeysMutable;
exports.objEntries = objEntries;
exports.objEntriesArray = objEntriesArray;
exports.objFilter = objFilter;
exports.objForEach = objForEach;
exports.objGet = objGet;
exports.objGetOrElse = objGetOrElse;
exports.objHas = objHas;
exports.objIsEmpty = objIsEmpty;
exports.objKeys = objKeys;
exports.objKeysArray = objKeysArray;
exports.objMap = objMap;
exports.objMapKeys = objMapKeys;
exports.objMapMutable = objMapMutable;
exports.objPropertyValueToGetter = objPropertyValueToGetter;
exports.objReduce = objReduce;
exports.objReverse = objReverse;
exports.objSet = objSet;
exports.objSize = objSize;
exports.objSortKeys = objSortKeys;
exports.objToMap = objToMap;
exports.objUpdate = objUpdate;
exports.objValues = objValues;
exports.objValuesArray = objValuesArray;
exports.objWalk = objWalk;
exports.padArrayBytesLeft = padArrayBytesLeft;
exports.padArrayBytesRight = padArrayBytesRight;
exports.parseMarkdownCodeBlock = parseMarkdownCodeBlock;
exports.parseMarkdownTable = parseMarkdownTable;
exports.parseSocialSecurityNumberDK = parseSocialSecurityNumberDK;
exports.pdfGetPages = pdfGetPages;
exports.pdfIteratePages = pdfIteratePages;
exports.pdfSplitPages = pdfSplitPages;
exports.randomIntBetween = randomIntBetween;
exports.readExcelFile = readExcelFile;
exports.readExcelFileWorksheet = readExcelFileWorksheet;
exports.readFileStringSync = readFileStringSync;
exports.readJsonFile = readJsonFile;
exports.readJsonFileSync = readJsonFileSync;
exports.regBlockCommentsWithIndent = regBlockCommentsWithIndent;
exports.regFunctionsExports = regFunctionsExports;
exports.regHex = regHex;
exports.regHexPrefix = regHexPrefix;
exports.regInteger = regInteger$1;
exports.regJestTests = regJestTests;
exports.regLocaleAlpha = regLocaleAlpha;
exports.regLocaleAlphaNumeric = regLocaleAlphaNumeric;
exports.regNumberCommaSepDotDecimal = regNumberCommaSepDotDecimal;
exports.regNumberDotSepCommaDecimal = regNumberDotSepCommaDecimal;
exports.regNumberNoThousandSepCommaDecimal = regNumberNoThousandSepCommaDecimal;
exports.regNumberNoThousandSepDotDecimal = regNumberNoThousandSepDotDecimal;
exports.regPowerOfTen = regPowerOfTen;
exports.regRepeatingWhiteSpace = regRepeatingWhiteSpace;
exports.regSocialSecurityNumbersDK = regSocialSecurityNumbersDK;
exports.regTsDocExampleCode = regTsDocExampleCode;
exports.regTsDocExampleLines = regTsDocExampleLines;
exports.regWords = regWords;
exports.regexClone = regexClone;
exports.regexEscapeString = regexEscapeString;
exports.regexFixFlags = regexFixFlags;
exports.regexGetGroupNames = regexGetGroupNames;
exports.regexIsValidFlags = regexIsValidFlags;
exports.regexMatcherToValidater = regexMatcherToValidater;
exports.regexScopeTree = regexScopeTree;
exports.regexValidFlags = regexValidFlags;
exports.rexec = rexec;
exports.rexecFirstMatch = rexecFirstMatch;
exports.round = round;
exports.roundDown = roundDown;
exports.roundToNearest = roundToNearest;
exports.roundToNearestPow10 = roundToNearestPow10;
exports.roundUp = roundUp;
exports.roundWith = roundWith;
exports.secondsSinceDate = secondsSinceDate;
exports.setDifference = setDifference;
exports.setEnumerable = setEnumerable;
exports.setIntersection = setIntersection;
exports.setIsSuperset = setIsSuperset;
exports.setNonConfigurable = setNonConfigurable;
exports.setNonEnumerable = setNonEnumerable;
exports.setNonEnumerablePrivateProperties = setNonEnumerablePrivateProperties;
exports.setNonEnumerableSafe = setNonEnumerableSafe;
exports.setNonWritable = setNonWritable;
exports.setSymmetricDifference = setSymmetricDifference;
exports.setUnion = setUnion;
exports.setWritable = setWritable;
exports.strCountCharOccurances = strCountCharOccurances;
exports.strCountChars = strCountChars;
exports.strCountWords = strCountWords;
exports.strEnsureEndsWith = strEnsureEndsWith;
exports.strFirstCharToUpperCase = strFirstCharToUpperCase;
exports.strHashToBuffer = strHashToBuffer;
exports.strHashToString = strHashToString;
exports.strHashToUint32Array = strHashToUint32Array;
exports.strIsLowerCase = strIsLowerCase;
exports.strIsMultiLine = strIsMultiLine;
exports.strIsUpperCase = strIsUpperCase;
exports.strNoConsecutiveEmptyLines = strNoConsecutiveEmptyLines;
exports.strNoConsecutiveWhitespace = strNoConsecutiveWhitespace;
exports.strParseBoolean = strParseBoolean;
exports.strPrependLines = strPrependLines;
exports.strRemoveDuplicateChars = strRemoveDuplicateChars;
exports.strRemoveEmptyLines = strRemoveEmptyLines;
exports.strRemoveFirstAndLastLine = strRemoveFirstAndLastLine;
exports.strRemoveNewLines = strRemoveNewLines;
exports.strRepeat = strRepeat;
exports.strReplaceAll = strReplaceAll;
exports.strSortChars = strSortChars;
exports.strSplitAndTrim = strSplitAndTrim;
exports.strSplitCamelCase = strSplitCamelCase;
exports.strToCharCodes = strToCharCodes;
exports.strToCharSet = strToCharSet;
exports.strToSentences = strToSentences;
exports.strToSortedCharSet = strToSortedCharSet;
exports.strToWords = strToWords;
exports.strTrimLines = strTrimLines;
exports.strTrimLinesLeft = strTrimLinesLeft;
exports.strTrimLinesRight = strTrimLinesRight;
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
exports.toJson = toJson;
exports.trimArrayBytesLeft = trimArrayBytesLeft;
exports.trimArrayBytesRight = trimArrayBytesRight;
exports.tsCountExports = tsCountExports;
exports.tsDocExtractAllComments = tsDocExtractAllComments;
exports.tsDocExtractExample = tsDocExtractExample;
exports.tsDocExtractFirstComment = tsDocExtractFirstComment;
exports.tsDocFixSpacingBeforeAfter = tsDocFixSpacingBeforeAfter;
exports.tsDocNormalizeTagName = tsDocNormalizeTagName;
exports.tsDocRemoveEmptyLines = tsDocRemoveEmptyLines;
exports.tsDocStripAllTagsExcepThrowsParamDescription = tsDocStripAllTagsExcepThrowsParamDescription;
exports.tsDocStripExample = tsDocStripExample;
exports.tsDocStripTypes = tsDocStripTypes;
exports.tsDocUnwrapComment = tsDocUnwrapComment;
exports.tsDocWrapAsComment = tsDocWrapAsComment;
exports.tsDocWrapExample = tsDocWrapExample;
exports.tsExtractImports = tsExtractImports;
exports.tsExtractJestTests = tsExtractJestTests;
exports.tsGetClassMemberAccessModifiers = tsGetClassMemberAccessModifiers;
exports.tsHasDefaultExport = tsHasDefaultExport;
exports.tsJestConvertExportNameString = tsJestConvertExportNameString;
exports.tsJestFixLineSpacing = tsJestFixLineSpacing;
exports.tsSimpleMinifyCode = tsSimpleMinifyCode;
exports.tsStripBlockComments = tsStripBlockComments;
exports.tsStripComments = tsStripComments;
exports.tsStripDeclSourceMapComments = tsStripDeclSourceMapComments;
exports.tsStripExportKeyword = tsStripExportKeyword;
exports.tsStripFullSlashCommentLines = tsStripFullSlashCommentLines;
exports.tsStripImports = tsStripImports;
exports.tsWalkImports = tsWalkImports;
exports.weeksSinceDate = weeksSinceDate;
exports.writeExcelFile = writeExcelFile;
exports.writeJsonFile = writeJsonFile;
exports.writeJsonFileSync = writeJsonFileSync;
exports.yearsSinceDate = yearsSinceDate;
//# sourceMappingURL=index.js.map
