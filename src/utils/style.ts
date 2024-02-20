import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { ClassValue, clsx } from 'clsx';

export const classNames = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

// --- Headings ---
export type HeadingVariantProps = VariantProps<typeof headingVariants>;

const headingVariants = cva(['font-bold font-heading'], {
  variants: {
    level: {
      h1: ['text-5xl', 'mb-6', 'text-primary', 'sm:text-7xl'],
      h2: ['text-4xl', 'mb-4', 'sm:text-5xl'],
      h3: ['text-2xl', 'mb-3', 'sm:text-3xl'],
      h4: ['text-xl', 'mb-2', 'sm:text-2xl'],
      h5: ['text-lg', 'mb-2', 'sm:text-xl'],
      h6: ['sm:text-lg', 'mb-2'],
    },
  },
  defaultVariants: {
    level: 'h1',
  },
});

export const getHeadingClasses = (props: HeadingVariantProps) =>
  headingVariants(props);
