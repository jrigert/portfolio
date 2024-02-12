import { useTimeout } from '@/hooks/useTimeout';
import { useState } from 'react';

export interface UseAnimationClassProps {
  delay?: number;
}

export const useAnimate = (options: UseAnimationClassProps = {}) => {
  const [animate, setAnimate] = useState(false);
  const { delay = 0 } = options;

  useTimeout(() => {
    setAnimate(true);
  }, delay);

  return animate;
};
