import { TsDocTag } from './TsDocTag';
export declare class TsDoc {
    /**
     * The default order in which tags are rendered in the TSDoc comment.
     */
    static defaultTagOrder: string[];
    /**
     * The order in which tags are rendered in the TSDoc comment.
     * Empty strings means spacing between tags when iterating and rendering.
     */
    protected tagOrder?: string[];
    /**
     * Can be used to specify the order in which param-tags are rendered in the TSDoc comment.
     */
    protected paramOrder?: Set<string>;
    /**
     * Single tags are tags that can only appear once in a TSDoc comment.
     */
    readonly single: Map<string, TsDocTag>;
    /**
     * Multi tags are tags that can appear multiple times in a TSDoc comment, but each instance must have unique description text.
     */
    readonly multi: Map<string, TsDocTag[]>;
    /**
     * Named multi tags are tags that can appear multiple times in a TSDoc comment, but each instance must have a unique name.
     */
    readonly namedMulti: Map<string, Map<string, TsDocTag>>;
    /**
     * Creates a new TSDoc comment.
     * @param code The TSDoc block comment soruce code.
     * @param options Options for the TSDoc instance.
     * @throws If the provided code is not a valid TSDoc block comment.
     */
    constructor(code?: string, options?: {
        tagOrder?: Iterable<string>;
        paramOrder?: Iterable<string>;
    });
    addBlockComment(code: string): this;
    /**
     * The number of tags in the TsDoc instance.
     */
    get size(): number;
    /**
     * Returns whether the TsDoc instance has no tags.
     */
    get isEmpty(): boolean;
    /**
     * Deletes all tags.
     * The tagOrder and paramOrder properties are not affected.
     */
    clear(): this;
    /**
     * Adds a TsDocTag to the TsDoc instance.
     * @param tsDocTag The TsDocTag to add.
     */
    addTag(tsDocTag: TsDocTag): this;
    /**
     * Deletes one or all TsDocTag matching the provided tag.
     * If name is not provided, all tags matching the provided tag are deleted.
     * @param tag The tag to remove.
     * @param name The name of the tag to remove.
     */
    removeTags(tag: string, name?: string): this;
    /**
     * Iterate tags in the order specified in the ´tagOrder´ and ´paramOrder´ properties.
     * @param withSpaces Whether to yield empty strings encountered in ´tagOrder´. Empty strings are used to add spacing between tags.
     */
    iterateTags(withSpaces?: boolean): Generator<TsDocTag | ''>;
    /**
     * Returns a deep clone of this instance.
     */
    clone(): TsDoc;
    /**
     * Merge tags from another TsDoc instance.
     */
    assign(tsdoc: TsDoc): this;
    /**
     * Sort the param tags according to the order specified in the paramOrder property.
     */
    reorderParams(): this;
    /**
     * Renders a TSDoc block comment string with all tags in the order specified by the tagOrder property.
     */
    render(): string;
    /**
     * Renders a TSDoc block comment string with all tags in the order specified by the tagOrder property.
     * @remarks Identical to the `render` method.
     */
    toString(): string;
    /**
     * Returns the order in which tags are rendered in the TSDoc comment.
     * If no tagOrder was specified in the constructor options, TsDoc.defaultTagOrder is used.
     */
    getTagOrder(): string[];
}
//# sourceMappingURL=TsDoc.d.ts.map