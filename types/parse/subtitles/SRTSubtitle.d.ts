import { TimeInterval } from '../../time/TimeInterval';
import { _AbstractSubtitle } from './_AbstractSubtitle';
/**
 * Represents a single subtitle in the SRT format.
 */
export declare class SRTSubtitle extends _AbstractSubtitle {
    /**
     * Creates a new SRTSubtitle instance.
     * @param interval The time interval of the subtitle.
     * @param text The text of the subtitle.
     */
    constructor(interval: TimeInterval, text: string);
    /**
     * Renders the subtitle as a string in the SRT format.
     */
    toString(): string;
}
//# sourceMappingURL=SRTSubtitle.d.ts.map