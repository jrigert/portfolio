'use client';

import { Heading } from '@/components/core/Heading';
import { HorizontalDivider } from '@/components/core/HorizontalDivider';
import { ImageCircle } from '@/components/core/ImageCircle';
import { VerticalDivider } from '@/components/core/VerticalDivider';
import { PageSection } from '@/components/PageSection';
import { useAnimate } from '@/hooks/animation/useAnimate';
import { HomePageSectionProps } from '@/pages/home/index';
import { classNames, getHeadingClasses } from '@/utils/style';
import type { FunctionComponent } from 'react';

const headingSharedClasses = 'transition duration-[1500ms] ease-out';
const subHeadingClasses = getHeadingClasses({ level: 'h3' });

export const HomeWelcome: FunctionComponent<HomePageSectionProps> = (props) => {
  const { id } = props;
  const animate = useAnimate();
  const Divider = <VerticalDivider className="mt-1 h-6 border-r-primary" />;

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
      fullHeight
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

      <HorizontalDivider
        color="foreground"
        className={classNames(
          'mb-6 mt-8 transition duration-1000',
          dividerAnimationClass,
        )}
      />

      <p
        aria-label="Web Developer, Architect and Director"
        className={classNames(
          subHeadingClasses,
          'flex items-center text-center',
          headingSharedClasses,
          h2AnimationClass,
        )}
      >
        Web Developer {Divider} Architect {Divider} Director
      </p>
    </PageSection>
  );
};
