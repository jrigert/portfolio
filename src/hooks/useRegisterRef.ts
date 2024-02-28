import { MutableRefObject, useCallback, useRef } from 'react';

export type RegisterRefFunction = (element: HTMLElement | null) => void;

export interface UseRegisterRefResult {
  elementRef: MutableRefObject<HTMLElement | null | undefined>;
  registerRef: RegisterRefFunction;
}

export const useRegisterRef = (
  onRegister?: (element: HTMLElement | null) => void,
): UseRegisterRefResult => {
  const elementRef = useRef<HTMLElement | null>();

  const registerRef = useCallback((element: HTMLElement | null) => {
    elementRef.current = element;

    if (onRegister) {
      onRegister(element);
    }
  }, []);

  return {
    elementRef,
    registerRef,
  };
};
