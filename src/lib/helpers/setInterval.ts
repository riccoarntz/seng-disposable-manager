/**
 * Wrapper function around the window.setInterval that returns a function to dispose the setInterval.
 * This function can be used in combination with the DisposableManager
 *
 * @param handler
 * @param timeout
 * @param args
 */
function setInterval(handler: TimerHandler, timeout?: number, ...args: any[]) {
  const i = window.setInterval(handler, timeout, ...args);
  return () => window.clearInterval(i);
}

export default setInterval;
