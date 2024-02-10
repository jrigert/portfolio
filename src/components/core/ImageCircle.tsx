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

  return (
    <div className="relative h-64 w-64 overflow-clip">
      <Image
        className={classNames(styles['image-circle'], animationClass)}
        onLoad={onLoad}
        {...props}
        fill={true}
      />
    </div>
  );
};
