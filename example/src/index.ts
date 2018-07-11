import App from './App';
import DisposableManager from '../../src/lib/DisposableManager';

DisposableManager.register('customType', (object) => {
  object.destruct();
});

document.addEventListener('DOMContentLoaded', () => {

  new App(document.body.querySelector('[data-app]'));
});
