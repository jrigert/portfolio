'use client';

import { useHasLoaded } from '@/hooks/useHasLoaded';
import { classNames } from '@/utils/style';
import Image, { ImageProps } from 'next/image';
import { FunctionComponent } from 'react';

export interface ImageCircleProps
  extends Omit<ImageProps, 'fill' | 'className'> {}

export const ImageCircle: FunctionComponent<ImageCircleProps> = (props) => {
  const { alt, ...imageProps } = props;
  const { hasLoaded, onLoad } = useHasLoaded();
  const containerAnimationClass = hasLoaded ? 'opacity-100' : 'opacity-0';
  const imageAnimationClass = hasLoaded
    ? 'opacity-100 scale-100'
    : 'opacity-0 scale-90';

  return (
    <div
      className={classNames(
        'relative h-56 w-56 overflow-hidden rounded-full outline outline-4 outline-offset-8 outline-foreground/70 transition duration-[2s] ease-out',
        containerAnimationClass,
      )}
    >
      <div className="absolute h-full w-full rounded-xl bg-primary opacity-60" />

      <Image
        className={classNames(
          'mt-3 transition duration-500',
          imageAnimationClass,
        )}
        onLoad={onLoad}
        alt={alt}
        {...imageProps}
        fill={true}
      />
    </div>
  );
};
