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
  options: Record<string, any>
  defaultOptions: Record<string, any>
  handleOptions(options?: Record<string, any>): void
}
interfaceDefinitions.set('IOptions', [['options', 'defaultOptions', 'handleOptions'], ['defaultOptions']])
