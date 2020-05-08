import { DisposeFunction } from './DisposeFunction';

/**
 * Calls all dispose functions in the disposables list in the opposite order and empties the list.
 * @param disposables
 */
function disposeAll(disposables: Array<DisposeFunction>) {
  while (disposables.length) disposables.pop()();
}

export default disposeAll;
