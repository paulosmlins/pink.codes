import Image from "next/image";
import styles from "./style/header.module.css";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <header className={styles.header}>
      <div className="flex gap-6 items-center">
        <div>
          <a
            className={styles.headerLogo}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo.svg"
              alt="Logo Pink Codes"
              width="45"
              height="45"
              priority
            />
          </a>
        </div>
        <div className={styles.headerMenu}>
          <nav className={`flex gap-x-6 ${styles.navMenu}`}>
            <a href="#">Inicio</a>
            <a href="#">Lives</a>
            <a href="#">Projetos</a>
            <a href="#">Sobre Mim</a>
          </nav>
        </div>
      </div>
      <div className={styles.configBtn}>
        <FaIcon icon={faGear} />
      </div>
    </header>
  );
}
