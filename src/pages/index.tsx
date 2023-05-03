import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <header className={styles.header}>
          <div>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="/logo.svg"
                alt="Logo Pink Codes"
                className={styles.headerLogo}
                width="400"
                height="50"
                priority
              />
            </a>
          </div>
        </header>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
        </div>
      </main>
    </>
  );
}
