'use client';

import { useCallback, useRef, useState } from 'react';

export interface UseOnEnterViewportProps {
  /** optional callback if the hasEntered state isn't enough */
  callback?: () => void;
  /**
   * set to false to allow event to fire on every entrance
   * defaults to true
   */
  singleUse?: boolean;
  intersectOptions?: IntersectionObserverInit;
}

export const useOnEnterViewport = (props: UseOnEnterViewportProps = {}) => {
  const {
    callback,
    singleUse = true,
    intersectOptions = { threshold: 1 },
  } = props;
  const hasRegisteredRef = useRef(false);
  const hasEnteredRef = useRef(false);
  const [hasEntered, setHasEntered] = useState(false);

  const updateHasEntered = (value: boolean) => {
    hasEnteredRef.current = value;
    setHasEntered(value);
  };

  const registerRef = useCallback(
    (element: HTMLElement | null) => {
      if (hasRegisteredRef.current || !element) {
        return;
      }
      const handleIntersect: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!singleUse || !hasEnteredRef.current) {
              updateHasEntered(true);

              if (callback) {
                callback();
              }
            }
          }
        });
      };

      const observer = new IntersectionObserver(
        handleIntersect,
        intersectOptions,
      );
      observer.observe(element);

      hasRegisteredRef.current = true;
    },
    [hasEntered],
  );

  return { hasEntered, registerRef };
};
