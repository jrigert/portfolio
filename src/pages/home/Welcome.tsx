'use client';

import { Heading } from '@/components/core/Heading';
import { ImageCircle } from '@/components/core/ImageCircle';
import { PageSection } from '@/components/PageSection';
import { useAnimate } from '@/hooks/useAnimate';
import { HomePageSectionProps } from '@/pages/home/index';
import { classNames, getHeadingClasses } from '@/utils/style';
import type { FunctionComponent } from 'react';

const headingSharedClasses = 'transition duration-[1500ms] ease-out';
const h2Classes = getHeadingClasses({ level: 'h2' });

export const HomeWelcome: FunctionComponent<HomePageSectionProps> = (props) => {
  const { id } = props;
  const animate = useAnimate();

  const h1AnimationClass = animate
    ? 'opacity-100 translate-x-0'
    : 'opacity-0 -translate-x-16';

  const h2AnimationClass = animate
    ? 'opacity-100 translate-x-0'
    : 'opacity-0 translate-x-16';

  const dividerAnimationClass = animate
    ? 'opacity-100 scale-y-100'
    : 'opacity-0 scale-y-0';

  return (
    <PageSection
      className="mt-12 flex flex-shrink-0 flex-col items-center justify-center"
      id={id}
    >
      <ImageCircle src="/images/me.png" alt="A picture of me, Jon Rigert" />

      <Heading
        tag="h1"
        className={classNames(
          headingSharedClasses,
          'relative mb-0 mt-10',
          h1AnimationClass,
        )}
      >
        Jon Rigert
      </Heading>

      <hr
        className={classNames(
          'border-y-foreground/30 mb-6 mt-7 h-1.5 w-48 border-x-0 border-y transition duration-1000',
          dividerAnimationClass,
        )}
      />

      <p
        className={classNames(
          h2Classes,
          headingSharedClasses,
          h2AnimationClass,
        )}
      >
        Web Developer / Architect
      </p>
    </PageSection>
  );
};
