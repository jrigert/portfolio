import { useEffect, useRef } from 'react';

type Timer = ReturnType<typeof setTimeout>;

export interface UseTimeoutOptions {
  /** flip to true to begin the timeout. defaults to true */
  begin?: boolean;
}

export const useTimeout = (
  handler: () => void,
  duration = 0,
  options: UseTimeoutOptions = {},
) => {
  const { begin = true } = options;
  const timeoutHandlerRef = useRef<Timer | null>(null);

  const clear = () => {
    if (timeoutHandlerRef.current) {
      clearTimeout(timeoutHandlerRef.current);
      timeoutHandlerRef.current = null;
    }
  };

  useEffect(() => {
    clear();

    if (begin) {
      timeoutHandlerRef.current = setTimeout(handler, duration);
    }

    return clear;
  }, [begin]);

  return { clear };
};
