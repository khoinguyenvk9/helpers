import { DependencyList, useMemo,CSSProperties } from 'react';
import debounce from './debounce';
import throttle from './throttle';

function useDebounce<Args extends unknown[]>(
  cb: (...args: Args) => void,
  delay: number,
  deps: DependencyList,
) {
  return useMemo(() => debounce(cb, delay), deps);
}

function useThrottle<Args extends unknown[]>(
  cb: (...args: Args) => void,
  cooldown: number,
  deps: DependencyList,
) {
  return useMemo(() => throttle(cb, cooldown), deps);
}
