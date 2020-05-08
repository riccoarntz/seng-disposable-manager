import { expect, use } from 'chai';
import {spy} from 'sinon';
import sinonChai from 'sinon-chai';
import { DisposableManager, setTimeout, setInterval } from '../src';
use(sinonChai);

describe('DisposableManager', () => {
  it('should dispose all', () => {

    const disposableManager = new DisposableManager();

    const disposable = spy();

    disposableManager.add(disposable);
    disposableManager.add(setTimeout(() => console.log('timeout'), 100));
    disposableManager.add(setInterval(() => console.log('interval'), 100));

    disposableManager.dispose();

    expect(disposable).calledOnce;
  });
});

describe('DisposableManager', () => {
  it('Add multiple at once', () => {

    const disposableManager = new DisposableManager();

    const disposable1 = spy();
    const disposable2 = spy();

    disposableManager.add(disposable1, disposable2);

    disposableManager.dispose();

    expect(disposable1).calledOnce;
    expect(disposable2).calledOnce;
  });
});
