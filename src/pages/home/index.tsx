import Image from "next/image";
import styles from "@/pages/home/style/home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <main className={styles.home}>
        <div className={styles.description}>
          <h2 className="font-bold text-xl mb-2">Oiii, meu nome é</h2>
          <h1>
            <picture>
              <img
                className="pointer-events-none w-full"
                src="/images/logoPaulo.svg"
                alt="Logo Pink Codes"
              />
            </picture>
          </h1>
          <div className="pt-4">
            <h2 className="text-lg my-2">
              🏳️‍🌈 Muito prazer eu sou o Paulo, mas também pode me chamar de Pink,
              sou Desenvolvedor Front-end web e mobile, inimigo número 1 das{" "}
              <span className={styles.glitch} data-text="IAS.">
                IAs
              </span>{" "}
              e um
              <span className="top-2.5 relative"> alinhador </span>
              profissional de
              <span className="top-2.5 relative"> div</span>
            </h2>
          </div>
        </div>
        <div
          className={`flex items-center justify-end relative ${styles.profilePicture}`}
        >
          <Image
            className="pointer-events-none rounded-xl z-10"
            src="/images/profilePicture.png"
            alt="Logo Pink Codes"
            height="400"
            width="350"
          />
        </div>
      </main>
    </>
  );
}
