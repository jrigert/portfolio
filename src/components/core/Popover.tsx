import { classNames } from '@/utils/style';
import { faXmark as faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FunctionComponent, PropsWithChildren, ReactNode } from 'react';
import * as RadixPopover from '@radix-ui/react-popover';

export interface PopoverProps {
  anchor?: ReactNode;
  containerClassName?: string;
  trigger: ReactNode;
  /** sets the asChild property on the Trigger - defaults to true */
  triggerAsChild?: boolean;
}

export const Popover: FunctionComponent<PropsWithChildren<PopoverProps>> = (
  props,
) => {
  const {
    children,
    anchor,
    containerClassName,
    trigger,
    triggerAsChild = true,
  } = props;

  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild={triggerAsChild}>
        {trigger}
      </RadixPopover.Trigger>
      {anchor ? (
        <RadixPopover.Anchor asChild>{anchor}</RadixPopover.Anchor>
      ) : null}

      <RadixPopover.Portal>
        <RadixPopover.Content
          className={classNames(
            'rounded-xl border border-foreground-secondary bg-background-secondary px-8 pb-12 pt-5 text-foreground-secondary shadow-lg shadow-black/50 dark:shadow-gray-400/30',
            containerClassName,
          )}
          sideOffset={10}
          align="end"
        >
          <RadixPopover.Close
            className="absolute right-3 top-2"
            aria-label="Close Panel"
          >
            <FontAwesomeIcon
              icon={faX}
              className="text-3xl transition-transform motion-safe:hover:scale-125 motion-reduce:transition-none"
            />
          </RadixPopover.Close>

          <div className="pt-6">{children}</div>

          <RadixPopover.Arrow className="fill-foreground-secondary" />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
};
