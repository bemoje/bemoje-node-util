export function tsHasDefaultExport(code: string): boolean {
  return /^export default /m.test(code)
}
