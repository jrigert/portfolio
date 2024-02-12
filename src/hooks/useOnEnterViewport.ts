'use client';

import { useCallback, useRef, useState } from 'react';

export interface UseOnEnterViewportProps {
  /** optional callback if the hasEntered state isn't enough */
  callback?: () => void;
  intersectOptions?: IntersectionObserverInit;
}

export const useOnEnterViewport = (props: UseOnEnterViewportProps = {}) => {
  const { callback, intersectOptions = { threshold: 1 } } = props;
  const hasRegisteredRef = useRef(false);
  const [hasEntered, setHasEntered] = useState(false);

  const registerRef = useCallback((element: HTMLElement | null) => {
    if (hasRegisteredRef.current || !element) {
      return;
    }
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHasEntered(true);

          if (callback) {
            callback();
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
  }, []);

  return { hasEntered, registerRef };
};
