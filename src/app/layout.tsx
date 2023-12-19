import "@/app/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { Metadata } from "next";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "✯ PinkCodes ✯",
    template: "%s ✯ PinkCodes",
  },
  description: "My personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <div className="main">
          <section className="mainPage">
            <Header />
            <div className="pt-24">
              {children}
              <SpeedInsights />
            </div>
          </section>
        </div>
        <div className="pointer-events-none relative isolate -z-1 opacity-30">
          <div className="fixed inset-0 mix-blend-color-dodge nnnoise"></div>
          <div className="fixed inset-0 bg-center mix-blend-color-dodge ooorganize"></div>
        </div>
      </body>
    </html>
  );
}
