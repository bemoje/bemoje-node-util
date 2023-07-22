import { tsCountLinesOfCode } from './tsCountLinesOfCode'

describe(tsCountLinesOfCode.name, () => {
  it('should return 0 for an empty string', () => {
    expect(tsCountLinesOfCode('')).toBe(0)
  })

  it('should return 0 for a string with only whitespace characters', () => {
    expect(tsCountLinesOfCode('   \t \n   ')).toBe(0)
  })

  it('should return 0 for a string with only empty lines', () => {
    expect(tsCountLinesOfCode('\n\n\n\n')).toBe(0)
  })

  it('should return the correct number of lines of code for a simple string with one line of code', () => {
    expect(tsCountLinesOfCode('const a = 5;')).toBe(1)
  })

  it('should return the correct number of lines of code for a simple string with multiple lines of code', () => {
    expect(tsCountLinesOfCode('const a = 5;\nconst b = 10;')).toBe(2)
  })

  it('should remove import statements from the code before counting lines of code', () => {
    const code = `import { someFunction } from './someModule';
const a = 5;
const b = 10;
someFunction(a, b);`
    expect(tsCountLinesOfCode(code)).toBe(3)
  })

  it('should remove block comments from the code before counting lines of code', () => {
    const code = `/**
 * This is a block comment.
 */
function someFunction() {
  code;
}`
    expect(tsCountLinesOfCode(code)).toBe(3)
  })

  it('should remove inline comments from the code before counting lines of code', () => {
    const code = `const a = 5; // Initialize a with a value`
    expect(tsCountLinesOfCode(code)).toBe(1)
  })
})
