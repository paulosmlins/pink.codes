import Image from "next/image";
import styles from "@/pages/home/style/home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <main className={styles.home}>
        <div className={`pt-20 ${styles.description}`}>
          <h2 className="font-bold text-xl mb-2">Oiii, meu nome é</h2>
          <h1>
            <picture>
              <img
                className="pointer-events-none"
                src="/images/logoPaulo.svg"
                alt="Logo Pink Codes"
              />
            </picture>
          </h1>
          <div className="pt-4">
            <h2 className="text-lg my-2">
              🏳️‍🌈 Eu sou o Paulo, mas pode me chamar de Pink também, sou
              desenvolvedor Front-end, inimigo número 1 das IAs e um
              <span className={styles.spanTorto}> alinhador</span> profissional
              de div
            </h2>
          </div>
        </div>
        <div>
          <picture>
            <Image
              className="pointer-events-none"
              src="/images/profilePicture.png"
              alt="Logo Pink Codes"
              height="300"
              width="300"
            />
          </picture>
        </div>
      </main>
    </>
  );
}
