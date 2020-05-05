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
  private readonly disposables: Array<(() => void)> = [];

  /**
   *
   * @method add
   * @param disposable
   * @returns void
   */
  public add(disposable: () => void): void {
    this.disposables.push(disposable);
  }

  /**
   * Disposes all registered objects
   *
   * @method dispose
   */
  public dispose(): void {
    while (this.disposables.length) this.disposables.pop()();
  }
}
