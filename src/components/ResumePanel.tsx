import { ExternalLink } from '@/components/core/ExternalLink';
import { InteractiveIcon } from '@/components/core/InteractiveIcon';
import { WithClassName } from '@/types/props';
import { classNames } from '@/utils/style';
import type { FunctionComponent } from 'react';
import { faFilePdf, faFileWord } from '@fortawesome/free-solid-svg-icons';

export interface ResumePanelProps extends WithClassName {
  buttonsOnly?: boolean;
  iconClassName?: string;
}

const ResumeButtons: FunctionComponent<{
  iconClassName?: string;
}> = ({ iconClassName }) => {
  return (
    <>
      <ExternalLink
        href="/documents/resume.pdf"
        aria-label="View my resume in PDF format"
      >
        <InteractiveIcon
          icon={faFilePdf}
          className={classNames('mr-8', iconClassName)}
        />
      </ExternalLink>

      <ExternalLink
        href="/documents/resume.docx"
        aria-label="View my resume in Word (docx) format"
      >
        <InteractiveIcon icon={faFileWord} className={iconClassName} />
      </ExternalLink>
    </>
  );
};

export const ResumePanel: FunctionComponent<ResumePanelProps> = (props) => {
  const { buttonsOnly, className, iconClassName } = props;

  if (buttonsOnly) {
    return <ResumeButtons iconClassName={iconClassName} />;
  }

  return (
    <div className={classNames('flex flex-col items-center', className)}>
      <p className="mb-2 font-heading font-semibold">Resume</p>

      <div>
        <ResumeButtons iconClassName={iconClassName} />
      </div>
    </div>
  );
};
