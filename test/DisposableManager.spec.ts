import { expect, use } from 'chai';
import {spy} from 'sinon';
import sinonChai from 'sinon-chai';
import { DisposableManager } from '../src';
use(sinonChai);

describe('DisposableManager', () => {
  it('should dispose all', () => {

    const disposableManager = new DisposableManager();

    const disposable = spy();

    disposableManager.add(disposable);
    disposableManager.addInterval(window.setTimeout(() => console.log('test'), 10));

    disposableManager.dispose();

    expect(disposable).calledOnce;
  });
});
