export type WalkImportsResult = Map<
  string,
  {
    depth: number
    match: string
    source?: string
    error?: unknown
  }
>
