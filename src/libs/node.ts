import Path from 'path';
import fs from 'fs';
import { numFormatEU, numFormatUS } from './number';
import { strCountCharOccurances } from './string';

export type MemoryUsageValues = {
  processAllocationMB: number;
  heapAllocationMB: number;
  heapUsedMB: number;
  extenalV8: number;
};

export type MemoryUsageValuesFormatted = {
  processAllocationMB: string;
  heapAllocationMB: string;
  heapUsedMB: string;
  extenalV8: string;
};

const toIntMB = (n: number) => Math.floor(n * 0.000001);

const getMemoryUsageFormatted = (
  format: (n: number) => string,
): MemoryUsageValuesFormatted => {
  const data = process.memoryUsage();
  return {
    processAllocationMB: format(data.rss),
    heapAllocationMB: format(data.heapTotal),
    heapUsedMB: format(data.heapUsed),
    extenalV8: format(data.external),
  };
};

/**
 * Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
 */
export function getMemoryUsage(): MemoryUsageValues {
  const data = process.memoryUsage();
  return {
    processAllocationMB: toIntMB(data.rss),
    heapAllocationMB: toIntMB(data.heapTotal),
    heapUsedMB: toIntMB(data.heapUsed),
    extenalV8: toIntMB(data.external),
  };
}

/**
 * Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
 * The values are formatted strings in the style of 5.000,00
 */
export function getMemoryUsageFormattedEU(): MemoryUsageValuesFormatted {
  return getMemoryUsageFormatted(
    (bytes: number) => `${numFormatEU(bytes * 0.000001, 2)} MB`,
  );
}

/**
 * Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
 * The values are formatted strings in the style of 5,000.00
 */
export function getMemoryUsageFormattedUS(): MemoryUsageValuesFormatted {
  return getMemoryUsageFormatted(
    (bytes: number) => `${numFormatUS(bytes * 0.000001, 2)} MB`,
  );
}

/**
 * Takes a directory path as a list of directory/folder names from the current working directory and returns it as a full path string.
 * @param dirs directory names from the current working directory.
 */
export function getWorkingDirPath(...dirs: Array<string>): string {
  return Path.join(process.cwd(), ...dirs);
}

/**
 * Takes a filepath and returns its utf8 contents as a single string.
 * @param path path to the file
 */
export function readFileStringSync(path: string): string {
  return fs.readFileSync(path, 'utf8').toString();
}

/**
 * Normalize a file extension to the form: .[ext]
 * Anything before the last "." is not returned.
 * @param ext file extension
 */
export function normalizeFileExtension(ext: string): string {
  if (ext === '' || ext === '.') return '';
  if (/[<>"|?*:]/g.test(ext)) {
    throw new Error(
      `Illegal characters in file extension: ${ext}  |  Illegal characters are: <>"|?:*`,
    );
  }
  if (strCountCharOccurances(ext, '.') === 0) return '.' + ext;
  return ext.substring(ext.lastIndexOf('.'));
}

/**
 * Takes a list of file extensions and returns a filter function that returns true if a filepath/filename passed to it contains one of the given file extensions.
 * @param fileExtensions file extensions
 */
export function createFileExtensionFilter(
  ...fileExtensions: Array<string>
): (filepath: string) => boolean {
  if (!fileExtensions.length) return () => true;
  return (filepath: string) => {
    for (const ext of fileExtensions.map(normalizeFileExtension)) {
      if (Path.extname(filepath) === ext) {
        return true;
      }
    }
    return false;
  };
}

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
export function ensureValidWindowsPath(
  path: string,
  options?: ensureValidWindowsPathOptions,
): boolean {
  const throwOrFalse = (msg: string) => {
    if (options && options.assert === true) {
      throw new Error(
        `Invalid windows path. ${msg}  |  input received: ${path}`,
      );
    }
    return false;
  };

  if (path.length === 0) {
    return throwOrFalse('Path string is length 0.');
  }

  if (
    strCountCharOccurances(path, '/') > 0 &&
    strCountCharOccurances(path, '\\') > 0
  ) {
    return throwOrFalse('Path contains both backslash and forward slash.');
  }

  const maxLength = (options && options.extendedMaxLength ? 32767 : 260) - 12;
  if (path.length > maxLength) {
    return throwOrFalse(`Maximum length of ${maxLength} exceeded`);
  }

  let noDriveLetter = path;
  if (/^\w:(\\|\/)/g.test(path)) {
    noDriveLetter = path.substring(2);
  }
  if (/[<>"|?*:]/g.test(noDriveLetter)) {
    return throwOrFalse(
      `Illegal characters in: ${path}  |  Illegal characters are: <>"|?:*`,
    );
  }

  if (/(\\|\/)(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])((\\|\/)|$)/g.test(path)) {
    return throwOrFalse('Illegal name in path string');
  }

  return true;
}

import { Readable } from 'stream';

/**
 * Extension of Node's native Readable class for converting a string into a Readable stream.
 */
export class StringStream extends Readable {
  private str: string;
  private ended: boolean;

  constructor(str: string) {
    super();
    this.str = str;
    this.ended = false;
  }

  _read(): void {
    if (!this.ended) {
      process.nextTick(() => {
        this.push(Buffer.from(this.str));
        this.push(null);
      });
      this.ended = true;
    }
  }
}

/**
 * Drain a Readable into a string.
 * @param stream - a Readable of string chunks
 */
export async function streamToString(stream: Readable): Promise<string> {
  const chunks: string[] = [];
  for await (const chunk of stream) {
    chunks.push(Buffer.from(chunk).toString());
  }
  return chunks.join('');
}
