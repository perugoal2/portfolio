import "../styles/globals.css";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Archivo, Fraunces, JetBrains_Mono } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Reveal card grids as they enter view. Only runs when motion is allowed
  // (the `js-anim` class is added pre-paint in _document); otherwise content
  // is already visible and this is a no-op.
  useEffect(() => {
    if (!document.documentElement.classList.contains("js-anim")) return;

    const grids = Array.from(document.querySelectorAll<HTMLElement>("[data-stagger]"));
    if (grids.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      grids.forEach((g) => g.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    grids.forEach((g) => io.observe(g));
    return () => io.disconnect();
  }, [router.asPath]);

  return (
    <div className={`${fraunces.variable} ${archivo.variable} ${jetbrains.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
