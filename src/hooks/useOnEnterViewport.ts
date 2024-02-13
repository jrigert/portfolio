'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

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
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<HTMLElement | null>();
  const hasEnteredRef = useRef(false);
  const [hasEntered, setHasEntered] = useState(false);

  const updateHasEntered = (value: boolean) => {
    hasEnteredRef.current = value;
    setHasEntered(value);
  };

  const destroyObserver = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
  }, []);

  const initializeObserver = useCallback(() => {
    const element = elementRef.current;
    if (!element) {
      return;
    }

    destroyObserver();

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
    observerRef.current = observer;
    observer.observe(element);
  }, []);

  const registerRef = useCallback((element: HTMLElement | null) => {
    elementRef.current = element;
    initializeObserver();
  }, []);

  useEffect(() => {
    initializeObserver();

    return destroyObserver;
  }, []);

  return { hasEntered, registerRef };
};
