import { useCallback, useState } from 'react';

export interface UseHasLoadedResult {
  hasLoaded: boolean;
  onLoad: () => void;
}

export const useHasLoaded = (): UseHasLoadedResult => {
  const [hasLoaded, setHasLoaded] = useState(false);

  const onLoad = useCallback(() => {
    setHasLoaded(true);
  }, []);

  return {
    hasLoaded,
    onLoad,
  };
};
