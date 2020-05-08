import DisposableManager from '../../src/lib/DisposableManager';
import setInterval from '../../lib/helpers/setInterval';

export default class CustomInstance {
  private disposableManager:DisposableManager = new DisposableManager();
  private element:HTMLElement;
  private timeoutCounter:number = 0;
  private timeoutText:HTMLElement;

  constructor(element:HTMLElement) {
    this.element = element;
    this.timeoutText = <HTMLElement>this.element.querySelector('.js-running-timeout');
  }

  /**
   * @public
   * @method startInterval
   */
  public startInterval():void
  {
    this.disposableManager.add(
      setInterval(() => {
        ++this.timeoutCounter;
        this.timeoutText.innerHTML = this.timeoutCounter.toString();
      }, 500),
    );
  }

  public destruct() {
    this.disposableManager.dispose();
  }
}
