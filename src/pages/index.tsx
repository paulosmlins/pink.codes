import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <main className={styles.home}>
        <div className={styles.description}></div>
      </main>
    </>
  );
}
