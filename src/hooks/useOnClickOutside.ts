import { useCallback, useEffect, useRef } from 'react';

export const useOnClickOutside = (callback: () => void) => {
  const elementRef = useRef<HTMLElement | null>();

  const registerRef = useCallback((element: HTMLElement | null) => {
    elementRef.current = element;
  }, []);

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (!elementRef.current?.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return {
    registerRef,
  };
};
