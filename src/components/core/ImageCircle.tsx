'use client';

import { useHasLoaded } from '@/hooks/useHasLoaded';
import { useOnEnterViewport } from '@/hooks/useOnEnterViewport';
import { classNames } from '@/utils/style';
import Image, { ImageProps } from 'next/image';
import { FunctionComponent } from 'react';

export interface ImageCircleProps
  extends Omit<ImageProps, 'fill' | 'className'> {}

export const ImageCircle: FunctionComponent<ImageCircleProps> = (props) => {
  const { alt, ...imageProps } = props;
  const { hasLoaded, onLoad } = useHasLoaded();
  const { hasEntered, registerRef } = useOnEnterViewport({
    intersectOptions: { threshold: 0.8 },
  });

  const animateIn = hasEntered && hasLoaded;
  const containerAnimationClass = animateIn ? 'opacity-100' : 'opacity-0';
  const imageAnimationClass = animateIn
    ? 'opacity-100 scale-100'
    : 'opacity-0 scale-90';

  return (
    <div
      className={classNames(
        'relative h-56 w-56 overflow-hidden rounded-full outline outline-4 outline-offset-8 outline-foreground/70 transition duration-2000 ease-out motion-reduce:transition-opacity',
        containerAnimationClass,
      )}
      ref={registerRef}
    >
      <div className="absolute h-full w-full rounded-xl bg-primary opacity-60" />

      <Image
        className={classNames(
          'mt-3 transition duration-500 motion-reduce:transition-opacity',
          imageAnimationClass,
        )}
        onLoad={onLoad}
        alt={alt}
        {...imageProps}
        fill={true}
        sizes="224px"
      />
    </div>
  );
};
