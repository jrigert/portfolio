'use client';

import { useHasLoaded } from '@/hooks/useHasLoaded';
import { classNames } from '@/utils/style';
import Image, { ImageProps } from 'next/image';
import { FunctionComponent } from 'react';
import styles from './ImageCircle.module.css';

export interface ImageCircleProps
  extends Omit<ImageProps, 'fill' | 'className'> {}

export const ImageCircle: FunctionComponent<ImageCircleProps> = (props) => {
  const { hasLoaded, onLoad } = useHasLoaded();
  const animationClass = hasLoaded ? styles['animate'] : undefined;
  const containerClass = hasLoaded ? 'opacity-100' : 'opacity-0';

  return (
    <div
      className={classNames(
        'relative h-52 w-52 overflow-clip opacity-0',
        containerClass,
      )}
    >
      <div className="absolute h-full w-full p-4">
        <div className="h-full w-full rounded-xl bg-primary opacity-15" />
      </div>

      <Image
        className={classNames(styles['image-circle'], animationClass)}
        onLoad={onLoad}
        {...props}
        fill={true}
      />
    </div>
  );
};
