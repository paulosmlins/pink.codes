import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <header>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/logo.svg"
              alt="Logo Pink Codes"
              className={styles.vercelLogo}
              width="400"
              height="50"
              priority
            />
          </a>
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
