import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./style/header.module.css";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className={styles.header}>
      <nav className="w-full bg-gray-800 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
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
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul
              className={`items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ${styles.navMenu}`}
            >
              <li className="text-white">
                <Link href="/">Inicio</Link>
              </li>
              <li className="text-white">
                <Link href="#">Lives</Link>
              </li>
              <li className="text-white">
                <Link href="#">Projetos</Link>
              </li>
              <li className="text-white">
                <Link href="#">Sobre Mim</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
