import { SRTSubtitle } from './SRTSubtitle';
/**
 * A collection of SRTSubtitles.
 */
export declare class SRTSubtitles {
    /**
     * The SRTSubtitle instances.
     */
    subtitles: SRTSubtitle[];
    /**
     * Create a new SRTSubtitles instance.
     * @param string A correctly formatted SRT subtitles string.
     */
    constructor(string: string);
    /**
     * Returns the subtitles as a string in the SRT format.
     */
    toString(): string;
}
//# sourceMappingURL=SRTSubtitles.d.ts.map