import "@/styles/globals.css";
import type { AppProps } from "next/app";

import MainHeader from "@/components/header";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="main">
      <div className="divcomponent">
        <MainHeader />
        <div className="component">
          <Component {...pageProps} />
        </div>
      </div>
      <div className="pointer-events-none relative isolate -z-1 opacity-30">
        <div className="fixed inset-0 mix-blend-color-dodge nnnoise"></div>
        <div className="fixed inset-0 bg-center mix-blend-color-dodge ooorganize"></div>
      </div>
    </div>
  );
}
