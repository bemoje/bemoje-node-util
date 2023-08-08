/**
 * Normalize a file extension to the form: .[ext]
 * Anything before the last "." is not returned.
 * @returns The normalized file extension.
 * @throws If the extension contains illegal characters.
 * @param ext file extension
 * @example ```ts
 * normalizeFileExtension('jpg');;
 * //=> '.jpg'
 * normalizeFileExtension('.jpg');;
 * //=> '.jpg'
 * normalizeFileExtension('..jpg');;
 * //=> '.jpg'
 * normalizeFileExtension('');;
 * //=> ''
 * normalizeFileExtension('.');;
 * //=> ''
 * normalizeFileExtension('jpg|png');;
 * //=> Error
 * ```
 */
export declare function normalizeFileExtension(ext: string): string;
//# sourceMappingURL=normalizeFileExtension.d.ts.map