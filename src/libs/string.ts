/**
 * Inserts a provided string before and after a string.
 * @param input - input string
 * @param wrap - string to place before and after
 * @example
 * ```js
 * expect(util.strWrapIn('input', '#')).toBe('#input#');
 * ```
 */
export function strWrapIn(input: string, wrap: string): string {
  return wrap + input + wrap;
}

/**
 * Inserts provided strings before and after a string.
 * @param input - input string
 * @param before - string to place before
 * @param after - string to place after
 * @example
 * ```js
 * expect(util.strWrapBetween('input', '#', '&')).toBe('#input&');
 * ```
 */
export function strWrapBetween(
  input: string,
  before: string,
  after: string,
): string {
  return before + input + after;
}

/**
 * Wraps a string in brackets.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInBrackets('input')).toBe('[input]');
 * ```
 */
export function strWrapInBrackets(input: string): string {
  return '[' + input + ']';
}

/**
 * Wraps a string in braces.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInBraces('input')).toBe('{input}');
 * ```
 */
export function strWrapInBraces(input: string): string {
  return '{' + input + '}';
}

/**
 * Wraps a string in parenthesis.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInParenthesis('input')).toBe('(input)');
 * ```
 */
export function strWrapInParenthesis(input: string): string {
  return '(' + input + ')';
}

/**
 * Wraps a string in parenthesis.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInSingleQuotes('input')).toBe("'input'");
 * ```
 */
export function strWrapInSingleQuotes(input: string): string {
  return "'" + input + "'";
}

/**
 * Wraps a string in parenthesis.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInDoubleQuotes('input')).toBe('"input"');
 * ```
 */
export function strWrapInDoubleQuotes(input: string): string {
  return '"' + input + '"';
}

/**
 * Returns whether the string is lower case.
 * @param input - input string
 * @example
 * ```js
 * strIsLowerCase('abc')
 * //=> true
 *
 * strIsLowerCase('ABC')
 * //=> false
 * ```
 */
export function strIsLowerCase(input: string): boolean {
  return input === input.toLowerCase();
}

/**
 * Returns whether the string is upper case.
 * @param input - input string
 * @example
 * ```js
 * strIsUpperCase('abc')
 * //=> false
 *
 * strIsUpperCase('ABC')
 * //=> true
 * ```
 */
export function strIsUpperCase(input: string): boolean {
  return input === input.toUpperCase();
}

/**
 * Returns an array of words in the string
 * @param input - input string
 * @example
 * ```js
 * strToWords('How are you?')
 * //=> ['How', 'are', 'you']
 * ```
 */
export function strToWords(input: string): Array<string> {
  return input.match(regexIsWord) || [];
}

const regexIsNumber = /\d((\.|\d)*)?/g;
const regexIsWord = /\b[^\W]+/g;
/**
 * Returns an array of words in the string
 * @param input - input string
 * @example
 * ```js
 * strSplitWordByCamelCase('someCamelCase')
 * //=> ['some', 'Camel', 'Case']
 * ```
 */
export function strSplitWordByCamelCase(word: string): Array<string> {
  function isCamelCaseWordBreakIndex(word: string, index: number) {
    return (
      strIsLowerCase(word[index - 1]) &&
      strIsUpperCase(word[index]) &&
      !regexIsNumber.test(word[index - 1]) &&
      !regexIsNumber.test(word[index])
    );
  }
  const result = [];
  const lastCharIndex = word.length - 1;
  let lastCamelCaseBreakIndex = 0;
  let foundCamelCase = false;
  for (let i = 1; i < word.length; i++) {
    if (foundCamelCase && i === lastCharIndex) {
      // last char
      const sub = word.substring(lastCamelCaseBreakIndex);
      if (sub) result.push(sub);
      continue;
    }
    if (isCamelCaseWordBreakIndex(word, i)) {
      const sub = word.substring(lastCamelCaseBreakIndex, i);
      if (!sub) continue;
      result.push(sub);
      lastCamelCaseBreakIndex = i;
      foundCamelCase = true;
    }
  }
  // if no splits needed, just return the word as it was
  if (!foundCamelCase) {
    result.push(word);
  }
  return result;
}

/**
 * Count occurances of a character within a given string.
 * @param input - The string to search
 * @param char - The character to find
 */
export function strCountCharOccurances(input: string, char: string): number {
  if (char.length !== 1) {
    throw new Error(
      'Expected char to be a single character string of length 1.',
    );
  }
  let result = 0;
  for (const c of input) {
    if (c === char) {
      result++;
    }
  }
  return result;
}
