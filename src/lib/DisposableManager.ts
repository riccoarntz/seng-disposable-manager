/**
 * Utility class for handling various disposable things like timeouts, disposable functions.
 *
 * @class DisposableManager
 * @constructor
 */
export default class DisposableManager {
  /**
   * list of disposables, like Event handlers, used for destruction
   * @type {{}}
   */
  private readonly disposables: Array<(() => void) | number> = [];

  /**
   *
   * @method add
   * @param disposable
   * @returns {any}
   */
  public add(disposable: () => void): void {
    this.disposables.push(disposable);
  }

  /**
   * Adds an interval
   *
   * @method addInterval
   * @param interval {number} id of the interval
   * @returns {number} id of the interval
   */
  public addInterval(interval: number): void {
    this.disposables.push(interval);
  }

  /**
   * Disposes all registered objects
   *
   * @method dispose
   */
  public dispose(): void {
    while (this.disposables.length) {
      const disposable = this.disposables.pop();
      if (typeof disposable === 'number') {
        clearInterval(disposable as number);
      } else {
        (disposable as () => void)();
      }
    }
  }
}
