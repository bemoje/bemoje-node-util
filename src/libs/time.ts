/**
 * For recording time passed since constructor was invoked and until the stop() method i called.
 */
export class Timer {
  /**
   * The initial time
   */
  public t0: number;

  constructor() {
    this.t0 = Date.now();
  }

  /**
   * Returns the time passed since constructor was invoked in milliseconds.
   */
  public stop(): number {
    return Date.now() - this.t0;
  }
}
