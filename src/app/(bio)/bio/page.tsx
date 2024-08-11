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
import Link from 'next/link';

export default function Bio() {
  const { currentTime, timezoneOffset } = useTime();

  return (
    <Container className="flex min-h-screen flex-col justify-between pt-16">
      <div className={`pt-4 ${styles.bio}`}>
        <AnimateEnter delay={0.4}>
          <section className="relative flex items-center">
            <div className="flex w-full flex-col items-center justify-center gap-10">
              <AnimateEnter delay={0.4}>
                <Link href="/">
                  <div
                    className={`relative flex items-center justify-center ${styles.profilePicture}`}
                  >
                    <div className="relative flex items-center justify-center overflow-hidden rounded-2xl sm:justify-end">
                      <Image
                        className="pointer-events-none z-10"
                        src="/assets/images/profile.png"
                        alt="Logo Pink Codes"
                        height="180"
                        width="180"
                      />
                    </div>
                  </div>
                </Link>
              </AnimateEnter>
              <AnimateEnter delay={0.6}>
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
        <AnimateEnter delay={0.8}>
          <div className="mt-4 flex items-center justify-center gap-5">
            <Link
              className={`${styles.linkIcon}`}
              href="https://www.twitch.tv/pinkcodes"
              target="_blank"
            >
              <Icon
                name="twitch"
                height={28}
                width={28}
                className=" inline-flex items-center text-white"
              />
            </Link>
            <Link
              className={`${styles.linkIcon}`}
              href="https://www.instagram.com/paulosmlins"
              target="_blank"
            >
              <Icon
                name="instagram"
                height={32}
                width={32}
                className=" inline-flex items-center text-white"
              />
            </Link>
            <div className={`relative flex items-center justify-center ${styles.linkIcon}`}>
              <div className="relative flex items-center justify-center rounded-2xl sm:justify-end">
                <Icon
                  name="mail"
                  height={26}
                  width={26}
                  className=" inline-flex items-center text-white"
                />
              </div>
              <div className={styles.divBallon}>
                <div className={styles.ballon}>paulo@pink.codes</div>
              </div>
            </div>
            <Link
              className={`${styles.linkIcon}`}
              href="https://www.tiktok.com/@pink.codes"
              target="_blank"
            >
              <Icon
                name="tiktok"
                height={24}
                width={24}
                className=" inline-flex items-center text-white"
              />
            </Link>
            <Link
              className={`${styles.linkIcon}`}
              href="https://www.youtube.com/@paulosmlinses"
              target="_blank"
            >
              <Icon
                name="youtube"
                height={26}
                width={26}
                className=" inline-flex items-center text-white"
              />
            </Link>
          </div>
        </AnimateEnter>
        <div className="flex flex-col gap-5 px-6 pt-10">
          <AnimateEnter delay={1}>
            <Link
              target="_blank"
              href="https://open.spotify.com/playlist/1hcF0Rbvrfhq9xdVpjgMBS?si=b809ff24898d4d09"
              className={`flex items-center rounded-md bg-white px-3 py-2 ${styles.linkBox}`}
            >
              <Icon
                name="spotify"
                height={50}
                width={50}
                className=" inline-flex items-center text-black"
              />
              <div className="grow text-center text-base text-black">Playlist para trabalhar</div>
            </Link>
          </AnimateEnter>
          {/* <AnimateEnter delay={1}>
            <Link
              target="_blank"
              href="https://open.spotify.com/playlist/1hcF0Rbvrfhq9xdVpjgMBS?si=b809ff24898d4d09"
              className={`flex items-center rounded-md bg-white px-3 py-2 ${styles.linkBox}`}
            >
              <Icon
                name="products"
                height={50}
                width={50}
                className=" inline-flex items-center text-black"
              />
              <div className="grow text-center text-base text-black">Link de produtos</div>
            </Link>
          </AnimateEnter> */}
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
