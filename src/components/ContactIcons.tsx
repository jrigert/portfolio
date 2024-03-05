import {
  ExternalLink,
  ExternalLinkVariantProps,
} from '@/components/core/ExternalLink';
import { WithClassName } from '@/types/props';
import { classNames } from '@/utils/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FunctionComponent } from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export interface ContactIconsProps
  extends WithClassName,
    ExternalLinkVariantProps {
  showGitHub?: boolean;
}

export const ContactIcons: FunctionComponent<ContactIconsProps> = (props) => {
  const {
    className,
    showGitHub = true,
    variant = 'icon',
    color = 'foreground',
  } = props;

  const iconOnly = variant === 'icon';

  return (
    <div
      className={classNames(
        'flex items-center justify-center gap-12',
        className,
      )}
    >
      <ExternalLink
        href="mailto:jonrigert@gmail.com?subject=Hi Jon!"
        aria-label="Send me an email. Opens your default email client"
        newTab={false}
        variant={variant}
        color={color}
        icon={faEnvelope}
        className="flex-1"
      >
        {!iconOnly ? 'Email' : null}
      </ExternalLink>

      <ExternalLink
        href="https://www.linkedin.com/in/jonathonrigert"
        aria-label="View my LinkedIn Profile"
        variant={variant}
        color={color}
        icon={faLinkedin}
        className="flex-1"
      >
        {!iconOnly ? 'LinkedIn' : null}
      </ExternalLink>

      {showGitHub ? (
        <ExternalLink
          href="https://github.com/jrigert"
          aria-label="View my GitHub"
          variant={variant}
          color={color}
          icon={faGithub}
          className="flex-1"
        >
          {!iconOnly ? 'GitHub' : null}
        </ExternalLink>
      ) : null}
    </div>
  );
};
