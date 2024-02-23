import { HTMLAnchorProps } from '@/types/props';
import type { FunctionComponent } from 'react';

export interface LinkProps extends Omit<HTMLAnchorProps, 'target' | 'rel'> {
  /** require an aria-label */
  'aria-label': string;
  /** open in a new tab safely - default to true */
  newTab?: boolean;
}

export const NEW_TAB_HEADS_UP = ' - link opens in a new tab';

export const ExternalLink: FunctionComponent<LinkProps> = (props) => {
  const {
    'aria-label': ariaLabel,
    children,
    newTab = true,
    ...anchorProps
  } = props;

  const targetProps: Partial<HTMLAnchorProps> | undefined = newTab
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : undefined;

  const ariaHelper = newTab ? NEW_TAB_HEADS_UP : '';

  return (
    <a
      aria-label={`${ariaLabel}${ariaHelper}`}
      {...targetProps}
      {...anchorProps}
    >
      {children}
    </a>
  );
};
