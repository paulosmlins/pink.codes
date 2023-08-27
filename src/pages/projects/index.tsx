import Image from "next/image";
import styles from "@/pages/projects/style/projects.module.css";
import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>📚 ✯ Projects ✯ PinkCodes</title>
      </Head>
      <main className={`flex flex-col pt-5 sm:grid sm:pt-12 ${styles.home}`}>
        <div className="px-5 mb-8 sm:mb-none sm:px-none">
          <h2 className="font-bold text-xl mb-2">Oiii, meu nome é</h2>
          <h1>
            <picture>
              <img
                className="pointer-events-none w-full"
                src="/images/logoPaulo.svg"
                alt="Logo Pink Codes"
              />
            </picture>
          </h1>
          <div className="pt-4">
            <h2 className="text-lg my-2">
              🏳️‍🌈 Muito prazer eu sou o Paulo, mas também pode me chamar de Pink,
              sou Desenvolvedor Front-end web e mobile, inimigo número 1 das{" "}
              <span className={styles.glitch} data-text="IAS.">
                IAs
              </span>{" "}
              e um
              <span className="top-2.5 relative"> alinhador </span>
              profissional de
              <span className="top-2.5 relative"> div</span>
            </h2>
          </div>
        </div>
        <div
          className={`flex items-center justify-end relative ${styles.profilePicture}`}
        >
          <div className="relative flex items-center justify-center overflow-hidden rounded-2xl sm:justify-end">
            <Image
              className="pointer-events-none z-10"
              src="/images/profilePicture.png"
              alt="Logo Pink Codes"
              height="400"
              width="350"
            />
            <Image
              className={`pointer-events-none absolute z-20 ${styles.gray}`}
              src="/images/profilePicture.png"
              alt="Logo Pink Codes"
              height="400"
              width="350"
            />
          </div>
        </div>
      </main>
    </>
  );
}
