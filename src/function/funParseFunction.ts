import { parseScript } from 'esprima'
import { ITsParseFunctionResult } from './types/ITsParseFunctionResult'

export function funParseFunction(func: (...args: any[]) => any): ITsParseFunctionResult {
  const root = parseScript(func.toString(), {
    tolerant: true,
  }).body?.[0]
  let name = ''
  let params: string[] = []
  if (root?.type === 'FunctionDeclaration') {
    name = root?.id?.name || ''
    params = root?.params?.map((param: any) => param?.name) || []
  } else if (
    root?.type === 'ExpressionStatement' &&
    root?.expression.type === 'ArrowFunctionExpression'
  ) {
    params = root?.expression?.params?.map((param: any) => param?.name) || []
  }
  return { name, params }
}
