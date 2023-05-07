/* eslint-disable @typescript-eslint/no-explicit-any */
import * as util from '../src/libs/function'

describe('ExtensibleFunction', () => {
  it('example', () => {
    class MyFunction<T> extends util.ExtensibleFunction {
      constructor(f: (...args: any[]) => any) {
        let self: MyFunction<T> | undefined = undefined
        super(f.name, function anonymous(...args: any[]) {
          // do something with self
          return f.call(self, ...args)
        })
        self = this
      }
    }
    expect(
      new MyFunction(function f(): boolean {
        return true
      }) instanceof MyFunction,
    ).toBe(true)
  })
})

describe('funSetName', () => {
  it('should set the name of a function', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(util.funSetName('myFunc', function () {}).name).toBe('myFunc')
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(util.funSetName('myFunc', () => {}).name).toBe('myFunc')
  })
})
