/**
 * A tag in a TsDoc instance.
 */
export declare class TsDocTag {
    tag: string;
    name: string;
    description: string[];
    /**
     * @param tag The kind of tag.
     * @param name The tag's name parameter, if it has one.
     */
    constructor(tag: string, name: string, description: string[]);
    /**
     * Renders the tag as a string.
     * @remarks Ensures that example tags are formatted as markdown ts-code blocks.
     */
    toString(): string;
}
//# sourceMappingURL=TsDocTag.d.ts.map