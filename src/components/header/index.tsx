import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./style/header.module.css";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import { faGear, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  const [settings, setSettings] = useState(false);
  return (
    <header
      className={`z-50 rounded-none sm:rounded-3xl ${styles.header} ${
        navbar ? "items-start h-full" : "sm:items-center sm:h-auto"
      }`}
    >
      <nav className="w-full bg-gray-800">
        <div className="justify-between relative mx-auto md:items-center md:flex ">
          <div className="flex items-center justify-between">
            <Link className={styles.headerLogo} href="/">
              <Image
                src="/logo.svg"
                alt="Logo Pink Codes"
                className="pointer-events-none"
                width="45"
                height="45"
                priority
              />
            </Link>
            <div className="flex items-center justify-between py-0 sm:py-3 sm:block">
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none"
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
          </div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul
              className={`items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ${styles.navMenu}`}
            >
              <li className="text-color-white flex items-center justify-end relative right-5 sm:right-auto sm:justify-center">
                <Link className="w-max" href="/">
                  Inicio
                </Link>
              </li>
              <li className="text-color-white flex items-center justify-end relative right-5 sm:right-auto sm:justify-center">
                <Link className="w-max" href="#">
                  Lives
                </Link>
              </li>
              <li className="text-color-white flex items-center justify-end relative right-5 sm:right-auto sm:justify-center">
                <Link className="w-max" href="/projects">
                  Projetos
                </Link>
              </li>
              <li className="text-color-white flex items-center justify-end relative right-5 sm:right-auto sm:justify-center">
                <Link className="w-max" href="#">
                  Sobre Mim
                </Link>
              </li>
            </ul>
          </div>
          <button
            className="p-2 text-color-white rounded-md outline-none absolute right-12 top-1 sm:relative sm:right-auto sm:top-auto"
            onClick={() => setSettings(!settings)}
          >
            <FaIcon icon={faGear} />
          </button>
        </div>
      </nav>
    </header>
  );
}
