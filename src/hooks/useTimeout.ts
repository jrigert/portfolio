import { useEffect, useRef } from 'react';

type Timer = ReturnType<typeof setTimeout>;

export const useTimeout = (handler: () => void, duration = 0) => {
  const timeoutHandlerRef = useRef<Timer | undefined>();

  const clear = () => {
    if (timeoutHandlerRef.current) {
      clearTimeout(timeoutHandlerRef.current);
    }
  };

  useEffect(() => {
    timeoutHandlerRef.current = setTimeout(handler, duration);

    return clear;
  }, []);

  return { clear };
};
