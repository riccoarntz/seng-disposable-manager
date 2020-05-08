import DisposableManager from '../../src/lib/DisposableManager';
import CustomInstance from './CustomInstance';

export default class App {
  private element:HTMLElement;
  private addButton:HTMLElement;
  private disposeButton:HTMLElement;
  private disposableManager:DisposableManager = new DisposableManager();
  private customInstance:CustomInstance;

  constructor(element: HTMLElement) {
    this.element = element;
    // for generic app logic

    this.addButton = <HTMLElement>this.element.querySelector('.js-button-add');
    this.disposeButton = <HTMLElement>this.element.querySelector('.js-button-dispose');
    this.customInstance = new CustomInstance(this.element);

    this.addEventListeners();
  }

  private addEventListeners() {
    this.addButton.addEventListener('click', this.handleAddButtonClick.bind(this));
    this.disposeButton.addEventListener('click', this.handleDisposeButtonClick.bind(this));
  }

  /**
   * @private
   * @method handleAddButtonClick
   */
  private handleAddButtonClick():void
  {
    this.addButton.style.display = 'none';
    this.customInstance.startInterval();
    this.disposableManager.add(this.customInstance.destruct.bind(this.customInstance));
  }

  /**
   * @private
   * @method
   */
  private handleDisposeButtonClick():void
  {
    this.addButton.style.display = 'inline-block';
    this.disposableManager.dispose();
  }
}
