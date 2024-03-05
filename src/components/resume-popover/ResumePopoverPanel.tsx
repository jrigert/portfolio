'use client';

import { ContactIcons } from '@/components/ContactIcons';
import { Heading } from '@/components/core/Heading';
import { Popover } from '@/components/core/Popover';
import { ResumePopoverTriggerButton } from '@/components/resume-popover/ResumePopoverTriggerButton';
import { ResumePanel } from '@/components/ResumePanel';
import type { FunctionComponent } from 'react';

export const ResumePopoverPanel: FunctionComponent = () => {
  return (
    <Popover
      trigger={<ResumePopoverTriggerButton />}
      anchor={<div className="fixed bottom-16 right-5 h-px w-12" />}
      containerClassName="px-4 sm:px-8"
    >
      <Heading tag="h2" tagStyle="h5" className="mb-6 text-center">
        Contact Me
      </Heading>
      <ContactIcons
        showGitHub={false}
        className="gap-6"
        color="primary"
        variant="iconButton"
      />

      <Heading tag="h2" tagStyle="h5" className="mb-6 mt-12 text-center">
        View Resume
      </Heading>
      <ResumePanel className="min-w-80 gap-6" />
    </Popover>
  );
};
