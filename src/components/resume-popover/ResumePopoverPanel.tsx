'use client';

import { ContactIcons } from '@/components/ContactIcons';
import { Button } from '@/components/core/Button';
import { ResumePanel } from '@/components/ResumePanel';
import { useAnimate } from '@/hooks/animation/useAnimate';
import { classNames } from '@/utils/style';
import { faIdCard, faXmark as faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FunctionComponent } from 'react';
import * as Popover from '@radix-ui/react-popover';

export const ResumePopoverPanel: FunctionComponent = () => {
  const animate = useAnimate({ delay: 1200 });
  const animationClass = animate
    ? 'opacity-100 translate-x-0'
    : 'motion-safe:opacity-0 motion-safe:translate-x-20';

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button
          size="icon"
          color="loud"
          className={classNames(
            'fixed bottom-5 right-5 h-12 w-12 rounded-full transition duration-500 ease-out motion-safe:hover:scale-110 motion-reduce:transition-none',
            animationClass,
          )}
        >
          <FontAwesomeIcon icon={faIdCard} className="mt-1 text-2xl" />
        </Button>
      </Popover.Trigger>
      <Popover.Anchor asChild>
        <div className="fixed bottom-16 right-5 h-px w-12"></div>
      </Popover.Anchor>
      <Popover.Portal>
        <Popover.Content
          className="border border-foreground-secondary bg-background-secondary px-12 pb-12 pt-5 text-foreground-secondary backdrop-blur"
          sideOffset={10}
          align="end"
        >
          <Popover.Close className="absolute right-2 top-1" aria-label="Close">
            <FontAwesomeIcon
              icon={faX}
              className="text-3xl transition-transform motion-safe:hover:scale-125 motion-reduce:transition-none"
            />
          </Popover.Close>

          <div className="pt-6">
            <p className="mb-2 text-center font-heading font-semibold">
              Contact Me
            </p>
            <ContactIcons
              showGitHub={false}
              className="gap-8"
              iconClassName="text-6xl"
            />
          </div>

          <ResumePanel className="mt-8" iconClassName="text-6xl" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
