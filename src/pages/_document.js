import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <body id="app">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
