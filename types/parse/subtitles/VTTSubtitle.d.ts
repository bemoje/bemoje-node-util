import { TimeInterval } from '../../time/TimeInterval';
import { _AbstractSubtitle } from './_AbstractSubtitle';
/**
 * Represents a single subtitle in the VTT format.
 */
export declare class VTTSubtitle extends _AbstractSubtitle {
    /**
     * Creates a new VTTSubtitle instance.
     * @param interval The time interval of the subtitle.
     * @param text The text of the subtitle.
     */
    constructor(interval: TimeInterval, text: string);
    /**
     * Renders the subtitle as a string in the VTT format.
     */
    toString(): string;
}
//# sourceMappingURL=VTTSubtitle.d.ts.map