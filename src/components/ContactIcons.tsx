import { InteractiveIcon } from '@/components/core/InteractiveIcon';
import { WithClassName } from '@/types/props';
import { classNames } from '@/utils/style';
import type { FunctionComponent } from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export interface ContactIconsProps extends WithClassName {}

export const ContactIcons: FunctionComponent<ContactIconsProps> = (props) => {
  const { className } = props;

  return (
    <div
      className={classNames(
        'flex items-center justify-center gap-12',
        className,
      )}
    >
      <a
        href="mailto:jonrigert@gmail.com?subject=Hi Jon!"
        aria-label="Send me an email. Opens your default email client"
      >
        <InteractiveIcon icon={faEnvelope} />
      </a>

      <a
        href="https://www.linkedin.com/in/jonathonrigert"
        aria-label="View my LinkedIn Profile. Opens in a new tab"
        target="_blank"
        rel="noopener"
      >
        <InteractiveIcon icon={faLinkedin} />
      </a>

      <a
        href="https://github.com/jrigert"
        aria-label="View my GitHub. Opens in a new tab"
        target="_blank"
        rel="noopener"
      >
        <InteractiveIcon icon={faGithub} />
      </a>
    </div>
  );
};
