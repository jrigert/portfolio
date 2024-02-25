'use client';

import { ContactIcons } from '@/components/ContactIcons';
import { Button } from '@/components/core/Button';
import { Popover } from '@/components/core/Popover';
import { ResumePanel } from '@/components/ResumePanel';
import { useAnimate } from '@/hooks/animation/useAnimate';
import { classNames } from '@/utils/style';
import { faIdCard, faXmark as faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FunctionComponent } from 'react';

export const ResumePopoverPanel: FunctionComponent = () => {
  const animate = useAnimate({ delay: 1200 });
  const animationClass = animate
    ? 'opacity-100 translate-x-0'
    : 'motion-safe:opacity-0 motion-safe:translate-x-20';

  const Trigger = (
    <Button
      aria-label="Opens a panel with links to my contact information and resume"
      size="icon"
      color="loud"
      className={classNames(
        'fixed bottom-5 right-5 h-12 w-12 rounded-full transition duration-500 ease-out motion-safe:hover:scale-110 motion-reduce:transition-none',
        animationClass,
      )}
    >
      <FontAwesomeIcon icon={faIdCard} className="mt-1 text-2xl" />
    </Button>
  );

  return (
    <Popover
      trigger={Trigger}
      anchor={<div className="fixed bottom-16 right-5 h-px w-12" />}
    >
      <p className="mb-2 text-center font-heading font-semibold">Contact Me</p>
      <ContactIcons
        showGitHub={false}
        className="gap-8"
        iconClassName="text-6xl"
      />
      <ResumePanel className="mt-8" iconClassName="text-6xl" />
    </Popover>
  );
};
