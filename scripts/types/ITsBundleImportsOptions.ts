export interface ITsBundleImportsOptions {
  /**
   * Maximum depth to bundle to.
   */
  maxDepth?: number

  /**
   * Stop bundling when the output string size (character count) exceeds this value.
   */
  maxOutputStringSize?: number

  /**
   * Use the content of declaration files instead of the source files.
   */
  declarations?: boolean

  /**
   * Removes the export keyword from all exports - except for the entry file.
   */
  stripExportKeywords?: boolean

  /**
   * Removes all lines that consist of only a double slash comment. Inline comments are not affected.
   */
  stripSlashComments?: boolean

  /**
   * Removes all block comments, including TSDoc block comments.
   */
  stripBlockComments?: boolean

  /**
   * Remove all empty lines.
   */
  stripEmptyLines?: boolean

  /**
   * Remove the indent from all lines.
   */
  stripIndents?: boolean

  /**
   * Remove all TSDoc tags, leaving only the description/summary.
   * @remarks
   * This option is ignored if the 'stripBlockComments' option is set to 'true'.
   */
  stripTsDocSoOnlyDescription?: boolean

  /**
   * Remove all 'example' tags.
   * @remarks
   * This option is ignored if either the 'stripBlockComments' or 'stripTsDocSoOnlyDescription' options are 'true'.
   */
  stripTsDocExample?: boolean

  /**
   * Remove all empty TSDoc block comment lines.
   * @remarks
   * This option is ignored if the 'stripBlockComments' or option is 'true'.
   */
  stripTsDocEmptyLines?: boolean
}
