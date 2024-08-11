'use client';

import AnimateEnter from '@/app/components/generic/AnimateEnter';
import Container from '@/app/components/generic/Container';
import styles from '@/app/styles/page.module.css';
import Image from 'next/image';
import axios from 'axios';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    axios
      .get('https://api.github.com/users/paulosmlins')
      .then(function (response) {
        // console.log(response.data);
      })
      .catch(function (error) {
        // console.log(error);
      });
  }, []);
  return (
    <Container className="justify-start">
      <AnimateEnter delay={0.4}>
        <section className={`relative flex flex-col-reverse pb-4 sm:grid sm:pb-24 ${styles.home}`}>
          <div>
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
            <AnimateEnter delay={0.6}>
              <span className="text-text-grey">Front-end Developer - Web / Mobile</span>
            </AnimateEnter>
            <AnimateEnter delay={0.8}>
              <div className="pt-4 sm:pt-4">
                <h2 className=" my-2 text-text-grey  sm:text-start">
                  Muito prazer eu sou o Paulo, faço lives totalmentes aleatorias, sou Desenvolvedor
                  Front-end web e mobile, inimigo número 1 das{' '}
                  <span className={styles.glitch} data-text="IaS.">
                    IAs
                  </span>{' '}
                  e um
                  <span className="relative top-2.5"> alinhador </span>
                  profissional de
                  <span className="relative top-2.5"> divs.</span>
                </h2>
              </div>
            </AnimateEnter>
          </div>
          <AnimateEnter delay={1}>
            <div className={`relative flex items-center justify-center ${styles.profilePicture}`}>
              <div className="relative flex items-center justify-center overflow-hidden rounded-2xl sm:justify-end">
                <Image
                  className="pointer-events-none z-10"
                  src="/assets/images/profile.png"
                  alt="Logo Pink Codes"
                  height="200"
                  width="200"
                />
              </div>
              {/* <div className={styles.divBallon}>
                <div className={styles.ballon}>Sobre Mim</div>
              </div> */}
            </div>
          </AnimateEnter>
        </section>
      </AnimateEnter>
      <AnimateEnter delay={0.6}>
        <section>
          <h2 className="mb-1 font-bold text-[#aaaaaa]  sm:text-start">Projetos</h2>
          <div className={styles.separator} />
        </section>
      </AnimateEnter>
      {/* <AnimateEnter delay={0.6}>
        <nav className="flex flex-col gap-1">
          <span>
            <CustomLink href="/now" ariaLabel="now page">
              Now
            </CustomLink>
          </span>
          <span>
            <CustomLink href="/craft" ariaLabel="Craft page">
              Craft
            </CustomLink>
          </span>
          <span>
            <CustomLink href="/writing" ariaLabel="Writing page">
              Writing
            </CustomLink>
          </span>
        </nav>
      </AnimateEnter> */}
    </Container>
  );
};

export default Home;
