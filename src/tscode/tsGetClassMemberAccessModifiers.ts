import { rexec } from '../regex/rexec'

/**
 * Returns a map of the private and protected class properties and methods of the provided TypeScript code for a class.
 */
export function tsGetClassMemberAccessModifiers(
  code: string,
): Record<string, 'protected' | 'private'> {
  const regex =
    /^\s*(?<privacy>protected|private) ((static|abstract|optional|readonly|get|set|async) )*(?<name>\w+)/gm
  const result: Record<string, 'protected' | 'private'> = {}
  for (const { groups } of rexec(regex, code)) {
    result[groups.name] = groups.privacy as 'protected' | 'private'
  }
  return result
}
