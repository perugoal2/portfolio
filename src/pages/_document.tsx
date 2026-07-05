import { Html, Head, Main, NextScript } from "next/document";

// Pre-paint: opt into scroll-reveal only when the user allows motion, so the
// hidden state never applies for no-JS or reduced-motion (content stays visible).
const enableAnim = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js-anim')}}catch(e){}`;

// Failsafe: if React never hydrates / no IntersectionObserver, reveal everything
// so a section can never ship blank.
const revealFailsafe = `setTimeout(function(){try{document.querySelectorAll('[data-stagger]').forEach(function(e){e.classList.add('is-in')});document.querySelectorAll('.dev-tree').forEach(function(e){e.classList.add('in-view')})}catch(e){}},2600)`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="mask-icon" href="/favicon.svg" color="#8b5cff" />
        <script dangerouslySetInnerHTML={{ __html: enableAnim }} />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script dangerouslySetInnerHTML={{ __html: revealFailsafe }} />
      </body>
    </Html>
  );
}
