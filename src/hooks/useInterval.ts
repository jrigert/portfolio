import { useEffect, useRef } from 'react';

type Interval = ReturnType<typeof setInterval>;

export interface UseIntervalOptions {
  duration: number;
  /** defaults to true - set to false to disable interval */
  active?: boolean;
}

export const useInterval = (
  handler: () => void,
  options: UseIntervalOptions,
) => {
  const { active = true, duration } = options;
  const intervalHandlerRef = useRef<Interval | undefined>();

  const clear = () => {
    if (intervalHandlerRef.current) {
      clearInterval(intervalHandlerRef.current);
    }
  };

  useEffect(() => {
    if (!active) {
      return;
    }

    intervalHandlerRef.current = setInterval(handler, duration);

    return clear;
  }, [active, duration]);

  return { clear };
};
