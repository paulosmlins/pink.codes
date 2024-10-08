import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import AnimateEnter from "@/components/generic/AnimateEnter";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

export default function Header() {
  const pathname = usePathname();
  const [settings, setSettings] = useState(false);
  return (
    <header className="header z-50 rounded-none sm:rounded-3xl ">
      <nav className="container">
        <div className="relative mx-auto justify-between md:flex md:items-center ">
          <AnimateEnter delay={0.2}>
            <Link className="headerLogo" href="/">
              <Image
                src="/logo.svg"
                alt="Logo Pink Codes"
                className="pointer-events-none"
                width="45"
                height="45"
                priority
              />
            </Link>
          </AnimateEnter>

          <div className="mt-8 flex-1 justify-self-center pb-3 pl-6 md:mt-0 md:block md:pb-0">
            <ul className="navMenu items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <AnimateEnter delay={0.3}>
                <li
                  className={pathname === "/" ? "linkMenuActive" : "linkMenu"}
                >
                  <Link className="w-max" href="/">
                    Inicio
                  </Link>
                </li>
              </AnimateEnter>
              <AnimateEnter delay={0.4}>
                <li className="linkMenu">
                  <Link className="w-max" href="#">
                    Lives
                  </Link>
                </li>
              </AnimateEnter>
              <AnimateEnter delay={0.5}>
                <li
                  className={
                    pathname === "/projects" ? "linkMenuActive" : "linkMenu"
                  }
                >
                  <Link className="w-max" href="#">
                    Projetos
                  </Link>
                </li>
              </AnimateEnter>
              <AnimateEnter delay={0.6}>
                <li className="linkMenu">
                  <Link className="w-max" href="#">
                    Sobre Mim
                  </Link>
                </li>
              </AnimateEnter>
            </ul>
          </div>
          <AnimateEnter delay={0.7}>
            <div className="flex items-center gap-2">
              {/* <button onClick={() => setSettings(!settings)}>
                <Icon
                  name="profile"
                  height={27}
                  width={27}
                  className="mx-1 inline-flex items-center text-white"
                />
              </button> */}
              <button onClick={() => setSettings(!settings)}>
                <Icon
                  name="gear"
                  height={24}
                  width={24}
                  className="mx-1 inline-flex items-center text-white"
                />
              </button>
            </div>
          </AnimateEnter>
        </div>
      </nav>
    </header>
  );
}
