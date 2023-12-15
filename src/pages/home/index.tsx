"use client";
import styles from "@/pages/home/style/home.module.css";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitch,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const metadata = {
  title: "✯ PinkCodes ✯",
  description: "Home page",
};

export default function Home() {
  return (
    <>
      <section
        className={`flex flex-col-reverse relative py-5 sm:grid sm:py-12 ${styles.home}`}
      >
        <div className="px-5 mt-6 sm:mt-8 sm:mb-none sm:px-none">
          <h1 className="font-bold leading-none text-color-white">
            Oiii, eu sou o <span className="text-primary">Pink 🏳️‍🌈</span>
          </h1>
          <div className="sm:pt-4">
            <h2 className="text-lg text-color-white my-2 text-center sm:text-start">
              Muito prazer eu sou o Pink, faço lives totalmentes aleatorias, sou
              Desenvolvedor Front-end web e mobile, inimigo número 1 das{" "}
              <span className={styles.glitch} data-text="IaS.">
                IAs
              </span>{" "}
              e um
              <span className="top-2.5 relative"> alinhador </span>
              profissional de
              <span className="top-2.5 relative"> divs.</span>
            </h2>
          </div>
          <div className="pt-12 flex items-center gap-4 justify-center sm:justify-start">
            <a
              className="defaultBtn"
              target="_blank"
              href="https://github.com/PinkC0des"
            >
              <FaIcon className="text-2xl" icon={faGithub} />
              Github
            </a>
            <a
              className="defaultBtn"
              target="_blank"
              href="https://www.linkedin.com/in/paulosmlins/"
            >
              <FaIcon className="text-2xl" icon={faLinkedin} />
            </a>
            <a
              className="defaultBtn"
              target="_blank"
              href="https://www.instagram.com/pinkc0des/"
            >
              <FaIcon className="text-2xl" icon={faInstagram} />
            </a>
            <a
              className="defaultBtn"
              target="_blank"
              href="https://www.twitch.tv/pinkcodes"
            >
              <FaIcon className="text-2xl" icon={faTwitch} />
              Twitch
            </a>
          </div>
        </div>
        <div
          className={`flex items-center justify-end relative ${styles.profilePicture}`}
        >
          <div className="relative flex items-center justify-center overflow-hidden rounded-2xl sm:justify-end">
            <img
              className="pointer-events-none z-10"
              src="/images/profilePicture.png"
              alt="Logo Pink Codes"
              height="400"
              width="350"
            />
            <img
              className={`pointer-events-none absolute z-20 ${styles.gray}`}
              src="/images/profilePicture.png"
              alt="Logo Pink Codes"
              height="400"
              width="350"
            />
          </div>
        </div>
      </section>
      <section
        className={`flex flex-col-reverse relative py-5 sm:grid sm:py-12`}
      >
        <div className={styles.bottomLine}>Projetos</div>
      </section>
    </>
  );
}
