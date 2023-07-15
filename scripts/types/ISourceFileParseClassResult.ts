import type { ITsParseClassResult } from '../../src/function/types/ITsParseClassResult'

export interface ISourceFileParseClassResult extends ITsParseClassResult {
  public: string[]
  protected: string[]
  private: string[]
}
