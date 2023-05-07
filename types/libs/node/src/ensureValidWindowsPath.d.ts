export type ensureValidWindowsPathOptions = {
    extendedMaxLength?: boolean;
    assert?: boolean;
};
/**
 * Check whether a provided windows filesystem path string is valid according to:
 * https://msdn.microsoft.com/en-us/library/windows/desktop/aa365247(v=vs.85).aspx
 * @param path The path to validate
 * @param extendedMaxLength On most versions of windows, the max allowed length of paths has been
 * raised.
 */
export declare function ensureValidWindowsPath(path: string, options?: ensureValidWindowsPathOptions): boolean;
//# sourceMappingURL=ensureValidWindowsPath.d.ts.map