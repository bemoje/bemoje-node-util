/**
 * Represents a time of day or a duration.
 * Precision is from hours to miliseconds.
 */
export declare class Time {
    #private;
    /**
     * Creates a new Time instance.
     * @param input The time in millisecond representation, or a string in the format "HH:MM:SS.mmm", or an array in the format [HH, MM, SS, mmm].
     * @throws if the time is invalid.
     */
    constructor(input: number | string | number[]);
    /**
     * Adds the specified amount of hours to the current time.
     * Floating point numbers, neative values and otherwise out of bounds values are allowed unless they would cause the time to become invalid.
     * @param hours The amount of hours to add.
     * @throws if the time becomes invalid after the operation.
     */
    addHours(hours: number): this;
    /**
     * Adds the specified amount of minutes to the current time.
     * Floating point numbers, neative values and otherwise out of bounds values are allowed unless they would cause the time to become invalid.
     * @param minutes The amount of minutes to add.
     * @throws if the time becomes invalid after the operation.
     */
    addMinutes(minutes: number): this;
    /**
     * Adds the specified amount of seconds to the current time.
     * Floating point numbers, neative values and otherwise out of bounds values are allowed unless they would cause the time to become invalid.
     * @param seconds The amount of seconds to add.
     * @throws if the time becomes invalid after the operation.
     */
    addSeconds(seconds: number): this;
    /**
     * Adds the specified amount of milliseconds to the current time.
     * Floating point numbers, neative values and otherwise out of bounds values are allowed unless they would cause the time to become invalid.
     * @param milliseconds The amount of milliseconds to add.
     * @throws if the time becomes invalid after the operation.
     */
    addMilliseconds(milliseconds: number): this;
    /**
     * Subtracts the specified amount of hours from the current time.
     * Floating point numbers, neative values and otherwise out of bounds values are allowed unless they would cause the time to become invalid.
     * @param hours The amount of hours to subtract.
     * @throws if the time becomes invalid after the operation.
     */
    subtractHours(hours: number): this;
    /**
     * Subtracts the specified amount of minutes from the current time.
     * Floating point numbers, neative values and otherwise out of bounds values are allowed unless they would cause the time to become invalid.
     * @param minutes The amount of minutes to subtract.
     * @throws if the time becomes invalid after the operation.
     */
    subtractMinutes(minutes: number): this;
    /**
     * Subtracts the specified amount of seconds from the current time.
     * Floating point numbers, neative values and otherwise out of bounds values are allowed unless they would cause the time to become invalid.
     * @param seconds The amount of seconds to subtract.
     * @throws if the time becomes invalid after the operation.
     */
    subtractSeconds(seconds: number): this;
    /**
     * Subtracts the specified amount of milliseconds from the current time.
     * Floating point numbers, neative values and otherwise out of bounds values are allowed unless they would cause the time to become invalid.
     * @param milliseconds The amount of milliseconds to subtract.
     * @throws if the time becomes invalid after the operation.
     */
    subtractMilliseconds(milliseconds: number): this;
    /**
     * Returns the hours.
     */
    get hours(): number;
    /**
     * Set the hours to a specified value.
     * @param value The value to set the hours to.
     * @throws if the value is invalid.
     */
    set hours(value: number);
    /**
     * Returns the minutes.
     */
    get minutes(): number;
    /**
     * Set the minutes to a specified value.
     * @param value The value to set the minutes to.
     * @throws if the value is invalid.
     */
    set minutes(value: number);
    /**
     * Returns the seconds.
     */
    get seconds(): number;
    /**
     * Set the seconds to a specified value.
     * @param value The value to set the seconds to.
     * @throws if the value is invalid.
     */
    set seconds(value: number);
    /**
     * Returns the milliseconds.
     */
    get milliseconds(): number;
    /**
     * Set the milliseconds to a specified value.
     * @param value The value to set the milliseconds to.
     * @throws if the value is invalid.
     */
    set milliseconds(value: number);
    /**
     * Returns the time as an array in the format [HH, MM, SS, mmm].
     */
    toArray(): number[];
    /**
     * Returns the time as a string in the format "HH:MM:SS.mmm".
     * @param msDelimiter The delimiter between seconds and milliseconds.
     */
    toString(msDelimiter?: string): string;
    /**
     * Returns the time in millisecond representation.
     */
    toNumber(): number;
    /**
     * Returns the time in millisecond representation.
     */
    valueOf(): number;
    /**
     * Compares this instance to another by comparing millisecond representations.
     * @see difference for getting the difference as a new Time instance.
     * @param other The other Time instance to compare to.
     */
    compareTo(other: Time): number;
    /**
     * Returns a new Time instance that represents the time difference between this instance and another.
     * @see compareTo for getting the difference in milliseconds.
     * @param other The other Time instance to compare to.
     */
    difference(other: Time): Time;
    /**
     * Returns a new Time instance.
     */
    clone(): Time;
}
//# sourceMappingURL=Time.d.ts.map