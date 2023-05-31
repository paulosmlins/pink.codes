import Image from "next/image";
import Link from "next/link";
import styles from "./style/header.module.css";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <header className={styles.header}>
      <div className="w-full h-full flex items-center justify-between relative">
        <Link className={styles.headerLogo} href="/">
          <Image
            src="/logo.svg"
            alt="Logo Pink Codes"
            className="pointer-events-none            "
            width="45"
            height="45"
            priority
          />
        </Link>
        <div
          className={`absolute w-full flex items-center justify-center ${styles.headerMenu}`}
        >
          <nav className={`flex gap-x-6 ${styles.navMenu}`}>
            <Link href="/">Inicio</Link>
            <Link href="#">Lives</Link>
            <Link href="#">Projetos</Link>
            <Link href="#">Sobre Mim</Link>
          </nav>
        </div>
        <div className={styles.configBtn}>
          <FaIcon icon={faGear} />
        </div>
      </div>
    </header>
  );
}
