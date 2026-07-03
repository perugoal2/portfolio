import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { siteProfile } from "@/lib/site";
import type { PropsWithChildren, ReactNode } from "react";

function HeaderIconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center border border-line text-bone-dim transition hover:border-signal hover:text-signal"
    >
      {children}
    </a>
  );
}

const navigation = [
  { href: "/", label: "Index" },
  { href: "/projects", label: "Work" },
  { href: "/blog", label: "Notes" },
  { href: "/about", label: "Profile" },
];

type LayoutProps = PropsWithChildren<{
  title: string;
  description: string;
}>;

export function Layout({ title, description, children }: LayoutProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`${title} — Peru N`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <div className="blueprint" aria-hidden="true" />

      <div className="relative z-10 min-h-screen text-bone">
        {/* top hairline + running header */}
        <header className="sticky top-0 z-30 border-b border-line bg-ink/80 backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:gap-6 sm:px-8 lg:px-10">
            <Link href="/" className="group flex items-baseline gap-3">
              <span className="font-display text-xl font-semibold tracking-tight text-bone">
                Peru<span className="text-signal">.</span>N
              </span>
              <span className="tag hidden lg:inline">Architect / Cloud / Security</span>
            </Link>

            <div className="flex items-center gap-5">
              <nav className="hidden items-center gap-1 md:flex">
                {navigation.map((item, i) => {
                  const isHome = item.href === "/";
                  const isActive = isHome
                    ? router.pathname === item.href
                    : router.pathname === item.href ||
                      router.pathname.startsWith(`${item.href}/`);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`group flex items-baseline gap-1.5 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] transition ${
                        isActive ? "text-bone" : "text-bone-dim hover:text-bone"
                      }`}
                    >
                      <span className={isActive ? "text-signal" : "text-bone-faint"}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="relative">
                        {item.label}
                        <span
                          className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-signal transition-transform duration-300 ${
                            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                          }`}
                        />
                      </span>
                    </Link>
                  );
                })}
              </nav>

              {/* compact nav on small screens */}
              <nav className="flex items-center gap-2.5 md:hidden sm:gap-3">
                {navigation.map((item) => {
                  const isHome = item.href === "/";
                  const isActive = isHome
                    ? router.pathname === item.href
                    : router.pathname.startsWith(item.href) && item.href !== "/";
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`font-mono text-[0.7rem] uppercase tracking-[0.06em] sm:tracking-[0.12em] ${
                        isActive ? "text-signal" : "text-bone-dim"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="hidden items-center gap-2 sm:flex">
                <HeaderIconLink href={siteProfile.githubUrl} label="GitHub">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.596 2 12.266c0 4.535 2.865 8.383 6.839 9.741.5.096.682-.223.682-.495 0-.245-.009-.894-.014-1.754-2.782.618-3.37-1.388-3.37-1.388-.455-1.19-1.11-1.507-1.11-1.507-.908-.637.069-.624.069-.624 1.004.072 1.532 1.06 1.532 1.06.892 1.57 2.341 1.117 2.91.854.091-.664.349-1.118.635-1.375-2.221-.26-4.555-1.14-4.555-5.072 0-1.12.39-2.036 1.029-2.754-.103-.261-.446-1.31.098-2.73 0 0 .84-.277 2.75 1.052A9.32 9.32 0 0 1 12 6.84c.85.004 1.706.118 2.505.346 1.909-1.329 2.747-1.052 2.747-1.052.546 1.42.203 2.469.1 2.73.64.718 1.027 1.634 1.027 2.754 0 3.941-2.338 4.809-4.566 5.064.359.318.679.946.679 1.907 0 1.376-.012 2.486-.012 2.823 0 .275.18.596.688.494C19.138 20.646 22 16.799 22 12.266 22 6.596 17.523 2 12 2Z" />
                  </svg>
                </HeaderIconLink>
                <HeaderIconLink href={siteProfile.linkedinUrl} label="LinkedIn">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3C4.17 3 3.3 3.88 3.3 4.97S4.17 6.94 5.25 6.94c1.09 0 1.97-.88 1.97-1.97C7.22 3.88 6.34 3 5.25 3Zm14.45 9.86c0-3.46-1.85-5.07-4.32-5.07-1.99 0-2.88 1.1-3.37 1.87V8.5H8.63c.04.76 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.89-1.38 1.92-1.38 1.35 0 1.89 1.04 1.89 2.57V20h3.38v-7.14Z" />
                  </svg>
                </HeaderIconLink>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10 sm:px-8 lg:px-10">
          <main>{children}</main>

          <footer className="mt-24 border-t border-line pt-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-md">
                <p className="tag tag--signal">
                  <span className="marker">§</span> Colophon
                </p>
                <p className="mt-3 font-display text-2xl text-bone">
                  {siteProfile.name}
                </p>
                <p className="mt-2 text-sm leading-7 text-bone-dim">
                  {siteProfile.headline}. Architecture case studies, real projects,
                  and practical security thinking — set in a running blueprint.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <p className="tag">Elsewhere</p>
                <div className="flex flex-wrap gap-4 font-mono text-xs uppercase tracking-[0.16em]">
                  <a href={siteProfile.githubUrl} target="_blank" rel="noreferrer" className="rl-link text-bone-dim hover:text-bone">
                    GitHub
                  </a>
                  <a href={siteProfile.linkedinUrl} target="_blank" rel="noreferrer" className="rl-link text-bone-dim hover:text-bone">
                    LinkedIn
                  </a>
                  <a href={siteProfile.emailUrl} className="rl-link text-bone-dim hover:text-bone">
                    Email
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-1 border-t border-line pt-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-bone-faint sm:flex-row sm:justify-between">
              <span>© {new Date().getFullYear()} — All systems drafted by hand</span>
              <span>Rev. A · Redline Blueprint</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
