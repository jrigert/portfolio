'use client';

import { ContactIcons } from '@/components/ContactIcons';
import { Popover } from '@/components/core/Popover';
import { ResumePopoverTriggerButton } from '@/components/resume-popover/ResumePopoverTriggerButton';
import { ResumePanel } from '@/components/ResumePanel';
import type { FunctionComponent } from 'react';

export const ResumePopoverPanel: FunctionComponent = () => {
  return (
    <Popover
      trigger={<ResumePopoverTriggerButton />}
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
