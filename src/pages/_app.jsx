import "@/styles/globals.css";

import MainHeader from "@/components/header";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <div className="main">
      <div className="divcomponent">
        <MainHeader />
        <div className="component">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
