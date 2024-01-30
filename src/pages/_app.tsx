import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="p-5">
      <Component {...pageProps} />
    </main>
  );
}
