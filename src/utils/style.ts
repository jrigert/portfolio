import { twMerge } from 'tailwind-merge';
import { ClassValue, clsx } from 'clsx';

export const classNames = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const ColorVariants = [
  'primary',
  'secondary',
  'loud',
  'white',
  'contrast',
];
