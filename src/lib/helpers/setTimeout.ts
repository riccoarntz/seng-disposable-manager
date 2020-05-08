/**
 * Wrapper function around the window.setTimeout that returns a function to dispose the setTimeout.
 * This function can be used in combination with the DisposableManager
 *
 * @param handler
 * @param timeout
 * @param args
 */
function setTimeout(handler: TimerHandler, timeout?: number, ...args: any[]) {
  const t = window.setTimeout(handler, timeout, ...args);
  return () => window.clearTimeout(t);
}

export default setTimeout;
