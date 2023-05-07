import { strRemoveDuplicateChars } from '../../string/src/strRemoveDuplicateChars'
import { compareArray } from '../../sort/src/compareArray'
import { setNonEnumerable } from '../../object/src/setNonEnumerable'
import { funSetName } from '../../function/src/funSetName'
import { regexEscapeString } from './regexEscapeString'
import { rexec, RexecYield } from './rexec'

export interface IScopeNode {
  type: string
  parent: IScopeNode | null
  depth: number
  left: RexecYield
  right: RexecYield
  between: RexecYield
  children: IScopeNode[]
}

function parseParam(param: string | RegExp): [RegExp, RegExp] {
  const isString = typeof param === 'string'
  const reg = isString
    ? new RegExp(regexEscapeString(param), 'g')
    : new RegExp(param.source, strRemoveDuplicateChars(param.flags + 'g'))
  const regValidate = new RegExp('^' + reg.source + '$', '')
  return [reg, regValidate]
}

/**
 * Builds a regex that matches a string between two strings. Supports regex instead of string.
 * @param type - type of scope being matched
 * @param left - string or regex to match before
 * @param right - string or regex to match after
 * @param flags - regex flags - 'g' and 's' are always added to whatever flags are passed.
 * @example
 * ```ts
 * const regex = buildRegexBetween(/a/, /b/)
 * 'abc'.match(regex)?.groups?.mid // 'c'
 * ```
 */
export function regexScopeTree(
  type: string,
  left: string | RegExp,
  right: string | RegExp,
): (string: string, yieldOnlyRootNodes?: boolean) => Generator<IScopeNode> {
  const [regLeft, regLeftValidate] = parseParam(left)
  const [regRight, regRightValidate] = parseParam(right)
  return funSetName(
    type,
    function* (string: string, yieldOnlyRootNodes = false): Generator<IScopeNode> {
      const matches = [...rexec(regLeft, string)].concat([...rexec(regRight, string)])
      matches.sort(compareArray((a, b) => a.index - b.index))
      const nodes: IScopeNode[] = []
      const stack: RexecYield[] = []
      for (const match of matches) {
        if (regLeftValidate.test(match.match)) {
          stack.push(match)
        } else if (regRightValidate.test(match.match)) {
          const left = stack.pop()
          if (!left) continue
          const right = match
          const depth = stack.length
          const node: IScopeNode = {
            type,
            parent: null,
            depth,
            left,
            right,
            between: {
              index: left.lastIndex,
              lastIndex: right.index,
              groups: {},
              match: string.substring(left.lastIndex, right.index),
            },
            children: [],
          }
          setNonEnumerable(node, 'parent')
          for (let i = nodes.length - 1; i >= 0; i--) {
            if (left.index >= nodes[i].left.index || right.lastIndex <= nodes[i].right.lastIndex)
              break
            node.children.push(nodes[i])
            if (nodes[i].parent !== null) continue
            nodes[i].parent = node
          }
          nodes.push(node)
          if (yieldOnlyRootNodes && depth > 0) continue
          yield node
        } else {
          throw new Error(
            'Match does not recognize itself as neither left nor right, which should be impossible.',
          )
        }
      }
    },
  )
}

// const parenthesesTree = regexScopeTree('Parentheses', '(', ')')
// const string = '(1+((3)+(1)))+(15+(21-(521))))'
// console.dir([...parenthesesTree(string, true)], { depth: null })
