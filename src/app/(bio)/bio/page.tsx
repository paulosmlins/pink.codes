'use client';

import Image from 'next/image';
import AnimateEnter from '@/app/components/generic/AnimateEnter';
import Container from '@/app/components/generic/Container';
// import Heading from '@/app/components/generic/Heading';
// import Separator from '@/app/components/generic/Separator';
// import Text from '@/app/components/generic/Text';
import styles from './page.module.css';
import Tooltip from '@/app/components/ui/Tooltip';
import useTime from '@/app/hooks/useTime';
import { Icon } from '@/app/components/ui/Icon';

export default function Bio() {
  const { currentTime, timezoneOffset } = useTime();

  return (
    <Container className="flex min-h-screen flex-col justify-between pt-16">
      <div className="pt-4">
        <AnimateEnter delay={0.4}>
          <section className={`relative flex items-center ${styles.bio}`}>
            <div className="flex w-full flex-col items-center justify-center gap-10">
              <AnimateEnter delay={1}>
                <div
                  className={`relative flex items-center justify-center ${styles.profilePicture}`}
                >
                  <div className="relative flex items-center justify-center overflow-hidden rounded-2xl sm:justify-end">
                    <Image
                      className="pointer-events-none z-10"
                      src="/assets/images/profile.png"
                      alt="Logo Pink Codes"
                      height="200"
                      width="200"
                    />
                  </div>
                  <div className={styles.divBallon}>
                    <div className={styles.ballon}>Don&apos;t click</div>
                  </div>
                </div>
              </AnimateEnter>
              <AnimateEnter delay={0.4}>
                <h1 className="flex items-center gap-3 font-bold">
                  <div className="leading-none">
                    <span className={styles.nomeHover}>P</span>
                    <span className={styles.nomeHover}>a</span>
                    <span className={styles.nomeHover}>u</span>
                    <span className={styles.nomeHover}>l</span>
                    <span className={styles.nomeHover}>o</span>
                  </div>
                  <div className="leading-none">
                    <span className={styles.nomeHover}>L</span>
                    <span className={styles.nomeHover}>i</span>
                    <span className={styles.nomeHover}>n</span>
                    <span className={styles.nomeHover}>s</span>
                  </div>
                </h1>
              </AnimateEnter>
            </div>
          </section>
        </AnimateEnter>
        <AnimateEnter delay={0.4}>
          <div className="mt-4 flex items-center justify-center gap-4">
            <Icon
              name="instagram"
              height={32}
              width={32}
              className=" inline-flex items-center text-white"
            />
            <Icon
              name="tiktok"
              height={24}
              width={24}
              className=" inline-flex items-center text-white"
            />
            <Icon
              name="youtube"
              height={24}
              width={24}
              className=" inline-flex items-center text-white"
            />
            <Icon
              name="mail"
              height={24}
              width={24}
              className=" inline-flex items-center text-white"
            />
          </div>
        </AnimateEnter>
        <div className="px-6 pt-10">
          <AnimateEnter delay={0.6}>
            <div className="flex items-center rounded-full border border-white p-2">
              <Icon
                name="spotify"
                height={60}
                width={60}
                className=" inline-flex items-center text-white"
              />
              <div className="grow text-center text-base">Playlist para trabalhar</div>
            </div>
          </AnimateEnter>
        </div>
      </div>

      <AnimateEnter delay={1}>
        <div className="flex items-center justify-center py-6">
          <Tooltip content={timezoneOffset}>
            <span
              className="inline-block cursor-crosshair font-mono text-xs text-secondary dark:text-secondary-dark"
              aria-live="off"
              role="status"
            >
              {currentTime}
            </span>
          </Tooltip>
        </div>
      </AnimateEnter>
    </Container>
  );
}
