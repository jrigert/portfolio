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
    : 'opacity-0 translate-x-20';

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button
          size="icon"
          color="primary"
          className={classNames(
            'duration-250 fixed bottom-5 right-5 h-12 w-12 rounded-full transition ease-out hover:scale-110',
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
          className="rounded-lg border-2 border-foreground/70 bg-background/70 px-12 pb-8 pt-5 text-foreground backdrop-blur"
          sideOffset={10}
          align="end"
        >
          <Popover.Close className="absolute right-2 top-1" aria-label="Close">
            <FontAwesomeIcon
              icon={faX}
              className="text-2xl transition-transform hover:scale-125"
            />
          </Popover.Close>

          <div className="pt-6">
            <p className="mb-2 text-center font-heading font-semibold">
              Contact Me
            </p>
            <ContactIcons showGitHub={false} className="gap-8" />
          </div>

          <ResumePanel className="mt-8" />
          <Popover.Arrow className="mt-px h-2 w-3 fill-foreground/70" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
