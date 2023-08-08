import { VTTSubtitle } from './VTTSubtitle';
/**
 * A collection of VTTSubtitles.
 */
export declare class VTTSubtitles {
    /**
     * The SRTSubtitle instances.
     */
    subtitles: VTTSubtitle[];
    /**
     * Create a new VTTSubtitles instance.
     * @param vtt A correctly formatted VTT subtitles string.
     */
    constructor(vtt: string);
    /**
     * Returns the subtitles to a VTT format string.
     */
    toString(): string;
}
//# sourceMappingURL=VTTSubtitles.d.ts.map