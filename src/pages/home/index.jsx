import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <main className={styles.home}>
        <div className={`pt-20 ${styles.description}`}>
          <h2 className="font-bold text-xl mb-2">Hi, my name is</h2>
          <h1>
            <Image
              src="/images/logoPaulo.svg"
              alt="Logo Pink Codes"
              width="500"
              height="45"
              priority
            />
          </h1>
          <div className="pt-4">
            <h2 className="font-bold text-lg my-2">
              • 🏳️‍🌈 I&#39;m currently learning
            </h2>
            <h2 className="font-bold text-lg my-2">
              • 🍩 I&#39;m a Brazilian front-end developer and UI designer
            </h2>
          </div>
        </div>
      </main>
    </>
  );
}
