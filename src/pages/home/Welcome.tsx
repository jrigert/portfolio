'use client';

import { ContactIcons } from '@/components/ContactIcons';
import { Heading } from '@/components/core/Heading';
import { Underline } from '@/components/core/Underline';
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
    : 'opacity-0 -translate-y-4';

  const h2AnimationClass = animate
    ? 'opacity-100 translate-x-0'
    : 'opacity-0 translate-y-4';

  const underlineAnimationClass = animate
    ? 'opacity-100 scale-100'
    : 'opacity-0 scale-0';

  const iconsAnimationClass = animate
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-4';

  return (
    <PageSection
      className="mt-6 flex flex-shrink-0 flex-col items-center justify-center"
      id={id}
      fullHeight
    >
      <Heading
        tag="h1"
        className={classNames(
          headingSharedClasses,
          'relative mb-0',
          h1AnimationClass,
        )}
      >
        Jon Rigert
      </Heading>

      <p
        aria-label="Web Developer, Architect and Director"
        className={classNames(
          subHeadingClasses,
          'mt-8 flex items-center text-center',
          headingSharedClasses,
          h2AnimationClass,
        )}
      >
        Web Developer {Divider} Architect {Divider} Director
      </p>

      <Underline
        className={classNames(
          'mt-2 w-96 transition duration-[2s]',
          underlineAnimationClass,
        )}
      />
      <ContactIcons
        className={classNames(
          'mt-12 transition duration-[2s]',
          iconsAnimationClass,
        )}
      />
    </PageSection>
  );
};
