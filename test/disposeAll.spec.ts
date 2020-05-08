import { expect, use } from 'chai';
import {spy} from 'sinon';
import sinonChai from 'sinon-chai';
import { DisposeFunction,setTimeout, setInterval, disposeAll } from '../src';
use(sinonChai);

describe('disposeAll', () => {
  it('should dispose the array', () => {

    const disposables: Array<DisposeFunction> = [];

    const disposable = spy();

    disposables.push(disposable);
    disposables.push(setTimeout(() => console.log('timeout'), 100));
    disposables.push(setInterval(() => console.log('interval'), 100));

    disposeAll(disposables);

    expect(disposable).calledOnce;
  });
});
