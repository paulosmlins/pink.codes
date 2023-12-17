import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style/header.module.css";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import { faGear, faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import MenuLine from "@/assets/menuLine";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const [settings, setSettings] = useState(false);
  const pathname = usePathname();
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
                  className="p-2 text-color-white text-gray-700 rounded-md outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <FaIcon className="text-color-white" icon={faClose} />
                  ) : (
                    <FaIcon className="text-color-white" icon={faBars} />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div
            className={`flex-1 justify-self-center pl-6 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul
              className={`items-center space-y-8 md:flex md:space-x-6 md:space-y-0 ${styles.navMenu}`}
            >
              <li
                className={
                  pathname === "/" ? styles.linkMenuActive : styles.linkMenu
                }
              >
                <div className={styles.backPartMenu}>
                  <MenuLine />
                </div>
                <Link className="w-max" href="/">
                  Inicio
                </Link>
              </li>
              <li className={styles.linkMenu}>
                <div className={styles.backPartMenu}>
                  <MenuLine />
                </div>
                <Link className="w-max" href="#">
                  Lives
                </Link>
              </li>
              <li
                className={
                  pathname === "/projects"
                    ? styles.linkMenuActive
                    : styles.linkMenu
                }
              >
                <div className={styles.backPartMenu}>
                  <MenuLine />
                </div>
                <Link className="w-max" href="/projects">
                  Projetos
                </Link>
              </li>
              <li className={styles.linkMenu}>
                <div className={styles.backPartMenu}>
                  <MenuLine />
                </div>
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
            <FaIcon className="text-color-white" icon={faGear} />
          </button>
        </div>
      </nav>
    </header>
  );
}
