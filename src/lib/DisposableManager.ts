import { DisposeFunction } from './DisposeFunction';
import disposeAll from './disposeAll';

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
  private readonly disposables: Array<DisposeFunction> = [];

  /**
   * Add one or more dispose functions to the DisposableManager
   *
   * @method add
   * @param disposable
   * @returns void
   */
  public add(...disposables: ReadonlyArray<DisposeFunction>): void {
    this.disposables.push(...disposables);
  }

  /**
   * Disposes all registered objects
   *
   * @method dispose
   */
  public dispose(): void {
    disposeAll(this.disposables);
  }
}
