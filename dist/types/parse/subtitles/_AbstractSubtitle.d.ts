import { TimeInterval } from '../../time/TimeInterval';
/**
 * Abstract class represents a subtitle of no specific format.
 */
export declare abstract class _AbstractSubtitle {
    /**
     * The time interval of the subtitle.
     */
    interval: TimeInterval;
    /**
     * The text of the subtitle.
     */
    text: string;
    /**
     * Creates a new Subtitle instance.
     * @param interval The time interval of the subtitle.
     * @param text The text of the subtitle.
     */
    constructor(interval: TimeInterval, text: string);
}
//# sourceMappingURL=_AbstractSubtitle.d.ts.map