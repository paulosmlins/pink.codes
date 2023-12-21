'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import '@/app/styles/header.css';

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="header z-50 rounded-none sm:rounded-3xl ">
      <nav className="w-full">
        <div className="relative mx-auto justify-between md:flex md:items-center ">
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
          <div className="mt-8 flex-1 justify-self-center pb-3 pl-6 md:mt-0 md:block md:pb-0">
            <ul className="navMenu items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className={pathname === '/' ? 'linkMenuActive' : 'linkMenu'}>
                <div className="backPartMenu"></div>
                <Link className="w-max" href="/">
                  Inicio
                </Link>
              </li>
              <li className="linkMenu">
                <div className="backPartMenu"></div>
                <Link className="w-max" href="#">
                  Lives
                </Link>
              </li>
              <li className={pathname === '/projects' ? 'linkMenuActive' : 'linkMenu'}>
                <div className="backPartMenu"></div>
                <Link className="w-max" href="#">
                  Projetos
                </Link>
              </li>
              <li className="linkMenu">
                <div className="backPartMenu"></div>
                <Link className="w-max" href="#">
                  Sobre Mim
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
