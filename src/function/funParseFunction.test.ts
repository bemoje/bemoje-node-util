import { funParseFunction } from './funParseFunction'

describe(funParseFunction.name, () => {
  it('should parse function with no arguments.', () => {
    function func() {
      return
    }
    expect(funParseFunction(func)).toEqual({ name: 'func', params: [] })
  })

  it('should parse function with one argument.', () => {
    function func(arg1: string) {
      return
    }
    expect(funParseFunction(func)).toEqual({ name: 'func', params: ['arg1'] })
  })

  it('should parse function with multiple arguments.', () => {
    function func(arg1: string, arg2: string) {
      return
    }
    expect(funParseFunction(func)).toEqual({ name: 'func', params: ['arg1', 'arg2'] })
  })

  it('should parse anonymous arrow function.', () => {
    const func = (arg1: string) => {
      return
    }
    expect(funParseFunction(func)).toEqual({ name: '', params: ['arg1'] })
  })
})
