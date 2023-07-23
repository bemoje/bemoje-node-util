import { Time } from './Time';
/**
 * Represents a time interval.
 */
export declare class TimeInterval {
    /**
     * The start of the interval.
     */
    start: Time;
    /**
     * The end of the interval.
     */
    end: Time;
    /**
     * Creates a new TimeInterval instance.
     * @param start The start of the interval.
     * @param end The end of the interval.
     * @throws if the start time is after the end time.
     */
    constructor(start: Time, end: Time);
    /**
     * Returns the duration of the interval as a new Time instance.
     */
    getDuration(): Time;
    /**
     * Returns the interval as a string, rendering both the start and end times.
     * Renders in the format "HH:MM:SS.mmm --> HH:MM:SS.mmm", with the default delimiter being " --> ".
     * @param delimiter The delimiter between the start and end times.
     * @param msDelimiter The delimiter between seconds and milliseconds.
     */
    toString(delimiter?: string, msDelimiter?: string): string;
}
//# sourceMappingURL=TimeInterval.d.ts.map