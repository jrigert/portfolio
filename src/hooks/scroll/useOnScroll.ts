import { useEffect } from 'react';

export interface UseOnScrollOptions {
  fireImmediately?: boolean;
}

export const useOnScroll = (
  callback: () => void,
  options: UseOnScrollOptions = {},
) => {
  const { fireImmediately = true } = options;

  useEffect(() => {
    const onScroll = () => {
      callback();
    };

    if (fireImmediately) {
      callback();
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
};
