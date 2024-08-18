import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt" suppressHydrationWarning>
      <Head />
      <body className="text-sm text-white md:text-base lg:text-base">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
