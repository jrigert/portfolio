import { Button } from '@/components/core/Button';
import { useAnimate } from '@/hooks/animation/useAnimate';
import { useHoverAnimation } from '@/hooks/animation/useHoverAnimation';
import { useTimeout } from '@/hooks/useTimeout';
import { classNames } from '@/utils/style';
import { faHand } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef, useState } from 'react';

export const ResumePopoverTriggerButton = forwardRef<HTMLButtonElement>(
  function ResumePopoverTriggerButtonComponent(props, ref) {
    const animateFadeIn = useAnimate({ delay: 1200 });
    const fadeInAnimationClass = animateFadeIn
      ? 'opacity-100 translate-x-0'
      : 'motion-safe:opacity-0 motion-safe:translate-x-20';

    const [playWaveAnimation, setPlayWaveAnimation] = useState(false);
    useTimeout(
      () => {
        setPlayWaveAnimation(true);
      },
      1000,
      { begin: animateFadeIn },
    );

    const {
      registerFunctions: registerAnimationFunctions,
      className: hoverAnimationClass,
    } = useHoverAnimation({
      forceAnimate: playWaveAnimation,
      hoverClassName: 'motion-safe:animate-wave',
    });

    return (
      <Button
        aria-label="Opens a panel with links to my contact information and resume"
        size="icon"
        color="loud"
        ref={ref}
        className={classNames(
          'fixed bottom-5 right-5 z-50 h-12 w-12 rounded-full transition duration-500 ease-out motion-safe:hover:scale-110 motion-reduce:transition-none',
          fadeInAnimationClass,
        )}
        {...registerAnimationFunctions}
        {...props}
      >
        <FontAwesomeIcon
          icon={faHand}
          className={classNames(
            'origin-bottom -translate-x-1.5 translate-y-0 rotate-[30deg] text-2xl',
            hoverAnimationClass,
          )}
        />
      </Button>
    );
  },
);
