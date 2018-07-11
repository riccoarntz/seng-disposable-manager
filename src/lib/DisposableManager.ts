import DisposableTypes from './data/DisposableTypes';
import { IDisposable } from './interface/IDisposable';

/**
 * Utility class for handling various disposable things like timeouts, disposable instances.
 *
 * DisposableManager.register('interval', (interval) => {
 *  clearInterval(interval);
 * );
 *
 * @class DisposableManager
 * @constructor
 */
export default class DisposableManager {
  /**
   * @type {{}}
   */
  public static types: { [key: string]: Function } = {
    [DisposableTypes.DISPOSABLE]: (disposable: IDisposable) => {
      disposable.dispose();
    },
    [DisposableTypes.INTERVAL]: (interval: number) => {
      clearInterval(interval);
    },
  };
  /**
   * list of disposables, like Event handlers, used for destruction
   * @type {{}}
   */
  private disposables: { [key: string]: Array<IDisposable | any> } = {};

  /**
   * @method register
   * @param {string} type
   * @param {Function} dispose
   */
  public static register(type: string, dispose: Function): void {
    DisposableManager.types[type] = dispose;
  }

  /**
   *
   * @method add
   * @param disposable
   * @returns {any}
   */
  public add(disposable: any, type: string = DisposableTypes.DISPOSABLE): any {
    if (!DisposableManager.types[type]) {
      throw new Error(`Following type is not registered yet: [${type}]`);
    }

    if (!this.disposables) {
      this.disposables = {};
    }

    if (!this.disposables[type]) {
      this.disposables[type] = [];
    }

    this.disposables[type].push(disposable);

    return disposable;
  }

  /**
   * Adds an interval
   *
   * @method addInterval
   * @param interval {number} id of the interval
   * @returns {number} id of the interval
   */
  public addInterval(interval: number): number {
    return this.add(interval, DisposableTypes.INTERVAL);
  }

  /**
   * Disposes all registered objects
   *
   * @method dispose
   */
  public dispose(): void {
    Object.keys(this.disposables).forEach((type: string) => {
      this.disposables[type].forEach(disposable => {
        DisposableManager.types[type](disposable);
      });

      this.disposables[type].length = 0;
      this.disposables[type] = null;
    });

    this.disposables = null;
  }
}
