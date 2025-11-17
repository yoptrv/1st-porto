import { useEffect } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Matikan auto-restore scroll bawaan browser
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Paksa ke atas setelah render
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 50);
  }, []);

  return <Component {...pageProps} />;
}
