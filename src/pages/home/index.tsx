import Head from "next/head";
import Image from "next/image";
import styles from "@/pages/home/style/home.module.css";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitch,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>✯ PinkCodes</title>
      </Head>
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
            <button className="defaultBtn">
              <FaIcon className="text-2xl" icon={faGithub} />
              Github
            </button>
            <button className="defaultBtn">
              <FaIcon className="text-2xl" icon={faLinkedin} />
            </button>
            <button className="defaultBtn">
              <FaIcon className="text-2xl" icon={faInstagram} />
            </button>
            <button className="defaultBtn">
              <FaIcon className="text-2xl" icon={faTwitch} />
              Twitch
            </button>
          </div>
        </div>
        <div
          className={`flex items-center justify-end relative ${styles.profilePicture}`}
        >
          <div className="relative flex items-center justify-center overflow-hidden rounded-2xl sm:justify-end">
            <Image
              className="pointer-events-none z-10"
              src="/images/profilePicture.png"
              alt="Logo Pink Codes"
              height="400"
              width="350"
            />
            <Image
              className={`pointer-events-none absolute z-20 ${styles.gray}`}
              src="/images/profilePicture.png"
              alt="Logo Pink Codes"
              height="400"
              width="350"
            />
          </div>
        </div>
      </section>
    </>
  );
}
