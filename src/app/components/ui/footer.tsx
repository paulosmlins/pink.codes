'use client';
import AnimateEnter from '@/app/components/generic/AnimateEnter';
// import Text from '@/app/components/generic/Text';
import Contact from '@/app/components/ui/Contact';
import Tooltip from '@/app/components/ui/Tooltip';
import useTime from '@/app/hooks/useTime';

import '@/app/styles/header.css';

export default function Footer() {
  const { currentTime, timezoneOffset } = useTime();
  return (
    <div className="container flex items-center justify-between px-3 py-10">
      <AnimateEnter delay={0.8}>
        <Contact />
      </AnimateEnter>
      <AnimateEnter delay={1}>
        <Tooltip content={timezoneOffset}>
          <span
            className="inline-block cursor-crosshair font-mono text-xs text-secondary dark:text-secondary-dark"
            aria-live="off"
            role="status"
          >
            {currentTime}
          </span>
        </Tooltip>
      </AnimateEnter>
    </div>
  );
}
