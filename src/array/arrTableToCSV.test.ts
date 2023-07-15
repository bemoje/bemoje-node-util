import { arrTableToCSV } from './arrTableToCSV'

describe('arrTableToCSV', () => {
  it('should convert a 2D array to a CSV string with default delimiter and replaceLinebreakWith', () => {
    const input = [
      ['John', 'Doe', 'john.doe@example.com'],
      ['Jane', 'Smith', 'jane.smith@example.com'],
    ]
    const expectedOutput = 'John;Doe;john.doe@example.com\nJane;Smith;jane.smith@example.com'

    const result = arrTableToCSV(input)

    expect(result).toEqual(expectedOutput)
  })

  it('should convert a 2D array to a CSV string with custom delimiter and replaceLinebreakWith', () => {
    const input = [
      ['John', 'Doe', 'john.doe@example.com'],
      ['Jane', 'Smith', 'jane.smith@example.com'],
    ]
    const delimiter = ','
    const replaceLinebreakWith = '-'
    const expectedOutput = 'John,Doe,john.doe@example.com\nJane,Smith,jane.smith@example.com'

    const result = arrTableToCSV(input, delimiter, replaceLinebreakWith)

    expect(result).toEqual(expectedOutput)
  })

  it('should convert a 2D array to a CSV string with empty input', () => {
    const input: any[][] = []
    const expectedOutput = ''

    const result = arrTableToCSV(input)

    expect(result).toEqual(expectedOutput)
  })

  it('should convert a 2D array to a CSV string with empty rows', () => {
    const input = [
      ['John', 'Doe', 'john.doe@example.com'],
      [],
      ['Jane', 'Smith', 'jane.smith@example.com'],
    ]
    const expectedOutput = 'John;Doe;john.doe@example.com\n\nJane;Smith;jane.smith@example.com'

    const result = arrTableToCSV(input)

    expect(result).toEqual(expectedOutput)
  })

  it('should convert a 2D array to a CSV string with empty values', () => {
    const input = [
      ['John', '', 'john.doe@example.com'],
      ['Jane', 'Smith', ''],
    ]
    const expectedOutput = 'John;;john.doe@example.com\nJane;Smith;'

    const result = arrTableToCSV(input)

    expect(result).toEqual(expectedOutput)
  })

  it('should convert a 2D array to a CSV string with line breaks in values', () => {
    const input = [
      ['John', 'Doe', 'john.doe@example.com'],
      ['Jane', 'Smith', 'jane\nsmith@example.com'],
    ]
    const expectedOutput = 'John;Doe;john.doe@example.com\nJane;Smith;jane|smith@example.com'

    const result = arrTableToCSV(input)

    expect(result).toEqual(expectedOutput)
  })
})
