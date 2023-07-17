/**
 * A tag belonging to a TSDoc.
 * This does not follow the official TSDoc spec. It is a simplified version.
 */
export declare class TsDocTag {
    /**
     * The kind of tag.
     */
    tag: string;
    /**
     * The tag's name parameter.
     */
    name: string;
    /**
     * The tag's description.
     */
    description: string[];
    /**
     * @param tag The kind of tag. Rules:
     * - May only consist of letters a-z.
     * - Certain tags are normalized to other synonymous tags.
     * - Custom tag names are allowed as long as they follow the above rules.
     * @param name The tag's name parameter. Rules:
     * - Only used for named tags.
     * - Must start with a letter.
     * - May only contain word characters and ".".
     * @param description The tag's description. Rules:
     * - Unnamed tags must have a description.
     * - Example tags are formatted as markdown ts-code blocks.
     * - Leading dash in the first line is normalized (removed).
     * @throws on named tag missing name.
     * @throws on unnamed tag missing description.
     * @throws on unnamed tag trying to set name.
     * @throws on invalid tag name.
     * @throws on invalid name.
     * @throws on invalid markdown code block for example tag.
     */
    constructor(tag: string, name?: string, description?: string[]);
    /**
     * Renders the tag as a TSDoc string.
     * @remarks Ensures that example tags are formatted as markdown ts-code blocks.
     */
    toString(): string;
}
//# sourceMappingURL=TsDocTag.d.ts.map