import Image from "next/image";
import styles from "./style/header.module.css";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <header className={styles.header}>
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
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">Work</a>
          <a href="#">About</a>
        </nav>
      </div>
      <div className={styles.configBtn}>
        <FaIcon icon={faGear} />
      </div>
    </header>
  );
}
