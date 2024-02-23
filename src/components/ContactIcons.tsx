import { ExternalLink } from '@/components/core/ExternalLink';
import { InteractiveIcon } from '@/components/core/InteractiveIcon';
import { WithClassName } from '@/types/props';
import { classNames } from '@/utils/style';
import type { FunctionComponent } from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export interface ContactIconsProps extends WithClassName {
  iconClassName?: string;
  showGitHub?: boolean;
}

export const ContactIcons: FunctionComponent<ContactIconsProps> = (props) => {
  const { className, iconClassName, showGitHub = true } = props;

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
      >
        <InteractiveIcon icon={faEnvelope} className={iconClassName} />
      </ExternalLink>

      <ExternalLink
        href="https://www.linkedin.com/in/jonathonrigert"
        aria-label="View my LinkedIn Profile"
      >
        <InteractiveIcon icon={faLinkedin} className={iconClassName} />
      </ExternalLink>

      {showGitHub ? (
        <ExternalLink
          href="https://github.com/jrigert"
          aria-label="View my GitHub"
        >
          <InteractiveIcon icon={faGithub} className={iconClassName} />
        </ExternalLink>
      ) : null}
    </div>
  );
};
