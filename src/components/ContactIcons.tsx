import { WithClassName } from '@/types/props';
import { classNames } from '@/utils/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FunctionComponent } from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const iconClassName =
  'duration-250 cursor-pointer transition hover:scale-125 text-foreground/90 hover:text-foreground';

export interface ContactIconsProps extends WithClassName {}

export const ContactIcons: FunctionComponent<ContactIconsProps> = (props) => {
  const { className } = props;

  return (
    <div
      className={classNames(
        'flex items-center justify-center gap-12 text-4xl',
        className,
      )}
    >
      <a
        href="mailto:jonrigert@gmail.com?subject=Hi Jon!"
        aria-label="Send me an email. Opens your default email client"
      >
        <FontAwesomeIcon className={iconClassName} icon={faEnvelope} />
      </a>

      <a
        href="https://www.linkedin.com/in/jonathonrigert"
        aria-label="View my LinkedIn Profile. Opens in a new tab"
        target="_blank"
        rel="noopener"
      >
        <FontAwesomeIcon className={iconClassName} icon={faLinkedin} />
      </a>

      <a
        href="https://github.com/jrigert"
        aria-label="View my GitHub. Opens in a new tab"
        target="_blank"
        rel="noopener"
      >
        <FontAwesomeIcon className={iconClassName} icon={faGithub} />
      </a>
    </div>
  );
};
