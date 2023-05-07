import type { Obj } from '../../interfaces'
export const interfaceDefinitions = new Map<string, [string[], string[]]>()

/**
 * Guarantees that class instances are serializable and have a static revive function.
 */
export interface IRevivable<SerializedForm> {
  toJSON: () => SerializedForm
}
interfaceDefinitions.set('IRevivable', [['toJSON'], ['fromJSON']])

/**
 * Guarantees that options are handled in a consistent way.
 */
export interface IHandledOptions {
  options: Obj
  defaultOptions: Obj
  handleOptions(options?: Obj): void
}
interfaceDefinitions.set('IOptions', [
  ['options', 'defaultOptions', 'handleOptions'],
  ['defaultOptions'],
])
