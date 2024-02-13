import {
  ScrollContext,
  ScrollContextValue,
} from '@/components/providers/ScrollProvider';
import { useContext } from 'react';

export const useScrollContext = (): ScrollContextValue => {
  const context = useContext(ScrollContext);

  if (!context) {
    throw new Error('No ScrollContext found, make sure to add it to the page.');
  }

  return context;
};
