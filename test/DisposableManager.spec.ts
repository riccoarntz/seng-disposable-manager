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
