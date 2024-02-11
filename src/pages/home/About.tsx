'use client';

import { Heading } from '@/components/core/Heading';
import { ImageCircle } from '@/components/core/ImageCircle';
import { HomeSection } from '@/components/HomeSection';
import { useAnimate } from '@/hooks/useAnimate';
import { classNames } from '@/utils/style';
import type { FunctionComponent } from 'react';

export const HomeAbout: FunctionComponent = () => {
  const animate = useAnimate();
  const animationClass = animate
    ? 'transition-opacity opacity-100 duration-500 ease-in'
    : 'transition-opacity opacity-50';

  return (
    <HomeSection
      className={classNames(
        'mt-12 flex w-full flex-shrink-0 flex-col items-center justify-center',
        animationClass,
      )}
      id="about"
      offsetScroll={false}
    >
      <ImageCircle src="/images/me.jpeg" alt="A picture of me, Jon Rigert" />

      <Heading tag="h1" className="relative mt-4">
        Jon Rigert
      </Heading>

      <div className="text-center text-xl">
        <p>
          Hi, I&#39;m Jon! I am a web developer/architect, passionate about
          frontend development
        </p>
        <p className="font-source-code my-4 text-base font-extrabold">
          <span className="text-primary">
            Director, Web Application Development
          </span>{' '}
          at{' '}
          <a
            href="https://www.bounteous.com"
            className="text-primary underline"
          >
            Bounteous
          </a>
        </p>
      </div>
    </HomeSection>
  );
};
