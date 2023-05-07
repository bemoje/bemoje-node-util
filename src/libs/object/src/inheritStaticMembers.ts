import type { Constructor } from '../../interfaces'

/**
 * Copy static members from source to target.
 */
export function inheritStaticMembers(
  target: Constructor,
  source: Constructor,
  ignoreKeys = [],
): Constructor {
  const ignore = new Set([
    ...Reflect.ownKeys(target),
    ...ignoreKeys,
    'prototype',
    'name',
    'constructor',
  ])
  for (const key of Reflect.ownKeys(source)) {
    if (ignore.has(key)) continue
    const des = Object.getOwnPropertyDescriptor(source, key)
    if (!des) continue
    Object.defineProperty(target, key, des)
  }
  return target
}
