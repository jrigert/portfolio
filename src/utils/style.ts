import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { ClassValue, clsx } from 'clsx';

export const classNames = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

// --- Headings ---
export type HeadingVariantProps = VariantProps<typeof headingVariants>;

const headingVariants = cva(['font-bold font-heading'], {
  variants: {
    level: {
      h1: ['text-7xl', 'mb-6', 'text-primary'],
      h2: ['text-5xl', 'mb-4'],
      h3: ['text-3xl', 'mb-3'],
      h4: ['text-2xl', 'mb-2'],
      h5: ['text-xl', 'mb-2'],
      h6: ['text-lg', 'mb-2'],
    },
  },
  defaultVariants: {
    level: 'h1',
  },
});

export const getHeadingClasses = (props: HeadingVariantProps) =>
  headingVariants(props);
