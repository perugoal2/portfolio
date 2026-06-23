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

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-stagger], .dev-tree"),
    );
    if (targets.length === 0) return;

    const reveal = (el: Element) =>
      el.classList.add(el.classList.contains("dev-tree") ? "in-view" : "is-in");

    if (!("IntersectionObserver" in window)) {
      targets.forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target);
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [router.asPath]);

  return (
    <div className={`${fraunces.variable} ${archivo.variable} ${jetbrains.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
