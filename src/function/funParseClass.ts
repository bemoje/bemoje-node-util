import { parseScript } from 'esprima'
import { Constructor } from '../types/Constructor'
import { ITsParseClassResult } from './types/ITsParseClassResult'

export function funParseClass(ctor: Constructor): ITsParseClassResult {
  const node = parseScript(ctor.toString(), {
    tolerant: true,
  }).body?.[0]
  const name = Reflect.get(node, 'id')?.name
  if (node.type !== 'ClassDeclaration') throw new Error('Expected Class source code.')
  if (!node.body.body) throw new Error('Expected Class body.')
  const properties: string[] = []
  const methods = node.body?.body
    .filter((node: any) => {
      return node.type === 'MethodDefinition'
    })
    .map((node: any) => {
      const kind = node.kind
      if (kind === 'constructor') {
        node.value?.body?.body?.forEach((block: any) => {
          if (block.type !== 'ExpressionStatement') return
          if (block.expression.type !== 'AssignmentExpression') return
          if (block.expression.left.type !== 'MemberExpression') return
          if (block.expression.left.object.type !== 'ThisExpression') return
          properties.push(block.expression.left.property.name)
        })
      }
      const name = node?.key?.name
      const params = node?.value?.params?.map((param: any) => param?.name) || []
      return { kind, name, params }
    })
  return { name, properties, methods }
}
