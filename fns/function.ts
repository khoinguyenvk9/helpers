export function debounce<Args extends any[]>(
  fn: (...args: Args) => void,
  delay: number,
) {
  let timeoutID: ReturnType<typeof setTimeout> | undefined;
  let lastArgs: Args | undefined;

  const run = () => {
    if (lastArgs) {
      fn(...lastArgs);
      lastArgs = undefined;
    }
  };

  const debounced = (...args: Args) => {
    clearTimeout(timeoutID);
    lastArgs = args;
    timeoutID = window.setTimeout(run, delay);
  };

  debounced.flush = () => {
    clearTimeout(timeoutID);
    run();
  };

  return debounced;
}

let localStorageSize = function () {
  let _lsTotal = 0,
    _xLen: any,
    _x: any;
  for (_x in localStorage) {
    if (!localStorage.hasOwnProperty(_x)) continue;
    _xLen = (localStorage[_x].length + _x.length) * 2;
    _lsTotal += _xLen;
  }
  return (_lsTotal / 1024).toFixed(2);
};
// console.log(`size: ${localStorageSize()}kb`);
