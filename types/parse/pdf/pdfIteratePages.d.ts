/**
 * Parse text content of each page in a PDF file. Array indices correspond to page numbers.
 * @param filepath - The path to the PDF file.
 * @param begin - The page number to start from. If not provided, defaults to the first page.
 * @param end - The page number to end at. If not provided, defaults to the last page.
 * @returns An async generator that yields the text content of each page in the PDF.
 * @throws Will yield an empty string if an error occurs while processing a page.
 * @example ```ts
 * for await (const pageText of pdfIteratePages('path/to/file.pdf')) {
 *   console.log(pageText);
 * }
 * ```
 */
export declare function pdfIteratePages(filepath: string, begin?: number, end?: number): AsyncGenerator<string>;
//# sourceMappingURL=pdfIteratePages.d.ts.map