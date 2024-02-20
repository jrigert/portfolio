import { classNames } from '@/utils/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { ComponentProps, FunctionComponent } from 'react';

export interface InteractiveIconProps
  extends ComponentProps<typeof FontAwesomeIcon> {}

const iconClassName =
  'duration-250 cursor-pointer transition motion-reduce:transition-opacity motion-safe:hover:scale-125 text-foreground/90 hover:text-foreground text-4xl';

export const InteractiveIcon: FunctionComponent<InteractiveIconProps> = (
  props,
) => {
  const { className, ...iconProps } = props;

  return (
    <FontAwesomeIcon
      className={classNames(iconClassName, className)}
      {...iconProps}
    />
  );
};
