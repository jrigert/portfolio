import { useRegisterRef } from '@/hooks/useRegisterRef';
import { useEffect } from 'react';

export const useOnClickOutside = (callback: () => void) => {
  const { elementRef, registerRef } = useRegisterRef();

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
