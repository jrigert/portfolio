'use client';

import { useAnimate } from '@/hooks/useAnimate';
import { classNames } from '@/utils/style';
import Image, { ImageProps } from 'next/image';
import { FunctionComponent, useEffect, useState } from 'react';
import styles from './ImageCircle.module.css';

export interface ImageCircleProps extends Omit<ImageProps, 'fill'> {}

export const ImageCircle: FunctionComponent<ImageCircleProps> = (props) => {
  const animate = useAnimate({ delay: 500 });
  const animationClass = animate ? styles['animate'] : undefined;

  return (
    <div className="relative h-64 w-64 overflow-clip">
      <Image
        className={classNames(styles['image-circle'], animationClass)}
        {...props}
        fill={true}
      />
    </div>
  );
};
