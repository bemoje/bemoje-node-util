import { funParseClass } from './funParseClass'

describe(funParseClass.name, () => {
  describe('Empty class', () => {
    const parsed = funParseClass(class Person {})

    it('should parse class name', () => {
      expect(parsed.name).toBe('Person')
    })

    it('should return empty properties array', () => {
      expect(parsed.properties).toEqual([])
    })

    it('should return empty methods array', () => {
      expect(parsed.methods).toEqual([])
    })
  })

  describe('Class will all member types', () => {
    const parsed = funParseClass(
      class Person {
        _prop1: string
        _prop2: string
        constructor(arg1: string) {
          this._prop1 = ''
          this._prop2 = ''
        }
        get prop1(): string {
          return this._prop1
        }
        set prop1(value: string) {
          this._prop1 = value
        }
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        method0() {}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        method1(arg1: string) {}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        method2(arg1: string, arg2: string) {}
      },
    )

    it('should parse class name', () => {
      expect(parsed.name).toBe('Person')
    })

    it('should parse class properties', () => {
      expect(parsed.properties).toEqual(['_prop1', '_prop2'])
    })

    it('should parse correct number of methods', () => {
      expect(parsed.methods.length).toBe(6)
    })

    it('should parse constructor', () => {
      expect(parsed.methods.filter((o: any) => o.kind === 'constructor')).toEqual([
        { kind: 'constructor', name: 'constructor', params: ['arg1'] },
      ])
    })

    it('should parse property getters', () => {
      expect(parsed.methods.filter((o: any) => o.kind === 'get')).toEqual([
        { kind: 'get', name: 'prop1', params: [] },
      ])
    })

    it('should parse property setters', () => {
      expect(parsed.methods.filter((o: any) => o.kind === 'set')).toEqual([
        { kind: 'set', name: 'prop1', params: ['value'] },
      ])
    })

    it('should parse methodss', () => {
      expect(parsed.methods.filter((o: any) => o.kind === 'method')).toEqual([
        { kind: 'method', name: 'method0', params: [] },
        { kind: 'method', name: 'method1', params: ['arg1'] },
        { kind: 'method', name: 'method2', params: ['arg1', 'arg2'] },
      ])
    })
  })
})
