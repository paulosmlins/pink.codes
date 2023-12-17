import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <div className="pointer-events-none relative isolate -z-1 opacity-30">
          <div className="fixed inset-0 mix-blend-color-dodge nnnoise"></div>
          <div className="fixed inset-0 bg-center mix-blend-color-dodge ooorganize"></div>
        </div>
      </body>
    </Html>
  );
}
