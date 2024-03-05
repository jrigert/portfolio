import { ExternalLink } from '@/components/core/ExternalLink';
import { WithClassName } from '@/types/props';
import { classNames } from '@/utils/style';
import type { FunctionComponent } from 'react';
import { faFilePdf, faFileWord } from '@fortawesome/free-solid-svg-icons';

export interface ResumePanelProps extends WithClassName {}

export const ResumePanel: FunctionComponent<ResumePanelProps> = (props) => {
  const { className } = props;

  return (
    <div
      className={classNames(
        'mx-auto flex max-w-sm flex-wrap items-center justify-center gap-8',
        className,
      )}
    >
      <ExternalLink
        href="/documents/resume.pdf"
        aria-label="View my resume in PDF format"
        variant="iconButton"
        className="flex-1"
        icon={faFilePdf}
      >
        PDF
      </ExternalLink>

      <ExternalLink
        href="/documents/resume.docx"
        aria-label="View my resume in Word (.docx) format"
        variant="iconButton"
        icon={faFileWord}
        className="flex-1"
      >
        Word
        <span className="text-sm">(.docx)</span>
      </ExternalLink>
    </div>
  );
};
